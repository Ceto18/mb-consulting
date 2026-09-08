import { ArrowRight } from 'lucide-react'

type Props = { children: React.ReactNode; href?: string; variant?: 'primary' | 'secondary' }

export function ActionButton({ children, href = '#contact', variant = 'primary' }: Props) {
    return <a href={href} className={`button ${variant}`}>{children}<ArrowRight /></a>
}