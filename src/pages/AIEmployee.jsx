import { useState, useEffect } from 'react'
import { useRef } from 'react'
import {
  UserCheck,
  Inbox,
  DollarSign,
  RefreshCw,
  Star,
  ChevronDown,
  Bot,
  User,
  ArrowUpRight,
  Zap,
  Clock,
  Users,
  Settings,
} from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import VLSSection from '../components/VLSSection'
import CTASection from '../components/CTASection'
import { useFadeUp } from '../hooks/useScrollAnimation'
import employeeBg from '../assets/images/background/employee.png'
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

/* ── Accordion illustration — chat mockup ── */

const ACCORDION_ITEMS = [
  {
    icon: Inbox,
    title: 'Handle every inquiry.',
    description: 'Every call, text, and web chat answered instantly — 24/7.',
    chat: {
      user: 'Hi, do you offer same-day appointments? I need help ASAP.',
      ai: 'Absolutely! We have availability today at 2:30 PM and 4:00 PM. Which works better for you?',
    },
  },
  {
    icon: DollarSign,
    title: 'Convert more leads.',
    description: 'Responds in under 60 seconds — 45% higher conversion rate.',
    chat: {
      user: 'How much does a full AC inspection cost?',
      ai: 'Our standard inspection is $89. I can get you booked in tomorrow morning — does 9 AM work?',
    },
  },
  {
    icon: RefreshCw,
    title: 'Automate follow-ups.',
    description: 'Re-engages past customers at the right time to drive repeat business.',
    chat: {
      user: "Thanks for the reminder! It's been 6 months already?",
      ai: "Time flies! I've reserved your usual Thursday 10 AM slot. Shall I confirm?",
    },
  },
  {
    icon: Star,
    title: 'Build your reputation.',
    description: 'Auto-requests reviews and responds on Google to boost rankings.',
    chat: {
      user: 'I just left a 5-star review. You guys are great!',
      ai: "Thank you so much! We're thrilled you had a great experience. See you next time!",
    },
  },
]

function ChatBubble({ user, ai }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35 }}
      className="w-full max-w-[440px] mx-auto space-y-4"
    >
      {/* User message */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.4 }}
        className="flex items-start gap-3"
      >
        <div className="w-9 h-9 rounded-full bg-bg-gray flex items-center justify-center flex-shrink-0 mt-0.5">
          <User className="w-4 h-4 text-text-muted" strokeWidth={1.5} />
        </div>
        <div className="bg-bg-gray rounded-2xl rounded-tl-sm px-4 py-3 max-w-[340px]">
          <p className="font-sans text-text-primary text-sm font-light leading-relaxed">{user}</p>
        </div>
      </motion.div>

      {/* AI message */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.4 }}
        className="flex items-start gap-3 flex-row-reverse"
      >
        <div className="w-9 h-9 rounded-full bg-blue/10 flex items-center justify-center flex-shrink-0 mt-0.5">
          <Bot className="w-4 h-4 text-blue" strokeWidth={1.5} />
        </div>
        <div className="bg-blue/5 border border-blue/10 rounded-2xl rounded-tr-sm px-4 py-3 max-w-[340px]">
          <p className="font-sans text-text-primary text-sm font-light leading-relaxed">{ai}</p>
        </div>
      </motion.div>
    </motion.div>
  )
}

const REVIEWS = [
  {
    name: 'Maria Santos',
    initials: 'MS',
    review: 'Booked my first appointment in under a minute. The follow-up reminder was a nice touch — felt like a real person.',
    reply: "Thank you, Maria! We're glad the experience felt seamless. Looking forward to your next visit!",
  },
  {
    name: 'David Chen',
    initials: 'DC',
    review: 'Called after hours expecting voicemail. Got everything handled on the spot — pricing, availability, appointment. Impressed.',
    reply: 'Thanks for the kind words, David! Our team is available around the clock to help.',
  },
  {
    name: 'Rachel Owens',
    initials: 'RO',
    review: 'They rescheduled my appointment without any hassle. Quick, polite, and super efficient. Five stars.',
    reply: 'We appreciate the review, Rachel! Easy rescheduling is something we take pride in.',
  },
]

