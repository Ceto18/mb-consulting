'use client'

import { useState } from 'react'
import { ArrowRight, Blocks, Code2, Database, Mail, MessageCircle, Plug, Server } from 'lucide-react'

const technology = {
    Frontend: [['Vue', 'Frontend', Code2], ['React', 'Frontend', Code2], ['Next.js', 'Frontend', Code2], ['JavaScript', 'Frontend', Code2], ['TypeScript', 'Frontend', Code2], ['Tailwind CSS', 'Frontend', Code2]],
    Backend: [['Laravel', 'Backend', Server], ['PHP', 'Backend', Server], ['Node.js', 'Backend', Server]],
    CMS: [['WordPress', 'CMS', Blocks]],
    Datos: [['MySQL', 'Base de datos', Database], ['PostgreSQL', 'Base de datos', Database]],
    Integraciones: [['REST APIs', 'Integración', Plug], ['WhatsApp', 'Integración', MessageCircle], ['Email', 'Integración', Mail], ['Pasarelas de pago', 'Integración', Plug], ['Servicios externos', 'Integración', Plug]]
} as const

type Category = keyof typeof technology

export function TechnologySection() {
    const [category, setCategory] = useState<Category>('Frontend')

    return <section id="technology" className="section-pad technology">
        <div className="container">
            <div className="section-intro">
                <p className="eyebrow">Tecnología</p>
                <h2>Elegimos las herramientas según <span>lo que necesita tu proyecto.</span></h2>
                <p>No utilizamos una tecnología porque esté de moda. Elegimos la que mejor resuelva el problema.</p>
            </div>
            <div className="tech-explorer">
                <div className="tech-tabs" role="tablist">
                    {(Object.keys(technology) as Category[]).map(item => (
                        <button
                            role="tab"
                            aria-selected={category === item}
                            className={category === item ? 'active' : ''}
                            key={item}
                            onClick={() => setCategory(item)}
                        >
                            {item}
                        </button>
                    ))}
                </div>
                <div className="tech-items">
                    {technology[category].map(([name, label, Icon], i) => (
                        <div className="tech-item" key={name} style={{ animationDelay: `${i * 60}ms` }}>
                            <span className="tech-icon"><Icon /></span>
                            <span>
                                <strong>{name}</strong>
                                <small>{label}</small>
                            </span>
                            <ArrowRight />
                        </div>
                    ))}
                </div>
            </div>
            <div className="tech-callout">
                <span><Blocks /> WordPress cuando conviene.</span>
                <span><Code2 /> Código personalizado cuando hace falta.</span>
                <small>La tecnología se define después de entender el proyecto.</small>
            </div>
        </div>
    </section>
}