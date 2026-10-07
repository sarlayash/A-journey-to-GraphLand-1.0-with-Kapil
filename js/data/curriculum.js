// A Journey to GraphLand 1.0 with Kapil
// Complete Curriculum Data: 7 Levels covering basic to advanced graphs
// Includes complete solved code in C, C++, Java, Python for every topic.

export const GRAPH_LEVELS = [
  {
    id: 0,
    title: "Level 0: The Blue City Expedition (Jodhpur)",
    subtitle: "JIET Group of Institutions to Marwar's Crown Jewels — Intuitive Graph Mastery Without Code",
    badgeName: "Blue City Explorer",
    badgeIcon: "🏰",
    themeColor: "#00d2ff",
    pnrPrefix: "GL0-JODHPUR",
    story: {
      kapilQuote: "Padharo Mhare Desh! Welcome to Jodhpur, the legendary Blue City of Rajasthan! Before we write any code in higher realms, let's experience graph theory in the real world. Starting from our technological launchpad at the JIET Group of Institutions, we will navigate through Mehrangarh Fort, Umaid Bhawan Palace, and Mandore Gardens. Every highway, royal gate, and narrow desert alley is a living graph!",
      context: "Mentor Kapil gathers the cadets on the lush grounds of the JIET campus. Here in Level 0, there is NO CODING required. You will develop pure spatial intuition and master Time & Memory complexities through the historic geography of Jodhpur!"
    },
    theory: [
      {
        heading: "1. The Jodhpur Landmark Network: Vertices & Edges",
        content: `Imagine looking down at the Sun City of Jodhpur from a satellite:
- **Vertices (Landmarks):** Key locations where people gather:
  - **Node 0:** JIET Group of Institutions (Our Academic Launchpad)
  - **Node 1:** AIIMS Jodhpur & Bhagat Ki Kothi (Midtown Transit Hub)
  - **Node 2:** Umaid Bhawan Palace (Golden Sandstone Architectural Wonder)
  - **Node 3:** Clock Tower (Ghanta Ghar) & Sardar Market (Vibrant Old City Heart)
  - **Node 4:** Toorji Ka Jhalra (Intricate 18th-century Stepwell)
  - **Node 5:** Jaswant Thada (White Marble Cenotaph / Taj Mahal of Marwar)
  - **Node 6:** Mehrangarh Fort (Majestic Citadel Standing on a 400ft Cliff)
  - **Node 7:** Rao Jodha Desert Rock Park (Ecological Heritage Trails)
  - **Node 8:** Mandore Gardens (Ancient Capital with Royal Cenotaphs)
  - **Node 9:** Kaylana Lake (Tranquil Sunset Waters & Water Reserve)
- **Edges (Roads & Highways):** The arteries connecting these landmarks (NH-62 Pali Road, High Court Road, Fort Winding Road, Mandore Highway).
- **Directed vs. Undirected:**
  - Modern wide highways (Pali Road from JIET) are **Undirected (Bidirectional)**: traffic moves both ways freely.
  - The narrow, historic blue alleys inside Sardar Market are **Directed (One-Way)**: traffic flows only in one direction to prevent gridlock!`
      },
      {
        heading: "2. All Graph Concepts in Real-World Jodhpur (Zero Coding!)",
        content: `### A. Breadth-First Search (BFS) - The Sightseeing Ripple
- Start at **JIET Campus** and explore nearest sights in concentric rings:
  - **Ring 1:** AIIMS & Pali Highway (Immediate neighbors)
  - **Ring 2:** Umaid Bhawan & Clock Tower
  - **Ring 3:** Mehrangarh Fort & Jaswant Thada
  - **Ring 4:** Mandore Gardens
- **Intuitive Rule:** BFS guarantees finding the route with the **fewest road transitions** (minimum stops) in an unweighted city grid!

### B. Depth-First Search (DFS) - The Heritage Trail Spelunker
- A backpacker starts at JIET, takes a road to Clock Tower, immediately hikes up to Toorji Stepwell, climbs to Jaswant Thada, enters Mehrangarh Fort, walks to the edge of Desert Rock Park until reaching a dead end cliff, and then **backtracks** step-by-step.
- **Intuitive Rule:** DFS goes as deep as possible down a single scenic route before backtracking!

### C. Dijkstra's Shortest Path - Fast Travel Across Marwar
- Each road has a **weight**: physical distance in kilometers (km) plus traffic delay in minutes.
- Dijkstra calculates the fastest path from **JIET to Mehrangarh Fort** by greedily prioritizing roads with the lowest cumulative travel time, avoiding congested bottleneck bazaars!

### D. Minimum Spanning Tree (MST) - Jodhpur Smart Shuttle & Fiber Grid
- The Jodhpur Tourism Board wants to connect **ALL 10 landmarks** with a zero-emission electric shuttle network and high-speed fiber-optic cable with the **minimum total road distance**.
- You do NOT need all roads! Exactly **$V - 1 = 9$ roads** are sufficient to connect all 10 landmarks without creating redundant circular loops!

### E. Bridges & Articulation Points - Single Points of Failure
- The steep winding ramp leading up the cliff to **Mehrangarh Fort** is the ONLY access route for vehicles. If that single road is blocked by a royal procession, Mehrangarh is completely cut off from the rest of the world!
- That road is a **Bridge** (Cut-Edge), and the fort entry is an **Articulation Point** (Cut-Vertex)!

### F. Eulerian Circuit - The Single-Stroke Royal Parade
- Can the Maharaja's vintage car rally traverse **every single street in the tourist circuit exactly once** without repeating any road?
- Euler proves: This is possible ONLY if every landmark has an **EVEN** number of connecting roads!`
      },
      {
        heading: "3. Time & Memory Complexity Blueprint (The Engineer's Lens)",
        content: `Even without writing code, every FAANG engineer thinks in terms of **Time Complexity** (how fast does it run?) and **Memory Complexity** (how much space does it consume in RAM?):

| Graph Algorithm / Model | Jodhpur Tourism Analog | Time Complexity | Memory (Space) Complexity | Real-World Insight |
|---|---|---|---|---|
| **Adjacency Matrix** | A $10 \\times 10$ table checking if two sights connect | $O(1)$ lookup | $O(V^2)$ memory | Perfect for 10 landmarks ($100$ cells). But for all $10^6$ addresses in Rajasthan, it wastes gigabytes of empty zeros! |
| **Adjacency List** | A pocket diary listing only actual roads from each landmark | $O(\\deg(u))$ neighbors | $O(V + E)$ memory | Uses memory only for roads that actually exist. Compact and highly scalable! |
| **BFS (Ripples)** | Dispatching city tourist shuttles layer-by-layer | $O(V + E)$ | $O(V)$ in Queue | Every landmark and road checked once. Queue holds current search frontier. |
| **DFS (Trail Explorer)** | Backpacker hiking single route to dead end | $O(V + E)$ | $O(V)$ in Call Stack | Linear time. Memory bounded by longest path in the city. |
| **Dijkstra (Shortest Path)** | GPS navigation with live kilometer weights | $O((V + E) \\log V)$ | $O(V)$ in Min-Heap | Fast greedy priority queue; log factor comes from keeping shortest road on top. |
| **Kruskal (MST)** | Connecting all sights with least fiber optic cable | $O(E \\log E)$ | $O(V)$ in DSU | Time dominated by sorting roads by length; DSU tree flattens in near $O(1)$ time. |
| **Tarjan (Bridges)** | Scanning city for vulnerable single-road cuts | $O(V + E)$ | $O(V)$ for discovery times | Discovers all critical road bridges in a single elegant traversal pass! |`
      }
    ],
    oopsMoment: {
      title: "Oops! The Clock Tower One-Way Deadlock",
      scenario: "A tourist vehicle drove into the narrow alleys around Ghanta Ghar (Clock Tower) ignoring one-way traffic arrows. Two other vehicles entered from opposite lanes, creating an unbreakable circular gridlock!",
      whyItFails: "A directed cycle with no exit path traps vehicles in an unresolved dependency loop. In computer science, this is a classic Deadlock!",
      kapilInsight: "Kapil warns: 'Always respect directed edge arrows! Whether in ancient bazaars or distributed cloud microservices, circular dependencies cause complete system freezes.'"
    },
    aahaMoment: {
      title: "Aaha! The 9-Road Fiber Miracle (MST)",
      content: "To connect all 10 iconic landmarks of Jodhpur (from JIET to Mehrangarh and Mandore), you do NOT need all 12 roads. Exactly 9 roads (V - 1) form a Minimum Spanning Tree, linking the entire city with zero cycles and minimum possible cable distance! Nature and mathematics love minimalism!"
    },
    interactiveDefaultGraph: {
      nodes: [
        { id: 0, label: "0: JIET Campus", x: 80, y: 390 },
        { id: 1, label: "1: AIIMS Jodhpur", x: 230, y: 300 },
        { id: 2, label: "2: Umaid Bhawan", x: 530, y: 360 },
        { id: 3, label: "3: Clock Tower", x: 420, y: 220 },
        { id: 4, label: "4: Toorji Stepwell", x: 310, y: 120 },
        { id: 5, label: "5: Jaswant Thada", x: 560, y: 130 },
        { id: 6, label: "6: Mehrangarh Fort", x: 740, y: 150 },
        { id: 7, label: "7: Desert Rock Park", x: 440, y: 50 },
        { id: 8, label: "8: Mandore Gardens", x: 920, y: 80 },
        { id: 9, label: "9: Kaylana Lake", x: 120, y: 160 }
      ],
      edges: [
        { u: 0, v: 1, weight: 8 },
        { u: 1, v: 3, weight: 6 },
        { u: 1, v: 2, weight: 7 },
        { u: 3, v: 2, weight: 5 },
        { u: 3, v: 4, weight: 1 },
        { u: 4, v: 5, weight: 2 },
        { u: 5, v: 6, weight: 1 },
        { u: 6, v: 7, weight: 1 },
        { u: 6, v: 8, weight: 9 },
        { u: 3, v: 8, weight: 8 },
        { u: 1, v: 9, weight: 9 },
        { u: 9, v: 7, weight: 7 }
      ],
      directed: false
    },
    miniGame: {
      title: "The Royal Jodhpur Shuttle Route",
      instructions: "From JIET Campus (Node 0), what is the minimum number of road hops (edges) required to reach Mehrangarh Fort (Node 6) using BFS?",
      options: [
        "2 road hops (JIET -> Mehrangarh)",
        "3 road hops (JIET -> AIIMS -> Clock Tower -> Mandore)",
        "4 road hops (JIET -> AIIMS -> Clock Tower -> Toorji Stepwell -> Mehrangarh via Jaswant Thada)",
        "8 road hops (Visiting all intermediate sights)"
      ],
      correctIndex: 2,
      explanation: "From JIET (0), BFS hops to AIIMS (1), then to Clock Tower (3), then to Toorji/Jaswant Thada (4/5), and arrives at Mehrangarh Fort (6) in exactly 4 road hops!"
    },
    quiz: [
      {
        question: "In the Jodhpur graph, why is the single winding road leading up to Mehrangarh Fort considered a 'Bridge' in graph theory?",
        options: [
          "Because it is built over water",
          "Because removing or blocking it increases the number of connected components, completely isolating Mehrangarh Fort from Jodhpur",
          "Because it connects two odd-degree vertices",
          "Because its edge weight is 0"
        ],
        correctIndex: 1,
        explanation: "By definition, a Bridge is an edge whose removal disconnects the graph. Since there is no alternative path up the cliff, blocking this road isolates the fort."
      },
      {
        question: "To connect all 10 Jodhpur tourist landmarks with high-speed fiber cable using a Minimum Spanning Tree (MST), how many road segments are strictly required?",
        options: ["10 roads", "9 roads (V - 1)", "12 roads", "45 roads"],
        correctIndex: 1,
        explanation: "A spanning tree on V vertices always contains exactly V - 1 edges. For 10 landmarks, exactly 9 roads are needed to connect all without cycles."
      },
      {
        question: "What is the Memory Complexity of storing Jodhpur's 10 landmarks using an Adjacency List versus an Adjacency Matrix?",
        options: [
          "Adjacency List takes O(V + E) memory; Adjacency Matrix takes O(V^2) memory",
          "Adjacency List takes O(V^3); Matrix takes O(1)",
          "Both take O(E^2) memory",
          "Adjacency Matrix takes less memory for sparse road networks"
        ],
        correctIndex: 0,
        explanation: "Adjacency List stores only existing roads taking O(V + E) space, whereas an Adjacency Matrix allocates a full V x V grid taking O(V^2) space."
      }
    ],
    codeSolutions: {
      c: `/* =========================================================================
   LEVEL 0: THE JODHPUR COMPLEXITY & ARCHITECTURAL BLUEPRINT (NO CODE LEVEL)
   -------------------------------------------------------------------------
   C Perspective: Low-Level Memory & Cache Locality for Jodhpur Road Network
   ========================================================================= */

// In C, we analyze how Jodhpur's 10 landmarks map directly to physical silicon RAM:
//
// 1. ADJACENCY MATRIX MEMORY LAYOUT:
//    - int jodhpurMatrix[10][10];
//    - Memory = 10 * 10 * 4 bytes = 400 bytes.
//    - Edge check time between JIET and AIIMS: matrix[0][1] in O(1) instantaneous time.
//    - Drawback: For all 50,000 streets in Jodhpur, a 50000x50000 matrix needs 10 GB RAM!
//
// 2. ADJACENCY LIST MEMORY LAYOUT:
//    - struct Road { int destination; int kmWeight; struct Road* next; };
//    - struct Road* jodhpurAdj[10];
//    - Memory: 10 head pointers + 24 directed edge nodes = 10*8 + 24*(4+4+8) = ~464 bytes.
//    - Scales linearly: O(V + E) memory. Only roads that exist consume RAM!
//
// 3. ASYMPTOTIC SUMMARY:
//    - BFS / DFS Time: O(V + E) = 10 vertices + 12 edges = ~22 operations (Microseconds!)
//    - Dijkstra Time:  O((V + E) log V) with Min-Heap priority queue.
//    - Kruskal Time:   O(E log E) sorting Jodhpur's 12 road segments.`,

      cpp: `// =========================================================================
// LEVEL 0: THE JODHPUR COMPLEXITY & ARCHITECTURAL BLUEPRINT (NO CODE LEVEL)
// -------------------------------------------------------------------------
// C++ Perspective: STL Efficiency & Asymptotic Invariants for Jodhpur Map
// =========================================================================

// In C++, the Standard Template Library (STL) provides optimal data structures:
//
// 1. GRAPH TOPOLOGY:
//    - std::vector<std::vector<std::pair<int, int>>> jodhpurAdj(10);
//    - jodhpurAdj[0] contains { {1, 8} } (JIET to AIIMS: 8 km).
//    - Space Complexity: O(V + E). Compact vector contiguous memory buffers.
//
// 2. TIME COMPLEXITY IN JODHPUR SCENARIOS:
//    - Exploring all sights from JIET via BFS:
//      Time: O(V + E) -> Inspects each of the 10 landmarks and 12 roads once.
//    - Finding fastest path from JIET to Mehrangarh Fort via std::priority_queue:
//      Time: O((V + E) log V) -> Heap operations bound edge relaxations to log(10).
//
// 3. SPACE COMPLEXITY IN RAM:
//    - Queue memory during BFS: Peak size is maximum width of Jodhpur level rings (<= 4 nodes).
//    - DSU memory during Kruskal MST: vector<int> parent(10) -> O(V) negligible overhead.`,

      java: `// =========================================================================
// LEVEL 0: THE JODHPUR COMPLEXITY & ARCHITECTURAL BLUEPRINT (NO CODE LEVEL)
// -------------------------------------------------------------------------
// Java Perspective: Object-Oriented Modeling & Heap Overhead in Jodhpur
// =========================================================================

// In Java, we model the physical reality of the Blue City cleanly:
//
// 1. OBJECT ARCHITECTURE:
//    - class Landmark { int id; String name; List<Road> connections; }
//    - class Road { Landmark destination; int distanceKm; }
//
// 2. MEMORY CONSIDERATIONS ON THE JVM:
//    - Each Landmark object has a 16-byte object header + 8-byte reference pointers.
//    - Total memory for 10 landmarks + 12 roads is roughly ~3 KB on 64-bit JVM with compressed OOPs.
//    - Garbage collection impact: O(V + E) objects created once during city map initialization.
//
// 3. ALGORITHM PERFORMANCE:
//    - BFS Queue (LinkedList vs ArrayDeque):
//      ArrayDeque consumes O(V) contiguous memory, avoiding node allocation overhead.
//    - Dijkstra PriorityQueue: O((V + E) log V) guarantees optimal route under 1 millisecond.`,

      python: `# =========================================================================
# LEVEL 0: THE JODHPUR COMPLEXITY & ARCHITECTURAL BLUEPRINT (NO CODE LEVEL)
# -------------------------------------------------------------------------
# Python Perspective: High-Level Intuition & Dictionary Graph Mapping
# =========================================================================

# In Python, Jodhpur's graph is expressed as an elegant adjacency dictionary:
#
# jodhpur_map = {
#     "JIET Campus": [("AIIMS Jodhpur", 8)],
#     "AIIMS Jodhpur": [("JIET", 8), ("Clock Tower", 6), ("Umaid Bhawan", 7), ("Kaylana Lake", 9)],
#     "Clock Tower": [("Toorji Stepwell", 1), ("Umaid Bhawan", 5), ("Mandore Gardens", 8)],
#     "Mehrangarh Fort": [("Jaswant Thada", 1), ("Desert Rock Park", 1), ("Mandore Gardens", 9)],
#     ...
# }
#
# TIME COMPLEXITY ANALYSIS:
# - BFS Route: O(V + E) using collections.deque (O(1) popleft).
# - Shortest Path: O((V + E) log V) using heapq (binary heap).
# - Minimum Spanning Tree: O(E log E) sorting edges by kilometer distance.
#
# SPACE COMPLEXITY ANALYSIS:
# - Graph Storage: O(V + E) dictionary hash table entries.
# - Memory is tiny (< 10 KB), allowing seamless execution on mobile browsers!`
    }
  },
  {
    id: 1,
    title: "Level 1: Kingdom of Vertices & Edges",
    subtitle: "Foundations, Representations & The Handshaking Lemma",
    badgeName: "Matrix Architect",
    badgeIcon: "🏛️",
    themeColor: "#00f3ff",
    pnrPrefix: "GL1-VERT",
    story: {
      kapilQuote: "Welcome traveler! You stand at the threshold of GraphLand. In computer science, everything from social networks to Google Maps is a graph. Master vertices and edges, and the digital universe will bend to your logic!",
      context: "Kapil hands you an ancient Graph Compass. Before navigating deep labyrinths, you must understand how graphs are constructed in memory and why representations dictate performance."
    },
    theory: [
      {
        heading: "What is a Graph?",
        content: `A **Graph** $G = (V, E)$ consists of a set of **Vertices** (nodes) $V$ and a set of **Edges** (connections) $E$.
- **Directed Graph (Digraph):** Edges have direction (one-way street, e.g., Twitter followers: $A \\to B$).
- **Undirected Graph:** Edges are bidirectional (two-way street, e.g., Facebook friends: $A \\leftrightarrow B$).
- **Weighted Graph:** Edges have values/costs (e.g., road distance, network latency).
- **Degree of a Vertex:**
  - In undirected graphs: Count of edges connected to vertex $v$.
  - In directed graphs: **In-degree** (edges coming in) and **Out-degree** (edges going out).`
      },
      {
        heading: "The Handshaking Lemma (Theorem)",
        content: `In any undirected graph, the sum of all vertex degrees is equal to twice the number of edges:
$$\\sum_{v \\in V} \\deg(v) = 2|E|$$
**Key Consequence:** An undirected graph always has an **EVEN** number of vertices with odd degrees! This holds true for any graph, no matter how complex.`
      },
      {
        heading: "Graph Representations: Adjacency Matrix vs. Adjacency List",
        content: `### 1. Adjacency Matrix
A 2D array of size $V \\times V$ where \`matrix[u][v] = 1\` (or weight) if an edge exists.
- **Space Complexity:** $O(V^2)$
- **Edge Existence Check ($u, v$):** $O(1)$
- **Iterate Neighbors of $u$:** $O(V)$
- **Best For:** Dense graphs ($E \\approx V^2$).

### 2. Adjacency List
An array of lists/vectors where \`adj[u]\` contains all neighbors of $u$.
- **Space Complexity:** $O(V + E)$
- **Edge Existence Check ($u, v$):** $O(\\deg(u))$
- **Iterate Neighbors of $u$:** $O(\\deg(u))$
- **Best For:** Sparse graphs ($E \\ll V^2$) — standard in competitive programming & FAANG interviews!`
      }
    ],
    oopsMoment: {
      title: "Oops! The Memory Exploder",
      scenario: "A developer tried allocating an Adjacency Matrix for a graph with $100,000$ vertices in C++: `int matrix[100000][100000];`.",
      whyItFails: "A $10^5 \\times 10^5$ matrix requires $10^{10} \\times 4\\text{ bytes} \\approx 40\\text{ GB}$ of RAM! The program crashes instantly with a `Segmentation Fault / OutOfMemoryError`.",
      kapilInsight: "Kapil says: 'Never bring a 40 GB matrix to a sparse graph party! When $V$ is large and $E \\approx 200,000$, use an Adjacency List. It takes only around a few megabytes!'"
    },
    aahaMoment: {
      title: "Aaha! The Handshake Epiphany",
      content: "At any party with 1,000 people, no matter who shakes hands with whom, count how many people shook an odd number of hands. That count is ALWAYS an even number! Every handshake adds +1 to two people, keeping the total sum of degrees strictly even. Math guarantees this without looking at the names!"
    },
    interactiveDefaultGraph: {
      nodes: [
        { id: 0, label: "0: Gateway", x: 120, y: 150 },
        { id: 1, label: "1: Tower", x: 260, y: 80 },
        { id: 2, label: "2: Market", x: 260, y: 220 },
        { id: 3, label: "3: Castle", x: 400, y: 150 }
      ],
      edges: [
        { u: 0, v: 1, weight: 4 },
        { u: 0, v: 2, weight: 2 },
        { u: 1, v: 2, weight: 1 },
        { u: 1, v: 3, weight: 5 },
        { u: 2, v: 3, weight: 8 }
      ],
      directed: false
    },
    miniGame: {
      title: "The Handshake Circuit Challenge",
      instructions: "Can a simple undirected graph with 5 vertices have vertex degrees: [3, 3, 3, 3, 3]? Select the correct mathematical verdict to calibrate the gate.",
      options: [
        "Yes, by connecting all vertices into a 3-regular graph.",
        "No, because the sum of degrees would be 15 (odd), violating the Handshaking Lemma!",
        "Yes, only if weights are negative.",
        "No, because a graph must have at least 6 vertices to have degree 3."
      ],
      correctIndex: 1,
      explanation: "Sum of degrees = 3 + 3 + 3 + 3 + 3 = 15. Since 15 is odd and sum must equal 2*E (which is even), such a graph is mathematically impossible!"
    },
    quiz: [
      {
        question: "In an undirected graph with 12 vertices and 18 edges, what is the sum of degrees of all vertices?",
        options: ["18", "24", "36", "72"],
        correctIndex: 2,
        explanation: "By the Handshaking Lemma, sum of degrees = 2 * |E| = 2 * 18 = 36."
      },
      {
        question: "Which graph representation is optimal in space for a sparse graph with V = 100,000 and E = 200,000?",
        options: ["Adjacency Matrix", "Adjacency List", "Incidence Matrix", "All-Pairs 2D Distance Matrix"],
        correctIndex: 1,
        explanation: "Adjacency List consumes O(V + E) memory, requiring only a few megabytes compared to ~40GB for an Adjacency Matrix."
      },
      {
        question: "What is the time complexity to check if an edge exists between vertex u and v in an Adjacency Matrix?",
        options: ["O(1)", "O(V)", "O(E)", "O(log V)"],
        correctIndex: 0,
        explanation: "In an Adjacency Matrix, matrix[u][v] is a direct 2D array lookup taking O(1) constant time."
      }
    ],
    codeSolutions: {
      c: `// Graph Representation in C (Adjacency List using Linked Lists)
#include <stdio.h>
#include <stdlib.h>

struct Node {
    int dest;
    int weight;
    struct Node* next;
};

struct Graph {
    int V;
    struct Node** adj; // Array of linked lists
};

struct Node* createNode(int dest, int weight) {
    struct Node* newNode = (struct Node*)malloc(sizeof(struct Node));
    newNode->dest = dest;
    newNode->weight = weight;
    newNode->next = NULL;
    return newNode;
}

struct Graph* createGraph(int V) {
    struct Graph* g = (struct Graph*)malloc(sizeof(struct Graph));
    g->V = V;
    g->adj = (struct Node**)malloc(V * sizeof(struct Node*));
    for (int i = 0; i < V; ++i) g->adj[i] = NULL;
    return g;
}

void addEdge(struct Graph* g, int u, int v, int w) {
    // Edge u -> v
    struct Node* node1 = createNode(v, w);
    node1->next = g->adj[u];
    g->adj[u] = node1;
    // Edge v -> u (Undirected)
    struct Node* node2 = createNode(u, w);
    node2->next = g->adj[v];
    g->adj[v] = node2;
}

void printGraph(struct Graph* g) {
    for (int v = 0; v < g->V; ++v) {
        printf("Vertex %d: ", v);
        struct Node* curr = g->adj[v];
        while (curr) {
            printf("-> (%d, w:%d) ", curr->dest, curr->weight);
            curr = curr->next;
        }
        printf("\\n");
    }
}

int main() {
    int V = 4;
    struct Graph* g = createGraph(V);
    addEdge(g, 0, 1, 4);
    addEdge(g, 0, 2, 2);
    addEdge(g, 1, 2, 1);
    addEdge(g, 1, 3, 5);
    addEdge(g, 2, 3, 8);
    printGraph(g);
    return 0;
}`,
      cpp: `// Graph Representation in C++ (Vector of Pairs)
#include <iostream>
#include <vector>

using namespace std;

class Graph {
private:
    int V;
    vector<vector<pair<int, int>>> adj; // adj[u] = { {v, weight}, ... }
public:
    Graph(int vertices) : V(vertices), adj(vertices) {}

    void addEdge(int u, int v, int weight = 1, bool directed = false) {
        adj[u].push_back({v, weight});
        if (!directed) {
            adj[v].push_back({u, weight});
        }
    }

    void print() const {
        for (int i = 0; i < V; ++i) {
            cout << "Vertex " << i << " connects to: ";
            for (const auto& edge : adj[i]) {
                cout << "(" << edge.first << ", w:" << edge.second << ") ";
            }
            cout << "\\n";
        }
    }
};

int main() {
    Graph g(4);
    g.addEdge(0, 1, 4);
    g.addEdge(0, 2, 2);
    g.addEdge(1, 2, 1);
    g.addEdge(1, 3, 5);
    g.addEdge(2, 3, 8);
    g.print();
    return 0;
}`,
      java: `// Graph Representation in Java
import java.util.*;

public class GraphLandIntro {
    static class Edge {
        int to;
        int weight;
        Edge(int to, int weight) {
            this.to = to;
            this.weight = weight;
        }
    }

    static class Graph {
        int V;
        List<List<Edge>> adj;

        public Graph(int V) {
            this.V = V;
            adj = new ArrayList<>(V);
            for (int i = 0; i < V; i++) adj.add(new ArrayList<>());
        }

        public void addEdge(int u, int v, int weight, boolean directed) {
            adj.get(u).add(new Edge(v, weight));
            if (!directed) {
                adj.get(v).add(new Edge(u, weight));
            }
        }

        public void print() {
            for (int i = 0; i < V; i++) {
                System.out.print("Vertex " + i + " -> ");
                for (Edge e : adj.get(i)) {
                    System.out.print("(" + e.to + ", w:" + e.weight + ") ");
                }
                System.out.println();
            }
        }
    }

    public static void main(String[] args) {
        Graph g = new Graph(4);
        g.addEdge(0, 1, 4, false);
        g.addEdge(0, 2, 2, false);
        g.addEdge(1, 2, 1, false);
        g.addEdge(1, 3, 5, false);
        g.addEdge(2, 3, 8, false);
        g.print();
    }
}`,
      python: `# Graph Representation in Python (Adjacency List with Dictionary of Lists)
class Graph:
    def __init__(self, vertices: int):
        self.V = vertices
        self.adj = {i: [] for i in range(vertices)}

    def add_edge(self, u: int, v: int, weight: int = 1, directed: bool = False):
        self.adj[u].append((v, weight))
        if not directed:
            self.adj[v].append((u, weight))

    def print_graph(self):
        for node in self.adj:
            neighbors = [f"({v}, w:{w})" for v, w in self.adj[node]]
            print(f"Vertex {node} -> {', '.join(neighbors)}")

if __name__ == "__main__":
    g = Graph(4)
    g.add_edge(0, 1, 4)
    g.add_edge(0, 2, 2)
    g.add_edge(1, 2, 1)
    g.add_edge(1, 3, 5)
    g.add_edge(2, 3, 8)
    g.print_graph()`
    }
  },
  {
    id: 2,
    title: "Level 2: The Whispering Woods of Traversal",
    subtitle: "BFS, DFS, Connected Components & Undirected Cycle Detection",
    badgeName: "Traversal Pathfinder",
    badgeIcon: "🌲",
    themeColor: "#00ff88",
    pnrPrefix: "GL2-WOODS",
    story: {
      kapilQuote: "As we step into the Whispering Woods, dense fog conceals all paths. When lost in graph territory, we have two legendary scouts: the wide-sweeping radar of Breadth-First Search, and the deep-spelunking rope of Depth-First Search. Choose wisely!",
      context: "Kapil teaches you how to traverse every reachable vertex systematically, track parent pointers to detect circular paths, and identify disconnected islands."
    },
    theory: [
      {
        heading: "Breadth-First Search (BFS)",
        content: `BFS visits vertices layer by layer like ripples expanding in water.
- **Data Structure:** Queue (FIFO).
- **Core Property:** In an unweighted graph, the first time BFS reaches any vertex $v$ from start $s$, it has found the **shortest path** (fewest edges)!
- **Time Complexity:** $O(V + E)$
- **Space Complexity:** $O(V)$ for the queue and visited array.`
      },
      {
        heading: "Depth-First Search (DFS)",
        content: `DFS charges down a single path as deeply as possible until a dead end is reached, then backtracks.
- **Data Structure:** Recursion call stack or explicit Stack (LIFO).
- **Core Property:** Ideal for maze traversal, cycle detection, topological ordering, and finding connected components.
- **Time Complexity:** $O(V + E)$
- **Space Complexity:** $O(V)$ in the worst case (a linear degenerate graph).`
      },
      {
        heading: "Cycle Detection in Undirected Graph",
        content: `During traversal (BFS or DFS), keep track of each node's \`parent\`.
- If we look at an adjacent node $v$ that has **already been visited**, and $v \\neq \\text{parent}$, then a **cycle exists**!
- If $v == \\text{parent}$, it's simply the undirected edge we just traversed backwards.`
      }
    ],
    oopsMoment: {
      title: "Oops! The Infinite Recursion Abyss",
      scenario: "A learner wrote DFS without a `visited` array: `void dfs(int u) { for (int v : adj[u]) dfs(v); }`.",
      whyItFails: "Node 0 calls Node 1, which calls Node 0, which calls Node 1... endlessly until the call stack blows up with a `StackOverflowError`!",
      kapilInsight: "Kapil warns: 'Always mark a vertex visited BEFORE traversing its neighbors. Never trust an unvisited node in an undirected wilderness!'"
    },
    aahaMoment: {
      title: "Aaha! Concentric BFS Rings",
      content: "When BFS runs, all nodes at distance $d$ are completely dequeued before ANY node at distance $d+1$ is ever dequeued! This invariant guarantees that the path found to any target node has minimal edges without needing any weight math."
    },
    interactiveDefaultGraph: {
      nodes: [
        { id: 0, label: "0: Camp", x: 100, y: 150 },
        { id: 1, label: "1: Pine", x: 220, y: 70 },
        { id: 2, label: "2: River", x: 220, y: 230 },
        { id: 3, label: "3: Cave", x: 360, y: 70 },
        { id: 4, label: "4: Shrine", x: 360, y: 230 },
        { id: 5, label: "5: Peak", x: 480, y: 150 }
      ],
      edges: [
        { u: 0, v: 1 },
        { u: 0, v: 2 },
        { u: 1, v: 3 },
        { u: 2, v: 4 },
        { u: 3, v: 5 },
        { u: 4, v: 5 },
        { u: 3, v: 4 }
      ],
      directed: false
    },
    miniGame: {
      title: "The Cycle Trap Detector",
      instructions: "In an undirected graph, if you reach node V which is already visited, under what condition is a cycle confirmed?",
      options: [
        "V has a weight greater than 0",
        "V is NOT the immediate parent from which we came",
        "V is the immediate parent",
        "V has an out-degree of 0"
      ],
      correctIndex: 1,
      explanation: "If a neighbor is already visited and is not our immediate predecessor (parent), we have found an alternative path closing a loop—confirming a cycle!"
    },
    quiz: [
      {
        question: "Which algorithm guarantees finding the shortest path in terms of edge count in an unweighted graph?",
        options: ["DFS", "BFS", "Kosaraju's Algorithm", "Tarjan's Low-Link"],
        correctIndex: 1,
        explanation: "BFS explores vertices in increasing order of distance, guaranteeing the minimum edge path."
      },
      {
        question: "What is the maximum recursion depth of DFS on a graph with V vertices?",
        options: ["O(1)", "O(log V)", "O(V)", "O(V^2)"],
        correctIndex: 2,
        explanation: "In a straight-line graph (0 - 1 - 2 - ... - V-1), DFS call stack reaches depth V."
      },
      {
        question: "How can you count the number of connected components in an undirected graph?",
        options: [
          "Count the number of vertices divided by 2",
          "Run a loop over all vertices 0 to V-1; whenever unvisited, trigger BFS/DFS and increment component count",
          "Multiply total edges by 2",
          "Only by calculating the matrix determinant"
        ],
        correctIndex: 1,
        explanation: "Each unvisited vertex starts a new traversal that marks all reachable vertices in that component."
      }
    ],
    codeSolutions: {
      c: `// BFS and DFS in C with Cycle Detection
#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>

#define MAX 100

int adj[MAX][MAX];
int degree[MAX];
bool visited[MAX];
int V;

void addEdge(int u, int v) {
    adj[u][degree[u]++] = v;
    adj[v][degree[v]++] = u;
}

void bfs(int start) {
    bool bfsVisited[MAX] = {false};
    int queue[MAX], front = 0, rear = 0;

    bfsVisited[start] = true;
    queue[rear++] = start;

    printf("BFS Order: ");
    while (front < rear) {
        int u = queue[front++];
        printf("%d ", u);
        for (int i = 0; i < degree[u]; ++i) {
            int v = adj[u][i];
            if (!bfsVisited[v]) {
                bfsVisited[v] = true;
                queue[rear++] = v;
            }
        }
    }
    printf("\\n");
}

bool dfsCycle(int u, int parent) {
    visited[u] = true;
    for (int i = 0; i < degree[u]; ++i) {
        int v = adj[u][i];
        if (!visited[v]) {
            if (dfsCycle(v, u)) return true;
        } else if (v != parent) {
            return true; // Found cycle!
        }
    }
    return false;
}

int main() {
    V = 6;
    addEdge(0, 1);
    addEdge(0, 2);
    addEdge(1, 3);
    addEdge(2, 4);
    addEdge(3, 5);
    addEdge(4, 5);
    addEdge(3, 4);

    bfs(0);
    bool hasCycle = dfsCycle(0, -1);
    printf("Contains Cycle: %s\\n", hasCycle ? "YES" : "NO");
    return 0;
}`,
      cpp: `// BFS and DFS in C++ with Undirected Cycle Detection
#include <iostream>
#include <vector>
#include <queue>

using namespace std;

class GraphTraversal {
    int V;
    vector<vector<int>> adj;
public:
    GraphTraversal(int v) : V(v), adj(v) {}

    void addEdge(int u, int v) {
        adj[u].push_back(v);
        adj[v].push_back(u);
    }

    void bfs(int start) {
        vector<bool> visited(V, false);
        queue<int> q;
        visited[start] = true;
        q.push(start);

        cout << "BFS Traversal: ";
        while (!q.empty()) {
            int u = q.front(); q.pop();
            cout << u << " ";
            for (int v : adj[u]) {
                if (!visited[v]) {
                    visited[v] = true;
                    q.push(v);
                }
            }
        }
        cout << "\\n";
    }

    bool dfsDetectCycle(int u, int parent, vector<bool>& visited) {
        visited[u] = true;
        for (int v : adj[u]) {
            if (!visited[v]) {
                if (dfsDetectCycle(v, u, visited)) return true;
            } else if (v != parent) {
                return true; // Cycle detected!
            }
        }
        return false;
    }

    bool hasCycle() {
        vector<bool> visited(V, false);
        for (int i = 0; i < V; ++i) {
            if (!visited[i]) {
                if (dfsDetectCycle(i, -1, visited)) return true;
            }
        }
        return false;
    }
};

int main() {
    GraphTraversal g(6);
    g.addEdge(0, 1);
    g.addEdge(0, 2);
    g.addEdge(1, 3);
    g.addEdge(2, 4);
    g.addEdge(3, 5);
    g.addEdge(4, 5);

    g.bfs(0);
    cout << "Cycle present: " << (g.hasCycle() ? "TRUE" : "FALSE") << "\\n";
    return 0;
}`,
      java: `// BFS and DFS in Java with Cycle Detection
import java.util.*;

public class WoodsTraversal {
    static class Graph {
        int V;
        List<List<Integer>> adj;

        Graph(int V) {
            this.V = V;
            adj = new ArrayList<>();
            for (int i = 0; i < V; i++) adj.add(new ArrayList<>());
        }

        void addEdge(int u, int v) {
            adj.get(u).add(v);
            adj.get(v).add(u);
        }

        void bfs(int start) {
            boolean[] visited = new boolean[V];
            Queue<Integer> q = new LinkedList<>();
            visited[start] = true;
            q.add(start);

            System.out.print("BFS: ");
            while (!q.isEmpty()) {
                int u = q.poll();
                System.out.print(u + " ");
                for (int v : adj.get(u)) {
                    if (!visited[v]) {
                        visited[v] = true;
                        q.add(v);
                    }
                }
            }
            System.out.println();
        }

        boolean hasCycleDFS(int u, int parent, boolean[] visited) {
            visited[u] = true;
            for (int v : adj.get(u)) {
                if (!visited[v]) {
                    if (hasCycleDFS(v, u, visited)) return true;
                } else if (v != parent) {
                    return true;
                }
            }
            return false;
        }

        boolean isCyclic() {
            boolean[] visited = new boolean[V];
            for (int i = 0; i < V; i++) {
                if (!visited[i]) {
                    if (hasCycleDFS(i, -1, visited)) return true;
                }
            }
            return false;
        }
    }

    public static void main(String[] args) {
        Graph g = new Graph(6);
        g.addEdge(0, 1);
        g.addEdge(0, 2);
        g.addEdge(1, 3);
        g.addEdge(2, 4);
        g.addEdge(3, 5);
        g.addEdge(4, 5);

        g.bfs(0);
        System.out.println("Is Cyclic: " + g.isCyclic());
    }
}`,
      python: `# BFS and DFS with Cycle Detection in Python
from collections import deque

class GraphTraversal:
    def __init__(self, vertices: int):
        self.V = vertices
        self.adj = [[] for _ in range(vertices)]

    def add_edge(self, u: int, v: int):
        self.adj[u].append(v)
        self.adj[v].append(u)

    def bfs(self, start: int):
        visited = [False] * self.V
        q = deque([start])
        visited[start] = True
        traversal = []

        while q:
            u = q.popleft()
            traversal.append(u)
            for v in self.adj[u]:
                if not visited[v]:
                    visited[v] = True
                    q.append(v)
        print("BFS Traversal:", traversal)
        return traversal

    def has_cycle(self) -> bool:
        visited = [False] * self.V

        def dfs(u: int, parent: int) -> bool:
            visited[u] = True
            for v in self.adj[u]:
                if not visited[v]:
                    if dfs(v, u):
                        return True
                elif v != parent:
                    return True
            return False

        for i in range(self.V):
            if not visited[i]:
                if dfs(i, -1):
                    return True
        return False

if __name__ == "__main__":
    g = GraphTraversal(6)
    g.add_edge(0, 1)
    g.add_edge(0, 2)
    g.add_edge(1, 3)
    g.add_edge(2, 4)
    g.add_edge(3, 5)
    g.add_edge(4, 5)

    g.bfs(0)
    print("Has Cycle:", g.has_cycle())`
    }
  },
  {
    id: 3,
    title: "Level 3: The Directed Citadel & Ancient Orders",
    subtitle: "DAGs, Kahn's Algorithm, Topological Sort & Directed Cycle Detection",
    badgeName: "Topological Chronomancer",
    badgeIcon: "⚙️",
    themeColor: "#bc13fe",
    pnrPrefix: "GL3-CITADEL",
    story: {
      kapilQuote: "Behold the Directed Citadel! Here, time flows in one direction along edges of destiny. In this realm, tasks have prerequisites. If a circular paradox forms, the Citadel freezes. You must calculate the sacred Topological Order to unlock the ancient gear mechanisms!",
      context: "Kapil reveals the mathematics of Directed Acyclic Graphs (DAGs), used by compiler pipelines, task schedulers, and LeetCode course scheduling problems."
    },
    theory: [
      {
        heading: "Directed Acyclic Graphs (DAG) & Topological Sorting",
        content: `A **Topological Sort** of a directed graph is a linear ordering of vertices such that for every directed edge $u \\to v$, vertex $u$ comes **before** $v$ in the ordering.
- **Fundamental Rule:** Topological sort is possible **IF AND ONLY IF** the graph is a **DAG** (has NO directed cycles).
- Applications: Task scheduling, Makefile/Webpack build dependency resolution, university course prerequisites.`
      },
      {
        heading: "Kahn's Algorithm (BFS-based Topological Sort)",
        content: `1. Calculate the **in-degree** of every vertex.
2. Push all vertices with **in-degree = 0** into a Queue.
3. While Queue is not empty:
   - Pop vertex $u$, append to result list.
   - For every outgoing neighbor $v$ of $u$: decrement \`in_degree[v]\` by 1.
   - If \`in_degree[v]\` reaches 0, push $v$ into the Queue.
4. **Cycle Detection Check:** If result count $< V$, the graph has a cycle! (Deadlock)`
      },
      {
        heading: "DFS 3-State Coloring for Directed Cycle Detection",
        content: `Undirected parent tracking fails for directed graphs! We use 3 states:
- **0 (UNVISITED):** Node not yet discovered.
- **1 (VISITING / IN STACK):** Node is in current active recursion call stack.
- **2 (VISITED / PROCESSED):** Node and all descendants completely explored.
- **Cycle Condition:** If we encounter a neighbor with state **1**, we hit a **Back-Edge** $\\to$ A directed cycle is verified!`
      }
    ],
    oopsMoment: {
      title: "Oops! The Undirected Parent Trap",
      scenario: "Using undirected cycle detection logic on directed graph: A -> B, and A -> C -> B. The learner flagged B as a cycle because B was reached twice!",
      whyItFails: "Two paths converging on B ($A \\to B$ and $C \\to B$) is a Diamond Pattern, NOT a cycle! In a directed graph, a cycle only occurs if an edge points back to an ancestor currently on the call stack.",
      kapilInsight: "Kapil chuckles: 'Convergence is not circularity! In a directed citadel, you must use 3-coloring or Kahn's in-degree zero tracking to prove an actual feedback loop.'"
    },
    aahaMoment: {
      title: "Aaha! Kahn's In-Degree Revelation",
      content: "If a group of courses mutually depend on each other (A needs B, B needs C, C needs A), NONE of them can EVER have in-degree 0! Kahn's algorithm leaves them stranded outside the queue naturally, isolating the deadlock effortlessly!"
    },
    interactiveDefaultGraph: {
      nodes: [
        { id: 0, label: "0: Foundations", x: 80, y: 150 },
        { id: 1, label: "1: Data Struct", x: 220, y: 80 },
        { id: 2, label: "2: Algorithms", x: 220, y: 220 },
        { id: 3, label: "3: System Design", x: 380, y: 80 },
        { id: 4, label: "4: Capstone Project", x: 480, y: 150 }
      ],
      edges: [
        { u: 0, v: 1 },
        { u: 0, v: 2 },
        { u: 1, v: 3 },
        { u: 2, v: 3 },
        { u: 2, v: 4 },
        { u: 3, v: 4 }
      ],
      directed: true
    },
    miniGame: {
      title: "The Course Scheduler Paradox",
      instructions: "Courses A, B, and C have dependencies: A -> B, B -> C, and C -> A. Can a valid topological order be generated?",
      options: [
        "Yes: [A, B, C]",
        "Yes: [C, B, A]",
        "No, impossible because a directed cycle creates an unresolvable prerequisite deadlock!",
        "Yes, if we start at node B"
      ],
      correctIndex: 2,
      explanation: "A cycle (A -> B -> C -> A) means each course requires another to be taken first. No course can have in-degree 0, so no valid topological order exists!"
    },
    quiz: [
      {
        question: "Topological sorting can be applied to which type of graph?",
        options: ["Any undirected graph", "Directed Acyclic Graph (DAG)", "Graph with negative weight cycles", "Complete graph with self-loops"],
        correctIndex: 1,
        explanation: "Topological sort is strictly defined only for Directed Acyclic Graphs (DAGs)."
      },
      {
        question: "In Kahn's Algorithm, what happens if the number of popped elements is less than V?",
        options: ["Graph is disconnected", "Graph contains at least one directed cycle", "Graph has multiple components", "Graph has odd degrees"],
        correctIndex: 1,
        explanation: "If elements remain with in-degree > 0, they belong to or depend on a directed cycle."
      },
      {
        question: "What is the time complexity of Kahn's Algorithm for graph G(V, E)?",
        options: ["O(V^2)", "O(V + E)", "O(V log V)", "O(E log V)"],
        correctIndex: 1,
        explanation: "Computing in-degrees takes O(V + E) and each vertex and edge is processed at most once from the queue, yielding O(V + E)."
      }
    ],
    codeSolutions: {
      c: `// Kahn's Algorithm (Topological Sort & Cycle Detection) in C
#include <stdio.h>
#include <stdbool.h>

#define MAX 100

int adj[MAX][MAX];
int outDegree[MAX];
int inDegree[MAX];
int V;

void addDirectedEdge(int u, int v) {
    adj[u][outDegree[u]++] = v;
    inDegree[v]++;
}

bool topologicalSortKahn() {
    int queue[MAX], front = 0, rear = 0;
    int order[MAX], orderCount = 0;

    for (int i = 0; i < V; ++i) {
        if (inDegree[i] == 0) queue[rear++] = i;
    }

    while (front < rear) {
        int u = queue[front++];
        order[orderCount++] = u;

        for (int i = 0; i < outDegree[u]; ++i) {
            int v = adj[u][i];
            inDegree[v]--;
            if (inDegree[v] == 0) {
                queue[rear++] = v;
            }
        }
    }

    if (orderCount < V) {
        printf("Cycle detected! No valid topological order.\\n");
        return false;
    }

    printf("Topological Order: ");
    for (int i = 0; i < orderCount; ++i) printf("%d ", order[i]);
    printf("\\n");
    return true;
}

int main() {
    V = 5;
    addDirectedEdge(0, 1);
    addDirectedEdge(0, 2);
    addDirectedEdge(1, 3);
    addDirectedEdge(2, 3);
    addDirectedEdge(2, 4);
    addDirectedEdge(3, 4);

    topologicalSortKahn();
    return 0;
}`,
      cpp: `// Topological Sort using Kahn's Algorithm (BFS) in C++
#include <iostream>
#include <vector>
#include <queue>

using namespace std;

class DirectedCitadel {
    int V;
    vector<vector<int>> adj;
public:
    DirectedCitadel(int v) : V(v), adj(v) {}

    void addEdge(int u, int v) {
        adj[u].push_back(v);
    }

    vector<int> topologicalSort() {
        vector<int> inDegree(V, 0);
        for (int u = 0; u < V; ++u) {
            for (int v : adj[u]) inDegree[v]++;
        }

        queue<int> q;
        for (int i = 0; i < V; ++i) {
            if (inDegree[i] == 0) q.push(i);
        }

        vector<int> order;
        while (!q.empty()) {
            int u = q.front(); q.pop();
            order.push_back(u);

            for (int v : adj[u]) {
                if (--inDegree[v] == 0) {
                    q.push(v);
                }
            }
        }

        if (order.size() != (size_t)V) {
            cout << "Graph contains cycle! Cannot order.\\n";
            return {};
        }
        return order;
    }
};

int main() {
    DirectedCitadel citadel(5);
    citadel.addEdge(0, 1);
    citadel.addEdge(0, 2);
    citadel.addEdge(1, 3);
    citadel.addEdge(2, 3);
    citadel.addEdge(2, 4);
    citadel.addEdge(3, 4);

    auto res = citadel.topologicalSort();
    cout << "Order: ";
    for (int x : res) cout << x << " ";
    cout << "\\n";
    return 0;
}`,
      java: `// Topological Sort (Kahn's Algorithm) in Java
import java.util.*;

public class CitadelKahn {
    static List<Integer> topoSort(int V, List<List<Integer>> adj) {
        int[] inDegree = new int[V];
        for (int u = 0; u < V; u++) {
            for (int v : adj.get(u)) inDegree[v]++;
        }

        Queue<Integer> q = new LinkedList<>();
        for (int i = 0; i < V; i++) {
            if (inDegree[i] == 0) q.add(i);
        }

        List<Integer> order = new ArrayList<>();
        while (!q.isEmpty()) {
            int u = q.poll();
            order.add(u);
            for (int v : adj.get(u)) {
                if (--inDegree[v] == 0) {
                    q.add(v);
                }
            }
        }

        if (order.size() < V) {
            System.out.println("Cycle detected!");
            return Collections.emptyList();
        }
        return order;
    }

    public static void main(String[] args) {
        int V = 5;
        List<List<Integer>> adj = new ArrayList<>();
        for (int i = 0; i < V; i++) adj.add(new ArrayList<>());

        adj.get(0).add(1);
        adj.get(0).add(2);
        adj.get(1).add(3);
        adj.get(2).add(3);
        adj.get(2).add(4);
        adj.get(3).add(4);

        List<Integer> result = topoSort(V, adj);
        System.out.println("Topological Order: " + result);
    }
}`,
      python: `# Topological Sort using Kahn's Algorithm in Python
from collections import deque

def kahn_topological_sort(V: int, edges: list) -> list:
    adj = {i: [] for i in range(V)}
    in_degree = [0] * V

    for u, v in edges:
        adj[u].append(v)
        in_degree[v] += 1

    queue = deque([i for i in range(V) if in_degree[i] == 0])
    order = []

    while queue:
        u = queue.popleft()
        order.append(u)
        for v in adj[u]:
            in_degree[v] -= 1
            if in_degree[v] == 0:
                queue.append(v)

    if len(order) < V:
        print("Cycle detected! No topological sort possible.")
        return []
    return order

if __name__ == "__main__":
    edges = [(0, 1), (0, 2), (1, 3), (2, 3), (2, 4), (3, 4)]
    order = kahn_topological_sort(5, edges)
    print("Topological Order:", order)`
    }
  },
  {
    id: 4,
    title: "Level 4: The Bridges of Königsberg & Euler's Enigma",
    subtitle: "Eulerian Paths, Hierholzer's Algorithm, Bridges & Articulation Points",
    badgeName: "Eulerian Alchemist",
    badgeIcon: "🌉",
    themeColor: "#ff0077",
    pnrPrefix: "GL4-EULER",
    story: {
      kapilQuote: "Stand on the riverbanks of Königsberg! In 1736, the townspeople wondered if one could walk through the city crossing each of the 7 bridges exactly once. Leonhard Euler proved it impossible and invented Graph Theory on this very soil. Let's master the art of single-stroke traversals and critical network bridges!",
      context: "Kapil teaches you Eulerian path conditions, Hierholzer's algorithm, and Tarjan's discovery low-link values for detecting critical bridges that hold networks together."
    },
    theory: [
      {
        heading: "Eulerian Path vs. Eulerian Circuit",
        content: `- **Eulerian Trail / Path:** Traverses every **edge** in the graph exactly once.
- **Eulerian Circuit:** An Eulerian path that starts and ends at the **same vertex**.
- **Conditions in Undirected Graph (Connected component of edges):**
  - **Eulerian Circuit:** Every vertex has an **EVEN degree**.
  - **Eulerian Path:** Exactly **TWO vertices** have an **ODD degree** (the start and end points); all others have even degree.`
      },
      {
        heading: "Hierholzer's Algorithm ($O(E)$)",
        content: `Finds an Eulerian circuit by:
1. Start at any vertex with non-zero degree (or an odd degree vertex for a path).
2. Follow edges until returning to the start, removing traversed edges.
3. If any vertex on the tour has unused incident edges, start a sub-tour from it and splice it into the main tour.
- Time Complexity: $O(V + E)$ linear time!`
      },
      {
        heading: "Bridges & Articulation Points (Cut Vertices)",
        content: `- **Bridge:** An edge whose removal increases the number of connected components.
- **Articulation Point:** A vertex whose removal increases connected components.
- **Tarjan's Low-Link Algorithm ($O(V + E)$):**
  - Maintain discovery time \`tin[u]\` and lowest reachable ancestor \`low[u]\`.
  - An edge $(u, v)$ is a **bridge** if:
    $$\\text{low}[v] > \\text{tin}[u]$$
    (meaning from subtree $v$, there is no back-edge reaching $u$ or any ancestor of $u$).`
      }
    ],
    oopsMoment: {
      title: "Oops! Burning the Bridge Too Soon",
      scenario: "During a trail traversal, a coder crosses an edge without checking if it is a bridge while alternative incident edges were still available.",
      whyItFails: "Crossing a bridge cuts off the rest of the graph! You get stranded on an island with untraversed edges behind you.",
      kapilInsight: "Kapil advises: 'Fleury's golden rule: Never cross a bridge unless you have no other choice! Or use Hierholzer's algorithm to avoid bridge headaches altogether!'"
    },
    aahaMoment: {
      title: "Aaha! Parity of the Walk",
      content: "Whenever you enter a city and leave it, you must use 2 bridges (one in, one out). Therefore, any pass-through city MUST have an even number of bridges! Only your starting doorstep and your final destination can have odd bridges!"
    },
    interactiveDefaultGraph: {
      nodes: [
        { id: 0, label: "0: North Bank", x: 140, y: 80 },
        { id: 1, label: "1: Island", x: 280, y: 150 },
        { id: 2, label: "2: South Bank", x: 140, y: 220 },
        { id: 3, label: "3: East Bank", x: 420, y: 150 }
      ],
      edges: [
        { u: 0, v: 1, weight: 1 },
        { u: 0, v: 3, weight: 1 },
        { u: 1, v: 2, weight: 1 },
        { u: 2, v: 3, weight: 1 },
        { u: 1, v: 3, weight: 1 }
      ],
      directed: false
    },
    miniGame: {
      title: "Eulerian Circuit Calibrator",
      instructions: "A connected undirected graph has 6 vertices with degrees: [4, 4, 2, 2, 2, 2]. Does it have an Eulerian Circuit?",
      options: [
        "Yes! Because all vertex degrees are EVEN numbers.",
        "No, because the degree sum is 16.",
        "It only has an Eulerian Path, not a Circuit.",
        "No, graphs with 6 vertices require degree 6."
      ],
      correctIndex: 0,
      explanation: "Since all vertices have even degrees and the graph is connected, it satisfies Euler's theorem for possessing an Eulerian Circuit!"
    },
    quiz: [
      {
        question: "How many vertices can have odd degrees in an undirected graph that has an Eulerian Path (not circuit)?",
        options: ["0", "1", "Exactly 2", "Any odd number"],
        correctIndex: 2,
        explanation: "An Eulerian Path starts at one odd-degree vertex and terminates at the other, requiring exactly 2 odd-degree vertices."
      },
      {
        question: "In Tarjan's bridge finding algorithm, edge (u, v) is a bridge if which condition holds?",
        options: ["low[v] < tin[u]", "low[v] > tin[u]", "low[v] == tin[u]", "tin[v] > low[u]"],
        correctIndex: 1,
        explanation: "low[v] > tin[u] proves that no descendant of v can reach u or its ancestors without using edge (u, v), making it a critical bridge."
      },
      {
        question: "What is the difference between Eulerian Path and Hamiltonian Path?",
        options: [
          "Eulerian visits every vertex once; Hamiltonian visits every edge once",
          "Eulerian visits every edge once (polynomial time); Hamiltonian visits every vertex once (NP-Complete)",
          "They are mathematically identical",
          "Eulerian only applies to trees"
        ],
        correctIndex: 1,
        explanation: "Eulerian paths visit all edges once and can be solved in O(V+E) time, whereas finding a Hamiltonian path (visiting all vertices once) is NP-Complete."
      }
    ],
    codeSolutions: {
      c: `// Tarjan's Bridge-Finding Algorithm in C
#include <stdio.h>
#include <stdbool.h>

#define MAX 100
#define MIN(a,b) (((a)<(b))?(a):(b))

int adj[MAX][MAX];
int deg[MAX];
int tin[MAX], low[MAX], timer;
bool visited[MAX];
int V;

void addEdge(int u, int v) {
    adj[u][deg[u]++] = v;
    adj[v][deg[v]++] = u;
}

void dfsBridge(int u, int p) {
    visited[u] = true;
    tin[u] = low[u] = ++timer;

    for (int i = 0; i < deg[u]; ++i) {
        int v = adj[u][i];
        if (v == p) continue;
        if (visited[v]) {
            low[u] = MIN(low[u], tin[v]);
        } else {
            dfsBridge(v, u);
            low[u] = MIN(low[u], low[v]);
            if (low[v] > tin[u]) {
                printf("Bridge Found: (%d, %d)\\n", u, v);
            }
        }
    }
}

int main() {
    V = 4;
    timer = 0;
    addEdge(0, 1);
    addEdge(1, 2);
    addEdge(2, 0);
    addEdge(1, 3); // (1, 3) is a bridge

    for (int i = 0; i < V; ++i) {
        if (!visited[i]) dfsBridge(i, -1);
    }
    return 0;
}`,
      cpp: `// Hierholzer's Algorithm for Eulerian Circuit in C++
#include <iostream>
#include <vector>
#include <stack>
#include <algorithm>

using namespace std;

class EulerianGraph {
    int V;
    vector<vector<int>> adj;
public:
    EulerianGraph(int v) : V(v), adj(v) {}

    void addEdge(int u, int v) {
        adj[u].push_back(v);
        adj[v].push_back(u);
    }

    vector<int> findEulerianCircuit(int start) {
        auto tempAdj = adj;
        stack<int> currPath;
        vector<int> circuit;

        currPath.push(start);
        while (!currPath.empty()) {
            int u = currPath.top();
            if (!tempAdj[u].empty()) {
                int v = tempAdj[u].back();
                tempAdj[u].pop_back();
                // Remove reverse edge
                auto it = find(tempAdj[v].begin(), tempAdj[v].end(), u);
                if (it != tempAdj[v].end()) tempAdj[v].erase(it);

                currPath.push(v);
            } else {
                circuit.push_back(u);
                currPath.pop();
            }
        }
        reverse(circuit.begin(), circuit.end());
        return circuit;
    }
};

int main() {
    EulerianGraph g(3);
    g.addEdge(0, 1);
    g.addEdge(1, 2);
    g.addEdge(2, 0);

    auto circuit = g.findEulerianCircuit(0);
    cout << "Eulerian Circuit: ";
    for (int v : circuit) cout << v << " ";
    cout << "\\n";
    return 0;
}`,
      java: `// Tarjan's Bridge Detection in Java
import java.util.*;

public class TarjanBridges {
    static int timer = 0;

    static void dfs(int u, int p, List<List<Integer>> adj, int[] tin, int[] low, boolean[] vis) {
        vis[u] = true;
        tin[u] = low[u] = ++timer;

        for (int v : adj.get(u)) {
            if (v == p) continue;
            if (vis[v]) {
                low[u] = Math.min(low[u], tin[v]);
            } else {
                dfs(v, u, adj, tin, low, vis);
                low[u] = Math.min(low[u], low[v]);
                if (low[v] > tin[u]) {
                    System.out.println("Bridge Edge: " + u + " - " + v);
                }
            }
        }
    }

    public static void main(String[] args) {
        int V = 4;
        List<List<Integer>> adj = new ArrayList<>();
        for (int i = 0; i < V; i++) adj.add(new ArrayList<>());

        adj.get(0).add(1); adj.get(1).add(0);
        adj.get(1).add(2); adj.get(2).add(1);
        adj.get(2).add(0); adj.get(0).add(2);
        adj.get(1).add(3); adj.get(3).add(1); // Bridge

        int[] tin = new int[V];
        int[] low = new int[V];
        boolean[] vis = new boolean[V];

        for (int i = 0; i < V; i++) {
            if (!vis[i]) dfs(i, -1, adj, tin, low, vis);
        }
    }
}`,
      python: `# Finding Bridges using Tarjan's Low-Link in Python
def find_bridges(V: int, edges: list) -> list:
    adj = [[] for _ in range(V)]
    for u, v in edges:
        adj[u].append(v)
        adj[v].append(u)

    tin = [-1] * V
    low = [-1] * V
    timer = 0
    bridges = []

    def dfs(u: int, p: int):
        nonlocal timer
        timer += 1
        tin[u] = low[u] = timer

        for v in adj[u]:
            if v == p:
                continue
            if tin[v] != -1:
                low[u] = min(low[u], tin[v])
            else:
                dfs(v, u)
                low[u] = min(low[u], low[v])
                if low[v] > tin[u]:
                    bridges.append((u, v))

    for i in range(V):
        if tin[i] == -1:
            dfs(i, -1)
    return bridges

if __name__ == "__main__":
    edges = [(0, 1), (1, 2), (2, 0), (1, 3)]
    print("Detected Bridges:", find_bridges(4, edges))`
    }
  },
  {
    id: 5,
    title: "Level 5: The Shortest Path Sanctuaries",
    subtitle: "Dijkstra, Bellman-Ford, Negative Cycles & Floyd-Warshall",
    badgeName: "Shortest Path Oracle",
    badgeIcon: "⚡",
    themeColor: "#ffaa00",
    pnrPrefix: "GL5-PATH",
    story: {
      kapilQuote: "Welcome to the Sanctuaries of Speed! Routing billions of user packets across the globe requires finding the optimal path through weighted labyrinths. But watch your step: negative edge costs can trap greedy explorers in endless spacetime loops!",
      context: "Kapil breaks down Dijkstra's Priority Queue edge relaxation, Bellman-Ford's DP edge passes, and Floyd-Warshall's all-pairs distance matrix."
    },
    theory: [
      {
        heading: "Dijkstra's Algorithm (Greedy with Min-Heap)",
        content: `Calculates shortest path from a single source to all vertices on graphs with **NON-NEGATIVE edge weights**.
- **Edge Relaxation:**
  \`if (dist[v] > dist[u] + weight(u, v)) { dist[v] = dist[u] + weight(u, v); }\`
- Uses a **Min-Priority Queue** to always greedily process the unvisited vertex with minimal provisional distance.
- **Complexity:** $O((V + E) \\log V)$ using a binary min-heap.`
      },
      {
        heading: "The Negative Weight Pitfall & Bellman-Ford",
        content: `**Why Dijkstra FAILS on negative weights:**
Dijkstra greedily marks a vertex as finalized once popped. A negative edge later can decrease distance to an already 'finalized' node, breaking the greedy invariant!

**Bellman-Ford Algorithm:**
- Relaxes ALL $E$ edges $V-1$ times.
- Detects **negative weight cycles**: if an edge can STILL be relaxed on the $V$-th pass, an infinite negative cycle exists!
- **Complexity:** $O(V \\times E)$`
      },
      {
        heading: "Floyd-Warshall Algorithm (All-Pairs)",
        content: `Calculates the shortest path between every pair of vertices $(i, j)$ using dynamic programming:
$$dist[i][j] = \\min(dist[i][j], dist[i][k] + dist[k][j])$$
- Triple nested loop over intermediate vertex $k$, start $i$, end $j$.
- **Complexity:** $O(V^3)$ time, $O(V^2)$ space. Ideal for $V \\le 400$.`
      }
    ],
    oopsMoment: {
      title: "Oops! Dijkstra's Negative Vortex",
      scenario: "Running Dijkstra on a graph with an edge weight of -5, expecting correct results.",
      whyItFails: "Dijkstra never revisits finalized nodes. The algorithm terminates with wrong distances, or gets stuck in an infinite loop if nodes are allowed to be re-pushed!",
      kapilInsight: "Kapil cautions: 'The moment you see negative weights, put Dijkstra back in the garage and bring out Bellman-Ford or SPFA!'"
    },
    aahaMoment: {
      title: "Aaha! Why V - 1 Iterations Suffice",
      content: "Any simple shortest path in a graph of $V$ vertices contains at most $V-1$ edges. In the worst case, each full round of edge relaxations resolves at least 1 edge along that optimal path. Thus, after $V-1$ rounds, all shortest paths are mathematically fully computed!"
    },
    interactiveDefaultGraph: {
      nodes: [
        { id: 0, label: "0: SFO (Start)", x: 80, y: 150 },
        { id: 1, label: "1: ORD", x: 230, y: 80 },
        { id: 2, label: "2: DFW", x: 230, y: 220 },
        { id: 3, label: "3: JFK (End)", x: 400, y: 150 }
      ],
      edges: [
        { u: 0, v: 1, weight: 10 },
        { u: 0, v: 2, weight: 3 },
        { u: 2, v: 1, weight: 2 },
        { u: 1, v: 3, weight: 1 },
        { u: 2, v: 3, weight: 8 }
      ],
      directed: true
    },
    miniGame: {
      title: "The Optimal Routing Dispatcher",
      instructions: "From 0 (SFO) to 3 (JFK), which route has the lowest total cost in the graph above?",
      options: [
        "0 -> 1 -> 3 (Total: 11)",
        "0 -> 2 -> 3 (Total: 11)",
        "0 -> 2 -> 1 -> 3 (Total: 6: 3 + 2 + 1)",
        "0 -> 3 (Direct: 25)"
      ],
      correctIndex: 2,
      explanation: "Taking 0 -> 2 (cost 3), then 2 -> 1 (cost 2), then 1 -> 3 (cost 1) yields total cost 3 + 2 + 1 = 6, which is strictly less than 11!"
    },
    quiz: [
      {
        question: "Why does Dijkstra's algorithm fail when edges have negative weights?",
        options: [
          "Priority queue cannot store negative numbers",
          "Greedy assumption is broken because finalized nodes could be improved later by negative edges",
          "It takes O(V^4) time",
          "It only works on trees"
        ],
        correctIndex: 1,
        explanation: "Dijkstra assumes that once a vertex is removed from the priority queue, its shortest distance is immutable. Negative edges violate this greedy property."
      },
      {
        question: "How does the Bellman-Ford algorithm detect a negative weight cycle?",
        options: [
          "If all edge weights are negative",
          "If any distance can still be reduced on the V-th relaxation iteration",
          "If total cost exceeds 1,000",
          "If in-degree is zero"
        ],
        correctIndex: 1,
        explanation: "After V-1 relaxations, all shortest paths must be optimal. Any further reduction on pass V confirms a negative cycle."
      },
      {
        question: "What is the time complexity of the Floyd-Warshall all-pairs shortest path algorithm?",
        options: ["O(V + E)", "O(V log V)", "O(V^3)", "O(2^V)"],
        correctIndex: 2,
        explanation: "Floyd-Warshall uses three nested loops from 0 to V-1, yielding O(V^3) time."
      }
    ],
    codeSolutions: {
      c: `// Dijkstra's Algorithm in C using Adjacency Matrix
#include <stdio.h>
#include <stdbool.h>

#define V 4
#define INF 999999

int minDistance(int dist[], bool sptSet[]) {
    int min = INF, min_index = -1;
    for (int v = 0; v < V; v++) {
        if (!sptSet[v] && dist[v] <= min) {
            min = dist[v];
            min_index = v;
        }
    }
    return min_index;
}

void dijkstra(int graph[V][V], int src) {
    int dist[V];
    bool sptSet[V];

    for (int i = 0; i < V; i++) {
        dist[i] = INF;
        sptSet[i] = false;
    }
    dist[src] = 0;

    for (int count = 0; count < V - 1; count++) {
        int u = minDistance(dist, sptSet);
        if (u == -1) break;
        sptSet[u] = true;

        for (int v = 0; v < V; v++) {
            if (!sptSet[v] && graph[u][v] && dist[u] != INF 
                && dist[u] + graph[u][v] < dist[v]) {
                dist[v] = dist[u] + graph[u][v];
            }
        }
    }

    printf("Vertex \\t Distance from Source %d\\n", src);
    for (int i = 0; i < V; i++) printf("%d \\t\\t %d\\n", i, dist[i]);
}

int main() {
    int graph[V][V] = {
        {0, 10, 3, 0},
        {0, 0, 0, 1},
        {0, 2, 0, 8},
        {0, 0, 0, 0}
    };
    dijkstra(graph, 0);
    return 0;
}`,
      cpp: `// Dijkstra's Algorithm in C++ with Priority Queue
#include <iostream>
#include <vector>
#include <queue>

using namespace std;

const int INF = 1e9;

void dijkstra(int src, int V, const vector<vector<pair<int, int>>>& adj) {
    priority_queue<pair<int, int>, vector<pair<int, int>>, greater<pair<int, int>>> pq;
    vector<int> dist(V, INF);

    dist[src] = 0;
    pq.push({0, src});

    while (!pq.empty()) {
        auto [d, u] = pq.top();
        pq.pop();

        if (d > dist[u]) continue;

        for (auto [v, weight] : adj[u]) {
            if (dist[u] + weight < dist[v]) {
                dist[v] = dist[u] + weight;
                pq.push({dist[v], v});
            }
        }
    }

    cout << "Shortest distances from " << src << ":\\n";
    for (int i = 0; i < V; ++i) {
        cout << "To " << i << " : " << (dist[i] == INF ? -1 : dist[i]) << "\\n";
    }
}

int main() {
    int V = 4;
    vector<vector<pair<int, int>>> adj(V);
    adj[0].push_back({1, 10});
    adj[0].push_back({2, 3});
    adj[2].push_back({1, 2});
    adj[1].push_back({3, 1});
    adj[2].push_back({3, 8});

    dijkstra(0, V, adj);
    return 0;
}`,
      java: `// Dijkstra's Algorithm in Java
import java.util.*;

public class ShortestPathDijkstra {
    static class Edge {
        int to, weight;
        Edge(int to, int weight) { this.to = to; this.weight = weight; }
    }

    public static void dijkstra(int src, int V, List<List<Edge>> adj) {
        int[] dist = new int[V];
        Arrays.fill(dist, Integer.MAX_VALUE);
        PriorityQueue<int[]> pq = new PriorityQueue<>(Comparator.comparingInt(a -> a[0]));

        dist[src] = 0;
        pq.add(new int[]{0, src});

        while (!pq.isEmpty()) {
            int[] top = pq.poll();
            int d = top[0], u = top[1];

            if (d > dist[u]) continue;

            for (Edge e : adj.get(u)) {
                if (dist[u] + e.weight < dist[e.to]) {
                    dist[e.to] = dist[u] + e.weight;
                    pq.add(new int[]{dist[e.to], e.to});
                }
            }
        }

        System.out.println("Distances from " + src + ": " + Arrays.toString(dist));
    }

    public static void main(String[] args) {
        int V = 4;
        List<List<Edge>> adj = new ArrayList<>();
        for (int i = 0; i < V; i++) adj.add(new ArrayList<>());

        adj.get(0).add(new Edge(1, 10));
        adj.get(0).add(new Edge(2, 3));
        adj.get(2).add(new Edge(1, 2));
        adj.get(1).add(new Edge(3, 1));
        adj.get(2).add(new Edge(3, 8));

        dijkstra(0, V, adj);
    }
}`,
      python: `# Dijkstra's Algorithm in Python using heapq
import heapq

def dijkstra(V: int, edges: list, src: int) -> list:
    adj = {i: [] for i in range(V)}
    for u, v, w in edges:
        adj[u].append((v, w))

    dist = [float('inf')] * V
    dist[src] = 0
    pq = [(0, src)] # (distance, node)

    while pq:
        d, u = heapq.heappop(pq)
        if d > dist[u]:
            continue

        for v, weight in adj[u]:
            if dist[u] + weight < dist[v]:
                dist[v] = dist[u] + weight
                heapq.heappush(pq, (dist[v], v))

    return dist

if __name__ == "__main__":
    edges = [(0, 1, 10), (0, 2, 3), (2, 1, 2), (1, 3, 1), (2, 3, 8)]
    distances = dijkstra(4, edges, 0)
    print("Dijkstra Shortest Distances:", distances)`
    }
  },
  {
    id: 6,
    title: "Level 6: The Whispering Pines of Spanning Trees",
    subtitle: "MST, Kruskal's, Disjoint Set Union (DSU) & Prim's Algorithm",
    badgeName: "Minimum Spanning Warden",
    badgeIcon: "🌲",
    themeColor: "#00d084",
    pnrPrefix: "GL6-TREE",
    story: {
      kapilQuote: "Look upon the cybernetic power grid! Connecting all terminals with expensive fiber optic cables without creating redundant feedback loops is the essence of Minimum Spanning Trees. Master Disjoint Set Union, and you shall connect worlds at near constant time!",
      context: "Kapil reveals the Cut Property, Kruskal's edge sorting, DSU with Path Compression and Union by Rank, and Prim's frontier expansion."
    },
    theory: [
      {
        heading: "Minimum Spanning Tree (MST)",
        content: `For a connected, undirected, weighted graph:
- A **Spanning Tree** is a subgraph that connects all $V$ vertices using exactly $V - 1$ edges with **NO cycles**.
- A **Minimum Spanning Tree (MST)** is a spanning tree with the **minimum total edge weight sum**.`
      },
      {
        heading: "Disjoint Set Union (DSU / Union-Find)",
        content: `Manages partitioned sets with two primary operations:
1. **Find(x):** Identifies the representative leader of element $x$.
   - **Path Compression:** Flattens the tree during lookup: \`parent[x] = find(parent[x])\`.
2. **Union(x, y):** Merges sets of $x$ and $y$.
   - **Union by Rank / Size:** Attaches smaller tree under root of larger tree.
- **Amortized Complexity:** $\\alpha(V)$ (Inverse Ackermann function), essentially $O(1)$ in practice!`
      },
      {
        heading: "Kruskal's vs. Prim's Algorithm",
        content: `### Kruskal's Algorithm ($O(E \\log E)$)
1. Sort all edges in non-decreasing order of weight.
2. Iterate through sorted edges: if \`find(u) != find(v)\`, add edge to MST and call \`union(u, v)\`.
3. Stop when $V - 1$ edges are added.

### Prim's Algorithm ($O(E \\log V)$)
Grows MST from a starting node. Always greedily picks the minimum weight cut-edge connecting the visited tree to an unvisited vertex using a Min-Priority Queue.`
      }
    ],
    oopsMoment: {
      title: "Oops! DSU Without Path Compression",
      scenario: "Implementing DSU where `find(x)` just recursively traverses parent pointers without compressing paths.",
      whyItFails: "Trees degenerate into linear linked lists with depth $N$. `find()` degrades from $O(1)$ to $O(N)$, causing Kruskal's algorithm to crawl at $O(E \\cdot V)$!",
      kapilInsight: "Kapil smiles: 'One single line `return parent[x] = find(parent[x]);` compresses entire centuries into an instant!'"
    },
    aahaMoment: {
      title: "Aaha! The Magic of Inverse Ackermann",
      content: "With both Path Compression and Union by Rank, the time per operation is bounded by $\\alpha(N)$. For any value of $N$ up to the number of atoms in the observable universe ($10^{80}$), $\\alpha(N) < 5$! It is practically indistinguishable from $O(1)$ constant time!"
    },
    interactiveDefaultGraph: {
      nodes: [
        { id: 0, label: "0: Hub A", x: 120, y: 150 },
        { id: 1, label: "1: Hub B", x: 260, y: 80 },
        { id: 2, label: "2: Hub C", x: 260, y: 220 },
        { id: 3, label: "3: Hub D", x: 400, y: 150 }
      ],
      edges: [
        { u: 0, v: 1, weight: 1 },
        { u: 0, v: 2, weight: 4 },
        { u: 1, v: 2, weight: 2 },
        { u: 1, v: 3, weight: 6 },
        { u: 2, v: 3, weight: 3 }
      ],
      directed: false
    },
    miniGame: {
      title: "The Minimal Power Grid",
      instructions: "For the graph above with 4 nodes, which 3 edges form the Minimum Spanning Tree?",
      options: [
        "(0-1: 1), (1-2: 2), (2-3: 3) [Total Weight: 6]",
        "(0-2: 4), (1-3: 6), (2-3: 3) [Total Weight: 13]",
        "(0-1: 1), (0-2: 4), (1-3: 6) [Total Weight: 11]",
        "(1-2: 2), (1-3: 6), (0-2: 4) [Total Weight: 12]"
      ],
      correctIndex: 0,
      explanation: "Kruskal's sorts edges: (0-1: 1), (1-2: 2), (2-3: 3). Adding these 3 edges connects all 4 nodes without cycles for a minimal weight of 1 + 2 + 3 = 6!"
    },
    quiz: [
      {
        question: "How many edges are in a spanning tree of a connected graph with V vertices?",
        options: ["V", "V - 1", "V + 1", "E - 1"],
        correctIndex: 1,
        explanation: "A tree connecting V vertices always contains exactly V - 1 edges."
      },
      {
        question: "What is the primary purpose of Path Compression in Disjoint Set Union?",
        options: [
          "To sort the edges by weight",
          "To flatten the tree structure so future find queries run in almost O(1) time",
          "To prevent duplicate edges",
          "To check if edge weights are negative"
        ],
        correctIndex: 1,
        explanation: "Path compression redirects traversed nodes directly to the root, preventing tall tree degeneration."
      },
      {
        question: "Which algorithm sorts edges first before greedily building the MST?",
        options: ["Prim's Algorithm", "Kruskal's Algorithm", "Dijkstra's Algorithm", "Floyd-Warshall"],
        correctIndex: 1,
        explanation: "Kruskal's algorithm sorts all edges by weight and uses DSU to prevent cycles."
      }
    ],
    codeSolutions: {
      c: `// Kruskal's Algorithm with DSU in C
#include <stdio.h>
#include <stdlib.h>

struct Edge {
    int u, v, weight;
};

int parent[100];

int findParent(int i) {
    if (parent[i] == i) return i;
    return parent[i] = findParent(parent[i]); // Path compression
}

void unionSets(int i, int j) {
    int rootA = findParent(i);
    int rootB = findParent(j);
    parent[rootA] = rootB;
}

int compareEdges(const void* a, const void* b) {
    return ((struct Edge*)a)->weight - ((struct Edge*)b)->weight;
}

int main() {
    int V = 4, E = 5;
    struct Edge edges[] = {
        {0, 1, 1},
        {1, 2, 2},
        {2, 3, 3},
        {0, 2, 4},
        {1, 3, 6}
    };

    for (int i = 0; i < V; ++i) parent[i] = i;

    qsort(edges, E, sizeof(struct Edge), compareEdges);

    int mstWeight = 0, edgesCount = 0;
    printf("MST Edges:\\n");
    for (int i = 0; i < E && edgesCount < V - 1; ++i) {
        int u = edges[i].u;
        int v = edges[i].v;
        if (findParent(u) != findParent(v)) {
            unionSets(u, v);
            printf("%d - %d (weight %d)\\n", u, v, edges[i].weight);
            mstWeight += edges[i].weight;
            edgesCount++;
        }
    }
    printf("Total MST Weight: %d\\n", mstWeight);
    return 0;
}`,
      cpp: `// Kruskal's MST with DSU in C++
#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

struct Edge {
    int u, v, w;
    bool operator<(const Edge& other) const {
        return w < other.w;
    }
};

class DSU {
    vector<int> parent, rank;
public:
    DSU(int n) : parent(n), rank(n, 0) {
        for (int i = 0; i < n; ++i) parent[i] = i;
    }

    int find(int i) {
        if (parent[i] == i) return i;
        return parent[i] = find(parent[i]); // Path compression
    }

    bool unite(int i, int j) {
        int rootI = find(i);
        int rootJ = find(j);
        if (rootI != rootJ) {
            if (rank[rootI] < rank[rootJ]) swap(rootI, rootJ);
            parent[rootJ] = rootI;
            if (rank[rootI] == rank[rootJ]) rank[rootI]++;
            return true;
        }
        return false;
    }
};

int main() {
    int V = 4;
    vector<Edge> edges = {
        {0, 1, 1}, {1, 2, 2}, {2, 3, 3}, {0, 2, 4}, {1, 3, 6}
    };

    sort(edges.begin(), edges.end());
    DSU dsu(V);
    int mstCost = 0;

    cout << "Kruskal MST Selected Edges:\\n";
    for (const auto& e : edges) {
        if (dsu.unite(e.u, e.v)) {
            cout << e.u << " - " << e.v << " : " << e.w << "\\n";
            mstCost += e.w;
        }
    }
    cout << "Total MST Cost: " << mstCost << "\\n";
    return 0;
}`,
      java: `// Kruskal's Algorithm in Java
import java.util.*;

public class KruskalMST {
    static class Edge implements Comparable<Edge> {
        int u, v, w;
        Edge(int u, int v, int w) { this.u = u; this.v = v; this.w = w; }
        public int compareTo(Edge o) { return Integer.compare(this.w, o.w); }
    }

    static class DSU {
        int[] parent;
        DSU(int n) {
            parent = new int[n];
            for (int i = 0; i < n; i++) parent[i] = i;
        }
        int find(int i) {
            if (parent[i] == i) return i;
            return parent[i] = find(parent[i]);
        }
        boolean union(int i, int j) {
            int rootI = find(i), rootJ = find(j);
            if (rootI != rootJ) {
                parent[rootJ] = rootI;
                return true;
            }
            return false;
        }
    }

    public static void main(String[] args) {
        int V = 4;
        List<Edge> edges = Arrays.asList(
            new Edge(0, 1, 1),
            new Edge(1, 2, 2),
            new Edge(2, 3, 3),
            new Edge(0, 2, 4),
            new Edge(1, 3, 6)
        );

        Collections.sort(edges);
        DSU dsu = new DSU(V);
        int totalWeight = 0;

        for (Edge e : edges) {
            if (dsu.union(e.u, e.v)) {
                System.out.println(e.u + " - " + e.v + " : " + e.w);
                totalWeight += e.w;
            }
        }
        System.out.println("MST Total Weight: " + totalWeight);
    }
}`,
      python: `# Kruskal's MST in Python with DSU
class DSU:
    def __init__(self, n: int):
        self.parent = list(range(n))

    def find(self, i: int) -> int:
        if self.parent[i] == i:
            return i
        self.parent[i] = self.find(self.parent[i])
        return self.parent[i]

    def union(self, i: int, j: int) -> bool:
        root_i = self.find(i)
        root_j = self.find(j)
        if root_i != root_j:
            self.parent[root_j] = root_i
            return True
        return False

def kruskal_mst(V: int, edges: list) -> tuple:
    edges.sort(key=lambda x: x[2]) # sort by weight
    dsu = DSU(V)
    mst = []
    total_cost = 0

    for u, v, w in edges:
        if dsu.union(u, v):
            mst.append((u, v, w))
            total_cost += w
            if len(mst) == V - 1:
                break

    return mst, total_cost

if __name__ == "__main__":
    edges = [(0, 1, 1), (1, 2, 2), (2, 3, 3), (0, 2, 4), (1, 3, 6)]
    tree, cost = kruskal_mst(4, edges)
    print("MST Edges:", tree)
    print("Total MST Cost:", cost)`
    }
  },
  {
    id: 7,
    title: "Level 7: The Master's Lair - Advanced Flows & Bipartite Realms",
    subtitle: "Bipartite Matching, SCCs (Kosaraju & Tarjan) & Max-Flow Min-Cut",
    badgeName: "Flow Overlord",
    badgeIcon: "👑",
    themeColor: "#ff0033",
    pnrPrefix: "GL7-FLOW",
    story: {
      kapilQuote: "You have arrived at the pinnacle of GraphLand: The Master's Lair. Here lies the true power of network science: partitioning graphs into bipartite factions, collapsing strongly connected components into condensed DAGs, and pushing maximal flow through bottlenecked internet pipes!",
      context: "Kapil guides you through the crowning algorithms of competitive programming and distributed systems: 2-coloring, Kosaraju's two-pass SCC, and the Max-Flow Min-Cut Theorem."
    },
    theory: [
      {
        heading: "Bipartite Graphs & 2-Coloring",
        content: `A graph is **Bipartite** if its vertices can be partitioned into two independent sets $U$ and $V$ such that every edge connects a vertex in $U$ to one in $V$.
- **Theorem:** A graph is Bipartite **IF AND ONLY IF** it contains **NO odd-length cycles**!
- Tested via BFS or DFS 2-Coloring: alternate colors 0 and 1. If an adjacent neighbor already has the SAME color $\\to$ Not Bipartite!`
      },
      {
        heading: "Strongly Connected Components (SCC) - Kosaraju's Algorithm",
        content: `In a directed graph, an **SCC** is a maximal set of vertices such that every vertex in the set is reachable from every other vertex in the set.
**Kosaraju's 3-Step Elegance ($O(V + E)$):**
1. Run DFS on original graph, pushing nodes to a Stack by finish time.
2. Compute the **Transpose Graph** $G^T$ (reverse the direction of all edges).
3. Pop nodes from Stack and run DFS on $G^T$. Each DFS tree discovers one complete SCC!`
      },
      {
        heading: "Maximum Flow & Min-Cut Theorem",
        content: `In a flow network with source $S$, sink $T$, and capacities $C(u, v)$:
- **Augmenting Path:** A path from $S$ to $T$ in the **Residual Graph** with positive residual capacity.
- **Ford-Fulkerson / Edmonds-Karp:** Repeatedly find augmenting paths using BFS and augment flow along bottlenecks.
- **Max-Flow Min-Cut Theorem:** The maximum value of an $S-T$ flow is strictly equal to the capacity of the **minimum cut** separating $S$ and $T$.`
      }
    ],
    oopsMoment: {
      title: "Oops! Forgetting Residual Backward Edges",
      scenario: "Attempting to solve Max Flow by greedily pushing flow along forward paths without maintaining backward residual edges.",
      whyItFails: "A greedy forward choice can saturate a suboptimal edge and block the globally optimal flow! Backward edges are essential to allow later augmenting paths to 'undo' or redirect previously committed flow.",
      kapilInsight: "Kapil teaches: 'In flow theory as in life, you must allow algorithms to undo past choices. Backward edges turn naive greed into mathematical optimality!'"
    },
    aahaMoment: {
      title: "Aaha! Duality of Max Flow and Min Cut",
      content: "When maximum flow is pushed, the graph saturates along a bottleneck boundary that splits vertices into $S$ and $T$. The sum of capacities of that exact bottleneck equals the max flow value! Max Flow IS Min Cut!"
    },
    interactiveDefaultGraph: {
      nodes: [
        { id: 0, label: "S: Source", x: 80, y: 150 },
        { id: 1, label: "1: Router A", x: 230, y: 80 },
        { id: 2, label: "2: Router B", x: 230, y: 220 },
        { id: 3, label: "T: Sink", x: 380, y: 150 }
      ],
      edges: [
        { u: 0, v: 1, weight: 10 },
        { u: 0, v: 2, weight: 10 },
        { u: 1, v: 2, weight: 2 },
        { u: 1, v: 3, weight: 4 },
        { u: 2, v: 3, weight: 9 }
      ],
      directed: true
    },
    miniGame: {
      title: "The Bipartite Test Chamber",
      instructions: "Does a 5-cycle graph (triangle + 2 vertices forming a pentagon C5) satisfy bipartite partitioning?",
      options: [
        "Yes, color 3 nodes blue and 2 nodes red",
        "No, because it contains an odd-length cycle (length 5), making 2-coloring impossible!",
        "Yes, any graph with 5 vertices is bipartite",
        "Only if weights are even"
      ],
      correctIndex: 1,
      explanation: "A graph is bipartite if and only if it has NO odd-length cycles. A cycle of length 5 creates a color collision on the 5th edge!"
    },
    quiz: [
      {
        question: "A graph is bipartite if and only if it contains:",
        options: ["No cycles at all", "No odd-length cycles", "At least one self-loop", "Even number of total vertices"],
        correctIndex: 1,
        explanation: "By Koenig's theorem, a graph is bipartite if and only if it contains no odd cycles."
      },
      {
        question: "What is the role of reversing all edges in Kosaraju's SCC algorithm?",
        options: [
          "To convert negative weights into positive weights",
          "To prevent traversals from leaking into already processed SCCs while keeping internal SCC reachability intact",
          "To sort the vertices topologically",
          "To find the minimum spanning tree"
        ],
        correctIndex: 1,
        explanation: "Within an SCC, all vertices remain mutually reachable in G^T, but edges between different SCCs are reversed, confining DFS strictly inside individual components."
      },
      {
        question: "The Max-Flow Min-Cut Theorem proves that the maximum flow from S to T equals:",
        options: [
          "The number of edges in the graph",
          "The capacity of the minimum S-T cut",
          "The shortest path length from S to T",
          "The sum of all vertex degrees"
        ],
        correctIndex: 1,
        explanation: "The maximum amount of flow equals the bottleneck capacity of the minimum cut separating source S from sink T."
      }
    ],
    codeSolutions: {
      c: `// Bipartite Graph Check (2-Coloring BFS) in C
#include <stdio.h>
#include <stdbool.h>

#define MAX 100

int adj[MAX][MAX];
int deg[MAX];
int color[MAX];
int V;

void addEdge(int u, int v) {
    adj[u][deg[u]++] = v;
    adj[v][deg[v]++] = u;
}

bool isBipartite(int start) {
    for (int i = 0; i < V; ++i) color[i] = -1;

    int queue[MAX], front = 0, rear = 0;
    color[start] = 1;
    queue[rear++] = start;

    while (front < rear) {
        int u = queue[front++];
        for (int i = 0; i < deg[u]; ++i) {
            int v = adj[u][i];
            if (color[v] == -1) {
                color[v] = 1 - color[u]; // Alternate color
                queue[rear++] = v;
            } else if (color[v] == color[u]) {
                return false; // Collision!
            }
        }
    }
    return true;
}

int main() {
    V = 4;
    addEdge(0, 1);
    addEdge(1, 2);
    addEdge(2, 3);
    addEdge(3, 0);

    printf("Is 4-cycle bipartite? %s\\n", isBipartite(0) ? "YES" : "NO");
    return 0;
}`,
      cpp: `// Kosaraju's Algorithm for Strongly Connected Components (SCC) in C++
#include <iostream>
#include <vector>
#include <stack>

using namespace std;

class KosarajuSCC {
    int V;
    vector<vector<int>> adj, adjRev;
public:
    KosarajuSCC(int v) : V(v), adj(v), adjRev(v) {}

    void addEdge(int u, int v) {
        adj[u].push_back(v);
        adjRev[v].push_back(u); // Transpose graph
    }

    void dfs1(int u, vector<bool>& vis, stack<int>& st) {
        vis[u] = true;
        for (int v : adj[u]) {
            if (!vis[v]) dfs1(v, vis, st);
        }
        st.push(u);
    }

    void dfs2(int u, vector<bool>& vis, vector<int>& component) {
        vis[u] = true;
        component.push_back(u);
        for (int v : adjRev[u]) {
            if (!vis[v]) dfs2(v, vis, component);
        }
    }

    vector<vector<int>> getSCCs() {
        stack<int> st;
        vector<bool> vis(V, false);

        for (int i = 0; i < V; ++i) {
            if (!vis[i]) dfs1(i, vis, st);
        }

        fill(vis.begin(), vis.end(), false);
        vector<vector<int>> sccs;

        while (!st.empty()) {
            int u = st.top(); st.pop();
            if (!vis[u]) {
                vector<int> component;
                dfs2(u, vis, component);
                sccs.push_back(component);
            }
        }
        return sccs;
    }
};

int main() {
    KosarajuSCC g(5);
    g.addEdge(1, 0);
    g.addEdge(0, 2);
    g.addEdge(2, 1);
    g.addEdge(0, 3);
    g.addEdge(3, 4);

    auto sccs = g.getSCCs();
    cout << "Strongly Connected Components:\\n";
    for (const auto& comp : sccs) {
        cout << "[ ";
        for (int node : comp) cout << node << " ";
        cout << "]\\n";
    }
    return 0;
}`,
      java: `// Edmonds-Karp Algorithm for Maximum Flow in Java
import java.util.*;

public class MaxFlowEdmondsKarp {
    static int bfs(int s, int t, int[][] capacity, int[][] residual, int[] parent, int V) {
        Arrays.fill(parent, -1);
        parent[s] = -2;
        Queue<int[]> q = new LinkedList<>();
        q.add(new int[]{s, Integer.MAX_VALUE});

        while (!q.isEmpty()) {
            int[] top = q.poll();
            int u = top[0], flow = top[1];

            for (int v = 0; v < V; v++) {
                if (parent[v] == -1 && residual[u][v] > 0) {
                    parent[v] = u;
                    int newFlow = Math.min(flow, residual[u][v]);
                    if (v == t) return newFlow;
                    q.add(new int[]{v, newFlow});
                }
            }
        }
        return 0;
    }

    public static int maxFlow(int s, int t, int[][] capacity, int V) {
        int[][] residual = new int[V][V];
        for (int i = 0; i < V; i++) {
            System.arraycopy(capacity[i], 0, residual[i], 0, V);
        }

        int[] parent = new int[V];
        int totalFlow = 0;
        int newFlow;

        while ((newFlow = bfs(s, t, capacity, residual, parent, V)) > 0) {
            totalFlow += newFlow;
            int curr = t;
            while (curr != s) {
                int prev = parent[curr];
                residual[prev][curr] -= newFlow;
                residual[curr][prev] += newFlow; // Backward edge
                curr = prev;
            }
        }
        return totalFlow;
    }

    public static void main(String[] args) {
        int V = 4;
        int[][] capacity = new int[V][V];
        capacity[0][1] = 10;
        capacity[0][2] = 10;
        capacity[1][2] = 2;
        capacity[1][3] = 4;
        capacity[2][3] = 9;

        System.out.println("Maximum Flow: " + maxFlow(0, 3, capacity, V));
    }
}`,
      python: `# Kosaraju's Algorithm for SCC in Python
def kosaraju_scc(V: int, edges: list) -> list:
    adj = [[] for _ in range(V)]
    adj_rev = [[] for _ in range(V)]

    for u, v in edges:
        adj[u].append(v)
        adj_rev[v].append(u)

    stack = []
    visited = [False] * V

    def dfs1(u: int):
        visited[u] = True
        for v in adj[u]:
            if not visited[v]:
                dfs1(v)
        stack.append(u)

    for i in range(V):
        if not visited[i]:
            dfs1(i)

    visited = [False] * V
    sccs = []

    def dfs2(u: int, comp: list):
        visited[u] = True
        comp.append(u)
        for v in adj_rev[u]:
            if not visited[v]:
                dfs2(v, comp)

    while stack:
        u = stack.pop()
        if not visited[u]:
            component = []
            dfs2(u, component)
            sccs.append(component)

    return sccs

if __name__ == "__main__":
    edges = [(1, 0), (0, 2), (2, 1), (0, 3), (3, 4)]
    components = kosaraju_scc(5, edges)
    print("SCC Components:", components)`
    }
  }
];
