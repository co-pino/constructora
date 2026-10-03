import { useState } from 'react'
import emailjs from '@emailjs/browser'
import { Mail, MessageCircle, Send } from 'lucide-react'
import { servicios, extras } from '../../data/servicios'
import { calcularRangoBase, aplicarExtras, formatearCLP } from '../../utils/calculadora-cotizacion'
import { contacto } from '../../data/contacto'
import '../../styles/cotizador.css'

function Cotizador({ selectedServiceId, onServiceChange }) {
  const [modalidadIndex, setModalidadIndex] = useState(0)
  const [metrosCuadrados, setMetrosCuadrados] = useState('')
  const [extrasSeleccionados, setExtrasSeleccionados] = useState([])
  const [datosContacto, setDatosContacto] = useState({ nombre: '', correo: '', empresaWeb: '' })
  const [estadoEnvioCorreo, setEstadoEnvioCorreo] = useState('idle') // idle | enviando | exito | error

  const serviciosCotizables = servicios.filter((item) => item.cotizable !== false)
  const servicio = serviciosCotizables.find((item) => item.id === selectedServiceId) ?? null
  const tieneModalidades = servicio?.modalidades?.length > 0
  const baseServicio = tieneModalidades ? servicio.modalidades[modalidadIndex] : servicio
  const extrasDisponibles = extras.filter(
    (extra) => !extra.requiereMateriales || servicio?.incluyeMateriales
  )
  const extrasAplicables = extrasSeleccionados.filter((id) =>
    extrasDisponibles.some((extra) => extra.id === id)
  )

  const m2Numero = Number(metrosCuadrados) || 0
  const puedeCalcular = servicio && m2Numero > 0

  let resultado = null
  if (puedeCalcular) {
    const servicioParaCalculo = { ...baseServicio, minimoM2: servicio.minimoM2 }
    const rango = calcularRangoBase(servicioParaCalculo, m2Numero)
    resultado = aplicarExtras(rango, extrasAplicables, extrasDisponibles)
  }

  const modalidadSeleccionada = tieneModalidades ? servicio.modalidades[modalidadIndex].nombre : null
  const mensajeCotizacion = resultado
    ? [
      'Hola, quiero solicitar una cotización para mi proyecto.',
      `Servicio: ${servicio.nombre}`,
      modalidadSeleccionada && `Modalidad: ${modalidadSeleccionada}`,
      `Superficie solicitada: ${m2Numero} m²`,
      m2Numero < servicio.minimoM2 && `Superficie mínima considerada: ${servicio.minimoM2} m²`,
      `Rango estimado: ${formatearCLP(resultado.minimo)} a ${formatearCLP(resultado.maximo)}`,
      extrasAplicables.length > 0 && `Extras: ${extrasDisponibles.filter((extra) => extrasAplicables.includes(extra.id)).map((extra) => extra.nombre).join(', ')}`,
    ].filter(Boolean).join('\n')
    : ''

  const whatsappUrl = resultado
    ? `https://wa.me/${contacto.whatsapp}?text=${encodeURIComponent(mensajeCotizacion)}`
    : ''

  const toggleExtra = (id) => {
    setExtrasSeleccionados((actual) =>
      actual.includes(id) ? actual.filter((e) => e !== id) : [...actual, id]
    )
  }

  const handleDatosContactoChange = (e) => {
    const { name, value } = e.target
    setDatosContacto((actual) => ({ ...actual, [name]: value }))
  }

  const handleEnviarCorreo = async (e) => {
    e.preventDefault()

    // HONEYPOT PARA LOS BOTS, IGUAL QUE EN EL OTRO FORMULARIO
    if (datosContacto.empresaWeb) {
      return
    }

    setEstadoEnvioCorreo('enviando')

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          nombre: datosContacto.nombre,
          correo: datosContacto.correo,
          telefono: '',
          servicio: servicio.nombre,
          mensaje: mensajeCotizacion,
        },
        { publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY }
      )
      setEstadoEnvioCorreo('exito')
      setDatosContacto({ nombre: '', correo: '', empresaWeb: '' })
    } catch (error) {
      console.error('Error al enviar la cotización por correo:', error)
      setEstadoEnvioCorreo('error')
    }
  }

  return (
    <div className="cotizador">
      <p className="cotizador-eyebrow">Herramienta rápida</p>
      <h2 className="cotizador-titulo">Cotizador estimado</h2>
      <p className="cotizador-subtitulo">
        Calcula un rango referencial antes de contactarnos.
      </p>

      <div className="cotizador-form">
        <label className="cotizador-campo">
          <span>Servicio</span>
          <select value={selectedServiceId} onChange={(e) => onServiceChange(e.target.value)}>
            <option value="">Selecciona un servicio</option>
            {serviciosCotizables.map((s) => (
              <option key={s.id} value={s.id}>{s.nombre}</option>
            ))}
          </select>
        </label>

        {tieneModalidades && (
          <label className="cotizador-campo">
            <span>Modalidad</span>
            <select value={modalidadIndex} onChange={(e) => setModalidadIndex(Number(e.target.value))}>
              {servicio.modalidades.map((m, i) => (
                <option key={m.nombre} value={i}>{m.nombre}</option>
              ))}
            </select>
          </label>
        )}

        <label className="cotizador-campo">
          <span>Metros cuadrados</span>
          <input
            type="number"
            min="0"
            value={metrosCuadrados}
            onChange={(e) => setMetrosCuadrados(e.target.value)}
            placeholder="Ej: 45"
          />
        </label>

        <div className="cotizador-extras">
          <span>Extras</span>
          {extrasDisponibles.map((extra) => (
            <label key={extra.id} className="cotizador-extra">
              <input
                type="checkbox"
                checked={extrasSeleccionados.includes(extra.id)}
                onChange={() => toggleExtra(extra.id)}
              />
              {extra.nombre}
            </label>
          ))}
        </div>
      </div>

      {resultado && (
        <div className="cotizador-resultado">
          <p className="cotizador-resultado-label">Estimación referencial</p>
          <p className="cotizador-resultado-valor">
            {formatearCLP(resultado.minimo)} – {formatearCLP(resultado.maximo)}
          </p>

          {m2Numero < servicio.minimoM2 && (
            <p className="cotizador-aviso">
              Este servicio tiene un mínimo de {servicio.minimoM2} m², el cálculo usa ese mínimo.
            </p>
          )}

          <p className="cotizador-no-incluye">
            No incluye permisos municipales, visita técnica previa, ni materiales en los
            servicios donde se indica "materiales aparte".
          </p>

          <p className="cotizador-disclaimer">
            Este valor es una estimación referencial calculada automáticamente. El precio
            final se define tras una visita técnica gratuita, considerando el estado del
            terreno y los materiales elegidos. No constituye una cotización formal.
          </p>

          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="cotizador-accion cotizador-accion--whatsapp">
            <MessageCircle size={18} aria-hidden="true" />
            Enviar por WhatsApp
          </a>

          {estadoEnvioCorreo === 'exito' ? (
            <p className="cotizador-correo-exito">
              Cotización enviada, revisa tu correo pronto.
            </p>
          ) : (
            <form className="cotizador-correo-form" onSubmit={handleEnviarCorreo}>
              <p className="cotizador-correo-label">O recíbela por correo:</p>
              <div className="cotizador-correo-campos">
                <input
                  type="text"
                  name="empresaWeb"
                  value={datosContacto.empresaWeb}
                  onChange={handleDatosContactoChange}
                  className="formulario-honeypot"
                  tabIndex="-1"
                  autoComplete="off"
                  aria-hidden="true"
                />

                <input
                  type="text"
                  name="nombre"
                  placeholder="Tu nombre"
                  value={datosContacto.nombre}
                  onChange={handleDatosContactoChange}
                  required
                />
                <input
                  type="email"
                  name="correo"
                  placeholder="Tu correo"
                  value={datosContacto.correo}
                  onChange={handleDatosContactoChange}
                  required
                />
                <button type="submit" disabled={estadoEnvioCorreo === 'enviando'}>
                  <Send size={16} />
                  {estadoEnvioCorreo === 'enviando' ? 'Enviando...' : 'Enviar'}
                </button>
              </div>
              {estadoEnvioCorreo === 'error' && (
                <p className="cotizador-correo-error">No se pudo enviar, intenta de nuevo.</p>
              )}
            </form>
          )}
        </div>
      )}
    </div>
  )
}

export default Cotizador