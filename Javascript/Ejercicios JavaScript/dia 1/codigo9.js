/*
    Definir una función que muestre información sobre una cadena de texto que se le pasa como argumento. A partir de la cadena que se le pasa, la función determina si esa cadena está formada sólo por mayúsculas, sólo por minúsculas o por una mezcla de ambas.
*/
function caracteres(){
    let texto = prompt("Digite una palabra compuesta por mayusculas, minusculas o intercalado")
    if(texto == texto.toUpperCase()){//utilizamos la palabra ".toUpperCase" para indicar si el texto esta igual escrito en mayusculas
        console.log("El texto descrito esta compuesto por mayusculas")
    }
    else if(texto == texto.toLowerCase()){//utilizamos la palabra ".toLowerCase" para indicar si el texto esta igual escrito en minusculas
        console.log("El texto esta compueto por minusculas")
    }
    else{
        console.log("El texto esta compuestos por minusculas y por mayusculas")
    }
}

caracteres()// llamamos la funcion