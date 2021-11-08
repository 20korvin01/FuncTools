function himmelTrafo() {
    var grad = document.getElementById("grad__in").value;

    if (isNaN(grad) === true) {
        window.alert('\n\n Eingebefehler!\n -> Eingabe muss eine Zahl sein!');
    }
    else if (Number(grad) < 0 || Number(grad) > 360 ) {
        window.alert('\n\n Eingebefehler!\n -> Zahl muss zwischen 0 und 360 liegen!');
    }
    else {
        var wind = ['Norden', 'Nord-Nord-Osten', 'Nord-Osten', 'Ost-Nord-Osten', 'Osten', 'Ost-Süd-Osten', 'Süd-Osten', 'Süd-Süd-Osten', 'Süden', 'Süd-Süd-Westen', 'Süd-Westen', 'West-Süd-Westen', 'Westen', 'West-Nord-Westen', 'Nord-West', 'Nord-Nord-Westen']
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
        window.alert(wind[j]);
    }
}