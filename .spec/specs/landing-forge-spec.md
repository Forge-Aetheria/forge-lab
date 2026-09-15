# Technical Specification - Landing Forge Landing Page

**Location**: `forge-landing/`
**Specification Status**: UPDATED (Requirements refinement: Social links removal, direct contact phone expansion, NDA elimination, Service selector adjustment).

---

## Section 1: Hero / Header Section (`hero-section`)

![Hero Section Screenshot](/Users/franciscomaneiro/.gemini/antigravity/brain/cd137f09-b0d9-419f-91cf-fa018874f11c/.user_uploaded/media_1789437812450.png)

### 1.1 Layout & Grid
- **Container**: 2-column grid on desktop (`grid-cols-1 lg:grid-cols-12 gap-12`), stacked vertically on mobile.
- **Background**: Dark Navy (`#081225` / `#0b172a`).

### 1.2 Left Column Content
- **Badge**:
  - Green dot indicator: `●`
  - Text: `Elite Software Engineers Collective`
  - Style: Dark pill background with subtle green border (`bg-emerald-950/40 text-emerald-400 border border-emerald-800/40`).
- **Main Headline**:
  - Exact text: `"Transformamos Ideas en Software Escalable, Ajustado a tu Presupuesto y de Alto Rendimiento"`
  - Typography: Extra bold sans-serif, high contrast white text, line-height 1.15.
- **Subtitle / Paragraph**:
  - Exact text: `"Desarrollo a medida Web, Mobile y Desktop con entregas tangibles, comunicación directa con ingenieros seniors y transparencia total."`
  - Typography: Slate / muted text (`text-slate-300`).
- **Primary CTA Button**:
  - Text: `"Agendar Sesión de Diagnóstico"` + `→` arrow icon.
  - Style: Bright emerald green background (`bg-[#10b981]` / `bg-[#10c98f]`), white text, bold, pill-rounded (`rounded-full` or `rounded-xl`).
- **Trust Indicators Below Button** (NDA removed):
  - `✓ Cero Compromiso`
  - `✓ Estimación en 48 Horas` (reemplaza mención de NDA)
  - Style: Small slate-400 text with green checkmarks.

### 1.3 Right Column - Pipeline Mockup Widget (`PIPELINE DE DESARROLLO`)
- **Container**: Dark rounded window card (`rounded-2xl bg-[#0e1a30] border border-slate-800/80 p-6`).
- **Window Bar**: Red, Yellow, Green dots + `"PIPELINE DE DESARROLLO"`.
- **Step 1 Card (Completed)**: Lightbulb icon (`Idea & Requerimientos`, subtext: `Folleto técnico preliminar aprobado`, check `✓`).
- **Step 2 Card (Active Step - Highlighted)**: Users icon (`Asignación Senior Collective`, subtext: `Ingenieros expertos en producción directa`, badge `ACTIVE`).
- **Step 3 Card (Locked)**: Microprocessor icon (`Software Escalable`, subtext: `Código limpio con pruebas automatizadas`, lock `🔒`).

---

## Section 2: Mitigation Process Section (`process-section`)

![Process Section Screenshot](/Users/franciscomaneiro/.gemini/antigravity/brain/cd137f09-b0d9-419f-91cf-fa018874f11c/.user_uploaded/media_1789438019102.png)

### 2.1 Header Content
- **Top Badge**: `ESTRATEGIA DE MITIGACIÓN`
- **Section Title**: `"Nuestro Proceso en 3 Pasos (Cero Riesgo)"`
- **Section Subtitle**: `"Un enfoque de ingeniería transparente diseñado para garantizar que obtengas exactamente lo que necesitas sin sorpresas financieras."`

### 2.2 Cards Grid (3 Cards - NDA removed)
#### Card 01
- **Top Badges**: `01` | `Llamada Estratégica`
- **Title**: `"Sesión de Diagnóstico"`
- **Description**: `"Llamada de 30-45 minutos para definir el alcance preliminar, entender tus desafíos y estructurar soluciones viables."`

