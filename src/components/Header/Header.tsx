import { useState } from 'react'
import { ArrowRight, Menu, X } from 'lucide-react'
import styles from './Header.module.css'

const links = [['Início', '#inicio'], ['Serviços', '#servicos'], ['Como funciona', '#processo'], ['Sobre', '#sobre'], ['Contato', '#contato']]

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <a className={styles.brand} href="#inicio" aria-label="SONNAR início" onClick={() => setOpen(false)}>
          <img src="./sonnar-logo-horizontal-original.png" alt="SONNAR Caça Vazamentos" width="2048" height="690" fetchPriority="high"/>
        </a>
        <nav className={styles.desktop} aria-label="Navegação principal">
          {links.map(([label, href]) => <a key={label} href={href}>{label}</a>)}
        </nav>
        <button className={styles.toggle} type="button" onClick={() => setOpen(value => !value)} aria-label={open ? 'Fechar menu' : 'Abrir menu'} aria-expanded={open} aria-controls="mobile-navigation">
          {open ? <X aria-hidden="true"/> : <Menu aria-hidden="true"/>}
        </button>
      </div>
      <nav id="mobile-navigation" className={open ? styles.mobileOpen : styles.mobileClosed} aria-label="Navegação móvel" aria-hidden={!open}>
        {links.map(([label, href]) => (
          <a key={label} href={href} tabIndex={open ? 0 : -1} onClick={() => setOpen(false)}>
            {label}<ArrowRight size={18} aria-hidden="true"/>
          </a>
        ))}
      </nav>
    </header>
  )
}
