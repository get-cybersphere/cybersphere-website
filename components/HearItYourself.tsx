"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import { ChevronLeft, ChevronRight, Volume2, VolumeX } from "lucide-react";

interface Industry {
  id: string;
  title: string;
  description: string;
  videoUrl: string;
}

const industries: Industry[] = [
  {
    id: "hotels",
    title: "Hospitality",
    description:
      "A guest calls to book a room. The AI collects dates, guest count, checks availability, sends a booking link, and confirms the reservation — no hold time.",
    videoUrl: "https://newo.ai/wp-content/uploads/2026/02/hotel_video.mp4",
  },
  {
    id: "hvac",
    title: "Home Services",
    description:
      "A homeowner needs an urgent repair. The AI verifies the service area, offers a free estimate, finds the next open slot, and locks in the appointment.",
    videoUrl: "https://newo.ai/wp-content/uploads/2026/02/hvac_video.mp4",
  },
  {
    id: "dental",
    title: "Healthcare",
    description:
      "A new patient calls to schedule a cleaning. The AI identifies the service, collects insurance info, offers time slots, and books directly into the PMS.",
    videoUrl: "https://newo.ai/wp-content/uploads/2026/02/dental_video.mp4",
  },
  {
    id: "catering",
    title: "Events & Catering",
    description:
      "A customer is planning a celebration. The AI walks them through packages, pricing tiers, collects event details, and sends a quote — all in one call.",
    videoUrl: "https://newo.ai/wp-content/uploads/2026/02/catering_video.mp4",
  },
  {
    id: "bars",
    title: "Restaurants",
    description:
      "A guest wants a dinner reservation. The AI asks about party size, date, and seating preference, then confirms the booking and sends a reminder.",
    videoUrl: "https://newo.ai/wp-content/uploads/2026/02/bar_video.mp4",
  },
  {
    id: "cleaning",
    title: "Commercial Cleaning",
    description:
      "A business owner inquires about office cleaning. The AI handles the needs assessment, provides a ballpark quote, and schedules an on-site walkthrough.",
    videoUrl: "https://newo.ai/wp-content/uploads/2026/02/cleaning_video.mp4",
  },
];

function VideoCard({ industry }: { industry: Industry }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [active, setActive] = useState(false);
  const [muted, setMuted] = useState(true);

  const activate = useCallback(() => {
    if (!active) {
      setActive(true);
      videoRef.current?.play();
    }
  }, [active]);

  const deactivate = useCallback(() => {
    setActive(false);
    setMuted(true);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  }, []);

  useEffect(() => {
    const vid = videoRef.current;
    if (!vid) return;
    vid.preload = "auto";
    const handleLoaded = () => {
      vid.currentTime = 0.001;
    };
    vid.addEventListener("loadeddata", handleLoaded);
    return () => vid.removeEventListener("loadeddata", handleLoaded);
  }, []);

  const toggleMute = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setMuted((m) => !m);
  };

  return (
    <div className="flex-none w-[85vw] md:w-[420px] snap-start">
      <div
        className="relative aspect-square rounded-3xl overflow-hidden bg-bg-gray mb-6 cursor-pointer"
        onMouseEnter={activate}
        onMouseLeave={deactivate}
        onClick={activate}
      >
        <video
          ref={videoRef}
          className={`w-full h-full object-cover transition-all duration-500 ${
            active
              ? "grayscale-0 brightness-100"
              : "grayscale brightness-[0.7]"
          }`}
          src={industry.videoUrl}
          muted={muted}
          loop
          playsInline
          preload="auto"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

        <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
          <h3 className="text-white text-[28px] font-bold leading-tight">
            {industry.title}
          </h3>
          {active && (
            <button
              onClick={toggleMute}
              className="flex-shrink-0 bg-black/70 backdrop-blur-md text-white rounded-full px-3.5 py-2 flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider hover:bg-black transition-colors"
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
          )}
        </div>
      </div>

      <p className="text-text-body text-[15px] leading-relaxed">
        {industry.description}
      </p>
    </div>
  );
}

export default function HearItYourself() {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (carouselRef.current) {
      const { scrollLeft, clientWidth } = carouselRef.current;
      const scrollAmount = clientWidth * 0.8;
      const newPosition =
        direction === "left"
          ? scrollLeft - scrollAmount
          : scrollLeft + scrollAmount;
      carouselRef.current.scrollTo({ left: newPosition, behavior: "smooth" });
    }
  };

  return (
    <section className="bg-white py-16 md:py-24 overflow-hidden">
      <div className="max-w-[1376px] mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-[800px]">
            <h2 className="mb-4">Hear It for Yourself</h2>
            <p className="text-text-body text-lg leading-relaxed">
              Real conversations between real callers and automated phone
              service, across 10 industries
            </p>
          </div>
          <div className="flex gap-3">
            <button
              onClick={() => scroll("left")}
              className="w-12 h-12 rounded-full border border-border-line flex items-center justify-center hover:bg-bg-gray transition-colors"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-5 h-5 text-text-primary" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-12 h-12 rounded-full border border-border-line flex items-center justify-center hover:bg-bg-gray transition-colors"
              aria-label="Next slide"
            >
              <ChevronRight className="w-5 h-5 text-text-primary" />
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-[1376px] mx-auto px-4 md:px-8">
        <div
          ref={carouselRef}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-4 no-scrollbar"
        >
          {industries.map((industry) => (
            <VideoCard key={industry.id} industry={industry} />
          ))}
        </div>
      </div>
    </section>
  );
}
