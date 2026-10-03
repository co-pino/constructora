import { useState, useEffect } from 'react'
import emailjs from '@emailjs/browser'
import { Send, CheckCircle2 } from 'lucide-react'
import { servicios } from '../../data/servicios'
import '../../styles/formularioContacto.css'

const estadoInicial = {
  nombre: '',
  correo: '',
  telefono: '',
  servicio: '',
  mensaje: '',
  empresaWeb: '', // honeypot --> es para los bots y no se muestra al usuario real
}

const PATRON_TELEFONO = /^(\+?56)?\s?9\s?\d{4}\s?\d{4}$/

function FormularioContacto() {
  const [formulario, setFormulario] = useState(estadoInicial)
  const [estadoEnvio, setEstadoEnvio] = useState('idle') // idle | enviando | exito | error
  const [errorTelefono, setErrorTelefono] = useState('')

  useEffect(() => {
    if (estadoEnvio === 'exito') {
      const timer = setTimeout(() => setEstadoEnvio('idle'), 4000)
      return () => clearTimeout(timer)
    }
  }, [estadoEnvio])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormulario((actual) => ({ ...actual, [name]: value }))

    if (name === 'telefono') {
      setErrorTelefono('')
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    // Honeypot: si este campo invisible viene lleno, es un bot, se descarta en silencio
    if (formulario.empresaWeb) {
      return
    }

    // Validación de formato de teléfono chileno, solo si la persona escribió algo
    if (formulario.telefono && !PATRON_TELEFONO.test(formulario.telefono)) {
      setErrorTelefono('Ingresa un número chileno válido, ej: +56 9 1234 5678')
      return
    }

    setEstadoEnvio('enviando')

    try {
      const { empresaWeb, ...datosParaEnviar } = formulario
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        datosParaEnviar,
        { publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY }
      )
      setEstadoEnvio('exito')
      setFormulario(estadoInicial)
    } catch (error) {
      console.error('Error al enviar el formulario:', error)
      setEstadoEnvio('error')
    }
  }

  if (estadoEnvio === 'exito') {
    return (
      <div className="formulario-contacto">
        <div className="formulario-exito">
          <div className="formulario-exito-icono">
            <CheckCircle2 size={40} color="#ffffff" strokeWidth={2.5} />
          </div>
          <p className="formulario-exito-titulo">Mensaje enviado</p>
          <p className="formulario-exito-texto">Te contactaremos pronto.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="formulario-contacto">
      <p className="formulario-eyebrow">Hablemos de tu proyecto</p>
      <h2 className="formulario-titulo">Contáctanos</h2>
      <p className="formulario-subtitulo">
        Cuéntanos qué necesitas y te respondemos a la brevedad.
      </p>

      <form className="formulario-grid" onSubmit={handleSubmit}>
        {/* Honeypot, oculto para personas, visible para bots que rellenan todo */}
        <input
          type="text"
          name="empresaWeb"
          value={formulario.empresaWeb}
          onChange={handleChange}
          className="formulario-honeypot"
          tabIndex="-1"
          autoComplete="off"
          aria-hidden="true"
        />

        <label className="formulario-campo">
          <span>Nombre</span>
          <input type="text" name="nombre" value={formulario.nombre} onChange={handleChange} required />
        </label>

        <label className="formulario-campo">
          <span>Correo</span>
          <input type="email" name="correo" value={formulario.correo} onChange={handleChange} required />
        </label>

        <label className="formulario-campo">
          <span>Teléfono</span>
          <input
            type="tel"
            name="telefono"
            value={formulario.telefono}
            onChange={handleChange}
            placeholder="+56 9 1234 5678"
          />
          {errorTelefono && <span className="formulario-error-campo">{errorTelefono}</span>}
        </label>

        <label className="formulario-campo">
          <span>Servicio de interés</span>
          <select name="servicio" value={formulario.servicio} onChange={handleChange} required>
            <option value="">Selecciona un servicio</option>
            {servicios.map((s) => (
              <option key={s.id} value={s.nombre}>{s.nombre}</option>
            ))}
            <option value="Otro">Otro</option>
          </select>
        </label>

        <label className="formulario-campo formulario-campo--full">
          <span>Mensaje</span>
          <textarea name="mensaje" rows="4" value={formulario.mensaje} onChange={handleChange} required />
        </label>

        <button type="submit" className="formulario-submit" disabled={estadoEnvio === 'enviando'}>
          <Send size={18} />
          {estadoEnvio === 'enviando' ? 'Enviando...' : 'Enviar mensaje'}
        </button>

        {estadoEnvio === 'error' && (
          <p className="formulario-mensaje formulario-mensaje--error">
            Hubo un problema al enviar, intenta de nuevo o escríbenos por WhatsApp.
          </p>
        )}
      </form>
    </div>
  )
}

export default FormularioContacto