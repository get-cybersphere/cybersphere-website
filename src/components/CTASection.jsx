import { ArrowUpRight } from 'lucide-react'
import { useFadeUp } from '../hooks/useScrollAnimation'
import ctaBg from '../assets/images/background/CTA.png'

export default function CTASection() {
  const anim = useFadeUp()

  return (
    <div
      ref={anim.ref}
      className={`${anim.className} bg-white rounded-[20px] relative overflow-hidden min-h-[480px] md:min-h-[600px] flex flex-col`}
    >
      {/* Graphic — pushed left */}
      <div className="absolute inset-0 flex items-center justify-center md:justify-start md:pl-[8%] pointer-events-none">
        <img src={ctaBg} alt="" className="w-[min(420px,55vw)] h-auto translate-x-[10%]" />
      </div>

      {/* Top-left: description */}
      <div className="relative z-10 flex justify-start p-8 md:p-12">
        <p className="text-[11px] md:text-[12px] font-medium uppercase tracking-[0.08em] text-text-muted max-w-[300px] text-left leading-[1.8]">
          Let's build something extraordinary. Contact us today to explore AI solutions tailored to your business.
        </p>
      </div>

      <div className="flex-1" />

      {/* Bottom-right: massive heading + links */}
      <div className="relative z-10 p-8 md:p-12 md:text-right">
        <h2
          className="font-heading font-bold uppercase leading-[0.9] tracking-[-0.04em]"
          style={{ fontSize: 'clamp(44px, 9vw, 130px)' }}
        >
          Reach Out<br />Now
        </h2>
        <div className="flex items-center gap-6 mt-5 md:justify-end">
          <a
            href="https://api.leadconnectorhq.com/widget/bookings/cybersphere-ai-implementation-strategy-call"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[13px] font-medium uppercase tracking-[0.12em] text-text-primary hover:text-blue transition-colors"
          >
            Schedule a Call <ArrowUpRight className="w-4 h-4" />
          </a>
          <a
            href="mailto:archie@getcybersphere.com"
            className="inline-flex items-center gap-2 text-[13px] font-medium uppercase tracking-[0.12em] text-text-muted hover:text-text-primary transition-colors"
          >
            Email Us <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  )
}
