import { MessageSquareText, FileCode2, ShieldCheck, Cpu } from "lucide-react";

export default function StandardsSection() {
  const standards = [
    {
      icon: MessageSquareText,
      title: "Comunicación Directa con Seniors",
      description:
        "Eliminamos intermediarios y gestores de cuentas genéricos. Hablarás y coordinarás directamente con los arquitectos e ingenieros de software senior responsables de escribir el código de tu producto.",
    },
    {
      icon: FileCode2,
      title: "Especificaciones Claras Antes de Codificar",
      description:
        "Creemos en la precisión. Antes de escribir una sola línea de código, documentamos un folleto técnico completo e historias de usuario explícitas para evitar sorpresas y desviaciones de presupuesto.",
    },
    {
      icon: ShieldCheck,
      title: "Pruebas y Calidad Integrada",
      description:
        "Tu software se despliega con redes de seguridad integradas. Escribimos pruebas unitarias, de integración y automatizamos el testing para garantizar que cada entrega sea robusta, segura y lista para producción.",
    },
  ];

  return (
    <section id="estandares" className="py-20 lg:py-28 bg-[#f8fafc] text-slate-900 border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Header Grid (2 Columns: Title + Metrics Card) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
          
          {/* Left Column: Title & Subtitle */}
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-block">
              <span className="px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-700 font-semibold text-xs tracking-wider uppercase">
                EXCELENCIA TÉCNICA
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-extrabold text-[#0b172a] tracking-tight leading-tight">
              Nuestros Estándares de Ingeniería
            </h2>

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-xl font-normal">
              No solo escribimos software, estructuramos activos tecnológicos escalables y sostenibles en el tiempo que tu equipo podrá heredar fácilmente.
            </p>
          </div>

          {/* Right Column: Collective Metrics Card */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-7 shadow-sm">
              <div className="flex items-center gap-3 pb-5 mb-5 border-b border-slate-100">
                <div className="p-2 rounded-xl bg-emerald-100 text-emerald-700">
                  <Cpu className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-[#0b172a]">
                  Métricas del Collective
                </h3>
              </div>

              <div className="space-y-3.5 text-sm">
                <div className="flex items-center justify-between">
                  <span className="text-slate-500 font-medium">Seniors dedicados</span>
                  <span className="font-bold text-[#0b172a]">100%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-500 font-medium">Test Coverage promedio</span>
                  <span className="font-bold text-[#0b172a]">&gt;85%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-500 font-medium">Metodología</span>
                  <span className="font-bold text-emerald-600">Ágil / Scrum</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Full-Width Standard Cards List */}
        <div className="space-y-6">
          {standards.map((st) => {
            const IconComponent = st.icon;
            return (
              <div
                key={st.title}
                className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-sm flex flex-col sm:flex-row gap-6 items-start hover:shadow-md transition-shadow duration-300"
              >
                <div className="p-3.5 rounded-xl bg-slate-100 text-slate-700 shrink-0">
                  <IconComponent className="w-6 h-6 text-slate-800" />
                </div>
                <div className="space-y-2">
                  <h4 className="text-lg font-bold text-[#0b172a]">
                    {st.title}
                  </h4>
                  <p className="text-slate-600 text-sm leading-relaxed font-normal">
                    {st.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
