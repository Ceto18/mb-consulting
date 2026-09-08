import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

const navigation = [
    ['solutions', 'Soluciones'],
    ['method', 'Método'],
    ['process', 'Proceso'],
    ['about', 'Nosotros'],
    ['faq', 'Preguntas frecuentes'],
] as const

export function Footer() {
    return (
        <footer className="site-footer">
            <div className="container">
                <div className="footer-main">
                    <div className="footer-brand">
                        <a href="#home" aria-label="Ir al inicio">
                            <Image
                                src="/images/logos/mb-solutions-logo-100.png"
                                alt="MB Solutions"
                                width={2500}
                                height={55}
                                className="footer-logo"
                            />
                        </a>

                        <p>
                            Desarrollo web y soluciones digitales pensadas para las necesidades reales de cada negocio.
                        </p>
                    </div>

                    <div className="footer-navigation">
                        <span className="footer-title">Explorar</span>

                        <nav aria-label="Navegación del pie de página">
                            {navigation.map(([id, label]) => (
                                <a key={id} href={`#${id}`}>
                                    {label}
                                </a>
                            ))}
                        </nav>
                    </div>

                    <div className="footer-contact">
                        <span className="footer-title">¿Tienes un proyecto?</span>

                        <h3>Conversemos sobre tu idea.</h3>

                        <p>
                            Cuéntanos qué necesitas y evaluemos juntos la mejor forma de hacerlo realidad.
                        </p>

                        <a className="footer-cta" href="#contact">
                            Hablemos
                            <ArrowRight />
                        </a>
                    </div>
                </div>

                <div className="footer-bottom">
                    <span>© 2026 MB Consulting. Todos los derechos reservados.</span>

                    <a href="#home">
                        Volver al inicio ↑
                    </a>
                </div>
            </div>
        </footer>
    )
}