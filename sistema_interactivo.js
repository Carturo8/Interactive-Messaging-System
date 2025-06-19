// // Inicialización del programa
// console.log("¡Bienvenido al Sistema Interactivo de Mensajes!");
//
// // Captura de datos del usuario
// let nombre = prompt("Por favor, ingresa tu nombre: ");
// let edad = prompt("Por favor, ingresa tu edad: ");
//
// // Convertir edad a número
// edad = parseInt(edad);
//
// // Código para Validación y Mensajes:
// if (isNaN(edad)) {
//     console.error("Error: Por favor, ingresa una edad válida en números.");
// } else if (edad < 18) {
//     alert(`Hola ${nombre}, eres menor de edad. ¡Sigue aprendiendo y disfrutando del código!`);
// } else {
//     alert(`Hola ${nombre}, eres mayor de edad. ¡Prepárate para grandes oportunidades en el mundo de la programación!`);
// }

const message = document.createElement("h2");
const mainElement = document.querySelector('main');
mainElement.appendChild(message);

function show_message() {
    const name = document.getElementById(`name`).value;
    let age = document.getElementById(`age`).value;
    age = parseInt(age);
    if (age < 18) {
        message.innerHTML = `Hola ${name}, eres menor de edad. ¡Sigue aprendiendo y disfrutando del código!`
    } else {
        message.innerHTML = `Hola ${name}, eres mayor de edad. ¡Prepárate para grandes oportunidades en el mundo de la programación!`
    }
}