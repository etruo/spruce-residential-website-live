# Spruce Residential — Website

A modern, warm Next.js website for Spruce Residential property management in Wichita, KS.

## Features

- **Framer Motion animations** — smooth scroll reveals, parallax floating elements, staggered card animations
- **Testimonials carousel** — auto-advancing with manual controls and swipe-style transitions
- **Contact form** — animated focus states, form validation, success state (wire up to your email service)
- **AppFolio integration** — listings iframe auto-syncs with your AppFolio vacancies, portal links throughout
- **Fully responsive** — mobile-first design with collapsible nav
- **Tailwind CSS** — custom Spruce brand tokens (sage, terracotta, cream)

## Quick Start

```bash
# Install dependencies
npm install

# Run dev server
npm run dev

# Build for production
npm run build
```

## Deploy to Vercel

### First time setup:

1. Create a GitHub repo and push this project:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/spruce-residential.git
   git push -u origin main
   ```

2. Go to [vercel.com](https://vercel.com) and sign up with your GitHub account

3. Click **"Add New Project"** → Import your `spruce-residential` repo

4. Vercel auto-detects Next.js — just click **Deploy**

5. Your site is live at `spruce-residential.vercel.app`

### Connect your Namecheap domain:

1. In Vercel dashboard → your project → **Settings** → **Domains**
2. Add `spruceresidential.com` (and `www.spruceresidential.com`)
3. Vercel gives you DNS records to add
4. In Namecheap → **Domain List** → your domain → **Advanced DNS**:
   - Add an **A Record**: Host `@`, Value = Vercel's IP (usually `76.76.21.21`)
   - Add a **CNAME Record**: Host `www`, Value = `cname.vercel-dns.com`
5. Wait 10-30 min for DNS propagation
6. Vercel auto-provisions SSL — no extra steps

### Future updates:

```bash
# Make changes, then:
git add .
git commit -m "Update homepage copy"
git push
# Vercel auto-deploys on every push to main
```

## Customization

### AppFolio URLs
Update your AppFolio domain in these files:
- `components/Navbar.js` — `APPFOLIO_PORTAL` constant
- `components/Portal.js` — `APPFOLIO_PORTAL` constant
- `components/Listings.js` — iframe `src` URL
- `components/Footer.js` — `APPFOLIO_PORTAL` constant

### Contact Form
The contact form in `components/Contact.js` currently shows a success state without sending.
To make it functional, options include:
- **Formspree** (free tier) — easiest, no backend needed
- **Next.js API route** + Resend/SendGrid — add `app/api/contact/route.js`
- **Netlify Forms** — if you ever move to Netlify

### Testimonials
Edit the `testimonials` array in `components/Testimonials.js` to add real resident quotes.

### Contact Info
Update phone number and email in:
- `components/Contact.js`
- `components/Footer.js`

## Project Structure

```
spruce-residential/
├── app/
│   ├── globals.css        # Tailwind + custom styles
│   ├── layout.js          # Root layout with metadata
│   └── page.js            # Main page composing all sections
├── components/
│   ├── Animations.js      # Reusable motion components
│   ├── AnimatedCounter.js  # Number counter animation
│   ├── Navbar.js          # Fixed nav with mobile menu
│   ├── Hero.js            # Hero with floating accents
│   ├── Values.js          # Why Spruce cards
│   ├── Listings.js        # AppFolio iframe embed
│   ├── Testimonials.js    # Auto-advancing carousel
│   ├── Portal.js          # Resident portal CTA
│   ├── About.js           # Story + values cards
│   ├── Contact.js         # Contact form + info
│   └── Footer.js          # Site footer
├── tailwind.config.js     # Brand colors + fonts
├── next.config.js
└── package.json
```
