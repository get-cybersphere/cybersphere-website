// TEMP draft (lives at /test): upgraded Pentesting page.
// Rebuilt from the design reference in the project's own system (Tailwind tokens,
// framer-motion, lucide, CTASection). Once approved → becomes Pentesting.jsx.
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import {
  ArrowUpRight, Check, Github, CreditCard, Layers, Crosshair,
  Globe, AppWindow, Network, Cloud, Mail, Wifi, ChevronDown, Lock, ScanEye,
} from 'lucide-react'
import CTASection from '../components/CTASection'

const SEV = { crit: '#E5484D', high: '#F76808', med: '#C99A06', low: '#12A594' }

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.55, ease: 'easeOut' },
}

/* ────────────────────────── HERO + RADAR ────────────────────────── */
function Radar() {
  const blips = [
    { left: '68%', top: '34%', crit: false },
    { left: '38%', top: '62%', crit: true },
    { left: '58%', top: '72%', crit: false },
    { left: '30%', top: '40%', crit: false },
  ]
  return (
    <div className="relative w-full max-w-[480px] mx-auto aspect-square grid place-items-center">
      <div className="relative w-[88%] aspect-square rounded-full overflow-hidden border border-white/[0.07]"
        style={{ background: 'radial-gradient(circle at 50% 50%,#101116 0%,#0a0b0f 70%)', boxShadow: 'inset 0 0 60px rgba(21,93,252,.12)' }}>
        <svg viewBox="0 0 200 200" className="absolute inset-0 w-full h-full">
          {[92, 66, 40, 14].map(r => <circle key={r} cx="100" cy="100" r={r} fill="none" stroke="rgba(255,255,255,.09)" />)}
          <line x1="100" y1="6" x2="100" y2="194" stroke="rgba(255,255,255,.07)" />
          <line x1="6" y1="100" x2="194" y2="100" stroke="rgba(255,255,255,.07)" />
          <line x1="29" y1="29" x2="171" y2="171" stroke="rgba(255,255,255,.07)" />
          <line x1="171" y1="29" x2="29" y2="171" stroke="rgba(255,255,255,.07)" />
        </svg>
        {/* sweep */}
        <motion.div className="absolute inset-0 rounded-full"
          style={{ background: 'conic-gradient(from 0deg, rgba(21,93,252,0) 0deg, rgba(21,93,252,0) 300deg, rgba(21,93,252,.06) 330deg, rgba(21,93,252,.5) 360deg)' }}
          animate={{ rotate: 360 }} transition={{ duration: 4, ease: 'linear', repeat: Infinity }} />
        {/* blips */}
        {blips.map((b, i) => (
          <span key={i} className="absolute -translate-x-1/2 -translate-y-1/2" style={{ left: b.left, top: b.top }}>
            <span className="absolute inset-0 w-3 h-3 rounded-full animate-ping" style={{ background: b.crit ? SEV.crit : '#155dfc', opacity: 0.5 }} />
            <span className="relative block w-3 h-3 rounded-full" style={{ background: b.crit ? SEV.crit : '#155dfc' }} />
          </span>
        ))}
        {/* readout */}
        <div className="absolute left-3.5 bottom-3.5 font-mono text-[10.5px] leading-[1.7] text-white/55 tracking-wide">
          SCAN <b className="text-white">192.168.0.0/16</b><br />
          HOSTS <b className="text-white">1,284</b> · OPEN PORTS <b className="text-white">312</b><br />
          STATUS <span style={{ color: SEV.crit }}>● AGENT LIVE · MAPPING PATHS</span>
        </div>
      </div>
      {/* floating finding card */}
      <motion.div className="absolute top-[6%] right-0 w-[208px] bg-white border border-[#e5e5e5] rounded-2xl p-3.5 shadow-xl"
        animate={{ y: [0, -9, 0] }} transition={{ duration: 5, ease: 'easeInOut', repeat: Infinity }}>
        <div className="font-mono text-[10px] font-bold uppercase tracking-wider" style={{ color: SEV.crit }}>● Critical</div>
        <div className="font-heading font-bold text-sm mt-1.5 text-text-primary">Default VPN credentials</div>
        <div className="font-mono text-[11px] text-text-muted mt-0.5">vpn.bank-corp.io · CVSS 9.1</div>
      </motion.div>
    </div>
  )
}

