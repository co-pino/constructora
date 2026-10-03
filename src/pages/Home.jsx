import { useState } from 'react'
import Hero from '../components/secciones/Hero'
import QuienesSomos from "../components/secciones/QuienesSomos"
import Servicios from '../components/secciones/Servicios'
import Galeria from '../components/Galeria'
import Cotizador from '../components/secciones/Cotizador'
import FormularioContacto from '../components/secciones/FormularioContacto'
import MediosPago from '../components/secciones/MediosPago'
import '../styles/home.css'
import Footer from '../components/secciones/Footer'

function Home() {
    const [selectedServiceId, setSelectedServiceId] = useState('')

    return (
        <>
            <main className="home">
                <section id="hero" className="home-section home-section--hero">
                    <Hero />
                </section>

                <section id="quienes-somos" className="home-section">
                    <QuienesSomos />
                </section>

                <section id="servicios" className="home-section home-section--light">
                    <Servicios onQuote={setSelectedServiceId} />
                </section>

                <section id="proyectos" className="home-section">
                    <Galeria />
                </section>

                <section id="cotizador" className="home-section home-section--light">
                    <Cotizador
                        key={selectedServiceId || 'ningun-servicio'}
                        selectedServiceId={selectedServiceId}
                        onServiceChange={setSelectedServiceId}
                    />
                </section>

                <section id="contacto" className="home-section">
                    <FormularioContacto />
                </section>

                <section className="home-section home-section--pagos">
                    <MediosPago />
                </section>

            </main>
            <Footer />
        </>
    )
}

export default Home