#### Card 02
- **Top Badges**: `02` | `Costos Claros`
- **Title**: `"Propuesta por Fases"`
- **Description**: `"Presentamos un plan de trabajo detallado con hitos incrementales, entregables tangibles, plazos y costos garantizados."`

#### Card 03 (NDA citation removed)
- **Top Badges**: `03` | `Fase 1 Validada` (reemplaza `Fase 1 Bajo NDA`)
- **Title**: `"Desarrollo Iterativo"`
- **Description**: `"Arrancamos rápido y con entregables claros. Pruebas y apruebas los avances de cada hito antes de proceder al pago de la siguiente fase."`

---

## Section 3: Software Services & Specialties (`solutions-section`)

![Solutions Section Screenshot](/Users/franciscomaneiro/.gemini/antigravity/brain/cd137f09-b0d9-419f-91cf-fa018874f11c/.user_uploaded/media_1789438138918.png)

### 3.1 Header Content
- **Top Badge**: `NUESTRAS ESPECIALIDADES`
- **Section Title**: `"Servicios de Desarrollo de Software"`
- **Section Subtitle**: `"Construimos soluciones robustas utilizando lenguajes de programación y frameworks con soporte de nivel empresarial."`

### 3.2 Cards & Tech Pills
1. **Web & Backend**: `Next.js`, `React`, `TypeScript`, `Node.js`.
2. **Mobile Apps**: `React Native`, `iOS`, `Android`.
3. **Desktop Solutions**: `Electron`, `Tauri`, `Cross-Platform`.
4. **Integración & DevOps**: `AWS / GCP`, `Docker`.

---

## Section 4: Engineering Standards & Collective Metrics (`standards-section`)

![Standards Section Screenshot](/Users/franciscomaneiro/.gemini/antigravity/brain/cd137f09-b0d9-419f-91cf-fa018874f11c/.user_uploaded/media_1789438621100.png)

### 4.1 Header & Metrics Card
- **Badge**: `EXCELENCIA TÉCNICA`
- **Title**: `"Nuestros Estándares de Ingeniería"`
- **Metrics Card**: `Seniors dedicados: 100%`, `Test Coverage promedio: >85%`, `Metodología: Ágil / Scrum`.
- **Standards List**:
  1. `Comunicación Directa con Seniors`
  2. `Especificaciones Claras Antes de Codificar`
  3. `Pruebas y Calidad Integrada`

---

## Section 5: Lead Capture & Anti-Spam Security (`lead-capture-section`)

![Contact Form Screenshot](/Users/franciscomaneiro/.gemini/antigravity/brain/cd137f09-b0d9-419f-91cf-fa018874f11c/.user_uploaded/media_1789438732530.png)

### 5.1 Left Column Content (NDA citation removed)
- **Top Badge**: `CONTACTO`
- **Headline**: `"¿Listo para Dar el Siguiente Paso?"`
- **Subtext**: `"Completa el formulario para agendar tu diagnóstico gratuito. Evaluaremos la viabilidad de tu idea técnica en menos de 48 horas con absoluta confidencialidad."`
- **Trust Badges**:
  - `Respuesta garantizada en menos de 24h`
  - `Trato directo y confidencial` (reemplaza mención de NDA)
  - `Protección anti-spam y rate limit activo`

### 5.2 Form Fields & Updated Service Select Options
- `Nombre Completo` (`user_name`)
- `Correo Electrónico` (`user_email`)
- `Servicio` (`user_service`):
  - `Desarrollo Web`
  - `Desarrollo App Móvil` (reemplaza Marketing Digital)
  - `Consultoría`
- `Mensaje` (`user_message`)

---

## Section 6: Footer Section (`footer-section`)

![Footer Section Screenshot](/Users/franciscomaneiro/.gemini/antigravity/brain/cd137f09-b0d9-419f-91cf-fa018874f11c/.user_uploaded/media_1789438806924.png)

### 6.1 Brand & Socials (Social links removed temporarily)
- **Brand**: Logo oficial Forge.lab (`/logo.png`) en Navbar y Footer + biografía corporativa.
- **Socials**: Se ocultan temporalmente los enlaces de Facebook, Twitter y LinkedIn. Solo permanece GitHub o contenedor despejado.

