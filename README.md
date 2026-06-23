# Jahidul Islam Jony — Portfolio

A single-page portfolio site. Navy background with an animated, slowly drifting
neural-network canvas (nodes + connecting lines + the occasional signal pulse —
a nod to your ML focus rather than a generic gradient). Serif headlines, mono
accents for the CS/data feel, scroll-reveal animations, mobile responsive.

```
portfolio/
├── index.html        ← page structure (you shouldn't need to touch this)
├── css/style.css      ← all styling
├── js/
│   ├── config.js       ← YOUR CONTENT LIVES HERE — edit this file only
│   └── main.js          ← rendering + animation logic (no personal data in here)
├── assets/
│   └── avatar-placeholder.svg   ← swap this for your real photo
└── README.md           ← this file
```

## 1. Editing your content

Open `js/config.js`. Every field is commented. Change a value, save the file —
that's it. You don't need to touch `index.html`, `style.css`, or `main.js` for
routine updates (name, bio, links, skills, education, projects, email).

**To change your photo:** drop a new image file into `assets/` (a roughly
square image, 600×600px or larger, works best) and update the `avatar:` path
in `config.js` to match, e.g. `avatar: "assets/me.jpg"`.

**To add a real project** (once you have one to show), edit the empty
`projects: []` array in `config.js` — there's a commented example showing the
exact shape to follow. Add as many objects as you like; the empty "coming
soon" state disappears automatically once the array isn't empty.

**On "no one can see your edit history":** when you change `config.js` and
push the update, visitors to your live site only ever see the current
version — there's no version log or "last edited" trail on the page itself.
One caveat worth knowing: if your GitHub repository itself is **public**,
anyone who specifically visits your repo's "Commits" tab on github.com (not
your portfolio site) could technically see your commit history, since that's
how Git and GitHub work. If you want that closed off too, two options:
keep the repository **private** (GitHub Pages still works from a private
repo on a free personal account), or don't worry about it — almost no
visitor to a portfolio site goes spelunking through its Git history.

## 2. Preview locally before pushing

You need a tiny local server (opening `index.html` directly with `file://`
will mostly work, but the canvas/fetch behavior is more reliable over HTTP).
From the `portfolio` folder:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000` in your browser. Stop the server with
`Ctrl+C` when done.

## 3. Push it to GitHub

If you don't already have Git installed, install it first (`git --version`
to check). Then, from inside the `portfolio` folder:

```bash
git init
git add .
git commit -m "Initial portfolio site"
```

Create a new **empty** repository on GitHub (no README/license, you already
have files): go to github.com → New repository → name it, for example,
`portfolio` → Create repository (don't initialize with any files).

GitHub will show you a remote URL. Connect and push:

```bash
git branch -M main
git remote add origin https://github.com/theTerminatorrr/portfolio.git
git push -u origin main
```

(Replace the URL if you named the repo something else.)

**Future updates:** after editing `config.js` (or swapping your photo),
just run:

```bash
git add .
git commit -m "Update bio and photo"
git push
```

## 4. Deploy with GitHub Pages (free, what the "push to GitHub" guide above sets you up for)

1. On your repo's GitHub page, go to **Settings → Pages**.
2. Under "Build and deployment," set **Source** to "Deploy from a branch."
3. Set **Branch** to `main` and folder to `/ (root)`. Save.
4. GitHub builds the site in under a minute. Your URL will be:
   `https://theTerminatorrr.github.io/portfolio/`
5. Every time you `git push` after that, the live site updates automatically
   within a minute or two — no extra step.

**Custom domain (optional):** if you buy a domain later, add it under the
same Pages settings screen and point your domain's DNS to GitHub's servers
(GitHub shows you the exact records to add).

## 5. Alternatives to GitHub Pages

GitHub Pages is the simplest path since you're already pushing to GitHub.
If you ever want faster global delivery, deploy previews per branch, or a
private repo without a paid GitHub plan, both of these connect directly to
your GitHub repo and redeploy automatically on every push, free tier covers
this comfortably:

- **Netlify** — netlify.com → "Add new site" → "Import from GitHub" → pick
  the repo → deploy (no build command needed, it's a static site).
- **Vercel** — vercel.com → "Add New Project" → import the GitHub repo →
  deploy.

## 6. About the contact method

You chose a `mailto:` link for contact, which is genuinely zero-setup: it
opens the visitor's own email client addressed to you. The trade-off is that
it requires the visitor to have an email client configured on their device —
it won't work cleanly if someone's only using webmail in a browser with no
default mail app set. If that becomes an issue, a service like Formspree
(free tier) gives you a real in-page form that emails you directly without a
backend — say the word and I can wire that in later.
