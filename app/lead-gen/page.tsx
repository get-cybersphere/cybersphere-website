"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import {
  ArrowUpRight,
  ArrowLeft,
  ArrowRight,
  Mail,
  Phone,
  Globe,
  MapPin,
  ChevronDown,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { motion, useInView } from "framer-motion";
import VLSSection from "@/components/VLSSection";
import CTASection from "@/components/CTASection";
import FadeUp from "@/components/FadeUp";

/* ── Acquisition Graph ── */

interface DataNode {
  label: string;
  valid: boolean;
}

const LEFT_NODES: DataNode[] = [
  { label: "Google Ad \u2014 click", valid: true },
  { label: "sarah@gmail.com", valid: false },
  { label: "(415) 555-0192", valid: true },
  { label: "Instagram \u2014 DM", valid: false },
  { label: "sarah.m@outlook.com", valid: false },
];

const RIGHT_NODES: DataNode[] = [
  { label: "LinkedIn \u2014 profile", valid: true },
  { label: "sarah@acme.co", valid: true },
  { label: "(415) 555-0192", valid: false },
  { label: "Web form \u2014 /pricing", valid: true },
  { label: "Referral \u2014 David K.", valid: true },
];

const LEFT_TOPS = ["6%", "24%", "43%", "62%", "81%"];
const LEFT_LEFTS = ["0", "2%", "0", "3%", "1%"];
const RIGHT_TOPS = ["6%", "24%", "43%", "62%", "81%"];
const RIGHT_RIGHTS = ["0", "3%", "1%", "0", "2%"];

interface ProfileRowItem {
  icon: LucideIcon;
  text: string;
  extra?: string;
}

function LeadProfileCard({ className = "" }: { className?: string }) {
  return (
    <div
      className={`bg-white border-[1.5px] border-[#e5e5e5] rounded-xl p-5 shadow-sm ${className}`}
    >
      <div className="flex items-start justify-between mb-3">
        <p className="text-[10px] font-medium uppercase tracking-widest text-text-muted">
          Qualified Lead
        </p>
        <div className="w-9 h-9 rounded-full bg-[#f5f5f5] flex items-center justify-center">
          <span className="text-text-primary text-xs font-semibold">87</span>
        </div>
      </div>
      <p className="font-heading text-text-primary text-[15px] font-medium leading-tight">
        Sarah Mitchell
      </p>
      <p className="text-text-muted text-[11px] mt-0.5 mb-4">
        Marketing Manager &middot; Acme Inc
      </p>
      <div className="space-y-2.5">
        {(
          [
            { icon: Mail, text: "sarah@acme.co", extra: "+1" },
            { icon: Phone, text: "(415) 555-0192", extra: "+1" },
            { icon: Globe, text: "Google Ads" },
            { icon: MapPin, text: "San Francisco, CA" },
          ] as ProfileRowItem[]
        ).map((row) => (
          <div
            key={row.text}
            className="flex items-center gap-2 text-[11px] text-text-body"
          >
            <row.icon
              className="w-3.5 h-3.5 text-text-muted flex-shrink-0"
              strokeWidth={1.5}
            />
            <span>{row.text}</span>
            {row.extra && (
              <span className="text-blue text-[10px] font-medium">
                {row.extra}
              </span>
            )}
            <ChevronDown
              className="w-3 h-3 text-text-muted ml-auto flex-shrink-0"
              strokeWidth={1.5}
            />
          </div>
        ))}
      </div>
      <div className="border-t border-[#eee] mt-4 pt-3 flex items-center gap-1.5 flex-wrap">
        <span className="text-[10px] font-medium text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
          High Intent
        </span>
        <span className="text-[10px] font-medium text-blue bg-blue/10 px-2 py-0.5 rounded-full">
          Decision Maker
        </span>
      </div>
    </div>
  );
}

interface PathData {
  d: string;
  valid: boolean;
  index: number;
}

