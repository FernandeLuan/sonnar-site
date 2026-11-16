import { MapPin } from 'lucide-react'
import { ContactLink } from '../../components/ContactLink'

export default function HeroSection() {
  return (
    <section className="hero" id="inicio">
      <div className="container hero-grid">
        <div>
          <div className="eyebrow">CAÇA VAZAMENTOS · BLUMENAU E REGIÃO</div>
          <h1>Manchas de umidade ou conta de água acima do normal?</h1>
          <p className="lead">Localizamos a origem exata do vazamento com tecnologia e precisão, evitando quebras desnecessárias.</p>
          <ContactLink>Fale com a SONNAR (47) 98890-1278</ContactLink>
          <p className="whatsapp-hint">Conte o que está acontecendo e, se possível, envie fotos pelo WhatsApp</p>
          <p className="location"><MapPin aria-hidden="true"/>Empresas, condomínios e residências em Blumenau, Vale do Itajaí e litoral.</p>
        </div>
        <div className="hero-side">
          <span>SONNAR CAÇA VAZAMENTOS</span>
          <p>Precisão que localiza,<br/><strong>economia que resolve</strong></p>
          <div className="hero-rule"/>
        </div>
      </div>
    </section>
  )
}
