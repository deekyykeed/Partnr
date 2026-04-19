---
type: index
tags: [partnr, status, active]
updated: 2026-04-19
---

# Partnr — Project Memory

**Last updated:** 19 April 2026

---

## Next Session

- [ ] **AMC — send live URL to Edwin**: site is live at partnr-five.vercel.app — share and book review call
- [ ] **AMC — get real stats from Edwin**: Projects delivered, Countries, Capex advised, Senior engineers (count-up KPIs; hero placeholders still in)
- [ ] **AMC — Map section decision**: keep (office footprint) or remove/replace? Ask Edwin or decide before next build session
- [ ] **AMC — Contact section**: update from fictional JHB/London addresses to real AMC Kitwe details (emukonka@amc-africa.com)
- [ ] **AMC — Clients section**: swap fictional logos (Katanga, Birimian…) for real clients (Glencore, Anglo American, FQM, Lonmin, Rio Algom)
- [ ] **AMC — Nav "est. 1998"** → should be 1994 per copy doc
- [ ] **AMC — Team section**: fictional names — replace with real AMC principals when Edwin provides them
- [ ] **AMC — style guide + component system**: build shared HTML/CSS component library for all Partnr clients
- [ ] **New client Doc**: consulting monetization site — gather details (brand, niche, tone) and start build
- [ ] **M&J Zambia — draft reply to Tamuka**: 5 specific improvements + grand slam offer framing — HOT, still unsent
- [ ] **NGM — check updated ngmzambia.com and respond to Serge**
- [ ] **Nolands — pitch Access Learning Hub to Kelvin Chungu** (+260 211 355267 / kelvinc@nolands.co.zm)
- [ ] Follow up Aston AIR (Kalasa) if no reply
- [ ] Sync `Sales & Outreach/partnr_leads_master.xlsx` to match `Outreach/` (stale)

---

## What is Partnr

A web design + AI agency targeting established SMEs in Zambia (Kitwe & Lusaka). Offer: website refresh + AI layer (AIOS). Go-to-market via cold email outreach.

---

## Active Deal

### [[AMC Africa Client File|AMC Africa]] (African Mining Consultants Ltd)
- **Status:** Active Deal — concept built and live, pending Edwin review
- **Contact:** Edwin Mukonka, GM / Principal Consultant — emukonka@amc-africa.com · +260 96 682 5144
- **Live concept:** partnr-five.vercel.app
- **History:** Cold email sent ~late Mar 2026 → Edwin replied same day (24 Mar) → Call 1 Apr (underprepared) → Call 2 Apr (green light to build concept) → Site built and deployed 19 Apr
- **Next:** Send Edwin the live URL, book review call, get real stats for KPI placeholders
- **Notes:** Edwin forwarded the cold email himself. First Partnr client to reply. Strong case study potential — clients include Glencore, Anglo American, FQM.

---

## Outreach Summary (as of 7 Apr 2026)

| Status | Count |
|---|---|
| Active Deal | 1 (AMC Africa) |
| Replied — warm | 3 (M&J Zambia, Aston AIR, NGM) |
| Replied — cold/no reply | 2 (FY Cargo — dead, Malisa & Partners — auto-receipt only) |
| Replied — pending angle | 1 (Nolands — Access Learning Hub, Kelvin Chungu +260 211 355267) |
| Sent | ~45 |
| Not Contacted | ~65 |
| **Total in pipeline** | **111** |

**Contacts saved this session:**
- Kelvin Chungu (Nolands Zambia, Managing Partner): kelvinc@nolands.co.zm · +260 211 355267
- Tamuka James Chinzvende (M&J Zambia): tj@mjgroup.africa · +260 630 372 410

**Source of truth:** `Outreach/partnr_leads_master.xlsx`  
Note: `Sales & Outreach/partnr_leads_master.xlsx` is stale (only reflects ~10 leads) — needs syncing.

---

## Pending / Next Session

- [ ] M&J Zambia — reply to Tamuka with 5 specific site improvements (HOT)
- [ ] NGM — check updated site, respond to Serge
- [ ] AMC — get real stats from Edwin (5 placeholders), continue section by section
- [ ] Nolands — pitch Access Learning Hub angle to Kelvin Chungu
- [ ] Follow up Aston AIR (Kalasa) if no reply end of week
- [ ] Sync `Sales & Outreach/partnr_leads_master.xlsx` with `Outreach/` version
- [ ] Gather AMC team member names/bios for website
- [ ] Merge `claude/inspiring-dhawan` branch into main

---

## Session Log

