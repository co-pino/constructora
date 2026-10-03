import { ShieldCheck } from 'lucide-react'
import flowLogo from '../../assets/flow-logo.png'
import visaLogo from '../../assets/visa-logo.webp'
import mastercardLogo from '../../assets/mastercard-logo.png'
import '../../styles/mediospago.css'

function MediosPago() {
  return (
    <div className="medios-pago">
      <div className="medios-pago-texto">
        <ShieldCheck size={22} color="var(--color-primary)" aria-hidden="true" />
        <p>Aceptamos pagos seguros con tarjeta a través de Flow</p>
      </div>

      <div className="medios-pago-logos">
        <img src={flowLogo} alt="Flow" className="medios-pago-logo" />
        <img src={visaLogo} alt="Visa" className="medios-pago-logo" />
        <img src={mastercardLogo} alt="Mastercard" className="medios-pago-logo" />
      </div>
    </div>
  )
}

export default MediosPago