function AcquisitionGraph() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(wrapRef, { once: true, margin: "-60px" });
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const leftRefs = useRef<(HTMLDivElement | null)[]>([]);
  const rightRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [paths, setPaths] = useState<PathData[]>([]);

  const computePaths = useCallback(() => {
    const box = containerRef.current?.getBoundingClientRect();
    const card = cardRef.current?.getBoundingClientRect();
    if (!box || !card) return;

    const cx = card.left - box.left;
    const cy = card.top - box.top;
    const cw = card.width;
    const ch = card.height;

    const result: PathData[] = [];

    leftRefs.current.forEach((el, i) => {
      if (!el) return;
      const r = el.getBoundingClientRect();
      const startX = r.right - box.left;
      const startY = r.top - box.top + r.height / 2;
      const endX = cx;
      const endY = cy + (ch * (i + 0.5)) / LEFT_NODES.length;
      const chanX = endX - 18 - i * 12;
      result.push({
        d: `M ${startX},${startY} H ${chanX} V ${endY} H ${endX}`,
        valid: LEFT_NODES[i].valid,
        index: i,
      });
    });

    rightRefs.current.forEach((el, i) => {
      if (!el) return;
      const r = el.getBoundingClientRect();
      const startX = r.left - box.left;
      const startY = r.top - box.top + r.height / 2;
      const endX = cx + cw;
      const endY = cy + (ch * (i + 0.5)) / RIGHT_NODES.length;
      const chanX = endX + 18 + i * 12;
      result.push({
        d: `M ${startX},${startY} H ${chanX} V ${endY} H ${endX}`,
        valid: RIGHT_NODES[i].valid,
        index: i,
      });
    });

    setPaths(result);
  }, []);

  useEffect(() => {
    if (!isInView) return;
    const t = setTimeout(computePaths, 100);
    window.addEventListener("resize", computePaths);
    return () => {
      clearTimeout(t);
      window.removeEventListener("resize", computePaths);
    };
  }, [isInView, computePaths]);

  return (
    <div
      ref={wrapRef}
      className="rounded-2xl border-[1.5px] border-[#e5e5e5] bg-white p-6 md:p-10 overflow-hidden"
    >
      <div className="mb-6 md:mb-8">
        <h3 className="font-heading text-text-primary text-2xl md:text-3xl font-light">
          Acquisition
        </h3>
        <p className="text-text-body text-sm font-light mt-1.5">
          Every channel, one clean pipeline
        </p>
      </div>

      {/* Desktop graph */}
      <div className="hidden lg:block">
        <div
          ref={containerRef}
          className="relative"
          style={{ aspectRatio: "5 / 3" }}
        >
          <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible">
            {paths.map((p, i) => (
              <motion.path
                key={`path-${i}-${p.d.slice(0, 20)}`}
                d={p.d}
                stroke={p.valid ? "#111111" : "#c8c8c8"}
                strokeWidth={p.valid ? 1.8 : 1}
                strokeDasharray={p.valid ? undefined : "4 3"}
                fill="none"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{
                  delay: 0.2 + p.index * 0.08,
                  duration: 0.6,
                  ease: "easeOut",
                }}
              />
            ))}
          </svg>

          {LEFT_NODES.map((node, i) => (
            <motion.div
              key={`ln-${i}`}
              ref={(el) => {
                leftRefs.current[i] = el;
              }}
              className="absolute z-10"
              style={{ top: LEFT_TOPS[i], left: LEFT_LEFTS[i] }}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.08 + i * 0.06, duration: 0.4 }}
            >
              <div className="bg-[#111] text-white text-[11px] font-mono px-3 py-1.5 rounded-md inline-flex items-center gap-2 whitespace-nowrap">
                <span>{node.label}</span>
                {node.valid ? (
                  <span className="text-emerald-400 font-bold text-[10px]">
                    {"\u2713"}
                  </span>
                ) : (
                  <span className="text-red-400 font-bold text-[10px]">
                    {"\u2717"}
                  </span>
                )}
              </div>
            </motion.div>
          ))}

          {RIGHT_NODES.map((node, i) => (
            <motion.div
              key={`rn-${i}`}
              ref={(el) => {
                rightRefs.current[i] = el;
              }}
              className="absolute z-10"
              style={{ top: RIGHT_TOPS[i], right: RIGHT_RIGHTS[i] }}
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.08 + i * 0.06, duration: 0.4 }}
            >
              <div className="bg-[#111] text-white text-[11px] font-mono px-3 py-1.5 rounded-md inline-flex items-center gap-2 whitespace-nowrap">
                <span>{node.label}</span>
                {node.valid ? (
                  <span className="text-emerald-400 font-bold text-[10px]">
                    {"\u2713"}
                  </span>
                ) : (
                  <span className="text-red-400 font-bold text-[10px]">
                    {"\u2717"}
                  </span>
                )}
              </div>
            </motion.div>
          ))}

          <motion.div
            ref={cardRef}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[28%] min-w-[220px] z-10"
            initial={{ opacity: 0, scale: 0.92 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.5, duration: 0.5, ease: "easeOut" }}
          >
            <LeadProfileCard />
          </motion.div>
        </div>
      </div>

      {/* Mobile */}
      <div className="lg:hidden flex justify-center">
        <LeadProfileCard className="w-full max-w-xs" />
      </div>
    </div>
  );
}

