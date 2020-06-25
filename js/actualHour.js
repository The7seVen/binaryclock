window.onload = hourNow();
function hourNow() {
    const now = new Date();
    console.log(now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds());
    //zamienić poszczególne cyfry na ich odpowiedniki w zegarze binarnym

    var parts = now.split("");
    var hour = parts[0] + parts[1];
    var minute = parts[3] + parts[4];
    var second = parts[6] + parts[7];

    if ((hour >= 0 && hour <= 24) && (minute >= 0 && minute <= 59) && (second >= 0 && second <= 59)) {
        for (i = 0; i < parts.length; i++) {
            if (parts[i] != ":") {
                correlation(parts[i]);
            }
        }
    }
}

const time = setInterval(function () {
    hourNow();
}, 1000);