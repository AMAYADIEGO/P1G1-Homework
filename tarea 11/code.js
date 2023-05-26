function promedioNdeNotas_51() {
    var N = parseInt(prompt("Ingrese N: ", 10))
    var sum = 0
    var notasvalidas = 0
    var i = 1
    var nota

    while(i <= N){
         nota = parseInt(prompt("Ingrese Nota " + i + ""))
    if(nota > 51){
        sum = sum + nota
        notasvalidas = notasvalidas + 1
    }
        i = i +1
    }
    alert("El promedio de " + notasvalidas + " notas válidas es: " + sum / notasvalidas)
}