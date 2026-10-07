// Main Game Engine & Controller for GraphLand 1.0 with Kapil
import { GRAPH_LEVELS } from "./data/curriculum.js";
import { FINAL_100_QUIZ } from "./data/final100Quiz.js";
import { soundEngine } from "./audio.js";
import { GraphVisualizer } from "./canvas/graphVisualizer.js";
import { downloadBoardingPass } from "./canvas/boardingPassGenerator.js";
import { downloadBadge } from "./canvas/badgeGenerator.js";
import { downloadCertificatePNG, downloadCertificatePDF } from "./canvas/certificateGenerator.js";

class GraphLandApp {
  constructor() {
    this.levels = GRAPH_LEVELS;
    this.finalQuiz = FINAL_100_QUIZ;
    this.currentLevelId = 0;
    this.selectedLang = "python";
    this.visualizer = null;

    // Exam state
    this.examTimer = null;
    this.examTimeRemaining = 100 * 60; // 100 minutes in seconds (1 min per MCQ)
    this.examUserAnswers = {};
    this.examActiveQIndex = 0;

    this.loadState();
    this.initDOM();
    this.initPWA();
  }

  loadState() {
    const defaultState = {
      learnerName: "",
      boarded: false,
      initialPnr: "",
      unlockedLevel: 0,
      levelPnrs: {}, // { 0: "PNR-...", 1: "PNR-..." }
      completedLevels: [],
      examAttempts: 0,
      examLockedUntil: 0,
      examPassed: false,
      examBestScore: 0,
      finalPnr: ""
    };

    try {
      const saved = localStorage.getItem("graphland_state_v1");
      this.state = saved ? { ...defaultState, ...JSON.parse(saved) } : defaultState;
      if (!this.state.levelPnrs) this.state.levelPnrs = {};
      if (this.state.boarded && !this.state.levelPnrs[0]) {
        this.state.levelPnrs[0] = this.state.initialPnr || this.generateRandomPNR("GL0-JODHPUR");
      }
    } catch (e) {
      this.state = defaultState;
    }
  }

  saveState() {
    try {
      localStorage.setItem("graphland_state_v1", JSON.stringify(this.state));
    } catch (e) {
      console.warn("Storage quota or error", e);
    }
  }

  generateRandomPNR(prefix = "GL") {
    const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
    let code = "";
    for (let i = 0; i < 5; i++) {
      code += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return `PNR-${prefix}-${code}`;
  }

  initDOM() {
    this.renderHeaderStatus();
    this.bindGlobalEvents();

    if (!this.state.boarded || !this.state.learnerName) {
      this.showScreen("screen-checkin");
    } else {
      this.showScreen("screen-level");
      this.loadLevel(this.state.unlockedLevel);
    }
  }

  renderHeaderStatus() {
    const nameEl = document.getElementById("header-cadet-name");
    const pnrEl = document.getElementById("header-current-pnr");
    const lvlEl = document.getElementById("header-unlocked-level");

    if (nameEl) nameEl.textContent = this.state.learnerName || "CADET";
    const curPnr = this.state.levelPnrs[this.currentLevelId] || this.state.initialPnr || "NOT ISSUED";
    if (pnrEl) pnrEl.textContent = curPnr;
    if (lvlEl) lvlEl.textContent = this.state.unlockedLevel === 0 ? "REALM 0 (JODHPUR)" : `LEVEL ${this.state.unlockedLevel} / 7`;
  }

  showScreen(screenId) {
    document.querySelectorAll(".game-screen").forEach(s => s.classList.remove("active"));
    const target = document.getElementById(screenId);
    if (target) target.classList.add("active");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  bindGlobalEvents() {
    // Sound Toggle
    const soundBtn = document.getElementById("btn-sound-toggle");
    if (soundBtn) {
      soundBtn.addEventListener("click", () => {
        const isMuted = soundEngine.toggleMute();
        soundBtn.textContent = isMuted ? "🔇 Muted" : "🔊 Sound ON";
        soundBtn.classList.toggle("btn-muted", isMuted);
      });
    }

    // Boarding Pass Form
    const checkinForm = document.getElementById("checkin-form");
    if (checkinForm) {
      checkinForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const input = document.getElementById("input-cadet-name");
        const name = (input ? input.value : "").trim();
        if (!name) return alert("Please enter your name to board the flight to GraphLand!");

        soundEngine.playSuccess();
        this.state.learnerName = name;
        this.state.boarded = true;
        this.state.initialPnr = this.generateRandomPNR("INIT");
        this.state.levelPnrs[0] = this.generateRandomPNR("GL0-JODHPUR");
        this.saveState();

        this.renderHeaderStatus();
        this.showBoardingPassModal();
      });
    }

    // Modal Boarding Pass Close & Start
    const btnStartJourney = document.getElementById("btn-start-journey");
    if (btnStartJourney) {
      btnStartJourney.addEventListener("click", () => {
        soundEngine.playLevelUp();
        document.getElementById("modal-boarding-pass").classList.remove("open");
        this.showScreen("screen-level");
        this.loadLevel(0);
      });
    }

    // Download Initial Boarding Pass
    const btnDownloadPass = document.getElementById("btn-download-pass");
    if (btnDownloadPass) {
      btnDownloadPass.addEventListener("click", () => {
        soundEngine.playClick();
        downloadBoardingPass(this.state.learnerName, this.state.initialPnr);
      });
    }

    // Level Navigator Buttons
    this.renderLevelSelector();

    // Language switcher tabs
    document.querySelectorAll(".lang-tab").forEach(tab => {
      tab.addEventListener("click", (e) => {
        soundEngine.playClick();
        document.querySelectorAll(".lang-tab").forEach(t => t.classList.remove("active"));
        tab.classList.add("active");
        this.selectedLang = tab.dataset.lang;
        this.renderCodeSnippet();
      });
    });

    // Copy Code Button
    const btnCopyCode = document.getElementById("btn-copy-code");
    if (btnCopyCode) {
      btnCopyCode.addEventListener("click", () => {
        soundEngine.playClick();
        const codeText = document.getElementById("code-display")?.innerText || "";
        navigator.clipboard.writeText(codeText).then(() => {
          const original = btnCopyCode.textContent;
          btnCopyCode.textContent = "✓ Copied!";
          setTimeout(() => (btnCopyCode.textContent = original), 2000);
        });
      });
    }

    // Reset Progress
    const btnReset = document.getElementById("btn-reset-game");
    if (btnReset) {
      btnReset.addEventListener("click", () => {
        if (confirm("Are you sure you want to reset your expedition progress? This will reset your levels and PNRs.")) {
          localStorage.removeItem("graphland_state_v1");
          window.location.reload();
        }
      });
    }
  }

