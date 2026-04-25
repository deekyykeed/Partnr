# Partnr Button

Token-driven pill button. Framer-style layered shadow on the primary variant. Drop into any vanilla HTML site.

**Preview:** open `preview.html` in a browser to see all variants.

---

## How to use

### 1. Link the stylesheet

Path is relative to the file you're linking from. From a client site at `clients/[name]/site/index.html`:

```html
<link rel="stylesheet" href="../../../components/buttons/button.css">
```

### 2. Drop in the markup

```html
<button class="p-btn p-btn--primary">Book a consultation</button>
<a href="..." class="p-btn p-btn--ghost p-btn--lg">Our services</a>
```

### 3. Theme per site (optional)

Override the tokens in your site's `:root`:

```css
:root {
  --p-btn-font-family: 'Plus Jakarta Sans', sans-serif;
  --p-btn-radius: 8px;        /* squared instead of pill */
  --p-btn-bg: #0E0D0B;        /* AMC near-black */
  --p-btn-bg-hover: #252320;
}
```

---

## Variants

| Class | Effect |
|---|---|
| `.p-btn` | Base — required on every button |
| `.p-btn--primary` | Solid fill + layered Framer shadow |
| `.p-btn--ghost` | Transparent, 1.5px outline using current text color |
| `.p-btn--sm` | Smaller padding + 14px text |
| `.p-btn--lg` | Larger padding + 17px text |
| `.p-btn--responsive` | Collapses to 40×40 icon circle below 768px (requires `.p-btn__icon` child) |

---

## Tokens

All overrideable per site or per-button (inline `style=`):

| Token | Default | Purpose |
|---|---|---|
| `--p-btn-bg` | `#1c1c1c` | Background |
| `--p-btn-fg` | `#ffffff` | Text color |
| `--p-btn-bg-hover` | `#3a3a3a` | Hover background |
| `--p-btn-radius` | `100px` | Corner radius (set to 8px for squared) |
| `--p-btn-padding-y` | `12px` | Vertical padding |
| `--p-btn-padding-x` | `24px` | Horizontal padding |
| `--p-btn-font-size` | `16px` | Type size |
| `--p-btn-font-weight` | `600` | Type weight |
| `--p-btn-font-family` | `inherit` | Font stack |
| `--p-btn-letter-spacing` | `0` | Tracking |
| `--p-btn-gap` | `8px` | Gap between label and icon |
| `--p-btn-shadow` | Framer 9-layer | Box shadow on primary |
| `--p-btn-icon-size` | `40px` | Mobile icon-circle size |

---

## Edit globally vs per-site

- **Global change** (every site updates) → edit `components/buttons/button.css`
- **Per-site change** → override tokens in that site's own CSS, leave the library alone

Source of truth lives here. Each client site links to it, no copy-paste.
