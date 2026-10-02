import { Calculator, Mail, MessageCircle } from 'lucide-react'
import { contacto } from '../data/contacto'
import { formatearCLP } from '../utils/calculadora-cotizacion'
import '../styles/tarjetaServicios.css'

function TarjetaServicios({ id, nombre, descripcion, imagen, precioMin, precioMax, precioReferencia, modalidades, cotizable = true, incluye, onQuote }) {
  const precios = modalidades ?? [{ precioMin, precioMax }]
  const precioMinimo = Math.min(...precios.map((modalidad) => modalidad.precioMin))
  const precioMaximo = Math.max(...precios.map((modalidad) => modalidad.precioMax))
  const mensajeContacto = `Hola, me interesa cotizar el servicio de ${nombre}. ¿Podemos coordinar una evaluación?`
  const whatsappUrl = `https://wa.me/${contacto.whatsapp}?text=${encodeURIComponent(mensajeContacto)}`
  const correoUrl = `mailto:${contacto.correo}?subject=${encodeURIComponent(`Consulta: ${nombre}`)}&body=${encodeURIComponent(mensajeContacto)}`

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
          {cotizable
            ? `${formatearCLP(precioMinimo)} – ${formatearCLP(precioMaximo)} / m²${modalidades ? ' según modalidad' : ''}`
            : precioReferencia}
        </p>

        {incluye && <p className="tarjeta-servicio-incluye">{incluye}</p>}

        {cotizable ? (
          <a
            href="#cotizador"
            className="tarjeta-servicio-cta"
            onClick={() => onQuote(id)}
          >
            <Calculator size={16} />
            Calcular estimación
          </a>
        ) : (
          <>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="tarjeta-servicio-cta">
              <MessageCircle size={16} />
              Consultar por WhatsApp
            </a>
            <a href={correoUrl} className="tarjeta-servicio-cta">
              <Mail size={16} />
              Consultar por correo
            </a>
          </>
        )}
      </div>
    </div>
  )
}

export default TarjetaServicios