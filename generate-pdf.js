#!/usr/bin/env node

/**
 * Generate resume PDF using Puppeteer.
 * Produces identical output to the HTML view.
 *
 * Usage: node generate-pdf.js [output-filename]
 * Default output: resume.pdf
 */

const puppeteer = require("puppeteer-core");
const path = require("path");

async function findChrome() {
  const { execSync } = require("child_process");
  const candidates = [
    "google-chrome",
    "google-chrome-stable",
    "chromium-browser",
    "chromium",
  ];

  for (const cmd of candidates) {
    try {
      const result = execSync(`which ${cmd}`, { encoding: "utf-8" }).trim();
      if (result) return result;
    } catch {
      // not found
    }
  }

  return null;
}

async function generate() {
  const outputName = process.argv[2] || "resume.pdf";
  const outputPath = path.resolve(__dirname, outputName);

  const chromePath = await findChrome();
  if (!chromePath) {
    console.error("[ERROR] No Chrome/Chromium found.");
    process.exit(1);
  }

  const browser = await puppeteer.launch({
    executablePath: process.env.CHROME_PATH || chromePath,
    headless: "new",
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });

  try {
    const page = await browser.newPage();

    // Match viewport to US Letter at 96 DPI so text wraps identically to HTML view
    await page.setViewport({ width: 816, height: 1056, deviceScaleFactor: 1 });

    const filePath = path.resolve(__dirname, "index.html");
    await page.goto(`file://${filePath}`, { waitUntil: "networkidle0" });

    // Hide the download button and apply print-like adjustments
    await page.evaluate(() => {
      const btn = document.querySelector(".no-print");
      if (btn) btn.style.display = "none";
    });

    // Emulate print media so @media print styles apply
    await page.emulateMediaType("print");

    await page.pdf({
      path: outputPath,
      format: "Letter",
      printBackground: true,
      margin: { top: 0, right: 0, bottom: 0, left: 0 },
    });

    console.log(`[OK] PDF saved to ${outputPath}`);
  } finally {
    await browser.close();
  }
}

generate().catch((err) => {
  console.error("[ERROR]", err.message);
  process.exit(1);
});
