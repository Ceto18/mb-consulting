import { CircleCheck, Compass, Layers3, MessageCircle } from 'lucide-react'

const values = [
    {
        title: 'Cercanía',
        description: 'Comunicación directa durante todo el proyecto. No tienes que hablar con un intermediario.',
        icon: MessageCircle,
    },
    {
        title: 'Claridad',
        description: 'Alcance, objetivos y proceso definidos desde el inicio, sin sorpresas ni costes ocultos.',
        icon: Compass,
    },
    {
        title: 'Adaptabilidad',
        description: 'Soluciones preparadas para evolucionar. La tecnología se adapta a tu negocio, no al contrario.',
        icon: Layers3,
    },
]

export function AboutSection() {
    return (
        <section id="about" className="about section-pad">
            <div className="container about-grid">
                <div className="about-visual">
                    <div className="about-card-main">
                        <span className="about-badge">MB Solutions</span>

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
                </div>

                <div className="about-content">
                    <p className="eyebrow">Sobre MB Solutions</p>

                    <h2>Tecnología cercana, <span>soluciones bien pensadas.</span></h2>

                    <p className="body-copy">
                        MB Solutions nace para ayudar a empresas, profesionales y emprendimientos a convertir ideas, necesidades y procesos en soluciones digitales funcionales.
                    </p>

                    <p className="body-copy about-highlight">
                        <strong>Primero entendemos qué necesitas. Después definimos la mejor forma de hacerlo realidad.</strong>
                    </p>

                    <p className="body-copy">
                        No vendemos paquetes genéricos ni soluciones innecesariamente complejas. Cada proyecto parte de una conversación, de entender el problema y definir la solución que realmente tiene sentido.
                    </p>

                    <div className="about-principles">
                        {values.map(({ title, description, icon: Icon }) => (
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
