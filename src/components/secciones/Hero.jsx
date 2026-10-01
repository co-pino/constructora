import { MessageCircle, ArrowDown } from 'lucide-react'
import heroBg from '../../assets/hero-bg.jpeg'
import '../../styles/hero.css'

function Hero() {
  return (
    <section
      className="hero"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <div className="hero-overlay"></div>

      <div className="hero-content">
        <p className="hero-eyebrow">Calidad, puntualidad y cumplimiento</p>
        <h1 className="hero-title">
          Construcción y remodelación con resultados que se notan
        </h1>
        <p className="hero-subtitle">
          Trabajamos con responsabilidad y plazos claros, desde la primera
          visita hasta la entrega final de tu proyecto.
        </p>

        <div className="hero-actions">
          <a
            href="https://wa.me/56935793997"
            target="_blank"
            rel="noopener noreferrer"
            className="hero-btn hero-btn--primary"
          >
            <MessageCircle size={18} />
            Cotizar por WhatsApp
          </a>

          <a href="#servicios" className="hero-btn hero-btn--secondary">
            Ver servicios
          </a>
        </div>
      </div>

      <a href="#quienes-somos" className="hero-scroll" aria-label="Bajar a la siguiente sección">
        <ArrowDown size={22} />
      </a>
    </section>
  )
}

export default Hero