function ReviewCard() {
  const [index, setIndex] = useState(0)
  const review = REVIEWS[index]

  // Cycle through reviews
  useEffect(() => {
    const timer = setInterval(() => setIndex((i) => (i + 1) % REVIEWS.length), 6000)
    return () => clearInterval(timer)
  }, [])

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -16 }}
        transition={{ duration: 0.4 }}
        className="w-full max-w-[400px] mx-auto bg-bg-gray rounded-2xl p-6 shadow-sm"
      >
        {/* Header — avatar + name */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.3 }}
          className="flex items-center gap-3 mb-3"
        >
          <div className="w-11 h-11 rounded-full bg-blue/10 flex items-center justify-center flex-shrink-0">
            <span className="text-blue text-sm font-semibold">{review.initials}</span>
          </div>
          <span className="font-heading text-text-primary text-base font-medium">{review.name}</span>
        </motion.div>

        {/* Stars */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.25, duration: 0.3 }}
          className="flex gap-0.5 mb-3"
        >
          {[...Array(5)].map((_, i) => (
            <svg key={i} className="w-5 h-5 text-[#e0a94e]" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </motion.div>

        {/* Review text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.4 }}
          className="font-sans text-text-primary text-[15px] font-light leading-relaxed mb-5"
        >
          {review.review}
        </motion.p>

        {/* Divider */}
        <div className="border-t border-[#e5e5e5] mb-4" />

        {/* AI Reply */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.4 }}
        >
          <p className="text-[11px] font-semibold uppercase tracking-widest text-text-muted mb-3">Reply</p>
          <div className="flex items-start gap-3">
            <div className="w-9 h-9 rounded-xl bg-blue/10 flex items-center justify-center flex-shrink-0 mt-0.5">
              <Bot className="w-4 h-4 text-blue" strokeWidth={1.5} />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="font-heading text-text-primary text-sm font-medium">AI Assistant</span>
                <span className="text-text-muted text-[11px]">just now</span>
              </div>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.3, duration: 0.5 }}
                className="font-sans text-text-body text-sm font-light leading-relaxed"
              >
                {review.reply}
              </motion.p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

const INBOX_ITEMS = [
  { icon: '🌐', bg: 'bg-[#2d2d2d]', name: 'New Lead — Website', preview: 'Hi, I saw your services online. Do you have availability this week for a consultation?' },
  { icon: '✉️', bg: 'bg-[#7c8a7c]', name: 'Maria Santos — Email', preview: 'Hello, I need a quote for recurring office cleaning. Can someone get back to me today?' },
  { icon: '📱', bg: 'bg-blue/15', name: 'David Chen — SMS', preview: "Hey, I missed my appointment yesterday. Any chance I can reschedule for tomorrow?" },
  { icon: '💬', bg: 'bg-[#6b8f8f]', name: 'Rachel O. — Instagram', preview: "Do you guys offer weekend appointments? I can't make it during the week." },
  { icon: '📞', bg: 'bg-amber-100', name: 'Missed Call — (415) 882-1947', preview: 'Voicemail: Looking to book a deep clean for my 2-bedroom apartment before move-out.' },
  { icon: '🌐', bg: 'bg-[#2d2d2d]', name: 'New Lead — Google Ads', preview: "I clicked on your ad for AC repair. What's your availability and pricing?" },
  { icon: '✉️', bg: 'bg-[#7c8a7c]', name: 'Tom Bradley — Email', preview: "Following up on the estimate you sent last week. Ready to move forward if the slot's still open." },
  { icon: '💬', bg: 'bg-[#6b8f8f]', name: 'Lisa Park — Facebook', preview: 'Hi! We spoke last month about catering for a birthday. Is June 14th still available?' },
]

const LEAD_CONVERSATION = [
  { from: 'user', text: 'How much for a full AC inspection?' },
  { from: 'ai', text: 'Our standard inspection is $89. If any repairs are needed, we apply that toward the service cost.' },
  { from: 'user', text: "That's more than I expected honestly." },
  { from: 'ai', text: "Totally understand. Most clients save $200–$400 by catching small issues early. We also have a $59 tune-up if you'd prefer to start there." },
  { from: 'user', text: 'Oh okay, the tune-up sounds good actually.' },
  { from: 'ai', text: "Great choice. I have tomorrow at 9 AM or Thursday at 2 PM open. Which works better?" },
  { from: 'user', text: 'Tomorrow 9 AM works.' },
  { from: 'ai', text: "You're all set for tomorrow at 9 AM. You'll get a confirmation text shortly. Anything else I can help with?" },
]

