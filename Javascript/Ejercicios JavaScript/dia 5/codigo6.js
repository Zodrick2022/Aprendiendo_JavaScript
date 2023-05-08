/*
    En este sript se trata de calcular el máximo común divisor de dos números. El algorimto es simple: dividimos el primero por el segundo. si el resto es cero este segundo es el mcm. Si no se desecha el primero y se repite el proceso con el segundo y el resto. Así mientras el resto no sea 0

    Si tecleo 20 y luego 10, el mcd es 10. Si tecleo 4 y luego 20 el mcd será 4. Si tecleo 20 y 8 el resto es 4.
*/

let num1 = prompt("Escribe el primer numero")
let num2 = prompt("Escribe el segundo numero")

let resto = num1%num2
if(resto===0){
    alert(num2 + " Es el Maximo comun divisor")
    alert("El resto es: " + resto)
}
else{
    alert(num1 + " Es el Maximo comun divisor")
    alert("El resto es: " + resto)
}