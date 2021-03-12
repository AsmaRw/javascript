function format(time) {
    var hours = (time / 3600);
    var minutes = ((time % 3600) / 60);
    var seconds = time % 60;

    var ret = "";
    if (hours > 0) {
        ret += "" + hours + ":" + (minutes < 10 ? "0" : "");
    }
    ret += "" + minutes + ":" + (seconds < 10 ? "0" : "");
    ret += "" + seconds;
    return ret;
}

console.log(format(3700))