import { useState } from 'react'
import { categoriasProyectos, proyectos } from '../data/proyectos'
import '../styles/galeria.css'

function Galeria() {
  const [categoriaActiva, setCategoriaActiva] = useState('Todos')

  const proyectosFiltrados = categoriaActiva === 'Todos'
    ? proyectos
    : proyectos.filter((p) => p.categoria === categoriaActiva)

  return (
    <div className="galeria">
      <p className="galeria-eyebrow">Nuestro trabajo</p>
      <h2 className="galeria-titulo">Proyectos realizados</h2>
      <p className="galeria-subtitulo">
        Una muestra de trabajos ejecutados en distintas categorías.
      </p>

      <div className="galeria-filtros">
        {categoriasProyectos.map((categoria) => (
          <button
            key={categoria}
            type="button"
            className={`galeria-filtro${categoria === categoriaActiva ? ' is-activo' : ''}`}
            onClick={() => setCategoriaActiva(categoria)}
          >
            {categoria}
          </button>
        ))}
      </div>

      <div className="galeria-grid">
        {proyectosFiltrados.map((proyecto) => (
          <div key={proyecto.id} className="galeria-item">
            <img src={proyecto.imagen} alt={proyecto.titulo} loading="lazy" />
            <div className="galeria-item-overlay">
              <p className="galeria-item-categoria">{proyecto.categoria}</p>
              <p className="galeria-item-titulo">{proyecto.titulo}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Galeria