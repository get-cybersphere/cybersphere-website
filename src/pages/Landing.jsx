import { Link } from 'react-router-dom'
import {
  ArrowUpRight,
  Headphones,
  Target,
  UserCheck,
  Shield,
  Search,
  Layers,
  Plug,
  Rocket,
} from 'lucide-react'
import SectionLabel from '../components/SectionLabel'
import LogoTicker from '../components/LogoTicker'
import TestimonialCard from '../components/TestimonialCard'
import CTASection from '../components/CTASection'
import { useFadeUp } from '../hooks/useScrollAnimation'
import heroBg from '../assets/images/background/HERO.png'
import offeringsBg from '../assets/images/background/offerings.png'
import offering1Bg from '../assets/images/background/offering1.png'
import offering2Bg from '../assets/images/background/offering2.png'

function FadeUp({ children, className = '' }) {
  const anim = useFadeUp()
  return (
    <div ref={anim.ref} className={`${anim.className} ${className}`}>
      {children}
    </div>
  )
}


const SOLUTIONS = [
  {
    icon: Headphones,
    label: 'Voice Agent',
    title: 'AI Voice Agent',
    description: '24/7 intelligent call answering that qualifies leads, books appointments, and recovers missed calls.',
    path: '/voice-agent',
  },
  {
    icon: Target,
    label: 'Lead Gen',
    title: 'AI Lead Gen Engine',
    description: 'Automated lead capture, rapid outbound follow-up, and funnel optimization. Turn interest into revenue.',
    path: '/lead-gen',
  },
  {
    icon: UserCheck,
    label: 'AI Employee',
    title: 'AI Personal Employee',
    description: 'Workflow automation that replaces repetitive admin, CRM management, and manual computer work.',
    path: '/ai-employee',
  },
  {
    icon: Shield,
    label: 'Pentesting',
    title: 'AI Pentesting',
    description: 'Proactive security testing and hardening for your AI systems. Identify vulnerabilities early.',
    path: '/pentesting',
  },
]

const PROCESS = [
  { icon: Search, title: 'Discovery & Audit', description: 'Map workflows, identify revenue leaks, define measurable objectives.' },
  { icon: Layers, title: 'System Architecture', description: 'Design custom AI stack for your tech environment and business rules.' },
  { icon: Plug, title: 'Build & Integration', description: 'Build and integrate into existing tools (CRM, phones, calendars, ads) with zero disruption.' },
  { icon: Rocket, title: 'Launch & Optimize', description: 'Deploy, monitor KPIs, iterate until measurable improvement is achieved.' },
]

const TESTIMONIALS = [
  {
    quote: "Since deploying the AI voice agent, we've recovered an average of 47 missed calls per week. That's bookings we were simply leaving on the table.",
    name: 'Sarah Mitchell',
    role: 'Operations Director',
    company: 'Elite Fitness Group',
  },
  {
    quote: 'The lead gen engine cut our average response time from 4 hours to 90 seconds. Our conversion rate went from 8% to 23% in the first quarter.',
    name: 'Marcus Chen',
    role: 'Managing Partner',
    company: 'Westfield Realty',
  },
  {
    quote: 'We replaced two full-time admin roles with the AI employee system. It handles scheduling, follow-ups, and CRM updates without a single error.',
    name: 'Dr. Rachel Torres',
    role: 'Clinic Owner',
    company: 'Renewal Medical Spa',
  },
]

