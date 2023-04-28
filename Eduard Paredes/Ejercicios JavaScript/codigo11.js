let persona = {
    nombre: "Eduard",
    edad: 18,
    masculino: true ,
    metodo: "aqui va un metodo",
    nacionalidad: "Colombia",
    estado_civil: "Soltero"
}

let auto = {
    marca: "Ferrari",
    modelo: "Ferrari F40",
    ciudad: "Londres"
}

let llaves = Object.keys(persona) //con Object.keys(nombre del objeto) traemos todas las llaves
console.log(llaves)

let cantidad = llaves.length //el .length por el momento sirve para contar la cantidad de atributos que tiene el objeto
console.log("Cuantos atributos tiene el objrto " + cantidad)

let valores = Object.values(persona)//el Object.values(nombre del objeto) por el momento sirve para mostrar los atributis que tiene las llaves
console.log("valores que tiene el objeto " + valores)

let combinacion = Object.assign(persona , auto) // con Object.assign(nomObjeto, nomObjeto2) podemos unir 2 o mas objetos pero tambien se puede usar el operador (...) en ves de Object.assign(nomObjeto, nomObjeto2) lo podemos sustituir con la siguiente manera {...persona, ...auto} ,mucho ojo con utilizar {}
console.log(combinacion)

//Object.freeze(nomObjeto) es utilizado para que no se pueda modificar un objeto
//Object.seal(nomObjeto) es utilizado para modificar un atributo dentro del objeto EXISTENTE y si no hay un atributo exixtente de un objeto este no lo actualizara
/*
let persona = {
    nombre: "Eduard",
    edad: 18,
    masculino: true ,
    metodo: function obtDetalles(){
        console.log("hola")
    }
}

let estudiante = {
    persona: "Angel",
    curso: 10,
    grupo: 101,
    metodo: function registrar(){
        console.log("hola")
    }
}

let profesor = {
    persona: "gustavo",
    asignatura: "Informatica",
    nivel: 5,
    metodo: function asignar(){
        console.log("hola")
    }
}

console.log(persona)
console.log(estudiante)
console.log(profesor)


*/
//persona.apellido = "Paredes" //agregando atributo

/*
    RECORDAR

    Cualquier nombre de propiedad que no sea un identificador válido de JavaScript (por ejemplo, el nombre de alguna propiedad que tenga un espacio o un guión, o comience con un número) solo se puede acceder utilizando la notación de corchetes.

    Se crean y asignan cuatro variables de una sola vez,
    separadas por comas

    var myObj = new Object(),
    str = 'myString',
    rand = Math.random(),
    obj = new Object();

    myObj.type                 = 'Sintaxis de puntos';
    myObj['fecha de creación'] = 'Cadena con espacios';
    myObj[str]                 = 'Valor de cadena';
    myObj[rand]                = 'Número aleatorio';
    myObj[obj]                 = 'Object';
    myObj['']                  = 'Incluso una cadena vacía';

    console.log(myObj);

    También puedes acceder a las propiedades mediante el uso de un valor de cadena que se almacena en una variable:

    var propertyName = 'make';
    myCar[propertyName] = 'Ford';

    propertyName = 'model';
    myCar[propertyName] = 'Mustang';


    Por favor, ten en cuenta que todas las claves con notación en corchetes se convierten a cadenas a menos que estas sean símbolos, ya que los nombres de las propiedades (claves) en Javascript pueden solo pueden ser cadenas o símbolos

    Link de referencia: https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Working_with_objects
*/