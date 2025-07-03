document.getElementById("contacto").addEventListener("submit", async function(event) {
    event.preventDefault(); // Prevent the default form submission
    const payload = Object.fromEntries(new FormData(event.target);
    const response = await fetch("https://formspree.io/f/xnqzjvjq", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
    });
    if (response.ok) {
        alert("¡Mensaje enviado con éxito!");
        event.target.reset(); // Reset the form
    } else {
        alert("Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo más tarde.");
    
    }

    });

       