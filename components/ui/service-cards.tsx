'use client'

import { useState } from 'react'
import { ArrowRight, Check, Globe2, LayoutDashboard, Network } from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from '@/components/ui/dialog'

type ServiceKey = 'landing' | 'system' | 'custom'

type Service = {
    key: ServiceKey
    title: string
    description: string
    ideal: string
    features: string[]
    detail: string
    modalFeatures: string[]
    cta: string
}

const services: Service[] = [
    {
        key: 'landing',
        title: 'Landing Page',
        description: 'Una página diseñada para presentar tu negocio, producto o servicio de forma clara y convertir visitantes en potenciales clientes.',
        ideal: 'Emprendedores, profesionales, campañas y negocios que necesitan una presencia digital efectiva.',
        features: ['Diseño personalizado', 'Adaptable a móviles', 'Formularios', 'WhatsApp', 'SEO básico', 'Carga optimizada'],
        detail: 'Creamos una página enfocada en comunicar tu propuesta, generar confianza y facilitar que tus visitantes den el siguiente paso.',
        modalFeatures: [
            'Diseño personalizado',
            'Sección principal de alto impacto',
            'Presentación de servicios',
            'Formularios de contacto',
            'WhatsApp',
            'Google Maps',
            'Redes sociales',
            'Analítica de visitas',
            'SEO básico',
            'Optimización de carga',
            'Configuración de dominio',
            'Hosting',
            'Integraciones sencillas',
        ],
        cta: 'Cotizar Landing Page',
    },
    {
        key: 'system',
        title: 'Sistema Web',
        description: 'Una herramienta creada para organizar información, digitalizar procesos y facilitar la operación diaria de tu negocio.',
        ideal: 'Empresas y negocios que necesitan gestionar procesos, usuarios o información desde una sola plataforma.',
        features: ['Usuarios y accesos', 'Panel de gestión', 'Gestión de información', 'Reportes', 'Integraciones', 'Base de datos'],
        detail: 'Desarrollamos sistemas web adaptados a la forma en que trabaja tu negocio, centralizando información y simplificando tareas que hoy requieren más tiempo.',
        modalFeatures: [
            'Acceso seguro',
            'Usuarios y perfiles',
            'Roles y permisos',
            'Panel administrativo',
            'Gestión de información',
            'Clientes',
            'Productos',
            'Inventarios',
            'Reservas',
            'Paneles de indicadores',
            'Reportes',
            'Formularios internos',
            'Notificaciones',
            'Integraciones con otros sistemas',
            'Base de datos',
        ],
        cta: 'Cotizar mi sistema',
    },
    {
        key: 'custom',
        title: 'Solución a Medida',
        description: 'Para ideas, procesos y proyectos que necesitan funcionalidades específicas, automatizaciones o conexión entre diferentes herramientas.',
        ideal: 'Empresas con necesidades particulares que no encajan en una solución estándar.',
        features: ['Automatizaciones', 'Integraciones', 'Procesos personalizados', 'Herramientas internas', 'Plataformas a medida', 'Desarrollo por etapas'],
        detail: 'Diseñamos una solución alrededor de tus procesos y objetivos, incorporando únicamente las funcionalidades que realmente aportan valor.',
        modalFeatures: [
            'Automatización de tareas',
            'Conexión entre plataformas',
            'Integraciones externas',
            'Paneles personalizados',
            'Portales internos',
            'Tiendas online',
            'Modernización de sistemas',
            'Herramientas internas',
            'Flujos personalizados',
            'Desarrollo por etapas',
        ],
        cta: 'Consultar proyecto',
    },
]

function ServicePreview({ serviceKey }: { serviceKey: ServiceKey }) {
    if (serviceKey === 'landing') {
        return (
            <div className="service-preview browser-preview">
                <div className="preview-bar">
                    <i /><i /><i />
                    <span>mbconsulting.es</span>
                </div>

                <div className="mini-site">
                    <div className="mini-nav">
                        <b>MB</b>
                        <span /><span />
                    </div>

                    <div className="mini-hero">
                        <small>TU NEGOCIO ONLINE</small>
                        <strong>Una presencia clara.<br /><em>Un objetivo definido.</em></strong>
                        <span className="mini-button">Hablemos</span>
                    </div>

                    <div className="mini-blocks">
                        <i /><i /><i />
                    </div>
                </div>
            </div>
        )
    }

    if (serviceKey === 'system') {
        return (
            <div className="service-preview dashboard-preview">
                <div className="mini-side">
                    <b>MB</b>
                    <span /><span /><span /><span />
                </div>

                <div className="mini-dashboard">
                    <div className="mini-metrics">
                        <i /><i /><i />
                    </div>

                    <div className="mini-chart">
                        <span /><span /><span /><span /><span />
                    </div>

                    <div className="mini-rows">
                        <i /><i /><i />
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="service-preview network-preview">
            <div className="network-node main">Tu negocio</div>

            <div className="network-line one" />
            <div className="network-line two" />
            <div className="network-line three" />

            <div className="network-node system">Sistema</div>
            <div className="network-node service">Servicios</div>
            <div className="network-node automation">Automatización</div>
        </div>
    )
}

export function ServiceCards() {
    const [selected, setSelected] = useState<Service | null>(null)

    return (
        <>
            <div className="service-grid premium-services">
                {services.map((service, index) => (
                    <article
                        key={service.key}
                        className={`service-card premium-card ${service.key === 'system' ? 'featured-service' : ''}`}
                        style={{ animationDelay: `${index * 100}ms` }}
                    >
                        <ServicePreview serviceKey={service.key} />

                        <div className="service-card-body">
                            <div className="service-icon">
                                {service.key === 'landing' && <Globe2 />}
                                {service.key === 'system' && <LayoutDashboard />}
                                {service.key === 'custom' && <Network />}
                            </div>

                            <h3>{service.title}</h3>
                            <p className="service-description">{service.description}</p>

                            <p className="ideal">
                                <strong>Ideal para</strong>
                                {service.ideal}
                            </p>

                            <ul>
                                {service.features.map(feature => (
                                    <li key={feature}>
                                        <Check />
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <div className="service-footer">
                                <span>Cotización personalizada</span>

                                <div className="service-actions">
                                    <Button variant="outline" size="sm" onClick={() => setSelected(service)}>
                                        Ver detalles
                                        <ArrowRight />
                                    </Button>

                                    <a className="text-action" href="#contact">
                                        Solicitar cotización
                                        <ArrowRight />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </article>
                ))}
            </div>

            <Dialog open={Boolean(selected)} onOpenChange={open => !open && setSelected(null)}>
                <DialogContent className="service-dialog">
                    <DialogHeader>
                        <span className="eyebrow">Solución</span>
                        <DialogTitle>{selected?.title}</DialogTitle>
                        <DialogDescription>{selected?.detail}</DialogDescription>
                    </DialogHeader>

                    <div className="dialog-section">
                        <h4>¿Qué podemos incluir?</h4>

                        <div className="dialog-features">
                            {selected?.modalFeatures.map(item => (
                                <span key={item}>
                                    <Check />
                                    {item}
                                </span>
                            ))}
                        </div>
                    </div>

                    <p className="dialog-note">
                        El alcance y las funcionalidades se definen según las necesidades reales de cada proyecto.
                    </p>

                    <a className="button primary" href="#contact" onClick={() => setSelected(null)}>
                        {selected?.cta}
                        <ArrowRight />
                    </a>
                </DialogContent>
            </Dialog>
        </>
    )
}