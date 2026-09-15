import {
    ArrowRight,
    CircleCheck,
    CreditCard,
    Globe2,
    Layers3,
    ShoppingCart,
    Sparkles,
    Workflow,
} from 'lucide-react'

import { ActionButton } from '@/components/shared/action-button'

export function HeroSection() {
    return (
        <section id="home" className="hero section-pad">
            <div className="container hero-grid">

                {/* CONTENT */}
                <div className="hero-content">
                    <p className="eyebrow">
                        <span className="eyebrow-dot" />
                        Desarrollo web y soluciones digitales
                    </p>

                    <h1>
                        Convertimos tus necesidades
                        <em> en soluciones digitales.</em>
                    </h1>

                    <p className="hero-lead">
                        Diseñamos y desarrollamos soluciones para empresas,
                        profesionales y emprendimientos que necesitan convertir
                        ideas, procesos y problemas reales en herramientas que
                        funcionan.
                    </p>

                    <div className="hero-actions">
                        <ActionButton>
                            Cuéntanos tu proyecto
                        </ActionButton>
                        <a className="button secondary" href="#solutions">
                            Ver servicios
                            <ArrowRight />
                        </a>
                    </div>

                    <div className="hero-note">
                        <CircleCheck />
                        Primero entendemos el problema. Después construimos la solución.
                    </div>
                </div>

                {/* VISUAL */}
                <div className="hero-visual">

                    <div className="hero-glow hero-glow-one" />

                    <div className="solution-window">

                        {/* Browser header */}
                        <div className="solution-window-top">
                            <div className="window-dots">
                                <span />
                                <span />
                                <span />
                            </div>

                            <div className="window-address">
                                mibusiness.digital
                            </div>

                            <Sparkles size={16} />
                        </div>

                        <div className="solution-body">

                            <div className="solution-heading">
                                <div>
                                    <span className="solution-kicker">
                                        TU ECOSISTEMA DIGITAL
                                    </span>

                                    <h3>
                                        Todo conectado.
                                        <br />
                                        Todo bajo control.
                                    </h3>
                                </div>

                                <div className="status-live">
                                    <span />
                                    Online
                                </div>
                            </div>

                            {/* Main flow */}
                            <div className="solution-map">

                                <div className="map-grid" />

                                <div className="solution-center">
                                    <div className="center-icon">
                                        MB
                                    </div>

                                    <strong>
                                        Tu negocio
                                    </strong>

                                    <span>
                                        Solución central
                                    </span>
                                </div>

                                <div className="solution-module module-web">
                                    <div className="module-icon">
                                        <Globe2 />
                                    </div>

                                    <div>
                                        <strong>Web</strong>
                                        <span>Presencia digital</span>
                                    </div>

                                    <CircleCheck />
                                </div>

                                <div className="solution-module module-payments">
                                    <div className="module-icon">
                                        <CreditCard />
                                    </div>

                                    <div>
                                        <strong>Pagos</strong>
                                        <span>Integraciones</span>
                                    </div>

                                    <CircleCheck />
                                </div>

                                <div className="solution-module module-process">
                                    <div className="module-icon">
                                        <Workflow />
                                    </div>

                                    <div>
                                        <strong>Procesos</strong>
                                        <span>Automatización</span>
                                    </div>

                                    <CircleCheck />
                                </div>

                                <div className="solution-module module-commerce">
                                    <div className="module-icon">
                                        <ShoppingCart />
                                    </div>

                                    <div>
                                        <strong>Ecommerce</strong>
                                        <span>Ventas online</span>
                                    </div>

                                    <CircleCheck />
                                </div>

                            </div>

                            {/* Bottom status */}
                            <div className="solution-footer">

                                <div className="solution-stat">
                                    <div className="stat-icon">
                                        <Layers3 />
                                    </div>

                                    <div>
                                        <small>Infraestructura</small>
                                        <strong>Escalable</strong>
                                    </div>
                                </div>

                                <div className="solution-stat">
                                    <div className="stat-bars">
                                        <span />
                                        <span />
                                        <span />
                                        <span />
                                    </div>

                                    <div>
                                        <small>Procesos</small>
                                        <strong>Optimizados</strong>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>

                    <div className="floating-card floating-card-one">
                        <span className="floating-check">
                            <CircleCheck />
                        </span>

                        <div>
                            <small>Integración</small>
                            <strong>Completada</strong>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    )
}
