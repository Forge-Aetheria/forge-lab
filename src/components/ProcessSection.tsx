export default function ProcessSection() {
  const steps = [
    {
      number: "01",
      badge: "Llamada Estratégica",
      title: "Sesión de Diagnóstico",
      description:
        "Llamada de 30-45 minutos para definir el alcance preliminar, entender tus desafíos y estructurar soluciones viables.",
    },
    {
      number: "02",
      badge: "Costos Claros",
      title: "Propuesta por Fases",
      description:
        "Presentamos un plan de trabajo detallado con hitos incrementales, entregables tangibles, plazos y costos garantizados.",
    },
    {
      number: "03",
      badge: "Fase 1 Bajo NDA",
      title: "Desarrollo Iterativo",
      description:
        "Arrancamos rápido bajo NDA completo. Pruebas y apruebas los avances de cada hito antes de proceder al pago de la siguiente fase.",
    },
  ];

  return (
    <section id="proceso" className="py-20 lg:py-28 bg-[#f8fafc] text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-block">
            <span className="px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-700 font-semibold text-xs tracking-wider uppercase">
              ESTRATEGIA DE MITIGACIÓN
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-extrabold text-[#0b172a] tracking-tight leading-tight">
            Nuestro Proceso en 3 Pasos (Cero Riesgo)
          </h2>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto font-normal">
            Un enfoque de ingeniería transparente diseñado para garantizar que obtengas exactamente lo que necesitas sin sorpresas financieras.
          </p>
        </div>

        {/* 3 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div
              key={step.number}
              className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200/80 hover:shadow-md transition-shadow duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Top Row: Number Badge & Tag Badge */}
                <div className="flex items-center justify-between mb-8">
                  <span className="px-3.5 py-1.5 rounded-xl bg-emerald-100 text-emerald-700 font-extrabold text-sm">
                    {step.number}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-medium">
                    {step.badge}
                  </span>
                </div>

                {/* Card Title */}
                <h3 className="text-xl font-bold text-[#0b172a] mb-3">
                  {step.title}
                </h3>

                {/* Card Description */}
                <p className="text-slate-600 text-sm leading-relaxed font-normal">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
