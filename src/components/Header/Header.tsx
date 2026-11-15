import { useState } from 'react'
import { ArrowRight, Menu, MessageCircle, X } from 'lucide-react'
import styles from './Header.module.css'
const WHATSAPP = 'https://wa.me/message/V2UGAYQJIJ77N1'
const links = [['Início','#inicio'],['Serviços','#servicos'],['Tecnologia','#tecnologia'],['Atendimento','#atendimento'],['Sobre','#sobre'],['Contato','#contato']]
export default function Header() {
 const [open,setOpen] = useState(false)
 return <header className={styles.header}><div className={styles.inner}>
  <a className={styles.brand} href="#inicio" aria-label="SONNAR Caça Vazamentos - início"><img src="./sonnar-logo.svg" alt="SONNAR Caça Vazamentos"/></a>
  <nav className={styles.desktop} aria-label="Navegação principal">{links.map(([label,href])=><a key={label} href={href}>{label}</a>)}</nav>
  <a className={styles.cta} href={WHATSAPP} target="_blank" rel="noreferrer"><MessageCircle size={17}/> Falar com a SONNAR</a>
  <button className={styles.toggle} onClick={()=>setOpen(!open)} aria-label={open?'Fechar menu':'Abrir menu'} aria-expanded={open}>{open?<X/>:<Menu/>}</button>
 </div>{open&&<nav className={styles.mobile} aria-label="Navegação mobile">{links.map(([label,href])=><a key={label} href={href} onClick={()=>setOpen(false)}>{label}<ArrowRight size={16}/></a>)}<a className={styles.mobileCta} href={WHATSAPP} target="_blank" rel="noreferrer">Falar pelo WhatsApp</a></nav>}</header>
}
