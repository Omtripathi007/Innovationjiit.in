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
            // After typing JIIT, hide the loader
            setTimeout(() => {
                const loader = document.getElementById('loader');
                loader.style.opacity = '0';
                setTimeout(() => {
                    loader.style.display = 'none';
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
// Coming Soon modal
const comingSoonModal = document.getElementById('comingSoonModal');
const comingSoonClose = document.getElementById('comingSoonClose');
const comingSoonButton = document.getElementById('comingSoonButton');
const registerBtn = document.getElementById('registerBtn');
const learnMoreBtn = document.getElementById('learnMoreBtn');
function showComingSoonModal() {
    comingSoonModal.classList.add('active');
    startCountdown();
}
function closeComingSoonModal() {
    comingSoonModal.classList.remove('active');
}
comingSoonClose.addEventListener('click', closeComingSoonModal);
comingSoonButton.addEventListener('click', () => {
    closeComingSoonModal();
    showSuccessModal();
});
registerBtn.addEventListener('click', (e) => {
    e.preventDefault();
    showComingSoonModal();
});
learnMoreBtn.addEventListener('click', (e) => {
    e.preventDefault();
    showComingSoonModal();
});
// Countdown timer
function startCountdown() {
    // Set the date we're counting down to (30 days from now)
    const countDownDate = new Date();
    countDownDate.setDate(countDownDate.getDate() + 30);
    
    // Update the count down every 1 second
    const countdownInterval = setInterval(function() {
        // Get today's date and time
        const now = new Date().getTime();
        
        // Find the distance between now and the count down date
        const distance = countDownDate - now;
        
        // Time calculations for days, hours, minutes and seconds
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        // Display the result
        document.getElementById("days").textContent = days.toString().padStart(2, '0');
        document.getElementById("hours").textContent = hours.toString().padStart(2, '0');
        document.getElementById("minutes").textContent = minutes.toString().padStart(2, '0');
        document.getElementById("seconds").textContent = seconds.toString().padStart(2, '0');
        
        // If the count down is finished, clear the interval
        if (distance < 0) {
            clearInterval(countdownInterval);
            document.getElementById("days").textContent = "00";
            document.getElementById("hours").textContent = "00";
            document.getElementById("minutes").textContent = "00";
            document.getElementById("seconds").textContent = "00";
        }
    }, 1000);
}
// Form submissions
const contactForm = document.getElementById('contactForm');
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
const teamLink = document.getElementById('teamLink');
const mobileTeamLink = document.getElementById('mobileTeamLink');
const teamPage = document.getElementById('teamPage');
const backToHomeFromTeam = document.getElementById('backToHomeFromTeam');
const footerTeamLink = document.getElementById('footerTeamLink');
// Gallery navigation
const galleryLink = document.getElementById('galleryLink');
const mobileGalleryLink = document.getElementById('mobileGalleryLink');
const galleryPage = document.getElementById('galleryPage');
const backToHomeFromGallery = document.getElementById('backToHomeFromGallery');
const footerGalleryLink = document.getElementById('footerGalleryLink');
// Updates navigation
const updatesLink = document.getElementById('updatesLink');
const mobileUpdatesLink = document.getElementById('mobileUpdatesLink');
const updatesPage = document.getElementById('updatesPage');
const backToHomeFromUpdates = document.getElementById('backToHomeFromUpdates');
const footerUpdatesLink = document.getElementById('footerUpdatesLink');
// About page navigation
const aboutLink = document.getElementById('aboutLink');
const mobileAboutLink = document.getElementById('mobileAboutLink');
const aboutPage = document.getElementById('aboutPage');
const backToHomeFromAbout = document.getElementById('backToHomeFromAbout');
const footerAboutLink = document.getElementById('footerAboutLink');
// Events page navigation
const eventsLink = document.getElementById('eventsLink');
const mobileEventsLink = document.getElementById('mobileEventsLink');
const eventsPage = document.getElementById('eventsPage');
const backToHomeFromEvents = document.getElementById('backToHomeFromEvents');
const footerEventsLink = document.getElementById('footerEventsLink');

function showContactPage() {
    mainContent.style.display = 'none';
    galleryPage.style.display = 'none';
    updatesPage.style.display = 'none';
    teamPage.style.display = 'none';
    aboutPage.style.display = 'none';
    eventsPage.style.display = 'none';
    contactPage.style.display = 'block';
    window.scrollTo(0, 0);
}
function showTeamPage() {
    mainContent.style.display = 'none';
    galleryPage.style.display = 'none';
    updatesPage.style.display = 'none';
    contactPage.style.display = 'none';
    aboutPage.style.display = 'none';
    eventsPage.style.display = 'none';
    teamPage.style.display = 'block';
    window.scrollTo(0, 0);
}
function showGalleryPage() {
    mainContent.style.display = 'none';
    contactPage.style.display = 'none';
    updatesPage.style.display = 'none';
    teamPage.style.display = 'none';
    aboutPage.style.display = 'none';
    eventsPage.style.display = 'none';
    galleryPage.style.display = 'block';
    window.scrollTo(0, 0);
}
function showUpdatesPage() {
    mainContent.style.display = 'none';
    contactPage.style.display = 'none';
    galleryPage.style.display = 'none';
    teamPage.style.display = 'none';
    aboutPage.style.display = 'none';
    eventsPage.style.display = 'none';
    updatesPage.style.display = 'block';
    window.scrollTo(0, 0);
}
function showAboutPage() {
    mainContent.style.display = 'none';
    contactPage.style.display = 'none';
    teamPage.style.display = 'none';
    galleryPage.style.display = 'none';
    updatesPage.style.display = 'none';
    eventsPage.style.display = 'none';
    aboutPage.style.display = 'block';
    window.scrollTo(0, 0);
}
function showEventsPage() {
    mainContent.style.display = 'none';
    contactPage.style.display = 'none';
    teamPage.style.display = 'none';
    galleryPage.style.display = 'none';
    updatesPage.style.display = 'none';
    aboutPage.style.display = 'none';
    eventsPage.style.display = 'block';
    window.scrollTo(0, 0);
}
function showMainContent() {
    contactPage.style.display = 'none';
    teamPage.style.display = 'none';
    galleryPage.style.display = 'none';
    updatesPage.style.display = 'none';
    aboutPage.style.display = 'none';
    eventsPage.style.display = 'none';
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
galleryLink.addEventListener('click', (e) => {
    e.preventDefault();
    showGalleryPage();
});
mobileGalleryLink.addEventListener('click', (e) => {
    e.preventDefault();
    showGalleryPage();
});
backToHomeFromGallery.addEventListener('click', (e) => {
    e.preventDefault();
    showMainContent();
});
footerGalleryLink.addEventListener('click', (e) => {
    e.preventDefault();
    showGalleryPage();
});
updatesLink.addEventListener('click', (e) => {
    e.preventDefault();
    showUpdatesPage();
});
mobileUpdatesLink.addEventListener('click', (e) => {
    e.preventDefault();
    showUpdatesPage();
});
backToHomeFromUpdates.addEventListener('click', (e) => {
    e.preventDefault();
    showMainContent();
});
footerUpdatesLink.addEventListener('click', (e) => {
    e.preventDefault();
    showUpdatesPage();
});
aboutLink.addEventListener('click', (e) => {
    e.preventDefault();
    showAboutPage();
});
mobileAboutLink.addEventListener('click', (e) => {
    e.preventDefault();
    showAboutPage();
});
backToHomeFromAbout.addEventListener('click', (e) => {
    e.preventDefault();
    showMainContent();
});
footerAboutLink.addEventListener('click', (e) => {
    e.preventDefault();
    showAboutPage();
});
eventsLink.addEventListener('click', (e) => {
    e.preventDefault();
    showEventsPage();
});
mobileEventsLink.addEventListener('click', (e) => {
    e.preventDefault();
    showEventsPage();
});
backToHomeFromEvents.addEventListener('click', (e) => {
    e.preventDefault();
    showMainContent();
});
footerEventsLink.addEventListener('click', (e) => {
    e.preventDefault();
    showEventsPage();
});

// Event countdown timers
function initEventCountdowns() {
    const eventCountdowns = document.querySelectorAll('.event-countdown');
    
    eventCountdowns.forEach(countdown => {
        const eventDate = countdown.getAttribute('data-date');
        const countDownDate = new Date(eventDate).getTime();
        
        const countdownInterval = setInterval(function() {
            const now = new Date().getTime();
            const distance = countDownDate - now;
            
            if (distance < 0) {
                clearInterval(countdownInterval);
                countdown.innerHTML = '<div class="countdown-item"><span class="countdown-value">00</span><span class="countdown-label">Days</span></div>';
                return;
            }
            
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            
            countdown.innerHTML = `
                <div class="countdown-item">
                    <span class="countdown-value">${days.toString().padStart(2, '0')}</span>
                    <span class="countdown-label">Days</span>
                </div>
                <div class="countdown-item">
                    <span class="countdown-value">${hours.toString().padStart(2, '0')}</span>
                    <span class="countdown-label">Hours</span>
                </div>
                <div class="countdown-item">
                    <span class="countdown-value">${minutes.toString().padStart(2, '0')}</span>
                    <span class="countdown-label">Minutes</span>
                </div>
            `;
        }, 1000);
    });
}

// Initialize event countdowns when events page is shown
const eventsPageObserver = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
        if (mutation.type === 'attributes' && mutation.attributeName === 'style') {
            if (eventsPage.style.display === 'block') {
                initEventCountdowns();
            }
        }
    });
});

eventsPageObserver.observe(eventsPage, { attributes: true });

// Event notify buttons
const eventNotifyBtns = document.querySelectorAll('.event-notify-btn');
eventNotifyBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        showSuccessModal();
    });
});

// Newsletter form
const newsletterForm = document.querySelector('.newsletter-form');
if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = newsletterForm.querySelector('input[type="email"]').value;
        if (email) {
            showSuccessModal();
            newsletterForm.reset();
        }
    });
}

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
