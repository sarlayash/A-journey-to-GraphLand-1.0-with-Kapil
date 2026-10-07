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
  ctx.fillStyle = "rgba(0, 243, 255, 0.06)";
  ctx.fillRect(50, 150, 770, 240);
  ctx.strokeStyle = "rgba(0, 243, 255, 0.25)";
  ctx.lineWidth = 1;
  ctx.strokeRect(50, 150, 770, 240);

  // Field: Passenger
  ctx.fillStyle = "rgba(255, 255, 255, 0.55)";
  ctx.font = "bold 11px monospace";
  ctx.fillText("PASSENGER / CADET NAME", 75, 182);

  ctx.fillStyle = "#00f3ff";
  ctx.font = "bold 26px 'Segoe UI', system-ui, sans-serif";
  ctx.fillText(learnerName.toUpperCase(), 75, 214);

  // Field: Route
  ctx.fillStyle = "rgba(255, 255, 255, 0.55)";
  ctx.font = "bold 11px monospace";
  ctx.fillText("ORIGIN VERTEX", 75, 255);
  ctx.fillStyle = "#ffffff";
  ctx.font = "bold 15px monospace";
  ctx.fillText("JIET GROUP OF INSTITUTIONS (JODHPUR)", 75, 280);

  ctx.fillStyle = "rgba(255, 255, 255, 0.55)";
  ctx.font = "bold 11px monospace";
  ctx.fillText("DESTINATION REALM", 340, 255);
  ctx.fillStyle = "#00ff88";
  ctx.font = "bold 17px monospace";
  ctx.fillText("V7 : MASTER'S LAIR OF FLOWS", 340, 280);

  // Traversal Path Arrow
  ctx.fillStyle = "#ffd700";
  ctx.font = "bold 20px monospace";
  ctx.fillText("══════►", 240, 278);

  // Fields Grid Row 2
  const fields = [
    { label: "FLIGHT NO", val: "GL-2026-K1" },
    { label: "GATE", val: "ALPHA-42" },
    { label: "SEAT", val: "0x7FFF" },
    { label: "SECURITY LEVEL", val: "ROOT (UNRESTRICTED)" }
  ];

  fields.forEach((f, i) => {
    const fx = 75 + i * 180;
    ctx.fillStyle = "rgba(255, 255, 255, 0.55)";
    ctx.font = "bold 10px monospace";
    ctx.fillText(f.label, fx, 330);

    ctx.fillStyle = "#ffffff";
    ctx.font = "bold 15px monospace";
    ctx.fillText(f.val, fx, 355);
  });

  // Footer: Kapil's Signature & Stamp
  ctx.fillStyle = "rgba(255, 255, 255, 0.6)";
  ctx.font = "italic 15px Georgia, serif";
  ctx.fillText("Certified Expedition Master: Kapil", 50, 440);

  ctx.fillStyle = "#ffd700";
  ctx.font = "bold 12px monospace";
  ctx.fillText("★ GRAPH THEORY CERTIFICATION BOARD ★", 50, 465);

  // RIGHT STUB
  ctx.fillStyle = "#00f3ff";
  ctx.font = "bold 12px monospace";
  ctx.fillText("PASSENGER STUB", stubX + 35, 60);

  ctx.fillStyle = "#ffd700";
  ctx.font = "bold 11px monospace";
  ctx.fillText("BOOKING PNR REFERENCE", stubX + 35, 95);

  // Glowing PNR Box
  ctx.fillStyle = "rgba(255, 215, 0, 0.12)";
  ctx.fillRect(stubX + 35, 110, 260, 56);
  ctx.strokeStyle = "#ffd700";
  ctx.lineWidth = 1.5;
  ctx.strokeRect(stubX + 35, 110, 260, 56);

  ctx.fillStyle = "#ffd700";
  ctx.font = "bold 22px 'Courier New', monospace";
  ctx.textAlign = "center";
  ctx.fillText(pnr, stubX + 165, 145);
  ctx.textAlign = "left";

  // Passenger Small
  ctx.fillStyle = "rgba(255, 255, 255, 0.55)";
  ctx.font = "bold 10px monospace";
  ctx.fillText("PASSENGER", stubX + 35, 195);
  ctx.fillStyle = "#ffffff";
  ctx.font = "bold 14px 'Segoe UI', system-ui";
  const truncName = learnerName.length > 18 ? learnerName.slice(0, 16) + ".." : learnerName;
  ctx.fillText(truncName.toUpperCase(), stubX + 35, 215);

  // Date
  ctx.fillStyle = "rgba(255, 255, 255, 0.55)";
  ctx.font = "bold 10px monospace";
  ctx.fillText("DATE / TIMESTAMP", stubX + 35, 245);
  ctx.fillStyle = "#00ff88";
  ctx.font = "bold 12px monospace";
  const dateStr = new Date().toISOString().slice(0, 10) + " " + new Date().toTimeString().slice(0, 5) + " UTC";
  ctx.fillText(dateStr, stubX + 35, 265);

  // Dynamic Barcode
  const barY = 300;
  const barH = 50;
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
  ctx.strokeRect(stubX + 35, 375, 260, 65);
  ctx.fillStyle = "rgba(0, 243, 255, 0.05)";
  ctx.fillRect(stubX + 35, 375, 260, 65);

  ctx.fillStyle = "#00f3ff";
  ctx.font = "bold 11px monospace";
  ctx.fillText("✦ FAANG VERIFIED QUANTUM KEY ✦", stubX + 45, 400);
  ctx.fillStyle = "rgba(255, 255, 255, 0.7)";
  ctx.font = "10px monospace";
  ctx.fillText("OFFLINE ENGINE READY // 100% SECURE", stubX + 45, 420);

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
