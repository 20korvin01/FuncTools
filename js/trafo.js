function himmelTrafo() {
    var x = document.getElementById("grad__in").value;

    if (isNaN(x) === true) {
        window.alert('\n\n Eingebefehler!\n -> Eingabe muss eine Zahl sein!')
    }
    else if (Number(x) < 0 || Number(x) > 360 ) {
        window.alert('\n\n Eingebefehler!\n -> Zahl muss zwischen 0 und 360 liegen!')
    }
    else {
        var anteil = 360 / 16
        var ende = 360 / 32
        
        var j = 0
        
        while (grad > ende) {
            ende = ende + anteil
            j += 1
        }
            
        if (j === 16) {
            j = 0
        }
        window.alert(j)
    }
}