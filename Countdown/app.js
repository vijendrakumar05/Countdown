// const endDate = "27 March 2025 07:00:00 PM";
const endDate = "02 March 2025 02:32:00 PM";
document.getElementById("end-date").innerText = endDate;
const inputs = document.querySelectorAll("input");


function clock() {
    const end = new Date(endDate)
    const now = new Date()
    const diff = (end - now) / 1000;

    if (diff < 0) return;

    // convert into days;
    inputs[0].value = Math.floor(diff / 3600 / 24);
    // convert into hours
    inputs[1].value = Math.floor(diff / 3600) % 24;
    // convert into minutes
    inputs[2].value = Math.floor(diff / 60) % 60;
    // convert into seconds
    inputs[3].value = Math.floor(diff) % 60;
}


clock();

setInterval( () => {
        clock()
    },1000
)



/**
 *  1 day = 24 hrs
 *  1 hr = 60 mins
 *  60 min = 3600 sec
 * 1 sec = 1000 ms
 * 
 * 1 day = 24 * 60 * 60 * 1000 ms
 * 1 hr = 60 * 60 * 1000 ms 
 * 1 min = 60 * 1000 ms
 * 1 sec = 1000 ms
 * 
 * 1 day = 86400000 ms
 * 1 hr = 3600000 ms
 * 1 min = 60000 ms
 * 1 sec = 1000 ms
 */