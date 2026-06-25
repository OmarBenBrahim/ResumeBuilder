#!/usr/bin/env node

/**
 * Resume Page Validation Script
 *
 * Measures the actual rendered height of the resume using Puppeteer
 * and reports whether it fits on a single US Letter page (8.5" x 11").
 *
 * Usage: node validate-page.js
 */

const puppeteer = require("puppeteer-core");
const path = require("path");

const PAGE_HEIGHT_INCHES = 11;
const DPI = 96;
const PAGE_HEIGHT_PX = PAGE_HEIGHT_INCHES * DPI; // 1056px

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
      // not found, try next
    }
  }

  return null;
}

async function validate() {
  const chromePath = process.env.CHROME_PATH || (await findChrome());
  if (!chromePath) {
    console.error(
      "[ERROR] No Chrome/Chromium found. Install Chrome or set CHROME_PATH."
    );
    process.exit(2);
  }

  const browser = await puppeteer.launch({
    executablePath: chromePath,
    headless: "new",
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });

  try {
    const page = await browser.newPage();

    // Set viewport to match US Letter at 96 DPI
    await page.setViewport({
      width: Math.round(8.5 * DPI),
      height: PAGE_HEIGHT_PX,
      deviceScaleFactor: 1,
    });

    const filePath = path.resolve(__dirname, "index.html");
    await page.goto(`file://${filePath}`, { waitUntil: "networkidle0" });

    // Measure the resume container's actual content height
    // Remove height constraints to get true content height
    const measurements = await page.evaluate(() => {
      const resume = document.getElementById("resume");
      if (!resume) return { error: "No #resume element found" };

      // Temporarily remove height constraints to measure true content
      const origHeight = resume.style.height;
      const origMaxHeight = resume.style.maxHeight;
      const origOverflow = resume.style.overflow;
      resume.style.height = "auto";
      resume.style.maxHeight = "none";
      resume.style.overflow = "visible";

      const contentHeight = resume.scrollHeight;
      const containerHeight = resume.offsetHeight;

      // Restore
      resume.style.height = origHeight;
      resume.style.maxHeight = origMaxHeight;
      resume.style.overflow = origOverflow;

      // Measure individual sections
      const sections = [];
      for (const child of resume.children) {
        const tagName = child.tagName.toLowerCase();
        const heading =
          child.querySelector("h2, h1")?.textContent?.trim() ||
          child.className ||
          tagName;
        const height = child.offsetHeight;

        // Count bullets if any
        const bullets = child.querySelectorAll("li").length;

        sections.push({ name: heading, height, bullets });
      }

      return { contentHeight, containerHeight, sections };
    });

    if (measurements.error) {
      console.error(`[ERROR] ${measurements.error}`);
      process.exit(2);
    }

    const { contentHeight, sections } = measurements;
    const contentInches = (contentHeight / DPI).toFixed(2);
    const maxInches = PAGE_HEIGHT_INCHES.toFixed(2);

    // Account for padding (0.3in top + 0.3in bottom = 0.6in)
    const paddingPx = 0.6 * DPI;
    const availableHeight = PAGE_HEIGHT_PX - paddingPx;
    const actualContentHeight = contentHeight;

    // The resume-page has padding built in, so scrollHeight includes content only within the padded area
    // We compare scrollHeight to offsetHeight (which is capped at 11in by CSS)
    const overflowPx = Math.max(0, contentHeight - PAGE_HEIGHT_PX);
    const overflowInches = (overflowPx / DPI).toFixed(2);

    console.log("");

    if (overflowPx <= 0) {
      console.log(
        `[PASS] Resume fits on one page (${contentInches}in / ${maxInches}in)`
      );
    } else {
      console.log(
        `[FAIL] Resume overflows by ${overflowInches}in (${contentInches}in / ${maxInches}in max)`
      );
    }

    // Section breakdown
    console.log("");
    console.log("Section breakdown:");
    for (const section of sections) {
      const sectionInches = (section.height / DPI).toFixed(2);
      const bulletInfo =
        section.bullets > 0 ? ` (${section.bullets} bullets)` : "";
      console.log(`  - ${section.name}: ${sectionInches}in${bulletInfo}`);
    }

    console.log("");
    process.exit(overflowPx > 0 ? 1 : 0);
  } finally {
    await browser.close();
  }
}

validate().catch((err) => {
  console.error("[ERROR]", err.message);
  process.exit(2);
});
