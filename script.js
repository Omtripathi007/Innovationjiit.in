document.addEventListener('DOMContentLoaded', function() {
    // Loader
    setTimeout(() => {
        document.getElementById('loader').style.display = 'none';
    }, 4000);

    // Navbar scroll effect
    window.addEventListener('scroll', function() {
        const navbar = document.getElementById('navbar');
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Mobile menu toggle
    const menuToggle = document.getElementById('menuToggle');
    const mobileMenu = document.getElementById('mobileMenu');
    
    menuToggle.addEventListener('click', function() {
        menuToggle.classList.toggle('active');
        mobileMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    const mobileLinks = document.querySelectorAll('.mobile-menu-links a');
    mobileLinks.forEach(link => {
        link.addEventListener('click', function() {
            menuToggle.classList.remove('active');
            mobileMenu.classList.remove('active');
        });
    });

    // Carousel
    const slides = document.querySelectorAll('.carousel-slide');
    let currentSlide = 0;
    
    function nextSlide() {
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add('active');
    }
    
    setInterval(nextSlide, 5000);

    // Scroll to top
    const scrollTop = document.getElementById('scrollTop');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            scrollTop.classList.add('visible');
        } else {
            scrollTop.classList.remove('visible');
        }
    });
    
    scrollTop.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('.nav-links a, .mobile-menu-links a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href.startsWith('#')) {
                e.preventDefault();
                const targetId = href.substring(1);
                const targetSection = document.getElementById(targetId);
                
                if (targetSection) {
                    window.scrollTo({
                        top: targetSection.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // Team page navigation
    const teamLink = document.getElementById('teamLink');
    const teamLinkMobile = document.getElementById('teamLinkMobile');
    const teamLinkFooter = document.getElementById('teamLinkFooter');
    const teamPage = document.getElementById('teamPage');
    const backFromTeam = document.getElementById('backFromTeam');
    const mainContent = document.querySelector('.hero, .about, .services, .events, footer');
    
    function showTeamPage() {
        document.body.style.overflow = 'hidden';
        teamPage.classList.add('active');
        if (mainContent) mainContent.style.display = 'none';
    }
    
    function hideTeamPage() {
        document.body.style.overflow = '';
        teamPage.classList.remove('active');
        if (mainContent) mainContent.style.display = '';
    }
    
    teamLink.addEventListener('click', function(e) {
        e.preventDefault();
        showTeamPage();
    });
    
    teamLinkMobile.addEventListener('click', function(e) {
        e.preventDefault();
        showTeamPage();
    });
    
    teamLinkFooter.addEventListener('click', function(e) {
        e.preventDefault();
        showTeamPage();
    });
    
    backFromTeam.addEventListener('click', function(e) {
        e.preventDefault();
        hideTeamPage();
    });

    // Contact page navigation
    const contactLink = document.getElementById('contactLink');
    const contactLinkMobile = document.getElementById('contactLinkMobile');
    const contactLinkFooter = document.getElementById('contactLinkFooter');
    const contactPage = document.getElementById('contactPage');
    const backFromContact = document.getElementById('backFromContact');
    
    function showContactPage() {
        document.body.style.overflow = 'hidden';
        contactPage.classList.add('active');
        if (mainContent) mainContent.style.display = 'none';
    }
    
    function hideContactPage() {
        document.body.style.overflow = '';
        contactPage.classList.remove('active');
        if (mainContent) mainContent.style.display = '';
    }
    
    contactLink.addEventListener('click', function(e) {
        e.preventDefault();
        showContactPage();
    });
    
    contactLinkMobile.addEventListener('click', function(e) {
        e.preventDefault();
        showContactPage();
    });
    
    contactLinkFooter.addEventListener('click', function(e) {
        e.preventDefault();
        showContactPage();
    });
    
    backFromContact.addEventListener('click', function(e) {
        e.preventDefault();
        hideContactPage();
    });

    // Event details page
    const eventDetailsBtns = document.querySelectorAll('.event-details-btn');
    const eventDetailsPage = document.getElementById('eventDetailsPage');
    const backFromEvent = document.getElementById('backFromEvent');
    
    function showEventDetailsPage() {
        document.body.style.overflow = 'hidden';
        eventDetailsPage.classList.add('active');
        if (mainContent) mainContent.style.display = 'none';
    }
    
    function hideEventDetailsPage() {
        document.body.style.overflow = '';
        eventDetailsPage.classList.remove('active');
        if (mainContent) mainContent.style.display = '';
    }
    
    eventDetailsBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            showEventDetailsPage();
        });
    });
    
    backFromEvent.addEventListener('click', function(e) {
        e.preventDefault();
        hideEventDetailsPage();
    });

    // Modals
    const welcomeModal = document.getElementById('welcomeModal');
    const successModal = document.getElementById('successModal');
    const comingSoonModal = document.getElementById('comingSoonModal');
    
    // Welcome modal
    const joinBtn = document.getElementById('joinBtn');
    const welcomeClose = document.getElementById('welcomeClose');
    const getStartedBtn = document.getElementById('getStartedBtn');
    
    function showWelcomeModal() {
        welcomeModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
    
    function hideWelcomeModal() {
        welcomeModal.classList.remove('active');
        document.body.style.overflow = '';
    }
    
    joinBtn.addEventListener('click', function(e) {
        e.preventDefault();
        showWelcomeModal();
    });
    
    welcomeClose.addEventListener('click', hideWelcomeModal);
    getStartedBtn.addEventListener('click', hideWelcomeModal);
    
    // Success modal
    const successClose = document.getElementById('successClose');
    const successOkBtn = document.getElementById('successOkBtn');
    
    function showSuccessModal() {
        successModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
    
    function hideSuccessModal() {
        successModal.classList.remove('active');
        document.body.style.overflow = '';
    }
    
    successClose.addEventListener('click', hideSuccessModal);
    successOkBtn.addEventListener('click', hideSuccessModal);
    
    // Coming soon modal
    const comingSoonClose = document.getElementById('comingSoonClose');
    const comingSoonOkBtn = document.getElementById('comingSoonOkBtn');
    
    function showComingSoonModal() {
        comingSoonModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
    
    function hideComingSoonModal() {
        comingSoonModal.classList.remove('active');
        document.body.style.overflow = '';
    }
    
    comingSoonClose.addEventListener('click', hideComingSoonModal);
    comingSoonOkBtn.addEventListener('click', hideComingSoonModal);
    
    // Join team button
    const joinTeamBtn = document.getElementById('joinTeamBtn');
    joinTeamBtn.addEventListener('click', function(e) {
        e.preventDefault();
        showComingSoonModal();
    });
    
    // Event register buttons
    const eventRegisterBtns = document.querySelectorAll('.event-register-btn');
    const registerEventBtn = document.getElementById('registerEventBtn');
    
    eventRegisterBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            showSuccessModal();
        });
    });
    
    registerEventBtn.addEventListener('click', function(e) {
        e.preventDefault();
        showSuccessModal();
    });
    
    // Contact form submission
    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        showSuccessModal();
        contactForm.reset();
    });
    
    // Close modals when clicking outside
    window.addEventListener('click', function(e) {
        if (e.target === welcomeModal) {
            hideWelcomeModal();
        }
        if (e.target === successModal) {
            hideSuccessModal();
        }
        if (e.target === comingSoonModal) {
            hideComingSoonModal();
        }
    });
});
