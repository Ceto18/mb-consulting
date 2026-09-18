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
    tag: string
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
        tag: 'Presencia digital',
        description: 'Una página que presenta tu negocio de forma clara y convierte visitantes en clientes.',
        ideal: 'Emprendedores, profesionales y negocios que necesitan estar online de forma efectiva.',
        features: ['Diseño personalizado', 'Adaptable a móviles', 'Formularios', 'WhatsApp', 'SEO básico', 'Carga optimizada'],
        detail: 'Una página enfocada en comunicar tu propuesta, generar confianza y facilitar que tus visitantes den el siguiente paso.',
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
        tag: 'Gestión interna',
        description: 'Una herramienta para digitalizar procesos, organizar información y facilitar la operación diaria.',
        ideal: 'Empresas y negocios que gestionan procesos, usuarios o información desde una sola plataforma.',
        features: ['Usuarios y accesos', 'Panel de gestión', 'Gestión de información', 'Reportes', 'Integraciones', 'Base de datos'],
        detail: 'Sistemas web adaptados a la forma en que trabaja tu negocio, centralizando información y simplificando tareas.',
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
        tag: 'Hecho a tu medida',
        description: 'Para necesidades que no encajan en una solución estándar: automatizaciones, integraciones o funcionalidades específicas.',
        ideal: 'Empresas con necesidades particulares, automatizaciones o conexión entre diferentes herramientas.',
        features: ['Automatizaciones', 'Integraciones', 'Procesos personalizados', 'Herramientas internas', 'Plataformas a medida', 'Desarrollo por etapas'],
        detail: 'Diseñamos una solución alrededor de tus procesos y objetivos, incorporando únicamente las funcionalidades que aportan valor.',
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
                    <span>mbsolutions.es</span>
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
                            <div className="service-header">
                                <span className="service-tag">{service.tag}</span>
                                <div className="service-icon">
                                    {service.key === 'landing' && <Globe2 />}
                                    {service.key === 'system' && <LayoutDashboard />}
                                    {service.key === 'custom' && <Network />}
                                </div>
                            </div>

                            <h3>{service.title}</h3>
                            <p className="service-description">{service.description}</p>

                            <div className="service-ideal">
                                <strong>Ideal para</strong>
                                <span>{service.ideal}</span>
                            </div>

                            <ul className="service-features">
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
                        <span className="eyebrow">{selected?.tag}</span>
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

                    <div className="dialog-ideal">
                        <strong>Ideal para</strong>
                        <span>{selected?.ideal}</span>
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
