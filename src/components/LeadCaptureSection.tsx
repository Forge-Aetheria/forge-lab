"use client";

import { Clock, FileText, ArrowRight, CheckCircle2, AlertCircle, Loader2, ShieldCheck } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { EMAILJS_CONFIG } from "@/config/routes";

const COOLDOWN_SECONDS = 60; // 60 segundos de espera entre envíos por sesión
const MIN_FILL_TIME_MS = 2500; // Mínimo 2.5s para evitar envíos de bots instantáneos

export default function LeadCaptureSection() {
  const formRef = useRef<HTMLFormElement>(null);
  const formLoadedAt = useRef<number>(Date.now());

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [cooldownRemaining, setCooldownRemaining] = useState<number>(0);

  // Honeypot field (invisible para humanos, rellenado por bots)
  const [honeypot, setHoneypot] = useState("");

  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    user_service: "",
    user_message: "",
  });

  // Verificar si hay cooldown activo al montar
  useEffect(() => {
    formLoadedAt.current = Date.now();
    const lastSubmitStr = localStorage.getItem("forge_last_submit_ts");
    if (lastSubmitStr) {
      const elapsedSeconds = Math.floor((Date.now() - parseInt(lastSubmitStr, 10)) / 1000);
      if (elapsedSeconds < COOLDOWN_SECONDS) {
        setCooldownRemaining(COOLDOWN_SECONDS - elapsedSeconds);
      }
    }
  }, []);

  // Timer para decrementar el cooldown
  useEffect(() => {
    if (cooldownRemaining <= 0) return;
    const interval = setInterval(() => {
      setCooldownRemaining((prev) => (prev > 1 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, [cooldownRemaining]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    // 🛡️ Capa 1: Protección Honeypot (si el bot rellenó el campo oculto)
    if (honeypot.trim() !== "") {
      console.warn("Spam detectado via Honeypot trap.");
      setSubmitted(true); // Falsificamos éxito sin llamar a EmailJS
      return;
    }

    // 🛡️ Capa 2: Detección de velocidad de llenado (Time-to-Fill)
    const timeToFill = Date.now() - formLoadedAt.current;
    if (timeToFill < MIN_FILL_TIME_MS) {
      console.warn("Spam detectado por velocidad anormal de llenado.");
      setSubmitted(true); // Falsificamos éxito sin llamar a EmailJS
      return;
    }

    // 🛡️ Capa 3: Cooldown / Rate Limiter por Timestamp de Sesión
    const lastSubmitStr = localStorage.getItem("forge_last_submit_ts");
    if (lastSubmitStr) {
      const elapsedSeconds = Math.floor((Date.now() - parseInt(lastSubmitStr, 10)) / 1000);
      if (elapsedSeconds < COOLDOWN_SECONDS) {
        const remaining = COOLDOWN_SECONDS - elapsedSeconds;
        setCooldownRemaining(remaining);
        setErrorMessage(`Por favor espera ${remaining} segundos antes de enviar otra solicitud.`);
        return;
      }
    }

    setLoading(true);

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

      // Guardar timestamp del envío exitoso
      localStorage.setItem("forge_last_submit_ts", Date.now().toString());
      setCooldownRemaining(COOLDOWN_SECONDS);
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

                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-emerald-950/80 text-emerald-400 border border-emerald-500/30">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <span className="text-slate-300 text-sm font-medium">
                    Protección anti-spam y rate limit activo
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column: Form Card with EmailJS & Anti-Spam */}
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
                    onClick={() => {
                      setSubmitted(false);
                      formLoadedAt.current = Date.now();
                    }}
                    className="mt-4 px-6 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-semibold text-sm transition-all"
                  >
                    Enviar otra consulta
                  </button>
                </div>
              ) : (
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
                  {/* Campo Honeypot invisible para humanos */}
                  <div style={{ display: "none", opacity: 0, position: "absolute", left: "-9999px" }} aria-hidden="true">
                    <label htmlFor="_gotcha_hp">No rellenar</label>
                    <input
                      type="text"
                      id="_gotcha_hp"
                      name="_gotcha_hp"
                      tabIndex={-1}
                      autoComplete="off"
                      value={honeypot}
                      onChange={(e) => setHoneypot(e.target.value)}
                    />
                  </div>

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

                  {/* Submit Button with Cooldown Handling */}
                  <button
                    type="submit"
                    disabled={loading || cooldownRemaining > 0}
                    className="w-full py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 disabled:bg-slate-800 disabled:text-slate-500 disabled:cursor-not-allowed text-white font-bold text-sm sm:text-base transition-all flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20 active:scale-98"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin text-white" />
                        <span>Enviando...</span>
                      </>
                    ) : cooldownRemaining > 0 ? (
                      <span>Reintentar en {cooldownRemaining}s</span>
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
