import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Terminal } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#060d1a] text-white flex flex-col justify-between selection:bg-emerald-500 selection:text-white relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-emerald-500/10 blur-[130px] rounded-full pointer-events-none" />

      {/* Top Header */}
      <header className="w-full border-b border-slate-800/60 bg-[#081225]/80 backdrop-blur-md sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <Link href="/" className="inline-flex items-center group transition-opacity hover:opacity-90">
            <Image
              src="/logo.png"
              alt="Forge.lab"
              width={160}
              height={65}
              className="h-10 sm:h-11 w-auto object-contain"
              priority
            />
          </Link>
          <Link
            href="/"
            className="text-xs font-semibold text-slate-400 hover:text-emerald-400 flex items-center gap-1.5 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Volver a la web
          </Link>
        </div>
      </header>

      {/* Center 404 Content */}
      <div className="flex-1 flex items-center justify-center px-4 py-16 sm:px-6 lg:px-8 z-10">
        <div className="max-w-xl w-full text-center space-y-6">
          {/* Status Chip */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-800 text-xs font-mono text-emerald-400">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            404 // HTTP_NOT_FOUND
          </div>

          {/* Heading */}
          <div className="space-y-3">
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white">
              Endpoint Fuera de Alcance
            </h1>
            <p className="text-slate-400 text-base sm:text-lg leading-relaxed max-w-md mx-auto">
              La página o recurso que buscas no existe en este clúster o ha sido reubicada por nuestro equipo de ingeniería.
            </p>
          </div>

          {/* Terminal Console Mock */}
          <div className="bg-[#0b172a] border border-slate-800 rounded-xl p-4 text-left font-mono text-xs text-slate-300 shadow-2xl shadow-black/50 max-w-md mx-auto">
            <div className="flex items-center gap-2 pb-3 border-b border-slate-800/80 mb-3 text-slate-500">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/70" />
              <span className="text-[11px] ml-1 text-slate-400">forge-terminal</span>
            </div>
            <p className="text-slate-400">
              <span className="text-emerald-400">&gt;</span> forge get --target route
            </p>
            <p className="text-red-400 pt-1">
              Error 404: NullReferenceException - Ruta no mapeada.
            </p>
            <p className="text-slate-500 pt-1">
              [Sugerencia]: Redireccionar a ruta raíz &apos;/&apos;.
            </p>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <Link
              href="/"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-emerald-500 text-white font-semibold text-sm hover:bg-emerald-600 transition-all shadow-lg shadow-emerald-500/20 active:scale-95"
            >
              <ArrowLeft className="w-4 h-4" />
              Regresar al Inicio
            </Link>
            <Link
              href="/#contacto"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-slate-900 border border-slate-800 text-slate-300 font-semibold text-sm hover:text-white hover:border-slate-700 transition-all"
            >
              <Terminal className="w-4 h-4 text-emerald-400" />
              Contactar Soporte
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Minimal Footer */}
      <footer className="border-t border-slate-800/60 py-6 text-center text-xs text-slate-500">
        © 2026 Forge.lab. Todos los derechos reservados.
      </footer>
    </main>
  );
}
