# Innovation Club - JIIT Noida Website

A modern, responsive website for Innovation Club at JIIT Noida, built with vanilla HTML, CSS, and JavaScript.

## 🎨 Design Philosophy

This website follows a **quality-first approach** with:
- **Mobile-first responsive design**
- **Accessibility-first development** (WCAG AA compliant)
- **Semantic HTML5** structure
- **Modern CSS** (Grid, Flexbox, clamp(), CSS custom properties)
- **Progressive enhancement**
- **60 FPS animations** using GPU-accelerated properties
- **Reusable component system**
- **No external frameworks** (vanilla HTML/CSS/JS only)

## 📁 Project Structure

```
innovation-2.0/
├── index.html                          # Homepage
├── pages/                              # All sub-pages
│   ├── about.html                      # About page
│   ├── domains.html                    # Domains/Teams page
│   ├── events.html                     # Events page
│   ├── gallery.html                    # Photo gallery
│   ├── contact.html                    # Contact page
│   ├── projects.html                   # Projects page
│   └── team.html                       # Team members page
├── css/
│   └── main.css                        # Single CSS file with design system
├── js/
│   ├── components.js                   # Component injection (navbar/footer)
│   └── main.js                         # Interactive logic
├── assets/                             # Media assets
│   ├── images/                         # Images organized by category
│   │   ├── hero/                      # Hero section images
│   │   ├── teams/                      # Team member photos
│   │   ├── events/                     # Event-related images
│   │   ├── gallery/                    # Photo gallery images
│   │   └── miscellaneous/              # Other images
│   ├── docs/                           # PDFs and documents
│   ├── videos/                         # Video files
│   └── fonts/                         # Custom fonts (if needed)
└── README.md                           # This file
```

## 📄 Pages Overview

- **Homepage** - Landing page with hero, features, domains, events, projects, and CTA sections
- **About** - Club mission, vision, history timeline, and club introduction
- **Domains** - Overview of all club domains (Design, Development, Management, Social Media)
- **Events** - All events including hackathons, workshops, and competitions
- **Gallery** - Photo gallery from events and club activities
- **Contact** - Contact information and contact form
- **Projects** - Showcase of projects built by club members
- **Team** - Team members and leadership structure

## 🎯 Design System

### Color Palette
- **Primary Gradient**: Purple (#7B2CBF) → Pink (#F72585)
- **Secondary Gradient**: Blue (#4361EE) → Cyan (#4CC9F0)
- **Accent Colors**: Coral (#FF6B6B), Mint (#00F5D4), Yellow (#FFD93D)
- **Background**: Dark Navy (#0D1B2A)
- **Text**: White (#FFFFFF), Light Gray (#E0E0E0)

### Typography
- **Headings**: 'Space Grotesk' (Google Fonts)
- **Body**: 'Inter' (Google Fonts)
- **Accent**: 'Nunito' (Google Fonts)

### Spacing Scale
- Base unit: 4px
- Scale: 4, 8, 12, 16, 24, 32, 48, 64, 96px

### Border Radius
- Small: 8px
- Medium: 16px
- Large: 24px
- Full: 50%

## 🧩 Component System

### CSS Components
- **Buttons**: Primary, secondary, outline, text variants
- **Cards**: Base, gradient, hover effects
- **Navigation**: Desktop and mobile responsive
- **Footer**: Multi-column with links
- **Forms**: Accessible form elements
- **Badges**: Status and role indicators
- **Modals**: Accessible dialog system
- **Timelines**: Vertical event timelines

### JavaScript Components
- **Component Injection**: Dynamic navbar/footer loading
- **Scroll Animations**: Intersection Observer-based
- **Modal System**: Accessible with focus trap
- **Form Validation**: Client-side validation
- **Mobile Menu**: Responsive navigation
- **Smooth Scroll**: Anchor link scrolling

## 🚀 Getting Started

### Prerequisites
- No build tools required
- Modern web browser
- Local web server (optional, for testing)

### Local Development
1. Clone the repository
2. Open `index.html` in a web browser
3. Or use a local server:
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js
   npx serve
   ```

### Deployment
This is a static site and can be deployed to:
- GitHub Pages
- Netlify
- Vercel
- Any static hosting service

## ♿ Accessibility Features

- Semantic HTML5 elements
- Proper heading hierarchy
- ARIA labels where needed
- Keyboard navigation support
- Focus indicators on interactive elements
- Color contrast WCAG AA compliant
- Screen reader friendly
- Skip to main content link
- `prefers-reduced-motion` support

## 📱 Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## ⚡ Performance Optimizations

- CSS custom properties for theming
- Minimal JavaScript (no frameworks)
- Optimized images (use WebP format)
- Lazy loading for images
- Efficient CSS selectors
- No render-blocking resources
- Preconnect for external fonts

## 🎨 Customization

### Colors
Edit CSS custom properties in `css/main.css`:
```css
:root {
    --color-primary-light: #7B2CBF;
    --color-primary-dark: #F72585;
    /* ... other colors */
}
```

### Typography
Change fonts in `css/main.css`:
```css
:root {
    --font-family-heading: 'Space Grotesk', sans-serif;
    --font-family-body: 'Inter', sans-serif;
    /* ... other fonts */
}
```

### Content
Edit HTML files directly. All content is in the HTML files, no database required.

## 🔧 JavaScript Architecture

### Component Injection
The `js/components.js` file injects common components (navbar, footer) to avoid code duplication.

### Interactive Features
The `js/main.js` file handles:
- Scroll animations
- Modal system
- Form validation
- Smooth scrolling
- Mobile menu

## 📝 Code Quality Standards

- **Semantic HTML**: Proper use of HTML5 elements
- **BEM CSS**: Block__Element--Modifier naming
- **Accessibility**: WCAG AA compliant
- **Performance**: 60 FPS animations, optimized rendering
- **Comments**: Comprehensive code documentation
- **No duplication**: DRY principle throughout

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📄 License

This project is owned by Innovation Club, JIIT Noida.

## 👥 Team

- **Design Team**: UI/UX and visual design
- **Development Team**: Frontend development
- **Management Team**: Project coordination
- **Social Media Team**: Content and community

## 📞 Contact

- Email: innovation@jiit.ac.in
- Location: JIIT Noida, Sector 62, Noida, UP

---

Built with ❤️ by Innovation Club, JIIT Noida






