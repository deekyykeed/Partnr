# CTA Pill Button

Dark pill button with Framer-style layered depth shadow and inner white glow. Drop into any vanilla HTML site.

---

## CSS

```css
.h-btn {
  display: inline-flex;
  align-items: center;
  padding: 12px 24px;
  font-family: "Inter Tight", system-ui, sans-serif;
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 0;
  border-radius: 100px;
  cursor: pointer;
  text-decoration: none;
  overflow: hidden;
}

.h-btn-primary {
  background: #1c1c1c;
  color: #fff;
  border: none;
  transition: background .22s;
  box-shadow:
    inset 0px 0px 20px 1.64px rgba(255,255,255,0.15),
    0px 0.84px 0.50px -0.3125px rgba(0,0,0,0.13),
    0px 1.99px 1.19px -0.625px rgba(0,0,0,0.13),
    0px 3.63px 2.18px -0.9375px rgba(0,0,0,0.13),
    0px 6.04px 3.62px -1.25px rgba(0,0,0,0.13),
    0px 9.75px 5.85px -1.5625px rgba(0,0,0,0.13),
    0px 15.96px 9.57px -1.875px rgba(0,0,0,0.13),
    0px 27.48px 16.49px -2.1875px rgba(0,0,0,0.13),
    0px 50px 30px -2.5px rgba(0,0,0,0.13);
}

.h-btn-primary:hover { background: #3a3a3a; }

/* Mobile icon-only variant */
.btn-icon { display: none; }

@media (max-width: 900px) {
  .h-btn-primary .btn-slide { display: none; }
  .btn-icon { display: block; }
  .h-btn { width: 40px; height: 40px; padding: 0; border-radius: 50%; flex-shrink: 0; justify-content: center; }
}
```

## HTML

### Desktop — text button
```html
<button class="h-btn h-btn-primary">
  <span class="btn-slide">Commission a study</span>
</button>
```

### With mobile icon fallback
```html
<button class="h-btn h-btn-primary">
  <span class="btn-slide">Commission a study</span>
  <!-- swap SVG for any icon -->
  <svg class="btn-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14" width="16" height="16" aria-hidden="true">
    <path fill="#ffffff" fill-rule="evenodd" d="M11.8214 0.0977331c0.2883 -0.1052509 0.6005 -0.1264465 0.9005 -0.0610159 0.3029 0.0660858 0.5805 0.2177638 0.7997 0.4370018 0.2192 0.219238 0.3709 0.496818 0.437 0.799741 0.0654 0.29992 0.0442 0.6122 -0.061 0.90043l-3.574 10.71201 -0.0002 0.0007c-0.0871 0.2634 -0.2404 0.5001 -0.4453 0.6873 -0.2043 0.1867 -0.45301 0.3178 -0.72238 0.381 -0.26942 0.0657 -0.55131 0.0601 -0.81798 -0.0161 -0.26643 -0.0761 -0.50848 -0.2201 -0.70245 -0.4179l-1.91734 -1.9086 -2.01406 1.0415c-0.15705 0.0812 -0.34532 0.0734 -0.49515 -0.0205 -0.14982 -0.0938 -0.23893 -0.2599 -0.23434 -0.4366l0.08257 -3.18376 7.04493 -5.11741c0.2793 -0.20286 0.3413 -0.59371 0.1384 -0.87298 -0.2029 -0.27928 -0.59371 -0.34122 -0.87299 -0.13836L2.20283 8.0884 0.473125 6.35869l-0.000058 -0.00005 -0.000126 -0.00013c-0.187323 -0.18719 -0.325225 -0.41797 -0.4013217 -0.67163 -0.07555546 -0.25185 -0.0878308 -0.51841 -0.0357814 -0.77609 0.0521166 -0.28151 0.1779581 -0.54421 0.3647391 -0.76128 0.18806 -0.21856 0.431073 -0.38293 0.703923 -0.47612l0.00337 -0.00115L11.8214 0.0977331Z" clip-rule="evenodd"/>
  </svg>
</button>
```

### Inside email pill wrapper
```html
<div class="hero-input-wrap">
  <input class="hero-input" type="email" placeholder="Your work email" />
  <button class="h-btn h-btn-primary">
    <span class="btn-slide">Commission a study</span>
    <svg class="btn-icon" ...></svg>
  </button>
</div>
```

```css
.hero-input-wrap {
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 6px;
  background: #fff;
  border: 1px solid #D9D4C7;
  border-radius: 100px;
  padding: 8px 8px 8px 20px;
  box-shadow: 0 1px 4px rgba(0,0,0,.06);
}
.hero-input {
  flex: 1;
  border: none; outline: none; background: transparent;
  font-size: 15px;
  min-width: 0;
}
```

---

**Shadow source:** Framer EarlyBird component, inspected via browser DevTools.  
**Hover:** `#3a3a3a` — simple colour shift, no animation.  
**Mobile:** collapses to 40×40 circle, hides text, shows icon.
