function format(num) {
    var wHours = num % 3600;
    var hours = (num - wHours) / 3600;
    var wMin = wHours % 60;
    var min = (wHours - wMin) / 60;
    var sec = wMin;
    var result = hours + ":" + min + ":" + sec;
    console.log(result)
}

format(3700)