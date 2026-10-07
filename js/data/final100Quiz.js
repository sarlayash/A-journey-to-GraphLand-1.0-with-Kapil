// Final Grand Exam: 100 Comprehensive FAANG-Grade Graph MCQs
// Every topic covered from basic to advanced graph DSA
// Passing Score: 90% (90/100). Only 1 Retake allowed, then locked for 24 hours.

export const FINAL_100_QUIZ = [
  // SECTION 1: Graph Basics, Representations & Degrees (1 - 15)
  {
    id: 1,
    question: "In any finite undirected graph, what is the sum of degrees of all vertices equal to?",
    options: ["|V| * |E|", "2 * |E|", "|E| / 2", "|V| + |E|"],
    correctIndex: 1,
    explanation: "By the Handshaking Lemma, every edge connects two endpoints and contributes 2 to the total degree sum. Thus, sum of degrees = 2 * |E|."
  },
  {
    id: 2,
    question: "Why must any undirected graph have an EVEN number of vertices with odd degrees?",
    options: [
      "Because vertex degrees must all be prime numbers",
      "Because the sum of all degrees is 2*|E| (even); the sum of an odd number of odd terms would be odd, a contradiction",
      "Because graph edges cannot intersect in Euclidean space",
      "Because every graph must have a Hamiltonian cycle"
    ],
    correctIndex: 1,
    explanation: "Total sum of degrees is even (2*|E|). Even degree vertices contribute an even sum. The odd degree vertices must sum to an even number, which is only possible if there is an even count of them."
  },
  {
    id: 3,
    question: "What is the maximum number of edges in a simple undirected graph with V vertices (no self-loops or multi-edges)?",
    options: ["V * (V - 1) / 2", "V^2", "2^V", "V * (V + 1) / 2"],
    correctIndex: 0,
    explanation: "Choosing 2 distinct vertices out of V gives C(V, 2) = V * (V - 1) / 2 possible edges."
  },
  {
    id: 4,
    question: "What is the maximum number of edges in a simple directed graph with V vertices?",
    options: ["V * (V - 1) / 2", "V * (V - 1)", "V^2 / 2", "2 * V"],
    correctIndex: 1,
    explanation: "In a directed graph, an ordered pair (u, v) can exist for any u != v. There are V choices for u and V-1 choices for v, giving V * (V - 1) directed edges."
  },
  {
    id: 5,
    question: "Which graph representation has space complexity O(V^2) regardless of the number of edges?",
    options: ["Adjacency List", "Adjacency Matrix", "Edge List", "Forward Star Representation"],
    correctIndex: 1,
    explanation: "An Adjacency Matrix allocates a V x V 2D grid, always consuming O(V^2) space."
  },
  {
    id: 6,
    question: "What is the time complexity to iterate through all adjacent neighbors of vertex u in an Adjacency Matrix of size V x V?",
    options: ["O(deg(u))", "O(V)", "O(1)", "O(log V)"],
    correctIndex: 1,
    explanation: "You must scan all V columns of row u in the matrix to find entries that equal 1, which takes O(V) time."
  },
  {
    id: 7,
    question: "In an Adjacency List representation, what is the space complexity for a graph G = (V, E)?",
    options: ["O(V^2)", "O(V + E)", "O(E * log V)", "O(V * E)"],
    correctIndex: 1,
    explanation: "The outer array/vector takes O(V) space and the total elements across all neighbor lists equals 2*E (undirected) or E (directed), totaling O(V + E)."
  },
  {
    id: 8,
    question: "What is a 'sparse graph' in computational graph theory?",
    options: [
      "A graph where E is on the order of O(V) or significantly smaller than V^2",
      "A graph with no cycles",
      "A graph where all edge weights are 0",
      "A graph where every node has degree V - 1"
    ],
    correctIndex: 0,
    explanation: "A graph is sparse when the number of edges E is far less than the theoretical maximum V^2 (typically E = O(V))."
  },
  {
    id: 9,
    question: "What is a 'dense graph'?",
    options: [
      "A graph where E is close to the maximum possible O(V^2)",
      "A graph with floating point weights",
      "A graph with high vertex latency",
      "A graph with disconnected components"
    ],
    correctIndex: 0,
    explanation: "A graph is dense when its number of edges approaches V^2."
  },
  {
    id: 10,
    question: "A graph is 'k-regular' if:",
    options: [
      "Every vertex has degree exactly k",
      "The graph has exactly k connected components",
      "The diameter of the graph is k",
      "The graph has k cycles"
    ],
    correctIndex: 0,
    explanation: "By definition, a k-regular graph is one where each vertex has degree k."
  },
  {
    id: 11,
    question: "In a directed graph, the sum of in-degrees of all vertices is equal to:",
    options: [
      "Sum of out-degrees, which equals |E|",
      "Twice the sum of out-degrees",
      "|V| * |E|",
      "|E| / 2"
    ],
    correctIndex: 0,
    explanation: "Every directed edge starts at one vertex (contributing +1 out-degree) and ends at another (contributing +1 in-degree). Thus, sum(in-deg) = sum(out-deg) = |E|."
  },
  {
    id: 12,
    question: "What is a self-loop in a graph?",
    options: [
      "An edge connecting a vertex to itself",
      "A cycle of length 3",
      "A recursion call in DFS",
      "A vertex with degree 0"
    ],
    correctIndex: 0,
    explanation: "A self-loop is an edge (u, u) that connects a vertex directly back to itself."
  },
  {
    id: 13,
    question: "What is a simple graph?",
    options: [
      "An undirected graph with no self-loops and no multi-edges between the same pair of vertices",
      "A graph with only 3 vertices",
      "A tree with depth 1",
      "A graph where all weights are 1"
    ],
    correctIndex: 0,
    explanation: "A simple graph contains neither self-loops nor multiple edges connecting the same vertex pair."
  },
  {
    id: 14,
    question: "What is the incidence matrix of a graph with V vertices and E edges?",
    options: [
      "A V x E matrix where rows represent vertices and columns represent edges",
      "A V x V matrix storing edge weights",
      "An E x E matrix storing neighbor relations",
      "A 1D array of vertex degrees"
    ],
    correctIndex: 0,
    explanation: "An incidence matrix has dimensions V x E where cell (v, e) indicates whether vertex v is an endpoint of edge e."
  },
  {
    id: 15,
    question: "If a simple connected graph has V vertices and V - 1 edges, it is guaranteed to be:",
    options: ["A tree", "A complete graph", "A bipartite graph with cycles", "A disconnected forest"],
    correctIndex: 0,
    explanation: "A connected graph with V vertices and V - 1 edges has no cycles and is by definition a Tree."
  },

  // SECTION 2: BFS, DFS & Traversal Properties (16 - 30)
  {
    id: 16,
    question: "Breadth-First Search (BFS) on an unweighted graph traverses vertices using which data structure?",
    options: ["Queue (FIFO)", "Stack (LIFO)", "Priority Queue", "Disjoint Set"],
    correctIndex: 0,
    explanation: "BFS explores layer by layer using a First-In-First-Out Queue."
  },
  {
    id: 17,
    question: "What is the time complexity of BFS or DFS on a graph represented as an Adjacency List?",
    options: ["O(V + E)", "O(V * E)", "O(V^2)", "O(E log V)"],
    correctIndex: 0,
    explanation: "Each vertex is visited once (O(V)) and every incident edge is inspected once or twice (O(E)), giving O(V + E)."
  },
  {
    id: 18,
    question: "What is the time complexity of BFS on a graph represented as an Adjacency Matrix?",
    options: ["O(V + E)", "O(V^2)", "O(E^2)", "O(V log V)"],
    correctIndex: 1,
    explanation: "For each vertex popped, we scan all V entries of its row in the matrix, leading to V * V = O(V^2) total operations."
  },
  {
    id: 19,
    question: "Which traversal algorithm naturally discovers the shortest path (minimum edge count) from a source in an unweighted graph?",
    options: ["BFS", "DFS", "Pre-order traversal", "Kosaraju's algorithm"],
    correctIndex: 0,
    explanation: "BFS discovers vertices in non-decreasing order of distance from the source, guaranteeing shortest path in unweighted graphs."
  },
  {
    id: 20,
    question: "What type of data structure does recursive Depth-First Search (DFS) utilize under the hood?",
    options: ["Call Stack (LIFO)", "Ring Buffer", "Min-Heap", "Hash Set"],
    correctIndex: 0,
    explanation: "Recursive DFS relies on the system function call stack (LIFO behavior)."
  },
  {
    id: 21,
    question: "In an undirected graph, how can DFS detect the presence of a cycle?",
    options: [
      "If it reaches an already visited vertex that is NOT the immediate parent",
      "If it reaches a vertex with degree 0",
      "If all vertices have odd degrees",
      "If recursion depth exceeds V"
    ],
    correctIndex: 0,
    explanation: "If an adjacent neighbor is already visited and is not the vertex from which we just arrived, an alternative path exists, forming a cycle."
  },
  {
    id: 22,
    question: "What is a 'connected component' of an undirected graph?",
    options: [
      "A maximal subgraph in which any two vertices are connected to each other by paths",
      "The set of all cut vertices",
      "A clique of size 3",
      "The shortest path between source and sink"
    ],
    correctIndex: 0,
    explanation: "A connected component is an equivalence class of vertices under the reachability relation."
  },
  {
    id: 23,
    question: "What is the maximum number of connected components in an undirected graph with V vertices?",
    options: ["V", "V * (V - 1)", "1", "V / 2"],
    correctIndex: 0,
    explanation: "If the graph has 0 edges (an empty graph), each of the V vertices forms its own isolated connected component."
  },
  {
    id: 24,
    question: "During DFS traversal of a directed graph, an edge pointing to an ancestor currently on the active recursion call stack is called a:",
    options: ["Back-edge", "Forward-edge", "Cross-edge", "Tree-edge"],
    correctIndex: 0,
    explanation: "Back-edges point from a descendant to an ancestor in the DFS tree, indicating a cycle in directed graphs."
  },
  {
    id: 25,
    question: "In directed graph DFS, an edge connecting vertex u to an already visited vertex v that is neither an ancestor nor a descendant is called a:",
    options: ["Cross-edge", "Back-edge", "Forward-edge", "Tree-edge"],
    correctIndex: 0,
    explanation: "Cross-edges connect vertices across different branches or trees in the DFS forest without ancestor-descendant relation."
  },
  {
    id: 26,
    question: "What is the diameter of an unweighted tree with V vertices?",
    options: [
      "The maximum shortest-path distance between any pair of vertices in the tree",
      "The sum of all edge weights",
      "The degree of the root vertex",
      "The number of leaves"
    ],
    correctIndex: 0,
    explanation: "Tree diameter is the longest simple path between any two nodes in the tree."
  },
  {
    id: 27,
    question: "How can the diameter of an unweighted tree be found using two BFS/DFS traversals?",
    options: [
      "Run BFS from any node u to find farthest node v; then run BFS from v to find farthest node w; dist(v, w) is the diameter",
      "Run BFS from all leaf nodes simultaneously",
      "Sort vertices by degree and take top two",
      "Calculate V - 1"
    ],
    correctIndex: 0,
    explanation: "The two-BFS technique: the farthest node from any arbitrary start node is guaranteed to be an endpoint of a diameter path; a second BFS from that endpoint finds the other end."
  },
  {
    id: 28,
    question: "What is the space complexity of BFS on a balanced binary tree with V vertices?",
    options: ["O(V)", "O(log V)", "O(1)", "O(V^2)"],
    correctIndex: 0,
    explanation: "In the last level of a balanced binary tree, the queue holds roughly V/2 nodes, which is O(V) space."
  },
  {
    id: 29,
    question: "What is 0-1 BFS used for?",
    options: [
      "Finding shortest path in graphs where edge weights are strictly either 0 or 1 in O(V + E) using a Deque",
      "Sorting binary trees",
      "Graph 2-coloring",
      "Counting total edges"
    ],
    correctIndex: 0,
    explanation: "0-1 BFS pushes weight-0 edge transitions to the front of a Deque and weight-1 transitions to the back, running in linear O(V + E) time."
  },
  {
    id: 30,
    question: "What is multi-source BFS?",
    options: [
      "Pushing multiple starting vertices into the queue at distance 0 before beginning traversal",
      "Running BFS concurrently on multiple threads without synchronization",
      "Traversing multiple edges in a single step",
      "A BFS that only searches even numbered nodes"
    ],
    correctIndex: 0,
    explanation: "Multi-source BFS initializes the queue with all source nodes at distance 0 to compute minimum distance from ANY source to all other nodes."
  },

  // SECTION 3: DAGs, Topological Sorting & Kahn's Algorithm (31 - 45)
  {
    id: 31,
    question: "A Directed Acyclic Graph (DAG) is defined as a directed graph that contains:",
    options: ["No directed cycles", "No undirected edges", "Exactly one tree", "No self-loops but multi-edges"],
    correctIndex: 0,
    explanation: "By definition, a DAG is a directed graph with no directed cycles."
  },
  {
    id: 32,
    question: "Can an undirected graph have a topological sort?",
    options: [
      "No, topological sort is strictly defined only for Directed Acyclic Graphs",
      "Yes, if all degrees are even",
      "Yes, if it has no cycles",
      "Yes, using Kruskal's algorithm"
    ],
    correctIndex: 0,
    explanation: "Topological ordering requires directed edges to define the 'before/after' dependency precedence."
  },
  {
    id: 33,
    question: "What is the key initial condition in Kahn's algorithm for topological sorting?",
    options: [
      "Enqueue all vertices with in-degree = 0",
      "Enqueue all vertices with out-degree = 0",
      "Sort all edges by weight descending",
      "Pick the vertex with highest degree"
    ],
    correctIndex: 0,
    explanation: "Vertices with in-degree 0 have no dependencies and can be executed first."
  },
  {
    id: 34,
    question: "If Kahn's algorithm terminates and the number of processed vertices is LESS than V, what does that conclude?",
    options: [
      "The graph has at least one directed cycle",
      "The graph is bipartite",
      "The graph is strongly connected",
      "The graph has no source vertex"
    ],
    correctIndex: 0,
    explanation: "Vertices trapped in a directed cycle never reach an in-degree of 0, so they remain unvisited."
  },
  {
    id: 35,
    question: "How does DFS produce a valid topological sort of a DAG?",
    options: [
      "By adding vertices to a list upon finishing (post-order) and then reversing the list",
      "By adding vertices in pre-order discovery time",
      "By sorting vertices by their depth",
      "By finding the minimum spanning tree"
    ],
    correctIndex: 0,
    explanation: "A vertex finishes DFS only after all its descendants have finished. Reversing this finish order guarantees that u appears before v for every edge u -> v."
  },
  {
    id: 36,
    question: "What is the time complexity of topological sort using Kahn's algorithm or DFS?",
    options: ["O(V + E)", "O(V * E)", "O(V log V)", "O(E^2)"],
    correctIndex: 0,
    explanation: "Both Kahn's algorithm and DFS inspect each vertex and edge once, taking O(V + E) time."
  },
  {
    id: 37,
    question: "Can a DAG have more than one valid topological sort?",
    options: [
      "Yes, whenever multiple vertices have in-degree 0 concurrently",
      "No, topological sorting is always mathematically unique",
      "Only if V is odd",
      "Only if edge weights are negative"
    ],
    correctIndex: 0,
    explanation: "Whenever independent vertices can be scheduled in any relative order, multiple valid topological orderings exist."
  },
  {
    id: 38,
    question: "Under what condition is the topological sort of a DAG UNIQUE?",
    options: [
      "If and only if there is a directed Hamiltonian path in the DAG",
      "If the graph is complete",
      "If all vertices have in-degree 1",
      "If V is prime"
    ],
    correctIndex: 0,
    explanation: "A topological sort is unique if and only if in every step of Kahn's algorithm, the queue contains exactly ONE vertex, which defines a directed Hamiltonian path."
  },
  {
    id: 39,
    question: "In 3-state cycle detection for directed graphs (0=White, 1=Gray, 2=Black), what does encountering a Gray node signify?",
    options: [
      "A back-edge has been found, confirming a cycle",
      "The graph is disconnected",
      "A sink node has been reached",
      "The node is safe to delete"
    ],
    correctIndex: 0,
    explanation: "Gray nodes are currently active on the DFS recursion stack. Encountering a Gray neighbor means closing a loop back to an active ancestor."
  },
  {
    id: 40,
    question: "What is the longest path problem on a general graph vs. on a DAG?",
    options: [
      "NP-Hard on general graphs, but solvable in O(V + E) on a DAG using topological sort and DP",
      "O(V^3) on general graphs, NP-Hard on DAG",
      "Solvable with Dijkstra on both",
      "Impossible on both"
    ],
    correctIndex: 0,
    explanation: "Finding the longest simple path in a general graph is NP-Hard (reduction from Hamiltonian path), but on a DAG, topological sorting allows linear DP in O(V + E)."
  },
  {
    id: 41,
    question: "How do you find the single-source shortest paths in a DAG in O(V + E) time, even with negative edge weights?",
    options: [
      "Topologically sort the vertices, then relax outgoing edges in topological order",
      "Use Dijkstra with absolute values",
      "Use Prim's algorithm",
      "Use Hierholzer's algorithm"
    ],
    correctIndex: 0,
    explanation: "Processing vertices in topological order guarantees that when a vertex u is relaxed, all incoming paths to u have already been finalized."
  },
  {
    id: 42,
    question: "In build systems like Make, Gradle, or Webpack, what does a topological sort resolve?",
    options: [
      "The exact compilation order of modules such that prerequisites are compiled before dependents",
      "Minification of JavaScript files",
      "Compressing memory footprint",
      "Encrypting network packets"
    ],
    correctIndex: 0,
    explanation: "Module dependency graphs are DAGs; topological sorting gives the valid compilation/execution sequence."
  },
  {
    id: 43,
    question: "What is a 'source' vertex in a directed graph?",
    options: ["A vertex with in-degree 0", "A vertex with out-degree 0", "A vertex with degree 1", "The vertex with maximum weight"],
    correctIndex: 0,
    explanation: "A source vertex has in-degree 0 (only outgoing edges, no incoming edges)."
  },
  {
    id: 44,
    question: "What is a 'sink' vertex in a directed graph?",
    options: ["A vertex with out-degree 0", "A vertex with in-degree 0", "A vertex with weight 0", "A vertex that belongs to a cycle"],
    correctIndex: 0,
    explanation: "A sink vertex has out-degree 0 (only incoming edges, no outgoing edges)."
  },
  {
    id: 45,
    question: "Every finite DAG must contain at least:",
    options: [
      "At least one source (in-degree 0) and at least one sink (out-degree 0)",
      "At least one cycle",
      "An even number of vertices",
      "At least V edges"
    ],
    correctIndex: 0,
    explanation: "In any finite DAG, following outgoing edges cannot loop forever; the path must end at a sink (out-degree 0). Reversing edges shows there must also be a source."
  },

  // SECTION 4: Eulerian Paths, Bridges & Articulation Points (46 - 60)
  {
    id: 46,
    question: "An Eulerian Path is a trail in a graph that visits every:",
    options: ["Edge exactly once", "Vertex exactly once", "Cycle exactly once", "Face exactly once"],
    correctIndex: 0,
    explanation: "An Eulerian path traverses every edge of the graph exactly once."
  },
  {
    id: 47,
    question: "An Eulerian Circuit is an Eulerian Path that:",
    options: [
      "Starts and ends at the same vertex",
      "Contains no odd degree vertices and starts at a leaf",
      "Visits all vertices in alphabetical order",
      "Has minimal total weight"
    ],
    correctIndex: 0,
    explanation: "An Eulerian circuit is closed, meaning it starts and ends at the identical vertex."
  },
  {
    id: 48,
    question: "A connected undirected graph has an Eulerian Circuit if and only if:",
    options: [
      "Every vertex has an EVEN degree",
      "Exactly 2 vertices have odd degree",
      "The graph is a tree",
      "All edge weights are equal"
    ],
    correctIndex: 0,
    explanation: "Euler proved in 1736 that every vertex must have an even degree so every entry to a vertex has a matching exit edge."
  },
  {
    id: 49,
    question: "A connected undirected graph has an Eulerian Path (that is not a circuit) if and only if:",
    options: [
      "Exactly TWO vertices have an ODD degree, and all others have even degree",
      "All vertices have odd degree",
      "At least 4 vertices have odd degree",
      "The graph has V - 1 edges"
    ],
    correctIndex: 0,
    explanation: "The two vertices with odd degree serve as the start and destination of the Eulerian path."
  },
  {
    id: 50,
    question: "Why was the Seven Bridges of Königsberg problem impossible to solve?",
    options: [
      "The 4 landmasses had degrees 3, 3, 3, and 5—all 4 had ODD degrees, exceeding the maximum allowed 2 odd vertices",
      "The bridges collapsed",
      "The river was directed",
      "The graph was disconnected"
    ],
    correctIndex: 0,
    explanation: "Euler showed that with 4 odd-degree vertices, an Eulerian path cannot exist (at most 2 odd-degree vertices are permitted)."
  },
  {
    id: 51,
    question: "What is Hierholzer's algorithm used for, and what is its time complexity?",
    options: [
      "Finding an Eulerian circuit/path in O(V + E) time",
      "Finding shortest paths in O(V^3)",
      "Detecting bipartite graphs in O(E log V)",
      "Finding tree diameter in O(V^2)"
    ],
    correctIndex: 0,
    explanation: "Hierholzer's algorithm finds an Eulerian circuit in linear O(V + E) time by decomposing the graph into cycles and splicing them."
  },
  {
    id: 52,
    question: "What is a Bridge in an undirected graph?",
    options: [
      "An edge whose removal strictly increases the number of connected components",
      "An edge that connects two vertices of degree 1",
      "A cycle of length 2",
      "An edge with maximum weight"
    ],
    correctIndex: 0,
    explanation: "A bridge (or cut-edge) is an edge whose deletion disconnects a previously connected component."
  },
  {
    id: 53,
    question: "What is an Articulation Point (Cut Vertex)?",
    options: [
      "A vertex whose removal (along with its incident edges) increases the number of connected components",
      "A vertex with maximum degree",
      "A vertex that is part of every cycle",
      "A leaf node in a tree"
    ],
    correctIndex: 0,
    explanation: "An articulation point is a vertex whose removal splits a connected component into two or more."
  },
  {
    id: 54,
    question: "In Tarjan's algorithm for finding bridges, what does low[u] represent?",
    options: [
      "The lowest discovery time tin reachable from u or its DFS subtree via at most one back-edge",
      "The minimum edge weight incident to u",
      "The out-degree of u",
      "The depth of u in BFS"
    ],
    correctIndex: 0,
    explanation: "low[u] is the earliest discovery time reachable from the subtree of u using tree edges and at most one back-edge."
  },
  {
    id: 55,
    question: "In Tarjan's algorithm, edge (u, v) in the DFS tree is a bridge if and only if:",
    options: ["low[v] > tin[u]", "low[v] < tin[u]", "low[v] == tin[u]", "low[u] > tin[v]"],
    correctIndex: 0,
    explanation: "If low[v] > tin[u], vertex v and its descendants have no back-edge reaching u or any ancestor above u. Deleting (u, v) disconnects v."
  },
  {
    id: 56,
    question: "In Tarjan's algorithm, when is the root of the DFS tree an articulation point?",
    options: [
      "If and only if it has 2 or more children in the DFS tree",
      "If it has degree greater than 1 in the original graph",
      "Always",
      "Never"
    ],
    correctIndex: 0,
    explanation: "The root of a DFS tree is an articulation point if and only if it has at least 2 independent child subtrees in the DFS tree."
  },
  {
    id: 57,
    question: "For a non-root vertex u in a DFS tree, under what condition is u an articulation point?",
    options: [
      "If it has a child v such that low[v] >= tin[u]",
      "If low[u] < tin[v]",
      "If in-degree equals out-degree",
      "If u is connected to a leaf"
    ],
    correctIndex: 0,
    explanation: "If low[v] >= tin[u], child v cannot reach above u without passing through u, meaning removing u disconnects v."
  },
  {
    id: 58,
    question: "What is a Hamiltonian Path?",
    options: [
      "A path that visits every vertex in the graph exactly once",
      "A path that visits every edge in the graph exactly once",
      "The shortest path between source and sink",
      "A path with alternating edge colors"
    ],
    correctIndex: 0,
    explanation: "A Hamiltonian path visits each vertex of the graph exactly once."
  },
  {
    id: 59,
    question: "What is the computational complexity class of determining whether a general graph has a Hamiltonian Path?",
    options: ["NP-Complete", "P (solvable in O(V + E))", "Log-Space", "O(V log V)"],
    correctIndex: 0,
    explanation: "Finding a Hamiltonian path is one of Karp's 21 classic NP-Complete problems."
  },
  {
    id: 60,
    question: "Can a bridge ever be part of a simple cycle in an undirected graph?",
    options: [
      "No, an edge is a bridge if and only if it is NOT part of any cycle",
      "Yes, if the cycle is odd-length",
      "Yes, in bipartite graphs",
      "Only if it has negative weight"
    ],
    correctIndex: 0,
    explanation: "If an edge is part of a cycle, deleting it leaves the rest of the cycle intact as an alternate path, so it cannot be a bridge."
  },

  // SECTION 5: Shortest Path Algorithms (61 - 75)
  {
    id: 61,
    question: "What is the greedy invariant of Dijkstra's algorithm?",
    options: [
      "When vertex u is extracted from the min-priority queue, dist[u] is guaranteed to be the final shortest distance from the source",
      "Edges with maximum weight are relaxed first",
      "All vertices are visited in alphabetical order",
      "The spanning tree is minimized at each edge"
    ],
    correctIndex: 0,
    explanation: "Assuming non-negative weights, any alternate path to u must pass through another unvisited node whose provisional distance is already >= dist[u]."
  },
  {
    id: 62,
    question: "What is the time complexity of Dijkstra's algorithm using a binary min-heap?",
    options: ["O((V + E) log V)", "O(V^2)", "O(V * E)", "O(E * V^2)"],
    correctIndex: 0,
    explanation: "Extracting V vertices from the heap takes O(V log V) and relaxing at most E edges takes O(E log V), totaling O((V + E) log V)."
  },
  {
    id: 63,
    question: "What is the theoretical time complexity of Dijkstra's algorithm using a Fibonacci Heap?",
    options: ["O(E + V log V)", "O(V^2 log V)", "O(E log E)", "O(V^3)"],
    correctIndex: 0,
    explanation: "Fibonacci heaps achieve O(1) amortized decrease-key operations, resulting in O(E + V log V) time."
  },
  {
    id: 64,
    question: "Why does Dijkstra's algorithm fail on graphs with negative edge weights?",
    options: [
      "Because a previously finalized vertex can have its distance improved later by traversing a negative edge, violating the greedy choice",
      "Because negative numbers cannot be stored in binary heaps",
      "Because it causes an integer overflow",
      "Because negative edges form bipartite graphs"
    ],
    correctIndex: 0,
    explanation: "Dijkstra assumes distances can only increase along paths. A negative edge can retroactively shorten the distance to a finalized vertex."
  },
  {
    id: 65,
    question: "How many edge relaxation passes does the Bellman-Ford algorithm execute on a graph of V vertices?",
    options: ["V - 1 passes", "V passes", "E passes", "log V passes"],
    correctIndex: 0,
    explanation: "Any simple shortest path contains at most V - 1 edges; each pass extends the optimal path by at least 1 edge, requiring V - 1 passes."
  },
  {
    id: 66,
    question: "What is the time complexity of the Bellman-Ford algorithm?",
    options: ["O(V * E)", "O(V + E)", "O(V^2 log V)", "O(E log V)"],
    correctIndex: 0,
    explanation: "Bellman-Ford iterates over all E edges across V - 1 rounds, resulting in O(V * E) time."
  },
  {
    id: 67,
    question: "How does Bellman-Ford detect a negative weight cycle reachable from the source?",
    options: [
      "By running a V-th pass: if any edge can still be relaxed (dist[v] > dist[u] + w), a negative cycle exists",
      "If the total distance becomes negative",
      "If the source degree is zero",
      "If the graph contains self-loops"
    ],
    correctIndex: 0,
    explanation: "Shortest paths stabilize after V - 1 passes. If an edge can still be relaxed on pass V, an infinite negative cycle is leaking distance."
  },
  {
    id: 68,
    question: "What is the Shortest Path Faster Algorithm (SPFA)?",
    options: [
      "A queue-optimized version of Bellman-Ford that only relaxes edges incident to vertices whose distance recently changed",
      "A variant of A* search with Manhattan heuristic",
      "A parallel version of Dijkstra",
      "A quantum graph search algorithm"
    ],
    correctIndex: 0,
    explanation: "SPFA maintains a FIFO queue of candidate vertices whose distances were updated, reducing average time from O(V*E) to O(E), though worst-case remains O(V*E)."
  },
  {
    id: 69,
    question: "What does the Floyd-Warshall algorithm compute?",
    options: [
      "All-pairs shortest paths between every pair of vertices in a directed/undirected weighted graph",
      "Single-source shortest path in unweighted graphs",
      "Minimum Spanning Tree",
      "Strongly connected components"
    ],
    correctIndex: 0,
    explanation: "Floyd-Warshall computes the shortest path between all pairs (u, v) using dynamic programming."
  },
  {
    id: 70,
    question: "What is the recurrence relation in Floyd-Warshall?",
    options: [
      "dist[i][j] = min(dist[i][j], dist[i][k] + dist[k][j])",
      "dist[i][j] = dist[i][k] * dist[k][j]",
      "dist[i][j] = max(dist[i][j], dist[i][k] + dist[k][j])",
      "dist[i][j] = dist[i][j] - dist[k][k]"
    ],
    correctIndex: 0,
    explanation: "At step k, the shortest path from i to j considers using vertex k as an intermediate waypoint."
  },
  {
    id: 71,
    question: "In Floyd-Warshall, which loop must be the OUTERMOST loop?",
    options: [
      "The intermediate vertex loop k",
      "The start vertex loop i",
      "The end vertex loop j",
      "Any arbitrary loop order works"
    ],
    correctIndex: 0,
    explanation: "The intermediate vertex k must be the outermost loop so that paths using waypoints {0, 1, ..., k-1} are fully resolved before allowing k."
  },
  {
    id: 72,
    question: "How does Floyd-Warshall detect negative weight cycles in a graph?",
    options: [
      "If any diagonal element dist[i][i] becomes negative (< 0)",
      "If the sum of all matrix entries is negative",
      "If matrix contains INF",
      "If V is even"
    ],
    correctIndex: 0,
    explanation: "dist[i][i] represents the distance from node i back to itself. If dist[i][i] < 0, a negative cycle passes through vertex i."
  },
  {
    id: 73,
    question: "What algorithm is used for all-pairs shortest paths on sparse graphs with negative weights (without negative cycles)?",
    options: ["Johnson's Algorithm", "Prim's Algorithm", "Kruskal's Algorithm", "Kosaraju's Algorithm"],
    correctIndex: 0,
    explanation: "Johnson's algorithm uses Bellman-Ford to reweight edges to non-negative values, then runs Dijkstra V times in O(V^2 log V + V*E) time."
  },
  {
    id: 74,
    question: "What is the time complexity of the Floyd-Warshall algorithm?",
    options: ["O(V^3)", "O(V^2)", "O(V * E log V)", "O(E^3)"],
    correctIndex: 0,
    explanation: "Three nested loops each iterating V times results in exactly O(V^3) time complexity."
  },
  {
    id: 75,
    question: "A* (A-Star) search is an extension of Dijkstra's algorithm that uses:",
    options: [
      "A heuristic function h(v) estimating the remaining distance to the goal to guide search",
      "A random walk restart",
      "Negative cycle detection queues",
      "Union-Find data structures"
    ],
    correctIndex: 0,
    explanation: "A* evaluates nodes using f(v) = g(v) + h(v), where g(v) is exact cost from start and h(v) is an admissible heuristic estimate to target."
  },

  // SECTION 6: Minimum Spanning Trees & Disjoint Set Union (76 - 88)
  {
    id: 76,
    question: "A Spanning Tree of a connected, undirected graph with V vertices always contains:",
    options: ["Exactly V - 1 edges and no cycles", "V edges", "V + 1 edges", "E - 1 edges"],
    correctIndex: 0,
    explanation: "A tree connecting V vertices must contain exactly V - 1 edges without cycles."
  },
  {
    id: 77,
    question: "What is the Cut Property in Minimum Spanning Trees?",
    options: [
      "For any cut in the graph, the minimum weight edge crossing the cut belongs to an MST",
      "The edge with maximum weight must always be cut",
      "Every cut must divide the graph into equal halves",
      "No edge crossing a cut can be part of any cycle"
    ],
    correctIndex: 0,
    explanation: "The Cut Property states that the lightest edge crossing any valid cut (S, V-S) is guaranteed to be part of some MST."
  },
  {
    id: 78,
    question: "What is the Cycle Property in Minimum Spanning Trees?",
    options: [
      "For any cycle in the graph, the edge with the strictly maximum weight cannot belong to any MST",
      "Every MST must contain at least one cycle",
      "Cycles cannot have odd numbers of edges",
      "The minimum edge in a cycle must be deleted"
    ],
    correctIndex: 0,
    explanation: "The Cycle Property states that the strictly heaviest edge in any cycle cannot be part of any MST."
  },
  {
    id: 79,
    question: "What is the first step in Kruskal's algorithm?",
    options: [
      "Sort all E edges in non-decreasing order of weight",
      "Pick an arbitrary starting vertex",
      "Compute all in-degrees",
      "Color all vertices with 2 colors"
    ],
    correctIndex: 0,
    explanation: "Kruskal's algorithm is greedy over edges, sorting all edges by weight before processing."
  },
  {
    id: 80,
    question: "Which data structure is essential for efficiently implementing Kruskal's algorithm?",
    options: ["Disjoint Set Union (DSU / Union-Find)", "Binary Search Tree", "Trie", "Suffix Automaton"],
    correctIndex: 0,
    explanation: "DSU allows near O(1) cycle checking (Find) and set merging (Union) when adding edges to the MST."
  },
  {
    id: 81,
    question: "What is Path Compression in DSU?",
    options: [
      "During find(x), pointing every visited node directly to the root of the set",
      "Deleting redundant edges",
      "Compressing text files using Huffman coding",
      "Finding the shortest path in a tree"
    ],
    correctIndex: 0,
    explanation: "Path compression flattens the tree during find queries by setting parent[x] = find(parent[x])."
  },
  {
    id: 82,
    question: "What is Union by Rank in DSU?",
    options: [
      "Attaching the root of the shallower tree under the root of the deeper tree during union",
      "Sorting elements by rank before union",
      "Assigning random IDs to sets",
      "Prioritizing leaf nodes"
    ],
    correctIndex: 0,
    explanation: "Union by rank keeps tree height logarithmic by attaching smaller trees under larger ones."
  },
  {
    id: 83,
    question: "What is the amortized time complexity of DSU operations when BOTH Path Compression and Union by Rank are used?",
    options: ["O(alpha(N)) where alpha is the Inverse Ackermann function", "O(log N)", "O(1) strictly", "O(N)"],
    correctIndex: 0,
    explanation: "Tarjan proved that combined path compression and union by rank achieves O(alpha(N)) amortized time, which is <= 4 for all practical inputs."
  },
  {
    id: 84,
    question: "What is the time complexity of Kruskal's algorithm on graph G(V, E)?",
    options: ["O(E log E) or O(E log V)", "O(V^2)", "O(V * E)", "O(V^3)"],
    correctIndex: 0,
    explanation: "Sorting the edges dominates the runtime at O(E log E). Since E <= V^2, log E = O(log V), yielding O(E log V)."
  },
  {
    id: 85,
    question: "How does Prim's algorithm differ fundamentally in approach from Kruskal's?",
    options: [
      "Prim's grows a single tree outward from a starting vertex, whereas Kruskal's adds edges globally across potentially disconnected components",
      "Prim's only works on directed graphs",
      "Kruskal's cannot handle negative edge weights",
      "Prim's requires topological sort"
    ],
    correctIndex: 0,
    explanation: "Prim's builds a single contiguous tree component by greedily selecting the cheapest cut edge, while Kruskal's joins a forest of components."
  },
  {
    id: 86,
    question: "When is Prim's algorithm preferred over Kruskal's algorithm?",
    options: [
      "On dense graphs where E is close to V^2 (especially with an adjacency matrix taking O(V^2))",
      "On sparse graphs with E = O(V)",
      "When edge weights are negative",
      "When the graph has directed cycles"
    ],
    correctIndex: 0,
    explanation: "On dense graphs, Prim's with an adjacency matrix or Fibonacci heap runs in O(V^2) or O(E + V log V), outperforming Kruskal's O(E log E) edge sorting."
  },
  {
    id: 87,
    question: "If all edge weights in a connected undirected graph are DISTINCT, how many Minimum Spanning Trees exist?",
    options: ["Exactly ONE unique MST", "At least 2", "V - 1", "Infinitely many"],
    correctIndex: 0,
    explanation: "When all edge weights are unique, the MST is mathematically unique."
  },
  {
    id: 88,
    question: "Can a Minimum Spanning Tree contain edges with negative weights?",
    options: [
      "Yes, Kruskal's and Prim's algorithms work correctly with negative edge weights",
      "No, negative edges create infinite cycles",
      "Only if V is even",
      "Only if the sum of weights is positive"
    ],
    correctIndex: 0,
    explanation: "MST algorithms only rely on relative ordering of weights (Cut and Cycle properties hold unchanged), regardless of whether weights are positive or negative."
  },

  // SECTION 7: Advanced Topics: Bipartite, SCC, Max Flow & Complexity (89 - 100)
  {
    id: 89,
    question: "A graph is Bipartite if and only if it contains:",
    options: ["NO odd-length cycles", "NO even-length cycles", "NO cycles at all", "Exactly two vertices"],
    correctIndex: 0,
    explanation: "A graph can be 2-colored if and only if every cycle has an even number of edges. Odd cycles create a color clash."
  },
  {
    id: 90,
    question: "Are all trees bipartite graphs?",
    options: [
      "Yes, always! Because trees contain NO cycles at all, they vacuously contain no odd cycles",
      "No, only binary trees are bipartite",
      "Only if the tree has an even number of vertices",
      "No, trees are non-planar"
    ],
    correctIndex: 0,
    explanation: "Since a tree has no cycles, it has no odd cycles, meaning every tree is bipartite (color alternating depths)."
  },
  {
    id: 91,
    question: "What is a Strongly Connected Component (SCC) in a directed graph?",
    options: [
      "A maximal subgraph where every vertex is reachable from every other vertex in the subgraph",
      "A clique of size V",
      "A component where all edges have positive weights",
      "A tree with bidirectional edges"
    ],
    correctIndex: 0,
    explanation: "In an SCC, for every pair of vertices u and v, there exists a directed path from u to v and from v to u."
  },
  {
    id: 92,
    question: "What is the condensation graph of a directed graph's SCCs?",
    options: [
      "A Directed Acyclic Graph (DAG) formed by contracting each SCC into a single super-node",
      "A complete graph",
      "A bipartite graph",
      "A minimum spanning tree"
    ],
    correctIndex: 0,
    explanation: "Contracting each SCC into a single vertex results in a DAG; if a cycle existed between SCCs, they would merge into a single larger SCC."
  },
  {
    id: 93,
    question: "What are the 3 steps of Kosaraju's Algorithm for finding SCCs?",
    options: [
      "1) DFS on G pushing nodes to stack by finish time; 2) Transpose G to G^T; 3) DFS on G^T in stack order to discover SCCs",
      "1) Sort edges; 2) Run BFS; 3) Color nodes",
      "1) Run Dijkstra; 2) Reverse paths; 3) Compute MST",
      "1) Topo sort; 2) Kahn's algorithm; 3) Tarjan's low-link"
    ],
    correctIndex: 0,
    explanation: "Kosaraju's algorithm uses finish times on G to order DFS calls on the transposed graph G^T in O(V + E) time."
  },
  {
    id: 94,
    question: "What is the time complexity of Kosaraju's and Tarjan's SCC algorithms?",
    options: ["O(V + E)", "O(V^2)", "O(V * E)", "O(E log V)"],
    correctIndex: 0,
    explanation: "Both Kosaraju's (two DFS passes) and Tarjan's (single DFS pass with stack) find all SCCs in linear O(V + E) time."
  },
  {
    id: 95,
    question: "What is the Max-Flow Min-Cut Theorem?",
    options: [
      "The maximum value of an s-t flow equals the minimum capacity of an s-t cut",
      "The maximum flow is bounded by V * E",
      "Every network flow problem is NP-Complete",
      "The minimum cut equals the total number of vertices"
    ],
    correctIndex: 0,
    explanation: "Formulated by Ford and Fulkerson, the maximum net flow from source to sink is identical to the bottleneck capacity of the weakest cut separating them."
  },
  {
    id: 96,
    question: "Why are backward edges necessary in the residual graph of the Ford-Fulkerson method?",
    options: [
      "To allow the algorithm to 'undo' or redirect previous suboptimal flow decisions when better augmenting paths are found",
      "To prevent directed cycles",
      "To store negative weights",
      "To compute topological order"
    ],
    correctIndex: 0,
    explanation: "Without backward edges, a greedy forward choice could block a globally optimal flow assignment."
  },
  {
    id: 97,
    question: "What is the Edmonds-Karp algorithm?",
    options: [
      "An implementation of the Ford-Fulkerson method that always chooses the shortest augmenting path using BFS, guaranteeing O(V * E^2) time",
      "A minimum spanning tree algorithm",
      "A planarity testing algorithm",
      "A vertex coloring algorithm"
    ],
    correctIndex: 0,
    explanation: "Edmonds and Karp proved that using BFS to find shortest augmenting paths bounds augmentations to O(V * E), yielding O(V * E^2) runtime."
  },
  {
    id: 98,
    question: "How can Maximum Bipartite Matching be solved using Max Flow?",
    options: [
      "Add a super-source S connected to set U (capacity 1), connect directed edges from U to V (capacity 1), and connect set V to super-sink T (capacity 1); max flow = max matching",
      "Multiply degrees of U and V",
      "Run Prim's algorithm on the bipartite graph",
      "Topologically sort the bipartite graph"
    ],
    correctIndex: 0,
    explanation: "This classic reduction allows Max Bipartite Matching to be solved via Max Flow in polynomial time (or via Hopcroft-Karp in O(E * sqrt(V)))."
  },
  {
    id: 99,
    question: "What is Euler's Formula for connected planar graphs (V vertices, E edges, F faces)?",
    options: ["V - E + F = 2", "V + E - F = 2", "V * E = F + 2", "V - E = 2 * F"],
    correctIndex: 0,
    explanation: "Euler's planar formula states that V - E + F = 2 for any connected planar graph drawn in the plane without crossing edges."
  },
  {
    id: 100,
    question: "Which of the following graph problems is KNOWN to be solvable in POLYNOMIAL time (P)?",
    options: [
      "Eulerian Circuit",
      "Hamiltonian Circuit",
      "Traveling Salesperson Problem (TSP)",
      "Graph 3-Coloring"
    ],
    correctIndex: 0,
    explanation: "Finding an Eulerian Circuit is solvable in linear O(V + E) time via Hierholzer's algorithm, whereas Hamiltonian Circuit, TSP, and Graph 3-Coloring are classic NP-Complete/NP-Hard problems."
  }
];
