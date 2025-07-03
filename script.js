
let nombre = document.getElementById('name');
nombre.addEventListener('input', function() {
    let nombreValue = nombre.value;
    if (nombreValue.length < 3) {
        nombre.setCustomValidity('El nombre debe tener al menos 3 caracteres');
    } else {
        nombre.setCustomValidity('');
    }
    nombre.reportValidity();
}
);

let email = document.getElementById('email');
email.addEventListener('input', function() {
    let emailValue = email.value;
    if (!emailValue.includes('@')) {
        email.setCustomValidity('El correo electrónico debe contener un "@"');
    } else {
        email.setCustomValidity('');
    }
    email.reportValidity();
}
);

document.getElementById('Test').addEventListener('submit', e => {
    e.preventDefault();
    const data = new FormData(e.target);
    let score = 0;
    for (const val of data.values()) score += +val;

    const message = score >= 8 ? "¡Estas al maximo! Aprovecha tu impulso"
        : score >= 4 ? "¡Vas bien! Un respiro y continua"
        : "Tomate un momento para cuidarte y retomar fuerzas";

    document.getElementById('resultado').innerText = message;
});

