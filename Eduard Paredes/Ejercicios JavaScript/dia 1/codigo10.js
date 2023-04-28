function palindromo(str) {
    const strReversed = str.split("").reverse().join("");//El .split sirve para la división de cadenas de textos (string) empleando un separador que puede ser solo un carácter, otra cadena o una expresión regular.
    //El método reverse() invierte el orden de los elementos de un array in place. El primer elemento pasa a ser el último y el último pasa a ser el primero.
    //join() El método join() une todos los elementos de una matriz (o un objeto similar a una matriz) en una cadena y devuelve esta cadena.
    //se utiliza para representar datos textuales
    return strReversed === str ? "es palindromo" : "no es palindromo"; //Utilizamos (===) para comparar la igualdad de dos objetos sin forzar la conversión automática de tipos. Es decir, que para que devuelve true los dos objetos además de representar el mismo valor deberán ser exactamente del mismo tipo subyacente.
    // la expresion de "?" y ":" son los "if" y "else"
  }
  console.log(palindromo(prompt("Escribe una palabra")));