/* ── Pipeline Card ── */

interface PipelineRow {
  label: string;
  value: string;
  highlight?: boolean;
  status?: "done" | "pending";
}

interface PipelineStep {
  num: string;
  title: string;
  rows: PipelineRow[];
}

const PIPELINE_STEPS: PipelineStep[] = [
  {
    num: "01",
    title: "Capture",
    rows: [
      { label: "Source", value: "Google Ads" },
      { label: "Page", value: "/pricing" },
      { label: "Time", value: "2 min ago" },
    ],
  },
  {
    num: "02",
    title: "Score",
    rows: [
      { label: "Intent", value: "High", highlight: true },
      { label: "Fit", value: "Enterprise" },
      { label: "Score", value: "87 / 100", highlight: true },
    ],
  },
  {
    num: "04",
    title: "Outreach",
    rows: [
      { label: "Email", value: "Sent", status: "done" },
      { label: "SMS", value: "Sent", status: "done" },
      { label: "AI Call", value: "Day 3", status: "pending" },
    ],
  },
  {
    num: "03",
    title: "Enrich",
    rows: [
      { label: "Name", value: "Sarah Mitchell" },
      { label: "Company", value: "Acme Inc" },
      { label: "Role", value: "Marketing Mgr" },
    ],
  },
  {
    num: "05",
    title: "Engage",
    rows: [
      { label: "Opened", value: "\u2713", status: "done" },
      { label: "Clicked", value: "\u2713", status: "done" },
      { label: "Replied", value: "\u2713", status: "done" },
    ],
  },
  {
    num: "06",
    title: "Convert",
    rows: [
      { label: "Meeting", value: "Tue 10 AM" },
      { label: "Deal", value: "$12,500", highlight: true },
      { label: "Stage", value: "Proposal" },
    ],
  },
];

interface PipelinePathData {
  d: string;
  arrow: { x: number; y: number; rot: number };
}

