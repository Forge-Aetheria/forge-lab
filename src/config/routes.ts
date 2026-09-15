/**
 * Site Navigation & External Links Configuration
 * Centralized constant file for all href URLs across the Landing Forge page.
 * Update values here to modify links without touching UI components.
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

export const SITE_CONFIG = {
  nav: NAV_LINKS,
  hero: HERO_LINKS,
  footer: FOOTER_LINKS,
} as const;

export default SITE_CONFIG;
