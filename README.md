# Duba Korean BBQ & Karaoke Lounge - Website Project

## 📋 **Project Overview**

A full-stack React website for Duba Korean BBQ & Karaoke Lounge located in Elkins Park, PA. The site features a modern black and yellow theme, comprehensive menu system, karaoke room bookings, photo gallery, and email-based reservation system.

**Live Site:** https://itsrichardmai.github.io/DubaKaraokePub2/

---

## 🛠️ **Technology Stack**

- **Frontend Framework:** React 18.2.0
- **Build Tool:** Vite 5.0.0
- **Styling:** Tailwind CSS 3.3.5
- **Icons:** Lucide React 0.294.0
- **Font:** Montserrat (Google Fonts)
- **Deployment:** GitHub Pages
- **CI/CD:** GitHub Actions

---

## 📁 **Project Structure**

```
DubaKaraokePub2/
├── .github/
│   └── workflows/
│       └── deploy.yml              # GitHub Actions deployment workflow
├── public/
│   ├── gallery/
│   │   ├── galleryimg0.png         # Gallery images (0-9)
│   │   ├── galleryimg1.jpg
│   │   └── ...
│   ├── logo-icon.png               # Main logo / favicon
│   ├── bbq-chicken-promo.png       # BB.Q Chicken promotional image
│   ├── ubereats-logo.png           # Uber Eats delivery logo
│   └── doordash-logo.png           # DoorDash delivery logo
├── src/
│   ├── App.jsx                     # Main application component
│   └── main.jsx                    # React entry point
├── .gitignore                      # Git ignore rules
├── index.html                      # HTML entry point
├── package.json                    # Dependencies and scripts
├── postcss.config.cjs              # PostCSS configuration
├── tailwind.config.js              # Tailwind CSS configuration
├── vite.config.js                  # Vite build configuration
└── README.md                       # This file
```

---

## 🎯 **Features**

### **Website Features**
- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Smooth scroll navigation
- ✅ Dynamic hero section with animations
- ✅ Korean BBQ menu with Korean translations
- ✅ Expandable drinks menu (7 categories, 100+ items)
- ✅ 9 beer-themed karaoke rooms with pricing
- ✅ Photo gallery with 10 images
- ✅ Reservation form with validation
- ✅ Email form integration (EmailJS)
- ✅ Delivery service integration (GrubHub, Uber Eats, DoorDash)
- ✅ Social media links (Facebook, Instagram, TikTok)
- ✅ Happy Hour section
- ✅ Karaoke room promo packages
- ✅ Contact information
- ✅ Favicon support

### **Technical Features**
- ✅ Phone number auto-formatting (XXX-XXX-XXXX)
- ✅ Date auto-formatting (MM-DD-YYYY)
- ✅ Form validation
- ✅ Loading states for form submission
- ✅ Success/error messaging
- ✅ Auto-deployment via GitHub Actions
- ✅ Asset path handling for GitHub Pages

---

## 🐛 **Issues Encountered & Solutions**

### **Issue #1: Font Weight Too Heavy**

**Problem:**
- All text appeared too bold throughout the site
- Used `font-bold` (700) and `font-semibold` (600) extensively
- Made the site look less refined

**Solution:**
- Changed `font-bold` → `font-medium` (500) site-wide
- Changed `font-semibold` → `font-normal` (400) site-wide
- Updated all headings, menu items, buttons, and body text

**Files Modified:** `src/App.jsx`

---

### **Issue #2: Delivery Service Logo Alignment**

**Problem:**
- Delivery service logos (GrubHub, Uber Eats, DoorDash) had uneven sizing
- Icons not properly aligned
- Inconsistent button styling

**Solution:**
- Standardized container sizing: `w-28 h-8`
- Fixed GrubHub logo:
  - URL: `https://about.grubhub.com/wp-content/uploads/2025/06/Grubhub_Wordmark_Orange.png`
  - Orange wordmark on transparent background
- Fixed Uber Eats:
  - Replaced image with text rendering
  - Used official green background (`#06C167`)
  - Clean "Uber Eats" text
- Fixed DoorDash:
  - Local file: `/public/doordash-logo.png`
  - Red and white wordmark
- Applied consistent hover effects and brand-colored borders

**Files Modified:** `src/App.jsx`

---

