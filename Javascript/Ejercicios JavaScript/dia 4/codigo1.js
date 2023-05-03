function square(number){//creamos la funcion llamada square
    return number * number //Decimos aqui que el valor introduciodo se multiplique por si mismo
}

console.log(square(5)) //llamamos a la funcion
//------------------------------------------------------------------
function myFunc(theObject) {
    theObject.make = 'Toyota';
}
  
var mycar = { make: 'Honda', model: 'Accord', year: 1998 };//objeto


console.table(mycar)//llamamos todo el objeto y vemos que el make aun no a cambiado, dentro de una tabla


x = mycar.make; // x obtiene el valor "Honda"


myFunc(mycar)//llamamos la funcion con el objeto de mycar lo cual esto va hacer es cambiar una cosa dentro del objeto "make:'Honda'" por "make:'Toyota'"
y = mycar.make; // y aqui obtiene el valor "Toyota"
                // (la propiedad make fue cambiada por la función)

console.log(x)//mostrar en consoloa
console.log(y)
console.table(mycar)//llamamos todo el objeto y vemos que el make fue cambiado, dentro de una tabla
//------------------------------------------------------------------
//siempre utilizar parseInt cuando pida un numero en prompt ya que parseInt lo trasnforma a valor numerico
//------------------------------------------------------------------
let suerte = (Math,random() * 6)
let dado = parseInt(suerte) + 1
console.log(suerte)