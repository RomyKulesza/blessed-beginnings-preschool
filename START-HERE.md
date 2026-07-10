# Blessed Beginnings Preschool Website — Start Here

Welcome! This is your new website, and this guide has **everything you need to run it yourself** — no web designer or developer required.

It has three parts: **Part A** — putting the site online, **Part B** — editing it, and **Part C** — things to know. Follow Part A once to get online; after that you'll live in Part B. Take it one numbered step at a time — you've got this. 🌈

> **Tip:** Do Part A on a computer (not a phone), and give yourself about 20–30 minutes for the one-time setup.

---

# PART A — Putting the site online (one-time setup)

You do this **once**. It uses two free services:
- **GitHub** — stores the website's files.
- **Netlify** — hosts the site (gives it a web address) and powers the `/admin` editor login.

Both are free for a site this size.

### Step 1 — Create a free GitHub account
1. Go to **github.com** → **Sign up**. Use the preschool's email.
2. Verify the email and finish signup.

### Step 2 — Create a repository and upload the website files (drag & drop, no coding)
1. **Unzip** the website files you were sent (you'll get a folder called `blessed-beginnings-preschool`).
2. On GitHub, click the **+** in the top-right corner → **New repository.**
3. Name it `blessed-beginnings-preschool`, leave it set to **Public**, and click **Create repository.**
4. On the next screen, click the blue link that says **"uploading an existing file."**
5. Open the unzipped folder on your computer, **select everything inside it** (all the files and folders — use Ctrl+A / Cmd+A), and **drag them into the upload box** in your browser.
6. When the files finish uploading, scroll down and click the green **Commit changes** button.

Your website's files are now on GitHub. ✅ *(No command line, no coding — just dragging files.)*

### Step 3 — Create a free Netlify account and connect the site
1. Go to **netlify.com** → **Sign up** → choose **"Sign up with GitHub"** (easiest).
2. Click **Add new site → Import an existing project → GitHub**.
3. Authorize Netlify to access GitHub, then pick the `blessed-beginnings-preschool` repository.
4. Netlify already knows how to build it (settings are included). Click **Deploy**.
5. After ~1 minute you get a live address like `random-name.netlify.app`. Your site is on the internet! 🎉
   *(You can rename it: Site configuration → Change site name → e.g. `blessed-beginnings`.)*

### Step 4 — Turn on the editor login (Netlify Identity)
1. In your Netlify site, open **Site configuration → Identity** and click **Enable Identity**.
2. Under **Identity → Registration**, set it to **Invite only** (so only staff can log in).
3. Under **Identity → Services → Git Gateway**, click **Enable Git Gateway**.
   *(This is what lets the `/admin` editor save your changes.)*

### Step 5 — Invite yourself (and any other editors)
1. Still under **Identity**, click **Invite users** and enter the email(s) of whoever will edit the site.
2. Each person gets an email → they click the link → set a password.
3. They can now log in at **your-address/admin**.

### Step 6 (optional) — Use your real web address
To use `blessedbeginningspreschool.org` instead of the `.netlify.app` name:
1. Netlify → **Domain management → Add a domain** → type your domain.
2. Follow Netlify's on-screen instructions to point the domain (done at wherever the domain was purchased, e.g. GoDaddy). Netlify adds a free security certificate automatically.

**✅ Once Steps 1–5 are done, the site is live and fully editable.**

---

# PART B — Making edits (everyday use)

### Logging in
1. Go to your website address + **`/admin`** (e.g. `blessedbeginningspreschool.org/admin`).
2. Click **Login with Netlify Identity**, enter your email and password.

### Change words on a page
Website Pages → pick a page → edit the boxes → **Publish → Publish now**. Live in ~1 minute.
*(Blank line between paragraphs = new paragraph.)*

### Replace a photo
Open the page → click the photo → **Upload** a new one → **Publish**.
Or use **Media** (top of dashboard) to manage every image in one place.

### Add a whole new page
1. **Add / Edit Pages → New Page**.
2. Give it a title, pick a header color, leave **"Show in top menu?"** on.
3. Under **Sections**, click **Add Section** and choose from:
   Heading · Text · Image · Image + Text · **Photo Gallery** · Info Cards · **Video** · Buttons · **Color Banner**.
4. Add/drag/delete sections as you like → **Publish**. It's live and in the menu automatically.

### Change the menu, phone, address, or logo
Website Pages → **Site Settings** → edit → **Publish**.

### Add a video
Get an embed link and paste it into a **Video** section:
- **YouTube:** `https://www.youtube.com/embed/VIDEO-ID`
- **Google Drive:** set the file to *"Anyone with the link,"* then use `https://drive.google.com/file/d/FILE-ID/preview`

### Change colors or fonts
Website Pages → **Design — Colors & Fonts** → adjust any color or pick a font → **Publish**. It updates across the whole site.

### Edit the loading & "page not found" screens
Website Pages → **Loading & Error Screens** → change the loading message or the friendly not-found text → **Publish**. *(The logo on both comes from Site Settings.)*

> 📘 A friendlier, illustrated version of this is in **EDITOR-GUIDE.md**.

---

# PART C — Good to know

- **How publishing works:** when you click *Publish*, your change is saved to GitHub, Netlify automatically rebuilds the site, and it's live in about a minute. You never touch code.
- **Cost:** free on both GitHub and Netlify at this site's size.
- **Backups / history:** every change is saved forever in GitHub — nothing is ever truly lost, and a developer can undo any change.
- **You can't break it permanently.** If something looks off, just edit again and re-publish.
- **Nothing needs a developer for normal use.** Words, photos, pages, menu links — and even the site's **colors and fonts** — are all editable in `/admin`. To change the look, open **Website Pages → Design — Colors & Fonts**, adjust any color or pick a new font, and Publish. It updates across the whole site.

### A couple of content notes (from the old Joomla site)
- **Tuition rates** and the **school calendar** were out of date on the old site (2019/2020 and 2024/2025), so they were left off. Add current ones anytime via a new page or the Contact page.
- The **staff photo of Romy** is low-resolution (that's all the old site had) — upload a sharper one via **Website Pages → Our Staff Page**.

### Who does what
- **Everything about the website's content and look** — text, photos, pages, menu, colors, and fonts: you, through `/admin`.
- **Only rare technical tasks** (first-time custom domain hookup, or if the hosting ever needs attention): a developer. Nothing about editing the site requires one.

---

*Site built with Eleventy (site generator) + Decap CMS (the no-code editor) + Netlify (hosting). All free, open tools.*
