import {
  Home, Hammer, Layers, Square,
  Wrench, PaintRoller, Warehouse, Boxes,
} from 'lucide-react'

import viviendasImg from '../assets/viviendas-integraleswebp.webp'
import ampliacionesImg from '../assets/ampliaciones.jpg'
import remodelacionesImg from '../assets/remodelaciones-integrales.png'
import pavimentoImg from '../assets/pavimento-estampado.jpeg'
import mantencionImg from '../assets/construcciones-menores-mantencion.webp'
import pinturaImg from '../assets/pintura-exterior-etc.webp'
import terrazaImg from '../assets/terraza.avif'
import modularesImg from '../assets/casas-modulares.jpg'

export const servicios = [
  {
    nombre: 'Construcción de viviendas integrales',
    descripcion: 'Viviendas completas y casas de dos pisos llave en mano, con cumplimiento normativo y trabajo junto a arquitectos.',
    icono: Home,
    imagen: viviendasImg,
    precioMin: 480000,
    precioMax: 480000,
    minimoM2: 40,
  },
  {
    nombre: 'Ampliaciones y albañilería estructural',
    descripcion: 'Ampliaciones, estructuras soportantes, levantamiento de muros, nivelación y radieres.',
    icono: Hammer,
    imagen: ampliacionesImg,
    precioMin: 125000,
    precioMax: 145000,
    minimoM2: 15,
  },
  {
    nombre: 'Remodelaciones integrales',
    descripcion: 'Renovación total de ambientes, cerámica y porcelanato, pintura general, radieres y diseño de quincho.',
    icono: Layers,
    imagen: remodelacionesImg,
    precioMin: 42000,
    precioMax: 68000,
    minimoM2: 10,
  },
  {
    nombre: 'Pavimento estampado',
    descripcion: 'Pavimento estampado de alta resistencia, preparación de terreno, estabilizado y acabados texturizados.',
    icono: Square,
    imagen: pavimentoImg,
    minimoM2: 20,
    modalidades: [
      { nombre: 'Preparación + Estampado', precioMin: 31500, precioMax: 34000 },
      { nombre: 'Solo Estampado', precioMin: 24000, precioMax: 27500 },
    ],
  },
  {
    nombre: 'Construcciones menores y mantención',
    descripcion: 'Mantención preventiva y correctiva, reparaciones diversas y obras menores.',
    icono: Wrench,
    imagen: mantencionImg,
    precioMin: 10500,
    precioMax: 13000,
    minimoM2: 10,
  },
  {
    nombre: 'Pintura interior, exterior y restauración',
    descripcion: 'Pintado profesional a dos manos, con servicio opcional de restauración de muros dañados.',
    icono: PaintRoller,
    imagen: pinturaImg,
    minimoM2: 30,
    modalidades: [
      { nombre: 'Pintado 2 manos', precioMin: 7500, precioMax: 8500 },
      { nombre: 'Restauración + Pintura', precioMin: 14500, precioMax: 17500 },
    ],
  },
  {
    nombre: 'Terrazas, logias y quinchos desde cero',
    descripcion: 'Diseño y construcción completa de espacios de recreación, desde la fundación hasta terminaciones.',
    icono: Warehouse,
    imagen: terrazaImg,
    precioMin: 185000,
    precioMax: 205000,
    minimoM2: 12,
  },
  {
    nombre: 'Construcciones modulares',
    descripcion: 'Montaje de estructuras modulares rápidas, mano de obra especializada, sin materiales incluidos.',
    icono: Boxes,
    imagen: modularesImg,
    precioMin: 155000,
    precioMax: 175000,
    minimoM2: 25,
  },
]

export const extras = [
  { id: 'urgencia', nombre: 'Urgencia (inicio en menos de 15 días)', tipo: 'porcentaje', valor: 0.15 },
  { id: 'fueraRM', nombre: 'Fuera de la Región Metropolitana', tipo: 'fijo', valor: 80000 },
  { id: 'premium', nombre: 'Materiales premium (no estándar)', tipo: 'porcentaje', valor: 0.20 },
]