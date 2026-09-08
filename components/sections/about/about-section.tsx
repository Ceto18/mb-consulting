import { CircleCheck, Compass, Layers3, MessageCircle } from 'lucide-react'

const principles = [
    {
        title: 'Cercanía',
        description: 'Comunicación directa durante cada etapa del proyecto.',
        icon: MessageCircle,
    },
    {
        title: 'Claridad',
        description: 'Alcance, objetivos y proceso definidos desde el inicio.',
        icon: Compass,
    },
    {
        title: 'Adaptabilidad',
        description: 'Soluciones preparadas para evolucionar junto con tu negocio.',
        icon: Layers3,
    },
]

export function AboutSection() {
    return (
        <section id="about" className="about section-pad">
            <div className="container about-grid">
                <div className="about-visual">
                    <div className="about-card-main">
                        <span className="about-badge">MB Consulting</span>

                        <h3>Ideas claras.<br /><span>Soluciones que funcionan.</span></h3>

                        <p>
                            Diseñamos soluciones digitales pensando primero en el negocio, las personas y el objetivo que queremos conseguir.
                        </p>

                        <div className="about-checks">
                            <span><CircleCheck /> Comunicación directa</span>
                            <span><CircleCheck /> Desarrollo a medida</span>
                            <span><CircleCheck /> Acompañamiento durante el proyecto</span>
                        </div>
                    </div>

                    <div className="about-floating about-floating-one">
                        <strong>01</strong>
                        <span>Entendemos</span>
                    </div>

                    <div className="about-floating about-floating-two">
                        <strong>02</strong>
                        <span>Diseñamos</span>
                    </div>

                    <div className="about-floating about-floating-three">
                        <strong>03</strong>
                        <span>Construimos</span>
                    </div>
                </div>

                <div className="about-content">
                    <p className="eyebrow">Sobre MB Consulting</p>

                    <h2>Tecnología cercana, <span>soluciones bien pensadas.</span></h2>

                    <p className="body-copy">
                        MB Consulting nace para ayudar a empresas, profesionales y emprendimientos a convertir ideas, necesidades y procesos en soluciones digitales funcionales.
                    </p>

                    <p className="body-copy about-highlight">
                        <strong>Primero entendemos qué necesitas. Después definimos la mejor forma de hacerlo realidad.</strong>
                    </p>

                    <div className="about-principles">
                        {principles.map(({ title, description, icon: Icon }) => (
                            <div key={title}>
                                <Icon />
                                <strong>{title}</strong>
                                <small>{description}</small>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}