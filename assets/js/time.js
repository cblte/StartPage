function startTime() {
    var today = new Date();
    document.getElementById('time').innerHTML =
        checkTime(today.getHours()) + " : " + checkTime(today.getMinutes()) + " : " + checkTime(today.getSeconds());
    var t = setTimeout(startTime, 500);
}
function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}	
