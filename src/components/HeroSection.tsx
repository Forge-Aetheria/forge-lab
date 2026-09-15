import { ArrowRight, Check, Lightbulb, Users, Cpu, Lock, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { HERO_LINKS } from "@/config/routes";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden py-16 lg:py-24 bg-[#081225] text-white border-b border-slate-800/60">
      {/* Background Radial Glow */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-brand-emerald/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column Content */}
          <div className="lg:col-span-7 space-y-8">
            {/* Top Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 text-xs sm:text-sm font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Elite Software Engineers Collective</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[52px] font-extrabold text-white tracking-tight leading-[1.12]">
              Transformamos Ideas en Software Escalable, Ajustado a tu Presupuesto y de Alto Rendimiento
            </h1>

            {/* Paragraph / Subtitle */}
            <p className="text-lg text-slate-300 max-w-2xl leading-relaxed font-normal">
              Desarrollo a medida Web, Mobile y Desktop con entregas tangibles, comunicación directa con ingenieros seniors y transparencia total.
            </p>

            {/* CTA Button & Trust Badges */}
            <div className="space-y-4 pt-2">
              <Link
                href={HERO_LINKS.ctaDiagnostico}
                className="inline-flex items-center justify-center gap-3 px-7 py-4 rounded-full bg-brand-emerald text-white font-bold text-base sm:text-lg hover:bg-brand-emeraldHover transition-all shadow-lg shadow-brand-emerald/25 hover:shadow-brand-emerald/40 active:scale-98"
              >
                <span>Agendar Sesión de Diagnóstico</span>
                <ArrowRight className="w-5 h-5" />
              </Link>

              <div className="flex items-center gap-6 text-sm text-slate-400 pt-1">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-brand-emerald" />
                  <span>Cero Compromiso</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-brand-emerald" />
                  <span>NDA en 24 Horas</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Interactive Pipeline Widget */}
          <div className="lg:col-span-5">
            <div className="bg-[#0b172a] border border-slate-800 rounded-2xl p-6 sm:p-7 shadow-2xl relative">
              {/* Header Window Bar */}
              <div className="flex items-center justify-between pb-6 border-b border-slate-800/80 mb-6">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-500/80" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>
                <span className="text-xs font-bold text-slate-400 tracking-wider uppercase">
                  PIPELINE DE DESARROLLO
                </span>
              </div>

              {/* Steps List */}
              <div className="space-y-4 relative">
                {/* Step 1: Completed */}
                <div className="p-4 rounded-xl bg-[#091222] border border-slate-800 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3.5">
                    <div className="p-2.5 rounded-lg bg-blue-950/80 text-blue-400 border border-blue-800/50">
                      <Lightbulb className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white">Idea & Requerimientos</h4>
                      <p className="text-xs text-slate-400">Folleto técnico preliminar aprobado</p>
                    </div>
                  </div>
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                </div>

                {/* Vertical Dotted Connector Line 1 */}
                <div className="flex justify-center -my-2">
                  <div className="h-4 border-r-2 border-dashed border-emerald-500/40" />
                </div>

                {/* Step 2: Active */}
                <div className="p-4 rounded-xl bg-emerald-950/20 border-2 border-emerald-500 shadow-lg shadow-emerald-500/10 flex items-center justify-between gap-4 relative">
                  <div className="flex items-center gap-3.5">
                    <div className="p-2.5 rounded-lg bg-emerald-900/60 text-emerald-400 border border-emerald-500/40">
                      <Users className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white">Asignación Senior Collective</h4>
                      <p className="text-xs text-slate-300">Ingenieros expertos en producción directa</p>
                    </div>
                  </div>
                  <span className="px-2.5 py-1 rounded-md bg-emerald-950 text-emerald-400 text-[10px] font-bold tracking-wider uppercase border border-emerald-500/30">
                    ACTIVE
                  </span>
                </div>

                {/* Vertical Dotted Connector Line 2 */}
                <div className="flex justify-center -my-2">
                  <div className="h-4 border-r-2 border-dashed border-slate-700" />
                </div>

                {/* Step 3: Locked */}
                <div className="p-4 rounded-xl bg-[#091222] border border-slate-800/80 flex items-center justify-between gap-4 opacity-70">
                  <div className="flex items-center gap-3.5">
                    <div className="p-2.5 rounded-lg bg-purple-950/60 text-purple-400 border border-purple-800/40">
                      <Cpu className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-300">Software Escalable</h4>
                      <p className="text-xs text-slate-400">Código limpio con pruebas automatizadas</p>
                    </div>
                  </div>
                  <Lock className="w-4 h-4 text-slate-400 shrink-0" />
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
