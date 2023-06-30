// /*1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10. hacer pruebas de todas las entradas de posibles*/
//----------EJERCICIO 1-------------
// function con_car(saludo){
//     let caracteres_especiales = /^[a-zA-Z]+$/ //abecedario a-z abecedario A-Z
//     if(isNaN(saludo)){
//         if(caracteres_especiales.test(saludo)){//si dentro de la cadena de caracteres_especiales esta una coincidencia dentro de la cadena que guarda saludo hacer lo siguiente
//         console.log(`numeros de caracteres de \"${saludo}\" es de`)
//         console.log(saludo.length)
//     }
//     else{
//         console.error("El valor ingresado contiene caracteres especiales o no es válido.");
//     }
//     }
//     else if(saludo === null){
//        console.error(`${saludo} es un caracter especial`)
//     }
//     else{
//         console.error(`${saludo} es un numero`)
//     }
// }
// let saludo = prompt("Escribe una cadena de texto")
// con_car(saludo)
// console.log("---------------------------------")

/*2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola". utilizar mdn web docs(esto significa que no me quede con toda la informacion de los videos si no que busquemos mas informacion)*/
//----------EJERCICIO 2-------------
// function mostrar(texto, num){
//     console.log(`texto: \"${texto}\" numero de caracteres a mostrar \"${num}\" da como resultado: \"${texto.substring(0, num)}\"`)//con el metodo substring le decimos que empieza desde el 0 y empieza a traer los caracteres hasta llegar al numero especificado num
// }

// let texto = prompt("texto")
// let num = parseFloat(prompt("numero"))
// mostrar(texto, num)
//parametros a recibir ("texto","numero") nada de listas, booleanos y objetos

/*3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal']. */
//----------EJERCICIO 3-------------
// function array(){
//     console.log(`texto \"${text}\" convertido a array(arreglo): `)
//     console.log(text.split(" "))
// }
// let text = prompt("Escribe un texto")
// array(text)

/*4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.*/
//----------EJERCICIO 4-------------
// function rep(rep_text,num_rep){
//     /*ciclo for*/ 
//     let espacio = ""//creamos una cadena de texto para almacenar las variables
//     for (let i = 0; i < num_rep; i++) {
//         espacio += rep_text + ", "//decimos que dentro de la variable espacio almacene rep_text con una coma
//     }
//     console.log(espacio)
// }
// let rep_text = prompt("coloca un texto")
// let caracteres_especiales = /^[a-zA-Z\s]+$/ //abecedario a-z abecedario A-Z y omitir los espacios en blanco

// if(isNaN(rep_text)){
//     if(caracteres_especiales.test(rep_text)){//si dentro de la cadena de caracteres_especiales esta una coincidencia dentro de la cadena que guarda saludo hacer lo siguiente
//         let num_rep = parseFloat(prompt("coloca el numero"))
//         if(!isNaN(num_rep)){
//             rep(rep_text,num_rep)
//         }
//         else{
//             console.error(num_rep + " no es un numero")//simpre va a salir NaN ya que donde estamos definiendo num_rep lo estamos convirtiendo a numero, por lo tanto si no es un numero, la salida siempre va hacer NaN
//         }    
//     }
//     else{
//         console.error("El valor ingresado contiene caracteres especiales o no es válido");
//     }
// }else{
//     console.error(`${rep_text} es un numero`)
// }

//parametros a recibir ("texto","numero")nada de listas, booleanos y objetos

//MIS REPUESTAS NO SON VERDADES ABSOLUTAS