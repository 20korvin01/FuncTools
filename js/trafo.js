function himmelTrafo() {
    var grad = document.getElementById("grad__in").value;

    if (isNaN(grad) === true) {
        document.getElementById("grad__out").value = 'Eingebefehler! \n Eingabe muss eine Zahl sein!'; // input should be a number
        document.getElementById("windrose").src = '../img/windrosen/windrose_raw.png'
    }
    else if (Number(grad) < 0) {
        document.getElementById("grad__out").value = 'Eingebefehler! \n Zahl muss positiv sein!'; // input should be positive
        document.getElementById("windrose").src = '../img/windrosen/windrose_raw.png'
    }
    else if (grad === "") {
        document.getElementById("grad__out").value = "";
        document.getElementById("windrose").src = '../img/windrosen/windrose_raw.png'
    }
    else {
        var wind = ['Norden', 'Nord-Nord-Osten', 'Nord-Osten', 'Ost-Nord-Osten', 'Osten', 'Ost-Süd-Osten', 'Süd-Osten', 'Süd-Süd-Osten', 'Süden', 'Süd-Süd-Westen', 'Süd-Westen', 'West-Süd-Westen', 'Westen', 'West-Nord-Westen', 'Nord-Westen', 'Nord-Nord-Westen']
        
        var grad = grad % 360   // effective number to valuate
        var anteil = 360 / 16;
        var ende = 360 / 32;
        var j = 0;
        
        while (grad > ende) {
            ende += anteil;
            j++;
        }
        if (j === 16) {
            j = 0;
        }
        document.getElementById("grad__out").value = wind[j];
        document.getElementById("windrose").src = `../img/windrosen/${wind[j].toLowerCase()}.png`
    }
}