/*
    En este script se le pide al usuario que teclee dos números, el script mostrará la suma y pedirá al usuario si queire repetir. Si teclea S repite y si teclea N el programa sale. No acepta otras teclas
*/
let letrag //si una variable se define antes del bucle nunca se deve definir otra vez
do {
    let num1 = parseFloat(prompt("Teclea un numero")) 
    let num2 = parseFloat(prompt("Teclea un segundo numero")) 

    let result = num1 + num2
    alert("La suma es: " + result)

    let opcion = prompt("Quieres repetir, ¿S o N?")
    letrag = opcion.toUpperCase()//siempre poner los "()" alfinal de toUpperCase o toLowerCase y aqui no la estamos definiendo otra vez
    if(letrag === 'S' || letrag === 'N'){
        alert("opcion escogida: " + letrag)
    }
    else{
        alert("Letra equivocada: " + letrag)
    }
} while (letrag !== 'N');
alert("Saliste del bucle")