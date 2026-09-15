import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Forge.lab | Colectivo Selecto de Ingenieros Senior",
  description: "Transformamos ideas complejas en aplicaciones web, móviles, herramientas cloud y software empresarial de alta calidad.",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.png", type: "image/png" },
    ],
    apple: "/apple-icon.png",
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