### 19 Apr 2026 (session 2)
- **Sticky fix** — `overflow-x: hidden` → `overflow-x: clip` on html/body, then flex → CSS grid on `.svc-sticky-wrap` with `align-self: start`. Left column now sticks correctly in Services and Projects sections.
- **Nav button** — matched to hero button: Framer-style layered box-shadow, inner white glow, `font-weight: 600`, arrow hidden.
- **Mobile padding** — standardised to `20px` across all sections (`.wrap`, `.svc-sticky-wrap`, `.nav-inner`, `.hero-content`).
- **Folder restructure** — `website/` now: `assets/hero-truck.mp4`, `assets/icons/`, `pages/about.html`, `pages/contact.html`. `_Website_Copy.md` moved to `Clients/AMC Africa/` root. Asset paths updated in `index.html`.
- **Services left column** — bullet list removed (duplicated right-side cards), paragraph trimmed. Sticky offset changed to `30vh`.
- **Projects section — full redesign** — dark card grid with placeholder thumbnails replaced with a 3×2 white rounded card grid. Each card: commodity pill, year, location·type, project name (display serif), stage progress bar (Scoping→PFS→DFS→Ops), key stat + "Request brief →" CTA. "See all engagements" button below grid.
- **Metrics band — redesign** — removed 2-col text+grid split. Short italic quote as eyebrow above a full-width 4-stat horizontal row with vertical dividers. Numbers scale to clamp(44px,5.5vw,80px).
- **Section label** — `.section-label` given squircle styling: background, border, `border-radius: 8px`.
- **Map section question raised** — user asked what it's for (vs Projects). Needs decision: keep, remove, or repurpose.

### 19 Apr 2026
- **Git cleanup** — deleted `master` branch (local + remote); `main` is now the sole branch. Removed stale `brave-nightingale` worktree. `claude/inspiring-dhawan` was never a real branch — removed from Next Session list.
- **AMC website — full rebuild** (`Clients/AMC Africa/website/index.html`): replaced previous version entirely using Claude Design handoff bundle. New stack: Fraunces display serif + Inter Tight body + JetBrains Mono data. Palette: warm off-white `#F6F4EF`, near-black `#15181A`, forest-green accent `#2F5D3A`. Sections: Nav · Hero (commodity ticker + animated KPIs) · Tabbed services · Case studies · Metrics band · Interactive Africa footprint map · Team · Insights · Clients · Contact · Footer. Tweaks panel built-in (accent, type pair, density, dark mode).
- **Hero iterations**: white background, topo overlay removed, text centered, copy updated to Monotree-style ("Put certainty first" with animated underline), stats row converted to Monotree-style with vertical dividers between KPIs, ticker card gets rounded corners + drop shadow.
- **Deployed to Vercel**: auto-deploys via Git integration on push to `main`. Live URL: **partnr-five.vercel.app**
- **Merged `claude/amc-second-section-fsF0U`**: services left-column (single para + 6-service bullet list) + projects section (2/5 ratio, card grid with image placeholders) + mobile fixes (overflow clipping, horizontal scroll, case card widths).
- **New client noted**: Doc — consulting monetization site. No details gathered yet.
- **Hero image**: user has Monotree-style product illustration webp in Downloads — to be used as hero right-column image next session.

### 12 Apr 2026
- **Hero layout fixed** (`index.html`): resolved hero-coords collision with nav CTA — moved from `position: absolute` to in-flow `hero-top` row. Changed `justify-content: flex-end` → `space-between`. Fixed `100vh` → `100dvh`. Added cubic-bezier easing throughout, grain overlay, active/press states on all buttons, `text-wrap: balance` on headings, staggered hero load animation.
- **Taste-skill suite installed** — 7 skills (taste, redesign, minimalist, soft, brutalist, output, stitch) installed globally to `~/.claude/skills/` from `Partnr Bucket/taste-skill-main/`.
- **CLAUDE.md created** — project-root standing instructions file: skill usage guide, AMC design rules, standing rules (no sends, no emojis, etc.).
- **AMC website rebuilt from scratch** (`index.html`) using taste-skill + output-skill:
  - Previous version archived as `index-v2.html` (Syne/Epilogue light build); `index-v1.html` = original dark Cormorant Garamond version.
  - New stack: Plus Jakarta Sans body (not Inter), Syne display, Syne Mono labels.
  - New palette: off-black `#0B0B0B`, warm cream `#F4F1E9`, desaturated blue `#3572CC`.
  - Hero: dark full-height, dot-grid background, sweep scan-line animation, "EXPERTS" in CSS outline stroke text, directional-fill CTA button (blue slides from bottom), staggered load-in.
  - Services: numbered expandable list with hover/click expand + capability chips — not 3 cards.
  - Clients: spotlight border effect (JS mouse-tracking radial gradient per cell).
  - Stats: count-up animation on scroll entry (IntersectionObserver + rAF).
  - Why AMC: zigzag 2-col layout + full-width third row — not 3 equal cards.
  - Scroll progress bar (blue, top of page).
  - Fully responsive down to 768px.

