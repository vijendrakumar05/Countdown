const endDate = new Date("02 March, 2025 15:40:00");
const startDate = new Date();

let days = document.getElementById("days");
let hours = document.getElementById("hours")
let minutes = document.getElementById("minutes")
let seconds = document.getElementById("seconds")


function updateTimer() {
    const now = new Date();
    const distancePending = endDate - now;

    const oneDayInMillis = (24 * 60 * 60 * 1000);
    const oneHourInMillis  = (60 * 60 * 1000);
    const oneMinInMIllis = (60*1000);
    const oneSecondInMillis = (1000);

    const days = Math.floor(distancePending / (oneDayInMillis));
    const hrs = Math.floor((distancePending%(oneDayInMillis) / (oneHourInMillis)));
    const mins = Math.floor((distancePending%(oneHourInMillis))/(oneMinInMIllis));
    const secs = Math.floor((distancePending%(oneMinInMIllis))/(oneSecondInMillis));

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hrs;
    document.getElementById("minutes").innerHTML = mins;
    document.getElementById("seconds").innerHTML = secs;

    if(distancePending < 0 ) {
        clearInterval(over);
        document.getElementById("timer").innerHTML = "congratulations! The countdown is over, now you can enjoy the moment.";
    }
};

let over = setInterval( () => {
    updateTimer()
},1000);