function TypingDots({ className = '' }) {
  return (
    <span className={`inline-flex items-center gap-1 ${className}`}>
      <span className="w-1.5 h-1.5 rounded-full bg-text-muted/50 animate-bounce [animation-duration:0.6s]" />
      <span className="w-1.5 h-1.5 rounded-full bg-text-muted/50 animate-bounce [animation-duration:0.6s] [animation-delay:0.15s]" />
      <span className="w-1.5 h-1.5 rounded-full bg-text-muted/50 animate-bounce [animation-duration:0.6s] [animation-delay:0.3s]" />
    </span>
  )
}

function AITypedText({ text, onDone, className = '' }) {
  const [displayed, setDisplayed] = useState('')

  useEffect(() => {
    setDisplayed('')
    let i = 0
    let timeout
    const typeNext = () => {
      if (i >= text.length) { onDone?.(); return }
      const char = text[i]
      i++
      setDisplayed(text.slice(0, i))
      // Variable speed: pause longer at punctuation, slight randomness
      let delay = 16 + Math.random() * 14
      if (char === '.' || char === '!' || char === '?') delay = 180 + Math.random() * 120
      else if (char === ',') delay = 80 + Math.random() * 60
      else if (char === '—' || char === '–') delay = 100 + Math.random() * 50
      timeout = setTimeout(typeNext, delay)
    }
    typeNext()
    return () => clearTimeout(timeout)
  }, [text])

  return <p className={className}>{displayed}<span className={displayed.length < text.length ? 'inline-block w-[2px] h-[13px] bg-blue/40 ml-0.5 animate-pulse align-middle' : 'hidden'} /></p>
}

