document.addEventListener("DOMContentLoaded", function() {
    // estoy seleccionando el elemento con la clase carrusel para que se almacene en la variable
    const carousel = document.querySelector('.carousel');
    let currentIndex = 0;
    const totalItems = carousel.children.length;
    const interval = 3000; 
    let isTransitioning = false;

    function nextSlide() {
        if (!isTransitioning) {
            isTransitioning = true;
            currentIndex++;
            carousel.style.transition = 'transform 0.5s ease';
            carousel.style.transform = `translateX(-${currentIndex * 100 / totalItems}%)`;
        }
    }

    function transitionEndHandler() {
        isTransitioning = false;
        if (currentIndex >= totalItems - 1) {
            carousel.style.transition = 'none';
            currentIndex = 0;
            carousel.style.transform = `translateX(0)`;
        }
    }

    carousel.addEventListener('transitionend', transitionEndHandler);

    setInterval(nextSlide, interval);

    //  Al hacer clic, verifica si el campo de búsqueda está oculto 
    document.getElementById("search-button").addEventListener("click", function() {
        var input = document.getElementById("search-input");
        if (input.style.display === "none") {
            input.style.display = "inline-block";
            input.focus(); // Para que el cursor se posicione automáticamente en el campo de búsqueda
        } else {
            // Realizar la búsqueda
            var searchTerm = input.value.trim();
            if (searchTerm !== "") {
                alert("Buscando por: " + searchTerm);
                // Aquí podrías implementar la lógica para dirigir al usuario a la página de resultados
            } else {
                alert("Por favor, ingresa un término de búsqueda válido.");
            }
        }
    });

    // Mensaje
    const form = document.getElementById('subscription-form');
    const discountMessage = document.getElementById('discount-message');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        if (form.checkValidity()) {
            // Aquí enviarías una solicitud para suscribir al usuario.
            // Después de una suscripción exitosa, mostrarías el mensaje de descuento.
            discountMessage.classList.remove('hidden');
            alert('Gracias por su compra!');
        }
    });
});