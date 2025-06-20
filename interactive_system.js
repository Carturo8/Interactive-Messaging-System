const message = document.createElement("h2");
const mainElement = document.querySelector('main');
mainElement.appendChild(message);

function show_message() {
    const name = document.getElementById(`name`).value;
    let age = document.getElementById(`age`).value;
    age = parseInt(age);

    const gifIds = ["kakashi-gif", "guy-gif"]; // Agrega aquí todos los IDs
    gifIds.forEach((id) => {
        const existingGif = document.getElementById(id);
        if (existingGif) {
            existingGif.remove();
        }
    });

    if (age < 18) {
        message.innerHTML = `Hi ${name}, you're underage. What a great time to start mastering 
        the world of programming!`

        const gif = document.createElement("img");
        gif.src = "./img/guy.gif";
        gif.alt = "Guy dancing";
        gif.id = "guy-gif";

        mainElement.appendChild(gif);
    } else {
        message.innerHTML = `Hi ${name}, you're now an adult. Great challenges and opportunities 
        await you in the world of technology!`

        const gif = document.createElement("img");
        gif.src = "./img/kakashi.gif";
        gif.alt = "Kakashi dancing";
        gif.id = "kakashi-gif";

        mainElement.appendChild(gif);
    }
}