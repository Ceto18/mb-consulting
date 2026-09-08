import { Focus, MousePointer2, TrendingUp, type LucideIcon } from 'lucide-react'
import { ActionButton } from '@/components/shared/action-button'

type Principle = {
    title: string
    description: string
    icon: LucideIcon
}

const principles: Principle[] = [
    {
        title: 'Claridad antes que complejidad',
        description: 'Nos enfocamos en lo que realmente aporta valor, evitando funcionalidades innecesarias.',
        icon: Focus,
    },
    {
        title: 'Diseño pensado para las personas',
        description: 'Cada pantalla y cada interacción buscan que utilizar la solución sea simple y natural.',
        icon: MousePointer2,
    },
    {
        title: 'Preparados para evolucionar',
        description: 'Construimos soluciones que pueden adaptarse y crecer junto con las necesidades de tu negocio.',
        icon: TrendingUp,
    },
]

export function MethodSection() {
    return (
        <section id="method" className="dark-band section-pad principles-band">
            <div className="principles-grid">
                <div className="principles-copy">
                    <p className="eyebrow light">Nuestra forma de trabajar</p>
                    <h2>Primero entendemos el problema. <em>Después construimos la solución.</em></h2>

                    <p className="band-copy">
                        No empezamos eligiendo tecnologías. Primero entendemos tu negocio, tus objetivos y lo que necesitas mejorar para definir una solución que realmente tenga sentido.
                    </p>

                    <ActionButton>Cuéntanos tu proyecto</ActionButton>
                </div>

                <div className="principle-list">
                    {principles.map(({ title, description, icon: Icon }, index) => (
                        <article className="principle" key={title}>
                            <span className="principle-number">0{index + 1}</span>
                            <span className="principle-icon"><Icon /></span>

                            <div>
                                <h3>{title}</h3>
                                <p>{description}</p>
                                <i />
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}