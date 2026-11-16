import { MapPin, Mail } from 'lucide-react'
import styles from './Footer.module.css'

const WA = 'https://wa.me/message/V2UGAYQJIJ77N1'

function WhatsAppIcon() {
  return <svg viewBox="0 0 32 32" aria-hidden="true"><path d="M16 2.7A13.2 13.2 0 0 0 4.7 22.7L2.8 29.5l7-1.8A13.2 13.2 0 1 0 16 2.7Zm0 24.1a10.8 10.8 0 0 1-5.5-1.5l-.4-.2L6 26.1l1.1-4-.3-.5A10.9 10.9 0 1 1 16 26.8Zm6-8.1c-.4-.2-2-.9-2.3-1.1-.3-.1-.5-.2-.7.2l-1 1.2c-.2.2-.4.2-.7.1-.3-.2-1.4-.6-2.6-1.7-1-.8-1.7-1.9-1.9-2.2-.2-.3 0-.5.2-.7l.5-.6c.2-.2.2-.3.3-.5.1-.2 0-.4 0-.6l-1-2.4c-.3-.6-.5-.5-.8-.5h-.6c-.2 0-.6.1-.9.4-.3.3-1.1 1.1-1.1 2.7s1.2 3.2 1.3 3.4c.2.2 2.3 3.5 5.6 4.9.8.3 1.4.5 1.9.7.8.2 1.5.2 2.1.1.6-.1 1.9-.8 2.2-1.6.3-.7.3-1.4.2-1.5-.1-.2-.3-.3-.7-.5Z"/></svg>
}
function InstagramBrandIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true" className={styles.instagramIcon}><defs><linearGradient id="instagram-brand-gradient" x1="0%" y1="100%" x2="100%" y2="0%"><stop offset="0%" stopColor="#FEDA75"/><stop offset="32%" stopColor="#FA7E1E"/><stop offset="62%" stopColor="#D62976"/><stop offset="100%" stopColor="#962FBF"/></linearGradient></defs><rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="url(#instagram-brand-gradient)" strokeWidth="2"/><circle cx="12" cy="12" r="4" fill="none" stroke="url(#instagram-brand-gradient)" strokeWidth="2"/><circle cx="17.6" cy="6.6" r="1.2" fill="#D62976"/></svg>
}

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.container}>
          <div className={styles.main}>
            <div className={styles.identity}>
              <a className={styles.brand} href="#inicio" aria-label="Voltar ao início">
                <img src="./sonnar-logo-horizontal-original.png" alt="SONNAR Caça Vazamentos" width="2048" height="690" loading="lazy" decoding="async"/>
              </a>
              <p>Precisão que localiza, economia que resolve</p>
              <span className={styles.region}><MapPin size={16}/>Blumenau · Vale do Itajaí · Litoral</span>
            </div>
            <div className={styles.contacts}>
              <a href={WA} target="_blank" rel="noreferrer" className={styles.contactItem}><WhatsAppIcon/><span><small>TELEFONE / WHATSAPP</small><strong>(47) 98890-1278</strong></span></a>
              <a href="mailto:sonnar.vazamentos@gmail.com" className={styles.contactItem}><Mail/><span><small>E-MAIL</small><strong>sonnar.vazamentos@gmail.com</strong></span></a>
              <a href="https://www.instagram.com/sonnar.vazamentos/" target="_blank" rel="noreferrer" className={styles.contactItem}><InstagramBrandIcon/><span><small>INSTAGRAM</small><strong>@sonnar.vazamentos</strong></span></a>
            </div>
          </div>
          <div className={styles.bottom}><span>© {new Date().getFullYear()} SONNAR Caça Vazamentos</span><span>Blumenau — SC</span></div>
        </div>
      </footer>
      <a className={styles.whatsFloat} href={WA} target="_blank" rel="noreferrer" aria-label="Abrir WhatsApp da SONNAR"><WhatsAppIcon/></a>
    </>
  )
}
