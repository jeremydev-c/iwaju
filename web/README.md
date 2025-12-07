# Iwaju Website

A modern, beautiful, and highly performant website for Iwaju - built with React, Vite, and Framer Motion.

## 🚀 Features

- **Modern Design**: Sleek, dark-themed UI with smooth animations
- **Fully Responsive**: Works perfectly on mobile, tablet, and desktop
- **Smooth Animations**: Powered by Framer Motion for delightful interactions
- **Fast Performance**: Built with Vite for lightning-fast development and builds
- **SEO Optimized**: Proper meta tags and semantic HTML
- **Accessible**: Follows web accessibility best practices

## 📦 Installation

1. Navigate to the web directory:
```bash
cd web
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The website will open at `http://localhost:3000`

## 🛠️ Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## 📁 Project Structure

```
web/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx       # Navigation bar
│   │   ├── Hero.jsx         # Hero section
│   │   ├── Services.jsx     # Services section
│   │   ├── About.jsx        # About section
│   │   ├── Articles.jsx     # Blog/Articles section
│   │   ├── Contact.jsx      # Contact form
│   │   ├── Footer.jsx       # Footer
│   │   └── ScrollToTop.jsx # Scroll to top on route change
│   ├── pages/
│   │   ├── Home.jsx         # Home page
│   │   ├── Services.jsx     # Services page
│   │   ├── About.jsx        # About page
│   │   ├── Blog.jsx         # Blog page
│   │   └── Contact.jsx     # Contact page
│   ├── App.jsx              # Main app with routing
│   ├── main.jsx            # Entry point
│   └── index.css            # Global styles
├── index.html               # HTML template
├── package.json             # Dependencies
└── vite.config.js          # Vite configuration
```

## 🛣️ Routes

- `/` - Home page (Hero, Services, About, Articles, Contact)
- `/services` - Services page
- `/about` - About page
- `/blog` - Blog/Articles page
- `/contact` - Contact page

## 🎨 Design System

The website uses a consistent design system with:
- Dark theme with purple/cyan accent colors
- Smooth animations and transitions
- Responsive typography
- Card-based layouts
- Gradient accents

## 📱 Sections

1. **Hero**: Eye-catching introduction with animated background
2. **Services**: Three main service offerings with pricing
3. **About**: Company information and key features
4. **Articles**: Latest blog posts and updates
5. **Contact**: Contact form and information
6. **Footer**: Links, newsletter, and social media

## 🔧 Customization

- Colors: Edit CSS variables in `src/index.css`
- Content: Update component files in `src/components/`
- Styling: Modify CSS files for each component

## 📄 License

© 2025 Iwaju. All rights reserved.

