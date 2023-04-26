//PARA PROBAR SI ESTA CORRECTAMENTE CONECTADO CON EL HTML SE USA UN console.log("conectado"); y ya
const operador1= document.getElementById("ope1") //aqui estamos accediendo al html vinculado y que guarde el id en esta variable
const ope2 = document.getElementById("operacion")
const operador3 = document.getElementById("ope2")
const boton = document.getElementById("boton")
const parrafo = document.getElementById("parrafo")

boton.addEventListener('click', calcular)//aqui conectamos el boton con la funcion calcular 

function calcular(){
    //console.log("Presionaste el boton")cuando presiones el boton, en la consola aparecera el mensaje "Presionaste el boton"
    //console.log(ope2.value) aqui estamos indicando que muestre en consola lo que se a digitado
    const operacion = ope2.value //aqui estamos guardando el valor que se intriduce en el campo de "operacion"
    const ope1 = parseFloat(operador1.value) //campo del operador 1 (parsefloat es para que se pueda calcular con decimales)
    const ope3 = parseFloat(operador3.value) //campo del operador 2
    if((operacion == "+" || operacion == "-" || operacion == "*" || operacion == "/") && !isNaN(ope1) && !isNaN(ope3)){ //aqui estamos indicando el valor de que queremos que se digite en el campo de operacion, !isNaN()se refiere a que si no es un numero automaticamente pasa a la parte de else
        //calcular
        let resultado
        switch(operacion){ //el switch es como un if else
            case "+": //INICIO
                resultado = ope1 + ope3
            break;//FIN
            case "-": //INICIO
                resultado = ope1 - ope3
            break;//FIN
            case "/": //INICIO
                resultado = ope1 / ope3
            break;//FIN
            case "*": //INICIO
                resultado = ope1 * ope3
            break;//FIN
        }
        parrafo.innerText = "El resultado es: " + resultado //el innerText es mostrar en pantalla, estamos indicando al parrafo con innerText que muestre el resultado en pantalla
        parrafo.style = "color: black" //editamos el color del texto
    } 
    else{
        parrafo.style = "color: red" //editamos el color del texto y si no ponemos algunos de los dos, ejemplo, quitamos el color black y lo ejecutamos siempre queda de color red
        parrafo.innerText = "Imposible"
    } 
}