# Partnr — Claude Instructions

## What This Project Is
Web design + AI agency targeting established SMEs in Zambia. Active client: AMC Africa (website concept build in progress). See `PROJECT_MEMORY.md` for full context.

---

## Design Skills (installed globally)

The following design skills are available as `/skill-name` commands. Use the right one for the task:

| Skill | Use When |
|---|---|
| `/taste-skill` | Building new UI from scratch — enforces premium layout, motion, and typography defaults |
| `/redesign-skill` | Auditing and upgrading an **existing** HTML/CSS file — diagnose, then fix |
| `/soft-skill` | High-end agency feel — expensive shadows, spring physics, Awwwards-tier motion |
| `/minimalist-skill` | Editorial/document-style — Notion/Linear aesthetic, warm monochrome, flat bento |
| `/brutalist-skill` | Raw mechanical — Swiss print + terminal aesthetics, high contrast |
| `/output-skill` | Any task requiring complete code generation — prevents truncation and placeholder patterns |
| `/stitch-skill` | Generating a DESIGN.md system spec for a project |

**Default for AMC website work:** apply `/redesign-skill` when auditing, `/taste-skill` when building new sections.

---

## Repo Structure

Client-first layout — everything for a client lives together:

- **`clients/`** — one folder per client, self-contained
  - `amc-africa/site/` — website files (index.html, css/, assets/, pages/, vercel.json)
  - `amc-africa/docs/` — copy, company profile, client overview
  - `partnr/site/` — Partnr's own website
- **`components/`** — shared component library (`.p-btn` etc.) — source of truth for every site
- **`lab/`** — concepts and experiments
- **`inspiration/`** — design reference screenshots
- **`ops/`** — agency operations (outreach, strategy, reading, archive)
- **`Partnr Bucket/`** — drop/inbox at root

## AMC Africa Website

- **Files:** `clients/amc-africa/site/index.html` (live concept)
- **Copy source:** `clients/amc-africa/docs/_Website_Copy.md`
- **Stack:** Vanilla HTML/CSS/JS — no framework, no build step
- **Design direction:** Syne + Epilogue fonts, black/white/blue palette (`#0A0A0A` / `#FAFAFA` / `#4285F4`), editorial bottom-anchored hero, survey-grid overlay on hero
- **Rule:** Copywriting changes only in Framer (via Unframer MCP). Structural/layout work happens in `index.html`
- **Placeholders pending real data from Edwin:** Successful Projects, Industry Partners, Client Satisfaction stats

---

## Standing Rules

- Gmail: create drafts only, never send
- No emojis in code or content
- Prefer targeted edits over rewrites — read before touching
- `output-skill` standards apply to all code output: no `// ...`, no `// TODO`, no truncation
