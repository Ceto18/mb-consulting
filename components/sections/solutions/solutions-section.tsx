import { ServiceCards } from '@/components/ui/service-cards'

export function SolutionsSection() {
    return <section id="solutions" className="section-pad solutions">
        <div className="container">
            <div className="section-intro">
                <p className="eyebrow">Soluciones</p>
                <h2>¿Qué podemos construir <span>para ti?</span></h2>
                <p>Tres tipos de soluciones, una misma forma de trabajar. Elige la que más se parece a lo que necesitas.</p>
            </div>
            <ServiceCards />
            <div className="solutions-help">
                <p>¿No estás seguro de cuál necesitas?</p>
                <a href="#contact">Cuéntanos tu idea y te ayudamos a definirlo.</a>
            </div>
        </div>
    </section>
}