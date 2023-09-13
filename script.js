function validateForm() {
    var nombre = document.getElementById("nombre").value;
    var correo = document.getElementById("correo").value;
    var mensaje = document.getElementById("mensaje").value;
    
    var correoPattern = /^[A-Za-z\s]+ @unicauca.edu.co$/;

    if (nombre === "" || mensaje === "") {
        alert("Complete todos los campos antes de continuar.");
        return false;
    }

    if (!correoPattern.test(correo)) {
        alert("El correo debe tener el formato '@unicauca.edu.co'.");
        return false;
    }

    return true;
}

function copiarCorreo() {
    const correoElement = document.getElementById("correo"); // Obtener el elemento que contiene el correo
    const correoTexto = correoElement.innerText; // Obtener el texto del correo
    const textarea = document.createElement("textarea"); // Crear un elemento textarea
    textarea.value = correoTexto; // Establecer el valor del textarea como el correo
    document.body.appendChild(textarea); // Agregar el textarea al cuerpo del documento
    textarea.select(); // Seleccionar el contenido del textarea
    document.execCommand("copy"); // Copiar el texto al portapapeles
    document.body.removeChild(textarea); // Eliminar el textarea
    alert("Correo copiado al portapapeles: " + correoTexto); // Mostrar una alerta
}