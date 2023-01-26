function cambiarModo() {
    var cuerpoWeb=document.body;
    cuerpoWeb.classList.toggle("oscuro");
}


function ver(n) {
    document.getElementById("subseccion"+n).style.display="block"
    }
function ocultar(n) {
    document.getElementById("subseccion"+n).style.display="none"
    }