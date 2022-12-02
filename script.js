function countDown() {
    updateTime();
    updateSeconds();
}
function updateTime() {
    var arrival = new Date();
    var currentTime = new Date();
    arrival.setHours(7, 54, 59, 0)
    arrival.setUTCFullYear(2023, 1, 23);
    let month = Math.abs((((arrival.getFullYear() - currentTime.getFullYear()) * 12) - currentTime.getMonth() + arrival.getMonth()));
    // let month = (11 - ((12 - arrival.getMonth()) - (12 - currentTime.getMonth())))
    var lastDayOfMonth = new Date(currentTime.getFullYear(), currentTime.getMonth()+1, 0);

    let d = Math.abs(currentTime.getDate() - arrival.getDate());
    //let d = lastDayOfMonth.getDate() - (currentTime.getDate() + arrival.getDate())
    console.log(lastDayOfMonth.getDate());
    console.log(currentTime.getDate());
    console.log(arrival.getDate());
    //console.log(arrival.getDate())
    let h = Math.abs(arrival.getHours() - currentTime.getHours());
    let m = Math.abs(arrival.getMinutes() - currentTime.getMinutes());
    let s = Math.abs(currentTime.getSeconds() - arrival.getSeconds());
    m = checkTime(m);
    s = checkTime(s);
    document.querySelector('.months').innerHTML = `<span class="time">${month}</span>
                                                <span class="timeTitle">Months</span>`;
    document.querySelector('.days').innerHTML = `<span class="time">${d}</span>
                                                <span class="timeTitle">Days</span>`;
    document.querySelector('.hours').innerHTML = `<span class="time">${h}</span>
                                                <span class="timeTitle">Hours</span>`;
    document.querySelector('.minutes').innerHTML = `<span class="time">${m}</span>
                                                <span class="timeTitle">Minutes</span>`;
    document.querySelector('.seconds').innerHTML = `<span class="time">${s}</span>
                                                <span class="timeTitle">Seconds</span>`;
}

function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}
function updateSeconds() {
    var arrival = new Date();
    var currentTime = new Date();
    arrival.setHours(7, 54, 59, 0)
    arrival.setUTCFullYear(2023, 2, 23);
    let s = Math.abs(currentTime.getSeconds() - arrival.getSeconds());
    s = checkTime(s);
    secondsElement = document.querySelector('.seconds');
    secondsElement.innerHTML = `<span class="time">${s}</span>
                                <span class="timeTitle">Seconds</span>`;
    if ((secondsElement.querySelector('.time').innerHTML) == "59"){
        updateTime();
    }
    setTimeout(updateSeconds, 1000);

}

document.addEventListener('DOMContentLoaded', function() {
    countDown();
})
