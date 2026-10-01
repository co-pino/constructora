import { MessageCircle } from 'lucide-react'
import '../styles/tarjetaServicios.css'

function TarjetaServicios({ nombre, descripcion, icono: Icono, precioMin, modalidades }) {
  const precioMostrar = modalidades
    ? Math.min(...modalidades.map((m) => m.precioMin))
    : precioMin

  return (
    <div className="tarjeta-servicio">
      <div className="tarjeta-servicio-icono">
        <Icono size={32} color="var(--color-primary)" />
      </div>

      <h3 className="tarjeta-servicio-titulo">{nombre}</h3>
      <p className="tarjeta-servicio-descripcion">{descripcion}</p>

      <p className="tarjeta-servicio-precio">
        Desde ${precioMostrar.toLocaleString('es-CL')} / m²
      </p>

      <a
        href="https://wa.me/56935793997"
        target="_blank"
        rel="noopener noreferrer"
        className="tarjeta-servicio-cta"
      >
        <MessageCircle size={16} />
        Cotizar por WhatsApp
      </a>
    </div>
  )
}

export default TarjetaServicios