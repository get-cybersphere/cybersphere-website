# Cybersphere Website — Page Content Specification

This document defines the exact content, section order, and copy direction for each page. Use alongside `CYBERSPHERE-SPEC.md` for design implementation.

---

## Page 1: Landing Page (`/`)

The landing page introduces Cybersphere and provides an overview of all four offerings. It should feel authoritative and restrained — a consulting firm's homepage, not a SaaS product page.

### Section Order

#### 1. Hero (dark background)
- **Badge:** "AI Implementation Partner"
- **H1:** "We build AI systems that run your business" (second line in accent: "so your team can focus on what matters")
- **Subtext:** "White-glove AI implementation for businesses that rely on phones, leads, and manual work. Custom-built systems that answer calls, generate leads, automate admin, and protect your infrastructure."
- **CTAs:** "Schedule a Discovery Call" (primary → Calendly) + email (secondary)
- **Layout:** Left-aligned text, right side has a subtle abstract geometric accent (concentric circles or grid pattern in very faint accent color — NOT a product screenshot or illustration of a person)

#### 2. Social Proof Bar (light background, bordered top/bottom)
- 4 stats in a row: "24/7" (Always-On Coverage) | "<2s" (Average Response Time) | "3x" (Lead Conversion Lift) | "40%" (Operational Cost Reduction)
- Below stats, optionally: a row of small grayscale client logos or text: "Trusted by gyms, law firms, clinics, and service businesses across the country"

#### 3. Who We Are (light background, 2-column)
- **Left column:**
  - Section label: "Who We Are"
  - H2: "The implementation partner for businesses that can't afford to miss a call"
  - Two paragraphs explaining: Cybersphere serves gyms, real estate firms, service businesses, law firms, clinics, dispensaries, and local operators. We don't sell software — we design and deploy custom AI systems. One-time build fees. Measurable outcomes: more bookings, higher show rates, reduced staff dependence.
- **Right column:**
  - A refined list/card showing industries served: Gyms & Fitness, Real Estate, Service Businesses, Law Firms, Clinics & Healthcare, Dispensaries & Retail. Each with a small Lucide icon. Styled as a bordered card on the light background.

#### 4. Core Solutions (dark background section for contrast)
- Section label: "Core Solutions"
- H2: "Four systems. One mission. Eliminate the work that slows you down."
- **2x2 grid of offering cards**, each card contains:
  - Icon in accent container
  - Micro-label (e.g., "Voice Agent")
  - H3 title (e.g., "AI Voice Agent")
  - 2-sentence description
  - "Learn More →" link that routes to the subpage
- Cards should be clickable, linking to respective subpages

**Card content:**

| Offering | Icon | Description |
|---|---|---|
| AI Voice Agent | Headphones | 24/7 intelligent call answering that qualifies leads, books appointments, and recovers missed calls. Your front desk never sleeps. |
| AI Lead Gen Engine | Target | Automated lead capture, rapid outbound follow-up, and funnel optimization. Turn interest into revenue on autopilot. |
| AI Personal Employee | UserCheck | Workflow automation that replaces repetitive admin, CRM management, and manual computer work. Your most reliable team member. |
| AI Pentesting | Shield | Proactive security testing and hardening for your AI systems. Identify vulnerabilities before they become liabilities. |

#### 5. How We Work (light background, 2-column)
- **Left column (sticky on desktop):**
  - Section label: "Our Process"
  - H2: "Engineered for your operations. Not off the shelf."
  - Short paragraph: Every engagement is custom. Deep operational discovery → custom architecture → integration → measurable results.
- **Right column:** 4 numbered process steps (use ProcessStep component):
  1. **Discovery & Audit** — Map workflows, identify revenue leaks, define measurable objectives.
  2. **System Architecture** — Design custom AI stack for your tech environment and business rules.
  3. **Build & Integration** — Build and integrate into existing tools (CRM, phones, calendars, ads) with zero disruption.
  4. **Launch & Optimize** — Deploy, monitor KPIs, iterate until measurable improvement is achieved.

#### 6. Testimonials (light or slightly tinted background)
- Section label: "Client Results"
- H2: "Built for outcomes, measured by results"
- 3-column testimonial cards:

