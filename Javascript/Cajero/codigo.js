alert("INSERTE SU TARJETA")
let cuenta = 10000000 //digamos que tiene este valor en la cuenta
alert("Tarjeta insertada")
let contraseña = prompt("digite su contraseña (RECUERDE LA CONTRASEÑA)")
let contraseña1 = parseFloat(contraseña)
if(isNaN(contraseña1)){
    alert("Contraseña Invalida")
}
else{
    alert("Seleccione una de esta opciones")
    let opciones = prompt("1) Consultar saldo \n 2) Donar \n 3) Retirar dinero en efectivo \n 4)Cambio de contraseña")
    let opciones1 = parseFloat(opciones)
    if(opciones1 === 1){//consultar saldo
        document.write("Tu saldo es de: " + cuenta)
        console.log("Tu saldo es de: " + cuenta)
    }
    else if(opciones1 === 2){ //Donar
        let Donar = prompt("Cantidad que deseas donar:")
        let Donar1 = parseFloat(Donar)
        if(Donar1>cuenta || Donar1<=0){
            alert("No tienes la cantidad de dinero suficiente")
        }
        else{
            let resultado = cuenta - Donar1
            document.write("Donaste" + Donar1 + " \n")
            console.log("Donaste " + Donar1 )
            console.log("Tu dinero ahora es: " + resultado)
            document.write("Tu dinero ahora es: " + resultado)
        }
    }
    else if(opciones1 === 3){ //Retirar dinero en efectivo
        let retirar = prompt("Escribe la cantidad de dinero que deseas retirar")
        let retirar1 = parseFloat(retirar)
        if(retirar1>1000000){
            alert("Error: dinero maximo que se puede retirar es de: 1000000")
        }
        else if(retirar1<1000){
            alert("Error: dinero minimo que se puede retirar es de: 1000")
        }
        else if(retirar1 >= 1000 || retirar1 <= 1000000){ //retirar dinero
            console.log("Dinero retirado: " + retirar1)
            document.write("Dinero retirado: " + retirar1)
            alert("Dinero retirado")
            let newsa = cuenta - retirar1 //nuevo saldo
            document.write("Tu saldo es de: " + newsa)
            console.log("Tu saldo es de: " + newsa)
        }
        else{
            alert("Porfavor insertar numero completo")
        }

    }
    if(opciones1 === 4){ //cambio de contraseña
        alert("Estas a punto de cambiar la contraseña")
        let confirmacion = prompt("Escribe tu contraseña anterior:")
        let confirmacion1 = parseFloat(confirmacion)
        if(confirmacion1 == contraseña){
            let newco = prompt("Digite su nueva contraseña")
            let newco1 = parseFloat(newco)
            if(isNaN(newco1)){
                alert("Numero invalido para cambiar la contraseña")
            }
            else{
                document.write("Contraseña anterior: " + contraseña + "\n")
                document.write("Contraseña nueva: " + newco)
                console.log("Contraseña nueva: " + newco)
            }
            
        }else{
            alert("Clave invalida")
        }
    
    }
    else if(opciones1 != 1 && opciones1 != 2 && opciones1 != 3 && opciones1 != 4){
        alert("Numero invalido")
    }
}