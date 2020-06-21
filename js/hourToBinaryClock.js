function hourToBinaryClock() {
    var hourToConvert = document.getElementById("hourToConvert").value;
    var result = document.getElementById("result");
    if (hourToConvert == "") {
        result.innerHTML = "<span style='color:red'>Proszę wpisać godzinę do konwersji!</span>";
    }
    else {
        let regHour = /^((?:[01]\d|2[0-3]):[0-5]\d:[0-5]\d$)/;
        if (!regHour.test(hourToConvert)) {
            result.innerHTML = "<span style='color:red'> Proszę wpisać poprawną formę godziny! </span>";
        }
        else {
            var parts = hourToConvert.split("");
            var hour = parts[0] + parts[1];
            var minute = parts[3] + parts[4];
            var second = parts[6] + parts[7];
            if (!(hour >= 0 && hour <= 24) || !(minute >= 0 && minute <= 59) || !(second >= 0 && second <= 59)) [
                result.innerHTML = "<span style='color:red'>Proszę podać istniejącą godzinę!</span>"
                
            ]
            else {
                result.innerHTML = "<span style='color:green'>Poprawna godzina!</span>";
                // dkono
            }
        }
    }
}