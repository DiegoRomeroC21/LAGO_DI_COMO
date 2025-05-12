window.addEventListener('scroll', function() {
    var navbar = document.querySelector('nav');
    var targetImage = document.getElementById('fondoInicio'); // O el ID/clase de la sección deseada
    var imageBottomPosition = targetImage.getBoundingClientRect().bottom;
    var imageHeight = targetImage.offsetHeight; // Obtener la altura de la sección
    var navHeight = navbar.offsetHeight;

    // Si la parte inferior de la imagen está a la mitad o menos, oculta el nav
    if (imageBottomPosition <= imageHeight / 2) {
        navbar.style.opacity = '0';
    } else {
        navbar.style.opacity = '1';
    }
});

document.querySelector('.reservation-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Evita el envío del formulario si hay errores

    // Obtener los valores de los campos
    const fullName = document.getElementById('full-name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const travelDate = document.getElementById('travel-date').value;
    const numGuests = document.getElementById('num-guests').value;
    const roomType = document.getElementById('room-type').value;

    // Limpiar mensajes de error previos
    const errorMessages = document.querySelectorAll('.error-message');
    errorMessages.forEach(msg => msg.remove());

    let isValid = true;

    // Validar nombre completo
    if (fullName.length < 3) {
        showError('full-name', 'El nombre completo debe tener al menos 3 caracteres.');
        isValid = false;
    }

    // Validar correo electrónico
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        showError('email', 'Por favor, ingresa un correo electrónico válido.');
        isValid = false;
    }

    // Validar teléfono
    const phoneRegex = /^[0-9]{10}$/; // Ejemplo: 10 dígitos
    if (!phoneRegex.test(phone)) {
        showError('phone', 'El número de teléfono debe contener 10 dígitos.');
        isValid = false;
    }

    // Validar fecha de viaje
    if (!travelDate) {
        showError('travel-date', 'Por favor, selecciona una fecha de viaje.');
        isValid = false;
    }

    // Validar número de personas
    if (numGuests < 1 || numGuests > 10) {
        showError('num-guests', 'El número de personas debe estar entre 1 y 10.');
        isValid = false;
    }

    // Validar tipo de habitación
    if (!roomType) {
        showError('room-type', 'Por favor, selecciona un tipo de habitación.');
        isValid = false;
    }

    // Si todo es válido, enviar el formulario
    if (isValid) {
        alert('Formulario enviado con éxito.');
        this.submit();
    }
});

// Función para mostrar mensajes de error
function showError(fieldId, message) {
    const field = document.getElementById(fieldId);
    const error = document.createElement('div');
    error.className = 'error-message';
    error.textContent = message;
    field.parentNode.insertBefore(error, field.nextSibling);
}