### 6.2 Contacto Directo (Ampliación a múltiples teléfonos)
- **Email**: `forge.lap.ve@gmail.com`
- **Teléfonos de Contacto (3 números)**:
  - Teléfono 1 (Principal): `+58 412 316 1016`
  - Teléfono 2 (Secundario): Configurable en `src/config/routes.ts`
  - Teléfono 3 (Soporte / Alternativo): Configurable en `src/config/routes.ts`

### 6.3 Bottom Bar
- `© 2026 Forge.lab. Todos los derechos reservados.`
- `Privacidad` | `Términos de Servicio`

---

## Section 7: Brand Assets & Favicon (`branding-assets`)
- **Header & Footer Brand Logo**: Imagen PNG transparente oficial (`public/logo.png`). Se aplicó un recorte ajustado (trim) eliminando más de 50% de márgenes transparentes vacíos originales para que el arte ocupe el 98% del contenedor, optimizando la visibilidad a `h-10 sm:h-11` en Navbar y `h-11` en Footer.
- **Favicon & App Icon**: Imagen PNG transparente del matraz (`public/favicon.png`, `src/app/icon.png`, `src/app/apple-icon.png`, `public/favicon.ico`). Se recortó ajustado y se centró en un lienzo cuadrado 512x512 para que el matraz aproveche la totalidad del área del icono en pestañas del navegador, configurado en el `metadata` de `layout.tsx`.

---

## Section 8: Open Graph & Social Card (`open-graph`)
- **Dimensión estándar**: 1200 × 630 px (`public/og-image.png` y `src/app/opengraph-image.png`).
- **Contenido**: Logo de Forge.lab, gradiente oscuro `#081225`, matraz químico característico, título `"Colectivo Selecto de Ingenieros Senior"` y píldoras de servicios (`Desarrollo Web · Mobile Apps · Cloud & DevOps`).
- **Metadatos**: Configurado en `openGraph` y `twitter` en `src/app/layout.tsx` para generación automática de tarjetas al compartir en WhatsApp, LinkedIn, Twitter/X, Telegram y Slack.

---

## Section 9: SEO & Indexación (`seo-sitemap-robots`)
- **Sitemap**: Generado vía `src/app/sitemap.ts` exportando `MetadataRoute.Sitemap` con frecuencia semanal y prioridad 1.0.
- **Robots**: Generado vía `src/app/robots.ts` permitiendo indexación de agentes y referenciando el `sitemap.xml`.

---

## Section 10: Página 404 Personalizada (`custom-404`)
- **Ruta**: `src/app/not-found.tsx`.
- **Diseño**: Estilo de terminal / ingeniería acorde a Forge.lab sobre fondo `#060d1a`.
- **Elementos**:
  - Badge de estado `404 // Recurso no encontrado`.
  - Encabezado temático de desarrollo: `Endpoint no encontrado`.
  - Mensaje descriptivo indicando que la ruta no existe.
  - Botón de retorno al inicio con estilo esmeralda `Regresar a la base`.

---

## Section 11: Analíticas Web & Custom Events (`web-analytics`)
- **Proveedor**: Vercel Web Analytics (`@vercel/analytics`).
- **Implementación**: Componente `<Analytics />` en `src/app/layout.tsx`.
- **Características**:
  - Cero cookies invasivas (cumple 100% GDPR/CCPA sin requerir banner de consentimiento).
  - Medición en tiempo real de visitantes únicos, páginas vistas, fuentes de referencia, países, dispositivos y velocidad web.
- **Eventos Personalizados de Conversión (Custom Events)**:
  - `cta_agendar_click`: Registrado al hacer clic en botones principales de agendar (propiedades: `{ location: "navbar_desktop" | "navbar_mobile" | "hero" }`).
  - `lead_form_submitted`: Registrado tras el envío exitoso del formulario de contacto (propiedad: `{ service: string }`).
  - `direct_contact_click`: Registrado al hacer clic en enlaces de contacto directo en el footer (propiedades: `{ type: "email" | "phone", number?: string }`).