function Hero() {
  return (
    <section className="bg-white rounded-[20px] relative overflow-hidden">
      <div className="max-w-[1376px] mx-auto px-4 md:px-8 pt-28 md:pt-32 pb-16 md:pb-20">
        <div className="grid lg:grid-cols-[1.05fr_.95fr] gap-12 lg:gap-14 items-center">
          <motion.div {...fadeUp}>
            <span className="section-tag mb-6 inline-block">AI Penetration Testing</span>
            <h1 className="font-heading font-bold uppercase tracking-[-0.04em] text-text-primary leading-[0.9]"
              style={{ fontSize: 'clamp(44px, 7.5vw, 104px)' }}>
              Real attack paths,<br /><span className="text-blue">found in hours.</span>
            </h1>
            <p className="mt-7 max-w-xl font-sans text-text-body text-lg font-light leading-relaxed">
              AI-driven penetration testing that maps how real weaknesses chain into a breach across your
              apps, cloud, network and AI systems — safely proves each one, and ranks exactly what to fix
              first. The depth of a seasoned red team, delivered at machine speed and packaged as an
              audit-ready report.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a href="#deploy" className="inline-flex items-center gap-2.5 text-[15px] font-semibold uppercase tracking-[0.06em] text-white bg-blue hover:bg-blue-hover px-7 py-4 rounded-full transition-all shadow-lg hover:shadow-xl hover:scale-[1.03]">
                Start your pentest <ArrowUpRight className="w-5 h-5" />
              </a>
              <a href="#book" className="inline-flex items-center gap-2 text-[15px] font-semibold uppercase tracking-[0.04em] text-text-primary border border-[#e5e5e5] hover:border-text-primary px-7 py-4 rounded-full transition-all">
                Book a scoping call
              </a>
            </div>
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 font-mono text-[12.5px] text-text-muted">
              {['No credit card required', 'Read-only access', 'Live in 5 minutes'].map(t => (
                <span key={t} className="inline-flex items-center gap-2"><Check className="w-3.5 h-3.5" style={{ color: SEV.low }} />{t}</span>
              ))}
            </div>
          </motion.div>
          <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.15 }}>
            <Radar />
          </motion.div>
        </div>

        {/* real proof stats (rescued from current page) */}
        <motion.div {...fadeUp} className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-[#e5e5e5] pt-10">
          {[
            { value: '150+', label: 'Audits completed' },
            { value: '99.8%', label: 'Threat detection' },
            { value: '48hr', label: 'Report delivery' },
            { value: '0', label: 'False positives' },
          ].map(s => (
            <div key={s.label}>
              <p className="font-heading text-[34px] md:text-[44px] font-light text-text-primary leading-none tracking-tight">{s.value}</p>
              <p className="text-[12px] text-text-muted mt-2 uppercase tracking-[0.08em]">{s.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

/* ────────────────────────── ATTACKER'S EYES ────────────────────────── */
const EYES = [
  { n: '01', t: 'End-to-end attack paths', p: 'See how isolated weaknesses chain together across code, cloud and network into real exploitation.' },
  { n: '02', t: 'Real exploits, not theory', p: "Every path is safely validated — so you fix what's actually weaponizable, not a wall of false positives." },
  { n: '03', t: 'Prioritized by real risk', p: 'Findings ranked by business impact, each paired with a concrete fix. No noise, no 200-page PDFs.' },
]
function AttackersEyes() {
  return (
    <section className="bg-bg-footer rounded-[20px]">
      <div className="max-w-[1376px] mx-auto px-4 md:px-8 py-20 md:py-28">
        <motion.div {...fadeUp} className="max-w-[760px] mb-14">
          <span className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-[#7da6ff]">Through an attacker's eyes</span>
          <h2 className="font-heading text-white text-3xl md:text-5xl font-bold uppercase tracking-[-0.03em] leading-[0.95] mt-4">
            We don't scan.<br />We attack.
          </h2>
          <p className="mt-5 max-w-xl font-sans text-white/60 text-lg font-light leading-relaxed">
            Scanners hand you a list. Our agent thinks like an adversary — chaining weaknesses into the exact
            paths a real attacker would take, from first exploit to full compromise.
          </p>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-6 md:gap-11">
          {EYES.map((e, i) => (
            <motion.div key={e.n} {...fadeUp} transition={{ ...fadeUp.transition, delay: i * 0.1 }}
              className="border-t border-white/15 pt-6">
              <div className="font-mono text-[13px] font-bold tracking-[0.1em] text-[#7da6ff]">{e.n}</div>
              <h4 className="font-heading text-white text-xl md:text-2xl font-semibold tracking-[-0.015em] mt-3.5 mb-2.5">{e.t}</h4>
              <p className="font-sans text-white/60 text-[15px] font-light leading-relaxed">{e.p}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ────────────────────────── WHAT IT TESTS ────────────────────────── */
const SURFACES = [
  { icon: Globe, t: 'External Network', p: 'Perimeter, VPNs, exposed services, email spoofing & leaked credentials.' },
  { icon: AppWindow, t: 'Web & Mobile Apps', p: 'OWASP Top 10, auth & session flaws, IDOR, and business-logic abuse.' },
  { icon: Network, t: 'Internal Network', p: 'Assumed-breach: AD, privilege escalation, lateral movement & segmentation.' },
  { icon: Cloud, t: 'Cloud & API', p: 'IAM misconfig, exposed storage & secrets, REST/GraphQL across AWS, Azure & GCP.' },
  { icon: Mail, t: 'Social Engineering', p: 'Phishing & pretext simulations that test your people — safely, never named.' },
  { icon: Wifi, t: 'Wireless & Physical', p: 'Wi-Fi & rogue APs, network segmentation, and optional on-site testing.' },
  { icon: ScanEye, t: 'AI & LLM Systems', p: 'Prompt injection, model extraction, data poisoning & API abuse — the AI attack surface legacy tools miss.' },
]
function Surfaces() {
  return (
    <section className="bg-white rounded-[20px]">
      <div className="max-w-[1376px] mx-auto px-4 md:px-8 py-20 md:py-28">
        <motion.div {...fadeUp} className="max-w-[760px] mb-12 md:mb-16">
          <span className="section-tag mb-6 inline-block">Full-surface coverage</span>
          <h2 className="font-heading text-text-primary text-3xl md:text-5xl font-bold uppercase tracking-[-0.03em] leading-[0.95]">
            Every door,<br />window &amp; person.
          </h2>
          <p className="mt-5 font-sans text-text-body text-lg font-light leading-relaxed">
            One agent, your entire attack surface — external, internal, application, cloud, and the humans in between.
          </p>
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {SURFACES.map((s, i) => {
            const Icon = s.icon
            return (
              <motion.div key={s.t} {...fadeUp} transition={{ ...fadeUp.transition, delay: (i % 3) * 0.08 }}
                className="bg-white border border-[#ececf0] rounded-2xl p-7 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all">
                <span className="w-[46px] h-[46px] rounded-xl bg-blue/[0.08] text-blue grid place-items-center mb-5">
                  <Icon className="w-[23px] h-[23px]" strokeWidth={1.75} />
                </span>
                <h4 className="font-heading text-text-primary text-lg font-semibold mb-2">{s.t}</h4>
                <p className="font-sans text-text-body text-sm font-light leading-relaxed">{s.p}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

/* ────────────────────────── DEPLOY IN 4 STEPS ────────────────────────── */
const STEPS = [
  { icon: Github, n: '01', t: 'Quick Sign-Up', p: 'One click with GitHub or Google. No credit card to start.' },
  { icon: CreditCard, n: '02', t: 'Secure Wallet', p: 'Add a payment method via Stripe. Encrypted, PCI-compliant.' },
  { icon: Layers, n: '03', t: 'Choose Tier', p: 'From a single recon scan to a continuous red-team agent.' },
  { icon: Crosshair, n: '04', t: 'Deploy Agent', p: 'The agent goes live and starts hunting real attack paths.' },
]
const STEP_MS = 4500

function GoogleG({ className }) {
  return (
    <svg viewBox="0 0 24 24" className={className}>
      <path fill="#4285F4" d="M23.5 12.27c0-.79-.07-1.54-.2-2.27H12v4.51h6.47a5.53 5.53 0 0 1-2.4 3.63v3h3.88c2.27-2.09 3.55-5.17 3.55-8.87z" />
      <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.95-2.91l-3.88-3c-1.08.72-2.45 1.16-4.07 1.16-3.13 0-5.78-2.11-6.73-4.96H1.26v3.09A12 12 0 0 0 12 24z" />
      <path fill="#FBBC05" d="M5.27 14.29a7.2 7.2 0 0 1 0-4.58V6.62H1.26a12 12 0 0 0 0 10.76l4.01-3.09z" />
      <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.43-3.43C17.95 1.19 15.24 0 12 0A12 12 0 0 0 1.26 6.62l4.01 3.09C6.22 6.86 8.87 4.75 12 4.75z" />
    </svg>
  )
}

function DeployPreview({ active }) {
  if (active === 0) return (
    <div className="w-full max-w-[360px] bg-white border border-[#ececf0] rounded-2xl shadow-xl p-8">
      <div className="font-heading text-[22px] font-bold tracking-[-0.02em]">Create your account</div>
      <div className="text-sm text-text-body mt-1.5 mb-6">Start your first pentest in minutes.</div>
      <button className="flex items-center justify-center gap-3 w-full py-3.5 rounded-xl font-semibold text-[15px] bg-bg-footer text-white mb-3">
        <Github className="w-5 h-5" /> Continue with GitHub
      </button>
      <button className="flex items-center justify-center gap-3 w-full py-3.5 rounded-xl font-semibold text-[15px] bg-white text-text-primary border border-[#e5e5e5]">
        <GoogleG className="w-5 h-5" /> Continue with Google
      </button>
      <div className="flex items-center gap-3.5 text-[12px] font-mono text-text-muted my-4.5">
        <span className="h-px flex-1 bg-[#ececf0]" />SOC 2 · SSO ready<span className="h-px flex-1 bg-[#ececf0]" />
      </div>
      <div className="flex items-center justify-center gap-2 text-[12.5px] font-mono text-text-muted">
        <Lock className="w-3.5 h-3.5" style={{ color: SEV.low }} />No credit card · Read-only access
      </div>
    </div>
  )
  if (active === 1) return (
    <div className="w-full max-w-[380px] bg-white border border-[#ececf0] rounded-2xl shadow-xl p-8">
      <div className="font-heading text-[20px] font-bold tracking-[-0.02em] mb-5">Add a payment method</div>
      <span className="font-mono text-[10.5px] uppercase tracking-[0.1em] text-text-muted mb-1.5 block">Card number</span>
      <div className="flex items-center gap-2.5 border border-[#e5e5e5] rounded-xl px-4 py-3 bg-[#f6f5fa] mb-3.5">
        <span className="font-mono text-[15px] tracking-wider flex-1">4242 4242 4242 4242</span>
        <span className="flex gap-1"><i className="w-6 h-[15px] rounded-sm block" style={{ background: '#1a1f71' }} /><i className="w-6 h-[15px] rounded-sm block" style={{ background: '#eb001b' }} /></span>
      </div>
      <div className="flex gap-3.5">
        <div className="flex-1"><span className="font-mono text-[10.5px] uppercase tracking-[0.1em] text-text-muted mb-1.5 block">Expiry</span><div className="border border-[#e5e5e5] rounded-xl px-4 py-3 bg-[#f6f5fa] font-mono text-[15px]">09 / 28</div></div>
        <div className="flex-1"><span className="font-mono text-[10.5px] uppercase tracking-[0.1em] text-text-muted mb-1.5 block">CVC</span><div className="border border-[#e5e5e5] rounded-xl px-4 py-3 bg-[#f6f5fa] font-mono text-[15px]">•••</div></div>
      </div>
      <div className="mt-4.5 w-full text-center bg-blue text-white py-3.5 rounded-xl font-semibold text-[15px]">Save &amp; continue</div>
      <div className="flex items-center justify-center gap-2 text-[12px] font-mono text-text-muted mt-4">
        <Lock className="w-3.5 h-3.5" style={{ color: SEV.low }} />Secured by Stripe · PCI-DSS
      </div>
    </div>
  )
  if (active === 2) return (
    <div className="w-full max-w-[520px] flex flex-col gap-3">
      {[
        { name: 'Small Business', desc: 'Right-sized pentest for a focused attack surface', price: 'Custom', unit: 'contact sales', sel: true, badge: 'POPULAR' },
        { name: 'Enterprise', desc: 'Continuous testing + compliance reporting at scale', price: 'Custom', unit: 'contact sales', sel: false },
      ].map(t => (
        <div key={t.name} className={`flex items-center gap-4 bg-white rounded-2xl px-5 py-5 transition-all ${t.sel ? 'border-[1.5px] border-blue ring-[3px] ring-blue/[0.08]' : 'border-[1.5px] border-[#ececf0]'}`}>
          <span className={`w-[22px] h-[22px] rounded-full border-2 grid place-items-center ${t.sel ? 'border-blue' : 'border-[#e4e4e9]'}`}>
            {t.sel && <span className="w-[11px] h-[11px] rounded-full bg-blue" />}
          </span>
          <div>
            <div className="font-heading font-bold text-lg flex items-center">{t.name}{t.badge && <span className="ml-2.5 font-mono text-[9.5px] font-bold tracking-[0.08em] text-blue bg-blue/[0.14] px-2 py-0.5 rounded-md">{t.badge}</span>}</div>
            <div className="text-[13px] text-text-body mt-0.5">{t.desc}</div>
          </div>
          <div className="ml-auto text-right"><b className="font-heading text-2xl font-bold tracking-[-0.03em]">{t.price}</b><span className="block font-mono text-[10.5px] text-text-muted tracking-wide">{t.unit}</span></div>
        </div>
      ))}
    </div>
  )
  return (
    <div className="w-full max-w-[440px] rounded-2xl overflow-hidden shadow-xl border border-white/10" style={{ background: '#0a0b0f' }}>
      <div className="flex items-center gap-2 px-4 py-3 border-b border-white/[0.08]">
        <i className="w-2.5 h-2.5 rounded-full bg-white/[0.18]" /><i className="w-2.5 h-2.5 rounded-full bg-white/[0.18]" /><i className="w-2.5 h-2.5 rounded-full bg-white/[0.18]" />
        <span className="font-mono text-[11.5px] text-white/50 ml-1.5">cybersphere-agent · deploy</span>
      </div>
      <div className="p-4.5 font-mono text-[12.5px] leading-[1.95] min-h-[200px] p-[18px]">
        {[
          ['✓', SEV.low, 'Provisioning isolated agent…'],
          ['✓', SEV.low, 'Authenticated read-only access'],
          ['✓', SEV.low, 'Enumerating attack surface… 1,284 assets'],
          ['→', '#6f8dff', 'Mapping exploit paths across code & cloud'],
          ['!', '#fff', '2 critical paths found — validating safely'],
        ].map((l, i) => (
          <motion.div key={i} className="text-white/60" initial={{ opacity: 0, x: -6 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 + i * 0.35 }}>
            <span style={{ color: l[1] }}>{l[0]}</span> {l[2]}
          </motion.div>
        ))}
      </div>
      <div className="flex items-center gap-2.5 px-4.5 py-3.5 px-[18px] border-t border-white/[0.08]" style={{ background: 'rgba(21,93,252,.08)' }}>
        <span className="w-2.5 h-2.5 rounded-full animate-pulse" style={{ background: SEV.low }} />
        <span className="font-mono text-[12px] text-white">Agent live · hunting attack paths</span>
        <span className="ml-auto font-mono text-[12px] font-semibold" style={{ color: SEV.low }}>ETA ~2h</span>
      </div>
    </div>
  )
}

function Deploy() {
  const [active, setActive] = useState(0)
  useEffect(() => {
    const t = setTimeout(() => setActive(a => (a + 1) % STEPS.length), STEP_MS)
    return () => clearTimeout(t)
  }, [active])

  return (
    <section id="deploy" className="bg-white rounded-[20px]">
      <div className="max-w-[1376px] mx-auto px-4 md:px-8 py-20 md:py-28">
        <motion.div {...fadeUp} className="max-w-[760px] mb-12 md:mb-16">
          <span className="section-tag mb-6 inline-block">Live in 5 minutes</span>
          <h2 className="font-heading text-text-primary text-3xl md:text-5xl font-bold uppercase tracking-[-0.03em] leading-[0.95]">
            Deploy your<br />pentest agent.
          </h2>
          <p className="mt-5 font-sans text-text-body text-lg font-light leading-relaxed">
            No security team, no scoping calls, no waiting weeks for a slot. Sign up, connect, and your
            autonomous agent starts mapping real attack paths in minutes — not months.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-[390px_1fr] gap-6 lg:gap-10 items-stretch">
          {/* steps rail */}
          <div className="flex flex-col gap-3">
            {STEPS.map((s, i) => {
              const Icon = s.icon
              const on = i === active
              return (
                <button key={s.n} onClick={() => setActive(i)}
                  className={`relative text-left flex gap-4.5 gap-[18px] items-start p-5 md:px-6 md:py-5 rounded-[20px] border overflow-hidden transition-all hover:-translate-y-0.5 ${on ? 'border-transparent shadow-xl' : 'border-[#ececf0] bg-white hover:shadow-md'}`}
                  style={on ? { background: '#0C0D11' } : undefined}>
                  <span className={`flex-none w-12 h-12 rounded-[13px] grid place-items-center ${on ? '' : 'bg-blue/[0.08] text-blue'}`}
                    style={on ? { background: 'rgba(21,93,252,.18)', color: '#fff' } : undefined}>
                    <Icon className="w-6 h-6" strokeWidth={1.75} />
                  </span>
                  <span className="flex-1 min-w-0">
                    <span className={`font-mono text-[11px] font-bold tracking-[0.14em] ${on ? 'text-[#7da6ff]' : 'text-text-muted'}`}>{s.n}</span>
                    <h4 className={`font-heading text-[19px] font-bold tracking-[-0.015em] mt-1.5 mb-1 ${on ? 'text-white' : 'text-text-primary'}`}>{s.t}</h4>
                    <p className={`text-[13.5px] font-light leading-snug ${on ? 'text-white/60' : 'text-text-body'}`}>{s.p}</p>
                  </span>
                  {on && (
                    <motion.span key={active} className="absolute left-0 bottom-0 h-[3px] bg-blue"
                      initial={{ width: '0%' }} animate={{ width: '100%' }} transition={{ duration: STEP_MS / 1000, ease: 'linear' }} />
                  )}
                </button>
              )
            })}
          </div>
          {/* preview */}
          <div className="relative rounded-[30px] bg-[#f6f5fa] border border-[#ececf0] shadow-md min-h-[520px] grid place-items-center p-7 md:p-12">
            <motion.div key={active} initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="w-full grid place-items-center">
              <DeployPreview active={active} />
            </motion.div>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2 font-mono text-[12.5px] text-text-muted">
          {['No credit card to start', 'Read-only access', 'Your data is never shared', 'Results in hours, not weeks'].map(t => (
            <span key={t} className="inline-flex items-center gap-2"><Check className="w-3.5 h-3.5" style={{ color: SEV.low }} />{t}</span>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ────────────────────────── FINDINGS DASHBOARD ────────────────────────── */
const FINDINGS = [
  { sev: 'crit', t: 'Default credentials on VPN gateway', a: 'vpn.fcb-corp.io:443', cvss: '9.1',
    impact: "The remote-access gateway still accepts the vendor's default admin login. Any attacker on the internet could log in and reach the internal network — including core banking systems — in minutes.",
    fix: 'Rotate all default credentials, enforce MFA on the gateway, and restrict the admin portal to a management VLAN.', est: '1 day' },
  { sev: 'crit', t: 'Unauthenticated access to customer records (IDOR)', a: '/api/v2/accounts/{id}', cvss: '8.6',
    impact: "Changing a single number in the account API returned another customer's balance and statements with no extra authorization — a direct privacy and GLBA violation.",
    fix: 'Enforce object-level authorization server-side on every account endpoint; add automated access-control tests to CI.', est: '3 days' },
  { sev: 'high', t: 'Flat internal network — no segmentation', a: '10.0.0.0/8', cvss: '7.4',
    impact: 'From a single phished teller workstation we reached the domain controller and core banking VLAN unobstructed. One compromised laptop = full environment.',
    fix: 'Segment teller, admin, and core banking networks; restrict east-west traffic and require jump-host access to sensitive zones.', est: '2 weeks' },
  { sev: 'high', t: '38% of staff entered credentials in phishing test', a: 'social-engineering · 142 employees', cvss: '7.1',
    impact: 'A realistic "IT password reset" email harvested live credentials from over a third of staff within two hours — the most common real-world entry point for ransomware.',
    fix: 'Roll out phishing-resistant MFA, quarterly simulated phishing, and targeted training for high-click departments.', est: 'ongoing' },
]
const SEV_BARS = [
  { nm: 'Critical', c: SEV.crit, ct: '02', w: 18 },
  { nm: 'High', c: SEV.high, ct: '05', w: 42 },
  { nm: 'Medium', c: SEV.med, ct: '11', w: 78 },
  { nm: 'Low', c: SEV.low, ct: '08', w: 58 },
]
function Findings() {
  const [open, setOpen] = useState(0)
  return (
    <section className="bg-white rounded-[20px]">
      <div className="max-w-[1376px] mx-auto px-4 md:px-8 py-20 md:py-28">
        <motion.div {...fadeUp} className="max-w-[760px] mb-12 md:mb-16">
          <span className="section-tag mb-6 inline-block">What you actually receive</span>
          <h2 className="font-heading text-text-primary text-3xl md:text-5xl font-bold uppercase tracking-[-0.03em] leading-[0.95]">
            A report your team<br />reads in 5 minutes.
          </h2>
          <p className="mt-5 font-sans text-text-body text-lg font-light leading-relaxed">
            Not a 200-page PDF of scanner noise. Every finding is validated by the agent, reviewed by a human,
            scored, ranked by real risk, and paired with a fix. Click any finding to expand.
          </p>
        </motion.div>

        <motion.div {...fadeUp} className="rounded-[30px] overflow-hidden shadow-xl border border-white/[0.08]" style={{ background: '#0C0D11' }}>
          {/* bar */}
          <div className="flex items-center justify-between flex-wrap gap-3 px-6 py-4.5 py-[18px] border-b border-white/[0.08]" style={{ background: 'rgba(255,255,255,.02)' }}>
            <div className="flex items-center gap-4">
              <div className="flex gap-[7px]"><i className="w-2.5 h-2.5 rounded-full bg-white/[0.18]" /><i className="w-2.5 h-2.5 rounded-full bg-white/[0.18]" /><i className="w-2.5 h-2.5 rounded-full bg-white/[0.18]" /></div>
              <span className="font-mono text-[13px] text-white/70">cybersphere_report — <b className="text-white">acme-corp.io</b> <span className="opacity-50">[sample]</span></span>
            </div>
            <span className="font-mono text-[11px] font-bold tracking-[0.05em] text-white px-2.5 py-1 rounded-md" style={{ background: SEV.crit }}>ACTION REQUIRED</span>
          </div>

          <div className="grid md:grid-cols-[300px_1fr]">
            {/* sidebar */}
            <aside className="p-7 border-b md:border-b-0 md:border-r border-white/[0.08]">
              <div className="font-mono text-[11px] uppercase tracking-[0.14em] text-white/45 mb-5">Findings by severity</div>
              <div className="flex flex-col gap-4">
                {SEV_BARS.map(b => (
                  <div key={b.nm}>
                    <div className="flex justify-between items-baseline mb-2">
                      <span className="text-[13px] font-semibold text-white/85 flex items-center gap-2"><i className="w-[9px] h-[9px] rounded-sm block" style={{ background: b.c }} />{b.nm}</span>
                      <span className="font-mono text-xl font-bold text-white">{b.ct}</span>
                    </div>
                    <div className="h-1.5 rounded-full bg-white/[0.08] overflow-hidden">
                      <motion.span className="block h-full rounded-full" style={{ background: b.c }}
                        initial={{ width: 0 }} whileInView={{ width: `${b.w}%` }} viewport={{ once: true }} transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }} />
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-5 border-t border-white/[0.08]">
                <div className="text-[46px] font-heading font-bold tracking-[-0.03em] leading-none" style={{ color: SEV.crit }}>High<small className="text-lg text-white/40 font-semibold"> risk</small></div>
                <div className="font-mono text-[11px] text-white/50 mt-2 tracking-wide">Overall posture · re-test free within 90 days</div>
              </div>
            </aside>

            {/* findings */}
            <div className="p-3.5">
              {FINDINGS.map((f, i) => {
                const isOpen = open === i
                return (
                  <div key={i} className="rounded-xl overflow-hidden mb-2 border border-white/[0.07]" style={{ background: 'rgba(255,255,255,.02)' }}>
                    <button onClick={() => setOpen(isOpen ? -1 : i)} className="w-full flex items-center gap-4 px-4.5 py-4 px-[18px] text-left hover:bg-white/[0.04] transition-colors">
                      <span className="font-mono text-[10px] font-bold uppercase tracking-[0.08em] px-2.5 py-1 rounded-md flex-none"
                        style={{ background: f.sev === 'crit' ? 'rgba(229,72,77,.16)' : 'rgba(247,104,8,.16)', color: f.sev === 'crit' ? '#ff7a7e' : '#ffa05a' }}>{f.sev === 'crit' ? 'Critical' : 'High'}</span>
                      <span className="flex-1 min-w-0">
                        <span className="block font-bold text-[15.5px] text-white tracking-[-0.01em] truncate">{f.t}</span>
                        <span className="block font-mono text-[11.5px] text-white/45 mt-0.5 truncate">{f.a}</span>
                      </span>
                      <span className="font-mono text-[13px] font-bold text-white flex-none text-center">{f.cvss}<small className="block text-[9px] text-white/40 font-medium tracking-[0.08em] mt-0.5">CVSS</small></span>
                      <ChevronDown className={`w-4.5 h-[18px] flex-none text-white/40 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                    </button>
                    <motion.div initial={false} animate={{ height: isOpen ? 'auto' : 0 }} transition={{ duration: 0.35, ease: 'easeInOut' }} className="overflow-hidden">
                      <div className="grid sm:grid-cols-2 gap-4.5 gap-[18px] px-4.5 pb-4.5 px-[18px] pb-[18px]">
                        <div><div className="font-mono text-[10px] uppercase tracking-[0.12em] text-white/40 mb-1.5">Impact</div><p className="text-[13.5px] text-white/70 leading-relaxed">{f.impact}</p></div>
                        <div><div className="font-mono text-[10px] uppercase tracking-[0.12em] text-white/40 mb-1.5">Remediation</div><p className="text-[13.5px] text-white/70 leading-relaxed">{f.fix}</p>
                          <span className="inline-flex items-center gap-1.5 font-mono text-[11px] font-semibold mt-2.5 px-2.5 py-1 rounded-md" style={{ color: SEV.low, background: 'rgba(18,165,148,.14)' }}>FIX EST. · {f.est}</span></div>
                      </div>
                    </motion.div>
                  </div>
                )
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

/* ────────────────────────── COMPLIANCE ────────────────────────── */
const COMP = [
  { ab: 'SOC 2', full: 'Service Organization Control 2', map: 'CC4.1 monitoring & CC7.1 vulnerability evidence.' },
  { ab: 'ISO 27001', full: 'Information Security Management', map: 'A.12.6 technical vulnerability testing.' },
  { ab: 'PCI-DSS', full: 'Payment Card Industry Data Security Standard', map: 'Req. 11.3 internal & external penetration testing.' },
  { ab: 'GLBA', full: 'Gramm-Leach-Bliley Safeguards Rule', map: 'regular testing of safeguards protecting customer data.' },
  { ab: 'FFIEC', full: 'Federal Financial Institutions Examination Council', map: 'CAT independent diagnostic testing.' },
]
function Compliance() {
  return (
    <section className="bg-white rounded-[20px] border border-[#ececf0]">
      <div className="max-w-[1376px] mx-auto px-4 md:px-8 py-20 md:py-28">
        <motion.div {...fadeUp} className="max-w-[760px] mb-12 md:mb-16">
          <span className="section-tag mb-6 inline-block">Compliance, handled</span>
          <h2 className="font-heading text-text-primary text-3xl md:text-5xl font-bold uppercase tracking-[-0.03em] leading-[0.95]">
            One report.<br />Every box ticked.
          </h2>
          <p className="mt-5 font-sans text-text-body text-lg font-light leading-relaxed">
            Turn every run into an audit-ready, pentest-style report. Findings map straight to the frameworks
            you're held to — from a startup chasing SOC 2 to a bank facing examiners.
          </p>
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3.5">
          {COMP.map((c, i) => (
            <motion.div key={c.ab} {...fadeUp} transition={{ ...fadeUp.transition, delay: i * 0.07 }}
              className="bg-white border border-[#ececf0] rounded-[14px] p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all">
              <div className="font-mono font-bold text-[15px] tracking-wide text-blue">{c.ab}</div>
              <div className="text-[13px] text-text-muted mt-1.5 mb-4 min-h-[34px]">{c.full}</div>
              <div className="text-[13.5px] text-text-body border-t border-[#ececf0] pt-3.5 leading-snug"><b className="text-text-primary font-bold">Maps to:</b> {c.map}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default function TestDeploy() {
  return (
    <div className="flex flex-col gap-1.5 p-1.5">
      <Hero />
      <Deploy />
      <AttackersEyes />
      <Surfaces />
      <Findings />
      <Compliance />
      <div id="book"><CTASection /></div>
    </div>
  )
}
