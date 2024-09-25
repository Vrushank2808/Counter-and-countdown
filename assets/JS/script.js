let counter = 0;
const countOutput = document.getElementById("countOutput");

document.getElementById("addBtn").addEventListener("click", () => {
    counter++;
    countOutput.textContent = counter;
});

document.getElementById("subtractBtn").addEventListener("click", () => {
    if (counter > 0) {
        counter--;
        countOutput.textContent = counter;
    } else {
        countOutput.textContent = "Cannot go below zero!";
        setTimeout(() => {
            countOutput.textContent = counter;
        }, 1500);
    }
});

document.getElementById("clearBtn").addEventListener("click", () => {
    counter = 0;
    countOutput.textContent = counter;
});

let timer = 10;
let timerInterval;
const timerOutput = document.getElementById("timerOutput");
const setTimeInput = document.getElementById("setTimeInput");

function startTimer() {
    if (timerInterval) clearInterval(timerInterval);
    timerOutput.textContent = formatTime(timer);
    timerInterval = setInterval(() => {
        timer--;
        timerOutput.textContent = formatTime(timer);
        if (timer <= 0) {
            clearInterval(timerInterval);
            timerOutput.textContent = "00:00:00";
            showAlert();
        }
    }, 1000);
}

function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
}

document.getElementById("startTimerBtn").addEventListener("click", () => {
    const customValue = parseInt(setTimeInput.value);
    timer = customValue > 0 ? customValue : timer;
    startTimer();
});

document.getElementById("pauseTimerBtn").addEventListener("click", () => {
    clearInterval(timerInterval);
});

document.getElementById("resetTimerBtn").addEventListener("click", () => {
    clearInterval(timerInterval);
    timer = 10;
    timerOutput.textContent = formatTime(timer);
});

const alertModal = document.getElementById("alertModal");
const closePopupBtn = document.getElementById("closePopupBtn");

function showAlert() {
    alertModal.style.display = "flex";
}

closePopupBtn.addEventListener("click", () => {
    alertModal.style.display = "none";
});

window.onclick = function (event) {
    if (event.target == alertModal) {
        alertModal.style.display = "none";
    }
};
