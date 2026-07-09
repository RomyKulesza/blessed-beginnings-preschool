# Blessed Beginnings Preschool — Website

A fast, mobile-friendly website built from the school's content, with a **no-code editor** so staff can update text and photos without touching code.

## ✏️ How to edit the website (no code needed)

1. Go to **your-site-address.com/admin/**
2. Log in with the email you were invited with.
3. Click any page (Home, Our Mission, Our Staff, etc.).
4. Change the text or click a photo to upload a new one.
5. Click **Publish** (top right). Your change goes live in about a minute.

That's it — no code, no software to install.

## 🗂️ What's here

- `src/_data/*.json` — all the page content (edited through the admin panel)
- `src/*.njk` — page templates (layout)
- `src/assets/` — styles and photos
- `src/admin/` — the no-code editor (Decap CMS)

## 🛠️ For developers

```bash
npm install     # one time
npm start       # local preview at http://localhost:8080
npm run build   # build the site into _site/
```

Built with [Eleventy](https://www.11ty.dev/). Content editing via [Decap CMS](https://decapcms.org/). Hosted on Netlify.

## 📌 Notes / to-do

- **Romy's staff photo** is very low resolution (only what the old site had). Upload a better one via the admin panel → Our Staff.
- **Tuition rates** and the **school calendar** were out of date on the old site (2019/2020 and 2024/2025), so they were left off. Current rates can be added via the Contact page or a new page when confirmed.
- The old Joomla site had a logo — add a real logo image if desired.
