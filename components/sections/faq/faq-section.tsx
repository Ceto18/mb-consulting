'use client'

import { useState } from 'react'
import { ArrowRight, MessageCircle, Minus, Plus } from 'lucide-react'

type Faq = {
    question: string
    answer: string
}

const faqs: Faq[] = [
    {
        question: '¿Trabajan solamente con WordPress?',
        answer: 'No. Elegimos la tecnología según las necesidades del proyecto. Podemos utilizar WordPress cuando es suficiente o desarrollar una solución personalizada cuando se necesitan funcionalidades específicas.',
    },
    {
        question: '¿Cuánto cuesta una Landing Page?',
        answer: 'El precio depende del alcance, diseño, contenido e integraciones necesarias. Revisamos primero lo que necesitas y preparamos una cotización personalizada.',
    },
    {
        question: '¿Cuánto cuesta desarrollar un sistema web?',
        answer: 'Depende de las funcionalidades, usuarios, integraciones, automatizaciones y complejidad del proyecto. Antes de cotizar definimos contigo el alcance necesario.',
    },
    {
        question: '¿Pueden desarrollar una idea desde cero?',
        answer: 'Sí. No necesitas tener todo definido. Podemos ayudarte a ordenar la idea, identificar lo realmente necesario y convertirla en una solución concreta.',
    },
    {
        question: '¿Pueden trabajar en proyectos de mayor alcance?',
        answer: 'Sí. Evaluamos el alcance, las etapas y los recursos necesarios antes de confirmar el proyecto. Cuando conviene, podemos plantear el desarrollo por fases.',
    },
    {
        question: '¿Desarrollan tiendas online?',
        answer: 'Sí. Podemos desarrollar soluciones de ecommerce y evaluar funciones como pagos online, catálogo, gestión de productos e integraciones según el proyecto.',
    },
    {
        question: '¿Ofrecen soporte y mantenimiento?',
        answer: 'Sí. Podemos incluir soporte, mantenimiento, mejoras y nuevas funcionalidades después del lanzamiento, dependiendo de las necesidades del proyecto.',
    },
]

export function FaqSection() {
    const [openFaq, setOpenFaq] = useState<number | null>(0)

    return (
        <section id="faq" className="faq section-pad">
            <div className="container faq-grid">
                <div className="faq-aside">
                    <p className="eyebrow">Preguntas frecuentes</p>

                    <h2>
                        Antes de empezar, <span>resolvamos algunas dudas.</span>
                    </h2>

                    <p className="faq-description">
                        Estas son algunas de las preguntas más habituales antes de comenzar un proyecto con nosotros.
                    </p>

                    <div className="faq-direct">
                        <span className="faq-direct-icon"><MessageCircle /></span>

                        <div>
                            <strong>¿Tienes otra pregunta?</strong>
                            <small>Cuéntanos tu idea y resolveremos tus dudas antes de comenzar.</small>
                        </div>

                        <a href="#contact">
                            Hablemos de tu proyecto
                            <ArrowRight />
                        </a>
                    </div>
                </div>

                <div className="faq-list">
                    {faqs.map((faq, index) => {
                        const isOpen = openFaq === index

                        return (
                            <article className={`faq-item ${isOpen ? 'is-open' : ''}`} key={faq.question}>
                                <button
                                    type="button"
                                    aria-expanded={isOpen}
                                    onClick={() => setOpenFaq(isOpen ? null : index)}
                                >
                                    <span className="faq-number">0{index + 1}</span>
                                    <span className="faq-question">{faq.question}</span>
                                    <span className="faq-toggle">{isOpen ? <Minus /> : <Plus />}</span>
                                </button>

                                {isOpen && (
                                    <div className="faq-answer">
                                        <p>{faq.answer}</p>
                                    </div>
                                )}
                            </article>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}