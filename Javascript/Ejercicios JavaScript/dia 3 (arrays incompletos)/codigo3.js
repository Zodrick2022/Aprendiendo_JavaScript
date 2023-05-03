/*
    Crea un array para albergar al menos 10 números enteros cualesquiera, luego rellena el array (o crealo ya con los valores). El ejercicio trata de crear a partir de este array otros dos uno con los números pares y otro con los impares. No debes usar bucles, usa el método del array qe creas más apropiado.


    No debes usar bucles, mira el método más apropiado para crear un array a partir de otro.
    Un número es par si al dividirlo por 2 el resto es 0 (num%2 es 0)
*/
console.log("CODIGO NUMERO 3")
let pares = [2,4,3,7,1,21,9,25,10,12]
let pares1 = pares.filter( (val) => val%2==0) //.filter sirve para crear un nuevo array devolviendo unicamente los valores que cumplan las especificaciones 
let impares = pares.filter((val) => val%2!=0)
console.log(pares)
console.log(impares)