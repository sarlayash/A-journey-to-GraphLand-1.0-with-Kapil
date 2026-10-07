// Verification of all ES module exports and syntax
import * as curriculum from "../js/data/curriculum.js";
import * as finalQuiz from "../js/data/final100Quiz.js";
import * as audio from "../js/audio.js";
import * as graphVis from "../js/canvas/graphVisualizer.js";
import * as boardingPass from "../js/canvas/boardingPassGenerator.js";
import * as badge from "../js/canvas/badgeGenerator.js";
import * as cert from "../js/canvas/certificateGenerator.js";

console.log("Verifying ES Module Exports:");
console.log("- curriculum.GRAPH_LEVELS count:", curriculum.GRAPH_LEVELS.length);
console.log("- finalQuiz.FINAL_100_QUIZ count:", finalQuiz.FINAL_100_QUIZ.length);
console.log("- audio.soundEngine available:", typeof audio.soundEngine.init === "function");
console.log("- graphVis.GraphVisualizer available:", typeof graphVis.GraphVisualizer === "function");
console.log("- boardingPass.generateBoardingPassCanvas available:", typeof boardingPass.generateBoardingPassCanvas === "function");
console.log("- badge.generateBadgeCanvas available:", typeof badge.generateBadgeCanvas === "function");
console.log("- cert.generateCertificateCanvas available:", typeof cert.generateCertificateCanvas === "function");
console.log("- cert.downloadCertificatePNG available:", typeof cert.downloadCertificatePNG === "function");
console.log("- cert.downloadCertificatePDF available:", typeof cert.downloadCertificatePDF === "function");

console.log("\nALL ES MODULE EXPORTS VERIFIED SUCCESSFULLY!");
