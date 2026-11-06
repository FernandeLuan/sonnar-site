import { useState } from 'react'
import { ArrowRight, Droplets, Menu, MessageCircle, X } from 'lucide-react'
import styles from './Header.module.css'

const WHATSAPP = 'https://wa.me/5547988901278'
const links = [['Início','#inicio'],['Quando chamar','#problemas'],['Como funciona','#processo'],['A SONNAR','#sobre'],['Contato','#contato']]

export default function Header() {
 const [open,setOpen] = useState(false)
 return <header className={styles.header}><div className={styles.inner}>
  <a className={styles.brand} href="#inicio"><span className={styles.mark}><Droplets size={29}/></span><span><b>SONNAR</b><small>CAÇA VAZAMENTOS</small></span></a>
  <nav className={styles.desktop}>{links.map(([label,href])=><a key={label} href={href}>{label}</a>)}</nav>
  <a className={styles.cta} href={WHATSAPP} target="_blank" rel="noreferrer"><MessageCircle size={17}/> Fale conosco</a>
  <button className={styles.toggle} onClick={()=>setOpen(!open)} aria-label={open?'Fechar menu':'Abrir menu'}>{open?<X/>:<Menu/>}</button>
 </div>{open&&<nav className={styles.mobile}>{links.map(([label,href])=><a key={label} href={href} onClick={()=>setOpen(false)}>{label}<ArrowRight size={16}/></a>)}<a className={styles.mobileCta} href={WHATSAPP} target="_blank" rel="noreferrer">Falar pelo WhatsApp</a></nav>}</header>
}
