'use client'

import Image from 'next/image'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { ActionButton } from '@/components/shared/action-button'

const navigation = [
    ['solutions', 'Soluciones'],
    ['method', 'Método'],
    ['process', 'Proceso'],
    ['about', 'Nosotros'],
] as const

export function Header() {
    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <header className="site-header">
            <div className="container nav-wrap">
                <a className="brand" href="#home" aria-label="Ir al inicio">
                    <Image
                        src="/images/logos/mb-consulting-logo-100.png"
                        alt="MB Consulting"
                        width={300}
                        height={55}
                        className="brand-logo"
                        priority
                    />
                </a>

                <div className="header-navigation">
                    <nav className={menuOpen ? 'nav mobile-open' : 'nav'} aria-label="Navegación principal">
                        {navigation.map(([id, label]) => (
                            <a className="nav-link" key={id} href={`#${id}`} onClick={() => setMenuOpen(false)}>
                                {label}
                            </a>
                        ))}

                        <div className="header-cta" onClick={() => setMenuOpen(false)}>
                            <ActionButton>Hablemos</ActionButton>
                        </div>
                    </nav>

                    <button
                        className="menu-button"
                        type="button"
                        aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
                        aria-expanded={menuOpen}
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        {menuOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </div>
        </header>
    )
}