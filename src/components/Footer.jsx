import { Link } from 'react-router-dom'

const SOLUTIONS = [
  { label: 'AI Voice Agent', path: '/voice-agent' },
  { label: 'AI Lead Gen Engine', path: '/lead-gen' },
  { label: 'AI Personal Employee', path: '/ai-employee' },
  { label: 'AI Pentesting', path: '/pentesting' },
]

const COMPANY = [
  { label: 'About', path: '/' },
  { label: 'Process', path: '/' },
  { label: 'Results', path: '/' },
]

export default function Footer() {
  return (
    <footer className="bg-bg-footer">
      <div className="max-w-[1376px] mx-auto px-4 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-7 h-7 rounded-lg bg-blue flex items-center justify-center">
                <span className="text-white font-medium text-xs">C</span>
              </div>
              <span className="font-heading text-[17px] font-normal text-white tracking-tight">
                Cybersphere
              </span>
            </div>
            <p className="text-[14px] text-white/40 leading-relaxed max-w-[260px]">
              White-glove AI implementation for businesses that rely on phones, leads, and manual work.
            </p>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="text-[12px] font-medium uppercase tracking-[0.12em] text-white/50 mb-5 font-sans">
              Solutions
            </h4>
            <ul className="space-y-3">
              {SOLUTIONS.map(item => (
                <li key={item.path + item.label}>
                  <Link to={item.path} className="text-[14px] text-white/40 hover:text-white transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-[12px] font-medium uppercase tracking-[0.12em] text-white/50 mb-5 font-sans">
              Company
            </h4>
            <ul className="space-y-3">
              {COMPANY.map(item => (
                <li key={item.label}>
                  <Link to={item.path} className="text-[14px] text-white/40 hover:text-white transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Get Started */}
          <div>
            <h4 className="text-[12px] font-medium uppercase tracking-[0.12em] text-white/50 mb-5 font-sans">
              Get Started
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://calendly.com/cybersphere"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[14px] text-white/40 hover:text-white transition-colors"
                >
                  Schedule a Discovery Call
                </a>
              </li>
              <li>
                <a
                  href="mailto:hello@getcybersphere.com"
                  className="text-[14px] text-white/40 hover:text-white transition-colors"
                >
                  hello@getcybersphere.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-white/8 flex flex-col sm:flex-row justify-between items-center gap-4 text-[13px] text-white/30">
          <p>&copy; {new Date().getFullYear()} Cybersphere. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white/60 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white/60 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
