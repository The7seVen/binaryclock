function table() {
    var table = document.getElementById("table"), rIndex, cIndex;
    for (var i = 1; i < table.rows.length; i++) {
        for (var j = 0; j < table.rows[i].cells.length; j++) {
            table.rows[i].cells[j].onclick = function () {
                rIndex = this.parentElement.rowIndex;
                cIndex = this.cellIndex + 1;
                console.log("Row : " + rIndex + " , Cell : " + cIndex);
            };
        }
    }
}

