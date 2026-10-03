import viviendasImg from '../assets/viviendas-integraleswebp.webp'
import ampliacionesImg from '../assets/ampliaciones.jpg'
import remodelacionesImg from '../assets/remodelaciones-integrales.png'
import pavimentoImg from '../assets/pavimento-estampado.jpeg'
import pinturaImg from '../assets/pintura-exterior-etc.webp'
import terrazaImg from '../assets/terraza.avif'
import modularesImg from '../assets/casas-modulares.jpg'
import trabajandoImg from '../assets/trabajando.jpg'

export const categoriasProyectos = [
  'Todos',
  'Viviendas',
  'Ampliaciones',
  'Remodelaciones',
  'Exteriores',
]

export const proyectos = [
  {
    id: 1,
    titulo: 'Vivienda de dos pisos',
    categoria: 'Viviendas',
    imagen: viviendasImg,
  },
  {
    id: 2,
    titulo: 'Ampliación con albañilería',
    categoria: 'Ampliaciones',
    imagen: ampliacionesImg,
  },
  {
    id: 3,
    titulo: 'Remodelación de cocina',
    categoria: 'Remodelaciones',
    imagen: remodelacionesImg,
  },
  {
    id: 4,
    titulo: 'Pavimento estampado',
    categoria: 'Exteriores',
    imagen: pavimentoImg,
  },
  {
    id: 5,
    titulo: 'Pintura exterior',
    categoria: 'Remodelaciones',
    imagen: pinturaImg,
  },
  {
    id: 6,
    titulo: 'Terraza y quincho',
    categoria: 'Exteriores',
    imagen: terrazaImg,
  },
  {
    id: 7,
    titulo: 'Construcción modular',
    categoria: 'Viviendas',
    imagen: modularesImg,
  },
  {
    id: 8,
    titulo: 'Equipo en obra',
    categoria: 'Ampliaciones',
    imagen: trabajandoImg,
  },
]