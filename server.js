const http = require("http");
const fs = require("fs");
const path = require("path");
const puppeteer = require("puppeteer-core");

const PORT = 3000;
const MIME_TYPES = {
  ".html": "text/html",
  ".css": "text/css",
  ".js": "application/javascript",
  ".json": "application/json",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".svg": "image/svg+xml",
};

function findChrome() {
  const { execSync } = require("child_process");
  const candidates = [
    "google-chrome",
    "google-chrome-stable",
    "chromium-browser",
    "chromium",
  ];
  for (const cmd of candidates) {
    try {
      return execSync(`which ${cmd}`, { encoding: "utf-8" }).trim();
    } catch {
      // not found
    }
  }
  return null;
}

const server = http.createServer(async (req, res) => {
  // PDF download endpoint
  if (req.url === "/download-pdf") {
    try {
      const chromePath = process.env.CHROME_PATH || findChrome();
      const browser = await puppeteer.launch({
        executablePath: chromePath,
        headless: "new",
        args: ["--no-sandbox", "--disable-setuid-sandbox"],
      });

      const page = await browser.newPage();
      await page.setViewport({ width: 816, height: 1056, deviceScaleFactor: 1 });
      await page.goto(`file://${path.resolve(__dirname, "index.html")}`, {
        waitUntil: "networkidle0",
      });

      // Hide the download button
      await page.evaluate(() => {
        const btn = document.querySelector(".no-print");
        if (btn) btn.style.display = "none";
      });

      // Apply print styles for proper sizing
      await page.emulateMediaType("print");

      const pdfBuffer = await page.pdf({
        format: "Letter",
        printBackground: true,
        margin: { top: 0, right: 0, bottom: 0, left: 0 },
      });

      await browser.close();

      res.writeHead(200, {
        "Content-Type": "application/pdf",
        "Content-Disposition": 'attachment; filename="resume.pdf"',
        "Content-Length": pdfBuffer.length,
      });
      res.end(pdfBuffer);
    } catch (err) {
      res.writeHead(500, { "Content-Type": "text/plain" });
      res.end("PDF generation failed: " + err.message);
    }
    return;
  }

  // Serve static files
  let filePath = path.join(__dirname, req.url === "/" ? "index.html" : req.url);
  const ext = path.extname(filePath);
  const contentType = MIME_TYPES[ext] || "application/octet-stream";

  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404);
      res.end("Not found");
      return;
    }
    res.writeHead(200, { "Content-Type": contentType });
    res.end(data);
  });
});

server.listen(PORT, () => {
  console.log(`Resume server running at http://localhost:${PORT}`);
  console.log(`Open in browser to preview, click Download to generate PDF`);
});
