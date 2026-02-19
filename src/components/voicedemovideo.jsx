import { useState } from 'react'
import { Volume2, VolumeX } from 'lucide-react'

const videoUrl =
  'https://static.newo.ai/video/Partner-Portal-Video(4)-DimaV008.mp4'
const posterUrl =
  'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/78e34b7f-fef5-4777-a4a7-9ded8d09f5a1-newo-ai/assets/images/David_Yang__D0_BC_D0_BD_D0_B5__D0_BD_D1_83_D0_B6_D-4.webp'

export default function DemoVideoSection() {
  const [muted, setMuted] = useState(true)

  return (
    <section className="bg-bg-gray">
      <div className="max-w-[1376px] mx-auto px-4 md:px-8 py-16 md:py-24">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-12 lg:gap-20">
          {/* Left — text */}
          <div className="w-full lg:w-5/12 order-2 lg:order-1">
            <h2 className="mb-8">
              Our Team Explains How It Works in 2 Minutes
            </h2>

            <div className="space-y-5 text-text-body text-[16px] leading-[1.6]">
              <p>
                Share your website. In{' '}
                <span className="font-semibold text-text-primary">
                  3 minutes
                </span>
                , our system analyzes your services, pricing, and business
                hours. It then creates a production-ready{' '}
                <span className="font-semibold text-text-primary">
                  AI Receptionist
                </span>{' '}
                customized for your industry. No coding. No complicated setup.
                No IT department needed.
              </p>

              <p>
                When a customer calls, your automated phone answering system
                picks up before the second ring. It greets them by name if
                they&apos;re a returning customer. It answers questions about
                your services, pricing, availability, insurance, whatever they
                need. Then it books the appointment directly into your calendar,
                CRM, or PMS system.
              </p>

              <p>
                And if the caller needs a human? The AI transfers them
                seamlessly. No awkward hold music, no starting over. Your staff
                receives a full summary of the conversation so they can pick up
                right where the AI left off.
              </p>
            </div>

            <div className="mt-10">
              <a
                href="https://calendly.com/cybersphere"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center text-[15px] font-semibold px-8 py-3.5 rounded-full bg-text-primary text-white hover:bg-text-primary/85 transition-colors"
              >
                Book a Free Demo
              </a>
            </div>
          </div>

          {/* Right — video */}
          <div className="w-full lg:w-7/12 order-1 lg:order-2">
            <div className="relative aspect-video w-full rounded-3xl overflow-hidden bg-white border-4 border-border-card">
              <video
                autoPlay
                muted={muted}
                loop
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
                poster={posterUrl}
              >
                <source src={videoUrl} type="video/mp4" />
              </video>

              {/* Unmute / Mute */}
              <div className="absolute top-5 right-5">
                <button
                  onClick={() => setMuted((m) => !m)}
                  className="bg-black/70 hover:bg-black backdrop-blur-md text-white text-[11px] font-bold uppercase tracking-wider px-3.5 py-2 rounded-full flex items-center gap-2 transition-colors"
                >
                  {muted ? (
                    <>
                      <VolumeX className="w-4 h-4" /> Unmute
                    </>
                  ) : (
                    <>
                      <Volume2 className="w-4 h-4" /> Mute
                    </>
                  )}
                </button>
              </div>

              {/* Bottom label */}
              <div className="absolute bottom-5 right-6 text-white/80 text-[13px] font-medium">
                Watch the 2-minute demo
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
