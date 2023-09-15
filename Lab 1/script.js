function copiarCorreo() {
    const correoElement = document.getElementById("correo");
    const correoTexto = correoElement.innerText;
    const textarea = document.createElement("textarea");
    textarea.value = correoTexto;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
    alert("Correo copiado al portapapeles: " + correoTexto);
}