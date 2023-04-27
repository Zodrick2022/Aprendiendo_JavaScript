var numero1 = 5;
var numero2 = 8;

if(numero1 < numero2) {
  console.log("El primer numero no es mayor que el segundo numero ");
}
if(numero2 > -0) {
  console.log("El segundo numero es positivo");
}
if(numero1 < 0 || numero1 != 0) { //utilizamos los simbolos "||" que es igual a o, es decir, este o este
  console.log("El numero 1 es negativo o distinto de cero");
}
if(numero1++ >= numero2) { //sumamos una unidad con los simbolos "++" a la variable numero1
  console.log("Incrementar en 1 unidad el valor de numero1 no lo hace mayor o igual que numero2");
}
else{
    console.log("El primer numero se aumenta 1 valor pero no lo hacer mayor o igual que al segundo numero")
}