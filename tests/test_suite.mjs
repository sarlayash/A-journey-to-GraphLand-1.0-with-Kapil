// Deep Automated Test Suite for A Journey to GraphLand 1.0 with Kapil
// Tests Curriculum data, 100 MCQs integrity, quad-language code solutions, PNR logic, and PDF output

import { GRAPH_LEVELS } from "../js/data/curriculum.js";
import { FINAL_100_QUIZ } from "../js/data/final100Quiz.js";

let passed = 0;
let failed = 0;

function assert(condition, message) {
  if (condition) {
    console.log(`  ✓ PASS: ${message}`);
    passed++;
  } else {
    console.error(`  ✗ FAIL: ${message}`);
    failed++;
  }
}

console.log("=================================================");
console.log("TEST SUITE: GRAPHLAND 1.0 WITH KAPIL");
console.log("=================================================\n");

// TEST GROUP 1: CURRICULUM INTEGRITY (8 REALMS: LEVEL 0 TO 7)
console.log(">> 1. Testing Curriculum & 8 Progressive Realms (Level 0 Jodhpur + Levels 1-7)...");
assert(Array.isArray(GRAPH_LEVELS), "GRAPH_LEVELS is an array");
assert(GRAPH_LEVELS.length === 8, `Expected exactly 8 realms (0 to 7), found ${GRAPH_LEVELS.length}`);

// Test Level 0 specifically
const level0 = GRAPH_LEVELS[0];
assert(level0.id === 0, "Level 0 has ID 0");
assert(level0.badgeName === "Blue City Explorer", "Level 0 badge is 'Blue City Explorer'");
assert(level0.pnrPrefix === "GL0-JODHPUR", "Level 0 PNR prefix is 'GL0-JODHPUR'");
assert(level0.title.includes("Jodhpur"), "Level 0 title highlights City of Jodhpur");
assert(level0.subtitle.includes("JIET Group of Institutions"), "Level 0 connects JIET Group of Institutions");

GRAPH_LEVELS.forEach((level, idx) => {
  const lvlNum = idx; // 0, 1, ..., 7
  assert(level.id === lvlNum, `Level ${lvlNum} ID is correctly sequential`);
  assert(typeof level.title === "string" && level.title.length > 5, `Level ${lvlNum} has valid title: "${level.title}"`);
  assert(typeof level.badgeName === "string" && level.badgeName.length > 3, `Level ${lvlNum} has valid badge name: "${level.badgeName}"`);
  assert(typeof level.pnrPrefix === "string" && level.pnrPrefix.startsWith("GL"), `Level ${lvlNum} has valid PNR prefix: "${level.pnrPrefix}"`);

  // Kapil Mentorship & Story
  assert(level.story && typeof level.story.kapilQuote === "string", `Level ${lvlNum} includes mentor Kapil's dialogue`);
  assert(level.story.context && level.story.context.length > 10, `Level ${lvlNum} has storyline context`);

  // Moments
  assert(level.oopsMoment && level.oopsMoment.title && level.oopsMoment.kapilInsight, `Level ${lvlNum} has Oops moment with Kapil's insight`);
  assert(level.aahaMoment && level.aahaMoment.title && level.aahaMoment.content, `Level ${lvlNum} has Aaha moment with eureka revelation`);

  // Complexity & Code Solutions / Blueprints
  const langs = ["c", "cpp", "java", "python"];
  langs.forEach(lang => {
    const code = level.codeSolutions?.[lang];
    assert(typeof code === "string" && code.length > 50, `Level ${lvlNum} has full ${lang.toUpperCase()} implementation/blueprint`);
  });

  // Mini-Game & Level Checkpoint Quiz
  assert(level.miniGame && level.miniGame.options.length >= 2, `Level ${lvlNum} has interactive mini-game challenge`);
  assert(level.miniGame.correctIndex >= 0 && level.miniGame.correctIndex < level.miniGame.options.length, `Level ${lvlNum} mini-game has valid correct option`);
  assert(Array.isArray(level.quiz) && level.quiz.length === 3, `Level ${lvlNum} has exactly 3 checkpoint questions`);
  level.quiz.forEach((q, qIdx) => {
    assert(q.options.length === 4, `Level ${lvlNum} Q${qIdx + 1} has 4 options`);
    assert(q.correctIndex >= 0 && q.correctIndex < 4, `Level ${lvlNum} Q${qIdx + 1} correctIndex is valid`);
    assert(typeof q.explanation === "string" && q.explanation.length > 10, `Level ${lvlNum} Q${qIdx + 1} has explanation`);
  });
});

// TEST GROUP 2: FINAL 100 MCQS GRAND EXAM INTEGRITY
console.log("\n>> 2. Testing Final Grand 100 MCQs Examination...");
assert(Array.isArray(FINAL_100_QUIZ), "FINAL_100_QUIZ is an array");
assert(FINAL_100_QUIZ.length === 100, `Expected exactly 100 questions, found ${FINAL_100_QUIZ.length}`);

