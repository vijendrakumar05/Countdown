const daysElement = document.getElementById("days");
const hoursElement = document.getElementById("hours");
const minutesElement = document.getElementById("minutes");
const secondsElement = document.getElementById("seconds");
const countdownElement = document.querySelector(".countdown");

const targetDate = new Date("March 04, 2025 01:45:00").getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const timeLeft = targetDate - now;

    if (timeLeft > 0) {
        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        // Format numbers to always show two digits
        daysElement.innerHTML = days.toString().padStart(2, "0");
        hoursElement.innerHTML = hours.toString().padStart(2, "0");
        minutesElement.innerHTML = minutes.toString().padStart(2, "0");
        secondsElement.innerHTML = seconds.toString().padStart(2, "0");
    } else {
        // If countdown is finished, set all values to 00
        // daysElement.textContent = "00";
        // hoursElement.textContent = "00";
        // minutesElement.textContent = "00";
        // secondsElement.textContent = "00";
        // clearInterval(timerInterval);
        // alert("Countdown Finished!");
        countdownElement.innerHTML = `Congratulations! The countdown is over, now you can enjoy the moment.`;
    }
}

// Update countdown every second
const timerInterval = setInterval(updateCountdown, 1000);

updateCountdown(); 


