/**
 * Resume Builder - JavaScript
 * Handles PDF download and page fit checking
 */

document.addEventListener("DOMContentLoaded", function () {
  const downloadBtn = document.getElementById("downloadBtn");

  if (downloadBtn) {
    downloadBtn.addEventListener("click", function () {
      // If served via server.js, use Puppeteer PDF endpoint
      if (window.location.protocol === "http:" || window.location.protocol === "https:") {
        downloadBtn.textContent = "Generating...";
        downloadBtn.disabled = true;
        fetch("/download-pdf")
          .then(function (res) {
            if (!res.ok) throw new Error("PDF generation failed");
            return res.blob();
          })
          .then(function (blob) {
            var url = URL.createObjectURL(blob);
            var a = document.createElement("a");
            a.href = url;
            a.download = "resume.pdf";
            a.click();
            URL.revokeObjectURL(url);
          })
          .catch(function () {
            // Fallback to browser print if server not available
            window.print();
          })
          .finally(function () {
            downloadBtn.innerHTML =
              '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg> Download PDF';
            downloadBtn.disabled = false;
          });
      } else {
        // Opened as file:// — fallback to print
        window.print();
      }
    });
  }
});

/**
 * Check if resume content fits within one page.
 * Call from browser console: checkPageFit()
 */
function checkPageFit() {
  var resume = document.getElementById("resume");
  if (!resume) {
    console.log("No #resume element found");
    return false;
  }
  var contentHeight = resume.scrollHeight;
  var pageHeight = 11 * 96; // 11 inches at 96 DPI
  var fits = contentHeight <= pageHeight;
  var status = fits ? "FITS" : "OVERFLOW";
  var diff = Math.abs(contentHeight - pageHeight);
  var msg = status + " (" + contentHeight + "px / " + pageHeight + "px";
  if (!fits) {
    msg += ", over by " + diff + "px / " + (diff / 96).toFixed(2) + "in";
  }
  msg += ")";
  console.log("Resume: " + msg);
  return fits;
}
