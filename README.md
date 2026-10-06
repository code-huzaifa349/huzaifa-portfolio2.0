# Huzaifa Khan — Portfolio

Personal portfolio of **Muhammad Huzaifa Khan**, a web developer and ethical hacker in training from Hyderabad, Pakistan.

## Features
- Live interactive terminal (try `help`, `scan`, or find the secret command)
- Particle-network background that reacts to the mouse
- 3D-tilt cards with cursor spotlight, magnetic buttons and a ring cursor
- Live project previews (password generator, clock, port scan)
- "Hack my portfolio" mini CTF with 3 levels
- Certificates: year-grouped grid of equal cards with thumbnails (compact cards for certificates without an image), a "Verifiable online" filter, and a lightbox with captions and arrow-key navigation
- Scroll progress bar, reveal animations, tech marquee
- Responsive, keyboard-friendly, respects reduced-motion settings

## Project structure
```
huzaifa-portfolio/
├── index.html
├── favicon.svg
├── img/                     certificate images (full size, opened in the lightbox)
│   └── thumbs/              small versions shown in the grid
├── css/style.css
├── js/main.js
└── README.md
```

## Run locally
Open `index.html` in your browser. No build step or dependencies needed.

## Deploy on GitHub Pages
1. Push all files to a GitHub repository.
2. Go to **Settings → Pages**.
3. Under **Build and deployment**, choose the `main` branch and the `/ (root)` folder, then save.
4. Your site goes live at https://code-huzaifa349.github.io/huzaifa-portfolio2.0

## Customize
- Text and links: edit `index.html`
- Colors: change the variables at the top of `css/style.css` (`--v`, `--a`, `--c`)
- Terminal commands and CTF flags: edit `js/main.js`
- Add another certificate: save the full image in `img/` and a ~640px wide copy in `img/thumbs/`, then copy a `.ct-card` block into the right year group in `index.html` (a certificate without an image uses the compact `.ct-card--lite` version, kept inside a `.ct-stack`)

## Contact
- Email: codehuzaifa349@gmail.com
- GitHub: https://github.com/code-huzaifa349
- LinkedIn: https://www.linkedin.com/in/huzaifa-khan-bb3660435/
- TikTok: https://www.tiktok.com/@code.huzaifa

Built with HTML, CSS and JavaScript.