### **Issue #3: About Section Heading**

**Problem:**
- Had centered "About Us" heading that was redundant
- Wanted two-color heading for "ABOUT DUBA"

**Solution:**
- Removed "About Us" centered heading completely
- Changed "Welcome to Duba" → "ABOUT DUBA"
- Styling:
  - "ABOUT" in white (`text-white`)
  - "DUBA" in yellow (`text-yellow-400`)
  - Both fully capitalized
  - Montserrat medium font

**Files Modified:** `src/App.jsx`

---

### **Issue #4: Reservation Form Validation**

**Problem:**
- Phone numbers accepted any format
- Dates accepted invalid formats like "10/10/200101020120120210"
- No auto-formatting for user input

**Solution - Phone Number:**
- Format: XXX-XXX-XXXX
- Auto-formats as user types
- Accepts only digits (removes all non-digits)
- Max length: 12 characters (including dashes)
- Implementation: `formatPhoneNumber()` function with regex `/\D/g`

**Solution - Date:**
- Format: MM-DD-YYYY
- Auto-formats as user types
- Accepts only digits (removes all non-digits)
- Max length: 10 characters (including dashes)
- Implementation: `formatDate()` function with regex `/\D/g`

**Files Modified:** `src/App.jsx`

---

### **Issue #5: Missing Room Selection**

**Problem:**
- User accidentally removed "Desired Room" dropdown
- Customers couldn't select which karaoke room they wanted

**Solution:**
- Restored "Desired Room" dropdown as required field
- Shows all 9 rooms with capacity and pricing
- Positioned after "Karaoke Room Promos" field
- Format: "Room Name (Max X) - $XX/hr"

**Files Modified:** `src/App.jsx`

---

### **Issue #6: Email Form Submission**

**Problem:**
- Reservation form didn't send emails
- No backend to process submissions

**Solution:**
- Integrated EmailJS for client-side email sending
- Added form state management
- Created email template format
- Implemented submission handler with validation
- Added loading states and success/error messages
- Email sent to: `duba.elkins@gmail.com`

**Email Content Format:**
```
Subject: New Reservation Request from [Name]

Name: [Name]
Phone: [Phone]
Email: [Email]
Date: [Date]
Time In: [Time In]
Time Out: [Time Out]
Karaoke Room Promo: [Promo Package]
Desired Room: [Room Selection]
Special Requests: [Requests]

---
Submitted at: [Timestamp]
```

**EmailJS Setup Required:**
1. Create EmailJS account (free)
2. Add Gmail service
3. Create email template
4. Get 3 credentials:
   - Service ID
   - Template ID
   - Public Key
5. Update App.jsx around line 320

**Files Modified:** `src/App.jsx`

---

### **Issue #7: GitHub Pages Deployment - Base Path**

**Problem:**
- After setting `base: '/DubaKaraokePub2/'` in vite config
- All images disappeared from local development
- Images trying to load from: `http://localhost:3000/DubaKaraokePub2/gallery/image.png` ❌
- Should load from: `http://localhost:3000/gallery/image.png` ✅

**Solution:**
- Use conditional base path based on environment
- Development: `base: '/'`
- Production: `base: '/DubaKaraokePub2/'`

```javascript
base: process.env.NODE_ENV === 'production' ? '/DubaKaraokePub2/' : '/',
```

**Result:**
- Local dev works: `localhost:3000/gallery/image.png` ✅
- GitHub Pages works: `username.github.io/DubaKaraokePub2/gallery/image.png` ✅

**Files Modified:** `vite.config.js`

---

### **Issue #8: PostCSS Configuration Error**

**Problem:**
- Build failed with error:
```
SyntaxError: Unexpected token 'export'
postcss.config.js:1
export default {
^^^^^^
```
- PostCSS config used ES module syntax (`export default`)
- Node.js tried to load it as CommonJS and failed

**Solution - Attempt 1 (Failed):**
- Renamed `postcss.config.js` → `postcss.config.cjs`
- Still failed because syntax was still ES module

**Solution - Attempt 2 (Success):**
- Renamed to `.cjs` AND changed syntax
- Changed `export default` → `module.exports`

**Before:**
```javascript
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
```

**After:**
```javascript
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
```

**Files Modified:** `postcss.config.js` → `postcss.config.cjs`