function ChatMessage({ msg, isLatest, onTypingDone }) {
  const isAi = msg.from === 'ai'
  const [phase, setPhase] = useState(isLatest ? 'dots' : 'done')

  useEffect(() => {
    if (!isLatest) return
    // Show dots first, then reveal
    const dotsTime = isAi ? 600 + Math.random() * 400 : 400 + Math.random() * 200
    const timer = setTimeout(() => {
      setPhase('typing')
      // User messages: instantly done after reveal
      if (!isAi) setTimeout(() => onTypingDone?.(), 100)
    }, dotsTime)
    return () => clearTimeout(timer)
  }, [isLatest, isAi])

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={`flex items-start gap-2.5 ${isAi ? 'flex-row-reverse' : ''}`}
    >
      <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${isAi ? 'bg-blue/10' : 'bg-bg-gray'}`}>
        {isAi
          ? <Bot className="w-3.5 h-3.5 text-blue" strokeWidth={1.5} />
          : <User className="w-3.5 h-3.5 text-text-muted" strokeWidth={1.5} />
        }
      </div>
      <div className={`rounded-2xl px-3.5 py-2.5 max-w-[300px] ${isAi
        ? 'bg-blue/5 border border-blue/10 rounded-tr-sm'
        : 'bg-bg-gray rounded-tl-sm'
      }`}>
        {phase === 'dots' ? (
          <TypingDots className="py-1" />
        ) : phase === 'typing' && isAi ? (
          <AITypedText text={msg.text} onDone={onTypingDone} className="font-sans text-text-primary text-[13px] font-light leading-relaxed" />
        ) : (
          <p className="font-sans text-text-primary text-[13px] font-light leading-relaxed">{msg.text}</p>
        )}
      </div>
    </motion.div>
  )
}

function ConvertLeadChat() {
  const [visibleCount, setVisibleCount] = useState(1)
  const [canAdvance, setCanAdvance] = useState(false)
  const scrollRef = useRef(null)

  // Advance to next message after current finishes
  useEffect(() => {
    if (!canAdvance || visibleCount >= LEAD_CONVERSATION.length) return
    const next = LEAD_CONVERSATION[visibleCount]
    // Pause before next message appears
    const delay = next.from === 'user' ? 800 : 500
    const timer = setTimeout(() => {
      setCanAdvance(false)
      setVisibleCount((c) => c + 1)
    }, delay)
    return () => clearTimeout(timer)
  }, [canAdvance, visibleCount])

  // For user messages, auto-advance after dots+reveal
  const handleTypingDone = () => setCanAdvance(true)

  // Auto-scroll to bottom
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' })
    }
  }, [visibleCount])

  return (
    <div ref={scrollRef} className="w-full max-w-[440px] mx-auto overflow-y-auto space-y-3 pr-1" style={{ maxHeight: 420 }}>
      {LEAD_CONVERSATION.slice(0, visibleCount).map((msg, i) => (
        <ChatMessage
          key={i}
          msg={msg}
          isLatest={i === visibleCount - 1}
          onTypingDone={handleTypingDone}
        />
      ))}
    </div>
  )
}

function InboxCard({ item, isNew }) {
  return (
    <div className={`rounded-xl border bg-white px-4 py-3.5 flex items-start gap-3 shadow-sm ${isNew ? 'border-blue/30' : 'border-[#d0d0d0]'}`}>
      <div className={`w-10 h-10 rounded-xl ${item.bg} flex items-center justify-center flex-shrink-0 text-lg`}>
        {item.icon}
      </div>
      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-2">
          <p className="font-heading text-text-primary text-sm font-medium leading-tight truncate">{item.name}</p>
          {isNew && <span className="flex-shrink-0 w-2 h-2 rounded-full bg-blue" />}
        </div>
        <p className="text-text-body text-xs leading-relaxed mt-0.5 line-clamp-2">{item.preview}</p>
      </div>
    </div>
  )
}

function InboxFeed() {
  const [feed, setFeed] = useState(() =>
    INBOX_ITEMS.slice(0, 4).map((item, i) => ({ ...item, id: i }))
  )
  const nextId = useRef(4)
  const [newestId, setNewestId] = useState(-1)

  useEffect(() => {
    const timer = setInterval(() => {
      setFeed((prev) => {
        const newItem = {
          ...INBOX_ITEMS[nextId.current % INBOX_ITEMS.length],
          id: nextId.current,
        }
        setNewestId(nextId.current)
        nextId.current++
        return [newItem, ...prev.slice(0, 3)]
      })
    }, 1800)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="w-full max-w-[400px] mx-auto rounded-2xl border border-[#c8c8c8] bg-[#f8f8f8] p-3 shadow-md">
      {/* Inbox header */}
      <div className="flex items-center justify-between px-2 pb-3 border-b border-[#d8d8d8] mb-3">
        <div className="flex items-center gap-2">
          <Inbox className="w-4 h-4 text-text-primary" strokeWidth={1.5} />
          <span className="font-heading text-text-primary text-sm font-medium">Inbox</span>
        </div>
        <span className="text-[11px] text-text-muted">Just now</span>
      </div>

      {/* Feed */}
      <div className="overflow-hidden" style={{ height: 340 }}>
        <AnimatePresence initial={false} mode="popLayout">
          {feed.map((item, i) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, y: -60, scale: 0.92 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.25 } }}
              transition={{
                layout: { type: 'spring', stiffness: 280, damping: 28 },
                opacity: { duration: 0.35 },
                y: { type: 'spring', stiffness: 280, damping: 26 },
                scale: { duration: 0.3 },
              }}
              className="mb-2.5"
            >
              <InboxCard item={item} isNew={item.id === newestId} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  )
}

function FollowUpWorkflow() {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref} className="w-full max-w-[400px] mx-auto">
      {/* Step 1 — Trigger */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={visible ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.1, duration: 0.45 }}
        className="rounded-xl border border-[#e5e5e5] bg-white p-4"
      >
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-amber-100 flex items-center justify-center">
              <Zap className="w-4 h-4 text-amber-600" strokeWidth={2} />
            </div>
            <span className="font-heading text-text-primary text-sm font-medium">When appointment ends</span>
          </div>
          <span className="text-text-muted text-xs">×</span>
        </div>
        <div className="flex items-center gap-2 ml-10.5">
          <Users className="w-3.5 h-3.5 text-text-muted" strokeWidth={1.5} />
          <span className="text-text-muted text-xs">Audience</span>
          <span className="text-blue text-xs font-medium border border-blue/20 bg-blue/5 rounded-full px-2.5 py-0.5">Past clients</span>
        </div>
        <div className="flex items-center gap-2 ml-10.5 mt-2">
          <Settings className="w-3.5 h-3.5 text-text-muted" strokeWidth={1.5} />
          <span className="text-text-muted text-xs">Advanced settings</span>
          <ChevronDown className="w-3 h-3 text-text-muted ml-auto rotate-180" strokeWidth={1.5} />
        </div>
      </motion.div>

      {/* Connector */}
      <motion.div
        initial={{ opacity: 0, scaleY: 0 }}
        animate={visible ? { opacity: 1, scaleY: 1 } : {}}
        transition={{ delay: 0.5, duration: 0.3 }}
        className="flex justify-center"
      >
        <div className="w-px h-3 bg-[#d5d5d5]" />
      </motion.div>

      {/* Step 2 — Wait */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={visible ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.6, duration: 0.45 }}
        className="rounded-xl border border-[#e5e5e5] bg-white px-4 py-3 flex items-center justify-between"
      >
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-orange-100 flex items-center justify-center">
            <Clock className="w-4 h-4 text-orange-500" strokeWidth={2} />
          </div>
          <span className="font-heading text-text-primary text-sm font-medium">Wait</span>
          <span className="text-blue text-xs font-medium border border-blue/20 bg-blue/5 rounded-full px-2.5 py-0.5">3 days</span>
        </div>
        <span className="text-text-muted text-xs">×</span>
      </motion.div>

      {/* Connector */}
      <motion.div
        initial={{ opacity: 0, scaleY: 0 }}
        animate={visible ? { opacity: 1, scaleY: 1 } : {}}
        transition={{ delay: 1.0, duration: 0.3 }}
        className="flex justify-center"
      >
        <div className="w-px h-3 bg-[#d5d5d5]" />
      </motion.div>

      {/* Step 3 — Send */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={visible ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 1.1, duration: 0.45 }}
        className="rounded-xl border border-[#e5e5e5] bg-white p-4"
      >
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-blue/10 flex items-center justify-center">
              <Zap className="w-4 h-4 text-blue" strokeWidth={2} />
            </div>
            <span className="font-heading text-text-primary text-sm font-medium">Send AI follow-up</span>
          </div>
          <span className="text-text-muted text-xs">×</span>
        </div>
        <div className="flex items-center gap-2 ml-10.5">
          <Clock className="w-3.5 h-3.5 text-text-muted" strokeWidth={1.5} />
          <span className="text-text-muted text-xs">At</span>
          <span className="text-blue text-xs font-medium border border-blue/20 bg-blue/5 rounded-full px-2.5 py-0.5">10:00 AM</span>
        </div>
      </motion.div>

      {/* Message bubble */}
      <motion.div
        initial={{ opacity: 0, y: 16, scale: 0.95 }}
        animate={visible ? { opacity: 1, y: 0, scale: 1 } : {}}
        transition={{ delay: 1.7, duration: 0.5 }}
        className="ml-auto max-w-[85%] rounded-2xl rounded-br-sm bg-[#6b8f8f] px-5 py-4 text-white text-sm font-light leading-relaxed mt-8"
      >
        Hi Sarah, this is your AI assistant at Renewal Spa. It's been 3 months since your last visit — ready to book your next session? We have openings this Friday at 2 PM.
      </motion.div>
    </div>
  )
}

function WhatItCanDo() {
  const [active, setActive] = useState(0)

  return (
    <FadeUp className="grid lg:grid-cols-2 gap-1.5">
      {/* Left — big card with illustration */}
      <div className="bg-white rounded-[20px] p-8 md:p-10 flex flex-col relative overflow-hidden min-h-[480px] md:min-h-[560px]">
        <div className="flex-1 flex items-center justify-center">
          <div className="w-full max-w-[440px]">
            {active === 0 ? (
              <InboxFeed key="inbox" />
            ) : active === 1 ? (
              <ConvertLeadChat key="convert" />
            ) : active === 2 ? (
              <FollowUpWorkflow key="followup" />
            ) : active === 3 ? (
              <ReviewCard key="review" />
            ) : null}
          </div>
        </div>
      </div>

      {/* Right — 4 collapsible subcards */}
      <div className="flex flex-col gap-1.5">
        {ACCORDION_ITEMS.map((item, i) => {
          const isOpen = active === i
          const Icon = item.icon
          return (
            <div
              key={i}
              className={`flex-1 rounded-[20px] p-7 md:p-8 flex flex-col justify-between cursor-pointer transition-colors relative overflow-hidden ${
                isOpen ? 'bg-blue text-white' : 'bg-white hover:bg-bg-gray'
              }`}
              onClick={() => setActive(i)}
            >
              <div className="flex items-center justify-between gap-3 relative z-10">
                <div className="flex items-center gap-4">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${
                    isOpen ? 'bg-white/20' : 'bg-blue'
                  }`}>
                    <Icon className="w-5 h-5 text-white" strokeWidth={1.5} />
                  </div>
                  <span className={`font-heading font-bold uppercase text-[18px] md:text-[20px] leading-[1.1] tracking-[-0.01em] ${
                    isOpen ? 'text-white' : 'text-text-primary'
                  }`}>
                    {item.title}
                  </span>
                </div>
                <ChevronDown
                  className={`w-5 h-5 flex-shrink-0 transition-transform duration-300 ${
                    isOpen ? 'rotate-180 text-white/70' : 'text-text-muted'
                  }`}
                  strokeWidth={1.5}
                />
              </div>

              <motion.div
                initial={false}
                animate={{ height: isOpen ? 'auto' : 0 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="overflow-hidden relative z-10"
              >
                <p className={`text-[12px] font-medium uppercase tracking-[0.06em] leading-[1.6] mt-4 max-w-[300px] ${
                  isOpen ? 'text-white/70' : 'text-text-muted'
                }`}>
                  {item.description}
                </p>

                {/* Mobile chat preview */}
                <div className="lg:hidden mt-5">
                  <AnimatePresence mode="wait">
                    <ChatBubble
                      key={i}
                      user={item.chat.user}
                      ai={item.chat.ai}
                    />
                  </AnimatePresence>
                </div>
              </motion.div>

              {/* Decorative images */}
              {i === 0 && (
                <img src={offering1Bg} alt="" className="absolute bottom-0 right-0 w-[40%] max-w-[160px] h-auto pointer-events-none opacity-80" />
              )}
              {i === 3 && (
                <img src={offering2Bg} alt="" className="absolute top-0 right-0 w-[40%] max-w-[160px] h-auto pointer-events-none opacity-80" />
              )}
            </div>
          )
        })}
      </div>
    </FadeUp>
  )
}

