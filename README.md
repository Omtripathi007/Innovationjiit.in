# Innovation - JIIT Noida Website

A modern, responsive website for the Innovation Club at JIIT Noida, showcasing their activities, events, and team members. The website features a dark theme with interactive 3D elements, smooth animations, and a comprehensive event management system.

## Features

### 🎨 Design & UI
- **Modern Dark Theme**: Professional dark color scheme with blue and red accent colors
- **Responsive Design**: Fully responsive layout that works seamlessly on desktop, tablet, and mobile devices
- **Interactive Elements**: 3D particle system, animated backgrounds, and hover effects
- **Smooth Animations**: Typewriter loading effect, floating elements, and page transitions

### 🚀 Key Sections
- **Hero Section**: Eye-catching landing with 3D particle animation and floating elements
- **About Section**: Information about the Innovation Club with an interactive 3D cube
- **Events Section**: Details about upcoming events, especially RIDE Hack'25
- **Gallery**: Photo gallery with lightbox functionality
- **Team Page**: Information about faculty coordinators and student teams
- **Updates Page**: Latest news and announcements
- **Contact Page**: Contact form with location map

### 🎯 Event Management
- **RIDE Hack'25**: Complete event management system with:
  - Live countdown timer (November 1, 2025, 10:00 AM)
  - Registration system (currently closed)
  - Prize information
  - Shortlisted teams announcement
  - Downloadable results PDF

### 📱 Mobile Optimized
- **Touch-Friendly Navigation**: Hamburger menu for mobile devices
- **Optimized Modals**: Properly sized modals that fit within mobile screens
- **Responsive Forms**: Mobile-optimized form layouts
- **Touch Gestures**: Support for touch interactions on all interactive elements

### 🔧 Technical Features
- **Single Page Application (SPA)**: Smooth page transitions without full reloads
- **3D Graphics**: Three.js integration for interactive particle effects
- **Form Handling**: Integration with Google Forms and Supabase for data collection
- **Real-time Countdown**: Live countdown timer for events
- **Lightbox Gallery**: Full-screen image viewer with navigation controls

## 🛠 Technologies Used

- **HTML5**: Semantic markup for structure
- **CSS3**: Modern styling with animations and transitions
- **JavaScript**: Vanilla JS for interactivity
- **Three.js**: 3D graphics and animations
- **Supabase**: Backend database for form submissions
- **Google Forms**: Alternative form submission method
- **Font Awesome**: Icon library
- **Google Fonts**: Custom typography (Montserrat & Roboto)

## 📁 Repository Structure

This repo contains **two website versions** — only the root is deployed live.

```
/                           ← 🟢 LIVE DEPLOYMENT (v1 — Current Site)
├── index.html              # Main entry point (served by host)
├── css/
│   └── styles.css          # Global stylesheet
├── js/
│   └── script.js           # JavaScript functionality
├── pages/                  # Secondary HTML pages
│   ├── cdesign.html
│   ├── cdevelopments.html
│   ├── cmanagement.html
│   ├── csocial.html
│   └── climatehackathon.html
├── assets/
│   ├── images/             # All site images
│   └── docs/               # Downloadable documents
│
└── innovation-2.0/         ← 🚧 IN DEVELOPMENT (v2 — Not Deployed)
    ├── index.html
    ├── css/styles.css
    ├── js/script.js
    ├── pages/
    └── assets/
        ├── images/
        └── fonts/
```

> **Note:** `innovation-2.0/` is a parallel development workspace.  
> It is **not deployed**. To preview it locally: `http://localhost:8080/innovation-2.0/`

## 🚀 Getting Started

1. **Clone or Download** the project files
2. **Open `index.html`** in your web browser
3. **The website will load** with all functionality intact

## 📱 Mobile Responsiveness

The website is fully responsive and optimized for mobile devices:

- **Navigation**: Hamburger menu for small screens
- **Modals**: Properly sized modals that fit within mobile viewport
- **Forms**: Mobile-optimized input fields and buttons
- **Images**: Responsive images with proper aspect ratios
- **Touch Support**: All interactive elements support touch gestures

## 🎨 Customization

### Colors
The color scheme is defined in CSS variables at the top of `styles.css`:

```css
:root {
    --primary: #0056b3;
    --secondary: #ff6b6b;
    --accent: #4ecdc4;
    --dark: #0a0e27;
    --light: #f8f9fa;
    /* ... more variables */
}
```

### Fonts
The website uses Google Fonts (Montserrat & Roboto). You can change the font imports in the HTML `<head>` section.

### Event Details
To update event information, modify the countdown timer in `script.js`:

```javascript
const eventDate = new Date("November 1, 2025 10:00:00").getTime();
```

## 🔧 Configuration

### Supabase Integration
To use Supabase for form submissions:

1. Replace the Supabase URL and key in `script.js`
2. Create the required tables (`registrations`, `contacts`, `newsletter_subscribers`)
3. Update form field names to match your database schema

### Google Forms Integration
The website also supports Google Forms as a backup submission method. Update the form action URLs in the HTML to point to your Google Forms.

## 📱 Browser Support

The website supports all modern browsers:
- Chrome (Recommended)
- Firefox
- Safari
- Edge

## 🐛 Known Issues

1. **3D Effects**: Three.js may not work on very old browsers
2. **Video Background**: Fallback image is provided for browsers that don't support video
3. **Form Submission**: Requires internet connection for backend integration

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions are welcome! Please feel free to:
- Report bugs
- Suggest improvements
