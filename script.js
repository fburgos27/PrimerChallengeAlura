function borrarAreaTexto() {
    document.getElementById("areaEncriptado").style.display = "none";
  }

function encriptar(mensaje) {
    let mensaje = mensaje;

    for (i=0, i < length(mensaje), i=i+1) {
        if (mensaje[i] == "e") {
            mensaje[i] == "enter";
        }
        console.log(mensaje);
    }
    
}

function desencriptar() {
    
}