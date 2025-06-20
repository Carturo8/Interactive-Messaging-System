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