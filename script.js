// Initialize Swiper Slider
if (typeof Swiper !== 'undefined') {
    const swiper = new Swiper('.swiper', {
        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
}

// Funcionalidad menú hamburguesa y navegación
function setupMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            hamburger.classList.toggle('active');
        });
        // Cierra el menú al hacer click en un enlace
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                hamburger.classList.remove('active');
            });
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    setupMenu();
    // Hacer todos los botones de acción navegables
    document.querySelectorAll('.cta-button').forEach(btn => {
        btn.addEventListener('click', e => {
            const href = btn.getAttribute('href');
            if (href && href !== '#') {
                window.location.href = href;
            }
        });
    });
    // Botón WhatsApp flotante
    const wspFloat = document.querySelector('.wsp-float');
    if (wspFloat) {
        wspFloat.style.display = 'block';
    }
});

// Mobile Navigation
document.addEventListener('DOMContentLoaded', () => {
    // Initialize Swiper Slider
    const swiper = new Swiper('.swiper', {
        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    // Mobile Navigation
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger && navLinks) {
        // Add ARIA attributes for accessibility
        hamburger.setAttribute('aria-label', 'Abrir/cerrar menú de navegación');
        hamburger.setAttribute('aria-expanded', 'false');
        hamburger.setAttribute('role', 'button');

        // Mobile menu toggle
        hamburger.addEventListener('click', (e) => {
            e.stopPropagation(); // Prevent click from bubbling up
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('active');
            hamburger.setAttribute('aria-expanded', hamburger.classList.contains('active'));
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
                hamburger.setAttribute('aria-expanded', 'false');
            }
        });

        // Close menu when clicking on a navigation link
        navLinks.addEventListener('click', (e) => {
            if (e.target.tagName === 'A') {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
                hamburger.setAttribute('aria-expanded', 'false');
            }
        });
    }

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Appointment form submission
    const appointmentForm = document.getElementById('appointmentForm');
    if (appointmentForm) {
        appointmentForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(appointmentForm);
            const formObject = {};
            formData.forEach((value, key) => {
                formObject[key] = value;
            });

            // Show success message
            alert('¡Gracias por su solicitud! Nos pondremos en contacto con usted pronto.');
            appointmentForm.reset();
        });
    }

    // Add animation to service cards when they come into view
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1
    });

    document.querySelectorAll('.service-card, .facility-card, .quick-access-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'all 0.5s ease';
        observer.observe(card);
    });

    // Initialize AOS (Animate On Scroll)
    AOS.init({
        duration: 1000,
        once: true
    });

    // WhatsApp button visibility
    const wspFloat = document.querySelector('.wsp-float');
    if (wspFloat) {
        const handleScroll = () => {
            wspFloat.style.display = window.scrollY > 200 ? 'block' : 'none';
        };
        
        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Initial check
    }

    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        let lastScroll = 0;
        
        const handleNavbarScroll = () => {
            const currentScroll = window.pageYOffset;
            
            if (currentScroll <= 0) {
                navbar.classList.remove('scrolled');
                return;
            }
            
            if (currentScroll > lastScroll && !navbar.classList.contains('scrolled')) {
                // Scrolling down
                navbar.classList.remove('scrolled');
            } else if (currentScroll < lastScroll && navbar.classList.contains('scrolled')) {
                // Scrolling up
                navbar.classList.add('scrolled');
            }
            lastScroll = currentScroll;
        };

        window.addEventListener('scroll', handleNavbarScroll);
        handleNavbarScroll(); // Initial check
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
  
    hamburger.addEventListener('click', function() {
      this.classList.toggle('active');
      navLinks.classList.toggle('open');
    });
  });