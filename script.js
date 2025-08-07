// Typewriter Loading Effect
document.addEventListener('DOMContentLoaded', () => {
    const typewriterText = document.getElementById('typewriter-text');
    const text = "JIIT";
    let index = 0;
    
    function typeWriter() {
        if (index < text.length) {
            typewriterText.textContent += text.charAt(index);
            index++;
            setTimeout(typeWriter, 300);
        } else {
            // After typing JIIT, show Innovation Hub subtitle
            setTimeout(() => {
                const loader = document.getElementById('loader');
                loader.style.opacity = '0';
                setTimeout(() => {
                    loader.style.display = 'none';
                    
                    // Show welcome modal after loading
                    const welcomeModal = document.getElementById('welcomeModal');
                    welcomeModal.classList.add('active');
                }, 500);
            }, 1500);
        }
    }
    
    // Start typewriter effect after a short delay
    setTimeout(typeWriter, 500);
});

// Carousel functionality
let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-slide');

function showSlide(index) {
    // Hide all slides
    slides.forEach(slide => {
        slide.classList.remove('active');
    });
    
    // Show current slide
    slides[index].classList.add('active');
    currentSlide = index;
}

// Next slide
function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

// Auto-advance carousel
let slideInterval = setInterval(nextSlide, 5000);

// Mobile menu toggle
const menuToggle = document.getElementById('menuToggle');
const mobileMenu = document.getElementById('mobileMenu');

menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    mobileMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
const mobileLinks = document.querySelectorAll('.mobile-menu-links a');
mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        menuToggle.classList.remove('active');
        mobileMenu.classList.remove('active');
    });
});

// Welcome modal
const welcomeModal = document.getElementById('welcomeModal');
const welcomeClose = document.getElementById('welcomeClose');
const welcomeButton = document.getElementById('welcomeButton');

function closeWelcomeModal() {
    welcomeModal.classList.remove('active');
}

welcomeClose.addEventListener('click', closeWelcomeModal);
welcomeButton.addEventListener('click', closeWelcomeModal);

// Success modal
const successModal = document.getElementById('successModal');
const successClose = document.getElementById('successClose');
const successButton = document.getElementById('successButton');

function showSuccessModal() {
    successModal.classList.add('active');
}

function closeSuccessModal() {
    successModal.classList.remove('active');
}

successClose.addEventListener('click', closeSuccessModal);
successButton.addEventListener('click', closeSuccessModal);

// Registration modal
const registrationModal = document.getElementById('registrationModal');
const modalClose = document.getElementById('modalClose');
const registerBtn = document.getElementById('registerBtn');
const eventRegisterBtn = document.getElementById('eventRegisterBtn');

function showRegistrationModal() {
    registrationModal.classList.add('active');
}

function closeRegistrationModal() {
    registrationModal.classList.remove('active');
}

modalClose.addEventListener('click', closeRegistrationModal);
registerBtn.addEventListener('click', (e) => {
    e.preventDefault();
    showRegistrationModal();
});
eventRegisterBtn.addEventListener('click', (e) => {
    e.preventDefault();
    showRegistrationModal();
});

// Form submissions
const registrationForm = document.getElementById('registrationForm');
const contactForm = document.getElementById('contactForm');

registrationForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // In a real application, you would submit the form data to a server here
    closeRegistrationModal();
    showSuccessModal();
    registrationForm.reset();
});

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // In a real application, you would submit the form data to a server here
    alert('Thank you for your message! We will get back to you soon.');
    contactForm.reset();
});

// Navigation to pages
const contactLink = document.getElementById('contactLink');
const mobileContactLink = document.getElementById('mobileContactLink');
const contactPage = document.getElementById('contactPage');
const mainContent = document.getElementById('mainContent');
const backToHome = document.getElementById('backToHome');

const learnMoreBtn = document.getElementById('learnMoreBtn');
const eventDetailsPage = document.getElementById('eventDetailsPage');
const backToEvents = document.getElementById('backToEvents');

const teamLink = document.getElementById('teamLink');
const mobileTeamLink = document.getElementById('mobileTeamLink');
const teamPage = document.getElementById('teamPage');
const backToHomeFromTeam = document.getElementById('backToHomeFromTeam');
const footerTeamLink = document.getElementById('footerTeamLink');

function showContactPage() {
    mainContent.style.display = 'none';
    contactPage.style.display = 'block';
    window.scrollTo(0, 0);
}

function showEventDetailsPage() {
    mainContent.style.display = 'none';
    eventDetailsPage.style.display = 'block';
    window.scrollTo(0, 0);
}

function showTeamPage() {
    mainContent.style.display = 'none';
    teamPage.style.display = 'block';
    window.scrollTo(0, 0);
}

function showMainContent() {
    contactPage.style.display = 'none';
    eventDetailsPage.style.display = 'none';
    teamPage.style.display = 'none';
    mainContent.style.display = 'block';
    window.scrollTo(0, 0);
}

contactLink.addEventListener('click', (e) => {
    e.preventDefault();
    showContactPage();
});

mobileContactLink.addEventListener('click', (e) => {
    e.preventDefault();
    showContactPage();
});

backToHome.addEventListener('click', (e) => {
    e.preventDefault();
    showMainContent();
});

learnMoreBtn.addEventListener('click', (e) => {
    e.preventDefault();
    showEventDetailsPage();
});

backToEvents.addEventListener('click', (e) => {
    e.preventDefault();
    showMainContent();
});

teamLink.addEventListener('click', (e) => {
    e.preventDefault();
    showTeamPage();
});

mobileTeamLink.addEventListener('click', (e) => {
    e.preventDefault();
    showTeamPage();
});

backToHomeFromTeam.addEventListener('click', (e) => {
    e.preventDefault();
    showMainContent();
});

footerTeamLink.addEventListener('click', (e) => {
    e.preventDefault();
    showTeamPage();
});

// Get Started button
const getStartedBtn = document.getElementById('getStartedBtn');
const mobileGetStartedBtn = document.getElementById('mobileGetStartedBtn');

getStartedBtn.addEventListener('click', (e) => {
    e.preventDefault();
    showContactPage();
});

mobileGetStartedBtn.addEventListener('click', (e) => {
    e.preventDefault();
    showContactPage();
});

// Scroll to top button
const scrollTopBtn = document.getElementById('scrollTop');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollTopBtn.classList.add('visible');
    } else {
        scrollTopBtn.classList.remove('visible');
    }
});

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Navbar scroll effect
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            e.preventDefault();
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});
