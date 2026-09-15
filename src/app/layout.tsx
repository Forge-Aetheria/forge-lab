import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Forge.dev | Colectivo Selecto de Ingenieros Senior",
  description: "Transformamos ideas complejas en aplicaciones web, móviles, herramientas cloud y software empresarial de alta calidad.",
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
