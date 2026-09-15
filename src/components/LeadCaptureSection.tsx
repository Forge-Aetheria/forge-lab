"use client";

import { Clock, FileText, ArrowRight, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { EMAILJS_CONFIG } from "@/config/routes";

export default function LeadCaptureSection() {
  const formRef = useRef<HTMLFormElement>(null);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    user_service: "",
    user_message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage(null);

    try {
      if (formRef.current) {
        await emailjs.sendForm(
          EMAILJS_CONFIG.serviceId,
          EMAILJS_CONFIG.templateId,
          formRef.current,
          {
            publicKey: EMAILJS_CONFIG.publicKey,
          }
        );
      }
      setSubmitted(true);
      setFormData({ user_name: "", user_email: "", user_service: "", user_message: "" });
    } catch (error: unknown) {
      console.error("Error al enviar con EmailJS:", error);
      setErrorMessage(
        "Ocurrió un inconveniente al enviar la solicitud. Por favor verifica tus credenciales de EmailJS o inténtalo nuevamente."
      );
    } finally {
      setLoading(false);
    }
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

            {/* Right Column: Form Card with EmailJS Integration */}
            <div className="lg:col-span-7 bg-[#0a1424] border border-slate-800/80 rounded-2xl p-6 sm:p-8 shadow-xl">
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 bg-emerald-950 text-emerald-400 border border-emerald-500/40 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    ¡Solicitud Enviada!
                  </h3>
                  <p className="text-slate-300 text-sm max-w-md mx-auto">
                    Gracias. Nos pondremos en contacto contigo pronto para evaluar tu solicitud.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 px-6 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-semibold text-sm transition-all"
                  >
                    Enviar otra consulta
                  </button>
                </div>
              ) : (
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
                  {errorMessage && (
                    <div className="p-4 rounded-xl bg-red-950/60 border border-red-500/40 text-red-300 text-xs flex items-center gap-3">
                      <AlertCircle className="w-5 h-5 shrink-0 text-red-400" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  {/* Field 1: Nombre (user_name) */}
                  <div>
                    <label className="block text-xs font-semibold text-white mb-2">
                      Nombre Completo
                    </label>
                    <input
                      type="text"
                      name="user_name"
                      required
                      placeholder="Ej. Juan Pérez"
                      value={formData.user_name}
                      onChange={(e) => setFormData({ ...formData, user_name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#070f1e] text-white border border-slate-800 placeholder:text-slate-500 focus:outline-none focus:border-emerald-500 text-sm transition-colors"
                    />
                  </div>

                  {/* Field 2: Correo (user_email) */}
                  <div>
                    <label className="block text-xs font-semibold text-white mb-2">
                      Correo Electrónico
                    </label>
                    <input
                      type="email"
                      name="user_email"
                      required
                      placeholder="Ej. juan@empresa.com"
                      value={formData.user_email}
                      onChange={(e) => setFormData({ ...formData, user_email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#070f1e] text-white border border-slate-800 placeholder:text-slate-500 focus:outline-none focus:border-emerald-500 text-sm transition-colors"
                    />
                  </div>

                  {/* Field 3: Servicio (user_service) */}
                  <div>
                    <label className="block text-xs font-semibold text-white mb-2">
                      Servicio
                    </label>
                    <select
                      name="user_service"
                      required
                      value={formData.user_service}
                      onChange={(e) => setFormData({ ...formData, user_service: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#070f1e] text-white border border-slate-800 focus:outline-none focus:border-emerald-500 text-sm transition-colors"
                    >
                      <option value="" disabled>
                        Selecciona un servicio...
                      </option>
                      <option value="Desarrollo Web">Desarrollo Web</option>
                      <option value="Marketing Digital">Marketing Digital</option>
                      <option value="Consultoría">Consultoría</option>
                    </select>
                  </div>

                  {/* Field 4: Mensaje (user_message) */}
                  <div>
                    <label className="block text-xs font-semibold text-white mb-2">
                      Mensaje
                    </label>
                    <textarea
                      name="user_message"
                      rows={3}
                      required
                      placeholder="Cuéntanos un poco sobre lo que buscas construir..."
                      value={formData.user_message}
                      onChange={(e) => setFormData({ ...formData, user_message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#070f1e] text-white border border-slate-800 placeholder:text-slate-500 focus:outline-none focus:border-emerald-500 text-sm resize-none transition-colors"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 disabled:bg-emerald-800 disabled:cursor-not-allowed text-white font-bold text-sm sm:text-base transition-all flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20 active:scale-98"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin text-white" />
                        <span>Enviando...</span>
                      </>
                    ) : (
                      <>
                        <span>Solicitar Servicio</span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
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
