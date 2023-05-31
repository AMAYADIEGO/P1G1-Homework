function invertirPalabra() {
    var cadena = prompt("Ingrese una cadena", "Hola Mundo");
    var longCad = cadena.length;
    var i = 0;
    var invertido = "";

    while (i < longCad) {
        var caracter = cadena[i];
        invertido = caracter + invertido;
        i++;
    }

    alert(invertido);
}

function elimPrimerUltimoChar() {
    var cadena = prompt("Ingrese una cadena", "Hola Mundo");
    var longCad = cadena.length;
    var i = 1;
    var cadenaSinChars = "";

    while (i < (longCad - 1)) {
        var caracter = cadena[i];
        cadenaSinChars += caracter;
        i++;
    }

    alert(cadenaSinChars);
}   