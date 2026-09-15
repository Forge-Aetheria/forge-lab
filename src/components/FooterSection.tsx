import { Mail, Phone, Github } from "lucide-react";
import Link from "next/link";
import { FOOTER_LINKS } from "@/config/routes";

export default function FooterSection() {
  return (
    <footer className="bg-[#060d1a] border-t border-slate-800/80 text-slate-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        
        {/* Top Footer Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Brand & Socials Column (Spans 2 cols on lg) */}
          <div className="lg:col-span-2 space-y-5">
            <Link href={FOOTER_LINKS.brand} className="flex items-center gap-2.5 group">
              <div className="w-8 h-8 rounded-lg bg-emerald-500 text-white flex items-center justify-center font-bold text-sm">
                &gt;_
              </div>
              <span className="text-xl font-bold tracking-tight text-white group-hover:text-emerald-400 transition-colors">
                Forge<span className="text-emerald-400">.lab</span>
              </span>
            </Link>

            <p className="text-slate-400 text-sm max-w-sm leading-relaxed font-normal">
              Colectivo selecto de ingenieros de software senior dedicados a construir aplicaciones empresariales estables y escalables.
            </p>

            {/* Social Buttons */}
            <div className="flex items-center gap-2.5 pt-2">
              <a
                href={FOOTER_LINKS.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-[#0a1424] hover:bg-emerald-500 hover:text-white text-slate-300 border border-slate-800 flex items-center justify-center transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Collective */}
          <div className="space-y-4">
            <h4 className="text-white font-bold text-sm tracking-wide">Collective</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href={FOOTER_LINKS.collective.proceso} className="hover:text-emerald-400 transition-colors">
                  Proceso
                </Link>
              </li>
              <li>
                <Link href={FOOTER_LINKS.collective.servicios} className="hover:text-emerald-400 transition-colors">
                  Servicios
                </Link>
              </li>
              <li>
                <Link href={FOOTER_LINKS.collective.estandares} className="hover:text-emerald-400 transition-colors">
                  Estándares
                </Link>
              </li>
              <li>
                <Link href={FOOTER_LINKS.collective.trabajos} className="hover:text-emerald-400 transition-colors">
                  Trabajos
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Especialidades */}
          <div className="space-y-4">
            <h4 className="text-white font-bold text-sm tracking-wide">Especialidades</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href={FOOTER_LINKS.especialidades.webApps} className="hover:text-emerald-400 transition-colors">
                  Web Apps
                </Link>
              </li>
              <li>
                <Link href={FOOTER_LINKS.especialidades.nativoMobile} className="hover:text-emerald-400 transition-colors">
                  Nativo Mobile
                </Link>
              </li>
              <li>
                <Link href={FOOTER_LINKS.especialidades.devopsCloud} className="hover:text-emerald-400 transition-colors">
                  DevOps Cloud
                </Link>
              </li>
              <li>
                <Link href={FOOTER_LINKS.especialidades.desktopTools} className="hover:text-emerald-400 transition-colors">
                  Desktop Tools
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contacto Directo */}
          <div className="space-y-4">
            <h4 className="text-white font-bold text-sm tracking-wide">Contacto Directo</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2.5 text-slate-300">
                <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href={FOOTER_LINKS.contactoDirecto.email} className="hover:text-emerald-400 transition-colors">
                  {FOOTER_LINKS.contactoDirecto.emailText}
                </a>
              </li>
              <li className="flex items-center gap-2.5 text-slate-300">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href={FOOTER_LINKS.contactoDirecto.phone} className="hover:text-emerald-400 transition-colors">
                  {FOOTER_LINKS.contactoDirecto.phoneText}
                </a>
              </li>
              {"phone2" in FOOTER_LINKS.contactoDirecto && (
                <li className="flex items-center gap-2.5 text-slate-300">
                  <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                  <a href={FOOTER_LINKS.contactoDirecto.phone2} className="hover:text-emerald-400 transition-colors">
                    {FOOTER_LINKS.contactoDirecto.phone2Text}
                  </a>
                </li>
              )}
              {"phone3" in FOOTER_LINKS.contactoDirecto && (
                <li className="flex items-center gap-2.5 text-slate-300">
                  <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                  <a href={FOOTER_LINKS.contactoDirecto.phone3} className="hover:text-emerald-400 transition-colors">
                    {FOOTER_LINKS.contactoDirecto.phone3Text}
                  </a>
                </li>
              )}
            </ul>
          </div>

        </div>

        {/* Divider & Bottom Footer Bar */}
        <div className="mt-16 pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2026 Forge.lab. Todos los derechos reservados.</p>
          <div className="flex items-center gap-6">
            <a href={FOOTER_LINKS.legal.privacidad} className="hover:text-emerald-400 transition-colors">
              Privacidad
            </a>
            <a href={FOOTER_LINKS.legal.terminos} className="hover:text-emerald-400 transition-colors">
              Términos de Servicio
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
