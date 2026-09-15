import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://forge-landing.vercel.app"),
  title: "Forge.lab | Colectivo Selecto de Ingenieros Senior",
  description: "Transformamos ideas complejas en aplicaciones web, móviles, herramientas cloud y software empresarial de alta calidad.",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.png", type: "image/png" },
    ],
    apple: "/apple-icon.png",
  },
  openGraph: {
    title: "Forge.lab | Colectivo Selecto de Ingenieros Senior",
    description: "Transformamos ideas complejas en aplicaciones web, móviles, herramientas cloud y software empresarial de alta calidad.",
    url: "https://forge-landing.vercel.app",
    siteName: "Forge.lab",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Forge.lab - Colectivo de Ingenieros de Software Senior",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Forge.lab | Colectivo Selecto de Ingenieros Senior",
    description: "Transformamos ideas complejas en aplicaciones web, móviles, herramientas cloud y software empresarial de alta calidad.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="antialiased bg-dark-bg text-white selection:bg-brand-emerald selection:text-white">
        {children}
      </body>
    </html>
  );
}
