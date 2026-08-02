/**
 * Innovation Club - Editorial Interactions
 * ===============================================
 * Subtle interactions for the handcrafted experience
 */

// ============================================
// NAVIGATION SCROLL EFFECT
// ============================================

const nav = document.querySelector('.nav');

if (nav) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });
}

// ============================================
// INTERSECTION OBSERVER FOR ANIMATIONS
// ============================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animationPlayState = 'running';
        }
    });
}, observerOptions);

// Observe all animated elements
document.querySelectorAll('.stat-card, .project-card, .domain-item, .team-photo-wrapper, .cta-content').forEach(el => {
    el.style.animationPlayState = 'paused';
    observer.observe(el);
});

// ============================================
// RANDOM ROTATION FOR COLLAGE PHOTOS
// ============================================

const collageItems = document.querySelectorAll('.collage-item');
const teamPhotos = document.querySelectorAll('.team-photo-wrapper');

function addRandomRotation() {
    collageItems.forEach((item, index) => {
        const rotation = (Math.random() - 0.5) * 10;
        item.style.transform = `rotate(${rotation}deg)`;
    });
    
    teamPhotos.forEach((photo, index) => {
        const rotation = (Math.random() - 0.5) * 8;
        photo.style.transform = `rotate(${rotation}deg)`;
    });
}

// Add subtle rotation on hover
collageItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.style.transform = 'rotate(0deg) scale(1.05)';
    });
    
    item.addEventListener('mouseleave', () => {
        const rotation = (Math.random() - 0.5) * 10;
        item.style.transform = `rotate(${rotation}deg)`;
    });
});

// ============================================
// SMOOTH SCROLL FOR ANCHOR LINKS
// ============================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// ============================================
// STICKER HOVER EFFECTS
// ============================================

const stickers = document.querySelectorAll('.collage-sticker, .project-sticker, .domain-sticker');

stickers.forEach(sticker => {
    sticker.addEventListener('mouseenter', () => {
        sticker.style.transform = 'scale(1.2) rotate(15deg)';
    });
    
    sticker.addEventListener('mouseleave', () => {
        sticker.style.transform = 'scale(1) rotate(0deg)';
    });
});

console.log('🎨 Editorial Innovation Club experience loaded');