| Quote | Name | Role | Company |
|---|---|---|---|
| "Since deploying the AI voice agent, we've recovered an average of 47 missed calls per week. That's bookings we were simply leaving on the table." | Sarah Mitchell | Operations Director | Elite Fitness Group |
| "The lead gen engine cut our average response time from 4 hours to 90 seconds. Our conversion rate went from 8% to 23% in the first quarter." | Marcus Chen | Managing Partner | Westfield Realty |
| "We replaced two full-time admin roles with the AI employee system. It handles scheduling, follow-ups, and CRM updates without a single error." | Dr. Rachel Torres | Clinic Owner | Renewal Medical Spa |

#### 7. CTA Section (dark, shared component)

---

## Page 2: AI Voice Agent (`/voice-agent`)

**Inspiration reference:** newo.ai — the concept of showing real call demos, industry-specific use cases, and the "never miss a call" positioning.

### Section Order

#### 1. SubpageHero (dark)
- Badge: "AI Voice Agent"
- H1: "Never miss another call. Never lose another lead." (second line in accent)
- Subtext: "An AI receptionist that answers every call in under two seconds, qualifies leads, books appointments, handles FAQs, and follows up on missed calls — around the clock."
- CTAs: Book a Call + Contact Us

#### 2. VLS / Demo Section (dark or medium background)
- Prominent 16:9 video placeholder
- Label: "Hear the AI Voice Agent in Action"
- Subtext: "Real conversations. Real callers. Across 10+ industries."
- This is a KEY section — make it feel premium, not like a placeholder. Large, centered, with breathing room.

#### 3. Capabilities (light background, 3-column grid)
- Section label: "Capabilities"
- H2: "A full-service receptionist, powered by intelligence"
- 6 feature cards:

| Icon | Title | Description |
|---|---|---|
| Phone | 24/7 Call Answering | Never send a caller to voicemail. Your AI agent picks up every call in under two seconds, any time of day or night, including holidays. |
| UserCheck | Lead Qualification | Asks the right questions, scores leads in real time, routes hot prospects to your team with full context. |
| Calendar | Appointment Booking | Integrated with your calendar and scheduling tools. Books qualified appointments on the spot. |
| MessageSquare | Missed Call Recovery | Automatically follows up via text and callback within seconds when callers hang up or calls drop. |
| Globe | Multi-Language Support | Fluent in multiple languages, handling accents and colloquialisms with natural fluency. |
| BarChart3 | Real-Time Analytics | Every call logged, transcribed, analyzed. Track volume, conversion, peak hours in a live dashboard. |

#### 4. Stats Bar (light, bordered)
- "<2s" Average Pickup | "97%" Call Containment | "24/7" Coverage | "3.2x" More Bookings

#### 5. Use Cases (light, 2-column)
- Section label: "Use Cases"
- H2: "Built for businesses where every call counts"
- Left: intro paragraph about customization per business
- Right: 4 stacked cards:
  - **Gyms & Fitness** — Membership inquiries, class bookings, trial signups
  - **Medical & Dental Clinics** — Patient info, insurance, scheduling
  - **Law Firms** — Client screening, intake questions, consultation booking
  - **Home Services** — Service requests, dispatch, estimate scheduling

#### 6. Testimonial (single, prominent)
- Reuse Sarah Mitchell testimonial from landing page, or add a voice-agent-specific one

#### 7. VLS Section (before CTA — if not already placed above, place here)

#### 8. CTA Section

---

## Page 3: AI Lead Gen Engine (`/lead-gen`)

**Inspiration reference:** seamless.ai — the "every deal starts here" positioning, stats-forward messaging, focus on speed and pipeline metrics.

### Section Order

#### 1. SubpageHero (dark)
- Badge: "AI Lead Gen Engine"
- H1: "Capture every lead. Convert them faster." (second line accent)
- Subtext: "Automated lead capture, instant outbound follow-up, ad integration, and funnel automation. Your pipeline fills itself while you focus on closing."

#### 2. The Problem / Speed Section (light, 2-column)
- Section label: "The Problem"
- H2: "Speed kills the competition. Slow follow-up kills your revenue."
- Left: Two paragraphs — responding within 5 minutes = 21x more likely to convert. Most businesses take hours. Cybersphere eliminates the gap.
- Right: 3 large stat items stacked vertically:
  - "90s" — Average First Contact
  - "3.2x" — Higher Conversion Rate
  - "100%" — Lead Follow-Up Coverage

#### 3. VLS / Demo Section
- Video placeholder: "See the Lead Gen Engine in Action"
- Subtext: "From ad click to booked appointment in minutes."

