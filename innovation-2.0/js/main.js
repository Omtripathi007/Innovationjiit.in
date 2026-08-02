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
document.querySelectorAll('.stat-card, .project-card, .domain-item, .team-photo-wrapper, .cta-content, .mission-panel, .list-item, .timeline-item, .quote-card, .photo-frame, .story-photo, .magazine-block, .photo-large, .photo-double, .photo-full-wrapper, .moodboard-paper, .subsection, .dev-subsection, .project-card, .sticky-note, .social-subsection, .collage-photo, .timeline-event, .featured-event, .wall-photo, .wall-note, .impact-stat, .editorial-break, .editorial-quote, .editorial-fact, .memory-transition, .event-img, .event-info').forEach(el => {
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

if (collageItems.length > 0 || teamPhotos.length > 0) {
    addRandomRotation();
}

// ============================================
// TIMELINE LINE ANIMATION
// ============================================

const timelineLine = document.querySelector('.timeline-line');

if (timelineLine) {
    const timelineObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.height = '0';
                entry.target.style.transition = 'height 0.8s ease-out';
                setTimeout(() => {
                    entry.target.style.height = '100%';
                }, 50);
            }
        });
    }, { threshold: 0.1 });
    
    timelineObserver.observe(timelineLine);
}

// ============================================
// TIMELINE EVENT ANIMATIONS - Natural Rhythm
// ============================================

const timelineEvents = document.querySelectorAll('.timeline-event');

timelineEvents.forEach((event, index) => {
    // Random variation for natural feel
    const shouldDelay = Math.random() > 0.6; // 40% chance of delay
    const delayAmount = shouldDelay ? Math.random() * 100 : 0; // 0-100ms random delay
    
    // Some events have text reveal first, some image first
    const textFirst = Math.random() > 0.5;
    
    event.style.opacity = '0';
    event.style.transform = 'translateY(30px)';
    event.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    
    const eventObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, delayAmount);
            }
        });
    }, { threshold: 0.15 });
    
    eventObserver.observe(event);
});

// ============================================
// EDITORIAL BREAKS ANIMATIONS
// ============================================

const editorialBreaks = document.querySelectorAll('.editorial-break, .memory-transition');

editorialBreaks.forEach((breakElement, index) => {
    breakElement.style.opacity = '0';
    breakElement.style.transform = 'translateY(20px)';
    breakElement.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    
    const breakObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, Math.random() * 50); // 0-50ms random delay
            }
        });
    }, { threshold: 0.2 });
    
    breakObserver.observe(breakElement);
});

// ============================================
// IMAGE REVEAL ANIMATIONS - Fast & Natural
// ============================================

const eventImages = document.querySelectorAll('.event-img');

eventImages.forEach((img, index) => {
    img.style.opacity = '0';
    img.style.transform = 'scale(0.95)';
    img.style.transition = 'opacity 0.7s ease, transform 0.7s ease';
    
    const imgObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Small random delay for natural feel (0-100ms)
                const randomDelay = Math.random() * 100;
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'scale(1)';
                }, randomDelay);
            }
        });
    }, { threshold: 0.1 });
    
    imgObserver.observe(img);
});

// ============================================
// EVENT INFO REVEAL - Slightly staggered from images
// ============================================

const eventInfos = document.querySelectorAll('.event-info');

eventInfos.forEach((info, index) => {
    info.style.opacity = '0';
    info.style.transform = 'translateY(20px)';
    info.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    
    const infoObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Some text appears before image, some after - natural variation
                const textDelay = Math.random() > 0.5 ? 0 : Math.random() * 80;
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, textDelay);
            }
        });
    }, { threshold: 0.15 });
    
    infoObserver.observe(info);
});

// ============================================
// ADD SUBTLE ROTATION ON HOVER
// ============================================

if (collageItems.length > 0) {
    collageItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.style.transform = 'rotate(0deg) scale(1.05)';
        });
        
        item.addEventListener('mouseleave', () => {
            const rotation = (Math.random() - 0.5) * 10;
            item.style.transform = `rotate(${rotation}deg)`;
        });
    });
}

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

const stickers = document.querySelectorAll('.hero-sticker, .wall-sticker, .featured-sticker');

if (stickers.length > 0) {
    stickers.forEach(sticker => {
        sticker.addEventListener('mouseenter', () => {
            sticker.style.transform = 'scale(1.2) rotate(15deg)';
        });
        
        sticker.addEventListener('mouseleave', () => {
            sticker.style.transform = 'scale(1) rotate(0deg)';
        });
    });
}

console.log('🎨 Editorial Innovation Club experience loaded');
