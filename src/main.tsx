import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './styles/global.css'
import './sections/Hero/HeroSection.css'
import './sections/Services/ServicesSection.css'
import './sections/Diagnosis/DiagnosisSection.css'
import './sections/Process/ProcessSection.css'
import './sections/About/AboutSection.css'
import './sections/Coverage/CoverageSection.css'
import './sections/Contact/ContactSection.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode><App /></React.StrictMode>,
)
