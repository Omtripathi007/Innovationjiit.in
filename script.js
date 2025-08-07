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
    
    // Initialize navigation
    initNavigation();
    
    // Initialize carousel
    initCarousel();
    
    // Initialize modals
    initModals();
    
    // Initialize form
    initForm();
    
    // Initialize scroll effects
    initScrollEffects();
});

// Navigation functionality
function initNavigation() {
    // Get all navigation links
    const navLinks = document.querySelectorAll('.nav-link');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
    const footerLinks = document.querySelectorAll('.footer-link');
    const backToHomeButtons = document.querySelectorAll('.back-to-home');
    
    // Get all pages
    const pages = document.querySelectorAll('.page');
    
    // Mobile menu toggle
    const menuToggle = document.getElementById('menuToggle');
    const mobileMenu = document.getElementById('mobileMenu');
    
    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        mobileMenu.classList.toggle('active');
    });
    
    // Function to show a specific page
    function showPage(pageId) {
        // Hide all pages
        pages.forEach(page => {
            page.classList.remove('active');
        });
        
        // Show the selected page
        const selectedPage = document.getElementById(pageId + 'Page');
        if (selectedPage) {
            selectedPage.classList.add('active');
        }
        
        // Close mobile menu
        menuToggle.classList.remove('active');
        mobileMenu.classList.remove('active');
        
        // Scroll to top
        window.scrollTo(0, 0);
        
        // Update active nav link
        updateActiveNavLink(pageId);
    }
    
    // Function to update active navigation link
    function updateActiveNavLink(pageId) {
        // Remove active class from all nav links
        navLinks.forEach(link => {
            link.classList.remove('active');
        });
        
        mobileNavLinks.forEach(link => {
            link.classList.remove('active');
        });
        
        // Add active class to current page nav link
        const currentNavLink = document.querySelector(`.nav-link[data-page="${pageId}"]`);
        if (currentNavLink) {
            currentNavLink.classList.add('active');
        }
        
        const currentMobileNavLink = document.querySelector(`.mobile-nav-link[data-page="${pageId}"]`);
        if (currentMobileNavLink) {
            currentMobileNavLink.classList.add('active');
        }
    }
    
    // Add click event to navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const pageId = link.getAttribute('data-page');
            showPage(pageId);
        });
    });
    
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const pageId = link.getAttribute('data-page');
            showPage(pageId);
        });
    });
    
    footerLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const pageId = link.getAttribute('data-page');
            if (pageId) {
                showPage(pageId);
            }
        });
    });
    
    backToHomeButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            showPage('home');
        });
    });
    
    // Show home page by default
    showPage('home');
}

// Carousel functionality
function initCarousel() {
    const slides = document.querySelectorAll('.carousel-slide');
    let currentSlide = 0;
    
    function showSlide(index) {
        // Hide all slides
        slides.forEach(slide => {
            slide.classList.remove('active');
        });
        
        // Show current slide
        slides[index].classList.add('active');
        currentSlide = index;
    }
    
    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }
    
    // Auto-advance carousel
    setInterval(nextSlide, 5000);
}

// Modal functionality
function initModals() {
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
    const notifyButton = document.getElementById('notifyButton');
    const registerBtn = document.getElementById('registerBtn');
    const learnMoreBtn = document.getElementById('learnMoreBtn');
    const updateEmail = document.getElementById('updateEmail');
    
    function showComingSoonModal() {
        comingSoonModal.classList.add('active');
        startCountdown();
    }
    
    function closeComingSoonModal() {
        comingSoonModal.classList.remove('active');
        updateEmail.value = '';
    }
    
    comingSoonClose.addEventListener('click', closeComingSoonModal);
    comingSoonButton.addEventListener('click', () => {
        closeComingSoonModal();
        showSuccessModal();
    });
    
    notifyButton.addEventListener('click', () => {
        const email = updateEmail.value.trim();
        if (email) {
            // In a real application, you would save the email to a database
            alert(`Thank you! We'll send updates to ${email} when the event starts.`);
            closeComingSoonModal();
        } else {
            alert('Please enter a valid email address.');
        }
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
}

// Form functionality
function initForm() {
    const contactForm = document.getElementById('contactForm');
    
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // In a real application, you would submit the form data to a server here
        alert('Thank you for your message! We will get back to you soon.');
        contactForm.reset();
    });
}

// Scroll effects
function initScrollEffects() {
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
}
