# Ganapati Deeksha Mala

A devotional, GitHub Pages-friendly website for displaying the names of people who took Ganapati Deeksha (mala) during Vinayaka Chaturthi.

## Files

- `index.html` — page structure
- `style.css` — complete visual design, colours, animations and responsive layout
- `data.js` — **the only file you normally need to edit for names**
- `script.js` — website behavior

## Adding names

Open `data.js`.

Example:

```js
"2027": [
  "Ravi Kumar",
  "Suresh Reddy",
  "Anil Kumar"
]
```

Add a comma after the previous year's closing `]` and add the new year.

The website automatically creates a button/card for every year found in `data.js`, so you do not need to edit `index.html` or `script.js` when adding future years.

## Changing colours/design

Open `style.css`. At the top are the main colour variables:

```css
--maroon-800: #5a160f;
--saffron: #d86f16;
--gold: #d9a441;
--gold-light: #f5d58a;
--cream: #fff6df;
```

Changing these values lets you change the overall theme.

## GitHub Pages

Upload all three website files (`index.html`, `style.css`, `data.js`, `script.js`) to the same folder in your repository.

Then enable GitHub Pages from:

Repository → Settings → Pages → Deploy from a branch → `main` → `/ (root)`

## Important

This website is static, so there is no database. When you change `data.js` and push/commit the change to GitHub, GitHub Pages rebuilds the site and the new names appear.

For future years, only `data.js` needs to be edited.
