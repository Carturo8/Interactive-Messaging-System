// Create the message element and append it to the main section
const message = document.createElement("h2");
const mainElement = document.querySelector('main');
mainElement.appendChild(message);

function show_message() {
    // Get input values
    const name = document.getElementById(`name`).value;
    let age = document.getElementById(`age`).value;
    age = parseInt(age);

    // Remove any previously inserted GIFs
    const gifIds = ["kakashi-gif", "guy-gif"];
    gifIds.forEach((id) => {
        const existingGif = document.getElementById(id);
        if (existingGif) {
            existingGif.remove();
        }
    });

    // Validate age input and show a warning alert if invalid
    if (isNaN(age) || age < 1 || age > 100) {
        Swal.fire({
            icon: 'warning',
            title: 'Invalid age',
            text: 'Please enter a valid age between 1 and 100.',
            confirmButtonColor: '#3085d6'
        });
        return;
    }

    // Show a message and GIF if the user is underage
    else if (age < 18) {
        message.innerHTML = `Hi ${name}, you're underage. What a great time to start mastering 
        the world of programming!`

        const gif = document.createElement("img");
        gif.src = "./img/guy.gif";
        gif.alt = "Guy dancing";
        gif.id = "guy-gif";

        mainElement.appendChild(gif);
    }

    // Show a message and GIF if the user is an adult
    else {
        message.innerHTML = `Hi ${name}, you're now an adult. Great challenges and opportunities 
        await you in the world of technology!`

        const gif = document.createElement("img");
        gif.src = "./img/kakashi.gif";
        gif.alt = "Kakashi dancing";
        gif.id = "kakashi-gif";

        mainElement.appendChild(gif);
    }
}