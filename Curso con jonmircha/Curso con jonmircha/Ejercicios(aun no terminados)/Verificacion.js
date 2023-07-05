function mostrar(){
//CAMBIO DE ESTILOS
/*------------------------COMIENZO-----------------------------*/
    let $contrasenia = document.getElementById("contraseña")
    let $p = document.getElementById("p")
    let $p1 = document.getElementById("p1")
    let $hr1 = document.getElementById("1")
    let $hr2 = document.getElementById("2")
    let $hr3 = document.getElementById("3")
    let $hr4 = document.getElementById("4")

    let probar = $contrasenia.value

    $p1.textContent = $contrasenia.value//mostrar contraseña en tiempo real
    //cambiando estilos
    if(probar.length<=10){
        $p.textContent = "Contraseña pequeña"
        $p.style.color="#FF5733"
        $p.style.fontFamily="Arial"
        $p.style.fontSize="22px"
        $contrasenia.style.borderColor="#FF5733"
        $hr1.style.setProperty("color","#FF5733")
        $hr2.style.setProperty("color","black")
    }
    else if(probar.length>10 && probar.length <=13){
        $p.textContent = "Contraseña mediana"
        $p.style.color="#F7D547"
        $contrasenia.style.borderColor="#F7D547"
        $hr1.style.setProperty("color","#F7D547")
        $hr2.style.setProperty("color","#F7D547")
        $hr3.style.setProperty("color","black")
    }
    else if(probar.length>13 && probar.length<16){
        $p.textContent = "Contraseña grande"
        $p.style.color="#00C1C1"
        $contrasenia.style.borderColor="#00C1C1"
        $hr1.style.setProperty("color","#00C1C1")
        $hr2.style.setProperty("color","#00C1C1")
        $hr3.style.setProperty("color","#00C1C1")
        $hr4.style.setProperty("color","black")
    }
    else if(probar.length>=16){
        $p.textContent = "Contraseña MUY grande"
        $p.style.color="#12C100"
        $contrasenia.style.borderColor="#12C100"
        $hr1.style.setProperty("color","#12C100")
        $hr2.style.setProperty("color","#12C100")
        $hr3.style.setProperty("color","#12C100")
        $hr4.style.setProperty("color","#12C100")
    }
    //---------restaurar color "original"
    if(probar.length<=0){
        $hr1.style.setProperty("color","black")
        $hr2.style.setProperty("color","black")
        $hr3.style.setProperty("color","black")
        $hr4.style.setProperty("color","black")
        $contrasenia.style.borderColor="black"
        $p.textContent = ""
    }
    //esto sirve pero puede causar problemas de rendimiento
    // else if(probar.length<=4){
    //     $hr1.style.setProperty("color","#FF5733")
    //     $hr2.style.setProperty("color","black")
    //     $hr3.style.setProperty("color","black")
    // }
    // else if(probar.length<12){
    //     $hr1.style.setProperty("color","#F7D547")
    //     $hr2.style.setProperty("color","#F7D547")
    //     $hr3.style.setProperty("color","black")
    //     $p.textContent = "Contraseña mediana"
    //     $p.style.color="#F7D547"
    //     $contrasenia.style.borderColor="#F7D547"  
    // }
    //$p.textContent = $contrasenia.value
/*---------------------------FIN-------------------------------*/
//verificacion de Expresion regular que solo acepta una combinacion de minimo con letras Mayusculas, Minusculas, números y tener alguno de los siguientes símbolos $ # ¡ ! ¿ ? % = & ( ) *.
//{10 == Minimo de caracteres, 17 == Maximo de caracteres}
/*------------------------COMIENZO-----------------------------*/

let patron =/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$#¡!¿?%=&()*+-])([A-Za-z\d$#¡!¿?%=&()*+-]|[^ /º°'ªçÇ^´{}±¨Δ€ƒ…†‡ˆ‰Š‹ŒŽ‘’“”•·–—˜™š›œžŸ©«»⌐¬®¯¹²³µ¶¸.:;,`"¼½¾ÀÁÂÃÄÅÆÈÉÊËÌÍÎÏÐÑñÒÓÔÕÖØÙÚÜÛÝ×Þþßàáâαãäåæèéêëìíîïðòóôõöøùúûüýÿ÷░▒▓│┤╡╢╖╕╣║╗╝╜╛┐└┴┬├─┼╞╟╚╔╩╦╠═╬╧╨╤╥╙╘╒╓╫╪┘┌█▄▌▐▀■ΓπΣστΦΘΩδ∞φε∩≡≥≤⌠⌡≈∙√ⁿ]){10,17}$/
if(!patron.test(probar)){//esto simula al !patron.test(values.value) del trabajo
    //console.log("ERROR")
    console.log($p1.textContent = $contrasenia.value)
    $p1.textContent = "Error ❌"//aqui podriamos meter un mensaje de "Recuerda que la contraseña debe estar combinada minimo con letras Mayusculas, Minusculas, números y tener alguno de los siguientes símbolos $ # ¡ ! ¿ ? % = & ( ) *"
    if(probar.length<=0){
        $p1.textContent = ""
    }
    else if(probar.length<10){
        console.log($p1.textContent = $contrasenia.value)
        $p1.textContent = "La Cadena no puede ser menor a 10 caracteres" 
    }
}
else{
    //console.log("Aceptado")
    console.log($p1.textContent = $contrasenia.value)
    $p1.textContent = "Aceptado ✔️"
}
/*---------------------------FIN-------------------------------*/

}