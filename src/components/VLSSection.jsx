import { useState } from 'react'
import { Play, Volume2, VolumeX } from 'lucide-react'
import { useFadeUp } from '../hooks/useScrollAnimation'

// Industry-specific demo videos with realistic AI voice conversations
const DEMO_VIDEOS = {
  default: 'https://newo.ai/wp-content/uploads/2026/02/hvac_video.mp4',
  aiEmployee: 'https://newo.ai/wp-content/uploads/2026/02/cleaning_video.mp4',
  pentesting: 'https://static.newo.ai/video/Partner-Portal-Video(4)-DimaV008.mp4',
  voiceAgent: 'https://newo.ai/wp-content/uploads/2026/02/dental_video.mp4',
}

// Placeholder images for variants that show a static preview
const PLACEHOLDER_IMAGES = {
  pentesting: 'https://cdn.prod.website-files.com/686c11d5bee0151a3f8021bf/69722f246eada64a60f1c478_Frame%202225423.avif',
}

export default function VLSSection({ label = 'Watch the Demo', subtext, videoUrl, variant = 'default', placeholderOnly = false }) {
  const anim = useFadeUp()
  const [playing, setPlaying] = useState(false)
  const [muted, setMuted] = useState(true)

  // Use provided URL, variant-specific, or default
  const src = videoUrl || DEMO_VIDEOS[variant] || DEMO_VIDEOS.default
  const placeholderBg = PLACEHOLDER_IMAGES[variant]

  return (
    <section className="bg-white">
      <div
        ref={anim.ref}
        className={`${anim.className} max-w-[1376px] mx-auto px-4 md:px-8 py-16 md:py-24`}
      >
        <div className="relative aspect-video rounded-3xl overflow-hidden bg-bg-gray border border-border-line">
          {playing && !placeholderOnly ? (
            <>
              <video
                autoPlay
                muted={muted}
                loop
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
              >
                <source src={src} type="video/mp4" />
              </video>

              {/* Mute/Unmute button */}
              <div className="absolute top-4 right-4 z-10">
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

              {/* Label */}
              <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-md text-white text-[12px] font-medium px-3 py-1.5 rounded-full">
                {label}
              </div>
            </>
          ) : (
            /* Play button overlay */
            <div className="absolute inset-0">
              {/* Background image for placeholder */}
              {placeholderOnly && placeholderBg && (
                <img
                  src={placeholderBg}
                  alt=""
                  className="absolute inset-0 w-full h-full object-cover"
                />
              )}
              {/* Play button centered */}
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
                <div
                  className={`w-20 h-20 rounded-full bg-blue flex items-center justify-center z-10 ${placeholderOnly ? 'cursor-default' : 'cursor-pointer hover:bg-blue-hover hover:scale-105'} transition-colors`}
                  onClick={() => !placeholderOnly && setPlaying(true)}
                >
                  <Play className="w-8 h-8 text-white ml-1" fill="currentColor" />
                </div>
                <span className={`text-[14px] font-normal z-10 ${placeholderBg ? 'text-white' : 'text-text-muted'}`}>
                  {label}
                </span>
              </div>
              {/* Label in corner like video */}
              {placeholderOnly && placeholderBg && (
                <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-md text-white text-[12px] font-medium px-3 py-1.5 rounded-full z-10">
                  {label}
                </div>
              )}
            </div>
          )}
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
