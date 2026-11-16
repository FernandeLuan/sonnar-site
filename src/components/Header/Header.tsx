import {useState} from 'react'
import {ArrowRight,Menu,X} from 'lucide-react'
import styles from './Header.module.css'
const links=[['Início','#inicio'],['Serviços','#servicos'],['Como funciona','#processo'],['Sobre','#sobre'],['Contato','#contato']]
export default function Header(){
 const[open,setOpen]=useState(false)
 return <header className={styles.header}>
  <div className={styles.inner}>
   <a className={styles.brand} href="#inicio" aria-label="SONNAR início" onClick={()=>setOpen(false)}><img src="./sonnar-logo-dark.webp" alt="SONNAR Caça Vazamentos"/></a>
   <nav className={styles.desktop} aria-label="Navegação principal">{links.map(([label,href])=><a key={label} href={href}>{label}</a>)}</nav>
   <button className={styles.toggle} type="button" onClick={()=>setOpen(value=>!value)} aria-label={open?'Fechar menu':'Abrir menu'} aria-expanded={open} aria-controls="mobile-navigation">{open?<X/>:<Menu/>}</button>
  </div>
  <nav id="mobile-navigation" className={open?styles.mobileOpen:styles.mobileClosed} aria-label="Navegação móvel" aria-hidden={!open}>
   {links.map(([label,href],index)=><a key={label} href={href} tabIndex={open?0:-1} style={{animationDelay: (index * 45 + 55) + 'ms'}} onClick={()=>setOpen(false)}>{label}<ArrowRight size={18}/></a>)}
  </nav>
 </header>
}