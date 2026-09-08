import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://mbconsulting.es'),
  title: { default: 'MB Consulting | Consultoría y desarrollo digital', template: '%s | MB Consulting' },
  description: 'Consultoría, diseño y desarrollo digital para empresas que quieren avanzar con claridad.',
  generator: 'MB Consulting',
  alternates: { canonical: '/' },
  openGraph: { type: 'website', locale: 'es_ES', url: '/', siteName: 'MB Consulting', title: 'MB Consulting | Consultoría y desarrollo digital', description: 'Hacemos que lo digital trabaje para ti.' },
  twitter: { card: 'summary_large_image', title: 'MB Consulting | Consultoría y desarrollo digital', description: 'Hacemos que lo digital trabaje para ti.' },
  robots: { index: true, follow: true },
}

export const viewport: Viewport = { colorScheme: 'light', themeColor: '#f8fafc', width: 'device-width', initialScale: 1 }

const jsonLd = { '@context': 'https://schema.org', '@type': 'ProfessionalService', name: 'MB Consulting', url: 'https://mbconsulting.es', description: 'Consultoría, diseño y desarrollo digital para empresas.' }

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="es"><body className="antialiased">{children}<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />{process.env.NODE_ENV === 'production' && <Analytics />}</body></html>
}
