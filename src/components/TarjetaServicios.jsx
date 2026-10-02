import { Mail, MessageCircle } from 'lucide-react'
import '../styles/tarjetaServicios.css'

function TarjetaServicios({ nombre, descripcion, imagen, precioMin, modalidades }) {
  const precioMostrar = modalidades
    ? Math.min(...modalidades.map((m) => m.precioMin))
    : precioMin

  return (
    <div className="tarjeta-servicio">
      <img
        src={imagen}
        alt={nombre}
        className="tarjeta-servicio-imagen"
        loading="lazy"
      />

      <div className="tarjeta-servicio-cuerpo">
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
        <a
          href="mailto:constanzapino.dev@gmail.com"
          className="tarjeta-servicio-cta"
        >
          <Mail size={16} />
          Cotizar por correo
        </a>
      </div>
    </div>
  )
}

export default TarjetaServicios