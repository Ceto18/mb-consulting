'use client'

import { FormEvent, useState } from 'react'
import {
    ArrowRight,
    Check,
    CircleCheck,
    MessageCircle,
    Send,
} from 'lucide-react'

const benefits = [
    {
        title: 'Primera conversación sin compromiso',
        description:
            'Cuéntanos tu idea y evaluemos juntos la mejor forma de empezar.',
    },
    {
        title: 'Propuesta personalizada',
        description:
            'Revisamos tu necesidad antes de plantear una solución.',
    },
    {
        title: 'Cotización según alcance',
        description:
            'El presupuesto se define según lo que realmente necesita tu proyecto.',
    },
]

const projectTypes: Record<string, string> = {
    landing: 'Landing Page',
    'web-system': 'Sistema Web',
    custom: 'Solución personalizada',
    ecommerce: 'Tienda online',
    other: 'Otro',
    unsure: 'No estoy seguro todavía',
}

const startTimes: Record<string, string> = {
    soon: 'Lo antes posible',
    weeks: 'En las próximas semanas',
    months: 'En los próximos meses',
    evaluating: 'Por ahora estoy evaluando',
}

export function ContactSection() {
    const [status, setStatus] = useState<'idle' | 'sent'>('idle')

    const whatsappNumber = '51921011040'

    function submit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault()

        const form = new FormData(e.currentTarget)

        const name = form.get('name')?.toString() || ''
        const company = form.get('company')?.toString() || ''
        const email = form.get('email')?.toString() || ''
        const phone = form.get('phone')?.toString() || ''
        const type = form.get('type')?.toString() || ''
        const message = form.get('message')?.toString() || ''
        const when = form.get('when')?.toString() || ''

        const projectType =
            projectTypes[type] || 'No especificado'

        const startTime =
            startTimes[when] || 'No especificado'

        const whatsappMessage = `
Hola, quisiera solicitar una propuesta para mi proyecto.

*Nombre:* ${name}
*Empresa:* ${company || 'No indicada'}
*Email:* ${email}
*WhatsApp / Teléfono:* ${phone || 'No indicado'}
*Tipo de proyecto:* ${projectType}
*Fecha estimada de inicio:* ${startTime}

*Descripción del proyecto:*
${message}
        `.trim()

        const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
            whatsappMessage
        )}`

        window.open(
            whatsappUrl,
            '_blank',
            'noopener,noreferrer'
        )

        setStatus('sent')
    }

    const directWhatsappMessage =
        'Hola, vi la página de MB Consulting y quisiera consultar sobre un proyecto.'

    const directWhatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
        directWhatsappMessage
    )}`

    return (
        <section
            id="contact"
            className="contact section-pad"
        >
            <div className="container contact-grid">
                <div className="contact-copy">
                    <p className="eyebrow light">
                        Hablemos
                    </p>

                    <h2>
                        Tu próxima solución puede empezar con{' '}
                        <em>una conversación.</em>
                    </h2>

                    <p className="contact-description">
                        Cuéntanos qué quieres construir,
                        mejorar o resolver. No necesitas
                        tener todo definido; podemos ayudarte
                        a encontrar la mejor forma de
                        comenzar.
                    </p>

                    <div className="contact-benefits">
                        {benefits.map((benefit) => (
                            <div
                                className="contact-benefit"
                                key={benefit.title}
                            >
                                <span>
                                    <Check />
                                </span>

                                <div>
                                    <strong>
                                        {benefit.title}
                                    </strong>

                                    <small>
                                        {benefit.description}
                                    </small>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="contact-alternative">
                        <span>
                            ¿Prefieres conversar directamente?
                        </span>

                        <a
                            href={directWhatsappUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <MessageCircle />

                            Escríbenos por WhatsApp

                            <ArrowRight />
                        </a>
                    </div>
                </div>

                <div className="contact-form-wrapper">
                    <form
                        className="contact-form"
                        onSubmit={submit}
                    >
                        {status === 'sent' ? (
                            <div className="success">
                                <span className="success-icon">
                                    <CircleCheck />
                                </span>

                                <h3>
                                    Gracias por contarnos tu
                                    idea
                                </h3>

                                <p>
                                    Hemos preparado tu consulta
                                    y abierto WhatsApp para que
                                    puedas enviarnos los datos
                                    de tu proyecto.
                                </p>

                                <button
                                    type="button"
                                    onClick={() =>
                                        setStatus('idle')
                                    }
                                >
                                    Enviar otra consulta
                                </button>
                            </div>
                        ) : (
                            <>
                                <div className="form-heading">
                                    <span>
                                        Empecemos
                                    </span>

                                    <h3>
                                        Cuéntanos sobre tu
                                        proyecto
                                    </h3>

                                    <p>
                                        Completa algunos datos
                                        para entender mejor lo
                                        que necesitas.
                                    </p>
                                </div>

                                <div className="form-row">
                                    <label>
                                        Nombre

                                        <input
                                            required
                                            name="name"
                                            autoComplete="name"
                                            placeholder="Tu nombre"
                                        />
                                    </label>

                                    <label>
                                        Empresa{' '}
                                        <span>
                                            (opcional)
                                        </span>

                                        <input
                                            name="company"
                                            autoComplete="organization"
                                            placeholder="Tu empresa"
                                        />
                                    </label>
                                </div>

                                <div className="form-row">
                                    <label>
                                        Email

                                        <input
                                            required
                                            type="email"
                                            name="email"
                                            autoComplete="email"
                                            placeholder="tu@email.com"
                                        />
                                    </label>

                                    <label>
                                        WhatsApp / Teléfono

                                        <input
                                            name="phone"
                                            autoComplete="tel"
                                            placeholder="+51 999 999 999"
                                        />
                                    </label>
                                </div>

                                <label>
                                    ¿Qué necesitas?

                                    <select
                                        name="type"
                                        defaultValue=""
                                        required
                                    >
                                        <option
                                            value=""
                                            disabled
                                        >
                                            Selecciona una
                                            opción
                                        </option>

                                        <option value="landing">
                                            Landing Page
                                        </option>

                                        <option value="web-system">
                                            Sistema Web
                                        </option>

                                        <option value="custom">
                                            Solución
                                            personalizada
                                        </option>

                                        <option value="ecommerce">
                                            Tienda online
                                        </option>

                                        <option value="other">
                                            Otro
                                        </option>

                                        <option value="unsure">
                                            No estoy seguro
                                            todavía
                                        </option>
                                    </select>
                                </label>

                                <label>
                                    Cuéntanos brevemente sobre
                                    tu proyecto

                                    <textarea
                                        required
                                        name="message"
                                        rows={4}
                                        placeholder="Ejemplo: necesito una web para presentar mis servicios y recibir solicitudes de clientes..."
                                    />
                                </label>

                                <label>
                                    ¿Cuándo te gustaría
                                    comenzar?

                                    <select
                                        name="when"
                                        defaultValue=""
                                        required
                                    >
                                        <option
                                            value=""
                                            disabled
                                        >
                                            Selecciona una
                                            opción
                                        </option>

                                        <option value="soon">
                                            Lo antes posible
                                        </option>

                                        <option value="weeks">
                                            En las próximas
                                            semanas
                                        </option>

                                        <option value="months">
                                            En los próximos
                                            meses
                                        </option>

                                        <option value="evaluating">
                                            Por ahora estoy
                                            evaluando
                                        </option>
                                    </select>
                                </label>

                                <button
                                    className="contact-submit"
                                    type="submit"
                                >
                                    Solicitar una propuesta

                                    <Send />
                                </button>

                                <p className="form-note">
                                    Al enviar el formulario se
                                    abrirá WhatsApp con los
                                    datos de tu solicitud.
                                </p>
                            </>
                        )}
                    </form>
                </div>
            </div>
        </section>
    )
}
