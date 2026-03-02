import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import logo from '../assets/images/background/cybersphere_square_logo.png'

const NAV_LINKS = [
  { label: 'Voice Agent', path: '/voice-agent' },
  { label: 'Lead Gen', path: '/lead-gen' },
  { label: 'AI Employee', path: '/ai-employee' },
  { label: 'Pentesting', path: '/pentesting' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-xl border-b border-border-line'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1376px] mx-auto px-4 md:px-8 flex items-center justify-between h-[72px]">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5">
          <img src={logo} alt="Cybersphere" className="w-8 h-8 rounded-lg object-contain" />
          <span className="font-heading text-[19px] font-normal tracking-tight text-text-primary">
            Cybersphere
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-9">
          {NAV_LINKS.map(link => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-[14px] font-normal transition-colors hover:text-text-primary ${
                location.pathname === link.path
                  ? 'text-text-primary'
                  : 'text-text-muted'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="https://calendly.com/cybersphere"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[14px] font-medium px-6 py-2.5 rounded-full bg-blue text-white hover:bg-blue-hover transition-colors"
          >
            Book a Call
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="lg:hidden p-2 text-text-primary"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Overlay */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 top-[72px] bg-white z-40 flex flex-col items-center justify-center gap-8">
          {NAV_LINKS.map(link => (
            <Link
              key={link.path}
              to={link.path}
              className={`font-heading text-2xl font-light transition-colors ${
                location.pathname === link.path
                  ? 'text-text-primary'
                  : 'text-text-muted'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="https://calendly.com/cybersphere"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[14px] font-medium px-8 py-3.5 rounded-full bg-blue text-white"
          >
            Book a Call
          </a>
        </div>
      )}
    </nav>
  )
}
