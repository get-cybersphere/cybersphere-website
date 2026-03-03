import { useFadeUp } from '../hooks/useScrollAnimation'

export default function SubpageHero({ badge, badgeIcon: BadgeIcon, headline, headlineAccent, subtext }) {
  const anim = useFadeUp(0.1)

  return (
    <section className="bg-white">
      <div
        ref={anim.ref}
        className={`${anim.className} max-w-[1376px] mx-auto px-4 md:px-8 pt-32 md:pt-40 pb-16 md:pb-24`}
      >
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="section-tag mb-8">
            {BadgeIcon && <BadgeIcon className="w-4 h-4" strokeWidth={1.5} />}
            {badge}
          </div>

          {/* Headline */}
          <h1 className="mb-6">
            {headline}
            {headlineAccent && (
              <>
                <br />
                <span className="text-blue">{headlineAccent}</span>
              </>
            )}
          </h1>

          {/* Subtext */}
          <p className="text-text-body text-lg max-w-xl mb-10 leading-relaxed">
            {subtext}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="https://api.leadconnectorhq.com/widget/bookings/cybersphere-ai-implementation-strategy-call"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center text-[14px] font-medium px-7 py-3 rounded-full bg-blue text-white hover:bg-blue-hover transition-colors"
            >
              Book a Free Demo
            </a>
            <a
              href="mailto:archie@getcybersphere.com"
              className="inline-flex items-center justify-center text-[14px] font-medium px-7 py-3 rounded-full border border-border-line text-text-primary hover:border-blue hover:text-blue transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
