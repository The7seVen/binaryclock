window.onload = hourNow();
var values = [8, 4, 2, 1];
function hourNow() {
    const now = new Date();
    console.log(now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds());
    //zamienić poszczególne cyfry na ich odpowiedniki w zegarze binarnym

//     var parts = now.split("");
//     var hour = parts[0] + parts[1];
//     var minute = parts[3] + parts[4];
//     var second = parts[6] + parts[7];

//     if ((hour >= 0 && hour <= 24) && (minute >= 0 && minute <= 59) && (second >= 0 && second <= 59)) {
//         for (i = 0; i < parts.length; i++) {
//             if (parts[i] != ":") {
//                 for (j = 0; j < values.length; j++) {
//                     if (parts[i] > values[j]) {
//                         parts[i] -= values[j];
//                     }
//                 }
//             }
//         }
//     }
}

// var table = document.getElementById("table"), rIndex, cIndex;
// for (var i = 1; i < table.rows.length; i++) {
//     for (var j = 0; j < table.rows[i].cells.length; j++) {
//         table.rows[i].cells[j].onclick = function () {
//             rIndex = this.parentElement.rowIndex;
//             cIndex = this.cellIndex + 1;
//             console.log("Row : " + rIndex + " , Cell : " + cIndex);
//         };
//     }
// }
const time = setInterval(function () {
    hourNow();
}, 1000);