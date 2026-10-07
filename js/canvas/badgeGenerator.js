// Badge Generator for GraphLand 1.0 with Kapil
// Generates high-resolution 800x800 Cyber-Shield PNG Badges stamped with Level PNR and Kapil seal

export function generateBadgeCanvas(level, learnerName = "EXPLORER", levelPnr = "PNR-GL1-0000") {
  const canvas = document.createElement("canvas");
  const size = 800;
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext("2d");

  // Dark Cyber Space background
  ctx.fillStyle = "#070b16";
  ctx.fillRect(0, 0, size, size);

  // Background radial glow
  const centerGlow = ctx.createRadialGradient(size / 2, size / 2, 50, size / 2, size / 2, 380);
  const themeCol = level.themeColor || "#00f3ff";
  centerGlow.addColorStop(0, "rgba(0, 243, 255, 0.12)");
  centerGlow.addColorStop(0.6, "rgba(188, 19, 254, 0.06)");
  centerGlow.addColorStop(1, "rgba(7, 11, 22, 0)");
  ctx.fillStyle = centerGlow;
  ctx.fillRect(0, 0, size, size);

  // Concentric decorative tech rings
  ctx.strokeStyle = "rgba(0, 243, 255, 0.08)";
  ctx.lineWidth = 1;
  [180, 260, 340].forEach(r => {
    ctx.beginPath();
    ctx.arc(size / 2, size / 2, r, 0, Math.PI * 2);
    ctx.stroke();
  });

  // Cyber Hexagon Shield
  const hexRadius = 310;
  const cx = size / 2;
  const cy = size / 2;

  const drawHexagon = (radius, strokeColor, fillStyle, lineWidth = 3) => {
    ctx.beginPath();
    for (let i = 0; i < 6; i++) {
      const angle = (Math.PI / 3) * i - Math.PI / 6;
      const x = cx + radius * Math.cos(angle);
      const y = cy + radius * Math.sin(angle);
      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.closePath();
    if (fillStyle) {
      ctx.fillStyle = fillStyle;
      ctx.fill();
    }
    if (strokeColor) {
      ctx.strokeStyle = strokeColor;
      ctx.lineWidth = lineWidth;
      ctx.stroke();
    }
  };

  // Outer Hexagon
  ctx.shadowColor = themeCol;
  ctx.shadowBlur = 25;
  drawHexagon(hexRadius, themeCol, "rgba(12, 22, 44, 0.85)", 4);
  ctx.shadowBlur = 0;

  // Inner Hexagon
  drawHexagon(hexRadius - 20, "rgba(255, 215, 0, 0.4)", "rgba(5, 10, 25, 0.6)", 2);

  // Top Title Banner
  ctx.fillStyle = "#ffd700";
  ctx.font = "bold 15px 'Courier New', monospace";
  ctx.textAlign = "center";
  ctx.fillText("✦ GRAPHLAND 1.0 MASTERY BADGE ✦", cx, 160);

  // Level Badge Icon (Emblem)
  ctx.font = "72px 'Segoe UI Emoji', sans-serif";
  ctx.fillText(level.badgeIcon || "🏆", cx, 250);

  // Level Number
  ctx.fillStyle = themeCol;
  ctx.font = "bold 18px 'Courier New', monospace";
  ctx.fillText(`LEVEL ${level.id} CLEARED`, cx, 305);

  // Badge Name (e.g. Matrix Architect)
  ctx.fillStyle = "#ffffff";
  ctx.font = "bold 32px 'Segoe UI', system-ui, sans-serif";
  ctx.fillText(level.badgeName.toUpperCase(), cx, 345);

  // Divider Line
  ctx.strokeStyle = "rgba(0, 243, 255, 0.3)";
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(cx - 180, 370);
  ctx.lineTo(cx + 180, 370);
  ctx.stroke();

  // Awarded To Label
  ctx.fillStyle = "rgba(255, 255, 255, 0.6)";
  ctx.font = "12px monospace";
  ctx.fillText("AWARDED TO CADET", cx, 400);

  // Learner Name
  ctx.fillStyle = "#00ff88";
  ctx.font = "bold 26px 'Segoe UI', system-ui, sans-serif";
  ctx.fillText(learnerName.toUpperCase(), cx, 435);

  // Stamped PNR Box
  ctx.fillStyle = "rgba(255, 215, 0, 0.1)";
  ctx.strokeStyle = "#ffd700";
  ctx.lineWidth = 1.5;
  const pnrBoxW = 320;
  const pnrBoxH = 50;
  ctx.fillRect(cx - pnrBoxW / 2, 470, pnrBoxW, pnrBoxH);
  ctx.strokeRect(cx - pnrBoxW / 2, 470, pnrBoxW, pnrBoxH);

  ctx.fillStyle = "#ffd700";
  ctx.font = "bold 18px 'Courier New', monospace";
  ctx.fillText(`LEVEL PNR: ${levelPnr}`, cx, 502);

  // Verified by Kapil
  ctx.fillStyle = "#ffffff";
  ctx.font = "italic 16px Georgia, serif";
  ctx.fillText("Certified & Mentored by Kapil", cx, 555);

  // Cryptographic Timestamp / Seal
  ctx.fillStyle = "rgba(0, 243, 255, 0.6)";
  ctx.font = "11px monospace";
  const dateStr = new Date().toISOString().slice(0, 10);
  ctx.fillText(`AUTHENTICATED ${dateStr} // FAANG ALGORITHM LABS`, cx, 585);

  // Corner rivets
  const cornerR = hexRadius + 15;
  for (let i = 0; i < 6; i++) {
    const angle = (Math.PI / 3) * i - Math.PI / 6;
    const rx = cx + cornerR * Math.cos(angle);
    const ry = cy + cornerR * Math.sin(angle);
    ctx.fillStyle = "#ffd700";
    ctx.beginPath();
    ctx.arc(rx, ry, 5, 0, Math.PI * 2);
    ctx.fill();
  }

  return canvas;
}

export function downloadBadge(level, learnerName, levelPnr) {
  const canvas = generateBadgeCanvas(level, learnerName, levelPnr);
  const link = document.createElement("a");
  link.download = `Badge_Level${level.id}_${level.badgeName.replace(/\s+/g, "_")}_${levelPnr}.png`;
  link.href = canvas.toDataURL("image/png");
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
