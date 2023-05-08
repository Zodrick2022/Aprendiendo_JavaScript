do {
    numero = prompt("Escribe un numero entre 0 a 100")
} while (numero <= 0 || numero >= 100);
let resultado = numero%2
if(resultado==0){
    alert(numero + " Es numero Par!!!!")
}
else if(resultado==1){
    alert(numero + " Es numero Impar!!!!")
}