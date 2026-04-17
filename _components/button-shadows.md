# Button Shadows

Reusable box-shadow values for buttons. Drop into any CSS.

---

## Layered Depth Shadow (from Framer)

Inset white glow + 8-layer smooth drop shadow. Works best on dark buttons.

```css
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
```

**What it does:**
- `inset 0 0 20px rgba(255,255,255,0.15)` — soft inner white glow, makes the button feel lit from within
- The 8 outer layers use progressively larger offsets and spreads with negative spread values — creates a smooth, realistic depth falloff

**Works on:** dark buttons (`#1c1c1c`, `#000`, deep navy etc.)  
**For light buttons:** remove the inset layer and increase opacity of outer layers to ~0.08
