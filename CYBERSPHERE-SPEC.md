# Cybersphere Website — Master Specification

## Project Overview

Cybersphere is a white-glove AI implementation partner for SMBs that rely on phones, leads, and manual computer work. The website must communicate premium authority — think McKinsey meets AI, not a SaaS startup or gaming brand.

**Site structure:** 1 landing page + 4 subpages (one per core offering), all sharing a unified design system.

**Tech stack:** React (single-page app with hash or client-side routing), Tailwind CSS or styled-components, deployed as static site.

**Build order (recommended phases):**
1. Design system & shared components (Phase 1)
2. Landing page (Phase 2)
3. AI Voice Agent subpage (Phase 3)
4. AI Lead Gen Engine subpage (Phase 4)
5. AI Personal Employee subpage (Phase 5)
6. AI Pentesting subpage (Phase 6)
7. Polish, animations, responsiveness (Phase 7)

---

## Brand & Aesthetic Direction

### Identity: "Digital Luxury"
The site should feel like a top-tier consulting firm's website that happens to specialize in AI. Clean, authoritative, trustworthy. NOT a software startup. NOT gamer/neon/dark-mode-heavy.

### What to reference
- McKinsey.com (authority, editorial spacing, restraint)
- Stripe.com (clean product storytelling, tasteful motion)
- Linear.app (modern SaaS minimalism done right)
- Pentagram.com (editorial typography, generous whitespace)

### What to avoid
- Neon colors, glowing borders, "cyber" clichés
- Heavy dark mode with bright accent overload
- Busy/cluttered layouts, too many elements competing
- Generic SaaS template aesthetics
- Overly complex SVG animations or 3D elements that feel gimmicky
- Anything that reads as "AI startup" rather than "AI consultancy"

---

## Design System

### Color Palette

| Token | Hex | Usage |
|---|---|---|
| `--bg-primary` | `#FAFAF8` | Page backgrounds (warm off-white) |
| `--bg-secondary` | `#F0EFEB` | Section alternation, card backgrounds |
| `--bg-dark` | `#1A1A1E` | Dark sections (hero, CTA, select feature sections) |
| `--bg-darker` | `#0E0E10` | Footer, deep dark sections |
| `--text-primary` | `#1A1A1E` | Headings on light backgrounds |
| `--text-secondary` | `#4A4A50` | Body copy on light backgrounds |
| `--text-muted` | `#8A8A90` | Captions, labels, metadata |
| `--text-on-dark` | `#FAFAF8` | Text on dark sections |
| `--text-on-dark-muted` | `#A0A0A5` | Body text on dark sections |
| `--accent` | `#B09464` | Gold/brass accent — CTAs, highlights, labels |
| `--accent-hover` | `#C4A87A` | Accent hover state |
| `--accent-muted` | `rgba(176,148,100,0.08)` | Accent backgrounds, badges |
| `--border-light` | `rgba(0,0,0,0.06)` | Borders on light backgrounds |
| `--border-dark` | `rgba(255,255,255,0.06)` | Borders on dark backgrounds |

**Key principle:** The site is predominantly LIGHT. Use dark sections strategically — hero areas, CTAs, and one or two feature sections per page for rhythm. The majority of the page should be warm off-white/cream. This is what differentiates it from generic dark-mode AI sites.

### Typography

Use Google Fonts. Each font serves a specific purpose:

| Role | Font | Weight(s) | Usage |
|---|---|---|---|
| Display / Headlines | **Instrument Serif** | 400, 400 italic | H1, H2, large statement text |
| UI / Labels | **Syne** | 500, 600, 700 | Nav links, section labels, badges, buttons, uppercase micro-text |
| Body | **Plus Jakarta Sans** | 300, 400, 500, 600 | Paragraphs, descriptions, card text |

**Typography rules:**
- Headlines are large, editorial, with generous line-height (1.05–1.15)
- Body text is 16–18px with 1.7–1.8 line-height for readability
- Section labels are always uppercase, 11–12px, Syne, letter-spacing 0.12em, with `--accent` color
- Never bold entire paragraphs. Emphasis is structural (size, weight hierarchy), not inline bold spam
- H1: clamp(40px, 6vw, 72px). H2: clamp(32px, 4.5vw, 52px). H3: 22–28px

### Spacing & Layout

- Max content width: 1280px, centered
- Page horizontal padding: 40px desktop, 20px mobile
- Section vertical padding: 120px desktop, 80px mobile
- Use CSS Grid for layouts. Avoid flexbox sprawl for page-level composition
- Generous whitespace between sections — let content breathe
- Asymmetric 2-column grids (e.g., 5fr/7fr or 1fr/1.2fr) feel more editorial than 1:1 splits

### Iconography

- Use **Lucide React** icons exclusively. No emojis anywhere on the site.
- Icons should be 20–24px in feature cards, 16px inline
- Icon containers: 48px square, rounded-xl, with `--accent-muted` background and `--accent` icon color
- Keep icon usage restrained — not every bullet point needs one

### Imagery & Media

- **AI-generated professional headshots** for testimonials (use placeholder divs with initials for now)
- **Video/VLS placeholders**: Each subpage should include a prominent video section (see Content Spec per page). Use a styled placeholder with a play button, aspect-ratio 16:9, with a label like "See [Product] in Action" or "Watch the Demo"
- **No stock photography**. If imagery is needed, use abstract geometric patterns, subtle gradient meshes, or editorial-style illustrations
- A subtle film grain overlay (CSS-only, via SVG filter) can be applied globally at very low opacity (0.02–0.03) for texture

