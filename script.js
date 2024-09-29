document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const whatsappButton = document.getElementById('whatsapp-order');
    const whatsappButton2 = document.getElementById('whatsapp-order2');
    const instagramButton = document.getElementById('instagram-link');
    const phoneNumber = '8610363310'; // Replace with your WhatsApp number
    const message = 'Hello! I would like to place an order.'; // Optional pre-filled message
    const instagramUrl = 'https://www.instagram.com/ydlywater/'; // Replace with your Instagram account URL

    hamburger.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });

    whatsappButton.addEventListener('click', function(e) {
        e.preventDefault();
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    });
    whatsappButton2.addEventListener('click', function(e) {
        e.preventDefault();
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    });

    instagramButton.addEventListener('click', function(e) {
        e.preventDefault();
        window.open(instagramUrl, '_blank');
    });
});