import { Play } from 'lucide-react'
import { useFadeUp } from '../hooks/useScrollAnimation'

export default function VLSSection({ label = 'Watch the Demo', subtext }) {
  const anim = useFadeUp()

  return (
    <section className="bg-white">
      <div
        ref={anim.ref}
        className={`${anim.className} max-w-[1376px] mx-auto px-4 md:px-8 py-16 md:py-24`}
      >
        <div className="relative aspect-video rounded-3xl overflow-hidden bg-bg-gray border border-border-line">
          {/* Play button */}
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
            <button className="w-20 h-20 rounded-full bg-blue flex items-center justify-center hover:bg-blue-hover transition-colors">
              <Play className="w-8 h-8 text-white ml-1" fill="currentColor" />
            </button>
            <span className="text-[14px] font-normal text-text-muted">
              {label}
            </span>
          </div>
        </div>
        {subtext && (
          <p className="text-center mt-5 text-sm text-text-muted">
            {subtext}
          </p>
        )}
      </div>
    </section>
  )
}
