# Deedee Salmon Foundation — Website

A static, 7-page website. No build step, no framework, no dependencies to install.
Open any `.html` file in a browser to view it locally, or deploy the whole folder as-is.

## Files

```
index.html              Home
about.html               Who We Are / Our Why
pillars.html              The Three Pillars
give.html                  Ways to Partner (overview)
golf-tournament.html    Golf Tournament flyer + sponsorship levels
legacy-giving.html        Legacy Giving Partner options
contact.html               Contact form (also handles sponsorship/giving requests)
styles.css                  Shared styles for all pages
nav.js                     Mobile nav menu toggle
```

Every page links to the same `styles.css` and `nav.js`, so editing either file
updates the whole site at once. Keep all files in the same folder.

## Launching today: what's real vs. what's a placeholder

This site is ready to go live as-is, but a few pieces are placeholders you'll
want to swap out as soon as you have the real details:

**Golf Tournament flyer** (`golf-tournament.html`)
There's a dashed placeholder box where the flyer image goes. Once you have the
flyer designed, replace it:
```html
<!-- replace this -->
<div class="flyer-frame" aria-hidden="true"><span>...</span></div>

<!-- with this -->
<div class="flyer-frame">
  <img class="photo-frame" src="images/golf-flyer.jpg" alt="2026 Annual Golf Tournament flyer">
</div>
```

**Sponsorship availability** (`golf-tournament.html`)
Four tiers are built in as a starting point (Presenting $5,000, Eagle $2,500,
Birdie $1,000, Hole $250) with sample pricing and benefits. Edit the text
directly to match your real tiers and prices.

To mark a tier as taken once it sells, on that tier's `.tier-card`:
1. Add the class `is-taken` to the card (`class="tier-card is-taken"`)
2. Change its badge to `<span class="status-badge status-taken">Taken</span>`
3. Replace its button with:
   `<a class="btn btn-outline" aria-disabled="true">Currently Sponsored</a>`

The Eagle Sponsor tier is already set up this way as a working example.

Because this is a static site, there's no live database, so this status only
updates when you edit the file and re-upload it. That's normal for a site
this size, and it's easy: open the file, make the change, save, re-deploy.

**"Reserve"/"Give" buttons** (`golf-tournament.html`, `legacy-giving.html`)
Right now these route to the Contact form, prefilled with which sponsorship
tier or giving frequency someone picked, so the family can follow up directly
by email. Once you set up an actual donation platform (Givebutter, PayPal,
Stripe, etc.), swap each button's `href` for your real payment link instead.

**Contact form** (`contact.html`)
Shows a "message sent" confirmation in the browser but doesn't send an email
yet. To make it functional, connect it to a form service like Formspree or
Netlify Forms, or ask for help wiring that up once you've picked a host.

## Editing content

Each page is plain HTML — text, links, and section order can be edited
directly. Colors, fonts, spacing, and responsive (mobile/desktop) behavior all
live in `styles.css` under one set of CSS variables at the top:

```css
:root {
  --obsidian: #111111;
  --bone: #D8CFBC;
  --tobacco: #8A5A2B;
  --biking-red: #800020;
  --eclipse-blue: #0B1D34;
  --olive: #6B6F4E;
}
```

## Adding photos

Placeholder slots are already sized correctly:
- `.portrait-slot` — About page, 3:4 ratio
- `.pillar-photo-slot` — Pillars page, 4:3 ratio
- `.flyer-frame` — Golf Tournament page, 8.5:11 (flyer) ratio

To swap a placeholder `<div>` for a real photo, replace it with:
```html
<img class="photo-frame" src="images/your-photo.jpg" alt="Description">
```
(Create an `images/` folder next to the HTML files and reference photos from there.)

## Deploying

This is a plain static site, so any static host works.

**Netlify (drag and drop) — fastest for today**
1. Go to app.netlify.com/drop
2. Drag this whole folder into the browser window
3. Done — you'll get a live URL immediately

**GitHub Pages**
1. Create a new GitHub repo and push these files to it
2. In the repo Settings → Pages, set the source to the main branch
3. Your site will be live at `https://yourusername.github.io/reponame`

**Any other host (Bluehost, GoDaddy, etc.)**
Upload all files via FTP/file manager into your site's public folder
(often called `public_html` or `www`). Keep them all in the same directory.
