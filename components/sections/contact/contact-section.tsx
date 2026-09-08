'use client'

import { FormEvent, useState } from 'react'
import { ArrowRight, Check, CircleCheck, MessageCircle, Send } from 'lucide-react'

const benefits = [
    {
        title: 'Primera conversación sin compromiso',
        description: 'Cuéntanos tu idea y evaluemos juntos la mejor forma de empezar.',
    },
    {
        title: 'Propuesta personalizada',
        description: 'Revisamos tu necesidad antes de plantear una solución.',
    },
    {
        title: 'Cotización según alcance',
        description: 'El presupuesto se define según lo que realmente necesita tu proyecto.',
    },
]

export function ContactSection() {
    const [status, setStatus] = useState<'idle' | 'sent'>('idle')

    function submit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault()
        setStatus('sent')
    }

    return (
        <section id="contact" className="contact section-pad">
            <div className="container contact-grid">
                <div className="contact-copy">
                    <p className="eyebrow light">Hablemos</p>

                    <h2>
                        Tu próxima solución puede empezar con <em>una conversación.</em>
                    </h2>

                    <p className="contact-description">
                        Cuéntanos qué quieres construir, mejorar o resolver. No necesitas tener todo definido; podemos ayudarte a encontrar la mejor forma de comenzar.
                    </p>

                    <div className="contact-benefits">
                        {benefits.map(benefit => (
                            <div className="contact-benefit" key={benefit.title}>
                                <span><Check /></span>

                                <div>
                                    <strong>{benefit.title}</strong>
                                    <small>{benefit.description}</small>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="contact-alternative">
                        <span>¿Prefieres conversar directamente?</span>

                        <a
                            href="https://wa.me/?text=Hola%2C%20quisiera%20consultar%20sobre%20un%20proyecto."
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
                    <form className="contact-form" onSubmit={submit}>
                        {status === 'sent' ? (
                            <div className="success">
                                <span className="success-icon"><CircleCheck /></span>

                                <h3>Gracias por contarnos tu idea</h3>

                                <p>
                                    Hemos recibido la información de tu proyecto. Revisaremos los detalles para continuar la conversación.
                                </p>

                                <button type="button" onClick={() => setStatus('idle')}>
                                    Enviar otra consulta
                                </button>
                            </div>
                        ) : (
                            <>
                                <div className="form-heading">
                                    <span>Empecemos</span>
                                    <h3>Cuéntanos sobre tu proyecto</h3>
                                    <p>Completa algunos datos para entender mejor lo que necesitas.</p>
                                </div>

                                <div className="form-row">
                                    <label>
                                        Nombre
                                        <input required name="name" autoComplete="name" placeholder="Tu nombre" />
                                    </label>

                                    <label>
                                        Empresa <span>(opcional)</span>
                                        <input name="company" autoComplete="organization" placeholder="Tu empresa" />
                                    </label>
                                </div>

                                <div className="form-row">
                                    <label>
                                        Email
                                        <input required type="email" name="email" autoComplete="email" placeholder="tu@email.com" />
                                    </label>

                                    <label>
                                        WhatsApp / Teléfono
                                        <input name="phone" autoComplete="tel" placeholder="+51 999 999 999" />
                                    </label>
                                </div>

                                <label>
                                    ¿Qué necesitas?
                                    <select name="type" defaultValue="">
                                        <option value="" disabled>Selecciona una opción</option>
                                        <option value="landing">Landing Page</option>
                                        <option value="web-system">Sistema Web</option>
                                        <option value="custom">Solución personalizada</option>
                                        <option value="ecommerce">Tienda online</option>
                                        <option value="other">Otro</option>
                                        <option value="unsure">No estoy seguro todavía</option>
                                    </select>
                                </label>

                                <label>
                                    Cuéntanos brevemente sobre tu proyecto
                                    <textarea
                                        required
                                        name="message"
                                        rows={4}
                                        placeholder="Ejemplo: necesito una web para presentar mis servicios y recibir solicitudes de clientes..."
                                    />
                                </label>

                                <label>
                                    ¿Cuándo te gustaría comenzar?
                                    <select name="when" defaultValue="">
                                        <option value="" disabled>Selecciona una opción</option>
                                        <option value="soon">Lo antes posible</option>
                                        <option value="weeks">En las próximas semanas</option>
                                        <option value="months">En los próximos meses</option>
                                        <option value="evaluating">Por ahora estoy evaluando</option>
                                    </select>
                                </label>

                                <button className="contact-submit" type="submit">
                                    Solicitar una propuesta
                                    <Send />
                                </button>

                                <p className="form-note">
                                    Revisaremos tu solicitud antes de ponernos en contacto contigo.
                                </p>
                            </>
                        )}
                    </form>
                </div>
            </div>
        </section>
    )
}