const endDate = new Date("02 March, 2025 15:40:00");
const startDate = new Date();

function updateTimer() {
    const now = new Date();

    const distanceCovered = now - startDate;
    const distancePending = endDate - now;

    //caculate days, min, hrs, secs
    //1 day = 24 * 60 * 60 * 1000 ms
    const oneDayInMillis = (24 * 60 * 60 * 1000);
    const oneHourInMillis  = (60 * 60 * 1000);
    const oneMinInMIllis = (60*1000);
    const oneSecondInMillis = (1000);

    const days = Math.floor(distancePending / (oneDayInMillis));

    const hrs = Math.floor((distancePending%(oneDayInMillis) / (oneHourInMillis)));

    const mins = Math.floor((distancePending%(oneHourInMillis))/(oneMinInMIllis));

    const secs = Math.floor((distancePending%(oneMinInMIllis))/(oneSecondInMillis));

    //populate in UI
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hrs;
    document.getElementById("minutes").innerHTML = mins;
    document.getElementById("seconds").innerHTML = secs;

    //calculate width percentage for progress bar 
    const totalDistance = endDate - startDate;

    const percetageDistance  = (distanceCovered/totalDistance)*100;

    //set width for progress bar 
    document.getElementById("progress-bar").style.width = percetageDistance + "%";

    if(distancePending < 0 ) {
        clearInterval(over);
        document.getElementById("countdown").innerHTML = "congratulations! The countdown is over, now you can enjoy the moment.";
        document.getElementById("progress-bar").style.width = "100%";
    }
};

let over = setInterval( () => {
    updateTimer()
},1000);