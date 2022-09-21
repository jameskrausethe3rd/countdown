function countDown() {
    var arrival = new Date();
    var currentTime = new Date();
    arrival.setHours(7, 54, 59, 0)
    arrival.setUTCFullYear(2023, 2, 23);
    let month = Math.abs(currentTime.getMonth() - arrival.getMonth());
    let d = Math.abs(currentTime.getDate() - arrival.getDate());
    let h = Math.abs(currentTime.getHours() - arrival.getHours());
    let m = Math.abs(currentTime.getMinutes() - arrival.getMinutes());
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
    // document.querySelector('.days').innerHTML = d;
    // document.querySelector('.hours').innerHTML = h;
    // document.querySelector('.minutes').innerHTML = m;
    // document.querySelector('.seconds').innerHTML = s;
    setTimeout(countDown, 1000);
}
function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}

document.addEventListener('DOMContentLoaded', function() {
    countDown();
})