//primer programa con javascript
console.log("Hola Eduard");
// el var (variable) puede ser de texto, numero y booleano(true o false)
/*
    var numero = 19;
    console.log("mi edad es de: "+numero);

    const = el valor nunca cambia, es decir, apenas creamos const es obligatorio darle un valor
    let es mejor que var(se usa mas) ahora el var se cambia a let
*/
//CONDICIONALES
/*
 if = que pasa si?
 else = que pasa si no se cumple el if
 signos de comparacion en if: <(menor), >(mayor), >=(mayor igual), <=(menor igual), ==, ===(este compara el tipo de valor, numero, texto y booleano), !=(distinto), &&(agregar otra variable), || (o, una de las preguntas se tiene que cumplir).
*/
let miNumero = 5;
if (miNumero > 10){ //verdadero
    console.log(miNumero + " es mayor que 10")
}
else if(miNumero === 5){ // si no cumple el primer if se pasa a else if(es otra pregunta)
    console.log("si, mi numero es igual a: " + miNumero)
}
else{ //falso 
    console.log(miNumero + " es menor que 10")
}

//BUCLES
//El bucle while se utiliza mientras la pregunta se cumpla, cuando el pregunta seja de cumplirse automaticamente el bucle while se para.
console.log("BUCLE WHILE")
let valor = 0;
while (valor < 5){ //como tal muestra del 0 al 4, si queremos que muestre hasta el 5 simplemente le agregamos un = al simbolo de menor
    console.log("el valor es: " + valor)
    valor ++ //sumar uno(++) al valor mientras el bucle while se cumple
}
//practicamente el bucle for es como el bucle while pero mas simplificado
console.log("BUCLE FOR")
for(let valor1 = 0; valor1 < 5; valor1++){
    console.log("el valor es: " + valor1)
}
//FUNCIONES
//es como una variable pero en function guarda mas cosas, es reutilizable
console.log("FUNCIONES")
function saludar(nombre, edad){ //dentro de las variable saludar se puede poner los argumentos que quieras guardar como por ejemplo el nombre y la edad pero tienes que llamar la funcion con los parametros, sin esto la funcion no se llama
    console.log("HOLA " + nombre)
    console.log("Tu edad es: " + edad) 
}

saludar("Eduard", 18);//llamamos a la funcion
//Funcion retornable es como lo mismo pero se utliza la palabra clave return y se llama diferente
function multiplicar(num1, num2){
    console.log("FUNCION RETORNABLE")
    let resultado = num1 * num2
    return resultado; //aqui se guarda la logica de la variable resultado "let resultado = num1 * num2", encadenar funciones
}

let recibidor = multiplicar(2,5); // llamamos la funcion retornable
console.log(recibidor)//mostrar por consola PEROOOO para no escribir estas 2 lineas de codigo hacemos los siguiente console.log(multiplicar(2, 5)); asi ahorramos codigo

//ARREGLOS O ARRAYS 
//se lee primero desde 0
let miArreglo = ["David","Nicolas","Mariana","Natalia"]//este es mi arreglo o arrays, recomendable es tener todo del mismo valor, texto, numeros, booleanos
for(let contador = 0; contador < 4;/*aqui escribimos la cantidad de caracteres que tiene nuestro arreglo*/contador++){ //generalmente se utiliza bucles para mostrar los "arreglos" por que son mas ORDENADOS y se puede colocar cuaquier cosa
    console.log("Accediendo al caracteres: " + contador)
    let mostrar = miArreglo[contador];//aqui estamos entrando a nuestro arreglo
    console.log(mostrar);
}
//OBJETOS
console.log("OBJETOS")
let persona = {
    nombre: "Mclovin",
    edad: 26,
    masculino: true
};

console.log(persona);
persona.comidaFavorita = "pizza";//aqui agregamos un nuevo campo llamado "comidaFavorita" con valor "pizza"
console.log("Nombre del objeto: " +persona.nombre);//aqui podemos "navegar" entre el objeto creado
/*para editar dentro del objeto es: persona.nombre = "Nuevo nombre";*/