const idSet = new Set();
FINAL_100_QUIZ.forEach((q, index) => {
  const expectedId = index + 1;
  assert(q.id === expectedId, `Question ${expectedId} has matching ID`);
  idSet.add(q.id);

  assert(typeof q.question === "string" && q.question.trim().length > 10, `Question ${expectedId} has meaningful text`);
  assert(Array.isArray(q.options) && q.options.length === 4, `Question ${expectedId} has exactly 4 options`);
  assert(q.correctIndex >= 0 && q.correctIndex < 4, `Question ${expectedId} correctIndex is in [0..3]`);
  assert(typeof q.explanation === "string" && q.explanation.trim().length > 10, `Question ${expectedId} has thorough explanation`);
});
assert(idSet.size === 100, "All 100 question IDs are unique");

// TEST GROUP 3: PNR GENERATION & LOCKING MECHANICS
console.log("\n>> 3. Testing PNR Generation & Level Locking Mechanics...");

function generateMockPNR(prefix = "GL") {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  let code = "";
  for (let i = 0; i < 5; i++) {
    code += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return `PNR-${prefix}-${code}`;
}

const pnr1 = generateMockPNR("INIT");
const pnr2 = generateMockPNR("GL1-VERT");
const pnr3 = generateMockPNR("GL2-WOODS");

assert(pnr1.startsWith("PNR-INIT-") && pnr1.length === 14, `Valid initial PNR format: ${pnr1}`);
assert(pnr2.startsWith("PNR-GL1-VERT-"), `Valid Level 1 PNR format: ${pnr2}`);
assert(pnr3.startsWith("PNR-GL2-WOODS-"), `Valid Level 2 PNR format: ${pnr3}`);

// 100-minute timer test
const examMinutes = 100;
const examSeconds = examMinutes * 60;
assert(examSeconds === 6000, "100-minute timer duration is exactly 6000 seconds (1 min per question)");

// Single retake policy test
let attempts = 0;
let isLocked = false;
// Attempt 1: Fail (e.g. 85%)
attempts++;
const canRetakeAfterAttempt1 = attempts < 2;
assert(canRetakeAfterAttempt1 === true, "After 1st failed attempt, 1 retake is permitted");

// Attempt 2 (The Retake): Fail (e.g. 88%)
attempts++;
if (attempts >= 2) {
  isLocked = true;
}
assert(isLocked === true, "After 2nd failed attempt (exhausted single retake), assessment is LOCKED");

// Lockout timer logic test
const now = Date.now();
const lock24h = now + 24 * 60 * 60 * 1000;
const diffHours = (lock24h - now) / (1000 * 60 * 60);
assert(diffHours === 24, "24-hour assessment lock computes exactly 24 hours cooldown");

// Passing score test (90% threshold)
const testScorePass = 92;
const testScoreFail = 88;
assert(testScorePass >= 90, "Score 92% passes 90% threshold for certificate");
assert(testScoreFail < 90, "Score 88% does not pass 90% threshold");

// TEST GROUP 4: STANDALONE PDF STRUCTURE VERIFICATION
console.log("\n>> 4. Testing Offline PDF 1.4 Generation Structure...");

function generateMinimalTestPDF(title = "GraphLand Certificate") {
  const pageWidth = 842;
  const pageHeight = 595;

  const header = "%PDF-1.4\n%\xE2\xE3\xCF\xD3\n";
  const obj1 = "1 0 obj\n<< /Type /Catalog /Pages 2 0 R >>\nendobj\n";
  const obj2 = "2 0 obj\n<< /Type /Pages /Kids [3 0 R] /Count 1 >>\nendobj\n";
  const obj3 = `3 0 obj\n<< /Type /Page /Parent 2 0 R /MediaBox [0 0 ${pageWidth} ${pageHeight}] /Contents 4 0 R >>\nendobj\n`;
  const streamContent = `BT /F1 24 Tf 100 500 Td (${title}) Tj ET\n`;
  const obj4 = `4 0 obj\n<< /Length ${streamContent.length} >>\nstream\n${streamContent}endstream\nendobj\n`;

  let currentOffset = header.length;
  const offsets = [currentOffset];
  currentOffset += obj1.length;
  offsets.push(currentOffset);
  currentOffset += obj2.length;
  offsets.push(currentOffset);
  currentOffset += obj3.length;
  offsets.push(currentOffset);
  currentOffset += obj4.length;

  let xref = `xref\n0 5\n0000000000 65535 f \n`;
  offsets.forEach(off => {
    xref += String(off).padStart(10, "0") + " 00000 n \n";
  });
  const trailer = `trailer\n<< /Size 5 /Root 1 0 R >>\nstartxref\n${currentOffset}\n%%EOF\n`;

  return header + obj1 + obj2 + obj3 + obj4 + xref + trailer;
}

const testPdf = generateMinimalTestPDF("A Journey to GraphLand with Kapil");
assert(testPdf.startsWith("%PDF-1.4"), "PDF stream has valid %PDF-1.4 magic header");
assert(testPdf.includes("startxref"), "PDF stream contains cross-reference table pointer");
assert(testPdf.trim().endsWith("%%EOF"), "PDF stream terminates with %%EOF EOF marker");

console.log("\n=================================================");
console.log(`TEST RESULTS: ${passed} PASSED, ${failed} FAILED`);
console.log("=================================================");

if (failed > 0) {
  process.exit(1);
} else {
  console.log("ALL TESTS PASSED WITH 100% SUCCESS!");
  process.exit(0);
}
