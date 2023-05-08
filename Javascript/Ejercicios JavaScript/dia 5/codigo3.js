/* 
    En este script vas a crear un menu con tres opciones: escribir, leer, ssalir. El usuario elegirá una opción y en un alert se le indicará la opción elegida. El programa vuelve a mostrar el menu y se repite el proceso. El script acabará cuando se pulse la opción de salir.
*/
do{
    opcion = prompt("1.- Escribir\n 2.- Leer\n 3.- Salir\n Escoge una opción:");       
    switch(opcion){ //swich son las opciones a elegir
    case '1':
        alert("Eliges Escribir")
        break; //siempre terminar un case con brack
    case '2':
        alert("Eliges Leer")
        break; 
    case '3':
    alert("fin del programa");
        break;
    default:
        alert("debes elegir una de las opciones")
    }
} while(opcion != '3');