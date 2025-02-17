// Mobile menu functionality
const mobileMenu = document.querySelector('.mobile-menu');
const nav = document.querySelector('nav ul');

mobileMenu.addEventListener('click', () => {
    nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
    
    // Add animation to menu icon
    mobileMenu.classList.toggle('active');
});

// Navbar background change on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = '#000';
        navbar.style.padding = '20px 5%';
    } else {
        navbar.style.background = 'transparent';
        navbar.style.padding = '30px 5%';
    }
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// GSAP Animations
gsap.registerPlugin(ScrollTrigger);

// Hero section animation
gsap.from('.banner-one-item', {
    opacity: 0,
    y: 50,
    duration: 1,
    delay: 0.2
});

gsap.from('.banner-one-item-title', {
    opacity: 0,
    y: 100,
    duration: 1,
    delay: 0.4
});

gsap.from('.curve-text-wrapper', {
    opacity: 0,
    scale: 0,
    duration: 1,
    delay: 0.6
});

// Navbar animation
gsap.from('.navbar', {
    y: -100,
    opacity: 0,
    duration: 1,
    delay: 0.2
});

// Initialize hidden images
document.querySelectorAll('.hidden-image').forEach(el => {
    new HiddenImage(el);
});

// Add after your existing GSAP animations
const createWaveLines = () => {
    const pattern = document.querySelector('.pattern-overlay');
    let svg = '';
    
    for(let i = 0; i < 15; i++) {
        const opacity = 0.1 - (i * 0.005);
        const delay = i * -1.5;
        svg += `<div class="wave-line" style="
            animation-delay: ${delay}s;
            opacity: ${opacity};
            transform: translateX(${i * 20}px)
        "></div>`;
    }
    
    pattern.innerHTML = svg;
};

createWaveLines(); 