const INDUSTRIES = [
  { icon: 'https://newo.ai/wp-content/uploads/2026/02/Vector.svg', title: 'Restaurant', description: '\u00A0Table bookings, catering, delivery, private dining' },
  { icon: 'https://newo.ai/wp-content/uploads/2026/02/Vector-1.svg', title: 'Catering', description: 'Event quotes, menu customization, scheduling' },
  { icon: 'https://newo.ai/wp-content/uploads/2026/02/icon-image-11.svg', title: 'Hospitality / Hotels', description: 'Reservations, concierge, multilingual support' },
  { icon: 'https://newo.ai/wp-content/uploads/2026/02/Vector-2.svg', title: 'Cleaning Services', description: 'Instant quotes, recurring bookings, ZIP verification' },
  { icon: 'https://newo.ai/wp-content/uploads/2026/02/icon-image-5.svg', title: 'HVAC / Plumbing', description: 'Emergency dispatch, appointment scheduling, estimates' },
  { icon: 'https://newo.ai/wp-content/uploads/2026/02/Vector-3.svg', title: 'Home Service Companies', description: 'Multi-trade coordination, technician routing' },
  { icon: 'https://newo.ai/wp-content/uploads/2026/02/icon-image-6-1.svg', title: 'Healthcare', description: 'Patient intake, insurance verification, appointment reminders' },
  { icon: 'https://newo.ai/wp-content/uploads/2026/02/icon-image-7.svg', title: 'Dental & Orthodontics', description: 'New patient scheduling, treatment coordination, recall' },
  { icon: 'https://newo.ai/wp-content/uploads/2026/02/icon-image-8.svg', title: 'Fitness, Wellness, Beauty', description: 'Membership sales, class booking, upsells' },
  { icon: 'https://newo.ai/wp-content/uploads/2026/02/icon-image-9.svg', title: 'Legal & Law Firms', description: 'Lead qualification, consultation scheduling, intake' },
  { icon: 'https://newo.ai/wp-content/uploads/2026/02/icon-image-10.svg', title: 'And many more\u2026', description: '' },
]


