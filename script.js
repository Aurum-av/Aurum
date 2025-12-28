// Este código hace que el desplazamiento sea suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Función temporal para los botones que aún no tienen link de pago
function mensajeDemo() {
    alert("¡Hola! Para vender este producto, deberás pegar aquí tu enlace de pago de Stripe o PayPal en el archivo index.html.");
}