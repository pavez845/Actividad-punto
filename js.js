function generarCarta() {
    var nombre = document.getElementById("nombre").value;
    var apellidoPaterno = document.getElementById("apellidop").value;
    var apellidoMaterno = document.getElementById("apellidom").value;
    var rut = document.getElementById("rut").value;
    var fecha = document.getElementById("fecha_nacimiento").value;
    var edad = document.getElementById("edad").value;
    var celular = document.getElementById("celular").value;
    var email = document.getElementById("email").value;
    var profesion = document.getElementById("profesion").value;
    var genero = document.getElementById("genero").value;
    var motivacion = document.getElementById("motivacion").value;

    const cartaText = "Estimad@ me presento como " + nombre + " " + apellidoPaterno + " " + apellidoMaterno +
        ", RUT " + rut + ", de " + edad + " años, soy del género " + genero +
        ", mi fecha de nacimiento es " + fecha + ", actualmente tengo la profesión de " +
        profesion + ", mi motivación para entrar aquí es " + motivacion +
        ", mi número es " + celular + ". Si desea contactarme, le dejo mi email: " + email;
        
    document.getElementById("carta").value = cartaText;
}
