// Certificate Generator for GraphLand 1.0 with Kapil
// Generates FAANG-Grade Certificate of Graph Mastery in both PNG and PDF formats
// 100% Offline, Zero external CDN dependencies

export function generateCertificateCanvas(learnerName = "ALGORITHM MASTER", score = 95, pnr = "GL-FINAL-9942") {
  const canvas = document.createElement("canvas");
  const width = 1600;
  const height = 1130;
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext("2d");

  // Background Gradient
  const bg = ctx.createLinearGradient(0, 0, width, height);
  bg.addColorStop(0, "#060a17");
  bg.addColorStop(0.3, "#0a1329");
  bg.addColorStop(0.7, "#0d1b38");
  bg.addColorStop(1, "#050813");
  ctx.fillStyle = bg;
  ctx.fillRect(0, 0, width, height);

  // Watermark Graph constellation
  ctx.save();
  ctx.strokeStyle = "rgba(0, 243, 255, 0.04)";
  ctx.lineWidth = 1.5;
  const constellationNodes = [
    { x: 300, y: 300 }, { x: 500, y: 220 }, { x: 700, y: 350 },
    { x: 900, y: 240 }, { x: 1100, y: 320 }, { x: 1300, y: 260 },
    { x: 400, y: 700 }, { x: 650, y: 820 }, { x: 950, y: 750 },
    { x: 1250, y: 850 }
  ];
  for (let i = 0; i < constellationNodes.length; i++) {
    for (let j = i + 1; j < constellationNodes.length; j++) {
      const dx = constellationNodes[i].x - constellationNodes[j].x;
      const dy = constellationNodes[i].y - constellationNodes[j].y;
      if (Math.sqrt(dx * dx + dy * dy) < 360) {
        ctx.beginPath();
        ctx.moveTo(constellationNodes[i].x, constellationNodes[i].y);
        ctx.lineTo(constellationNodes[j].x, constellationNodes[j].y);
        ctx.stroke();
      }
    }
  }
  ctx.restore();

  // Dual Outer Gold & Cyan Tech Borders
  ctx.strokeStyle = "#ffd700";
  ctx.lineWidth = 6;
  ctx.strokeRect(36, 36, width - 72, height - 72);

  ctx.strokeStyle = "rgba(0, 243, 255, 0.7)";
  ctx.lineWidth = 2;
  ctx.strokeRect(48, 48, width - 96, height - 96);

  ctx.strokeStyle = "rgba(255, 215, 0, 0.3)";
  ctx.lineWidth = 1;
  ctx.strokeRect(60, 60, width - 120, height - 120);

  // Corner Ornaments
  const drawCornerTech = (x, y, dx, dy) => {
    ctx.strokeStyle = "#ffd700";
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(x, y + dy * 45);
    ctx.lineTo(x, y);
    ctx.lineTo(x + dx * 45, y);
    ctx.stroke();

    ctx.fillStyle = "#00f3ff";
    ctx.beginPath();
    ctx.arc(x + dx * 16, y + dy * 16, 4, 0, Math.PI * 2);
    ctx.fill();
  };
  drawCornerTech(68, 68, 1, 1);
  drawCornerTech(width - 68, 68, -1, 1);
  drawCornerTech(68, height - 68, 1, -1);
  drawCornerTech(width - 68, height - 68, -1, -1);

  const cx = width / 2;

  // Header Emblems
  ctx.fillStyle = "#ffd700";
  ctx.font = "bold 18px 'Courier New', monospace";
  ctx.textAlign = "center";
  ctx.fillText("✦ FAANG ADVANCED ALGORITHMS INSTITUTE // GRAPHLAND 1.0 ✦", cx, 130);

  // Certificate Title
  ctx.fillStyle = "#ffffff";
  ctx.font = "bold 46px 'Segoe UI', system-ui, sans-serif";
  ctx.fillText("CERTIFICATE OF GRAPH MASTERY", cx, 195);

  ctx.fillStyle = "#00f3ff";
  ctx.font = "bold 20px 'Segoe UI', system-ui, sans-serif";
  ctx.fillText("HONORING DISTINCTION IN GRAPH THEORY & ADVANCED DATA STRUCTURES", cx, 235);

  // Decorative Golden Ribbon Line
  ctx.strokeStyle = "#ffd700";
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(cx - 320, 265);
  ctx.lineTo(cx + 320, 265);
  ctx.stroke();

  ctx.fillStyle = "#ffd700";
  ctx.beginPath();
  ctx.arc(cx, 265, 7, 0, Math.PI * 2);
  ctx.fill();

  // "This certifies that"
  ctx.fillStyle = "rgba(255, 255, 255, 0.75)";
  ctx.font = "italic 22px Georgia, serif";
  ctx.fillText("This prestigious credential is proudly conferred upon", cx, 330);

  // Recipient Name with dynamic font scaling
  const cadetName = (learnerName || "ALGORITHM MASTER").toUpperCase();
  let certNameFontSize = 58;
  if (cadetName.length > 28) certNameFontSize = 38;
  else if (cadetName.length > 20) certNameFontSize = 46;

  ctx.fillStyle = "#00ff88";
  ctx.shadowColor = "#00ff88";
  ctx.shadowBlur = 18;
  ctx.font = `bold ${certNameFontSize}px 'Segoe UI', system-ui, sans-serif`;
  ctx.fillText(cadetName, cx, 410);
  ctx.shadowBlur = 0;

  // Citation text
  ctx.fillStyle = "rgba(255, 255, 255, 0.88)";
  ctx.font = "18px 'Segoe UI', system-ui, sans-serif";
  const line1 = "for successfully mastering the complete GraphLand 1.0 curriculum across all 8 progressive realms:";
  const line2 = "Realm 0 (Jodhpur Expedition: JIET Campus to Mehrangarh), Adjacency Models, BFS/DFS Traversal, DAGs & Kahn's Algorithm,";
  const line3 = "Eulerian Paths & Tarjan's Bridges, Dijkstra's & Bellman-Ford Shortest Paths, Kruskal's & Prim's MST with DSU,";
  const line4 = "Bipartite Graph Matching, Kosaraju's Strongly Connected Components, and Max-Flow Min-Cut Network Flow Theory,";
  const line5 = `and achieving a distinguished score of ${score}% (Passing Threshold: >= 90%) on the Final Grand 100 MCQs Examination.`;

  ctx.fillText(line1, cx, 475);
  ctx.fillText(line2, cx, 508);
  ctx.fillText(line3, cx, 538);
  ctx.fillText(line4, cx, 568);

  ctx.fillStyle = "#ffd700";
  ctx.font = "bold 20px 'Segoe UI', system-ui, sans-serif";
  ctx.fillText(line5, cx, 615);

  // Distinction Seal Box
  ctx.fillStyle = "rgba(255, 215, 0, 0.08)";
  ctx.strokeStyle = "#ffd700";
  ctx.lineWidth = 1.5;
  ctx.fillRect(cx - 300, 665, 600, 60);
  ctx.strokeRect(cx - 300, 665, 600, 60);

  ctx.fillStyle = "#ffd700";
  ctx.font = "bold 20px monospace";
  ctx.fillText(`★ GRADE: DISTINCTION (${score} / 100)  •  PNR: ${pnr} ★`, cx, 702);

  // Holographic Star Seal Medal (Left Bottom)
  const sealX = 300;
  const sealY = 880;
  ctx.save();
  ctx.fillStyle = "rgba(255, 215, 0, 0.15)";
  ctx.beginPath();
  ctx.arc(sealX, sealY, 75, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = "#ffd700";
  ctx.lineWidth = 3;
  ctx.stroke();

  // Outer Seal Ridges
  for (let a = 0; a < 36; a++) {
    const rad = (Math.PI / 18) * a;
    const sx1 = sealX + 70 * Math.cos(rad);
    const sy1 = sealY + 70 * Math.sin(rad);
    const sx2 = sealX + 78 * Math.cos(rad);
    const sy2 = sealY + 78 * Math.sin(rad);
    ctx.beginPath();
    ctx.moveTo(sx1, sy1);
    ctx.lineTo(sx2, sy2);
    ctx.stroke();
  }

  ctx.fillStyle = "#ffd700";
  ctx.font = "bold 13px 'Courier New', monospace";
  ctx.fillText("OFFICIAL SEAL", sealX, sealY - 20);
  ctx.font = "30px 'Segoe UI Emoji'";
  ctx.fillText("👑", sealX, sealY + 12);
  ctx.font = "bold 11px monospace";
  ctx.fillText("FAANG QUALIFIED", sealX, sealY + 36);
  ctx.restore();

  // Signature Block 1: Kapil (Mentor)
  const sig1X = cx + 50;
  const sig1Y = 880;
  ctx.strokeStyle = "rgba(255, 255, 255, 0.5)";
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.moveTo(sig1X - 120, sig1Y);
  ctx.lineTo(sig1X + 120, sig1Y);
  ctx.stroke();

  ctx.fillStyle = "#00f3ff";
  ctx.font = "bold 24px 'Brush Script MT', cursive, Georgia";
  ctx.fillText("Kapil", sig1X, sig1Y - 14);

  ctx.fillStyle = "#ffffff";
  ctx.font = "bold 15px 'Segoe UI', system-ui";
  ctx.fillText("Kapil", sig1X, sig1Y + 24);

  ctx.fillStyle = "rgba(255, 255, 255, 0.6)";
  ctx.font = "12px monospace";
  ctx.fillText("Lead Architect & Graph Mentor", sig1X, sig1Y + 44);

  // Signature Block 2: GraphLand Board
  const sig2X = cx + 380;
  const sig2Y = 880;
  ctx.strokeStyle = "rgba(255, 255, 255, 0.5)";
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.moveTo(sig2X - 120, sig2Y);
  ctx.lineTo(sig2X + 120, sig2Y);
  ctx.stroke();

  ctx.fillStyle = "#00ff88";
  ctx.font = "bold 20px monospace";
  ctx.fillText("CERTIFIED AUTH", sig2X, sig2Y - 14);

  ctx.fillStyle = "#ffffff";
  ctx.font = "bold 15px 'Segoe UI', system-ui";
  ctx.fillText("GraphLand Institute", sig2X, sig2Y + 24);

  ctx.fillStyle = "rgba(255, 255, 255, 0.6)";
  ctx.font = "12px monospace";
  ctx.fillText("Standards & Certification Council", sig2X, sig2Y + 44);

  // Verification & Date Footer
  ctx.fillStyle = "rgba(255, 255, 255, 0.55)";
  ctx.font = "12px monospace";
  const dateStr = new Date().toISOString().slice(0, 10);
  ctx.fillText(`Issued: ${dateStr}  •  Verification Hash: ${generateSimpleHash(pnr + learnerName)}  •  100% Offline Verifiable`, cx, 1025);

  // Copyright Notice
  ctx.fillStyle = "rgba(255, 255, 255, 0.4)";
  ctx.font = "11px monospace";
  ctx.fillText("© 2026 A Journey to GraphLand 1.0 with Kapil. All Rights Reserved. Mentored by Kapil • JIET Group of Institutions.", cx, 1048);

  return canvas;
}

function generateSimpleHash(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = ((hash << 5) - hash) + str.charCodeAt(i);
    hash |= 0;
  }
  return "0x" + Math.abs(hash).toString(16).padStart(8, "0").toUpperCase();
}

