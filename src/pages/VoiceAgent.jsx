import { Headphones, ArrowUpRight } from 'lucide-react'
import HearItYourself from '../components/HearItYourself'
import CTASection from '../components/CTASection'
import { useFadeUp } from '../hooks/useScrollAnimation'
import voiceBg from '../assets/images/background/voice.png'

function FadeUp({ children, className = '' }) {
  const anim = useFadeUp()
  return (
    <div ref={anim.ref} className={`${anim.className} ${className}`}>
      {children}
    </div>
  )
}

const NUMBER_CARDS = [
  {
    subtitle: 'Missed Call Recovery',
    number: '38%',
    title: 'Calls recovered\ninto bookings',
    description: (
      <>
        Pinnacle Dental Group (TX) let <strong className="text-text-primary">AI follow up on every missed call</strong> within 30 seconds — converting 38% of previously lost calls into confirmed appointments.
      </>
    ),
  },
  {
    subtitle: 'Speed to Answer',
    number: '1.8s',
    title: 'Average\npickup time',
    description: (
      <>
        Across 7,200+ calls last quarter, the AI answered in under two seconds — before most humans even reach the phone.{' '}
        <strong className="text-text-primary">No hold music. No voicemail.</strong>
      </>
    ),
  },
  {
    subtitle: 'After-Hours Revenue',
    number: '$218K',
    title: 'Booked outside\nbusiness hours',
    description:
      'Summit Legal Partners (CA) captured $218K in new client retainers from calls that came in after 6 PM and on weekends — hours their front desk was closed.',
  },
  {
    subtitle: 'Operational Savings',
    number: '4.7x',
    title: 'Cost efficiency\nvs. staffing',
    description:
      'Replacing a dedicated receptionist with an AI voice receptionist costs a fraction of a full-time salary while handling unlimited concurrent calls around the clock.',
  },
]

export default function VoiceAgent() {
  return (
    <>
      {/* -- Hero -- */}
      <section className="min-h-screen bg-white rounded-[20px] relative overflow-hidden flex flex-col">
        {/* Hero graphic */}
        <div className="absolute inset-0 flex items-center justify-center md:justify-end md:pr-[8%] pointer-events-none">
          <div className="hero-enter hero-enter-d1">
            <img src={voiceBg} alt="" className="hero-float w-[min(520px,65vw)] h-auto rotate-[-42deg]" />
          </div>
        </div>

        {/* Top Row */}
        <div className="relative z-10 max-w-[1376px] w-full mx-auto px-4 md:px-8 pt-24 md:pt-28 hero-enter">
          <div className="flex justify-between items-start">
            <div className="hidden lg:flex flex-col gap-8">
              <div>
                <p className="text-[11px] font-medium uppercase tracking-[0.15em] text-text-muted mb-1">24/7 Coverage</p>
                <p className="text-[13px] text-text-body leading-relaxed max-w-[180px]">Every call answered in under 2 seconds, day or night</p>
              </div>
              <div>
                <p className="text-[11px] font-medium uppercase tracking-[0.15em] text-text-muted mb-1">Full-Service</p>
                <p className="text-[13px] text-text-body leading-relaxed max-w-[180px]">Qualifies leads, books appointments, handles FAQs</p>
              </div>
            </div>
            <div className="flex gap-8 md:gap-12 ml-auto">
              {[
                { value: '+50K', label: 'Calls Handled' },
                { value: '2s', label: 'Avg. Pickup' },
                { value: '97%', label: 'Resolution Rate' },
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
              Never Miss<br />
              <span className="text-blue">Another</span><br />
              Call
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
              AI receptionist for gyms, clinics, law firms & service businesses
            </p>
          </div>
        </div>
      </section>

      {/* -- Hear It for Yourself -- */}
      <HearItYourself />

      {/* -- Real Results, Real Revenue -- */}
      <section className="bg-bg-gray">
        <FadeUp className="max-w-[1376px] mx-auto px-4 md:px-8 py-16 md:py-24">
          <h2 className="mb-3">The Numbers Speak</h2>
          <p className="text-text-body text-lg mb-12 max-w-2xl leading-relaxed">
            Measurable outcomes from businesses that switched to an AI voice receptionist.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {NUMBER_CARDS.map((card) => (
              <div key={card.number} className="flex flex-col">
                {/* Card — stat only */}
                <div className="bg-white border border-border-line rounded-2xl px-6 py-8 mb-6">
                  <p className="text-[11px] font-semibold uppercase tracking-widest text-text-muted mb-4">
                    {card.subtitle}
                  </p>
                  <p className="text-[48px] md:text-[56px] font-light leading-none text-blue mb-3">
                    {card.number}
                  </p>
                  <p className="text-[22px] md:text-[26px] font-semibold leading-tight text-text-primary whitespace-pre-line">
                    {card.title}
                  </p>
                </div>

                {/* Description — outside card */}
                <p className="text-text-body text-[15px] leading-relaxed">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </FadeUp>
      </section>

      {/* -- Demo Video Placeholder -- */}
      <section className="bg-bg-gray">
        <FadeUp className="max-w-[1376px] mx-auto px-4 md:px-8 py-16 md:py-24">
          <div className="flex flex-col lg:flex-row items-start justify-between gap-12 lg:gap-20">
            {/* Left — text */}
            <div className="w-full lg:w-5/12 order-2 lg:order-1">
              <h2 className="mb-8">
                From Setup to Live in Under a Day
              </h2>
              <div className="space-y-5 text-text-body text-[16px] leading-[1.6]">
                <p>
                  Point us to your website. Our system scans your{' '}
                  <span className="font-semibold text-text-primary">services, hours, and pricing</span>{' '}
                  then builds a fully trained voice receptionist tailored to your business — ready
                  to take calls the same afternoon.
                </p>
                <p>
                  Every call is picked up instantly. The AI handles FAQs, qualifies new leads,
                  books directly into your{' '}
                  <span className="font-semibold text-text-primary">calendar or CRM</span>,
                  and routes complex requests to your team with a full conversation summary.
                </p>
                <p>
                  No scripts to write. No phone trees to configure. Just connect your number
                  and let the agent work.
                </p>
              </div>
            </div>

            {/* Right — placeholder */}
            <div className="w-full lg:w-7/12 order-1 lg:order-2">
              <div className="relative aspect-video w-full rounded-3xl overflow-hidden bg-white border border-border-line flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-bg-gray flex items-center justify-center mx-auto mb-4">
                    <svg className="w-7 h-7 text-text-muted" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                  </div>
                  <p className="text-text-muted text-sm">Demo video coming soon</p>
                </div>
              </div>
            </div>
          </div>
        </FadeUp>
      </section>

      {/* -- CTA -- */}
      <CTASection />
    </>
  )
}
