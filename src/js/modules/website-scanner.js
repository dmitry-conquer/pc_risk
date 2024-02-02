import MicroModal from "micromodal";

const startScanningBtn = document.getElementById("start-scanning");
const loadingBar = document.getElementById("loading-bar");
const loadingProcess = document.getElementById("loading-process");
const scannerStatus = document.getElementById("scanner-status");
const getReportBtn = document.getElementById("get-report");
const reportDetails = document.getElementById("report-details");
let progress = 0;
const result = true;

function updateLoader() {
  loadingProcess.style.width = `${progress}%`;
}

function loading() {
  if (progress < 100) {
    progress += 1;
    updateLoader();
    setTimeout(loading, 50);
  } else {
    loadingBar.style.display = "none";
    getReportBtn.style.display = result ? "flex" : false;
    scannerStatus.textContent = result ? "Clean" : "Provided resourse is unreachable";
    scannerStatus.style.color = result ? "#00A11A" : "#F74848";
  }
}

function scanSite() {
  MicroModal.show("popup-scanning", {
    disableFocus: true,
  });
  setTimeout(loading, 300);
}

startScanningBtn.addEventListener("click", () => {
  if (document.getElementById("popup-scanning")) {
    scanSite();
  }
});

getReportBtn.addEventListener("click", () => {
  MicroModal.close("popup-scanning");
  reportDetails.style.display = "block";
});
