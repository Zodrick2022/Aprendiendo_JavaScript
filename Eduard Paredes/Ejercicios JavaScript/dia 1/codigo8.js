/*
    Escribir el código de una función a la que se pasa como parámetro un número entero y devuelve como resultado una cadena de texto que indica si el número es par o impar. Mostrar por pantalla el resultado devuelto por la función.
*/
function par_impar(){
    numero = prompt("Escriba cualquier numero positivo")
    if(numero < 0){
        console.log("Numero introducido invalido ")
    }
    else{
        mostrar = numero%2 //sacamos el residuo de la division
        if(mostrar == 0){
            console.log("El numero " + numero + " es par")
        }
        else if(mostrar == 1){
            console.log("El numero " + numero + " es impar")
        }
        else{
            console.log("CARACTERES INVALIDOS")
        }
    }
}

par_impar()//llamamos a la funcion