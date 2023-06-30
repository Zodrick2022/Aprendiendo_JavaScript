function mostrar(){
    let $contrasenia = document.getElementById("contraseña")
    let $p = document.getElementById("p")
    let $hr1 = document.getElementById("1")
    let $hr2 = document.getElementById("2")
    let $hr3 = document.getElementById("3")


    let probar = $contrasenia.value
    //cambando estilos
    if(probar.length<=4){
        $p.textContent = "Contraseña pequeña"
        $p.style.color="#FF5733"
        $p.style.fontFamily="Arial"
        $p.style.fontSize="22px"
        $contrasenia.style.borderColor="#FF5733"
        $hr1.style.setProperty("color","#FF5733")
    }
    else if(probar.length>4 && probar.length <=8){
        $p.textContent = "Contraseña mediana"
        $p.style.color="#F7D547"
        $p.style.fontFamily="Arial"
        $p.style.fontSize="22px"
        $contrasenia.style.borderColor="#F7D547"
        $hr1.style.setProperty("color","#F7D547")
        $hr2.style.setProperty("color","#F7D547")
    }
    else if(probar.length>12){
        $p.textContent = "Contraseña grande"
        $p.style.color="#12C100"
        $p.style.fontFamily="Arial"
        $p.style.fontSize="22px"
        $contrasenia.style.borderColor="#12C100"
        $hr1.style.setProperty("color","#12C100")
        $hr2.style.setProperty("color","#12C100")
        $hr3.style.setProperty("color","#12C100")
    }
    //---------restaurar color "original"
    if(probar.length<=0){
        $hr1.style.setProperty("color","black")
        $hr2.style.setProperty("color","black")
        $hr3.style.setProperty("color","black")
        $contrasenia.style.borderColor="black"
        $p.textContent = ""
    }
    else if(probar.length<=4){
        $hr1.style.setProperty("color","#FF5733")
        $hr2.style.setProperty("color","black")
        $hr3.style.setProperty("color","black")
    }
    else if(probar.length<12){
        $hr1.style.setProperty("color","#F7D547")
        $hr2.style.setProperty("color","#F7D547")
        $hr3.style.setProperty("color","black")
        $p.textContent = "Contraseña mediana"
        $p.style.color="#F7D547"
        $contrasenia.style.borderColor="#F7D547"  
    }
    //$p.textContent = $contrasenia.value
}