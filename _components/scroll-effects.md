# Scroll Effects

Reusable scroll effects. Drop the CSS + JS snippets into any vanilla HTML site.

---

## 1. Hero Scroll Exit (blur + shrink)

The hero sticks in place while the next section slides over it. As it gets covered, it blurs and shrinks into the distance.

**CSS** — on the hero element and all sections after it:
```css
.hero {
  position: sticky;
  top: 0;
  z-index: 0;
  transform-origin: center 40%;
  will-change: filter, transform;
}
section, footer {
  position: relative;
  z-index: 1;
}
```

**JS** — paste before `</script>`:
```js
(function heroScrollExit() {
  const hero = document.querySelector('.hero');
  if (!hero) return;
  window.addEventListener('scroll', () => {
    const t = Math.min(window.scrollY / hero.offsetHeight, 1);
    hero.style.filter    = t > 0 ? `blur(${(t * 12).toFixed(2)}px)` : '';
    hero.style.transform = t > 0 ? `scale(${(1 - t * 0.06).toFixed(4)})` : '';
  }, { passive: true });
})();
```

**Tune:**
- `12` — max blur in px
- `0.06` — how much it shrinks (0.06 = shrinks to 94%)
- `center 40%` — point it shrinks toward (raise to push vanishing point up)

---

## 2. CSS Scroll Snap

Snaps the viewport to section boundaries as the user scrolls. `proximity` = snaps when near, never traps the user.

**CSS** — 2 lines, nothing else needed:
```css
html { scroll-snap-type: y proximity; }
.hero, .services { scroll-snap-align: start; }
```

**To snap all sections:**
```css
html { scroll-snap-type: y proximity; }
header, section, footer { scroll-snap-align: start; }
```

**To snap only hero → section 2, triggering at 50% visible:**
```css
html { scroll-snap-type: y proximity; }
.hero { scroll-snap-align: start; }
.services { scroll-snap-align: center; }
```
`center` = snaps when the section's midpoint hits the viewport midpoint — feels like it pulls in once it's halfway on screen.

**Modes:**
| `mandatory` | Always snaps — only use if every section is ~100dvh |
| `proximity` | Snaps when close — safe for any page |
