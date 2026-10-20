import { MessageCircle, ArrowDown } from 'lucide-react'
import { motion, useReducedMotion } from 'motion/react'
import heroBg from '../../assets/hero-bg.jpeg'
import '../../styles/hero.css'

function Hero() {
  const shouldReduceMotion = useReducedMotion()
  const contentVariants = {
    hidden: {
      opacity: shouldReduceMotion ? 1 : 0,
      y: shouldReduceMotion ? 0 : 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.6,
        ease: [0.22, 1, 0.36, 1],
        staggerChildren: shouldReduceMotion ? 0 : 0.12,
      },
    },
  }
  const itemVariants = {
    hidden: {
      opacity: shouldReduceMotion ? 1 : 0,
      y: shouldReduceMotion ? 0 : 16,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: shouldReduceMotion ? 0 : 0.5 },
    },
  }

  return (
    <section
      className="hero"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <div className="hero-overlay"></div>

      <motion.div
        className="hero-content"
        variants={contentVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.p className="hero-eyebrow" variants={itemVariants}>
          Calidad, puntualidad y cumplimiento
        </motion.p>
        <motion.h1 className="hero-title" variants={itemVariants}>
          Construcción y remodelación
          <span>con resultados que se notan</span>
        </motion.h1>
        <motion.p className="hero-subtitle" variants={itemVariants}>
          Trabajamos con responsabilidad y plazos claros, desde la primera
          visita hasta la entrega final de tu proyecto.
        </motion.p>

        <motion.div className="hero-actions" variants={itemVariants}>
          <a
            href="https://wa.me/56935793997"
            target="_blank"
            rel="noopener noreferrer"
            className="hero-btn hero-btn--primary"
          >
            <MessageCircle size={18} />
            Cotizar por WhatsApp
          </a>

          <a href="#servicios" className="hero-btn hero-btn--secondary">
            Ver servicios
          </a>
        </motion.div>
      </motion.div>

      <a href="#quienes-somos" className="hero-scroll" aria-label="Bajar a la siguiente sección">
        <ArrowDown size={22} />
      </a>
    </section>
  )
}

export default Hero