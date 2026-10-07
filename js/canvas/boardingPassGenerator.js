// Boarding Pass Generator for GraphLand 1.0 with Kapil
// Renders ultra-sharp futuristic boarding pass with PNR, flight details, barcode, and Kapil signature

export function generateBoardingPassCanvas(learnerName = "ALGORITHM EXPLORER", pnr = "GL-INIT-77492") {
  const canvas = document.createElement("canvas");
  const width = 1200;
  const height = 520;
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext("2d");

  // Background Gradient
  const bgGrad = ctx.createLinearGradient(0, 0, width, height);
  bgGrad.addColorStop(0, "#050914");
  bgGrad.addColorStop(0.5, "#0b152d");
  bgGrad.addColorStop(1, "#070c1a");
  ctx.fillStyle = bgGrad;
  ctx.fillRect(0, 0, width, height);

  // Outer Neon Frame
  ctx.strokeStyle = "#00f3ff";
  ctx.lineWidth = 4;
  ctx.strokeRect(16, 16, width - 32, height - 32);

  // Corner Accent brackets
  const drawCorner = (x, y, dx, dy) => {
    ctx.strokeStyle = "#ffd700";
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(x, y + dy * 24);
    ctx.lineTo(x, y);
    ctx.lineTo(x + dx * 24, y);
    ctx.stroke();
  };
  drawCorner(22, 22, 1, 1);
  drawCorner(width - 22, 22, -1, 1);
  drawCorner(22, height - 22, 1, -1);
  drawCorner(width - 22, height - 22, -1, -1);

  // Background Cyber Circuit Grid
  ctx.strokeStyle = "rgba(0, 243, 255, 0.05)";
  ctx.lineWidth = 1;
  for (let x = 30; x < width - 30; x += 30) {
    ctx.beginPath();
    ctx.moveTo(x, 30);
    ctx.lineTo(x, height - 30);
    ctx.stroke();
  }
  for (let y = 30; y < height - 30; y += 30) {
    ctx.beginPath();
    ctx.moveTo(30, y);
    ctx.lineTo(width - 30, y);
    ctx.stroke();
  }

  // Stub Divider Line (Dashed)
  const stubX = 860;
  ctx.strokeStyle = "rgba(0, 243, 255, 0.4)";
  ctx.lineWidth = 2;
  ctx.setLineDash([8, 8]);
  ctx.beginPath();
  ctx.moveTo(stubX, 20);
  ctx.lineTo(stubX, height - 20);
  ctx.stroke();
  ctx.setLineDash([]);

  // Notches at the stub divider
  ctx.fillStyle = "#050914";
  ctx.beginPath();
  ctx.arc(stubX, 16, 18, 0, Math.PI);
  ctx.fill();
  ctx.beginPath();
  ctx.arc(stubX, height - 16, 18, Math.PI, 0);
  ctx.fill();

  // LEFT MAIN BODY
  // Header Banner
  ctx.fillStyle = "#00f3ff";
  ctx.font = "bold 13px 'Courier New', monospace";
  ctx.letterSpacing = "2px";
  ctx.fillText("✦ FAANG QUANTUM HYPERLOOP EXPRESS // TRANSIT PASS ✦", 50, 60);

  ctx.fillStyle = "#ffffff";
  ctx.font = "bold 32px 'Segoe UI', system-ui, sans-serif";
  ctx.fillText("A JOURNEY TO GRAPHLAND 1.0", 50, 102);

  ctx.fillStyle = "#ffd700";
  ctx.font = "bold 16px 'Segoe UI', system-ui, sans-serif";
  ctx.fillText("EXPEDITION COMMANDED BY MENTOR KAPIL", 50, 128);

  // Passenger Card Box
  ctx.fillStyle = "rgba(0, 243, 255, 0.05)";
  ctx.fillRect(50, 145, 780, 255);
  ctx.strokeStyle = "rgba(0, 243, 255, 0.25)";
  ctx.lineWidth = 1;
  ctx.strokeRect(50, 145, 780, 255);

  // Field: Passenger Name with dynamic scaling
  ctx.fillStyle = "rgba(0, 243, 255, 0.8)";
  ctx.font = "bold 11px monospace";
  ctx.fillText("PASSENGER / EXPEDITION CADET", 75, 172);

  const nameLen = learnerName.length;
  const nameFontSize = nameLen > 28 ? 18 : (nameLen > 20 ? 22 : 26);
  ctx.fillStyle = "#00f3ff";
  ctx.font = `bold ${nameFontSize}px 'Segoe UI', system-ui, sans-serif`;
  ctx.fillText(learnerName.toUpperCase(), 75, 202);

  // Field: Route Section with Dedicated Sub-Cards (Zero Overlap)
  // Sub-card 1: Origin (JIET Jodhpur)
  const originBoxX = 75;
  const originBoxY = 220;
  const originBoxW = 310;
  const originBoxH = 76;

  ctx.fillStyle = "rgba(0, 243, 255, 0.08)";
  ctx.fillRect(originBoxX, originBoxY, originBoxW, originBoxH);
  ctx.strokeStyle = "rgba(0, 243, 255, 0.35)";
  ctx.lineWidth = 1;
  ctx.strokeRect(originBoxX, originBoxY, originBoxW, originBoxH);

  ctx.fillStyle = "rgba(0, 243, 255, 0.9)";
  ctx.font = "bold 10px monospace";
  ctx.fillText("ORIGIN VERTEX [REALM 0]", originBoxX + 14, originBoxY + 20);

  ctx.fillStyle = "#ffffff";
  ctx.font = "bold 13px 'Segoe UI', system-ui, sans-serif";
  ctx.fillText("JIET GROUP OF INSTITUTIONS", originBoxX + 14, originBoxY + 42);

  ctx.fillStyle = "#ffd700";
  ctx.font = "bold 11px monospace";
  ctx.fillText("BLUE CITY (JODHPUR, RJ)", originBoxX + 14, originBoxY + 62);

  // Traversal Path Vector Indicator (Centered in gap)
  ctx.save();
  ctx.textAlign = "center";
  ctx.fillStyle = "#ffd700";
  ctx.font = "bold 18px monospace";
  ctx.fillText("══►", 410, originBoxY + 38);

  ctx.fillStyle = "rgba(0, 243, 255, 0.85)";
  ctx.font = "bold 9px monospace";
  ctx.fillText("DIRECTED", 410, originBoxY + 54);
  ctx.restore();

  // Sub-card 2: Destination Realm
  const destBoxX = 435;
  const destBoxY = 220;
  const destBoxW = 370;
  const destBoxH = 76;

  ctx.fillStyle = "rgba(0, 255, 136, 0.08)";
  ctx.fillRect(destBoxX, destBoxY, destBoxW, destBoxH);
  ctx.strokeStyle = "rgba(0, 255, 136, 0.35)";
  ctx.lineWidth = 1;
  ctx.strokeRect(destBoxX, destBoxY, destBoxW, destBoxH);

  ctx.fillStyle = "rgba(0, 255, 136, 0.9)";
  ctx.font = "bold 10px monospace";
  ctx.fillText("DESTINATION VERTEX [REALM 7]", destBoxX + 14, destBoxY + 20);

  ctx.fillStyle = "#00ff88";
  ctx.font = "bold 13px 'Segoe UI', system-ui, sans-serif";
  ctx.fillText("V7 : MASTER'S LAIR OF FLOWS", destBoxX + 14, destBoxY + 42);

  ctx.fillStyle = "rgba(255, 255, 255, 0.7)";
  ctx.font = "bold 11px monospace";
  ctx.fillText("GRAND CITADEL // GRAPH MASTERY", destBoxX + 14, destBoxY + 62);

  // Fields Grid Row 2
  const fields = [
    { label: "FLIGHT NO", val: "GL-2026-K1" },
    { label: "GATE", val: "ALPHA-42" },
    { label: "SEAT", val: "0x7FFF" },
    { label: "CLEARANCE", val: "ROOT (REALMS 0-7)" }
  ];

  fields.forEach((f, i) => {
    const fx = 75 + i * 180;
    ctx.fillStyle = "rgba(255, 255, 255, 0.55)";
    ctx.font = "bold 10px monospace";
    ctx.fillText(f.label, fx, 332);

    ctx.fillStyle = "#ffffff";
    ctx.font = "bold 14px monospace";
    ctx.fillText(f.val, fx, 356);
  });

  // Footer: Kapil's Signature & Verification Note
  ctx.fillStyle = "#ffffff";
  ctx.font = "italic 15px Georgia, serif";
  ctx.fillText("Certified Expedition Master: Kapil (FAANG Graph Specialist)", 50, 435);

  ctx.fillStyle = "#ffd700";
  ctx.font = "bold 12px monospace";
  ctx.fillText("★ GRAPH THEORY SUPREME CERTIFICATION BOARD ★", 50, 460);

  ctx.fillStyle = "rgba(0, 243, 255, 0.7)";
  ctx.font = "10px monospace";
  ctx.fillText("JIET JODHPUR CAMPUS ➔ 8 EXPEDITION REALMS ➔ FAANG HONORS CERTIFICATION", 50, 482);

  // RIGHT STUB
  ctx.fillStyle = "#00f3ff";
  ctx.font = "bold 12px monospace";
  ctx.fillText("PASSENGER STUB", stubX + 35, 58);

  ctx.fillStyle = "#ffd700";
  ctx.font = "bold 11px monospace";
  ctx.fillText("BOOKING PNR REFERENCE", stubX + 35, 92);

  // Glowing PNR Box
  ctx.fillStyle = "rgba(255, 215, 0, 0.12)";
  ctx.fillRect(stubX + 35, 104, 260, 54);
  ctx.strokeStyle = "#ffd700";
  ctx.lineWidth = 1.5;
  ctx.strokeRect(stubX + 35, 104, 260, 54);

  ctx.fillStyle = "#ffd700";
  ctx.font = "bold 20px 'Courier New', monospace";
  ctx.textAlign = "center";
  ctx.fillText(pnr, stubX + 165, 138);
  ctx.textAlign = "left";

  // Passenger Small
  ctx.fillStyle = "rgba(255, 255, 255, 0.55)";
  ctx.font = "bold 10px monospace";
  ctx.fillText("PASSENGER", stubX + 35, 185);
  ctx.fillStyle = "#ffffff";
  ctx.font = "bold 13px 'Segoe UI', system-ui";
  const truncName = learnerName.length > 20 ? learnerName.slice(0, 18) + ".." : learnerName;
  ctx.fillText(truncName.toUpperCase(), stubX + 35, 206);

  // Date
  ctx.fillStyle = "rgba(255, 255, 255, 0.55)";
  ctx.font = "bold 10px monospace";
  ctx.fillText("TIMESTAMP / EMBARKATION", stubX + 35, 236);
  ctx.fillStyle = "#00ff88";
  ctx.font = "bold 11px monospace";
  const dateStr = new Date().toISOString().slice(0, 10) + " " + new Date().toTimeString().slice(0, 5) + " UTC";
  ctx.fillText(dateStr, stubX + 35, 256);

  // Dynamic Barcode
  const barY = 285;
  const barH = 46;
  ctx.fillStyle = "#ffffff";
  let curX = stubX + 35;
  const hashSeed = (pnr + learnerName).split("").reduce((acc, c) => acc + c.charCodeAt(0), 0);
  for (let b = 0; b < 45; b++) {
    const bit = ((hashSeed * (b + 1) * 31) % 7);
    const barW = (bit % 3) + 1;
    if (bit % 2 === 0) {
      ctx.fillRect(curX, barY, barW, barH);
    }
    curX += barW + 2;
  }

  // Security Hologram Shield
  ctx.strokeStyle = "rgba(0, 243, 255, 0.5)";
  ctx.lineWidth = 1;
  ctx.strokeRect(stubX + 35, 360, 260, 72);
  ctx.fillStyle = "rgba(0, 243, 255, 0.05)";
  ctx.fillRect(stubX + 35, 360, 260, 72);

  ctx.fillStyle = "#00f3ff";
  ctx.font = "bold 11px monospace";
  ctx.fillText("✦ FAANG QUANTUM KEY VERIFIED ✦", stubX + 45, 384);
  ctx.fillStyle = "rgba(255, 255, 255, 0.75)";
  ctx.font = "10px monospace";
  ctx.fillText("OFFLINE ENGINE // 100% SECURE", stubX + 45, 404);
  ctx.fillStyle = "#ffd700";
  ctx.font = "9px monospace";
  ctx.fillText("MENTORED BY KAPIL // JIET EXPEDITION", stubX + 45, 420);

  return canvas;
}

export function downloadBoardingPass(learnerName, pnr) {
  const canvas = generateBoardingPassCanvas(learnerName, pnr);
  const link = document.createElement("a");
  link.download = `BoardingPass_GraphLand_${pnr}.png`;
  link.href = canvas.toDataURL("image/png");
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
