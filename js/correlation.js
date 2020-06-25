//I sposób

/*
function correlation(n) {
    var values = [1, 2, 4, 8];
    if (n >= 0) {
        switch (n) {
            case 0:
                return 0;
                break;
            case 1:
                return values[0];
                break;
            case 2:
                return values[1];
                break;
            case 3:
                return values[0], values[1];
                break;
            case 4:
                return values[2];
                break;
            case 5:
                return values[2], values[0];
                break;
            case 6:
                return values[2], values[1];
                break;
            case 7:
                return { values[2], values[1], values[0]};
                break;
            case 8:
                return { values[3]};
                break;
            case 9:
                return { values[3], values[0]};
                break;
            default:
                return "Nie udało się zwrócić wyniku funkcji dla takiego wyniku";
        }
    }
}
*/

// II sposób

/*
function correlation(n) {
    var values = [1, 2, 4, 8];
    if (n >= 0 && !isNaN(n)) {
        values2 = values.reverse();
        for (i = 5; i > 0; i--) {
            for (j = 0; j < 4; j++) {
                if (i > 0 && i > values2[j]) {
                    i -= values2[j];
                }
                else {
                    return values2[j];
                }
                document.write(i + " ")
            }
        }
        console.log('Długość tablicy values2: ' + values2.length);
    }
}
*/