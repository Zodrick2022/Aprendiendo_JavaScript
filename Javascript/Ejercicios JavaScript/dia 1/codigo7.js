//en javascript el factorial (n!) no existe asi que toca crear un bucle para crear o asimilar un factorial
let num1 = prompt("Escribe un numero para convertirlo en factorial: ")
let entero = parseInt(num1)//tranformamos el numero a entero
if(entero < 0){
    console-log("El numero debe ser mayor o igual a cero")
}
else{
    let factorial = 1;
    //  creamos una variable, despues decimos que si la variable es menor a esta variable quiero que se repita y cada vez que se repita le va sumando un 1
    for(let i=2; i<=entero; i++){
        factorial*=i
    }
   console.log('El factorial de '+ entero + " es " + factorial)
}