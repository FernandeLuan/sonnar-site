import { ContactLink } from '../../components/ContactLink'

export default function ContactSection() {
  return (
    <section className="light section contact" id="contato">
      <div className="container contact-grid">
        <div className="contact-cta">
          <div className="eyebrow">FALE COM A SONNAR</div>
          <h2>Suspeita de vazamento?<br/><em>Vamos investigar!</em></h2>
          <p>Conte o que está acontecendo e, se possível, envie fotos pelo WhatsApp</p>
          <ContactLink>Fale com a SONNAR pelo WhatsApp</ContactLink>
        </div>
      </div>
    </section>
  )
}