**Key Learning:** The `.cjs` extension tells Node.js to use CommonJS module system, so must use `module.exports` syntax.

---

### **Issue #9: GitHub Actions Workflow Missing**

**Problem:**
- GitHub Pages source set to "GitHub Actions"
- No workflows running
- Actions tab showed "No workflows found"
- `.github/workflows/deploy.yml` file didn't exist in repository

**Solution:**
- Created `.github/workflows/deploy.yml` file
- Configured automatic deployment workflow
- Workflow triggers on push to `main` branch
- Build process:
  1. Checkout code
  2. Setup Node.js 18
  3. Install dependencies (`npm install`)
  4. Build project (`npm run build`)
  5. Upload dist folder as artifact
  6. Deploy to GitHub Pages

**Files Created:** `.github/workflows/deploy.yml`

**Workflow Configuration:**
```yaml
name: Deploy to GitHub Pages
on:
  push:
    branches: [main]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - Checkout
      - Setup Node
      - Install dependencies (npm install)
      - Build (npm run build)
      - Upload artifact

  deploy:
    runs-on: ubuntu-latest
    needs: build
    steps:
      - Deploy to GitHub Pages
```

---

### **Issue #10: GitHub Actions Permissions**

**Problem:**
- Workflow needed write permissions to deploy
- Default permissions were read-only
- Deployment would fail without proper permissions

**Solution:**
- Configured Actions permissions in repo settings
- Settings → Actions → General
- Selected: "Allow all actions and reusable workflows"
- Selected: "Read and write permissions"
- Checked: "Allow GitHub Actions to create and approve pull requests"

**Files Modified:** None (repository settings only)

---

### **Issue #11: npm ci vs npm install**

**Problem:**
- Workflow initially used `npm ci` (clean install)
- `npm ci` requires `package-lock.json` file
- Package-lock.json might not exist in repository

**Solution:**
- Changed workflow to use `npm install` instead
- `npm install` works with or without package-lock.json
- More flexible for initial deployment

**Files Modified:** `.github/workflows/deploy.yml`

---

### **Issue #12: Assets Not Loading on GitHub Pages**

**Problem:**
- Site deployed successfully
- Title appeared: "Duba - Korean BBQ & Karaoke Lounge | Elkins Park, PA"
- But NO images loaded (logos, gallery, delivery icons)
- Browser tried to load: `itsrichardmai.github.io/gallery/image.png` ❌
- Should load: `itsrichardmai.github.io/DubaKaraokePub2/gallery/image.png` ✅

**Root Cause:**
- Image paths used absolute paths: `/gallery/image.png`
- Vite's base path `/DubaKaraokePub2/` wasn't being applied to images
- Need to use `import.meta.env.BASE_URL` for dynamic base path

**Solution:**
- Added `const baseUrl = import.meta.env.BASE_URL;` to component
- Updated ALL image src attributes to use template literals
- Updated gallery items array
- Updated all static images (logo, BBQ chicken promo, DoorDash)

**Before:**
```javascript
<img src="/logo-icon.png" />
url: '/gallery/galleryimg0.png'
```

**After:**
```javascript
const baseUrl = import.meta.env.BASE_URL;
<img src={`${baseUrl}logo-icon.png`} />
url: `${baseUrl}gallery/galleryimg0.png`
```

**Result:**
- Local: `baseUrl = '/'` → `/gallery/image.png` ✅
- Production: `baseUrl = '/DubaKaraokePub2/'` → `/DubaKaraokePub2/gallery/image.png` ✅

**Files Modified:** `src/App.jsx`

**Images Fixed:**
- All 10 gallery images
- Navbar logo
- Hero logo
- BBQ Chicken promo
- DoorDash logo
- (GrubHub uses external URL - no change needed)
- (Uber Eats uses text rendering - no image)

---

### **Issue #13: Missing Favicon**

**Problem:**
- Browser tab showed no icon
- Generic browser icon appeared instead of Duba logo
- No favicon link in `index.html`

**Solution:**
- Added favicon links to `index.html`
- Used existing `logo-icon.png` as favicon
- Added both standard favicon and Apple touch icon

**Added to index.html:**
```html
<!-- Favicon -->
<link rel="icon" type="image/png" href="/logo-icon.png">
<link rel="apple-touch-icon" href="/logo-icon.png">
```

