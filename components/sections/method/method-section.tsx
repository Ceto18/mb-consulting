import { Compass, Hammer, Lightbulb, TrendingUp, type LucideIcon } from 'lucide-react'
import { ActionButton } from '@/components/shared/action-button'

type Phase = {
    title: string
    description: string
    icon: LucideIcon
}

const phases: Phase[] = [
    {
        title: 'Entender',
        description: 'Antes de hablar de tecnología, escuchamos. Entendemos tu negocio, tus objetivos y el problema que necesitas resolver.',
        icon: Lightbulb,
    },
    {
        title: 'Definir',
        description: 'Identificamos qué solución tiene sentido. No incluimos lo que no aporta valor ni complicamos lo que puede ser simple.',
        icon: Compass,
    },
    {
        title: 'Construir',
        description: 'Desarrollamos la solución con un proceso claro, donde sabes en todo momento en qué estamos trabajando.',
        icon: Hammer,
    },
    {
        title: 'Evolucionar',
        description: 'Una solución no termina al lanzarse. Se ajusta, mejora y crece junto con las necesidades de tu negocio.',
        icon: TrendingUp,
    },
]

export function MethodSection() {
    return (
        <section id="method" className="dark-band section-pad principles-band">
            <div className="principles-grid">
                <div className="principles-copy">
                    <p className="eyebrow light">Nuestro método</p>
                    <h2>Primero entendemos el problema. <em>Después construimos la solución.</em></h2>

                    <p className="band-copy">
                        No empezamos eligiendo tecnologías ni vendiendo paquetes. Primero entendemos tu negocio y lo que necesitas mejorar para definir una solución que realmente tenga sentido.
                    </p>

                    <ActionButton>Cuéntanos tu proyecto</ActionButton>
                </div>

                <div className="principle-list">
                    {phases.map(({ title, description, icon: Icon }, index) => (
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
