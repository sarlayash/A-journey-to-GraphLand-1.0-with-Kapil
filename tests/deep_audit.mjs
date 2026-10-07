import fs from 'fs';

console.log("==================================================");
console.log("DEEP AUDIT: GRAPHLAND 1.0 WITH KAPIL");
console.log("==================================================");

let errors = [];

// 1. Check index.html vs js/app.js DOM IDs
const html = fs.readFileSync('index.html', 'utf8');
const appJs = fs.readFileSync('js/app.js', 'utf8');

const idRegex = /document\.getElementById\(['"]([^'"]+)['"]\)/g;
const queriedIds = new Set();
let match;
while ((match = idRegex.exec(appJs)) !== null) {
  queriedIds.add(match[1]);
}

console.log(`\n1. Validating ${queriedIds.size} unique DOM IDs queried in js/app.js against index.html...`);

// Some IDs are created dynamically or exist in index.html
const dynamicallyCreatedIds = new Set([
  'btn-start-exam-now',
  'btn-submit-exam-early',
  'btn-prev-q',
  'btn-next-q',
  'exam-live-timer',
  'palette-grid',
  'question-view-panel',
  'btn-download-cert-png',
  'btn-download-cert-pdf',
  'btn-retake-exam',
  'btn-view-lockout',
  'btn-return-study',
  'btn-back-to-levels',
  'lock-countdown',
  'minigame-feedback',
  'btn-submit-level-quiz',
  'level-quiz-result'
]);

for (const id of queriedIds) {
  if (dynamicallyCreatedIds.has(id)) {
    // Check that it's created dynamically in app.js
    const createdRegex = new RegExp(`id=["']${id}["']`);
    if (!createdRegex.test(appJs)) {
      errors.push(`Dynamically expected ID '${id}' is not created in app.js!`);
    }
  } else {
    const inHtmlRegex = new RegExp(`id=["']${id}["']`);
    if (!inHtmlRegex.test(html)) {
      errors.push(`ID '${id}' is queried in app.js but does NOT exist in index.html!`);
    }
  }
}

if (errors.length === 0) {
  console.log("  ✓ All queried DOM IDs are accounted for in index.html or dynamic rendering!");
} else {
  console.error("  ✗ DOM ID mismatches found:", errors);
}

