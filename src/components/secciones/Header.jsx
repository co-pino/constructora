import { Menu, MessageCircle, X } from 'lucide-react'
import { useState } from 'react'
import '../../styles/header.css'
import logo from '../../assets/logo.png'

const navigationLinks = [
  { href: '#quienes-somos', label: 'Quiénes somos' },
  { href: '#servicios', label: 'Servicios' },
  { href: '#proyectos', label: 'Proyectos' },
  { href: '#cotizador', label: 'Cotizador' },
  { href: '#contacto', label: 'Contacto' },
]

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="site-header">
      <div className="header-inner">
        <a href="#hero" className="header-logo" onClick={closeMenu}>
          <img src={logo} alt="Logo constructora" className="header-logo-img" />
        </a>

        <nav
          id="primary-navigation"
          className={`header-nav${menuOpen ? ' is-open' : ''}`}
          aria-label="Navegación principal"
        >
          {navigationLinks.map(({ href, label }) => (
            <a key={href} href={href} onClick={closeMenu}>
              {label}
            </a>
          ))}
        </nav>

        <a
          href="#cotizador"
          className="header-cta"
          onClick={closeMenu}
        >
          <MessageCircle size={18} aria-hidden="true" />
          Cotizar proyecto
        </a>

        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </header>
  )
}

export default Header