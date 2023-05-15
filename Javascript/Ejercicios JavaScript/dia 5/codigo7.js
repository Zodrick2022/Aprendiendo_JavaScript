/*
    Este ejemplo debe pedir al usuario un  número entero y, mediante sucesivas divisiones por 10 debe escribir los digitos que lo forman de menor a mayor orden (de unidades hacia arriba) en una cadena separados por un espacio
*/

var numero, salida='', digito;//tambien se puede colocar varias variables en una sola linea
numero = parseInt(prompt("teclear un número"));//pedir al usuario un  número entero
do{
   digito =  numero%10;// resto de divisiones por 10 
   numero = parseInt(numero/10);//divisiones por 10 debe y parseInt lo convierte en un numero entero
   salida += digito+'  '; //se encarga de concatenar cada dígito con un espacio en blanco, y luego asignar el resultado nuevamente a la variable salida, tembien se puede escribir de la siguiente manera salida = salida + digito + '  ';
}while (numero >0)
alert("Dígitos del número "+salida);