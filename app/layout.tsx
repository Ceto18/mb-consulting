import { Analytics } from "@vercel/analytics/next";
import Script from "next/script";
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
  alternates: { canonical: "/" },
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
  robots: { index: true, follow: true },
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
      <head>
        <Script id="google-tag-manager" strategy="beforeInteractive">
          {`
            (function(w,d,s,l,i){
              w[l]=w[l]||[];
              w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});
              var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),
              dl=l!='dataLayer'?'&l='+l:'';
              j.async=true;
              j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
              f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-5DNRCGK');
          `}
        </Script>
      </head>

      <body className="antialiased">
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5DNRCGK"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        {children}

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  );
}