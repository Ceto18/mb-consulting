import { ArrowRight, Check, ExternalLink } from 'lucide-react'

export const featuredProject = {
    name: 'DreamsPlanetXP',
    category: 'Sitio Web · Experiencias de viaje',
    description: 'Una experiencia web diseñada para presentar destinos y experiencias de viaje de forma visual, clara y atractiva, transmitiendo desde el primer momento la esencia de la marca.',
    challenge: 'Organizar una propuesta amplia de destinos y experiencias sin perder claridad, facilitando que cada visitante descubra el contenido y encuentre fácilmente cómo contactar.',
    solution: 'Creamos una experiencia digital moderna, visual y adaptable a cualquier dispositivo, con una navegación sencilla y pensada para conectar al visitante con cada experiencia.',
    url: 'https://dreamsplanetxp.es/',
    highlights: [
        'Diseño responsive',
        'Experiencia visual',
        'Navegación intuitiva',
        'Carga optimizada',
        'Adaptado a móviles',
        'Enfoque comercial',
    ],
}

export function FeaturedProject() {
    const project = featuredProject

    return (
        <div className="project-grid featured-project">
            <div className="browser-mockup project-visual">
                <div className="mockup-chrome">
                    <i /><i /><i />
                    <span>dreamsplanetxp.es</span>
                </div>

                <div className="project-live-preview">
                    <iframe
                        src={project.url}
                        title={`Vista previa de ${project.name}`}
                        loading="lazy"
                        tabIndex={-1}
                    />

                    <a
                        className="project-preview-link"
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Visitar ${project.name}`}
                    />
                </div>
            </div>

            <div className="project-copy">
                <p className="eyebrow">Proyecto destacado</p>
                <h2>{project.name}</h2>
                <p className="project-category">{project.category}</p>
                <p className="project-description">{project.description}</p>

                <div className="project-facts">
                    <div>
                        <strong>El reto</strong>
                        <p>{project.challenge}</p>
                    </div>

                    <div>
                        <strong>La solución</strong>
                        <p>{project.solution}</p>
                    </div>
                </div>

                <div className="project-benefits">
                    {project.highlights.map(item => (
                        <span key={item}>
                            <Check />
                            {item}
                        </span>
                    ))}
                </div>

                <div className="project-actions">
                    <a
                        className="project-action project-action-secondary"
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Visitar DreamsPlanetXP
                        <ExternalLink />
                    </a>

                    <a className="project-action project-action-primary" href="#contact">
                        Cuéntanos tu idea
                        <ArrowRight />
                    </a>
                </div>
            </div>
        </div>
    )
}