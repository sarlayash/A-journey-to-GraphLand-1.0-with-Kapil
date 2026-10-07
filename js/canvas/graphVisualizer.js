// Interactive Graph Canvas Engine
// Supports node dragging, adding vertices/edges, step-by-step BFS/DFS/Dijkstra, retina display support

export class GraphVisualizer {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext("2d");
    this.nodes = [];
    this.edges = [];
    this.directed = false;
    this.selectedNode = null;
    this.hoveredNode = null;
    this.draggedNode = null;
    this.dragOffset = { x: 0, y: 0 };
    this.themeColor = "#00f3ff";

    // Algorithm animation state
    this.animating = false;
    this.animTimer = null;
    this.animSteps = [];
    this.currentStepIdx = 0;
    this.visitedNodeIds = new Set();
    this.activeNodeId = null;
    this.activeEdge = null;
    this.nodeDistances = {};

    this.initEvents();
    this.resize();
  }

  resize() {
    if (!this.canvas) return;
    const rect = this.canvas.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;
    this.width = rect.width || 800;
    this.height = rect.height || 460;
    this.canvas.width = this.width * dpr;
    this.canvas.height = this.height * dpr;
    this.ctx.resetTransform?.();
    this.ctx.scale(dpr, dpr);
    this.render();
  }

  fitToFrame() {
    if (!this.nodes || this.nodes.length === 0 || !this.width || !this.height) return;

    // Compute bounding box of current nodes
    const xs = this.nodes.map(n => n.x);
    const ys = this.nodes.map(n => n.y);
    const minX = Math.min(...xs);
    const maxX = Math.max(...xs);
    const minY = Math.min(...ys);
    const maxY = Math.max(...ys);

    const spanX = maxX - minX || 1;
    const spanY = maxY - minY || 1;

    // Generous padding so chips and nodes never touch the canvas borders
    const padX = Math.max(75, this.width * 0.08);
    const padY = Math.max(65, this.height * 0.14);

    const targetW = Math.max(this.width - 2 * padX, 200);
    const targetH = Math.max(this.height - 2 * padY, 150);

    const scaleX = targetW / spanX;
    const scaleY = targetH / spanY;

    this.nodes.forEach(node => {
      node.x = padX + (node.x - minX) * scaleX;
      node.y = padY + (node.y - minY) * scaleY;
    });
  }

  loadGraph(graphData, themeColor = "#00f3ff") {
    this.themeColor = themeColor;
    this.nodes = (graphData.nodes || []).map(n => ({ ...n }));
    this.edges = (graphData.edges || []).map(e => ({ ...e }));
    this.directed = !!graphData.directed;
    this.resetAlgorithmState();
    this.resize();
    this.fitToFrame();
    this.render();
  }

  resetAlgorithmState() {
    this.stopAnimation();
    this.animSteps = [];
    this.currentStepIdx = 0;
    this.visitedNodeIds = new Set();
    this.activeNodeId = null;
    this.activeEdge = null;
    this.nodeDistances = {};
    this.render();
  }

  initEvents() {
    if (!this.canvas) return;

    // Window resize observer
    window.addEventListener("resize", () => {
      this.resize();
      this.fitToFrame();
      this.render();
    });

    const getPos = (e) => {
      const rect = this.canvas.getBoundingClientRect();
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      const clientY = e.touches ? e.touches[0].clientY : e.clientY;
      return {
        x: clientX - rect.left,
        y: clientY - rect.top
      };
    };

    const onDown = (e) => {
      const pos = getPos(e);
      const clicked = this.getNodeAt(pos.x, pos.y);
      if (clicked) {
        this.draggedNode = clicked;
        this.dragOffset = { x: clicked.x - pos.x, y: clicked.y - pos.y };
        this.selectedNode = clicked;
        this.render();
      }
    };

    const onMove = (e) => {
      const pos = getPos(e);
      if (this.draggedNode) {
        this.draggedNode.x = Math.max(35, Math.min(this.width - 35, pos.x + this.dragOffset.x));
        this.draggedNode.y = Math.max(35, Math.min(this.height - 35, pos.y + this.dragOffset.y));
        this.render();
      } else {
        const hovered = this.getNodeAt(pos.x, pos.y);
        if (hovered !== this.hoveredNode) {
          this.hoveredNode = hovered;
          this.canvas.style.cursor = hovered ? "grab" : "default";
          this.render();
        }
      }
    };

    const onUp = () => {
      this.draggedNode = null;
      this.render();
    };

    this.canvas.addEventListener("mousedown", onDown);
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", onUp);

    this.canvas.addEventListener("touchstart", onDown, { passive: true });
    window.addEventListener("touchmove", onMove, { passive: true });
    window.addEventListener("touchend", onUp);
  }

  getNodeAt(x, y) {
    const radius = 28;
    return this.nodes.find(n => {
      const dx = n.x - x;
      const dy = n.y - y;
      return Math.sqrt(dx * dx + dy * dy) <= radius;
    });
  }

  // Algorithm Simulator: BFS
  runBFS(startId = 0, onStepCallback) {
    this.resetAlgorithmState();
    if (!this.nodes || this.nodes.length === 0) return;
    if (!this.nodes.some(n => n.id === startId)) startId = this.nodes[0].id;

    const adj = {};
    this.nodes.forEach(n => (adj[n.id] = []));
    this.edges.forEach(e => {
      adj[e.u]?.push({ to: e.v, w: e.weight || 1 });
      if (!this.directed) adj[e.v]?.push({ to: e.u, w: e.weight || 1 });
    });

    const queue = [startId];
    const visited = new Set([startId]);
    const steps = [];

    steps.push({
      activeNode: startId,
      visited: new Set(visited),
      edge: null,
      message: `Enqueued starting vertex ${startId} at layer 0.`
    });

    while (queue.length > 0) {
      const u = queue.shift();
      steps.push({
        activeNode: u,
        visited: new Set(visited),
        edge: null,
        message: `Dequeued and visiting vertex ${u}. Inspecting neighbors...`
      });

      for (const edge of adj[u] || []) {
        const v = edge.to;
        if (!visited.has(v)) {
          visited.add(v);
          queue.push(v);
          steps.push({
            activeNode: u,
            visited: new Set(visited),
            edge: { u, v },
            message: `Discovered unvisited neighbor ${v} via edge (${u} -> ${v}). Pushed to Queue.`
          });
        }
      }
    }

    steps.push({
      activeNode: null,
      visited: new Set(visited),
      edge: null,
      message: `BFS Traversal Complete! All reachable vertices explored layer by layer.`
    });

    this.startAnimation(steps, onStepCallback);
  }

  // Algorithm Simulator: DFS
  runDFS(startId = 0, onStepCallback) {
    this.resetAlgorithmState();
    if (!this.nodes || this.nodes.length === 0) return;
    if (!this.nodes.some(n => n.id === startId)) startId = this.nodes[0].id;

    const adj = {};
    this.nodes.forEach(n => (adj[n.id] = []));
    this.edges.forEach(e => {
      adj[e.u]?.push({ to: e.v, w: e.weight || 1 });
      if (!this.directed) adj[e.v]?.push({ to: e.u, w: e.weight || 1 });
    });

    const visited = new Set();
    const steps = [];

    const dfsHelper = (u) => {
      visited.add(u);
      steps.push({
        activeNode: u,
        visited: new Set(visited),
        edge: null,
        message: `DFS diving into vertex ${u}.`
      });

      for (const edge of adj[u] || []) {
        const v = edge.to;
        if (!visited.has(v)) {
          steps.push({
            activeNode: u,
            visited: new Set(visited),
            edge: { u, v },
            message: `Traversing edge (${u} -> ${v}) to explore deep child.`
          });
          dfsHelper(v);
          steps.push({
            activeNode: u,
            visited: new Set(visited),
            edge: null,
            message: `Backtracked to vertex ${u}.`
          });
        }
      }
    };

    dfsHelper(startId);
    steps.push({
      activeNode: null,
      visited: new Set(visited),
      edge: null,
      message: `DFS Traversal Complete! Deepest branches visited and backtracked.`
    });

    this.startAnimation(steps, onStepCallback);
  }

  // Algorithm Simulator: Dijkstra
  runDijkstra(startId = 0, onStepCallback) {
    this.resetAlgorithmState();
    if (!this.nodes || this.nodes.length === 0) return;
    if (!this.nodes.some(n => n.id === startId)) startId = this.nodes[0].id;

    const adj = {};
    this.nodes.forEach(n => (adj[n.id] = []));
    this.edges.forEach(e => {
      const w = e.weight || 1;
      adj[e.u]?.push({ to: e.v, w });
      if (!this.directed) adj[e.v]?.push({ to: e.u, w });
    });

    const dist = {};
    this.nodes.forEach(n => (dist[n.id] = Infinity));
    dist[startId] = 0;
    const visited = new Set();
    const steps = [];

    steps.push({
      activeNode: startId,
      visited: new Set(visited),
      distances: { ...dist },
      edge: null,
      message: `Initialized Dijkstra from source ${startId} with dist = 0. All other nodes at INF.`
    });

    for (let i = 0; i < this.nodes.length; i++) {
      let u = null;
      let minD = Infinity;
      for (const n of this.nodes) {
        if (!visited.has(n.id) && dist[n.id] < minD) {
          minD = dist[n.id];
          u = n.id;
        }
      }

      if (u === null || minD === Infinity) break;
      visited.add(u);

      steps.push({
        activeNode: u,
        visited: new Set(visited),
        distances: { ...dist },
        edge: null,
        message: `Greedily extracted vertex ${u} with minimal distance ${dist[u]}.`
      });

      for (const edge of adj[u] || []) {
        const v = edge.to;
        const w = edge.w;
        if (dist[u] + w < dist[v]) {
          dist[v] = dist[u] + w;
          steps.push({
            activeNode: u,
            visited: new Set(visited),
            distances: { ...dist },
            edge: { u, v },
            message: `Relaxed edge (${u} -> ${v}, w=${w}): improved dist[${v}] to ${dist[v]}!`
          });
        }
      }
    }

    steps.push({
      activeNode: null,
      visited: new Set(visited),
      distances: { ...dist },
      edge: null,
      message: `Dijkstra Finished! Optimal shortest paths found for all reachable vertices.`
    });

    this.startAnimation(steps, onStepCallback);
  }

  startAnimation(steps, onStepCallback) {
    this.stopAnimation();
    this.animSteps = steps;
    this.currentStepIdx = 0;
    this.animating = true;

    const playNext = () => {
      if (!this.animating || this.currentStepIdx >= this.animSteps.length) {
        this.stopAnimation();
        return;
      }
      const step = this.animSteps[this.currentStepIdx];
      this.activeNodeId = step.activeNode;
      this.visitedNodeIds = step.visited || new Set();
      this.activeEdge = step.edge;
      this.nodeDistances = step.distances || {};
      if (onStepCallback) onStepCallback(step, this.currentStepIdx, this.animSteps.length);
      this.render();
      this.currentStepIdx++;
      this.animTimer = setTimeout(playNext, 1100);
    };

    playNext();
  }

  stopAnimation() {
    this.animating = false;
    if (this.animTimer) {
      clearTimeout(this.animTimer);
      this.animTimer = null;
    }
  }

  render() {
    if (!this.ctx) return;
    const ctx = this.ctx;
    ctx.clearRect(0, 0, this.width, this.height);

    // Draw Cyber Grid background
    ctx.strokeStyle = "rgba(0, 243, 255, 0.04)";
    ctx.lineWidth = 1;
    const gridSize = 30;
    for (let x = 0; x < this.width; x += gridSize) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, this.height);
      ctx.stroke();
    }
    for (let y = 0; y < this.height; y += gridSize) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(this.width, y);
      ctx.stroke();
    }

    // Draw Edges
    this.edges.forEach(edge => {
      const uNode = this.nodes.find(n => n.id === edge.u);
      const vNode = this.nodes.find(n => n.id === edge.v);
      if (!uNode || !vNode) return;

      const isActiveEdge =
        this.activeEdge &&
        ((this.activeEdge.u === edge.u && this.activeEdge.v === edge.v) ||
          (!this.directed && this.activeEdge.u === edge.v && this.activeEdge.v === edge.u));

      ctx.save();
      if (isActiveEdge) {
        ctx.strokeStyle = "#ffd700";
        ctx.lineWidth = 4;
        ctx.shadowColor = "#ffd700";
        ctx.shadowBlur = 12;
      } else {
        ctx.strokeStyle = "rgba(100, 140, 200, 0.45)";
        ctx.lineWidth = 2.5;
        ctx.shadowBlur = 0;
      }

      ctx.beginPath();
      ctx.moveTo(uNode.x, uNode.y);
      ctx.lineTo(vNode.x, vNode.y);
      ctx.stroke();

      // If directed, draw arrow head
      if (this.directed) {
        const angle = Math.atan2(vNode.y - uNode.y, vNode.x - uNode.x);
        const targetRadius = 26;
        const arrowX = vNode.x - targetRadius * Math.cos(angle);
        const arrowY = vNode.y - targetRadius * Math.sin(angle);
        const headLen = 10;

        ctx.fillStyle = isActiveEdge ? "#ffd700" : "rgba(0, 243, 255, 0.8)";
        ctx.beginPath();
        ctx.moveTo(arrowX, arrowY);
        ctx.lineTo(
          arrowX - headLen * Math.cos(angle - Math.PI / 6),
          arrowY - headLen * Math.sin(angle - Math.PI / 6)
        );
        ctx.lineTo(
          arrowX - headLen * Math.cos(angle + Math.PI / 6),
          arrowY - headLen * Math.sin(angle + Math.PI / 6)
        );
        ctx.closePath();
        ctx.fill();
      }

      // Draw Edge Weight if present
      if (edge.weight !== undefined) {
        const midX = (uNode.x + vNode.x) / 2;
        const midY = (uNode.y + vNode.y) / 2;

        ctx.fillStyle = "#0a0f1d";
        ctx.strokeStyle = isActiveEdge ? "#ffd700" : "rgba(0, 243, 255, 0.4)";
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.arc(midX, midY, 11, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();

        ctx.fillStyle = isActiveEdge ? "#ffd700" : "#00f3ff";
        ctx.font = "bold 11px 'Courier New', monospace";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(edge.weight, midX, midY);
      }
      ctx.restore();
    });

    // Draw Nodes (De-cluttered: Center ID + Floating Cyber Landmark Chip)
    this.nodes.forEach(node => {
      const isVisited = this.visitedNodeIds.has(node.id);
      const isActive = this.activeNodeId === node.id;
      const isHovered = this.hoveredNode === node;
      const isSelected = this.selectedNode === node;

      ctx.save();
      const radius = 22;

      // Glow shader
      if (isActive) {
        ctx.shadowColor = "#ffd700";
        ctx.shadowBlur = 22;
        ctx.fillStyle = "#ffd700";
      } else if (isVisited) {
        ctx.shadowColor = "#00ff88";
        ctx.shadowBlur = 18;
        ctx.fillStyle = "#00ff88";
      } else if (isHovered || isSelected) {
        ctx.shadowColor = this.themeColor;
        ctx.shadowBlur = 20;
        ctx.fillStyle = this.themeColor;
      } else {
        ctx.shadowColor = "rgba(0, 243, 255, 0.4)";
        ctx.shadowBlur = 10;
        ctx.fillStyle = "#0f1c36";
      }

      // Outer circle
      ctx.beginPath();
      ctx.arc(node.x, node.y, radius, 0, Math.PI * 2);
      ctx.fill();

      // Border ring
      ctx.lineWidth = 3;
      ctx.strokeStyle = isActive
        ? "#ffffff"
        : isVisited
        ? "#00ff88"
        : isHovered
        ? "#ffffff"
        : this.themeColor;
      ctx.stroke();

      // Node Inner Center
      ctx.fillStyle = isActive ? "#111625" : isVisited ? "#042013" : "#070c1a";
      ctx.beginPath();
      ctx.arc(node.x, node.y, radius - 4, 0, Math.PI * 2);
      ctx.fill();

      // Node Primary Numeric ID (Centered, bold, crystal-clear)
      const idText = String(node.id);
      ctx.fillStyle = isActive ? "#ffd700" : isVisited ? "#00ff88" : "#ffffff";
      ctx.font = "bold 15px 'Segoe UI', system-ui, sans-serif";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(idText, node.x, node.y + 0.5);

      // Node Exterior Landmark / Title Chip (Floating clean cyber pill)
      let descText = node.label || "";
      if (descText.includes(":")) {
        descText = descText.split(":").slice(1).join(":").trim();
      }
      if (!descText) descText = `Node ${node.id}`;

      ctx.font = "bold 11px 'Segoe UI', system-ui, sans-serif";
      const textWidth = ctx.measureText(descText).width;
      const pillW = Math.max(textWidth + 16, 54);
      const pillH = 20;
      const pillX = node.x - pillW / 2;

      // Smart placement: above if node is below 110px, else below
      const placeAbove = node.y > 110;
      const pillY = placeAbove ? (node.y - radius - 19) : (node.y + radius + 9);

      // Delicate connector hairline from node ring to pill chip
      ctx.strokeStyle = isActive
        ? "rgba(255, 215, 0, 0.6)"
        : isVisited
        ? "rgba(0, 255, 136, 0.5)"
        : "rgba(0, 243, 255, 0.3)";
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(node.x, placeAbove ? (node.y - radius) : (node.y + radius));
      ctx.lineTo(node.x, placeAbove ? (pillY + pillH) : pillY);
      ctx.stroke();

      // Chip pill background
      ctx.fillStyle = isActive
        ? "rgba(255, 215, 0, 0.16)"
        : isVisited
        ? "rgba(0, 255, 136, 0.16)"
        : "rgba(7, 13, 28, 0.92)";
      ctx.strokeStyle = isActive
        ? "#ffd700"
        : isVisited
        ? "#00ff88"
        : "rgba(0, 243, 255, 0.4)";
      ctx.lineWidth = 1;
      ctx.beginPath();
      if (typeof ctx.roundRect === "function") {
        ctx.roundRect(pillX, pillY, pillW, pillH, 5);
      } else {
        ctx.rect(pillX, pillY, pillW, pillH);
      }
      ctx.fill();
      ctx.stroke();

      // Chip pill text
      ctx.fillStyle = isActive ? "#ffd700" : isVisited ? "#00ff88" : "#e6f1ff";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(descText, node.x, pillY + pillH / 2);

      // Distance tag if running Dijkstra
      if (this.nodeDistances[node.id] !== undefined) {
        const d = this.nodeDistances[node.id];
        const distText = d === Infinity ? "d: ∞" : `d: ${d}`;
        const distY = placeAbove ? (node.y + radius + 14) : (pillY + pillH + 12);

        ctx.fillStyle = "#ffd700";
        ctx.font = "bold 11px monospace";
        ctx.fillText(distText, node.x, distY);
      }

      ctx.restore();
    });
  }
}
