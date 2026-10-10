# Hesam Afkhami — Personal Portfolio & Tech Journal

A responsive, static personal website for sharing software-engineering learning notes and web-development experiments. Built with semantic HTML, CSS, and a small amount of vanilla JavaScript.

## Pages

- `index.html` — landing page and featured articles
- `about.html` — background and learning approach
- `blog.html` — searchable journal listing
- `posts/` — full article pages
- `contact.html` — email link (no server-side contact form)

## Run locally

Open `index.html` in a modern browser, or serve this folder with any static HTTP server. Google Fonts are loaded from a CDN; system fallbacks remain available offline.

## Deployment

This is a static site and can be hosted on GitHub Pages. In repository settings, choose the `main` branch and `/ (root)` as the Pages source after pushing the files.

## Known limitations

- The site has no backend, CMS, analytics, or message-submission endpoint. The contact button opens the visitor's email application.
- Article content is a learning journal and may evolve; it should not be read as a claim of professional experience beyond the stated background.
- No third-party images are required; card art is created with CSS.

## Quality checks

GitHub Actions parses each HTML page and verifies local relative links and key accessibility metadata on pushes and pull requests. This automated check is not a substitute for manual browser/device testing.
