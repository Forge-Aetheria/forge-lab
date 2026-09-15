"use client";

import { Clock, FileText, ArrowRight, CheckCircle2 } from "lucide-react";
import { useState } from "react";

export default function LeadCaptureSection() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    projectType: "",
    description: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contacto" className="py-20 lg:py-28 bg-[#081225] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Dark Card Container */}
        <div className="bg-[#0c182c] border border-slate-800 rounded-3xl p-8 sm:p-12 lg:p-14 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-4">
                <div className="inline-block">
                  <span className="px-4 py-1.5 rounded-full bg-emerald-950/60 text-emerald-400 font-semibold text-xs tracking-wider uppercase border border-emerald-500/30">
                    CONTACTO
                  </span>
                </div>

                <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
                  ¿Listo para Dar el Siguiente Paso?
                </h2>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-normal max-w-md">
                  Completa el formulario para agendar tu diagnóstico gratuito. Evaluaremos la viabilidad de tu idea técnica en menos de 48 horas bajo NDA estricto.
                </p>
              </div>

              {/* Trust Badges */}
              <div className="space-y-4 pt-2">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-emerald-950/80 text-emerald-400 border border-emerald-500/30">
                    <Clock className="w-5 h-5" />
                  </div>
                  <span className="text-slate-300 text-sm font-medium">
                    Respuesta garantizada en menos de 24h
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-emerald-950/80 text-emerald-400 border border-emerald-500/30">
                    <FileText className="w-5 h-5" />
                  </div>
                  <span className="text-slate-300 text-sm font-medium">
                    NDA estándar listo para firma
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column: Dark Theme Form Card */}
            <div className="lg:col-span-7 bg-[#0a1424] border border-slate-800/80 rounded-2xl p-6 sm:p-8 shadow-xl">
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 bg-emerald-950 text-emerald-400 border border-emerald-500/40 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    ¡Solicitud Recibida!
                  </h3>
                  <p className="text-slate-300 text-sm max-w-md mx-auto">
                    Gracias por contactarnos. Un arquitecto senior de nuestro equipo revisará tu mensaje y te responderá en menos de 24 horas.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 px-6 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-semibold text-sm transition-all"
                  >
                    Enviar otra consulta
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Field 1: Nombre Completo */}
                  <div>
                    <label className="block text-xs font-semibold text-white mb-2">
                      Nombre Completo
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ej. Juan Pérez"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#070f1e] text-white border border-slate-800 placeholder:text-slate-500 focus:outline-none focus:border-emerald-500 text-sm transition-colors"
                    />
                  </div>

                  {/* Field 2: Correo Corporativo */}
                  <div>
                    <label className="block text-xs font-semibold text-white mb-2">
                      Correo Corporativo
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="Ej. juan@empresa.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#070f1e] text-white border border-slate-800 placeholder:text-slate-500 focus:outline-none focus:border-emerald-500 text-sm transition-colors"
                    />
                  </div>

                  {/* Field 3: Tipo de Proyecto */}
                  <div>
                    <label className="block text-xs font-semibold text-white mb-2">
                      Tipo de Proyecto
                    </label>
                    <select
                      required
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#070f1e] text-white border border-slate-800 focus:outline-none focus:border-emerald-500 text-sm transition-colors"
                    >
                      <option value="" disabled>
                        Selecciona una opción...
                      </option>
                      <option value="web">Web & Backend</option>
                      <option value="mobile">Mobile Apps</option>
                      <option value="devops">Integración & DevOps</option>
                      <option value="desktop">Desktop Solutions</option>
                    </select>
                  </div>

                  {/* Field 4: Breve descripción del software */}
                  <div>
                    <label className="block text-xs font-semibold text-white mb-2">
                      Breve descripción del software
                    </label>
                    <textarea
                      rows={3}
                      required
                      placeholder="Cuéntanos un poco sobre lo que buscas construir..."
                      value={formData.description}
                      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#070f1e] text-white border border-slate-800 placeholder:text-slate-500 focus:outline-none focus:border-emerald-500 text-sm resize-none transition-colors"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-sm sm:text-base transition-all flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20 active:scale-98"
                  >
                    <span>Solicitar Diagnóstico Gratuito</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <p className="text-center text-[10px] text-slate-500 pt-1">
                    Tus datos están protegidos por encriptación de nivel de servidor.
                  </p>
                </form>
              )}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
