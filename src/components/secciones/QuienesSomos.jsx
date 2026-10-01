import { ShieldCheck, Clock, Users } from 'lucide-react'
import aboutImg from '../../assets/trabajando.jpg'
import '../../styles/quienessomos.css'

const valores = [
  {
    icono: ShieldCheck,
    titulo: 'Trabajo normado',
    texto: 'Cumplimiento de normativa municipal en cada proyecto.',
  },
  {
    icono: Clock,
    titulo: 'Plazos claros',
    texto: 'Fechas de inicio y término definidas desde el presupuesto.',
  },
  {
    icono: Users,
    titulo: 'Equipo propio',
    texto: 'Maestros y profesionales con experiencia comprobable.',
  },
]

function QuienesSomos() {
  return (
    <div className="quienes-somos">
      <div className="quienes-somos-imagen">
        <img src={aboutImg} alt="Equipo de la constructora trabajando en obra" />
      </div>

      <div className="quienes-somos-contenido">
        <p className="quienes-somos-eyebrow">Quiénes somos</p>
        <h2 className="quienes-somos-titulo">
          Construimos con responsabilidad desde 2018
        </h2>
        <p className="quienes-somos-texto">
          Somos una constructora enfocada en viviendas, ampliaciones y
          remodelaciones, trabajando siempre con profesionales a cargo y
          cumplimiento de la normativa correspondiente a cada proyecto.
        </p>

        <ul className="quienes-somos-valores">
          {valores.map(({ icono: Icono, titulo, texto }) => (
            <li key={titulo}>
              <Icono size={22} color="var(--color-primary)" />
              <div>
                <strong>{titulo}</strong>
                <p>{texto}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default QuienesSomos