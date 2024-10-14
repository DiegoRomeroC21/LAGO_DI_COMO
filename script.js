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

