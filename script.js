document.addEventListener('DOMContentLoaded', () => {
    // Typewriter Effect
    const typewriterText = document.getElementById('typewriter-text');
    const text = 'Welcome to JIIT Innovation Hub';
    let i = 0;

    function typeWriter() {
        if (i < text.length) {
            typewriterText.innerHTML += text.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        } else {
            setTimeout(() => {
                document.getElementById('loader').style.display = 'none';
                document.getElementById('welcomeModal').classList.add('active');
                document.getElementById('mainContent').style.display = 'block';
            }, 1000);
        }
    }
    setTimeout(typeWriter, 1000);

    // Navbar Scroll Effect
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Mobile Menu Toggle
    const menuToggle = document.getElementById('menuToggle');
    const mobileMenu = document.getElementById('mobileMenu');
    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        mobileMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking a link
    const mobileLinks = document.querySelectorAll('.mobile-menu-links a');
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            menuToggle.classList.remove('active');
            mobileMenu.classList.remove('active');
        });
    });

    // Smooth Scrolling
    const navLinks = document.querySelectorAll('.nav-links a, .mobile-menu-links a, .quick-links a');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Carousel
    const slides = document.querySelectorAll('.carousel-slide');
    let currentSlide = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.toggle('active', i === index);
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    setInterval(nextSlide, 5000);
    showSlide(currentSlide);

    // Scroll to Top
    const scrollTop = document.getElementById('scrollTop');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            scrollTop.classList.add('visible');
        } else {
            scrollTop.classList.remove('visible');
        }
    });
    scrollTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Modal Handlers
    const welcomeModal = document.getElementById('welcomeModal');
    const welcomeClose = document.getElementById('welcomeClose');
    const welcomeButton = document.getElementById('welcomeButton');
    const successModal = document.getElementById('successModal');
    const successClose = document.getElementById('successClose');
    const successButton = document.getElementById('successButton');
    const registrationModal = document.getElementById('registrationModal');
    const modalClose = document.getElementById('modalClose');
    const contactPage = document.getElementById('contactPage');
    const eventDetailsPage = document.getElementById('eventDetailsPage');
    const mainContent = document.getElementById('mainContent');

    welcomeClose.addEventListener('click', () => welcomeModal.classList.remove('active'));
    welcomeButton.addEventListener('click', () => welcomeModal.classList.remove('active'));
    successClose.addEventListener('click', () => successModal.classList.remove('active'));
    successButton.addEventListener('click', () => successModal.classList.remove('active'));
    modalClose.addEventListener('click', () => registrationModal.classList.remove('active'));

    // Contact Page
    const contactLink = document.getElementById('contactLink');
    const mobileContactLink = document.getElementById('mobileContactLink');
    const backToHome = document.getElementById('backToHome');

    contactLink.addEventListener('click', (e) => {
        e.preventDefault();
        mainContent.style.display = 'none';
        contactPage.style.display = 'block';
    });
    mobileContactLink.addEventListener('click', (e) => {
        e.preventDefault();
        mainContent.style.display = 'none';
        contactPage.style.display = 'block';
        mobileMenu.classList.remove('active');
        menuToggle.classList.remove('active');
    });
    backToHome.addEventListener('click', (e) => {
        e.preventDefault();
        contactPage.style.display = 'none';
        mainContent.style.display = 'block';
    });

    // Event Details Page
    const learnMoreBtn = document.getElementById('learnMoreBtn');
    const backToEvents = document.getElementById('backToEvents');

    learnMoreBtn.addEventListener('click', (e) => {
        e.preventDefault();
        mainContent.style.display = 'none';
        eventDetailsPage.style.display = 'block';
    });
    backToEvents.addEventListener('click', (e) => {
        e.preventDefault();
        eventDetailsPage.style.display = 'none';
        mainContent.style.display = 'block';
    });

    // Registration Form
    const registrationForm = document.getElementById('registrationForm');
    const registerBtn = document.getElementById('registerBtn');
    const eventRegisterBtn = document.getElementById('eventRegisterBtn');

    registerBtn.addEventListener('click', () => registrationModal.classList.add('active'));
    eventRegisterBtn.addEventListener('click', () => registrationModal.classList.add('active'));

    registrationForm.addEventListener('submit', (e) => {
        e.preventDefault();
        registrationModal.classList.remove('active');
        successModal.classList.add('active');
    });

    // Contact Form
    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        contactPage.style.display = 'none';
        mainContent.style.display = 'block';
        successModal.classList.add('active');
    });

    // Get Started Buttons
    const getStartedBtn = document.getElementById('getStartedBtn');
    const mobileGetStartedBtn = document.getElementById('mobileGetStartedBtn');

    getStartedBtn.addEventListener('click', (e) => {
        e.preventDefault();
        registrationModal.classList.add('active');
    });
    mobileGetStartedBtn.addEventListener('click', (e) => {
        e.preventDefault();
        registrationModal.classList.add('active');
        mobileMenu.classList.remove('active');
        menuToggle.classList.remove('active');
    });
});