  showBoardingPassModal() {
    const modal = document.getElementById("modal-boarding-pass");
    if (!modal) return;
    document.getElementById("modal-pass-name").textContent = this.state.learnerName.toUpperCase();
    document.getElementById("modal-pass-pnr").textContent = this.state.initialPnr;
    modal.classList.add("open");
  }

  renderLevelSelector() {
    const container = document.getElementById("level-nav-container");
    if (!container) return;
    container.innerHTML = "";

    this.levels.forEach(lvl => {
      const btn = document.createElement("button");
      btn.className = "level-nav-btn";
      const isUnlocked = lvl.id <= this.state.unlockedLevel;
      const isCurrent = lvl.id === this.currentLevelId;

      if (!isUnlocked) {
        btn.classList.add("locked");
        btn.innerHTML = `<span>🔒 L${lvl.id}: ${lvl.badgeName}</span>`;
        btn.addEventListener("click", () => {
          soundEngine.playOops();
          alert(`Hold on, Explorer! Level ${lvl.id} is locked. You must complete Level ${this.state.unlockedLevel} first with Kapil!`);
        });
      } else {
        if (isCurrent) btn.classList.add("active");
        if (this.state.completedLevels.includes(lvl.id)) btn.classList.add("completed");
        btn.innerHTML = `<span>${lvl.badgeIcon} L${lvl.id}: ${lvl.badgeName}</span>`;
        btn.addEventListener("click", () => {
          soundEngine.playClick();
          this.loadLevel(lvl.id);
        });
      }
      container.appendChild(btn);
    });

    // Final Exam Button
    const examBtn = document.createElement("button");
    examBtn.className = "level-nav-btn final-exam-nav-btn";
    const allCompleted = [0, 1, 2, 3, 4, 5, 6, 7].every(id => this.state.completedLevels.includes(id));

    if (!allCompleted) {
      examBtn.classList.add("locked");
      examBtn.innerHTML = `<span>🔒 Grand Final Exam (100 MCQs)</span>`;
      examBtn.addEventListener("click", () => {
        soundEngine.playOops();
        alert("The Grand Final Exam is locked! You must complete all realms from Level 0 (Jodhpur) to Level 7 to unlock the 100 MCQs Certification Exam.");
      });
    } else {
      examBtn.innerHTML = `<span>👑 Grand Final Exam (100 MCQs)</span>`;
      examBtn.addEventListener("click", () => {
        soundEngine.playClick();
        this.openFinalExamPortal();
      });
    }
    container.appendChild(examBtn);
  }