#### 4. Engine Components (light or alternating, 3-column grid)
- Section label: "Engine Components"
- H2: "A full-stack lead machine, built to your business"
- 6 feature cards:

| Icon | Title | Description |
|---|---|---|
| Search | Intelligent Lead Capture | Multi-channel capture from web forms, ads, social, referrals, walk-ins. One unified pipeline. |
| Zap | Instant Outbound Follow-Up | Text, email, call sequences triggered within seconds. Personalized by source, intent, behavior. |
| Target | Ad & Funnel Automation | Direct integration with Meta, Google, TikTok. Leads from campaigns captured and nurtured automatically. |
| BarChart3 | Lead Scoring & Routing | AI scores by conversion likelihood, routes to right team member or workflow in real time. |
| MessageSquare | Multi-Touch Sequences | Nurture campaigns across SMS, email, voice. Maintain engagement without overwhelming prospects. |
| TrendingUp | Pipeline Analytics | Full visibility: funnel performance, source attribution, conversion rates, cost-per-acquisition. |

#### 5. How It Works (dark background, centered)
- Section label: "How It Works"
- H2: "From ad click to booked appointment in minutes"
- 4 process steps:
  1. **Lead Enters the Funnel** — Prospect clicks ad, fills form, or calls. System captures data, intent, source instantly.
  2. **Instant Engagement** — Within seconds: personalized text + email. Optional AI voice call to qualify and book.
  3. **Qualification & Routing** — AI scores, tags by interest/urgency, routes to CRM or team calendar.
  4. **Nurture & Convert** — Non-converters enter intelligent drip sequence. Re-engages at optimal intervals.

#### 6. VLS Section (before CTA)

#### 7. CTA Section

---

## Page 4: AI Personal Employee (`/ai-employee`)

**Inspiration reference:** podium.com — the "AI Employee" concept, focus on replacing specific manual tasks, showing what the system actually does day-to-day.

### Section Order

#### 1. SubpageHero (dark)
- Badge: "AI Personal Employee"
- H1: "Your most reliable team member doesn't sleep." (accent on second part)
- Subtext: "Workflow automation that replaces repetitive admin, manages your CRM, handles scheduling, and executes operational tasks with precision."

#### 2. The Challenge (light, 2-column)
- Section label: "The Challenge"
- H2: "Your team spends 60% of their time on work that shouldn't require a human"
- Left: Two paragraphs — data entry, confirmations, CRM updates, follow-ups, status checks consume hours daily. AI Personal Employee handles it all, works inside your tools, follows your rules.
- Right: 2x2 mini-card grid:
  - **Scheduling** (Calendar icon) — Manages calendars, confirms appointments, sends reminders, reschedules no-shows
  - **CRM Management** (FileText) — Updates records, logs interactions, tags contacts, maintains data hygiene
  - **Follow-Up** (Mail) — Post-appointment summaries, review requests, re-engagement sequences
  - **Workflow Automation** (Workflow) — Connects tools, triggers multi-step processes on events/conditions

#### 3. VLS / Demo Section
- Video placeholder: "Watch the AI Employee Handle a Full Day of Admin"

#### 4. What It Replaces (light, 3-column grid)
- Section label: "What It Replaces"
- H2: "The tasks your team dreads, handled flawlessly"
- 6 feature cards:

| Icon | Title | Description |
|---|---|---|
| Cpu | Intelligent Task Execution | Understands context, adapts to exceptions, escalates only when human judgment is genuinely needed. |
| Settings | Tool Integration | Works natively with CRM, calendar, email, phone, ad platforms. No manual data transfer. |
| Clock | Always Available | 24/7 without breaks, sick days, or training. Consistent at every hour. |
| BarChart3 | Performance Tracking | Every action logged. Track completion rates, time savings, error reduction, ROI. |
| Users | Team Augmentation | Works alongside staff. Your team focuses on relationships and decisions; AI handles the rest. |
| Shield | Custom Business Rules | Built around your policies, procedures, edge cases. No generic templates. |

#### 5. Stats Bar (dark)
- "60%" Admin Time Recaptured | "0" Data Entry Errors | "24/7" Task Processing | "<1mo" Full Deployment

