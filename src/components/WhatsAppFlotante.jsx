import { MessageCircle } from 'lucide-react'
import { contacto } from '../data/contacto'
import '../styles/whatsappFlotante.css'

function WhatsAppFlotante() {
  const mensaje = encodeURIComponent('Hola, quisiera hacer una consulta sobre sus servicios.')

  return (
    <a
      className="whatsapp-flotante"
      href={`https://wa.me/${contacto.whatsapp}?text=${mensaje}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      title="Contactar por WhatsApp"
    >
      <MessageCircle size={28} aria-hidden="true" />
    </a>
  )
}

export default WhatsAppFlotante
