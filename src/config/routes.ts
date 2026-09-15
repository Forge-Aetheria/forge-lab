/**
 * Site Navigation, External Links & EmailJS Configuration
 * Centralized constant file for all href URLs and EmailJS API keys across Landing Forge.
 * Update values here without modifying UI components.
 */

export const NAV_LINKS = {
  proceso: "#proceso",
  soluciones: "#soluciones",
  estandares: "#estandares",
  contacto: "#contacto",
  ctaAgendar: "#contacto",
} as const;

export const HERO_LINKS = {
  ctaDiagnostico: "#contacto",
} as const;

export const FOOTER_LINKS = {
  brand: "#",
  socials: {
    github: "https://github.com/Forge-Aetheria",
  },
  collective: {
    proceso: "#proceso",
    servicios: "#soluciones",
    estandares: "#estandares",
    trabajos: "#contacto",
  },
  especialidades: {
    webApps: "#soluciones",
    nativoMobile: "#soluciones",
    devopsCloud: "#soluciones",
    desktopTools: "#soluciones",
  },
  contactoDirecto: {
    email: "mailto:forge.lap.ve@gmail.com",
    emailText: "forge.lap.ve@gmail.com",
    phone: "tel:+584123161016",
    phoneText: "+58 412 316 1016",
    phone2: "tel:+584248610492",
    phone2Text: "+58 424 861 0492",
    phone3: "tel:+584248608903",
    phone3Text: "+58 424 860 8903",
  },
  legal: {
    privacidad: "#",
    terminos: "#",
  },
} as const;

export const EMAILJS_CONFIG = {
  publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "TU_PUBLIC_KEY_AQUI",
  serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "ID_DE_TU_SERVICIO",
  templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "ID_DE_TU_PLANTILLA",
} as const;

export const SITE_CONFIG = {
  nav: NAV_LINKS,
  hero: HERO_LINKS,
  footer: FOOTER_LINKS,
  emailjs: EMAILJS_CONFIG,
} as const;

export default SITE_CONFIG;
