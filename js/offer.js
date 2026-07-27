const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

const offerDate = new Date("December 31, 2026 23:59:59").getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const distance = offerDate - now;

    if (distance <= 0) {
        days.textContent = "00";
        hours.textContent = "00";
        minutes.textContent = "00";
        seconds.textContent = "00";
        return;
    }

    const day = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hour = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minute = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const second = Math.floor((distance % (1000 * 60)) / 1000);

    days.textContent = String(day).padStart(2, "0");
    hours.textContent = String(hour).padStart(2, "0");
    minutes.textContent = String(minute).padStart(2, "0");
    seconds.textContent = String(second).padStart(2, "0");
}

updateCountdown();
setInterval(updateCountdown, 1000);