function PipelineCard() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const gridRef = useRef<HTMLDivElement>(null);
  const cellRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [paths, setPaths] = useState<PipelinePathData[]>([]);

  const computePaths = useCallback(() => {
    if (!gridRef.current) return;

    const cells = cellRefs.current.map((el) => {
      if (!el) return null;
      const l = el.offsetLeft;
      const t = el.offsetTop;
      const w = el.offsetWidth;
      const h = el.offsetHeight;
      return {
        l,
        r: l + w,
        t,
        b: t + h,
        cx: l + w / 2,
        cy: t + h / 2,
      };
    });

    const result: PipelinePathData[] = [];

    const conns: [number, number, string][] = [
      [0, 1, "hr"],
      [1, 3, "vd"],
      [3, 2, "hl"],
      [2, 4, "vd"],
      [4, 5, "hr"],
    ];

    conns.forEach(([from, to, type]) => {
      const a = cells[from];
      const b = cells[to];
      if (!a || !b) return;

      let d: string;
      let arrow: { x: number; y: number; rot: number };
      if (type === "hr") {
        d = `M ${a.r},${a.cy} H ${b.l}`;
        arrow = { x: (a.r + b.l) / 2, y: a.cy, rot: 0 };
      } else if (type === "hl") {
        d = `M ${a.l},${a.cy} H ${b.r}`;
        arrow = { x: (a.l + b.r) / 2, y: a.cy, rot: 180 };
      } else {
        d = `M ${a.cx},${a.b} V ${b.t}`;
        arrow = { x: a.cx, y: (a.b + b.t) / 2, rot: 90 };
      }
      result.push({ d, arrow });
    });

    setPaths(result);
  }, []);

  useEffect(() => {
    if (!isInView) return;
    const t = setTimeout(computePaths, 100);
    window.addEventListener("resize", computePaths);
    return () => {
      clearTimeout(t);
      window.removeEventListener("resize", computePaths);
    };
  }, [isInView, computePaths]);

  return (
    <div
      ref={ref}
      className="rounded-2xl border-[1.5px] border-[#e5e5e5] bg-white p-6 md:p-10 overflow-hidden"
    >
      <div className="mb-6 md:mb-8">
        <h3 className="font-heading text-text-primary text-2xl md:text-3xl font-light">
          Pipeline
        </h3>
        <p className="text-text-body text-sm font-light mt-1.5">
          From raw lead to closed deal, automated
        </p>
      </div>

      <div ref={gridRef} className="relative">
        <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible z-0">
          {paths.map((p, i) => (
            <g key={`pg-${i}`}>
              <motion.path
                d={p.d}
                stroke="#111"
                strokeWidth={1.5}
                strokeDasharray="6 4"
                fill="none"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{
                  delay: 0.3 + i * 0.1,
                  duration: 0.6,
                  ease: "easeOut",
                }}
              />
              <motion.polygon
                points="-5,-4 5,0 -5,4"
                fill="#111"
                transform={`translate(${p.arrow.x},${p.arrow.y}) rotate(${p.arrow.rot})`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 + i * 0.1 }}
              />
            </g>
          ))}
        </svg>

        <div className="grid grid-cols-2 gap-x-12 gap-y-7">
          {PIPELINE_STEPS.map((step, i) => (
            <motion.div
              key={step.num}
              ref={(el) => {
                cellRefs.current[i] = el;
              }}
              className="relative z-10 bg-[#fafafa] border-[1.5px] border-[#111] rounded-xl p-4 lg:p-5"
              initial={{ opacity: 0, y: 12 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + i * 0.08, duration: 0.4 }}
            >
              <div className="flex items-center gap-2.5 mb-3">
                <span className="text-blue font-mono text-[11px] font-semibold">
                  {step.num}
                </span>
                <span className="text-text-primary font-heading text-[14px] font-medium">
                  {step.title}
                </span>
              </div>
              <div className="space-y-1.5">
                {step.rows.map((row) => (
                  <div
                    key={row.label}
                    className="flex items-center justify-between text-[12px]"
                  >
                    <span className="text-text-muted">{row.label}</span>
                    <span
                      className={
                        row.status === "done"
                          ? "text-emerald-600 font-medium"
                          : row.status === "pending"
                            ? "text-text-muted"
                            : row.highlight
                              ? "text-text-primary font-medium"
                              : "text-text-body"
                      }
                    >
                      {row.value}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

const CARD_LABELS = ["Acquisition", "Pipeline"];

function ScrollCards() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  const scrollTo = (i: number) => {
    const container = scrollRef.current;
    if (!container) return;
    container.scrollTo({
      left: i * container.offsetWidth,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;
    const onScroll = () => {
      const idx = Math.round(container.scrollLeft / container.offsetWidth);
      setActive(idx);
    };
    container.addEventListener("scroll", onScroll, { passive: true });
    return () => container.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="bg-white pt-16 md:pt-24">
      <FadeUp className="max-w-[1376px] mx-auto px-4 md:px-8 pb-16 md:pb-24">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            {CARD_LABELS.map((label, i) => (
              <button
                key={label}
                onClick={() => scrollTo(i)}
                className={`text-[13px] tracking-wide transition-colors ${
                  active === i
                    ? "text-text-primary font-medium"
                    : "text-text-muted font-light hover:text-text-body"
                }`}
              >
                {label}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => scrollTo(Math.max(0, active - 1))}
              className="w-10 h-10 rounded-full border border-[#e5e5e5] flex items-center justify-center text-text-primary hover:border-[#111] hover:bg-[#fafafa] transition-all"
            >
              <ArrowLeft className="w-4 h-4" strokeWidth={1.5} />
            </button>
            <button
              onClick={() =>
                scrollTo(Math.min(CARD_LABELS.length - 1, active + 1))
              }
              className="w-10 h-10 rounded-full border border-[#e5e5e5] flex items-center justify-center text-text-primary hover:border-[#111] hover:bg-[#fafafa] transition-all"
            >
              <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
            </button>
          </div>
        </div>

        <div
          ref={scrollRef}
          className="flex gap-5 overflow-x-auto snap-x snap-mandatory no-scrollbar"
        >
          <div className="flex-none w-full snap-center">
            <AcquisitionGraph />
          </div>
          <div className="flex-none w-full snap-center">
            <PipelineCard />
          </div>
        </div>
      </FadeUp>
    </section>
  );
}

export default function LeadGen() {
  return (
    <>
      {/* -- Hero -- */}
      <section className="min-h-screen bg-white rounded-[20px] relative overflow-hidden flex flex-col">
        <div className="absolute inset-0 flex items-end justify-center md:items-center md:justify-end md:pr-[8%] md:pt-[10%] pointer-events-none">
          <div className="hero-enter hero-enter-d1">
            <img
              src="/images/backgrounds/leadgen.png"
              alt=""
              className="hero-float w-[min(440px,55vw)] h-auto rotate-0"
            />
          </div>
        </div>

        <div className="relative z-10 max-w-[1376px] w-full mx-auto px-4 md:px-8 pt-24 md:pt-28 hero-enter">
          <div className="flex justify-between items-start">
            <div className="hidden lg:flex flex-col gap-8">
              <div>
                <p className="text-[11px] font-medium uppercase tracking-[0.15em] text-text-muted mb-1">
                  Multi-Channel
                </p>
                <p className="text-[13px] text-text-body leading-relaxed max-w-[180px]">
                  Capture from web, ads, social & referrals in one pipeline
                </p>
              </div>
              <div>
                <p className="text-[11px] font-medium uppercase tracking-[0.15em] text-text-muted mb-1">
                  Instant Follow-Up
                </p>
                <p className="text-[13px] text-text-body leading-relaxed max-w-[180px]">
                  Text, email & call sequences triggered in seconds
                </p>
              </div>
            </div>
            <div className="flex gap-8 md:gap-12 ml-auto">
              {[
                { value: "90s", label: "First Contact" },
                { value: "3.2x", label: "Conversion Lift" },
                { value: "100%", label: "Follow-Up Rate" },
              ].map((stat) => (
                <div key={stat.label} className="text-right">
                  <p className="font-heading text-[32px] md:text-[44px] font-light text-text-primary leading-none tracking-tight">
                    {stat.value}
                  </p>
                  <p className="text-[11px] text-text-muted mt-1.5 uppercase tracking-[0.08em]">
                    {stat.label}
                  </p>
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
              style={{ fontSize: "clamp(44px, 9.5vw, 150px)" }}
            >
              More Leads
              <br />
              <span className="text-blue">Less</span>
              <br />
              Work
            </h1>
          </div>
          <div className="hero-enter hero-enter-d3 flex items-center justify-between mt-6 md:mt-8">
            <a
              href="https://calendly.com/cybersphere"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[13px] font-medium uppercase tracking-[0.12em] text-text-primary hover:text-blue transition-colors"
            >
              Book a Call <ArrowUpRight className="w-4 h-4" />
            </a>
            <p className="text-[12px] text-text-muted hidden sm:block">
              Automated pipeline for ads, web forms & social leads
            </p>
          </div>
        </div>
      </section>

      {/* -- Acquisition + Pipeline (horizontal scroll) -- */}
      <ScrollCards />

      {/* -- VLS / Demo Section -- */}
      <VLSSection
        label="See the Lead Gen Engine in Action"
        subtext="From ad click to booked appointment in minutes."
      />

      {/* -- CTA -- */}
      <CTASection />
    </>
  );
}