**Benefits:**
- Favicon appears in browser tab
- Icon shows in bookmarks
- Icon appears when saved to mobile home screen
- Professional branding

**Files Modified:** `index.html`

**Note:** Browsers cache favicons heavily. After deployment, users may need to:
- Hard refresh (Ctrl+Shift+R or Cmd+Shift+R)
- Clear browser cache
- Open in incognito/private window

---

## 📊 **Complete Issue Summary**

| # | Issue | Root Cause | Solution | Files Modified |
|---|-------|------------|----------|----------------|
| 1 | Font too bold | Used `font-bold` everywhere | Changed to `font-medium` | App.jsx |
| 2 | Delivery logos misaligned | Inconsistent sizing/sources | Standardized containers, fixed logos | App.jsx |
| 3 | About section heading | Redundant "About Us" | Two-color "ABOUT DUBA" | App.jsx |
| 4 | Form validation missing | No input formatting | Added auto-format for phone/date | App.jsx |
| 5 | Missing room dropdown | Accidentally removed | Restored with all 9 rooms | App.jsx |
| 6 | No email submission | No backend | Integrated EmailJS | App.jsx |
| 7 | Base path broke images | Wrong path in dev | Conditional base by environment | vite.config.js |
| 8 | PostCSS build error | ES module in .cjs file | Changed to `module.exports` | postcss.config.cjs |
| 9 | No GitHub Actions | Missing workflow file | Created deploy.yml | .github/workflows/deploy.yml |
| 10 | Actions permissions | Read-only default | Enabled write permissions | Repo settings |
| 11 | npm ci failed | No package-lock.json | Changed to `npm install` | deploy.yml |
| 12 | Assets not loading | Absolute paths without base | Used `import.meta.env.BASE_URL` | App.jsx |
| 13 | No favicon | Missing link tags | Added favicon links | index.html |

---

## 🚀 **Deployment Process**

### **Initial Setup**

1. **Local Development:**
   ```bash
   npm install
   npm run dev
   # Site runs at http://localhost:3000
   ```

2. **Test Production Build:**
   ```bash
   npm run build
   npm run preview
   # Preview at http://localhost:4173
   ```

3. **Push to GitHub:**
   ```bash
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/itsrichardmai/DubaKaraokePub2.git
   git push -u origin main
   ```

4. **Enable GitHub Pages:**
   - Go to repo Settings → Pages
   - Source: GitHub Actions
   - Save

5. **Automatic Deployment:**
   - GitHub Actions runs automatically
   - Wait 2-3 minutes
   - Site live at: https://itsrichardmai.github.io/DubaKaraokePub2/

### **Update Process**

```bash
# Make changes to code
git add .
git commit -m "Description of changes"
git push origin main
# Site auto-updates in 2-3 minutes
```

---

## 🔧 **Configuration Files Explained**

### **vite.config.js**
```javascript
export default defineConfig({
  plugins: [react()],
  base: process.env.NODE_ENV === 'production' ? '/DubaKaraokePub2/' : '/',
  // ↑ Conditional base path for dev vs production
  server: {
    port: 3000,
    open: true
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false
  }
})
```

**Key Points:**
- `base` changes based on environment
- Local dev uses `/` (root path)
- Production uses `/DubaKaraokePub2/` (GitHub Pages subpath)

### **postcss.config.cjs**
```javascript
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
```

**Key Points:**
- Uses `.cjs` extension for CommonJS
- Must use `module.exports`, NOT `export default`
- Required for Tailwind CSS processing

### **package.json Scripts**
```json
{
  "scripts": {
    "dev": "vite",                                    // Local development
    "build": "vite build",                            // Production build
    "preview": "vite preview",                        // Preview production build
    "start": "node server.js",                        // Backend server (not used for static site)
    "deploy": "npm run build && gh-pages -d dist"     // Manual deployment (optional)
  }
}
```

---

## 📝 **Key Learnings**

### **1. Asset Paths in GitHub Pages**
- Never use hardcoded absolute paths like `/image.png`
- Always use `import.meta.env.BASE_URL` for dynamic base path
- Test both local (`npm run dev`) and production (`npm run preview`) before deploying

### **2. PostCSS Configuration**
- `.cjs` extension requires CommonJS syntax (`module.exports`)
- `.mjs` extension requires ES module syntax (`export default`)
- `.js` extension depends on `"type": "module"` in package.json