#### 6. Day-in-the-Life Section (light, unique to this page)
- Section label: "A Day in the Life"
- H2: "What your AI Employee does before you finish your coffee"
- A timeline or vertical list showing a sample day:
  - **6:00 AM** — Sends appointment reminders for the day's schedule
  - **8:15 AM** — Processes overnight form submissions, updates CRM records
  - **9:30 AM** — Reschedules two no-shows, sends follow-up texts
  - **11:00 AM** — Updates lead scores based on email engagement data
  - **1:00 PM** — Generates afternoon recap report for team
  - **3:00 PM** — Triggers review request emails to completed appointments
  - **6:00 PM** — Processes end-of-day CRM cleanup, archives closed records
  - **10:00 PM** — Handles after-hours form submissions, queues morning follow-ups
- Style as a clean vertical timeline with times in accent color, Syne font

#### 7. VLS Section (before CTA)

#### 8. CTA Section

---

## Page 5: AI Pentesting (`/pentesting`)

**Inspiration reference:** xbow.com — the clean authority, stats-forward approach (80x faster, 1000+ vulnerabilities found), expert testimonial, and simple CTA.

### Section Order

#### 1. SubpageHero (dark)
- Badge: "AI Pentesting"
- H1: "Secure your AI systems before adversaries do." (accent on second part)
- Subtext: "Proactive AI security testing and hardening. We identify vulnerabilities in your AI-powered systems, models, and integrations so you can deploy with confidence."

#### 2. Why AI Security (light, 2-column)
- Section label: "Why AI Security"
- H2: "AI systems introduce attack surfaces that traditional security misses"
- Left: Two paragraphs — prompt injection, data exfiltration, model manipulation, unauthorized access. These are new vulnerability classes. Our service combines automated + expert-led adversarial testing.
- Right: bordered card with 4 items:
  - **Prompt Injection Testing** (AlertTriangle) — Evaluate resistance to adversarial prompt manipulation
  - **Data Leakage Assessment** (Eye) — Identify paths where sensitive data could be extracted
  - **Access Control Audit** (Lock) — Verify AI permissions, API keys, integrations are secured
  - **Hardening Recommendations** (ShieldCheck) — Prioritized remediation with implementation guidance

#### 3. Stats Bar (dark)
- "80x" Faster Than Manual | "100+" Attack Vectors | "48hr" Report Turnaround

#### 4. VLS / Demo Section
- Video placeholder: "See How AI Pentesting Works"
- Subtext: "From scoping to remediation in days, not months."

#### 5. Service Scope (light, 3-column grid)
- Section label: "Service Scope"
- H2: "Comprehensive AI security, from assessment to remediation"
- 6 feature cards:

| Icon | Title | Description |
|---|---|---|
| Search | Vulnerability Discovery | Automated + manual testing across models, APIs, pipelines, integration points. |
| AlertTriangle | Adversarial Testing | Simulated attacks: prompt injection, jailbreaking, data poisoning, social engineering. |
| FileText | Compliance Assessment | Evaluate against emerging regulatory frameworks and responsible AI standards. |
| Lock | API Security Audit | Test auth, authorization, rate limiting, input validation on all AI endpoints. |
| ShieldCheck | Hardening & Remediation | Detailed guidance + direct work with our team to implement fixes. |
| Eye | Ongoing Monitoring | Continuous evaluation as systems evolve and new threats emerge. |

#### 6. Engagement Process (dark, centered)
- Section label: "Engagement Process"
- H2: "Structured, thorough, and actionable"
- 4 process steps:
  1. **Scoping & Reconnaissance** — Map architecture, identify attack surfaces, define rules of engagement.
  2. **Automated Scanning** — AI-powered tools evaluate hundreds of vectors in hours, not weeks.
  3. **Expert-Led Testing** — Manual adversarial testing on high-risk areas, bespoke prompt injection scenarios.
  4. **Report & Remediate** — Findings report with severity ratings, PoCs, prioritized remediation. We support through resolution.

#### 7. VLS Section (before CTA)

#### 8. CTA Section

---

## Global Notes

- **No prices anywhere.** All monetization is gated behind the discovery call.
- **Every page ends with CTASection → Footer.**
- **VLS sections** should appear on every subpage. Place them either after the hero (as a demo section) or before the CTA (as a conversion element), or both if the page is long enough to justify it. At minimum, one VLS per subpage.
- **Testimonials on landing page only** for now (can be expanded later).
- **All "Learn More" or arrow links** on offering cards route to the respective subpage.
- **Responsive:** Everything must work cleanly on mobile. Test at 375px width.
