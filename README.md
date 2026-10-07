# 🚀 A Journey to GraphLand 1.0 with Kapil

**An Immersive FAANG-Style Video Game & Masterclass covering Graph Data Structures & Algorithms from Basic to Advanced.**

---

## 🎮 Highlights & Architecture

- **Mentor Kapil**: Guided storyline with mentor dialogues, hints, "Oops!" traps, and "Aaha!" eureka epiphanies.
- **7 Progressive Realms (Strict Level Progression)**:
  - 🏛️ **Level 1**: Kingdom of Vertices & Edges *(Foundations, Adjacency Matrix vs List, Degrees & Handshaking Lemma)*
  - 🌲 **Level 2**: The Whispering Woods of Traversal *(BFS, DFS, Connected Components, Undirected Cycle Detection)*
  - ⚙️ **Level 3**: The Directed Citadel & Ancient Orders *(DAGs, Kahn's BFS Topo Sort, DFS 3-Coloring, Directed Cycle Detection)*
  - 🌉 **Level 4**: The Bridges of Königsberg & Euler's Enigma *(Eulerian Paths/Circuits, Hierholzer's Algorithm, Tarjan's Bridges & Articulation Points)*
  - ⚡ **Level 5**: The Shortest Path Sanctuaries *(Dijkstra with Min-Heap, Bellman-Ford Negative Cycles, Floyd-Warshall All-Pairs)*
  - 🌲 **Level 6**: The Whispering Pines of Spanning Trees *(Kruskal's MST, Disjoint Set Union / DSU with Path Compression & Rank, Prim's Algorithm)*
  - 👑 **Level 7**: The Master's Lair - Advanced Flows & Bipartite Realms *(Bipartite 2-Coloring, Kosaraju's SCCs, Max-Flow Min-Cut Theorem & Edmonds-Karp)*
- **Quad-Language Code Labs**: Complete, verified implementations in **C**, **C++**, **Java**, and **Python** for every level with one-click copy.
- **Boarding Pass & PNR System**:
  - Enter your name at the Quantum Hyperloop Check-In terminal.
  - Automatically mints an official Boarding Pass with a unique cryptographic PNR (e.g. `PNR-INIT-XXXX`).
  - Download high-res Boarding Pass in **PNG**.
- **Level Badges with Unique Level PNR**:
  - Each level completed generates a **brand-new unique Level PNR** stamped into a holographic cyber-shield badge.
  - Downloadable as high-res **PNG** directly in your browser.
  - Cannot skip levels; subsequent realms remain locked with lock animations until unlocked.
- **👑 Grand Final Assessment (100 MCQs)**:
  - Unlocked only after conquering all 7 realms.
  - Exactly 100 comprehensive FAANG-grade MCQs across all graph algorithms.
  - **Timed Assessment**: **100-Minute** live countdown timer (1 min per MCQ) with auto-submit.
  - **Passing Score**: **90%** (90 out of 100).
  - **Strict Retake Policy**: Only **1 retake** allowed! If failed twice (initial + retake), **LOCKED ASSESSMENT FOR 24 HOURS** with live countdown timer stored persistently.
  - Full editorial and solved answers for all 100 questions.
- **Certificate of Graph Mastery**:
  - Unlocked upon achieving $\ge 90\%$.
  - Certified by Mentor Kapil and GraphLand Institute.
  - Downloadable as **High-Resolution PNG**.
  - Downloadable as **Official Vector PDF** (`.pdf`) generated 100% offline!
- **100% Offline & Installable (PWA)**:
  - Zero external CDN dependencies or audio asset downloads.
  - Pure **Web Audio API** synthesized arcade sound effects (Level up, Oops buzzer, Aaha shimmer, Victory fanfare).
  - Full Service Worker (`sw.js`) and Web Manifest (`manifest.json`) for installing on mobile phones (Android / iOS) and desktop.

---

## 💻 How to Run & Play

### Option 1: Open Directly in Any Modern Web Browser
Simply open `index.html` in Chrome, Edge, Safari, or Firefox:
```bash
start index.html
```

### Option 2: Run via Local HTTP Server (Recommended for PWA Offline Caching)
Using Node.js:
```bash
npm start
# or: npx serve -l 3000 .
```
Or using Python:
```bash
python -m http.server 3000
```
Then visit: `http://localhost:3000`

---

## 📱 How to Install on Phone for Offline Play

1. Open `http://<your-local-ip>:3000` on your mobile phone browser (or deploy to any static host).
2. Tap **"📱 Install App"** in the top HUD, or use browser menu:
   - **Chrome / Android**: Tap `⋮` $\to$ **"Install app"** or **"Add to Home screen"**.
   - **Safari / iOS**: Tap the Share button $\to$ **"Add to Home Screen"**.
3. Launch the app directly from your home screen like a native mobile game—works seamlessly without internet!

---

## 🧪 Deep Automated Testing

Run the automated test suite verifying all 682 test cases across curriculum data, 100 MCQs, quad-language code, PNR mechanics, and PDF streams:

```bash
node tests/test_suite.mjs
```

**Results:**
```
=================================================
TEST RESULTS: 682 PASSED, 0 FAILED
=================================================
ALL TESTS PASSED WITH 100% SUCCESS!
```
