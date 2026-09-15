# Landing Forge 🚀

Landing page profesional para colectivo de ingenieros de software senior (**Forge.dev / Collective.dev**), desarrollada con **Next.js 15 (App Router)**, **TypeScript**, **Tailwind CSS** y siguiendo los principios de **Specification-Driven Development (SDD)**.

---

## 🛠️ Tecnologías Utilizadas

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router & Server Components)
- **Lenguaje**: [TypeScript](https://www.typescriptlang.org/)
- **Estilos**: [Tailwind CSS](https://tailwindcss.com/)
- **Iconos**: [Lucide React](https://lucide.dev/)
- **Arquitectura de Especificaciones**: SDD Framework en `.spec/`

---

## 🚀 Inicio Rápido (Quickstart)

### Requisitos Previos
- **Node.js**: v18.0.0 o superior (Probado en Node.js v24)
- **npm** o **pnpm/yarn**

### Instalación y Ejecución

1. **Navegar a la carpeta del proyecto**:
   ```bash
   cd forge-landing
   ```

2. **Instalar dependencias**:
   ```bash
   npm install
   ```

3. **Iniciar el servidor de desarrollo**:
   ```bash
   npm run dev
   ```

4. Abrir en tu navegador: [http://localhost:3000](http://localhost:3000)

---

## 📁 Estructura del Proyecto

```text
forge-landing/
├── .spec/                        # Especificaciones e historias SDD
│   ├── constitution.md           # Reglas y principios del proyecto
│   ├── specs/
│   │   └── landing-forge-spec.md  # Especificación técnica detallada de secciones
│   └── tasks.md                  # Checklist de tareas y hitos
├── src/
│   ├── app/                      # Next.js App Router (Layouts y Páginas)
│   │   ├── globals.css           # Estilos globales y Tailwind CSS
│   │   ├── layout.tsx            # Metadata e infraestructura raíz
│   │   └── page.tsx              # Ensamblaje de la Landing Page
│   ├── components/               # Componentes modulares por sección
│   │   ├── Navbar.tsx            # Navegación responsiva y botón CTA
│   │   ├── HeroSection.tsx       # Sección principal con Pipeline Interactivo
│   │   ├── ProcessSection.tsx    # Proceso en 3 pasos (Cero Riesgo)
│   │   ├── SolutionsSection.tsx  # Tarjetas de especialidades y Tech Stack
│   │   ├── StandardsSection.tsx  # Métricas del colectivo y estándares
│   │   ├── LeadCaptureSection.tsx# Formulario de contacto en modo oscuro
│   │   └── FooterSection.tsx     # Pie de página y enlaces
│   ├── config/
│   │   └── routes.ts             # 💡 ARCHIVO DE CONSTANTES DE NAVEGACIÓN Y ENLACES
│   └── lib/
│       └── utils.ts              # Utilidades para concat de clases Tailwind
├── tailwind.config.ts            # Tokens de diseño y colores
├── tsconfig.json                 # Configuración de TypeScript y alias `@/*`
├── .gitignore                    # Exclusiones de archivos para Git y Vercel
└── README.md                     # Documentación oficial del proyecto
```

---

## 💡 Configuración Centralizada de Enlaces (`src/config/routes.ts`)

Todos los enlaces de la página (anchors de navegación, redes sociales, correo electrónico, teléfono y botones de acción) están centralizados en `src/config/routes.ts`.

Para modificar cualquier URL sin editar los componentes de la interfaz, edita este archivo:

```typescript
// src/config/routes.ts
export const FOOTER_LINKS = {
  socials: {
    facebook: "https://facebook.com/tu-pagina",
    twitter: "https://twitter.com/tu-usuario",
    linkedin: "https://linkedin.com/company/tu-empresa",
    github: "https://github.com/tu-organizacion",
  },
  contactoDirecto: {
    email: "mailto:contacto@forge.lab",
    emailText: "contacto@forge.lab",
    phone: "tel:+34900123456",
    phoneText: "+34 900 123 456",
  },
};
```

---

## ⚙️ Comandos Disponibles

| Comando | Descripción |
| :--- | :--- |
| `npm run dev` | Inicia el servidor de desarrollo en `localhost:3000` |
| `npm run build` | Compila la aplicación para producción (Static Site Generation) |
| `npm run start` | Inicia el servidor de producción |
| `npm run lint` | Ejecuta ESLint para análisis de código |

---

## 🌐 Despliegue en Vercel

Este proyecto está optimizado para desplegarse nativamente en **Vercel**:

### Opción 1: Conectar con GitHub (Recomendado)
1. Haz push de tu repositorio a GitHub.
2. Inicia sesión en [Vercel](https://vercel.com) e importa la carpeta `forge-landing`.
3. Haz clic en **Deploy**. Cada nuevo commit actualizará el sitio automáticamente.

### Opción 2: Usar Vercel CLI
```bash
cd forge-landing
npx vercel
```
