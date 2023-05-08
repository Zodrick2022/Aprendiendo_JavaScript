/*
    crear una cadena que contenga letras repetidas. Las letras se entran por teclado y solo podrá ser la X despues de elegir la letra se le ingresa el número de repeticiones
*/

let letras =''
do {
    letras = prompt("Solo escribe la letra X")
    if(letras === "X"){
        console.log(letras)

        let numero = parseInt(prompt("Ingresa un número:"));//convertir en numero a entero, ejemplo: 2.3 -> 2
        let letra = letras;
        let resultado = "";

        if (!isNaN(numero)) { // Verifica que el usuario haya ingresado un número
            resultado = letra.repeat(numero);//repeat() es repetir una cadena, en este caso estamos repitiendo la letra x segun el numero que el usuario ingreso
        } else {
            resultado = "No has ingresado un número válido";
        }
        alert(resultado)
    }
    else{
        alert("Debe ser en mayusculas y/o coloca la letra indicada")
    }

} while (letras != "X");












































/*
let numero = parseInt(prompt("Ingresa un número:"));//convertir en numero a entero, ejemplo: 2.3 -> 2
let letra = "x";
let resultado = "";

if (!isNaN(numero)) { // Verifica que el usuario haya ingresado un número
  resultado = letra.repeat(numero);//repeat() es repetir una cadena, en este caso estamos repitiendo la letra x segun el numero que el usuario ingreso
} else {
  resultado = "No has ingresado un número válido";
}

alert(resultado);
*/