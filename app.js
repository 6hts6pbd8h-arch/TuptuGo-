const startBtn = document.getElementById("startBtn");

if (startBtn) {
    startBtn.addEventListener("click", () => {
        window.location.href = "dashboard.html";
    });
}