# The Grind Cafe & Eatery — Website

> Good food. Slow moments. Mountain air.

A premium, production-ready static website for **The Grind Cafe & Eatery** located in Skardu, Gilgit-Baltistan, Pakistan. Built with pure HTML, CSS, and JavaScript — no frameworks, no build step.

---

## 📁 Project Structure

```
the-grind-cafe-html-css-js/
│
├── index.html              ← Main page
├── 404.html                ← Custom 404 error page
├── robots.txt              ← SEO crawler instructions
├── sitemap.xml             ← XML sitemap for search engines
├── site.webmanifest        ← PWA manifest
├── humans.txt              ← Site credits
├── .gitignore              ← Git ignore rules
├── README.md               ← You are here
│
├── css/
│   └── style.css           ← Main stylesheet (formatted & commented)
│
├── js/
│   └── script.js           ← Main JavaScript (formatted & documented)
│
└── assets/
    ├── images/             ← Site images (add client photos here)
    │   └── README.md       ← Image organization guide
    ├── fonts/              ← Local font files (optional)
    │   └── README.md       ← Font self-hosting guide
    └── icons/
        └── favicon.svg     ← SVG favicon with brand logo
```

---

## 🚀 Quick Start

### Option 1 — Direct
Open `index.html` in your browser.

### Option 2 — Live Server (VS Code)
1. Install the **Live Server** extension
2. Right-click `index.html` → **Open with Live Server**

### Option 3 — Python Server
```bash
python -m http.server 8000
```
Then visit `http://localhost:8000`

---

## ✅ Features

- 🎨 Premium editorial design with cinematic hero
- 📱 Fully responsive (mobile, tablet, desktop)
- 🍔 Interactive menu with tabbed navigation
- 🖼️ Gallery with lightbox viewer
- 🗺️ Google Maps embed with directions
- 📞 Click-to-call & Instagram links
- ♿ Accessibility & reduced-motion support
- 🔍 SEO optimized (meta tags, Open Graph, Schema.org, sitemap)
- 📦 PWA-ready (web manifest, theme color)
- 🎯 Custom 404 page

---

## 📋 Before Publishing — Checklist

- [ ] Replace all `DEMO` images with licensed/client photography
- [ ] Replace menu placeholder items in `js/script.js` with real menu data
- [ ] Replace brand story copy with verified client content
- [ ] Update domain in `sitemap.xml`, `robots.txt`, and Open Graph meta tags
- [ ] Add OG image (`assets/images/og-cover.jpg`) and uncomment OG/Twitter image tags
- [ ] Generate PNG favicons (16×16, 32×32, 180×180) from the SVG
- [ ] Test on real devices and all major browsers
- [ ] Validate HTML at [validator.w3.org](https://validator.w3.org/)
- [ ] Run Lighthouse audit (aim for 90+ on all scores)
- [ ] Set up HTTPS on your hosting provider
- [ ] Configure 404 page on your hosting platform

---

## 🛠️ Tech Stack

| Layer     | Technology                     |
|-----------|--------------------------------|
| Structure | HTML5 (semantic)               |
| Styling   | Vanilla CSS3 (no preprocessor) |
| Logic     | Vanilla JavaScript (ES6+)      |
| Fonts     | Google Fonts (Cormorant Garamond, Manrope) |
| Maps      | Google Maps Embed              |
| Icons     | SVG favicon                    |

---

## 📄 License

Private project. All rights reserved by The Grind Cafe & Eatery.