export function downloadCertificatePNG(learnerName, score, pnr) {
  const canvas = generateCertificateCanvas(learnerName, score, pnr);
  const link = document.createElement("a");
  link.download = `Certificate_GraphLand_${learnerName.replace(/\s+/g, "_")}_${pnr}.png`;
  link.href = canvas.toDataURL("image/png");
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

// True Offline Client-Side PDF Generation
// Generates a valid PDF-1.4 file embedding the Certificate high-res rendering
export function downloadCertificatePDF(learnerName, score, pnr) {
  const canvas = generateCertificateCanvas(learnerName, score, pnr);
  
  // Convert canvas to JPEG data URL
  const jpegDataUrl = canvas.toDataURL("image/jpeg", 0.92);
  const base64Data = jpegDataUrl.split(",")[1];
  const binaryImg = atob(base64Data);
  const imgLength = binaryImg.length;
  
  const imgBytes = new Uint8Array(imgLength);
  for (let i = 0; i < imgLength; i++) {
    imgBytes[i] = binaryImg.charCodeAt(i);
  }

  // Construct PDF 1.4 document
  // Page size: 842 x 595 pt (Standard A4 Landscape)
  const pageWidth = 842;
  const pageHeight = 595;

  const header = "%PDF-1.4\n%\xE2\xE3\xCF\xD3\n";

  const obj1 = "1 0 obj\n<< /Type /Catalog /Pages 2 0 R >>\nendobj\n";
  const obj2 = "2 0 obj\n<< /Type /Pages /Kids [3 0 R] /Count 1 >>\nendobj\n";
  const obj3 = `3 0 obj\n<< /Type /Page /Parent 2 0 R /MediaBox [0 0 ${pageWidth} ${pageHeight}] /Resources << /XObject << /Im1 4 0 R >> >> /Contents 5 0 R >>\nendobj\n`;
  const obj4Header = `4 0 obj\n<< /Type /XObject /Subtype /Image /Width ${canvas.width} /Height ${canvas.height} /ColorSpace /DeviceRGB /BitsPerComponent 8 /Filter /DCTDecode /Length ${imgLength} >>\nstream\n`;
  const obj4Footer = "\nendstream\nendobj\n";
  
  const contentStream = `q\n${pageWidth} 0 0 ${pageHeight} 0 0 cm\n/Im1 Do\nQ\n`;
  const obj5 = `5 0 obj\n<< /Length ${contentStream.length} >>\nstream\n${contentStream}endstream\nendobj\n`;

  // Calculate offsets for cross-reference table
  let currentOffset = header.length;
  const offsets = [];

  offsets.push(currentOffset);
  currentOffset += obj1.length;

  offsets.push(currentOffset);
  currentOffset += obj2.length;

  offsets.push(currentOffset);
  currentOffset += obj3.length;

  offsets.push(currentOffset);
  currentOffset += obj4Header.length + imgLength + obj4Footer.length;

  offsets.push(currentOffset);
  currentOffset += obj5.length;

  const xrefOffset = currentOffset;
  let xref = "xref\n0 6\n0000000000 65535 f \n";
  offsets.forEach(off => {
    xref += String(off).padStart(10, "0") + " 00000 n \n";
  });

  const trailer = `trailer\n<< /Size 6 /Root 1 0 R >>\nstartxref\n${xrefOffset}\n%%EOF\n`;

  // Combine into single Uint8Array blob
  const textBeforeImg = header + obj1 + obj2 + obj3 + obj4Header;
  const textAfterImg = obj4Footer + obj5 + xref + trailer;

  const enc = new TextEncoder();
  const bytesBefore = enc.encode(textBeforeImg);
  const bytesAfter = enc.encode(textAfterImg);

  const totalLength = bytesBefore.length + imgLength + bytesAfter.length;
  const pdfBytes = new Uint8Array(totalLength);

  pdfBytes.set(bytesBefore, 0);
  pdfBytes.set(imgBytes, bytesBefore.length);
  pdfBytes.set(bytesAfter, bytesBefore.length + imgLength);

  const blob = new Blob([pdfBytes], { type: "application/pdf" });
  const url = URL.createObjectURL(blob);

  const link = document.createElement("a");
  link.download = `Certificate_GraphLand_${learnerName.replace(/\s+/g, "_")}_${pnr}.pdf`;
  link.href = url;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}
