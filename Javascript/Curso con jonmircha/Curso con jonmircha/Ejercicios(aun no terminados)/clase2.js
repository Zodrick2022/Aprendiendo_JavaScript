/*
    5) Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".
    6) Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.
    7) Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.
    8) Programa una función que elimine cierto patrón de caracteres de un texto dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.
*/
//----------EJERCICIO 5-------------

// function recibir(reverse1){
//     let invertido = "";
//     for(let i = reverse1.length - 1; i >= 0; i--){
//         invertido += reverse1.charAt(i)
//     }
//     console.log(invertido)
// }

// let reverse1 = prompt("Escribe una cadena de texto")
// recibir(reverse1)
//----------EJERCICIO 6-------------
function coincidencia(text, text2){
    console.log("texto coincidencia: " + text.includes(text2))
}


let text = prompt("Escribe un texto")
let text2 = prompt("Escribe la coincidencia")
coincidencia(text,text2)