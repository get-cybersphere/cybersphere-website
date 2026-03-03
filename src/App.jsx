import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Landing from './pages/Landing'
import VoiceAgent from './pages/VoiceAgent'
import LeadGen from './pages/LeadGen'
import AIEmployee from './pages/AIEmployee'
import Pentesting from './pages/Pentesting'
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsOfService from './pages/TermsOfService'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/voice-agent" element={<VoiceAgent />} />
          <Route path="/lead-gen" element={<LeadGen />} />
          <Route path="/ai-employee" element={<AIEmployee />} />
          <Route path="/pentesting" element={<Pentesting />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}
