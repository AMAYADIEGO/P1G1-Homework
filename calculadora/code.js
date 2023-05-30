///////// variabes
var A = 0
var operaciones = ""






/*seccion calculadora*/

// dar un nuevo valor al imput "resultado" en la pag html//
function darValor(valor){
    document.getElementById("resultado").value = valor
}

//obtener el valor actual del input en la pagina html
function obtenerValor(){
    var nro = document.getElementById("resultado").value
    return nro
    //alert(nro)
}

//adjuntar un nuevo valor a la derecha 
// del input "resultado" en la pag html
function adjuntarValor(numero){
    var actualNumero = obtenerValor()
    var juntarNumeros = actualNumero + "" + numero
    darValor(juntarNumeros)
}
function factorial(){
    var N = obtenerValor()
    var resultadoFact = calcularfactorial(N)
    darValor(resultadoFact)
    //alert("soy factorial")
}
function potencia(){
    A = obtenerValor()
    darValor("")
    operaciones = "potencia"
    //alert("soy potencia")
}
function borrar(){
    var vacio = ""
    darValor(vacio)
    //alert("soy borrar")
}
function dividir(){
    A = obtenerValor()
    darValor("")
    operaciones = "dividir"
    //alert("soy dividir")
}
function numero(dig){
    adjuntarValor(dig)
    //alert("soy numero " + dig)
}
function multiplicar(){
    A = obtenerValor()
    darValor("")
    operaciones = "multiplicar"
    //alert("soy multiplicar")
}
function menos(){
    A = obtenerValor()
    darValor("")
    operaciones = "menos"
    //alert("soy restar")
}
function mas(){
    A = obtenerValor()
    darValor("")
    operaciones = "mas"
    //alert("soy sumar")
}
function masMenos(){
    var valorResultado = obtenerValor()
    if(valorResultado == 0){
        //nada
    }else{
        if(valorResultado > 0){
            //positivo
            valorResultado = valorResultado * -1
        }else{
            //negativo
            valorResultado = valorResultado * -1
        }
    }
    darValor(valorResultado)
    //alert("soy mas menos: " + valorResultado)
}

function MOD(){
    A = obtenerValor()
    darValor("")
    operaciones = "MOD"
    //alert("soy MOD")
}
function igual(){
    var B = obtenerValor()
    if(operaciones == "potencia"){
        var res = NpotenciaP_conParametros(A , B)
        darValor(res)
    }
    if(operaciones == "MOD"){
        var res = A % B
        darValor(res)
    }
    if(operaciones == "multiplicar"){
        var res = A * B
        darValor(res)
    }
    if(operaciones == "mas"){
        var res = parseInt(A) + parseInt(B)
        darValor(res)
    }
    if(operaciones == "menos"){
        var res = A - B
        darValor(res)
    }
    if(operaciones == "dividir"){
        var res = A / B
        darValor(res)
    }
    //alert("soy igual")
}

function NpotenciaP(){
    var N = parseInt(prompt("ingrese n " ,4))
    var P = parseInt(prompt("ingrese n " ,7))
    var i = 1 , res =1
    while(i <= P){
        res = res * N
        i++
    }
    alert(res)
}

function NpotenciaP_conParametros(N , P){
    var i = 1 , res =1
    while(i <= P){
        res = res * N
        i++
    }
    return(res)
    //alert(res)
}
