import { Code2, FileText, MessageSquare, PenTool, Rocket, Search, type LucideIcon } from 'lucide-react'

type ProcessStep = {
    title: string
    description: string
    icon: LucideIcon
}

const process: ProcessStep[] = [
    {
        title: 'Cuéntanos tu idea',
        description: 'Nos explicas qué necesitas, qué quieres mejorar y cuál es el objetivo de tu proyecto.',
        icon: MessageSquare,
    },
    {
        title: 'Analizamos',
        description: 'Revisamos necesidades, alcance, funcionalidades y la mejor forma de abordar el proyecto.',
        icon: Search,
    },
    {
        title: 'Propuesta',
        description: 'Definimos la solución, alcance, tiempos estimados y una cotización clara.',
        icon: FileText,
    },
    {
        title: 'Diseño',
        description: 'Diseñamos una experiencia clara, atractiva y adaptada a las personas que utilizarán la solución.',
        icon: PenTool,
    },
    {
        title: 'Desarrollo',
        description: 'Construimos la solución, realizamos pruebas y ajustamos cada detalle antes de publicarla.',
        icon: Code2,
    },
    {
        title: 'Lanzamiento',
        description: 'Ponemos el proyecto en funcionamiento y dejamos todo preparado para empezar a utilizarlo.',
        icon: Rocket,
    },
]

export function ProcessSection() {
    return (
        <section id="process" className="section-pad process">
            <div className="container">
                <div className="section-intro">
                    <p className="eyebrow">Nuestro proceso</p>
                    <h2>De una idea a una <span>solución funcionando.</span></h2>
                    <p>Un proceso claro y ordenado para que sepas qué estamos haciendo y qué viene después.</p>
                </div>

                <div className="process-grid">
                    {process.map(({ title, description, icon: Icon }, index) => (
                        <article className="process-step" key={title}>
                            <div className="process-step-top">
                                <span className="process-icon"><Icon /></span>
                                <span className="process-number">0{index + 1}</span>
                            </div>

                            <h3>{title}</h3>
                            <p>{description}</p>

                            <div className="process-progress">
                                <span style={{ width: `${((index + 1) / process.length) * 100}%` }} />
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}