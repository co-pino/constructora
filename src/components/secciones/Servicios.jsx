import TarjetaServicios from '../TarjetaServicios'
import ScrollReveal from '../ScrollReveal'
import { servicios } from '../../data/servicios'
import '../../styles/servicios.css'

function Servicios({ onQuote }) {
  return (
    <div className="servicios">
      <p className="servicios-eyebrow">Lo que hacemos</p>
      <h2 className="servicios-titulo">Nuestros servicios</h2>
      <p className="servicios-subtitulo">
        Trabajos de construcción y remodelación con cotización clara desde el inicio.
      </p>

      <div className="servicios-grid">
        {servicios.map((servicio, index) => (
          <ScrollReveal key={servicio.id} delay={index * 0.08}>
            <TarjetaServicios {...servicio} onQuote={onQuote} />
          </ScrollReveal>
        ))}
      </div>
    </div>
  )
}

export default Servicios