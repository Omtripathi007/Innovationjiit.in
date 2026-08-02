/**
 * Innovation Club - Team Showcase Component JavaScript
 * =======================================================
 * Handles team data storage, dynamic filtering by category,
 * interactive hero updates, and horizontal carousel scroller.
 */

(function () {
    'use strict';

    // ============================================
    // 1. TEAM MEMBERS DATA ARRAY
    // ============================================
    const teamMembers = [
        // --- MENTORS ---
        {
            id: 'm1',
            name: 'Prof. Vikas Saxena',
            role: 'Faculty Advisor',
            category: 'Mentors',
            tagline: 'Inspiring academic excellence, research, and technical leadership.',
            bio: 'Guiding Innovation Club JIIT Noida with over 20 years of research experience, empowering student developers to build impactful technological solutions.',
            image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
            socials: {
                linkedin: 'https://linkedin.com',
                github: 'https://github.com',
                website: 'https://jiit.ac.in',
                email: 'mailto:vikas.saxena@jiit.ac.in'
            }
        },
        {
            id: 'm2',
            name: 'Dr. Neetu Sardana',
            role: 'Faculty Co-Coordinator',
            category: 'Mentors',
            tagline: 'Fostering innovation mindset and student project incubation.',
            bio: 'Dedicated to bridging academia and industry through research mentorship, innovation hackathons, and technical domain growth.',
            image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
            socials: {
                linkedin: 'https://linkedin.com',
                website: 'https://jiit.ac.in',
                email: 'mailto:neetu.sardana@jiit.ac.in'
            }
        },
        {
            id: 'm3',
            name: 'Dr. Devpriya Soni',
            role: 'Technical Advisor',
            category: 'Mentors',
            tagline: 'Empowering young developers to transform ideas into reality.',
            bio: 'Providing strategic technical guidance for competitive programming, full-stack development, and artificial intelligence domains.',
            image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80',
            socials: {
                linkedin: 'https://linkedin.com',
                github: 'https://github.com',
                email: 'mailto:devpriya.soni@jiit.ac.in'
            }
        },

        // --- TEAM LEADS ---
        {
            id: 'l1',
            name: 'Harshit Gupta',
            role: 'Tech Lead',
            category: 'Team Leads',
            tagline: 'Architecting scalable web applications & leading tech initiatives.',
            bio: 'Passionate about full-stack engineering, cloud architecture, and mentoring student developers across web and mobile platforms.',
            image: '../assets/images/teams/LEAD - Harshit Gupta.jpg',
            socials: {
                github: 'https://github.com',
                linkedin: 'https://linkedin.com',
                instagram: 'https://instagram.com',
                website: 'https://harshitgupta.dev'
            }
        },
        {
            id: 'l2',
            name: 'Isha Chawla',
            role: 'Management Lead',
            category: 'Team Leads',
            tagline: 'Driving team execution, community growth, and strategic vision.',
            bio: 'Specializing in project management, cross-functional collaboration, and hosting university-wide flagship tech events.',
            image: '../assets/images/teams/Isha Chawla_Lead.jpg',
            socials: {
                linkedin: 'https://linkedin.com',
                instagram: 'https://instagram.com',
                website: 'https://ishachawla.me'
            }
        },
        {
            id: 'l3',
            name: 'Aditya Gupta',
            role: 'Tech Lead',
            category: 'Team Leads',
            tagline: 'Building high-performance software systems & open source tools.',
            bio: 'Core technical lead focusing on backend infrastructure, dev tools, and guiding student development projects.',
            image: '../assets/images/teams/Aditya Gupta_Lead.jpg',
            socials: {
                github: 'https://github.com',
                linkedin: 'https://linkedin.com',
                instagram: 'https://instagram.com'
            }
        },
        {
            id: 'l4',
            name: 'Devanshi Srivastava',
            role: 'Creative Lead',
            category: 'Team Leads',
            tagline: 'Crafting expressive UI/UX designs and visual brand identities.',
            bio: 'Leading creative design, editorial visual styling, and user experience research across all club digital products.',
            image: '../assets/images/teams/lead - Devanshi Srivastava.jpg',
            socials: {
                linkedin: 'https://linkedin.com',
                instagram: 'https://instagram.com',
                website: 'https://behance.net'
            }
        },
        {
            id: 'l5',
            name: 'Aman Gupta',
            role: 'Operations Lead',
            category: 'Team Leads',
            tagline: 'Streamlining event logistics, sponsorships, and outreach.',
            bio: 'Managing club logistics, sponsor relations, and event execution for seamless university hackathons.',
            image: '../assets/images/teams/Aman Gupta_lead.jpg',
            socials: {
                linkedin: 'https://linkedin.com',
                instagram: 'https://instagram.com',
                github: 'https://github.com'
            }
        },
        {
            id: 'l6',
            name: 'Saumya Agarwal',
            role: 'Communications Lead',
            category: 'Team Leads',
            tagline: 'Connecting student communities through effective engagement.',
            bio: 'Heading community engagement, social communications, and media partnerships for Innovation Club.',
            image: '../assets/images/teams/Saumya Agarwal_mailing_lead.jpg',
            socials: {
                linkedin: 'https://linkedin.com',
                instagram: 'https://instagram.com'
            }
        },
        {
            id: 'l7',
            name: 'Utaksha Agarwal',
            role: 'Event Lead',
            category: 'Team Leads',
            tagline: 'Orchestrating memorable hackathons & interactive workshops.',
            bio: 'Curating technical workshops, competitive hackathons, and speaker sessions for 500+ participants.',
            image: '../assets/images/teams/LEAD UTAKSHA AGARWAL.jpg',
            socials: {
                linkedin: 'https://linkedin.com',
                instagram: 'https://instagram.com'
            }
        },
        {
            id: 'l8',
            name: 'Yashdeep',
            role: 'Project Lead',
            category: 'Team Leads',
            tagline: 'Directing software lifecycles & practical code implementation.',
            bio: 'Overseeing development sprints, code reviews, and developer onboarding for active club projects.',
            image: '../assets/images/teams/Yashdeep_lead.jpg',
            socials: {
                github: 'https://github.com',
                linkedin: 'https://linkedin.com',
                instagram: 'https://instagram.com'
            }
        },

        // --- CORE TEAM ---
        {
            id: 'c1',
            name: 'Abhinav Sinha',
            role: 'Core Developer',
            category: 'Core Team',
            tagline: 'Building intuitive user interfaces and modern web applications.',
            bio: 'Frontend developer passionate about clean UI components, web responsiveness, and seamless user experiences.',
            image: '../assets/images/teams/CORE - Abhinav Sinha.jpg',
            socials: {
                github: 'https://github.com',
                linkedin: 'https://linkedin.com',
                instagram: 'https://instagram.com'
            }
        },
        {
            id: 'c2',
            name: 'Nikita Singh',
            role: 'Core Designer',
            category: 'Core Team',
            tagline: 'Translating complex ideas into delightful digital graphics.',
            bio: 'Specializing in vector illustrations, UI component design, and marketing collateral for innovation events.',
            image: '../assets/images/teams/CORE - Nikita Singh.jpg',
            socials: {
                linkedin: 'https://linkedin.com',
                instagram: 'https://instagram.com',
                website: 'https://dribbble.com'
            }
        },
        {
            id: 'c3',
            name: 'Kavya Agarwal',
            role: 'Core Developer',
            category: 'Core Team',
            tagline: 'Exploring AI algorithms and competitive coding.',
            bio: 'Problem solver focusing on Python development, data structures, and machine learning models.',
            image: '../assets/images/teams/CORE - KAVYA AGARWAL BCG25228.png',
            socials: {
                github: 'https://github.com',
                linkedin: 'https://linkedin.com'
            }
        },
        {
            id: 'c4',
            name: 'Utkarsh Agrawal',
            role: 'Core Developer',
            category: 'Core Team',
            tagline: 'Developing backend APIs and database architectures.',
            bio: 'Backend enthusiast working with Node.js, Express, and database management systems.',
            image: '../assets/images/teams/CORE - utkarsh agrawal.jpg',
            socials: {
                github: 'https://github.com',
                linkedin: 'https://linkedin.com',
                instagram: 'https://instagram.com'
            }
        },
        {
            id: 'c5',
            name: 'Vitthal Singh',
            role: 'Core Member',
            category: 'Core Team',
            tagline: 'Collaborating on full-stack web and open source projects.',
            bio: 'Active contributor across web development, open-source repositories, and event logistics.',
            image: '../assets/images/teams/CORE - vitthal singh.png',
            socials: {
                github: 'https://github.com',
                linkedin: 'https://linkedin.com'
            }
        },
        {
            id: 'c6',
            name: 'Delisha Agarwal',
            role: 'Core Member',
            category: 'Core Team',
            tagline: 'Crafting engaging content and managing community channels.',
            bio: 'Core contributor handling content creation, social communications, and student engagement.',
            image: '../assets/images/teams/CORE- Delisha Agarwal.jpg',
            socials: {
                linkedin: 'https://linkedin.com',
                instagram: 'https://instagram.com'
            }
        },
        {
            id: 'c7',
            name: 'Harsh Agrawal',
            role: 'Core Developer',
            category: 'Core Team',
            tagline: 'Interested in web security and cloud deployments.',
            bio: 'Exploring cybersecurity, serverless deployment, and modern JavaScript toolchains.',
            image: '../assets/images/teams/CORE- Harsh Agrawal.webp',
            socials: {
                github: 'https://github.com',
                linkedin: 'https://linkedin.com',
                instagram: 'https://instagram.com'
            }
        },
        {
            id: 'c8',
            name: 'Shreshtha Gupta',
            role: 'Core Member',
            category: 'Core Team',
            tagline: 'Organizing domain workshops and designing visual media.',
            bio: 'Supporting creative campaigns, graphic assets, and technical workshop execution.',
            image: '../assets/images/teams/CORE- Shreshtha Gupta.jpg',
            socials: {
                linkedin: 'https://linkedin.com',
                instagram: 'https://instagram.com'
            }
        },
        {
            id: 'c9',
            name: 'Jitaksh Jain',
            role: 'Core Developer',
            category: 'Core Team',
            tagline: 'Crafting responsive mobile-first UI components.',
            bio: 'Frontend developer working with modern CSS, UI responsiveness, and web interactive elements.',
            image: '../assets/images/teams/CORE- jitaksh jain.jpg',
            socials: {
                github: 'https://github.com',
                linkedin: 'https://linkedin.com'
            }
        },
        {
            id: 'c10',
            name: 'Anaya Mittal',
            role: 'Core Member',
            category: 'Core Team',
            tagline: 'Fostering inclusive team collaboration and documentation.',
            bio: 'Contributing to project documentation, community outreach, and technical event planning.',
            image: '../assets/images/teams/CORE_ANAYA MITTLAL.jpg',
            socials: {
                linkedin: 'https://linkedin.com',
                instagram: 'https://instagram.com'
            }
        }
    ];

    // ============================================
    // 2. SVG ICON DICTIONARY FOR SOCIAL LINKS
    // ============================================
    const socialIcons = {
        github: `<svg viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>`,
        linkedin: `<svg viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>`,
        instagram: `<svg viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>`,
        website: `<svg viewBox="0 0 24 24"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm6.968 7h-3.483c-.378-1.737-1.026-3.32-1.9-4.639 2.378.892 4.298 2.617 5.383 4.639zM12 2.088c.983 1.378 1.724 3.093 2.146 4.912H9.854C10.276 5.181 11.017 3.466 12 2.088zM2.032 12c0-.687.085-1.354.238-1.996h4.152c-.06.65-.098 1.318-.098 1.996s.038 1.346.098 1.996H2.27C2.117 13.354 2.032 12.687 2.032 12zm.99-5h3.483c.378-1.737 1.026-3.32 1.9-4.639-2.378.892-4.298 2.617-5.383 4.639zm3.483 10H3.022c1.085 2.022 3.005 3.747 5.383 4.639-.874-1.318-1.522-2.902-1.9-4.639zM12 21.912c-.983-1.378-1.724-3.093-2.146-4.912h4.292c-.422 1.819-1.163 3.534-2.146 4.912zm2.424-6.912H9.576c-.067-.65-.107-1.318-.107-1.996s.04-1.346.107-1.996h4.848c.067.65.107 1.318.107 1.996s-.04 1.346-.107 1.996zm1.06 6.551c.874-1.318 1.522-2.902 1.9-4.639h3.483c-1.085 2.022-3.005 3.747-5.383 4.639zM17.58 13.996c.06-.65.098-1.318.098-1.996s-.038-1.346-.098-1.996h4.152c.153.642.238 1.309.238 1.996s-.085 1.354-.238 1.996h-4.152z"/></svg>`,
        email: `<svg viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>`
    };

    // Helper: SVG Avatar Fallback Generator
    function getFallbackAvatar(name) {
        const initials = name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase();
        const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 200 200">
            <rect width="100%" height="100%" fill="#ff6b6b" />
            <text x="50%" y="55%" font-family="Space Grotesk, sans-serif" font-size="72" font-weight="bold" fill="#ffffff" dominant-baseline="middle" text-anchor="middle">${initials}</text>
        </svg>`;
        return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
    }

    // ============================================
    // 3. COMPONENT STATE & DOM REFERENCES
    // ============================================
    let currentCategory = 'Mentors';
    let activeMemberId = null;

    const heroCard = document.getElementById('hero-card');
    const heroAvatar = document.getElementById('hero-avatar');
    const heroCategoryBadge = document.getElementById('hero-category-badge');
    const heroRoleTag = document.getElementById('hero-role-tag');
    const heroNameHighlight = document.getElementById('hero-name-highlight');
    const heroTagline = document.getElementById('hero-tagline');
    const heroBio = document.getElementById('hero-bio');
    const heroSocialBar = document.getElementById('hero-social-bar');

    const categoryTabsContainer = document.getElementById('category-tabs');
    const carouselTrack = document.getElementById('carousel-track');
    const carouselScroller = document.getElementById('carousel-scroller');
    const carouselPrevBtn = document.getElementById('carousel-prev');
    const carouselNextBtn = document.getElementById('carousel-next');

    // ============================================
    // 4. CORE FUNCTIONS
    // ============================================

    /**
     * Initializes the Team Showcase component
     */
    function initShowcase() {
        if (!heroCard || !categoryTabsContainer || !carouselTrack) {
            console.warn('Team Showcase: Required DOM elements not found.');
            return;
        }

        // Attach event listeners to Category Navigation Tabs
        const tabBtns = categoryTabsContainer.querySelectorAll('.tab-btn');
        tabBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const category = btn.getAttribute('data-category');
                if (category && category !== currentCategory) {
                    switchCategory(category);
                }
            });
        });

        // Carousel arrow navigation (cycle to prev/next member in active category)
        if (carouselPrevBtn) {
            carouselPrevBtn.addEventListener('click', (e) => {
                e.preventDefault();
                navigateMember(-1);
            });
        }
        if (carouselNextBtn) {
            carouselNextBtn.addEventListener('click', (e) => {
                e.preventDefault();
                navigateMember(1);
            });
        }

        // Initialize with default category
        switchCategory('Mentors');
    }

    /**
     * Navigates to next (+1) or previous (-1) member in current category
     */
    function navigateMember(direction) {
        const filteredMembers = teamMembers.filter(m => m.category === currentCategory);
        if (filteredMembers.length === 0) return;

        const currentIndex = filteredMembers.findIndex(m => m.id === activeMemberId);
        let nextIndex = currentIndex + direction;

        if (nextIndex >= filteredMembers.length) {
            nextIndex = 0; // Wrap around to first member
        } else if (nextIndex < 0) {
            nextIndex = filteredMembers.length - 1; // Wrap around to last member
        }

        const targetMember = filteredMembers[nextIndex];
        if (targetMember) {
            selectMember(targetMember);
        }
    }

    /**
     * Switches active tab category and updates UI
     */
    function switchCategory(category) {
        currentCategory = category;

        // 1. Update Tab Button UI classes
        const tabBtns = categoryTabsContainer.querySelectorAll('.tab-btn');
        tabBtns.forEach(btn => {
            if (btn.getAttribute('data-category') === category) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });

        // 2. Filter members for current category
        const filteredMembers = teamMembers.filter(m => m.category === category);
        if (filteredMembers.length === 0) return;

        // 3. Set top featured member to the 1st member in category
        const firstMember = filteredMembers[0];
        activeMemberId = firstMember.id;

        // 4. Render Carousel & Hero Card
        renderCarousel(filteredMembers);
        updateHeroCard(firstMember);
    }

    /**
     * Renders horizontal avatar carousel
     */
    function renderCarousel(members) {
        carouselTrack.innerHTML = '';

        members.forEach(member => {
            const avatarBtn = document.createElement('button');
            avatarBtn.className = `avatar-item ${member.id === activeMemberId ? 'active' : ''}`;
            avatarBtn.setAttribute('data-id', member.id);
            avatarBtn.setAttribute('aria-label', `View details for ${member.name}`);

            avatarBtn.innerHTML = `
                <div class="avatar-item__img-wrapper">
                    <img class="avatar-item__img" 
                         src="${member.image}" 
                         alt="${member.name}" 
                         onerror="this.onerror=null; this.src='${getFallbackAvatar(member.name)}';">
                </div>
                <span class="avatar-item__name">${member.name.split(' ')[0]}</span>
            `;

            avatarBtn.addEventListener('click', () => {
                if (activeMemberId !== member.id) {
                    selectMember(member);
                }
            });

            carouselTrack.appendChild(avatarBtn);
        });

        // Scroll scroller back to start when tab changes
        if (carouselScroller) {
            carouselScroller.scrollTo({ left: 0, behavior: 'smooth' });
        }
    }

    /**
     * Selects a specific team member and updates visual highlights
     */
    function selectMember(member) {
        activeMemberId = member.id;

        // Update active class state on carousel avatar buttons
        const avatarItems = carouselTrack.querySelectorAll('.avatar-item');
        avatarItems.forEach(item => {
            if (item.getAttribute('data-id') === member.id) {
                item.classList.add('active');
                scrollAvatarIntoCenter(item);
            } else {
                item.classList.remove('active');
            }
        });

        // Update Hero Details Card
        updateHeroCard(member);
    }

    /**
     * Smoothly scrolls active avatar into center of carouselScroller
     */
    function scrollAvatarIntoCenter(item) {
        if (!carouselScroller || !item) return;

        const scrollerWidth = carouselScroller.clientWidth;
        const itemLeft = item.offsetLeft;
        const itemWidth = item.offsetWidth;
        const targetScroll = itemLeft - (scrollerWidth / 2) + (itemWidth / 2);

        carouselScroller.scrollTo({
            left: targetScroll,
            behavior: 'smooth'
        });
    }

    /**
     * Updates top Hero Details Card with smooth fade animation
     */
    function updateHeroCard(member) {
        heroCard.classList.add('fade-out');
        heroCard.classList.remove('fade-in');

        setTimeout(() => {
            // Update text content & images
            heroAvatar.src = member.image;
            heroAvatar.onerror = function() {
                this.onerror = null;
                this.src = getFallbackAvatar(member.name);
            };
            heroAvatar.alt = member.name;

            heroCategoryBadge.textContent = member.category;
            heroRoleTag.textContent = member.role;
            heroNameHighlight.textContent = member.name;
            heroTagline.textContent = `"${member.tagline}"`;
            heroBio.textContent = member.bio;

            // Render Social Links
            heroSocialBar.innerHTML = '';
            if (member.socials) {
                Object.keys(member.socials).forEach(key => {
                    if (socialIcons[key] && member.socials[key]) {
                        const link = document.createElement('a');
                        link.href = member.socials[key];
                        link.className = 'social-link';
                        link.target = '_blank';
                        link.rel = 'noopener noreferrer';
                        link.setAttribute('aria-label', `${member.name}'s ${key}`);
                        link.innerHTML = socialIcons[key];
                        heroSocialBar.appendChild(link);
                    }
                });
            }

            // Fade back in
            heroCard.classList.remove('fade-out');
            heroCard.classList.add('fade-in');
        }, 180);
    }

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initShowcase);
    } else {
        initShowcase();
    }

})();
