import { ServiceCards } from '@/components/ui/service-cards'

export function SolutionsSection() {
    return <section id="solutions" className="section-pad solutions">
        <div className="container">
            <div className="section-intro">
                <p className="eyebrow">Soluciones</p>
                <h2>Una solución para cada necesidad.
                    <span>Sin complicarla de más.</span>
                </h2>
                <p>Desde una Landing Page para captar clientes hasta una herramienta desarrollada específicamente para tus procesos.</p>
            </div>
            <ServiceCards />
        </div>
    </section>
}