### **3. GitHub Actions Permissions**
- Workflows need write permissions to deploy
- Configure in repo Settings → Actions → General
- Enable "Read and write permissions"

### **4. Favicon Caching**
- Browsers cache favicons aggressively
- May need hard refresh or cache clear to see changes
- Test in incognito/private window for clean slate

### **5. Form Validation**
- Auto-formatting improves user experience
- Regex to strip non-digits: `/\D/g`
- Max length prevents over-typing
- Real-time validation as user types

### **6. Environment-Specific Configuration**
- Use `process.env.NODE_ENV` to detect environment
- Development and production often need different configs
- Vite automatically sets NODE_ENV based on command

---

## 🎨 **Design Decisions**

### **Color Scheme**
- **Primary:** Black (#000000)
- **Accent:** Yellow (#FDB913)
- **Text:** White and Gray variations
- **Rationale:** High contrast, modern, matches Korean BBQ aesthetic

### **Typography**
- **Font:** Montserrat
- **Weights:** Normal (400) and Medium (500) primarily
- **Rationale:** Clean, modern, readable at all sizes

### **Layout**
- **Single-page application** with smooth scroll navigation
- **Mobile-first responsive design**
- **Sections:** Home, About, Menu, Karaoke Rooms, Gallery, Contact
- **Rationale:** Easy navigation, fast loading, modern UX

### **Form Design**
- **Auto-formatting** for phone and date
- **Visual feedback** on validation
- **Loading states** during submission
- **Success/error messages** for user clarity
- **Rationale:** Professional, user-friendly, reduces errors

---

## 📞 **Business Information**

**Restaurant:** Duba Korean BBQ & Karaoke Lounge
**Address:** 1333 W. Cheltenham Ave, Elkins Park, PA 19027
**Phone:** 215-635-DUBA (3822)
**Email:** duba.elkins@gmail.com

**Hours:**
- Friday-Saturday: 5PM - 2AM
- Sunday-Thursday: 5PM - 1AM

**Services:**
- Korean BBQ (featuring bb.q CHICKEN)
- 9 Private Karaoke Rooms
- Happy Hour Specials
- Delivery (GrubHub, Uber Eats, DoorDash)

---

## 🔗 **Links**

- **Live Site:** https://itsrichardmai.github.io/DubaKaraokePub2/
- **Repository:** https://github.com/itsrichardmai/DubaKaraokePub2
- **Facebook:** https://www.facebook.com/DubaElkinsPark/
- **Instagram:** https://www.instagram.com/duba_elkins/
- **TikTok:** https://www.tiktok.com/@duba_elkins

---

## 🤝 **Contributing**

To make changes to the website:

1. Clone the repository
2. Create a feature branch
3. Make your changes
4. Test locally with `npm run dev`
5. Test production build with `npm run build && npm run preview`
6. Commit and push
7. Create pull request
8. After merge, site auto-deploys

---

## 📄 **License**

MIT License - Feel free to use this code as reference for your own projects.

---

## 👤 **Developer Notes**

**Developer:** Built with assistance from Claude (Anthropic AI)
**Client:** Duba Korean BBQ & Karaoke Lounge
**Timeline:** December 2024
**Purpose:** Modern, professional web presence for restaurant and karaoke business

**Special Thanks:**
- EmailJS for free email service
- GitHub Pages for free hosting
- Anthropic Claude for development assistance

---

## 🎉 **Project Status**

✅ **COMPLETE AND DEPLOYED**

- [x] Design and layout
- [x] Content and copy
- [x] Menu system
- [x] Karaoke room information
- [x] Photo gallery
- [x] Contact form with email
- [x] Delivery service integration
- [x] Social media links
- [x] Mobile responsive
- [x] GitHub Pages deployment
- [x] Favicon
- [x] All issues resolved

**Next Steps (Future Enhancements):**
- [ ] Online ordering system
- [ ] Table reservation system
- [ ] Customer reviews integration
- [ ] Email newsletter signup
- [ ] Instagram feed
- [ ] Virtual tour
- [ ] Event calendar
- [ ] Gift cards

---

**Last Updated:** December 6, 2024
**Version:** 1.0.0
**Status:** Production / Live
