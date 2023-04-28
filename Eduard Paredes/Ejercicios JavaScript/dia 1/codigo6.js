let letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
let dni = prompt("Introduce tu DNI: ")//utilizamos prompt para poder ingresar un valor
let dnil = prompt("Introduce tu letra del DNI: ").toUpperCase()//utilizamos la palabra ".toUpperCase" para que el usuario cuando digite una letra en minuscula esta palabra la convierta en mayusculas
if(dni < 0 || dni >99999999999){
    console.log("el número proporcionado no es válido")
}
else{
    let operacion = dni%23//utilizamos la expresion "%" la cual nos hace obtener el resto de una division
    let sustitucion = (letras[operacion])//ponemos parentesis para remplazar el numero por una letra en nuesta arrayd
    if(dnil == sustitucion){
        console.log("El numero y la letra del DNI son Correctas")
        console.log("Tu DNI: " + dni)
        console.log("Tu Letra del DNI: " + sustitucion)   
    } 
    else{
        console.log("la letra que ha indicado no es correcta.")
    }
}
