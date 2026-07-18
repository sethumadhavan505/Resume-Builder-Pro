# Folio — Resume Builder

A plain HTML/CSS/JS resume builder: fill in a form on the left, watch a live
preview on the right, switch templates, save your draft, and export to PDF.
No build step — deploys straight to GitHub Pages.

## Run it locally

Just open `index.html` in a browser, or serve it locally:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Push to GitHub

```bash
git init
git add .
git commit -m "Initial resume builder"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/resume-builder.git
git push -u origin main
```

## Deploy with GitHub Pages

1. Go to your repo on GitHub → **Settings** → **Pages**.
2. Under **Build and deployment**, set **Source** to `Deploy from a branch`.
3. Set **Branch** to `main` and folder to `/ (root)`. Save.
4. Wait ~1 minute — your site will be live at:
   `https://YOUR-USERNAME.github.io/resume-builder/`

Every time you `git push` to `main`, the live site updates automatically.

## What's here now vs. what's next

This starter covers the core builder: form → live preview → templates →
local save (via `localStorage`) → PDF export. It's fully static, so it's
perfect for GitHub Pages as-is.

For the **full app** features you mentioned — real user accounts, resumes
saved to the cloud (not just this browser), and payments for premium
templates — you'll add:

- **Firebase** (Auth + Firestore) — works with plain JS via the Firebase SDK
  `<script>` tags, no build tools required. Swap the `persist()` /
  `loadFromStorage()` functions in `script.js` for Firestore reads/writes.
- **Stripe Checkout** — for selling the "Premium" tier (e.g. the locked
  Editorial template). This needs a small serverless function, since Stripe
  secret keys can't live in frontend JS — a free Vercel or Netlify function
  works well and still deploys from the same GitHub repo.

Happy to build either of those next when you're ready.
