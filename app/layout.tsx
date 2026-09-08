import { Analytics } from "@vercel/analytics/next";
import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.mbsol.tech"),
  title: {
    default: "MB Solutions | Desarrollo web y soluciones digitales",
    template: "%s | MB Solutions",
  },
  description:
    "Diseñamos y desarrollamos soluciones digitales adaptadas a las necesidades reales de tu negocio, desde una idea inicial hasta su puesta en marcha.",
  generator: "MB Solutions",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "/",
    siteName: "MB Solutions",
    title: "MB Solutions | Desarrollo web y soluciones digitales",
    description:
      "Diseñamos y desarrollamos soluciones digitales adaptadas a las necesidades reales de tu negocio.",
  },
  twitter: {
    card: "summary_large_image",
    title: "MB Solutions | Desarrollo web y soluciones digitales",
    description:
      "Diseñamos y desarrollamos soluciones digitales adaptadas a las necesidades reales de tu negocio.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  colorScheme: "light",
  themeColor: "#f8fafc",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "MB Solutions",
  url: "https://www.mbsol.tech",
  description:
    "Desarrollo web y soluciones digitales adaptadas a las necesidades de cada negocio.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body className="antialiased">
        {children}

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />

        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  );
}