export default function Landing() {
  return (
    <div className="flex flex-col gap-1.5 p-1.5">
      {/* ── Hero ── */}
      <section className="min-h-screen bg-white rounded-[20px] relative overflow-hidden flex flex-col">
        {/* Hero graphic */}
        <div className="absolute inset-0 flex items-center justify-center md:justify-end md:pr-[8%] pointer-events-none">
          <div className="hero-enter hero-enter-d1">
            <img src={heroBg} alt="" className="hero-float w-[min(520px,65vw)] h-auto -rotate-[22deg]" />
          </div>
        </div>

        {/* Top Row */}
        <div className="relative z-10 max-w-[1376px] w-full mx-auto px-4 md:px-8 pt-24 md:pt-28 hero-enter">
          <div className="flex justify-between items-start">
            <div className="hidden lg:flex flex-col gap-8">
              <div>
                <p className="text-[11px] font-medium uppercase tracking-[0.15em] text-text-muted mb-1">AI Implementation</p>
                <p className="text-[13px] text-text-body leading-relaxed max-w-[180px]">Custom systems for calls, leads & operations</p>
              </div>
              <div>
                <p className="text-[11px] font-medium uppercase tracking-[0.15em] text-text-muted mb-1">White-Glove</p>
                <p className="text-[13px] text-text-body leading-relaxed max-w-[180px]">Discovery to deployment, fully managed</p>
              </div>
            </div>
            <div className="flex gap-8 md:gap-12 ml-auto">
              {[
                { value: '+200', label: 'Businesses' },
                { value: '+50K', label: 'Calls Answered' },
                { value: '3x', label: 'Revenue' },
              ].map(stat => (
                <div key={stat.label} className="text-right">
                  <p className="font-heading text-[32px] md:text-[44px] font-light text-text-primary leading-none tracking-tight">{stat.value}</p>
                  <p className="text-[11px] text-text-muted mt-1.5 uppercase tracking-[0.08em]">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex-1" />

        <div className="relative z-10 max-w-[1376px] w-full mx-auto px-4 md:px-8 pb-10 md:pb-16">
          <div className="hero-enter hero-enter-d2">
            <h1
              className="font-heading font-bold uppercase leading-[0.9] tracking-[-0.04em]"
              style={{ fontSize: 'clamp(44px, 9.5vw, 150px)' }}
            >
              AI Systems<br />
              <span className="text-blue">Built for</span><br />
              Business
            </h1>
          </div>
          <div className="hero-enter hero-enter-d3 flex items-center justify-between mt-6 md:mt-8">
            <a
              href="https://api.leadconnectorhq.com/widget/bookings/cybersphere-ai-implementation-strategy-call"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 text-[18px] font-semibold uppercase tracking-[0.08em] text-white bg-blue hover:bg-blue-hover px-8 py-4 rounded-full transition-all shadow-lg hover:shadow-xl hover:scale-105"
            >
              Book a Call <ArrowUpRight className="w-6 h-6" />
            </a>
            <p className="text-[12px] text-text-muted hidden sm:block">
              Trusted by gyms, law firms, clinics & service businesses
            </p>
          </div>
        </div>
      </section>

      {/* ── Core Solutions ── */}
      <FadeUp className="grid lg:grid-cols-2 gap-1.5">
        <div className="bg-white rounded-[20px] p-8 md:p-12 flex flex-col items-center relative overflow-hidden">
          <h2 className="font-heading font-bold uppercase leading-[1.05] tracking-[-0.02em] text-center mt-4 md:mt-8">
            Core<br />Solutions
          </h2>
          <div className="flex-1" />
          <img src={offeringsBg} alt="" className="absolute bottom-0 left-0 w-[75%] max-w-[320px] h-auto pointer-events-none" />
        </div>
        <div className="flex flex-col gap-1.5">
          {SOLUTIONS.map((sol, i) => {
            const featured = i === 1
            return (
              <Link
                key={sol.path}
                to={sol.path}
                className={`${featured ? 'flex-[1.5]' : 'flex-1'} rounded-[20px] p-7 md:p-8 flex flex-col justify-between group transition-colors relative overflow-hidden ${featured
                    ? 'bg-blue text-white'
                    : 'bg-white hover:bg-bg-gray'
                  }`}
              >
                <h3
                  className={`font-heading font-bold uppercase text-[22px] md:text-[26px] leading-[1.1] tracking-[-0.01em] relative z-10 ${featured ? 'text-white' : 'text-text-primary'
                    }`}
                >
                  {sol.title}
                </h3>
                <div className="flex items-end justify-end gap-3 relative z-10">
                  <p
                    className={`text-[11px] font-medium uppercase tracking-[0.06em] text-right max-w-[260px] leading-[1.6] ${featured ? 'text-white/70' : 'text-text-muted'
                      }`}
                  >
                    {sol.description}
                  </p>
                  <ArrowUpRight
                    className={`w-5 h-5 flex-shrink-0 ${featured ? 'text-white' : 'text-blue'
                      }`}
                  />
                </div>
                {i === 1 && (
                  <img src={offering1Bg} alt="" className="absolute bottom-0 left-0 w-[45%] max-w-[180px] h-auto pointer-events-none opacity-90" />
                )}
                {i === 3 && (
                  <img src={offering2Bg} alt="" className="absolute top-0 left-1/2 -translate-x-1/2 w-[45%] max-w-[180px] h-auto pointer-events-none opacity-90" />
                )}
              </Link>
            )
          })}
        </div>
      </FadeUp>

      {/* ── Process ── */}
      <FadeUp>
        <div className="bg-white rounded-[20px] p-8 md:p-10 lg:p-12">
          <div className="flex flex-col-reverse md:flex-row justify-between items-start gap-6">
            <p className="text-[11px] md:text-[12px] font-medium uppercase tracking-[0.1em] text-text-muted max-w-[340px] leading-[1.8]">
              Every engagement is custom. Deep operational discovery, custom architecture, seamless integration, and measurable results.
            </p>
            <h2
              className="font-heading font-bold uppercase leading-[1.05] tracking-[-0.02em] md:text-right"
              style={{ fontSize: 'clamp(36px, 5vw, 72px)' }}
            >
              Our<br />Process
            </h2>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-1.5 mt-1.5">
          {PROCESS.map((step, i) => {
            const featured = i === 1
            return (
              <div
                key={i}
                className={`rounded-[20px] p-6 md:p-8 flex flex-col min-h-[340px] md:min-h-[400px] ${featured ? 'bg-blue text-white' : 'bg-white'
                  }`}
              >
                <h3
                  className={`font-heading font-bold uppercase text-[20px] md:text-[22px] leading-[1.1] tracking-[-0.01em] text-center ${featured ? 'text-white' : 'text-text-primary'
                    }`}
                >
                  {step.title}
                </h3>
                <div className="flex-1 flex items-center justify-center py-6">
                  <step.icon
                    className={`w-16 h-16 md:w-20 md:h-20 ${featured ? 'text-white/80' : 'text-blue'
                      }`}
                    strokeWidth={1}
                  />
                </div>
                <p
                  className={`text-[11px] font-medium uppercase tracking-[0.06em] leading-[1.7] ${featured ? 'text-white/70' : 'text-text-muted'
                    }`}
                >
                  {step.description}
                </p>
              </div>
            )
          })}
        </div>
      </FadeUp>

      {/* ── Trusted By Ticker ── */}
      <LogoTicker />

      {/* ── Testimonials ── */}
      <FadeUp className="bg-white rounded-[20px] py-12 md:py-16">
        <div className="max-w-[1376px] mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <SectionLabel text="Client Results" />
            <h2>Built for outcomes, measured by results</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {TESTIMONIALS.map((t, i) => (
              <TestimonialCard key={i} {...t} />
            ))}
          </div>
        </div>
      </FadeUp>

      {/* ── CTA ── */}
      <CTASection />
    </div>
  )
}