### Motion & Animation

- **Restraint is key.** This is a consulting site, not a portfolio piece.
- Scroll-triggered fade-up for content sections (opacity 0→1, translateY 24px→0, duration 0.7s, ease-out)
- Stagger children within grids by 80–100ms
- Hover states on cards: subtle lift (translateY -3px) + border color shift to accent
- Hover on buttons: background color transitions (0.3s ease)
- NO parallax. NO floating elements. NO particle effects. NO complex SVG path animations.
- Page transitions: simple fade (if using router), or instant scroll-to-top

### Buttons & CTAs

**Primary CTA:**
- Background: `--bg-dark` (on light sections) or `--text-on-dark` (on dark sections)
- Text: contrasting color, Syne font, 14px, weight 600, uppercase letter-spacing
- Padding: 16px 36px
- Border-radius: 6px
- Hover: background shifts to `--accent`
- Always includes an arrow icon (ArrowRight or ArrowUpRight from Lucide)

**Secondary CTA:**
- Transparent background, 1px border (`--border-light` or `--border-dark`)
- Same sizing as primary
- Hover: border color shifts to `--accent`, text color shifts to `--accent`

**CTA destinations (no prices anywhere):**
- Primary: `https://api.leadconnectorhq.com/widget/bookings/cybersphere-ai-implementation-strategy-call` (opens new tab)
- Secondary: `mailto:hello@getcybersphere.com`

### Cards

- Background: `--bg-secondary` (light context) or `--bg-dark` (within dark sections)
- Border: 1px solid `--border-light` or `--border-dark`
- Border-radius: 12–16px
- Padding: 36–48px
- Hover: border color transitions to faint accent, subtle translateY(-3px)
- No drop shadows. Depth comes from background color contrast and borders.

---

## Shared Components to Build (Phase 1)

Build these as reusable React components before starting any page:

### 1. `<Navbar />`
- Fixed top, transparent on scroll-top, blurred semi-transparent on scroll
- Left: Logo (small shield icon + "CYBERSPHERE" in Syne uppercase, weight 700)
- Right: nav links (Voice Agent, Lead Gen, AI Employee, Pentesting) + "Book a Call" primary CTA button
- Mobile: hamburger → full-screen overlay menu
- Active route gets accent color

### 2. `<Footer />`
- Dark background (`--bg-darker`)
- 4-column grid: brand description | Solutions links | Company links | Get Started (Calendly + email)
- Bottom bar: copyright + legal links
- Collapses to stacked on mobile

### 3. `<SectionLabel />` 
- Small accent-colored label above every H2
- Format: horizontal 28px line + uppercase text (Syne, 11px, weight 600, `--accent`)
- Used consistently at the start of every content section

### 4. `<CTASection />`
- Full-width section, dark background, centered text
- H2 headline + supporting paragraph + two buttons (primary Calendly + secondary email)
- Subtle radial gradient accent glow behind content
- Used at bottom of every page before footer

### 5. `<VLSSection />` (Video/Letter Sales placeholder)
- Full-width or contained section with a 16:9 video placeholder
- Dark card with centered play button, subtle accent gradient overlay
- Caption below: "Watch the Demo" or page-specific label
- Placed on each subpage before the CTA section (or wherever contextually appropriate)

### 6. `<FeatureCard />`
- Icon container + H3 title + description paragraph
- Used in 3-column grids on subpages

### 7. `<StatCard />`
- Large display number (Instrument Serif, accent color) + small label underneath
- Used in 3–4 column stat bars

### 8. `<ProcessStep />`
- Numbered circle (accent border) + title + description
- Used vertically in "How It Works" sections

### 9. `<TestimonialCard />`
- Quotation mark accent + italic quote + name/role/company
- Used in 3-column grids

### 10. `<SubpageHero />`
- Shared hero component for all 4 subpages
- Dark background with subtle gradient
- Badge/pill with icon + label
- H1 + subtitle paragraph + two CTA buttons
- Generous vertical padding (160px top, 100px bottom to clear navbar)

---

## Responsive Breakpoints

| Breakpoint | Behavior |
|---|---|
| > 1024px | Full desktop layout, multi-column grids |
| 768–1024px | 2-column grids collapse to 2 or 1, reduce padding |
| < 768px | Single column everything, mobile nav, reduced font sizes, 80px section padding |

---

## SEO & Meta

Each page needs:
- Unique `<title>` and meta description
- Open Graph tags
- Semantic HTML (proper heading hierarchy, landmark elements)

---

## File Structure (suggested)

```
src/
├── components/
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   ├── SectionLabel.jsx
│   ├── CTASection.jsx
│   ├── VLSSection.jsx
│   ├── FeatureCard.jsx
│   ├── StatCard.jsx
│   ├── ProcessStep.jsx
│   ├── TestimonialCard.jsx
│   └── SubpageHero.jsx
├── pages/
│   ├── Landing.jsx
│   ├── VoiceAgent.jsx
│   ├── LeadGen.jsx
│   ├── AIEmployee.jsx
│   └── Pentesting.jsx
├── styles/
│   ├── globals.css (design tokens, resets, base typography)
│   └── animations.css (scroll-triggered animations)
├── App.jsx (router)
└── index.jsx
```
