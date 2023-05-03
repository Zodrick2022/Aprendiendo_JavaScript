let valores = [true, 5, false, "hola", "adios", 2];
let text1 = valores[3].length //Aqui estamos accediendo a un elemento dentro de nuestro array
let text2 = valores[4].length //.length cuenta el numero de caracteres que tiene el texto
console.log("-----------------------------------------------------------")
console.log("Utilizando las cadenas de texto de nuestro array")
console.log( "Numeros de caracteres de "+ "\"" +valores[3] +"\"" + " es " + text1)
console.log( "Numeros de caracteres de "+ "\"" + valores[4] + "\"" + " es " + text2)

if(text1 < text2){
    console.log(valores[3] + " tiene menor caracteres que " + valores[4])
    console.log()
}
else{
    console.log("Imposible")
}
console.log("-----------------------------------------------------------")
console.log("Utilizando los booleanos de nuestro array")
console.log("¿El numero " + valores[1] + " es mayor que " + valores[5] + "?")
let bool1 = valores[0]
let bool2 = valores[2]
//preguntamos si el 5 es mayor que 2 y lo muestra por consola "true"
if(5 > 2){
    console.log(bool1)
}
else{
    console.log(bool2)
}
console.log("¿El numero " + valores[5] + " es mayor que " + valores[1] + "?")
//preguntamos si el 2 es mayor que 5 y lo mestra por consola "false"
if(2 > 5){
    console.log(bool1)
}
else{
    console.log(bool2)
}
console.log("-----------------------------------------------------------")
console.log("Utilizando los numeros de nuestro array")
let num1 = valores[1]
let num2 = valores[5]
console.log("El primer numero es: " + num1)
console.log("El segundo numero es: " + num2)
let suma = num1 + num2
console.log("Suma de los 2 valores de nuestro array: " + suma)
let resta = num1 - num2
console.log("Resta de los 2 valores de nuestro array: " + resta)
let multiplicacion = num1 * num2
console.log("Multiplicacion de los 2 valores de nuestro array: " + multiplicacion)
let division = num1 / num2
console.log("Division de los 2 valores de nuestro array: " + division)