### 7 Apr 2026
- Read 7 email replies — full inbox audit:
  - **M&J Zambia (Tamuka James Chinzvende)** — HOT. Challenged us to list 5 specific, page-level improvements before engaging. Needs a credible reply.
  - **NGM Consulting Engineers (Serge)** — Updated their site, sent us to check it. No response sent yet.
  - **Aston AIR (Kalasa)** — Soft positive: "well received, will get back to you." Hold.
  - **Nolands Zambia (Kelvin Chungu)** — Interested in Access Learning Hub specifically. Main Nolands site handled overseas. Saved his number: +260 211 355267.
  - **FY Cargo Kitwe** — Dead lead: "we'll contact you if we need." Move on.
  - **Malisa & Partners** — Auto-confirmation only, no human reply yet.
  - **AMC (Edwin)** — Thread contains call reminder messages only. Concept build still pending.
- No replies sent this session — review only.

### 10 Apr 2026
- **AMC Framer build** — switched from amc2.framer.ai to template project (jubilant-radish-333710.framer.app). Decision: better show of skill to build from a quality template than the previous project.
- **Approach locked:** word/phrase swaps only — keep template energy and structure, adapt to AMC language. No layout changes.
- **AMC offer extracted** — scanned amc-africa.com (homepage, /services, /about). Full offer documented in `_Website_Copy.md`:
  - Founded 1994 by ex-ZCCM engineers. 30+ years experience. HQ Kitwe + Lubumbashi office.
  - 6 services: Mining, Exploration & Geological, GIS & Environmental, Metallurgical, Geotechnical, Strategy & Investment Advisory
  - Clients: Glencore, Anglo American, FQM, Lonmin, Rio Algom
  - Tagline: "Africa's Exploration, Mining & Environmental Engineering Experts"
- **Hero section** — Tag: "Mining Consulting" | Headline: "Africa's Mining Experts" | Description: "Thirty years of mining, exploration, and environmental expertise — built on the Zambian Copperbelt, trusted across sub-Saharan Africa."
- **Mission section** — Description updated to 30-year heritage framing. Years of Experience stat: 12 → 30+. Three other stats (Successful Projects/150, Industry Partners/40, Client Satisfaction/98%) remain as placeholders — need real numbers from Edwin.
- **Files created:** `Clients/AMC Africa/_Website_Copy.md` — full record of all section copy, done and pending.

### 8 Apr 2026 (session 2)
- **$100M Offers + $100M Leads (Hormozi)** — both audiobook transcripts loaded into Library/Books/, each split into 10 and 20 parts respectively for context-safe reading
- **M&J Zambia** — pulled Tamuka's full reply from Gmail. He challenged Deeky to list 5 specific, page-level improvements. Fetched mjgroup.africa and identified all 5 real pain points from live screenshots:
  1. No hero headline — carousel opener with product pitches, no commanding value prop
  2. "Why Choose Us" is generic filler (Fast/Efficient/Reliable etc.) — zero differentiation
  3. Social proof mislabeled — "Technology Partners" are software vendors, not clients. Zero testimonials or case studies.
  4. "Our Presence" overclaims — "all of Africa" with two offices
  5. About copy is interchangeable with any consultancy — no names, no story, no owned insight
- **Strategy framing** — reply should not just answer his question. It should answer it AND attach a grand slam offer (Hormozi framework: make it so good saying no feels stupid). Reframe: the real cost is lost deals they'll never know about.
- Read $100M Offers Part 1 — key tactic extracted: offer is the lifeblood, stack value so price isn't the comparison

### 8 Apr 2026
- Set up Unframer MCP server — connected Claude directly to AMC's Framer project (amc2.framer.ai)
- Established ground rules: Claude = copywriter only, no structural/layout changes
- Completed copy rewrites for 4 homepage sections:
  - **Hero** — new headline "Africa's Leading Mining & Exploration Experts", punchy subheading, 6 tags updated to AMC services
  - **Services** — heading + description + all 6 service cards rewritten for AMC's actual services
  - **Bento grid ("What Sets AMC Apart")** — all 13 text nodes updated
  - **Achievements** — heading, description, award card updated
- Flagged 5 stat placeholders requiring real numbers from Edwin: hero revenue card, About stats (×3), bento Card 3, bento Card 6, achievements 300%/95%

### 2 Apr 2026
- Audited both leads master files — found `Outreach/` file is the live one with 42 leads touched
- Updated `Outreach/partnr_leads_master.xlsx` to sync statuses from `Sales & Outreach/` version
- AMC status updated to `Active Deal 🤝` with call history notes
- Identified `Sales & Outreach/` file is now stale vs `Outreach/` file
- Confirmed `claude/inspiring-dhawan` branch has uncommitted video changes not yet merged to main

### 24 Mar – 1 Apr 2026
- Cold email campaign launched across Kitwe & Lusaka leads
- AMC Africa replied within hours — first conversion
- Call with Edwin on 1 Apr (underprepared, but still in the game)
- Follow-up call 2 Apr — green light on website concept
