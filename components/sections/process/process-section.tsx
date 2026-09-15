import { Code2, FileText, LifeBuoy, MessageSquare, PenTool, Rocket, Search, type LucideIcon } from 'lucide-react'

type ProcessStep = {
    title: string
    description: string
    icon: LucideIcon
    deliverable: string
}

const process: ProcessStep[] = [
    {
        title: 'Cuéntanos tu idea',
        description: 'Nos explicas qué necesitas, qué quieres mejorar y cuál es el objetivo de tu proyecto.',
        icon: MessageSquare,
        deliverable: 'Una conversación inicial sin compromiso.',
    },
    {
        title: 'Analizamos',
        description: 'Revisamos necesidades, alcance, funcionalidades y la mejor forma de abordar el proyecto.',
        icon: Search,
        deliverable: 'Una evaluación clara de lo que tu proyecto necesita.',
    },
    {
        title: 'Propuesta',
        description: 'Definimos la solución, alcance, tiempos estimados y una cotización clara.',
        icon: FileText,
        deliverable: 'Una propuesta con alcance, tiempos y precio.',
    },
    {
        title: 'Diseño',
        description: 'Diseñamos una experiencia clara, atractiva y adaptada a las personas que utilizarán la solución.',
        icon: PenTool,
        deliverable: 'Una propuesta visual antes de programar.',
    },
    {
        title: 'Desarrollo',
        description: 'Construimos la solución, realizamos pruebas y ajustamos cada detalle antes de publicarla.',
        icon: Code2,
        deliverable: 'La solución funcionando y probada.',
    },
    {
        title: 'Lanzamiento',
        description: 'Ponemos el proyecto en funcionamiento y dejamos todo preparado para empezar a utilizarlo.',
        icon: Rocket,
        deliverable: 'Tu solución publicada y operativa.',
    },
]

export function ProcessSection() {
    return (
        <section id="process" className="section-pad process">
            <div className="container">
                <div className="section-intro">
                    <p className="eyebrow">Nuestro proceso</p>
                    <h2>De una idea a una <span>solución funcionando.</span></h2>
                    <p>Un proceso claro y ordenado para que sepas qué estamos haciendo, qué viene después y qué recibes en cada etapa.</p>
                </div>

                <div className="process-grid">
                    {process.map(({ title, description, icon: Icon, deliverable }, index) => (
                        <article className="process-step" key={title}>
                            <div className="process-step-top">
                                <span className="process-icon"><Icon /></span>
                                <span className="process-number">0{index + 1}</span>
                            </div>

                            <h3>{title}</h3>
                            <p>{description}</p>

                            <p className="process-deliverable">
                                <LifeBuoy size={13} />
                                {deliverable}
                            </p>

                            <div className="process-progress">
                                <span style={{ width: `${((index + 1) / process.length) * 100}%` }} />
                            </div>
                        </article>
                    ))}
                </div>

                <div className="process-evolution">
                    <span className="process-evolution-icon"><LifeBuoy /></span>
                    <div>
                        <strong>Después del lanzamiento</strong>
                        <p>Si tu proyecto necesita ajustes, mejoras o nuevas funcionalidades, podemos seguir trabajando juntos para que evolucione según tus necesidades.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
