
let nombre, grupo, matricula;

function mostrarPreguntas() {
    nombre = prompt("Nombre del alumno:");
    grupo = prompt("Grupo:");
    matricula = prompt("Matrícula:");
}

document.addEventListener("keydown", function(event) {
    if (event.ctrlKey && event.key === "r") {
        event.preventDefault();
        mostrarPreguntas();
    }
});

document.getElementById("registrar").addEventListener("click", function(event) {
event.preventDefault()
mostrarPreguntas();
});

function mostrarRespuestas() {
    document.getElementById("nombre").textContent = "Nombre: " + nombre;
    document.getElementById("grupo").textContent = "Grupo: " + grupo;
    document.getElementById("matricula").textContent = "Matrícula: " + matricula;
}

function ocultar() {
    display.mostrarRespuestas(none)
}

document.getElementById('mostrar').addEventListener('click', function(event){
event.preventDefault()
mostrarRespuestas();
});

document.addEventListener("keydown", function(event) {
    if (event.ctrlKey && event.key === "m") {
        event.preventDefault();
        mostrarRespuestas();
    }
});

document.addEventListener("DOMContentLoaded", mostrarPreguntas);
