


function init () {
    var datos_contacto = document.getElementById("datos_contacto");
    datos_contacto.style.display = "none";
    
    var experiencias_laborales = document.getElementById("experiencias_laborales");
    experiencias_laborales.style.display = "none";
    
    }

function cambio (ref) {
    ocultar ();
    var elemento = document.getElementById(ref);
    elemento.style.display = "block";
    
}



function ocultar (){
    var datos_personales = document.getElementById("datos_personales");
    datos_personales.style.display = "none";
    
    var datos_contacto = document.getElementById("datos_contacto");
    datos_contacto.style.display = "none";
    
    var experiencias_laborales = document.getElementById("experiencias_laborales");
    experiencias_laborales.style.display = "none";
    
}
