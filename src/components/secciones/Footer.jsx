import { Mail, MapPin, MessageCircle } from 'lucide-react'
import logo from '../../assets/logo.png'
import { contacto } from '../../data/contacto'
import '../../styles/footer.css'

const navigationLinks = [
  { href: '#quienes-somos', label: 'Quiénes somos' },
  { href: '#servicios', label: 'Servicios' },
  { href: '#proyectos', label: 'Proyectos' },
  { href: '#cotizador', label: 'Cotizador' },
  { href: '#contacto', label: 'Contacto' },
]

const regiones = [
  'Región de Coquimbo',
  'Región de Valparaíso',
  'Región Metropolitana',
  "Región del Libertador B. O'Higgins",
  'Región del Maule',
]

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-col">
          <img src={logo} alt="Logo constructora" className="footer-logo" />
          <p className="footer-tagline">
            Construcción y remodelación con cumplimiento normativo y plazos claros.
          </p>
        </div>

        <div className="footer-col">
          <h3>Menú</h3>
          <ul>
            {navigationLinks.map(({ href, label }) => (
              <li key={href}><a href={href}>{label}</a></li>
            ))}
          </ul>
        </div>

        <div className="footer-col">
          <h3>Contacto</h3>
          <ul className="footer-contacto">
            <li>
              <a href={`https://wa.me/${contacto.whatsapp}`} target="_blank" rel="noopener noreferrer">
                <MessageCircle size={16} aria-hidden="true" />
                +{contacto.whatsapp}
              </a>
            </li>
            <li>
              <a href={`mailto:${contacto.correo}`}>
                <Mail size={16} aria-hidden="true" />
                {contacto.correo}
              </a>
            </li>
          </ul>
        </div>

        <div className="footer-col">
          <h3>Cobertura</h3>
          <ul className="footer-cobertura">
            {regiones.map((region) => (
              <li key={region}>
                <MapPin size={14} aria-hidden="true" />
                {region}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} FORTE Edificios & Ampliaciones. Todos los derechos reservados.</p>
      </div>
    </footer>
  )
}

export default Footer