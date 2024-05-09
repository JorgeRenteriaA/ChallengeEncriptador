document.addEventListener("DOMContentLoaded", function () {
    var btnEncriptar = document.getElementById("btn-encriptar");

    btnEncriptar.addEventListener("click", function () {
        var mensaje_text_area = document.getElementById("text-area").value;
        if (mensaje_text_area == "") {
            document.getElementById('lbl_text-area').style.display = 'block';
        } else {
            ocultar();
            var mensaje_encriptado = document.getElementById("mensaje");
            var encriptar = genera_encriptacion(mensaje_text_area);
            mensaje_encriptado.innerHTML = encriptar;
        }
    });
});


document.addEventListener("DOMContentLoaded", function () {
    var btnDesencriptar = document.getElementById("btn-desencriptar");

    btnDesencriptar.addEventListener("click", function () {
        var mensaje_text_area = document.getElementById("text-area").value;
        if (mensaje_text_area == "") {
            document.getElementById('lbl_text-area').style.display = 'block';
        } else {
            ocultar();
            var mensaje_encriptado = document.getElementById("mensaje");
            var encriptar = genera_desencriptacion(mensaje_text_area);
            mensaje_encriptado.innerHTML = encriptar;
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    var btnCopiar = document.getElementById("btn-copiar");

    btnCopiar.addEventListener("click", function () {
        var mensaje_encriptado = document.getElementById("mensaje").value;
        if (mensaje_encriptado == "") {
            document.getElementById('lbl_text_copy').style.display = 'block';
        } else {
            ocultar();
            var textarea = document.getElementById("mensaje");
            var texto = textarea.value;
            copiarAlPortapapeles(texto);
        }
    });
});

function convertirAMinusculas(idInput) {
    var input = document.getElementById(idInput);
    input.value = input.value.toLowerCase();
}

function validarTexto(inputValue) {
    var input = document.getElementById(inputValue).value;
    var contieneAcento = /[áéíóúÁÉÍÓÚ]/.test(input); 
    if (contieneAcento) {
        document.getElementById('lbl_text-acento').style.display = 'block';
    }else{
        document.getElementById('lbl_text-acento').style.display = 'none';
    }
}

function eliminarAcentos(idInput) {
    var input = document.getElementById(idInput);
    var texto = input.value;
    texto = texto.replace(/[áÁéÉíÍóÓúÚ]/g, function(match) {
        switch(match) {
            case 'á': return 'a';
            case 'Á': return 'A';
            case 'é': return 'e';
            case 'É': return 'E';
            case 'í': return 'i';
            case 'Í': return 'I';
            case 'ó': return 'o';
            case 'Ó': return 'O';
            case 'ú': return 'u';
            case 'Ú': return 'U';
        }
    });
    input.value = texto;
}


function ocultar() {
    var elementosOcultos = document.querySelectorAll(".ocultar");
    var mensaje = document.getElementById("mensaje");
    elementosOcultos.forEach(function (elemento) {
        elemento.style.display = "none"; 
    });
    mensaje.style.display = "block";
    document.getElementById('lbl_text-area').style.display = 'none';
    document.getElementById('lbl_text_copy').style.display = 'none';
}


function genera_encriptacion(palabra) {
    var resultado = "";
    for (var i = 0; i < palabra.length; i++) {
        var letra = palabra[i];
        switch (letra) {
            case "e":
                resultado += "enter";
                break;
            case "i":
                resultado += "imes";
                break;
            case "a":
                resultado += "ai";
                break;
            case "o":
                resultado += "ober";
                break;
            case "u":
                resultado += "ufat";
                break;
            default:
                resultado += letra;
        }
    }
    return resultado;
}

function genera_desencriptacion(palabraEncriptada) {
    var resultado = "";
    var i = 0;
    while (i < palabraEncriptada.length) {
        var letra = palabraEncriptada[i];
        switch (letra) {
            case "e":
                if (palabraEncriptada.substring(i, i + 5) === "enter") {
                    resultado += "e";
                    i += 5;
                } else {
                    resultado += letra;
                    i++;
                }
                break;
            case "i":
                if (palabraEncriptada.substring(i, i + 4) === "imes") {
                    resultado += "i";
                    i += 4;
                } else {
                    resultado += letra;
                    i++;
                }
                break;
            case "a":
                if (palabraEncriptada.substring(i, i + 2) === "ai") {
                    resultado += "a";
                    i += 2;
                } else {
                    resultado += letra;
                    i++;
                }
                break;
            case "o":
                if (palabraEncriptada.substring(i, i + 4) === "ober") {
                    resultado += "o";
                    i += 4;
                } else {
                    resultado += letra;
                    i++;
                }
                break;
            case "u":
                if (palabraEncriptada.substring(i, i + 4) === "ufat") {
                    resultado += "u";
                    i += 4;
                } else {
                    resultado += letra;
                    i++;
                }
                break;
            default:
                resultado += letra;
                i++;
        }
    }
    return resultado;
}


function copiarAlPortapapeles(texto) {
    var elementoTemporal = document.createElement("textarea");
    elementoTemporal.value = texto;
    document.body.appendChild(elementoTemporal);
    elementoTemporal.select();
    document.execCommand("copy");
    document.body.removeChild(elementoTemporal);
}