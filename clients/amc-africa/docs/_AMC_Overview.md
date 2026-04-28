---
type: client-overview
tags: [amc, active]
updated: 2026-04-28
---

# AMC Africa — Client Overview

**Company:** African Mining Consultants Ltd
**Live site:** amc-africa.com
**Status:** Active Deal — full site rebuilt and ready to send to Edwin

---

## Key Contact

| Name | Role | Email | Phone |
|---|---|---|---|
| Edwin Mukonka | GM / Principal Consultant | emukonka@amc-africa.com | +260 96 682 5144 |

---

## Relationship History

| Date | Event |
|---|---|
| Late Mar 2026 | Cold email sent — Edwin forwarded it himself and replied same day |
| 1 Apr 2026 | Call 1 — underprepared, stayed in the game |
| 2 Apr 2026 | Call 2 — green light to build concept |
| 12–25 Apr 2026 | First concept built (HTML/CSS) and deployed to Vercel. Scrapped — starting fresh. |
| 26 Apr 2026 | Full reset. Old site deleted. New build begins from scratch with component library. |
| 27–28 Apr 2026 | Full redesign implemented from Claude Design bundle. All sections built. Site live and ready to show Edwin. |

---

## Active Project — Website (New Build)

**Stack:** Vanilla HTML/CSS/JS — no framework, no build step
**Deployment:** Vercel — amc-africa-deekymvula-gmailcoms-projects.vercel.app (auto-deploys on push to `main`)
**Root directory in Vercel:** `clients/amc-africa/site/`
**Design:** Outfit (display) + DM Sans (body) + Syne (labels). Palette: `#0A0A0A` / `#FAFAFA` / `#4285F4` (AMC blue). Squircle corners throughout (`corner-shape: superellipse(1.5)`). Hugeicons CDN for icons.

### Build Status

| Section | Status | Notes |
|---|---|---|
| Nav | Done | Logo + links + mobile toggle |
| Hero | Done | Dark bg, left copy, right image slot, CTA buttons |
| Clients bar | Done | Dark strip, logos |
| Services | Done | 2-col grid, 6 cards, bare Hugeicons, service tags |
| Stats / KPIs | Done | 4 stat placeholders, count-up animation on scroll |
| Case Studies | Done | 2-col card layout |
| Active Projects | Done | Card grid |
| Where We Work | Done | Offices — Kitwe HQ + Lubumbashi |
| Team | Done | Photo-bg cards, gradient overlay, bottom-anchored text |
| Why AMC | Done | Visual placeholder — needs real photo |
| Contact / CTA | Done | White email button, dark shadow |
| Footer | Done | Extra breathing room added |

### Pending — Awaiting Real Data from Edwin

| Item | Notes |
|---|---|
| KPI stats | Successful Projects, Countries, Capex advised, Senior Engineers — 4 placeholders on site |
| Team names | Real AMC principals — Edwin to provide names and roles |
| Client logos | Still need: Lonmin, Rio Algom, Ivanhoe, Vedanta, Barrick, ZCCM-IH, African Rainbow Minerals |
| Hero engineer image | Generate with `ops/prompts/background-replacement.md` using `#0A0A0A` |
| Why AMC visual | Replace placeholder with real site/team photo |

---

## Brand & Design

### Color Palette (new build)

| Role | Hex | Notes |
|---|---|---|
| Background | `#0A0A0A` | Near-black — dark site |
| Foreground / text | `#FAFAFA` | Off-white |
| AMC Blue (primary) | `#4285F4` | Buttons, highlights, links |
| Muted text | `#888` / `#999` | Body copy on dark |
| Borders | `rgba(255,255,255,0.08)` | Subtle dividers on dark |

### Typography

| Role | Font | Notes |
|---|---|---|
| Display / headings | Outfit | Primary display face |
| Body | DM Sans | Readable on dark |
| Labels / eyebrows | Syne | Technical feel |

### Assets on Hand

| Asset | Location |
|---|---|
| Hero video | `site/assets/hero-truck.mp4` |
| Icons | `site/assets/icons/` |
| Glencore logo (SVG ×2) | `site/assets/logos/` |
| Anglo American logo (SVG ×2) | `site/assets/logos/` |
| FQM logo (PNG) | `site/assets/logos/` |

---

## Company Profile

Full details in `_AMC_Company_Profile.md`.

- Founded 1994 by ex-ZCCM engineers
- HQ: Kitwe, Zambia + Lubumbashi office
- 30+ years in mining, exploration, and environmental engineering
- Services: Mining, Exploration & Geological, GIS & Environmental, Metallurgical, Geotechnical, Strategy & Investment Advisory
- Confirmed clients: Glencore, Anglo American, FQM, Lonmin, Rio Algom
- Key personnel: Edwin Mukonka (GM / Principal Consultant), Dr. Yotam Hara
