# Afectus Shield - Lightning Protection Systems

<div align="center">

![Afectus Shield](https://img.shields.io/badge/Afectus-Shield-FF6B35?style=for-the-badge)
![React](https://img.shields.io/badge/React-18.3.1-61DAFB?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-38B2AC?style=for-the-badge&logo=tailwind-css)
![Vite](https://img.shields.io/badge/Vite-6.3.5-646CFF?style=for-the-badge&logo=vite)

**Professional lightning protection systems compliant with IEC 62305 standards**

[🌐 Live Website](https://www.afectusshield.com) • [📖 Documentation](./NETLIFY_DEPLOYMENT_GUIDE.md) • [📧 Contact](mailto:info@afectusshield.com)

</div>

---

## 🎯 Overview

Afectus Shield is a modern, bilingual (Turkish/English) corporate website for professional lightning protection services. Built with cutting-edge web technologies, it features a fully responsive design, advanced SEO optimization, and comprehensive performance enhancements.

### ✨ Key Features

- 🌍 **Bilingual Support**: Full Turkish/English localization with instant language switching
- 📱 **Fully Responsive**: Optimized for mobile, tablet, and desktop devices
- ⚡ **Performance Optimized**: Code splitting, lazy loading, and asset optimization
- 🔍 **SEO Ready**: Structured data, sitemap, robots.txt, and meta tags
- 🎨 **Modern UI/UX**: Clean industrial design with smooth animations
- 📋 **Netlify Forms**: Integrated contact form with spam protection
- 🍪 **GDPR Compliant**: Cookie consent banner and privacy policies
- 🎯 **Accessibility**: WCAG 2.1 AA compliant with keyboard navigation
- 📊 **Analytics Ready**: Google Analytics and Web Vitals monitoring
- 🔒 **Security Headers**: CSP, XSS protection, and secure headers

---

## 🛠️ Tech Stack

### Core
- **React 18.3.1** - UI library
- **TypeScript** - Type safety
- **Vite 6.3.5** - Build tool and dev server
- **React Router 7** - Client-side routing

### Styling
- **Tailwind CSS 4.0** - Utility-first CSS framework
- **Motion** - Animation library
- **Radix UI** - Headless component primitives

### Internationalization
- **react-i18next** - i18n framework
- **i18next-browser-languagedetector** - Automatic language detection

### SEO & Performance
- **react-helmet-async** - Document head management
- **web-vitals** - Performance monitoring
- **Lazy loading** - Route-based code splitting

### Forms & UI
- **react-hook-form** - Form management
- **Lucide React** - Icon library
- **Netlify Forms** - Form submissions

---

## 📂 Project Structure

```
afectus-shield/
├── public/
│   ├── _headers              # Netlify headers (security, caching)
│   ├── _redirects            # Netlify redirects (SPA routing)
│   ├── robots.txt            # SEO crawler directives
│   ├── sitemap.xml           # SEO sitemap
│   ├── manifest.json         # PWA manifest
│   └── favicon.svg           # Site icon
├── src/
│   ├── app/
│   │   ├── components/       # React components
│   │   │   ├── ui/           # Reusable UI components
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── Hero.tsx
│   │   │   └── ...
│   │   ├── pages/            # Route pages
│   │   │   ├── HomePage.tsx
│   │   │   ├── AboutPage.tsx
│   │   │   ├── ServicesOverviewPage.tsx
│   │   │   ├── ProcessPage.tsx
│   │   │   ├── IndustriesPage.tsx
│   │   │   ├── ContactPage.tsx
│   │   │   └── ...
│   │   ├── contexts/         # React contexts
│   │   │   └── LanguageContext.tsx
│   │   ├── i18n/             # Internationalization
│   │   │   ├── config.ts
│   │   │   ├── types.ts
│   │   │   └── locales/
│   │   │       ├── tr.json   # Turkish translations
│   │   │       └── en.json   # English translations
│   │   ├── utils/            # Utility functions
│   │   │   ├── analytics.ts
│   │   │   └── webVitals.ts
│   │   ├── routes.config.tsx # Route configuration
│   │   └── App.tsx           # Root component
│   ├── styles/
│   │   ├── index.css         # Main styles
│   │   ├── tailwind.css      # Tailwind imports
│   │   ├── theme.css         # CSS variables
│   │   └── fonts.css         # Font imports
│   └── main.tsx              # Entry point
├── .env.example              # Environment variables template
├── .gitignore                # Git ignore rules
├── netlify.toml              # Netlify configuration
├── vite.config.ts            # Vite configuration
├── package.json              # Dependencies
└── README.md                 # This file
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js**: 20.x or higher
- **npm/pnpm**: Latest version

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/afectus-shield.git
cd afectus-shield

# Install dependencies
npm install
# or
pnpm install

# Copy environment variables
cp .env.example .env.local

# Start development server
npm run dev
```

Visit [http://localhost:5173](http://localhost:5173) to view the app.

### Build for Production

```bash
# Build the app
npm run build

# Preview production build
npm run preview
```

---

## 📦 Deployment

### Netlify (Recommended)

See [NETLIFY_DEPLOYMENT_GUIDE.md](./NETLIFY_DEPLOYMENT_GUIDE.md) for detailed instructions.

**Quick Deploy:**

1. Push code to GitHub/GitLab
2. Connect repository to Netlify
3. Configure build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
   - **Node version**: `20`
4. Deploy!

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start)

---

## 🌍 Internationalization

The site supports Turkish (default) and English languages.

### Adding New Translations

1. Add translations to:
   - `/src/app/i18n/locales/tr.json`
   - `/src/app/i18n/locales/en.json`

2. Use in components:
```tsx
import { useTranslation } from 'react-i18next';

function MyComponent() {
  const { t } = useTranslation();
  return <h1>{t('myKey')}</h1>;
}
```

### Language Detection

Automatic detection via:
1. URL path (`/en/about`)
2. Browser language
3. Fallback to Turkish

---

## 🎨 Design System

### Colors

```css
--color-primary: #0A0E1A;      /* Navy Blue */
--color-accent: #FF6B35;       /* Orange */
--color-highlight: #00D9FF;    /* Cyan */
```

### Typography

- **Font Family**: Inter (Google Fonts)
- **Weights**: 300, 400, 500, 600, 700, 800

### Breakpoints

```css
sm: 640px   /* Mobile landscape */
md: 768px   /* Tablet */
lg: 1024px  /* Desktop */
xl: 1280px  /* Large desktop */
2xl: 1536px /* Extra large */
```

---

## 📊 Performance

### Lighthouse Scores (Target)

- ✅ **Performance**: 95+
- ✅ **Accessibility**: 100
- ✅ **Best Practices**: 100
- ✅ **SEO**: 100

### Optimizations

- ✅ Code splitting (React.lazy)
- ✅ Image lazy loading
- ✅ Font optimization
- ✅ Asset compression (Gzip/Brotli)
- ✅ CDN caching
- ✅ Tree shaking
- ✅ Minification

---

## 🔒 Security

- ✅ Content Security Policy (CSP)
- ✅ XSS Protection
- ✅ CSRF Protection
- ✅ Secure Headers
- ✅ HTTPS Only
- ✅ Netlify Form Spam Protection

---

## 📝 License

This project is proprietary and confidential. All rights reserved by Afectus Shield.

**© 2026 Afectus Shield. All Rights Reserved.**

---

## 📞 Contact

- **Website**: [www.afectusshield.com](https://www.afectusshield.com)
- **Email**: info@afectusshield.com
- **WhatsApp**: [+90 553 720 69 72](https://wa.me/905537206972)

---

## 🙏 Acknowledgments

- Built with ❤️ using modern web technologies
- Icons by [Lucide](https://lucide.dev)
- Images from [Unsplash](https://unsplash.com)
- Fonts by [Google Fonts](https://fonts.google.com)

---

**Made with ⚡ by Afectus Shield**
