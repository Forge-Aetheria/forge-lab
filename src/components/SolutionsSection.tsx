import { Code2, Smartphone, Monitor, GitFork } from "lucide-react";

export default function SolutionsSection() {
  const solutions = [
    {
      icon: Code2,
      title: "Web & Backend",
      description:
        "Desarrollo de APIs robustas, integraciones de microservicios y plataformas SaaS escalables con arquitecturas modernas.",
      tags: ["Next.js", "React", "TypeScript", "Node.js"],
    },
    {
      icon: Smartphone,
      title: "Mobile Apps",
      description:
        "Aplicaciones nativas e híbridas de alto rendimiento para iOS y Android que ofrecen una experiencia fluida al usuario final.",
      tags: ["React Native", "iOS", "Android"],
    },
    {
      icon: Monitor,
      title: "Desktop Solutions",
      description:
        "Herramientas corporativas, utilidades internas y software especializado a la medida para sistemas de escritorio robustos.",
      tags: ["Electron", "Tauri", "Cross-Platform"],
    },
    {
      icon: GitFork,
      title: "Integración & DevOps",
      description:
        "Estructuración de pipelines de CI/CD automatizados, migración y gestión optimizada de infraestructura cloud.",
      tags: ["AWS / GCP", "Docker"],
    },
  ];

  return (
    <section id="soluciones" className="py-20 lg:py-28 bg-[#081225] text-white border-b border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-block">
            <span className="px-4 py-1.5 rounded-full bg-emerald-950/60 text-emerald-400 font-semibold text-xs tracking-wider uppercase border border-emerald-500/30">
              NUESTRAS ESPECIALIDADES
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-extrabold text-white tracking-tight leading-tight">
            Servicios de Desarrollo de Software
          </h2>

          <p className="text-slate-400 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto font-normal">
            Construimos soluciones robustas utilizando lenguajes de programación y frameworks con soporte de nivel empresarial.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {solutions.map((sol) => {
            const IconComp = sol.icon;
            return (
              <div
                key={sol.title}
                className="bg-[#0b172a] rounded-2xl p-6 sm:p-7 border border-slate-800 hover:border-emerald-500/40 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Icon Container */}
                  <div className="w-12 h-12 rounded-xl bg-emerald-950/60 text-emerald-400 border border-emerald-500/30 flex items-center justify-center mb-6 group-hover:bg-emerald-500 group-hover:text-white transition-all">
                    <IconComp className="w-6 h-6" />
                  </div>

                  {/* Card Title */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors">
                    {sol.title}
                  </h3>

                  {/* Card Description */}
                  <p className="text-slate-400 text-sm leading-relaxed mb-6 font-normal">
                    {sol.description}
                  </p>
                </div>

                {/* Tech Stack Pills Footer */}
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-800/80">
                  {sol.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-md bg-[#070f1e] text-slate-300 text-[11px] font-medium border border-slate-800"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
