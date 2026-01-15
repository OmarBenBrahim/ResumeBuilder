/**
 * Resume Builder - JavaScript
 * Handles PDF download functionality
 */

document.addEventListener("DOMContentLoaded", function () {
  const downloadBtn = document.getElementById("downloadBtn");

  if (downloadBtn) {
    downloadBtn.addEventListener("click", function () {
      window.print();
    });
  }
});
