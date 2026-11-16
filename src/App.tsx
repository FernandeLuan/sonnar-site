import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import HeroSection from './sections/Hero/HeroSection'
import ServicesSection from './sections/Services/ServicesSection'
import DiagnosisSection from './sections/Diagnosis/DiagnosisSection'
import ProcessSection from './sections/Process/ProcessSection'
import AboutSection from './sections/About/AboutSection'
import CoverageSection from './sections/Coverage/CoverageSection'
import ContactSection from './sections/Contact/ContactSection'
import { useScrollReveal } from './hooks/useScrollReveal'

export default function App() {
  useScrollReveal()

  return (
    <div className="site-shell">
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <DiagnosisSection />
        <ProcessSection />
        <AboutSection />
        <CoverageSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
