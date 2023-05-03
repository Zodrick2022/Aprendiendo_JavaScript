/* 
    Crea un objeto Array con los días laborables de la semana (Lunes a Viernes) y utiliza un método del objeto para recorrer el array y convertir cada elemento de ese array a mayúsculas. sa console.table para ver el resultado.



    No se trata de usar un bucle, debes usar un método del objeto Array.

    No debes copiar el array en otro nuevo.

    Los objetos string tienen el método toUpperCase para cambiar a mayúsculas


*/
console.log("CODIGO NUMERO 2")
let diasLaborales = ["lunes","martes","miercoles","jueves","viernes"]

diasLaborales.forEach(Element => console.table(Element.toUpperCase()))//.forEach(element => console.log(element)) sive para recorrer un array sin utilizar bucles y si le queremos poner en mayusculas se coloca toUpperCase dentro de consolo y despues del elemento que queremos que la letra sea mayusculas
