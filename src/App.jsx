import { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Lenis from 'lenis'
import 'lenis/dist/lenis.css'
import { HeroSection } from './screens/HomePage/sections/HeroSection'
import { FeaturesSection } from './screens/HomePage/sections/FeaturesSection'
import { ProjectAndInquirySection } from './screens/HomePage/sections/ProjectAndInquirySection'
import { LatestProjectSnapshotSection } from './screens/HomePage/sections/LatestProjectSnapshotSection'
import { ContactFormSection } from './screens/HomePage/sections/ContactFormSection'
import { SiteReviewSection } from './screens/HomePage/sections/SiteReviewSection'
import { FooterSection } from './screens/HomePage/sections/FooterSection'
import { ContactHeroSection } from './screens/ContactUs/ContactHeroSection'

function HomePage() {
  return (
    <div className="main-content flex flex-col w-full">
      <HeroSection />
      <FeaturesSection />
      <ProjectAndInquirySection />
      <LatestProjectSnapshotSection />
      <ContactFormSection />
      <SiteReviewSection />
      <FooterSection />
    </div>
  )
}

function ContactUsPage() {
  return (
    <div className="main-content flex flex-col w-full">
      <ContactHeroSection />
      <ContactFormSection />
      <SiteReviewSection />
      <FooterSection />
    </div>
  )
}

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)

    return () => lenis.destroy()
  }, [])

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/contactus" element={<ContactUsPage />} />
    </Routes>
  )
}

export default App