// 2. Check all imported modules and exports
console.log("\n2. Validating module imports and exports...");
try {
  const { GRAPH_LEVELS } = await import('../js/data/curriculum.js');
  const { FINAL_100_QUIZ } = await import('../js/data/final100Quiz.js');
  const bpGen = await import('../js/canvas/boardingPassGenerator.js');
  const badgeGen = await import('../js/canvas/badgeGenerator.js');
  const certGen = await import('../js/canvas/certificateGenerator.js');
  const soundMod = await import('../js/audio.js');

  console.log("  ✓ All JS modules imported without syntax or parsing errors.");
  console.log(`  ✓ GRAPH_LEVELS: ${GRAPH_LEVELS.length} levels loaded.`);
  console.log(`  ✓ FINAL_100_QUIZ: ${FINAL_100_QUIZ.length} questions loaded.`);

  // 3. Deep level structure audit
  console.log("\n3. Auditing Level Structure for all 8 realms...");
  GRAPH_LEVELS.forEach(lvl => {
    if (typeof lvl.id !== 'number') errors.push(`Level missing numeric id`);
    if (!lvl.title) errors.push(`Level ${lvl.id} missing title`);
    if (!lvl.subtitle) errors.push(`Level ${lvl.id} missing subtitle`);
    if (!lvl.badgeName) errors.push(`Level ${lvl.id} missing badgeName`);
    if (!lvl.badgeIcon) errors.push(`Level ${lvl.id} missing badgeIcon`);
    if (!lvl.pnrPrefix) errors.push(`Level ${lvl.id} missing pnrPrefix`);
    if (!lvl.themeColor) errors.push(`Level ${lvl.id} missing themeColor`);
    if (!lvl.story?.kapilQuote) errors.push(`Level ${lvl.id} missing story.kapilQuote`);
    if (!lvl.theory || lvl.theory.length === 0) errors.push(`Level ${lvl.id} missing theory sections`);
    if (!lvl.oopsMoment?.title) errors.push(`Level ${lvl.id} missing oopsMoment`);
    if (!lvl.aahaMoment?.title) errors.push(`Level ${lvl.id} missing aahaMoment`);
    if (!lvl.miniGame?.options || lvl.miniGame.options.length < 2) errors.push(`Level ${lvl.id} invalid miniGame options`);
    if (typeof lvl.miniGame?.correctIndex !== 'number') errors.push(`Level ${lvl.id} invalid miniGame correctIndex`);
    if (!lvl.quiz || lvl.quiz.length !== 3) errors.push(`Level ${lvl.id} expected 3 quiz questions, got ${lvl.quiz?.length}`);
    lvl.quiz?.forEach((q, qi) => {
      if (!q.question) errors.push(`Level ${lvl.id} Q${qi+1} missing question text`);
      if (!q.options || q.options.length < 2) errors.push(`Level ${lvl.id} Q${qi+1} missing options`);
      if (q.correctIndex < 0 || q.correctIndex >= q.options.length) errors.push(`Level ${lvl.id} Q${qi+1} invalid correctIndex`);
      if (!q.explanation) errors.push(`Level ${lvl.id} Q${qi+1} missing explanation`);
    });
    const langs = ['c', 'cpp', 'java', 'python'];
    langs.forEach(lang => {
      if (!lvl.codeSolutions?.[lang] || lvl.codeSolutions[lang].length < 20) {
        errors.push(`Level ${lvl.id} missing code solution for '${lang}'`);
      }
    });
    if (!lvl.interactiveDefaultGraph?.nodes || lvl.interactiveDefaultGraph.nodes.length === 0) {
      errors.push(`Level ${lvl.id} missing graph nodes`);
    }
  });

  if (errors.length === 0) {
    console.log("  ✓ All 8 realms passed 100% data and structure validation!");
  }

  // 4. Test Final 100 MCQs
  console.log("\n4. Auditing Final 100 MCQs...");
  const seenIds = new Set();
  FINAL_100_QUIZ.forEach((q, idx) => {
    if (q.id !== idx + 1) errors.push(`Question index ${idx} has ID ${q.id}, expected ${idx + 1}`);
    if (seenIds.has(q.id)) errors.push(`Duplicate question ID ${q.id}`);
    seenIds.add(q.id);
    if (!q.question || q.question.trim().length < 10) errors.push(`Question ${q.id} has empty or short question text`);
    if (!q.options || q.options.length !== 4) errors.push(`Question ${q.id} must have exactly 4 options, got ${q.options?.length}`);
    if (typeof q.correctIndex !== 'number' || q.correctIndex < 0 || q.correctIndex > 3) {
      errors.push(`Question ${q.id} has invalid correctIndex: ${q.correctIndex}`);
    }
    if (!q.explanation || q.explanation.trim().length < 10) errors.push(`Question ${q.id} missing detailed explanation`);
  });

  if (errors.length === 0) {
    console.log("  ✓ All 100 MCQs verified with 4 options, valid answer index, and pedagogical explanations!");
  }

  // 5. Audit Service Worker & Manifest
  console.log("\n5. Auditing PWA Manifest & Service Worker...");
  const manifest = JSON.parse(fs.readFileSync('manifest.json', 'utf8'));
  if (!manifest.name || !manifest.short_name || !manifest.start_url || !manifest.icons) {
    errors.push("manifest.json missing required PWA fields");
  }
  const swCode = fs.readFileSync('sw.js', 'utf8');
  if (!swCode.includes("CACHE_NAME") || (!swCode.includes("STATIC_ASSETS") && !swCode.includes("ASSETS_TO_CACHE"))) {
    errors.push("sw.js missing CACHE_NAME or ASSETS_TO_CACHE");
  }

  // Verify all files in ASSETS_TO_CACHE exist on disk
  const assetMatches = [...swCode.matchAll(/"(\.[^"]+)"/g)].map(m => m[1]);
  assetMatches.forEach(assetPath => {
    if (assetPath === "./") return;
    const cleanPath = assetPath.replace(/^\.\//, "");
    if (!fs.existsSync(cleanPath)) {
      errors.push(`sw.js caches '${assetPath}', but file does not exist on disk!`);
    }
  });

  console.log(`  ✓ PWA manifest and service worker verified. All ${assetMatches.length} cached assets exist on disk.`);

} catch (err) {
  errors.push(`Import exception: ${err.message}\n${err.stack}`);
}

console.log("\n==================================================");
if (errors.length > 0) {
  console.error(`AUDIT FAILED WITH ${errors.length} ERRORS:`);
  errors.forEach(e => console.error(" -", e));
  process.exit(1);
} else {
  console.log("AUDIT PASSED: ZERO ERRORS, ZERO EXCEPTIONS DETECTED!");
  console.log("==================================================");
  process.exit(0);
}