  loadLevel(levelId) {
    this.currentLevelId = levelId;
    const level = this.levels.find(l => l.id === levelId);
    if (!level) return;

    this.renderLevelSelector();
    this.renderHeaderStatus();

    // Render level headers
    document.getElementById("level-badge-icon").textContent = level.badgeIcon;
    document.getElementById("level-title").textContent = level.title;
    document.getElementById("level-subtitle").textContent = level.subtitle;
    document.getElementById("level-theme-tag").textContent = level.badgeName;
    document.getElementById("level-theme-tag").style.borderColor = level.themeColor;
    document.getElementById("level-theme-tag").style.color = level.themeColor;

    // Level PNR Display
    const lvlPnr = this.state.levelPnrs[level.id] || "PENDING";
    document.getElementById("level-pnr-tag").textContent = `LEVEL PNR: ${lvlPnr}`;

    // Story with Kapil
    document.getElementById("kapil-quote-text").textContent = `"${level.story.kapilQuote}"`;
    document.getElementById("kapil-context-text").textContent = level.story.context;

    // Theory Sections
    const theoryContainer = document.getElementById("theory-container");
    theoryContainer.innerHTML = "";
    level.theory.forEach(t => {
      const section = document.createElement("div");
      section.className = "theory-card";
      section.innerHTML = `
        <h3>${t.heading}</h3>
        <div class="theory-body">${this.renderMarkdown(t.content)}</div>
      `;
      theoryContainer.appendChild(section);
    });

    // Oops Moment
    const oopsCard = document.getElementById("oops-card");
    if (oopsCard) {
      oopsCard.innerHTML = `
        <div class="oops-header">
          <span class="oops-icon">⚠️</span>
          <h4>${level.oopsMoment.title}</h4>
        </div>
        <p class="oops-scenario"><strong>Scenario:</strong> ${level.oopsMoment.scenario}</p>
        <p class="oops-failure"><strong>Why It Crashes:</strong> ${level.oopsMoment.whyItFails}</p>
        <blockquote class="oops-kapil">💡 ${level.oopsMoment.kapilInsight}</blockquote>
      `;
      oopsCard.onclick = () => soundEngine.playOops();
    }

    // Aaha Moment
    const aahaCard = document.getElementById("aaha-card");
    if (aahaCard) {
      aahaCard.innerHTML = `
        <div class="aaha-header">
          <span class="aaha-icon">✨</span>
          <h4>${level.aahaMoment.title}</h4>
        </div>
        <p class="aaha-body">${level.aahaMoment.content}</p>
        <div class="aaha-tag">✦ EUREKA MOMENT VERIFIED BY KAPIL ✦</div>
      `;
      aahaCard.onclick = () => soundEngine.playAaha();
    }

    // Code Snippet
    this.renderCodeSnippet();

    // Interactive Graph Canvas
    if (!this.visualizer) {
      this.visualizer = new GraphVisualizer("graph-canvas");
    }
    this.visualizer.loadGraph(level.interactiveDefaultGraph, level.themeColor);

    // Setup Canvas algorithm controls
    this.setupVisualizerControls(level);

    // Mini-Game
    this.renderMiniGame(level);

    // Level Quiz
    this.renderLevelQuiz(level);

    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  setupVisualizerControls(level) {
    const btnBFS = document.getElementById("btn-sim-bfs");
    const btnDFS = document.getElementById("btn-sim-dfs");
    const btnDijkstra = document.getElementById("btn-sim-dijkstra");
    const btnResetSim = document.getElementById("btn-sim-reset");
    const simLog = document.getElementById("sim-status-log");

    const updateLog = (step) => {
      if (simLog) simLog.textContent = step.message;
    };

    if (btnBFS) {
      btnBFS.onclick = () => {
        soundEngine.playClick();
        if (simLog) simLog.textContent = "Starting BFS simulation...";
        this.visualizer.runBFS(0, updateLog);
      };
    }

    if (btnDFS) {
      btnDFS.onclick = () => {
        soundEngine.playClick();
        if (simLog) simLog.textContent = "Starting DFS simulation...";
        this.visualizer.runDFS(0, updateLog);
      };
    }

    if (btnDijkstra) {
      btnDijkstra.onclick = () => {
        soundEngine.playClick();
        if (simLog) simLog.textContent = "Starting Dijkstra simulation...";
        this.visualizer.runDijkstra(0, updateLog);
      };
    }

    if (btnResetSim) {
      btnResetSim.onclick = () => {
        soundEngine.playClick();
        this.visualizer.loadGraph(level.interactiveDefaultGraph, level.themeColor);
        if (simLog) simLog.textContent = "Simulation reset. Nodes can be dragged freely!";
      };
    }
  }

  renderCodeSnippet() {
    const level = this.levels.find(l => l.id === this.currentLevelId);
    if (!level) return;
    const codeDisplay = document.getElementById("code-display");
    const langLabel = document.getElementById("code-lang-indicator");
    if (codeDisplay) {
      codeDisplay.textContent = level.codeSolutions[this.selectedLang] || "// Code solution loading...";
    }
    if (langLabel) {
      langLabel.textContent = this.selectedLang.toUpperCase();
    }
  }

  renderMiniGame(level) {
    const game = level.miniGame;
    const container = document.getElementById("minigame-container");
    if (!container) return;

    container.innerHTML = `
      <div class="minigame-card">
        <div class="minigame-header">
          <span class="game-pad-icon">🎮</span>
          <h4>${game.title}</h4>
        </div>
        <p class="minigame-instruction">${game.instructions}</p>
        <div class="minigame-options">
          ${game.options.map((opt, idx) => `
            <button class="minigame-opt-btn" data-index="${idx}">
              <span class="opt-num">${String.fromCharCode(65 + idx)}.</span>
              <span>${opt}</span>
            </button>
          `).join("")}
        </div>
        <div class="minigame-feedback" id="minigame-feedback" style="display:none;"></div>
      </div>
    `;

    container.querySelectorAll(".minigame-opt-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        const selected = parseInt(btn.dataset.index, 10);
        const fb = document.getElementById("minigame-feedback");
        fb.style.display = "block";
        if (selected === game.correctIndex) {
          soundEngine.playAaha();
          btn.classList.add("correct");
          fb.className = "minigame-feedback success";
          fb.innerHTML = `<strong>✨ Correct Calibration!</strong> ${game.explanation}`;
        } else {
          soundEngine.playOops();
          btn.classList.add("wrong");
          fb.className = "minigame-feedback error";
          fb.innerHTML = `<strong>⚠️ Oops! Try again:</strong> That option breaks graph invariants. Hint: revisit the theorem!`;
        }
      });
    });
  }

  renderLevelQuiz(level) {
    const quiz = level.quiz;
    const container = document.getElementById("level-quiz-container");
    if (!container) return;

    const userAnswers = {};

    container.innerHTML = `
      <div class="level-quiz-header">
        <h4>⚔️ Realm Mastery Checkpoint: 3 Gateway Questions</h4>
        <p>Answer all 3 correctly to prove mastery to Kapil and mint your Level ${level.id} PNR Badge!</p>
      </div>
      <div class="quiz-questions-list">
        ${quiz.map((q, qIdx) => `
          <div class="level-quiz-q" data-qindex="${qIdx}">
            <p class="quiz-q-title"><strong>Q${qIdx + 1}:</strong> ${q.question}</p>
            <div class="quiz-options-group">
              ${q.options.map((opt, optIdx) => `
                <label class="quiz-option-label">
                  <input type="radio" name="level_q_${qIdx}" value="${optIdx}">
                  <span>${opt}</span>
                </label>
              `).join("")}
            </div>
            <div class="q-explanation" id="q_exp_${qIdx}" style="display:none;"></div>
          </div>
        `).join("")}
      </div>
      <button class="btn btn-primary btn-submit-level-quiz" id="btn-submit-level-quiz">
        Verify & Unlock Level ${level.id} Badge ➔
      </button>
      <div id="level-quiz-result" class="level-quiz-result" style="display:none;"></div>
    `;

    container.querySelectorAll("input[type=radio]").forEach(radio => {
      radio.addEventListener("change", (e) => {
        soundEngine.playClick();
        const qIndex = parseInt(e.target.name.replace("level_q_", ""), 10);
        userAnswers[qIndex] = parseInt(e.target.value, 10);
      });
    });

    const submitBtn = document.getElementById("btn-submit-level-quiz");
    submitBtn.addEventListener("click", () => {
      if (Object.keys(userAnswers).length < quiz.length) {
        soundEngine.playOops();
        return alert("Please answer all 3 questions before submitting your checkpoint!");
      }

      let correctCount = 0;
      quiz.forEach((q, i) => {
        const isCorrect = userAnswers[i] === q.correctIndex;
        const expEl = document.getElementById(`q_exp_${i}`);
        expEl.style.display = "block";
        if (isCorrect) {
          correctCount++;
          expEl.className = "q-explanation success";
          expEl.innerHTML = `✓ <strong>Correct:</strong> ${q.explanation}`;
        } else {
          expEl.className = "q-explanation error";
          expEl.innerHTML = `✗ <strong>Incorrect:</strong> ${q.explanation}`;
        }
      });

      const resEl = document.getElementById("level-quiz-result");
      resEl.style.display = "block";

      if (correctCount === quiz.length) {
        soundEngine.playLevelUp();
        resEl.className = "level-quiz-result success";
        resEl.innerHTML = `
          <h3>🎉 Level ${level.id} Conquered! (3 / 3 Correct)</h3>
          <p>Kapil nods with pride! A new unique Level PNR has been generated for your badge.</p>
        `;

        // Mark completed
        if (!this.state.completedLevels.includes(level.id)) {
          this.state.completedLevels.push(level.id);
        }

        // Unlock next level
        if (level.id === this.state.unlockedLevel && this.state.unlockedLevel < 7) {
          this.state.unlockedLevel++;
          const nextLvl = this.levels.find(l => l.id === this.state.unlockedLevel);
          this.state.levelPnrs[this.state.unlockedLevel] = this.generateRandomPNR(
            nextLvl ? nextLvl.pnrPrefix : "GL"
          );
        }

        this.saveState();
        this.renderLevelSelector();
        this.renderHeaderStatus();

        // Show Badge Modal
        this.showLevelClearedModal(level);
      } else {
        soundEngine.playOops();
        resEl.className = "level-quiz-result error";
        resEl.innerHTML = `
          <h3>⚠️ Realm Gate Closed (${correctCount} / 3 Correct)</h3>
          <p>Review the theory and solutions above, then try the questions again to conquer this realm.</p>
        `;
      }
    });
  }

  showLevelClearedModal(level) {
    const modal = document.getElementById("modal-level-cleared");
    if (!modal) return;

    const levelPnr = this.state.levelPnrs[level.id];
    document.getElementById("modal-cleared-title").textContent = `Level ${level.id} Cleared: ${level.badgeName}`;
    document.getElementById("modal-cleared-pnr").textContent = levelPnr;
    document.getElementById("modal-cleared-name").textContent = this.state.learnerName.toUpperCase();

    const btnDownloadBadge = document.getElementById("btn-download-level-badge");
    btnDownloadBadge.onclick = () => {
      soundEngine.playClick();
      downloadBadge(level, this.state.learnerName, levelPnr);
    };

    const btnProceed = document.getElementById("btn-proceed-next-level");
    if (level.id < 7) {
      btnProceed.textContent = `Advance to Level ${level.id + 1} ➔`;
      btnProceed.onclick = () => {
        soundEngine.playClick();
        modal.classList.remove("open");
        this.loadLevel(level.id + 1);
      };
    } else {
      btnProceed.textContent = `Unlock Grand Final Exam Portal ➔`;
      btnProceed.onclick = () => {
        soundEngine.playClick();
        modal.classList.remove("open");
        this.openFinalExamPortal();
      };
    }

    modal.classList.add("open");
  }

  // GRAND FINAL EXAM (100 MCQs)
  openFinalExamPortal() {
    this.showScreen("screen-final-exam");

    const now = Date.now();
    if (this.state.examLockedUntil && now < this.state.examLockedUntil) {
      this.renderExamLockedState();
      return;
    }

    if (this.state.examPassed) {
      this.renderExamPassedView();
      return;
    }

    this.renderExamIntroView();
  }

  renderExamLockedState() {
    const container = document.getElementById("final-exam-container");
    const remainingMs = this.state.examLockedUntil - Date.now();
    const hours = Math.floor(remainingMs / (1000 * 60 * 60));
    const mins = Math.floor((remainingMs % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((remainingMs % (1000 * 60)) / 1000);

    container.innerHTML = `
      <div class="exam-locked-card">
        <div class="locked-icon">🔒</div>
        <h2>ASSESSMENT LOCKED FOR 24 HOURS</h2>
        <p class="lock-sub">You have exhausted your initial assessment attempt and your single allowed retake. By GraphLand regulations, this certification assessment is locked for 24 hours.</p>
        <div class="cooldown-timer-box">
          <span class="timer-label">LOCKED ASSESSMENT REMAINING:</span>
          <span class="timer-digits" id="lock-countdown">${String(hours).padStart(2, "0")}:${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}</span>
        </div>
        <blockquote class="kapil-lockout-quote">
          "Don't be discouraged, explorer! Great graph theoreticians iterate through adversity. Use this 24-hour lockout interval to revisit Realms 0 through 7, study the code implementations in C, C++, Java, and Python, and return with unstoppable mastery." - Kapil
        </blockquote>
        <button class="btn btn-secondary" id="btn-back-to-levels">Return to Graph Realms</button>
      </div>
    `;

    document.getElementById("btn-back-to-levels")?.addEventListener("click", () => {
      soundEngine.playClick();
      this.showScreen("screen-level");
      this.loadLevel(0);
    });

    // Update countdown every second
    const interval = setInterval(() => {
      const rem = this.state.examLockedUntil - Date.now();
      if (rem <= 0) {
        clearInterval(interval);
        this.state.examLockedUntil = 0;
        this.saveState();
        this.openFinalExamPortal();
      } else {
        const h = Math.floor(rem / (1000 * 60 * 60));
        const m = Math.floor((rem % (1000 * 60 * 60)) / (1000 * 60));
        const s = Math.floor((rem % (1000 * 60)) / 1000);
        const el = document.getElementById("lock-countdown");
        if (el) el.textContent = `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
      }
    }, 1000);
  }

  renderExamIntroView() {
    const container = document.getElementById("final-exam-container");
    const attemptsLeft = 2 - this.state.examAttempts;

    container.innerHTML = `
      <div class="exam-intro-card">
        <div class="exam-header-banner">
          <span class="crown-icon">👑</span>
          <h2>THE GRAND FINAL EXAM // 100 MCQS</h2>
          <p class="exam-tag">Official FAANG Graph Competency Certification Assessment</p>
        </div>

        <div class="exam-rules-grid">
          <div class="rule-box">
            <span class="rule-icon">📋</span>
            <strong>100 Questions</strong>
            <span>Covering all 7 graph domains from basic to advanced</span>
          </div>
          <div class="rule-box">
            <span class="rule-icon">⏱️</span>
            <strong>100 Minutes Countdown</strong>
            <span>Timed assessment (1 min per MCQ) with automatic submission at 00:00</span>
          </div>
          <div class="rule-box">
            <span class="rule-icon">🎯</span>
            <strong>90% Passing Score</strong>
            <span>Requires at least 90 correct answers to earn Certificate</span>
          </div>
          <div class="rule-box">
            <span class="rule-icon">🔄</span>
            <strong>Strict Retake Policy</strong>
            <span>Attempts remaining: <span class="badge-attempt">${attemptsLeft}</span> (Only 1 retake, then locked assessment for 24h)</span>
          </div>
        </div>

        <div class="exam-kapil-advice">
          <strong>Mentor Kapil's Final Briefing:</strong>
          <p>"You have traveled far from the Kingdom of Vertices to the Master's Lair of Flows. Pace yourself with 100 minutes on the clock, read every constraint carefully, and trust your mathematical invariants. GraphLand believes in you!"</p>
        </div>

        <button class="btn btn-primary btn-large" id="btn-start-exam-now">
          Enter Exam Arena & Start 100-Min Timer ➔
        </button>
      </div>
    `;

    document.getElementById("btn-start-exam-now")?.addEventListener("click", () => {
      soundEngine.playLevelUp();
      this.startFinalExam();
    });
  }

  startFinalExam() {
    this.examUserAnswers = {};
    this.examActiveQIndex = 0;
    this.examTimeRemaining = 100 * 60; // 100 minutes (6000 seconds)

    this.renderExamArena();
    this.startExamTimer();
  }

  startExamTimer() {
    if (this.examTimer) clearInterval(this.examTimer);

    this.examTimer = setInterval(() => {
      this.examTimeRemaining--;

      const totalSecs = this.examTimeRemaining;
      const mins = Math.floor(totalSecs / 60);
      const secs = totalSecs % 60;
      const timerDisplay = document.getElementById("exam-live-timer");
      if (timerDisplay) {
        timerDisplay.textContent = `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
        if (this.examTimeRemaining <= 300) {
          timerDisplay.classList.add("warning");
          if (this.examTimeRemaining % 10 === 0) soundEngine.playTimerTick();
        }
      }

      if (this.examTimeRemaining <= 0) {
        clearInterval(this.examTimer);
        alert("Time is up! Submitting your final examination now...");
        this.submitFinalExam();
      }
    }, 1000);
  }

  renderExamArena() {
    const container = document.getElementById("final-exam-container");
    container.innerHTML = `
      <div class="exam-arena">
        <div class="arena-header">
          <div class="arena-title">
            <h3>FINAL 100 MCQS EXAMINATION</h3>
            <span class="candidate-tag">Candidate: ${this.state.learnerName.toUpperCase()}</span>
          </div>
          <div class="arena-timer-box">
            <span class="timer-title">TIME REMAINING:</span>
            <span class="timer-digits" id="exam-live-timer">100:00</span>
          </div>
          <button class="btn btn-danger" id="btn-submit-exam-early">Submit Exam</button>
        </div>

        <div class="arena-layout">
          <div class="question-palette-panel">
            <h4>Question Navigator</h4>
            <div class="palette-grid" id="palette-grid">
              ${this.finalQuiz.map((q, idx) => `
                <button class="palette-num-btn ${idx === 0 ? "active" : ""}" data-qidx="${idx}">
                  ${idx + 1}
                </button>
              `).join("")}
            </div>
            <div class="palette-legend">
              <span><span class="legend-dot answered"></span> Answered</span>
              <span><span class="legend-dot unanswered"></span> Unanswered</span>
            </div>
          </div>

          <div class="question-view-panel" id="question-view-panel">
            <!-- Rendered by renderActiveExamQuestion -->
          </div>
        </div>
      </div>
    `;

    document.getElementById("btn-submit-exam-early")?.addEventListener("click", () => {
      const answeredCount = Object.keys(this.examUserAnswers).length;
      if (confirm(`You have answered ${answeredCount} of 100 questions. Are you sure you want to finalize your exam submission?`)) {
        this.submitFinalExam();
      }
    });

    container.querySelectorAll(".palette-num-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        soundEngine.playClick();
        const idx = parseInt(btn.dataset.qidx, 10);
        this.examActiveQIndex = idx;
        this.renderActiveExamQuestion();
      });
    });

    this.renderActiveExamQuestion();
  }

  renderActiveExamQuestion() {
    const panel = document.getElementById("question-view-panel");
    if (!panel) return;

    const q = this.finalQuiz[this.examActiveQIndex];
    const userSelected = this.examUserAnswers[this.examActiveQIndex];

    panel.innerHTML = `
      <div class="exam-q-box">
        <div class="q-meta">
          <span class="q-tag">QUESTION ${this.examActiveQIndex + 1} OF 100</span>
          <span class="q-category">Graph DS & Algorithms</span>
        </div>
        <p class="exam-q-text">${q.question}</p>

        <div class="exam-options-list">
          ${q.options.map((opt, optIdx) => `
            <label class="exam-opt-row ${userSelected === optIdx ? "selected" : ""}">
              <input type="radio" name="exam_active_opt" value="${optIdx}" ${userSelected === optIdx ? "checked" : ""}>
              <span class="opt-alpha">${String.fromCharCode(65 + optIdx)}</span>
              <span class="opt-text">${opt}</span>
            </label>
          `).join("")}
        </div>

        <div class="exam-nav-controls">
          <button class="btn btn-secondary" id="btn-prev-q" ${this.examActiveQIndex === 0 ? "disabled" : ""}>
            ◀ Previous
          </button>
          <span class="q-progress-indicator">${this.examActiveQIndex + 1} / 100</span>
          <button class="btn btn-primary" id="btn-next-q" ${this.examActiveQIndex === 99 ? "disabled" : ""}>
            Next ▶
          </button>
        </div>
      </div>
    `;

    panel.querySelectorAll("input[type=radio]").forEach(radio => {
      radio.addEventListener("change", (e) => {
        soundEngine.playClick();
        const selected = parseInt(e.target.value, 10);
        this.examUserAnswers[this.examActiveQIndex] = selected;

        // Update palette state
        const pBtn = document.querySelector(`.palette-num-btn[data-qidx="${this.examActiveQIndex}"]`);
        if (pBtn) pBtn.classList.add("answered");

        this.renderActiveExamQuestion();
      });
    });

    document.getElementById("btn-prev-q")?.addEventListener("click", () => {
      if (this.examActiveQIndex > 0) {
        soundEngine.playClick();
        this.examActiveQIndex--;
        this.updatePaletteActive();
        this.renderActiveExamQuestion();
      }
    });

    document.getElementById("btn-next-q")?.addEventListener("click", () => {
      if (this.examActiveQIndex < 99) {
        soundEngine.playClick();
        this.examActiveQIndex++;
        this.updatePaletteActive();
        this.renderActiveExamQuestion();
      }
    });
  }

  updatePaletteActive() {
    document.querySelectorAll(".palette-num-btn").forEach((btn, idx) => {
      btn.classList.toggle("active", idx === this.examActiveQIndex);
    });
  }

  submitFinalExam() {
    if (this.examTimer) {
      clearInterval(this.examTimer);
      this.examTimer = null;
    }

    let correctCount = 0;
    this.finalQuiz.forEach((q, idx) => {
      if (this.examUserAnswers[idx] === q.correctIndex) {
        correctCount++;
      }
    });

    const scorePercent = correctCount; // Since 100 questions, count = %
    this.state.examAttempts++;
    this.state.examBestScore = Math.max(this.state.examBestScore, scorePercent);

    if (scorePercent >= 90) {
      this.state.examPassed = true;
      this.state.finalPnr = this.generateRandomPNR("HONORS");
      this.saveState();
      soundEngine.playVictory();
      this.renderExamPassedView(scorePercent);
    } else {
      if (this.state.examAttempts >= 2) {
        // Locked for 24 hours!
        this.state.examLockedUntil = Date.now() + 24 * 60 * 60 * 1000;
      }
      this.saveState();
      soundEngine.playOops();
      this.renderExamFailedView(scorePercent);
    }
  }

  renderExamPassedView(score = this.state.examBestScore) {
    const container = document.getElementById("final-exam-container");
    const pnr = this.state.finalPnr || this.generateRandomPNR("HONORS");
    this.state.finalPnr = pnr;
    this.saveState();

    container.innerHTML = `
      <div class="exam-passed-card">
        <div class="victory-banner">
          <span class="victory-emblem">🏆</span>
          <h2>CONGRATULATIONS, GRAPH MASTER!</h2>
          <p class="victory-score">SCORE: ${score} / 100 (DISTINCTION GRADE >= 90%)</p>
        </div>

        <div class="certificate-preview-box">
          <p class="cert-status-tag">✦ OFFICIAL VERIFIED CREDENTIAL ISSUED BY KAPIL ✦</p>
          <div class="cert-details">
            <p><strong>Candidate:</strong> ${this.state.learnerName.toUpperCase()}</p>
            <p><strong>Distinction Verification PNR:</strong> <span class="pnr-glow">${pnr}</span></p>
            <p><strong>Specialization:</strong> Full Spectrum Graph Algorithms (Basic to Advanced)</p>
          </div>

          <div class="cert-download-actions">
            <button class="btn btn-gold btn-large" id="btn-download-cert-png">
              📥 Download Certificate (PNG High-Res)
            </button>
            <button class="btn btn-primary btn-large" id="btn-download-cert-pdf">
              📄 Download Certificate (Official PDF)
            </button>
          </div>
        </div>

        <div class="review-solutions-section">
          <h3>Full 100 Question Exam Editorial & Solved Answers</h3>
          <div class="review-list">
            ${this.finalQuiz.map((q, idx) => {
              const userAns = this.examUserAnswers[idx];
              const isCorrect = userAns === q.correctIndex;
              return `
                <div class="review-item ${isCorrect ? "correct" : "wrong"}">
                  <p class="review-q"><strong>Q${idx + 1}:</strong> ${q.question}</p>
                  <p class="review-ans"><strong>Your Answer:</strong> ${userAns !== undefined ? q.options[userAns] : "Not Answered"} (${isCorrect ? "✓ Correct" : "✗ Incorrect"})</p>
                  <p class="review-correct"><strong>Correct Answer:</strong> ${q.options[q.correctIndex]}</p>
                  <p class="review-exp"><strong>Explanation:</strong> ${q.explanation}</p>
                </div>
              `;
            }).join("")}
          </div>
        </div>
      </div>
    `;

    document.getElementById("btn-download-cert-png")?.addEventListener("click", () => {
      soundEngine.playClick();
      downloadCertificatePNG(this.state.learnerName, score, pnr);
    });

    document.getElementById("btn-download-cert-pdf")?.addEventListener("click", () => {
      soundEngine.playClick();
      downloadCertificatePDF(this.state.learnerName, score, pnr);
    });
  }

  renderExamFailedView(score) {
    const container = document.getElementById("final-exam-container");
    const attemptsLeft = 2 - this.state.examAttempts;

    container.innerHTML = `
      <div class="exam-failed-card">
        <div class="failed-banner">
          <span class="failed-emblem">⚠️</span>
          <h2>EXAMINATION SCORE: ${score}%</h2>
          <p class="passing-threshold">Passing Grade Threshold: 90% (Score was ${score}/100)</p>
        </div>

        <div class="failed-body">
          <p>You fell short of the 90% FAANG Mastery threshold. Don't worry, rigorous engineering requires resilient iteration!</p>
          <p class="attempts-status">
            ${attemptsLeft > 0
              ? `You have <strong>${attemptsLeft} retake remaining</strong>. Review your answers below, then retake the assessment when ready.`
              : `You have used both attempts (initial assessment + single retake). The assessment is now <strong>LOCKED FOR 24 HOURS</strong>.`
            }
          </p>

          <div class="failed-actions">
            ${attemptsLeft > 0
              ? `<button class="btn btn-primary" id="btn-retake-exam">Initiate Retake Assessment ➔</button>`
              : `<button class="btn btn-secondary" id="btn-view-lockout">View 24h Locked Assessment Status</button>`
            }
            <button class="btn btn-outline" id="btn-return-study">Revisit Realms 0 - 7</button>
          </div>
        </div>

        <div class="review-solutions-section">
          <h3>Exam Solutions & Pedagogical Explanations</h3>
          <div class="review-list">
            ${this.finalQuiz.map((q, idx) => {
              const userAns = this.examUserAnswers[idx];
              const isCorrect = userAns === q.correctIndex;
              return `
                <div class="review-item ${isCorrect ? "correct" : "wrong"}">
                  <p class="review-q"><strong>Q${idx + 1}:</strong> ${q.question}</p>
                  <p class="review-ans"><strong>Your Answer:</strong> ${userAns !== undefined ? q.options[userAns] : "Not Answered"} (${isCorrect ? "✓ Correct" : "✗ Incorrect"})</p>
                  <p class="review-correct"><strong>Correct Answer:</strong> ${q.options[q.correctIndex]}</p>
                  <p class="review-exp"><strong>Explanation:</strong> ${q.explanation}</p>
                </div>
              `;
            }).join("")}
          </div>
        </div>
      </div>
    `;

    document.getElementById("btn-retake-exam")?.addEventListener("click", () => {
      soundEngine.playClick();
      this.startFinalExam();
    });

    document.getElementById("btn-view-lockout")?.addEventListener("click", () => {
      soundEngine.playClick();
      this.renderExamLockedState();
    });

    document.getElementById("btn-return-study")?.addEventListener("click", () => {
      soundEngine.playClick();
      this.showScreen("screen-level");
      this.loadLevel(0);
    });
  }

  renderMarkdown(text) {
    if (!text) return "";

    // Parse Markdown Tables
    const lines = text.split("\n");
    const outputBlocks = [];
    let inTable = false;
    let tableRows = [];

    const flushTable = () => {
      if (tableRows.length >= 2) {
        const headerRow = tableRows[0];
        const dataRows = tableRows.slice(1).filter(r => !/^[\s|:-]+$/.test(r.trim()));
        const parseCells = (row) => row.split("|").slice(1, -1).map(c => c.trim());
        const headers = parseCells(headerRow);

        let html = '<div class="table-responsive"><table class="cyber-table"><thead><tr>';
        headers.forEach(h => {
          html += `<th>${this.formatInlineMarkdown(h)}</th>`;
        });
        html += '</tr></thead><tbody>';

        dataRows.forEach(row => {
          const cells = parseCells(row);
          html += '<tr>';
          cells.forEach(c => {
            html += `<td>${this.formatInlineMarkdown(c)}</td>`;
          });
          html += '</tr>';
        });
        html += '</tbody></table></div>';
        outputBlocks.push(html);
      } else if (tableRows.length === 1) {
        outputBlocks.push(this.formatInlineMarkdown(tableRows[0]));
      }
      tableRows = [];
      inTable = false;
    };

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      const trimmed = line.trim();
      if (trimmed.startsWith("|") && trimmed.endsWith("|")) {
        inTable = true;
        tableRows.push(trimmed);
      } else {
        if (inTable) {
          flushTable();
        }
        outputBlocks.push(line);
      }
    }
    if (inTable) flushTable();

    const joined = outputBlocks.join("\n");
    return this.formatBlockMarkdown(joined);
  }

  formatInlineMarkdown(str) {
    if (!str) return "";
    return str
      .replace(/\\times/g, "×")
      .replace(/\\deg/g, "deg")
      .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
      .replace(/`([^`]+)`/g, "<code>$1</code>")
      .replace(/\$([^$]+)\$/g, '<code class="math-badge">$1</code>');
  }

  formatBlockMarkdown(text) {
    let html = text
      .replace(/### (.*?)\n/g, "<h4>$1</h4>")
      .replace(/## (.*?)\n/g, "<h3>$1</h3>")
      .replace(/\\times/g, "×")
      .replace(/\\deg/g, "deg")
      .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
      .replace(/`([^`]+)`/g, "<code>$1</code>")
      .replace(/\$([^$]+)\$/g, '<code class="math-badge">$1</code>')
      .replace(/^- (.*?)$/gm, "<li>$1</li>")
      .replace(/(<li>.*?<\/li>\n?)+/gs, "<ul>$&</ul>")
      .replace(/\n\n+/g, "<br><br>");
    return html;
  }

  initPWA() {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.register("./sw.js").catch(err => {
        console.log("Service Worker register note:", err);
      });
    }

    // PWA Install prompt listener
    let deferredPrompt;
    const installBtn = document.getElementById("btn-install-pwa");

    window.addEventListener("beforeinstallprompt", (e) => {
      e.preventDefault();
      deferredPrompt = e;
      if (installBtn) {
        installBtn.style.display = "inline-flex";
        installBtn.addEventListener("click", () => {
          installBtn.style.display = "none";
          deferredPrompt.prompt();
          deferredPrompt.userChoice.then(() => {
            deferredPrompt = null;
          });
        });
      }
    });
  }
}

// Bootstrap
window.addEventListener("DOMContentLoaded", () => {
  window.app = new GraphLandApp();
});