export default function AIEmployee() {
  return (
    <div className="flex flex-col gap-1.5 p-1.5">
      {/* -- Hero -- */}
      <section className="min-h-screen bg-white rounded-[20px] relative overflow-hidden flex flex-col">
        {/* Hero graphic */}
        <div className="absolute inset-0 flex items-center justify-center md:items-center md:justify-end md:pr-[2%] md:pt-[5%] pointer-events-none">
          <div className="hero-enter hero-enter-d1">
            <img src={employeeBg} alt="" className="hero-float w-[min(620px,80vw)] h-auto rotate-0" />
          </div>
        </div>

        {/* Top Row */}
        <div className="relative z-10 max-w-[1376px] w-full mx-auto px-4 md:px-8 pt-24 md:pt-28 hero-enter">
          <div className="flex justify-between items-start">
            <div className="hidden lg:flex flex-col gap-8">
              <div>
                <p className="text-[11px] font-medium uppercase tracking-[0.15em] text-text-muted mb-1">Workflow Automation</p>
                <p className="text-[13px] text-text-body leading-relaxed max-w-[180px]">Replaces repetitive admin, CRM & scheduling tasks</p>
              </div>
              <div>
                <p className="text-[11px] font-medium uppercase tracking-[0.15em] text-text-muted mb-1">Zero Errors</p>
                <p className="text-[13px] text-text-body leading-relaxed max-w-[180px]">Precision execution with no manual mistakes</p>
              </div>
            </div>
            <div className="flex gap-8 md:gap-12 ml-auto">
              {[
                { value: '60%', label: 'Admin Recaptured' },
                { value: '24/7', label: 'Task Processing' },
                { value: '<1mo', label: 'Deployment' },
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
              Your Team<br />
              <span className="text-blue">That Never</span><br />
              Sleeps
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
              Automate admin, CRM, scheduling & operations
            </p>
          </div>
        </div>
      </section>

      {/* -- What AI Can Do — Accordion -- */}
      <WhatItCanDo />

      {/* -- Built for Your Industry -- */}
      <section className="bg-white rounded-[20px] py-16 md:py-24">
        <FadeUp>
          <div className="max-w-[1376px] mx-auto px-4 md:px-8 mb-12">
            <h2 className="mb-4">Built for Your Industry</h2>
            <p className="text-text-body text-lg max-w-3xl leading-relaxed">
              Pre-configured <strong className="text-text-primary">AI Employees</strong> for 10 core industries — and dozens more.<br />
              If you have operations, we've got you covered.
            </p>
          </div>

          <div className="max-w-[1376px] mx-auto px-4 md:px-8">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
              {INDUSTRIES.map((ind) => (
                <div
                  key={ind.title}
                  className="bg-bg-gray rounded-2xl p-6 flex flex-col items-start"
                >
                  <img src={ind.icon} alt="" className="w-12 h-12 mb-5" />
                  <h3 className="text-[17px] font-semibold text-text-primary mb-1">{ind.title}</h3>
                  {ind.description && (
                    <p className="text-text-muted text-[14px] leading-relaxed">{ind.description}</p>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="max-w-[1376px] mx-auto px-4 md:px-8 mt-12">
            <a
              href="https://api.leadconnectorhq.com/widget/bookings/cybersphere-ai-implementation-strategy-call"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center text-[15px] font-semibold px-8 py-3.5 rounded-full bg-text-primary text-white hover:bg-text-primary/85 transition-colors"
            >
              Talk to your industry specialist
            </a>
          </div>
        </FadeUp>
      </section>

      {/* -- VLS / Demo Section -- */}
      <VLSSection label="Watch the AI Employee Handle a Full Day of Admin" variant="aiEmployee" />

      {/* -- CTA -- */}
      <CTASection />
    </div>
  )
}
