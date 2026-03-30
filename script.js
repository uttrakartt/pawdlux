// Navigation Toggle
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
}

// Contact Form
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you for your message! We will contact you soon.');
        contactForm.reset();
    });
}

// Newsletter Form
document.querySelector('.newsletter-form')?.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you for subscribing to Pawdlux!');
    e.target.reset();
});

// Add to Cart
document.querySelectorAll('.btn-small').forEach(button => {
    button.addEventListener('click', (e) => {
        const productName = e.target.closest('.product-card').querySelector('h3').textContent;
        e.target.textContent = '✓ Added!';
        setTimeout(() => {
            e.target.textContent = 'Add to Cart';
        }, 2000);
        console.log('Added to cart:', productName);
    });
});

console.log('🐾 Pawdlux Pet Store Loaded!');
