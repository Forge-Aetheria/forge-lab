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
    facebook: "https://facebook.com",
    twitter: "https://twitter.com",
    linkedin: "https://linkedin.com",
    github: "https://github.com",
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
    email: "mailto:contacto@collective.dev",
    emailText: "contacto@collective.dev",
    phone: "tel:+34900123456",
    phoneText: "+34 900 123 456",
  },
  legal: {
    privacidad: "#",
    terminos: "#",
  },
} as const;

/**
 * EMAILJS CONFIGURATION
 * Coloca aquí tus claves obtenidas desde el panel de EmailJS (https://dashboard.emailjs.com)
 */
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
