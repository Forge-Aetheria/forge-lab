"use client";

import { Mail, Phone, Github, ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { track } from "@vercel/analytics";
import { FOOTER_LINKS } from "@/config/routes";

export default function FooterSection() {
  const [showPhoneTooltip, setShowPhoneTooltip] = useState(false);
  const tooltipRef = useRef<HTMLLIElement>(null);

  // Cerrar tooltip si se hace clic afuera
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (tooltipRef.current && !tooltipRef.current.contains(event.target as Node)) {
        setShowPhoneTooltip(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <footer className="bg-[#060d1a] border-t border-slate-800/80 text-slate-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        
        {/* Top Footer Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Brand & Socials Column (Spans 2 cols on lg) */}
          <div className="lg:col-span-2 space-y-5">
            <Link href={FOOTER_LINKS.brand} className="inline-flex items-center group transition-opacity hover:opacity-90">
              <Image
                src="/logo.png"
                alt="Forge.lab"
                width={160}
                height={65}
                className="h-11 w-auto object-contain"
              />
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
                <a
                  href={FOOTER_LINKS.contactoDirecto.email}
                  onClick={() => track("direct_contact_click", { type: "email" })}
                  className="hover:text-emerald-400 transition-colors"
                >
                  {FOOTER_LINKS.contactoDirecto.emailText}
                </a>
              </li>

              {/* Teléfono Principal con Tooltip/Popover para líneas adicionales */}
              <li ref={tooltipRef} className="relative">
                <div className="flex flex-wrap items-center gap-2 text-slate-300">
                  <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                  <a
                    href={FOOTER_LINKS.contactoDirecto.phone}
                    onClick={() => track("direct_contact_click", { type: "phone", number: "phone1" })}
                    className="hover:text-emerald-400 transition-colors"
                  >
                    {FOOTER_LINKS.contactoDirecto.phoneText}
                  </a>

                  {/* Trigger de Tooltip/Popover */}
                  <button
                    type="button"
                    onClick={() => setShowPhoneTooltip((prev) => !prev)}
                    className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-medium bg-emerald-950/70 text-emerald-400 border border-emerald-500/30 hover:bg-emerald-900/80 hover:text-emerald-300 transition-all cursor-pointer focus:outline-none"
                    aria-label="Ver más números de contacto"
                  >
                    <span>+2 líneas</span>
                    <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${showPhoneTooltip ? "rotate-180" : ""}`} />
                  </button>
                </div>

                {/* Popover Card Flotante */}
                {showPhoneTooltip && (
                  <div className="absolute left-0 bottom-full mb-2.5 w-64 p-3.5 bg-[#0a1526] border border-slate-700 rounded-xl shadow-2xl shadow-black/80 z-30 space-y-2.5 animate-in fade-in slide-in-from-bottom-2 duration-150">
                    <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                      <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                        Líneas de Atención
                      </span>
                      <button
                        type="button"
                        onClick={() => setShowPhoneTooltip(false)}
                        className="text-slate-500 hover:text-slate-300 text-xs p-0.5 leading-none"
                        aria-label="Cerrar"
                      >
                        ✕
                      </button>
                    </div>

                    <div className="space-y-2 text-xs">
                      <div>
                        <div className="text-[10px] text-emerald-400 font-semibold mb-0.5">Línea Principal</div>
                        <a
                          href={FOOTER_LINKS.contactoDirecto.phone}
                          onClick={() => track("direct_contact_click", { type: "phone", number: "phone1" })}
                          className="text-slate-200 hover:text-emerald-400 font-mono transition-colors block"
                        >
                          {FOOTER_LINKS.contactoDirecto.phoneText}
                        </a>
                      </div>

                      {"phone2" in FOOTER_LINKS.contactoDirecto && (
                        <div>
                          <div className="text-[10px] text-slate-400 font-medium mb-0.5">Línea Directa 2</div>
                          <a
                            href={FOOTER_LINKS.contactoDirecto.phone2}
                            onClick={() => track("direct_contact_click", { type: "phone", number: "phone2" })}
                            className="text-slate-200 hover:text-emerald-400 font-mono transition-colors block"
                          >
                            {FOOTER_LINKS.contactoDirecto.phone2Text}
                          </a>
                        </div>
                      )}

                      {"phone3" in FOOTER_LINKS.contactoDirecto && (
                        <div>
                          <div className="text-[10px] text-slate-400 font-medium mb-0.5">Línea Directa 3</div>
                          <a
                            href={FOOTER_LINKS.contactoDirecto.phone3}
                            onClick={() => track("direct_contact_click", { type: "phone", number: "phone3" })}
                            className="text-slate-200 hover:text-emerald-400 font-mono transition-colors block"
                          >
                            {FOOTER_LINKS.contactoDirecto.phone3Text}
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </li>
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
