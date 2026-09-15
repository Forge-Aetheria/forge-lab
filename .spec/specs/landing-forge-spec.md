# Technical Specification - Landing Forge Landing Page

**Location**: `forge-landing/`
**Specification Status**: COMPLETE (Refined section-by-section based on official design screenshots).

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
- **Trust Indicators Below Button**:
  - `✓ Cero Compromiso`
  - `✓ NDA en 24 Horas`
  - Style: Small slate-400 text with green checkmarks.

### 1.3 Right Column - Pipeline Mockup Widget (`PIPELINE DE DESARROLLO`)
- **Container**: Dark rounded window card (`rounded-2xl bg-[#0e1a30] border border-slate-800/80 p-6`).
- **Window Bar**:
  - Left: Red, Yellow, Green window dots (`● ● ●`).
  - Right: Label `"PIPELINE DE DESARROLLO"` (uppercase, muted tracking-wider).
- **Pipeline Vertical Connectors**: Dotted vertical line connecting the 3 step cards.
- **Step 1 Card (Completed)**:
  - Icon: Lightbulb (`blue-500` box).
  - Title: `"Idea & Requerimientos"`
  - Subtext: `"Folleto técnico preliminar aprobado"`
  - Right Indicator: Green check circle (`✓`).
- **Step 2 Card (Active Step - Highlighted)**:
  - Card Style: Highlighted with emerald green border and subtle emerald background glow (`border-emerald-500 bg-emerald-950/30`).
  - Icon: Users / Team (`emerald-500` box).
  - Title: `"Asignación Senior Collective"`
  - Subtext: `"Ingenieros expertos en producción directa"`
  - Right Indicator: Pill badge `"ACTIVE"` (green text in dark pill).
- **Step 3 Card (Locked)**:
  - Icon: Microprocessor / Chip (`purple-500` box).
  - Title: `"Software Escalable"`
  - Subtext: `"Código limpio con pruebas automatizadas"`
  - Right Indicator: Lock icon (`🔒`).

---

## Section 2: Mitigation Process Section (`process-section`)

![Process Section Screenshot](/Users/franciscomaneiro/.gemini/antigravity/brain/cd137f09-b0d9-419f-91cf-fa018874f11c/.user_uploaded/media_1789438019102.png)

### 2.1 Layout & Background
- **Background**: Light Gray / Off-white (`bg-[#f8fafc]` / `bg-slate-50`).
- **Padding**: Vertical padding `py-20 lg:py-28`.
- **Text Alignment**: Centered header.

### 2.2 Header Content
- **Top Badge**:
  - Text: `ESTRATEGIA DE MITIGACIÓN`
  - Style: Light green pill badge (`bg-emerald-100 text-emerald-700 font-semibold text-xs tracking-wider uppercase px-4 py-1.5 rounded-full`).
- **Section Title**:
  - Text: `"Nuestro Proceso en 3 Pasos (Cero Riesgo)"`
  - Style: Bold dark text (`text-[#0b172a] text-3xl sm:text-4xl font-extrabold`).
- **Section Subtitle**:
  - Text: `"Un enfoque de ingeniería transparente diseñado para garantizar que obtengas exactamente lo que necesitas sin sorpresas financieras."`
  - Style: Muted slate text (`text-slate-600 text-base sm:text-lg max-w-2xl mx-auto`).

### 2.3 Cards Grid (3 Cards)
- **Container Grid**: `grid grid-cols-1 md:grid-cols-3 gap-8`.
- **Card Base Style**: White background (`bg-white`), rounded corners (`rounded-2xl`), subtle shadow (`shadow-sm border border-slate-100 p-8`).

#### Card 01
- **Top Left Badge**: Number `01` in green pill badge (`bg-emerald-100 text-emerald-700 font-bold px-3 py-1 rounded-xl text-sm`).
- **Top Right Pill**: Text `Llamada Estratégica` in slate pill badge (`bg-slate-100 text-slate-600 text-xs font-medium px-3 py-1 rounded-full`).
- **Title**: `"Sesión de Diagnóstico"`
- **Description**: `"Llamada de 30-45 minutos para definir el alcance preliminar, entender tus desafíos y estructurar soluciones viables."`

#### Card 02
- **Top Left Badge**: Number `02` in green pill badge (`bg-emerald-100 text-emerald-700 font-bold px-3 py-1 rounded-xl text-sm`).
- **Top Right Pill**: Text `Costos Claros` in slate pill badge (`bg-slate-100 text-slate-600 text-xs font-medium px-3 py-1 rounded-full`).
- **Title**: `"Propuesta por Fases"`
- **Description**: `"Presentamos un plan de trabajo detallado con hitos incrementales, entregables tangibles, plazos y costos garantizados."`

#### Card 03
- **Top Left Badge**: Number `03` in green pill badge (`bg-emerald-100 text-emerald-700 font-bold px-3 py-1 rounded-xl text-sm`).
- **Top Right Pill**: Text `Fase 1 Bajo NDA` in slate pill badge (`bg-slate-100 text-slate-600 text-xs font-medium px-3 py-1 rounded-full`).
- **Title**: `"Desarrollo Iterativo"`
- **Description**: `"Arrancamos rápido bajo NDA completo. Pruebas y apruebas los avances de cada hito antes de proceder al pago de la siguiente fase."`

---

## Section 3: Software Services & Specialties (`solutions-section`)

![Solutions Section Screenshot](/Users/franciscomaneiro/.gemini/antigravity/brain/cd137f09-b0d9-419f-91cf-fa018874f11c/.user_uploaded/media_1789438138918.png)

### 3.1 Layout & Background
- **Background**: Dark Navy (`bg-[#081225]` / `bg-[#070f1e]`).
- **Padding**: Vertical padding `py-20 lg:py-28`.

### 3.2 Header Content
- **Top Badge**:
  - Text: `NUESTRAS ESPECIALIDADES`
  - Style: Dark pill background with subtle green border (`bg-emerald-950/40 text-emerald-400 border border-emerald-800/40 text-xs font-semibold uppercase tracking-wider px-4 py-1.5 rounded-full`).
- **Section Title**:
  - Text: `"Servicios de Desarrollo de Software"`
  - Style: White bold text (`text-white text-3xl sm:text-4xl font-extrabold`).
- **Section Subtitle**:
  - Text: `"Construimos soluciones robustas utilizando lenguajes de programación y frameworks con soporte de nivel empresarial."`
  - Style: Slate muted text (`text-slate-400 text-base sm:text-lg max-w-2xl mx-auto`).

### 3.3 Cards Grid (4 Cards Grid)
- **Container Grid**: `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6`.
- **Card Base Style**: Dark container (`bg-[#0b172a] border border-slate-800 rounded-2xl p-6 sm:p-8 hover:border-emerald-500/40 transition-all duration-300 flex flex-col justify-between`).

#### Card 1: Web & Backend
- **Icon**: Code (`Code2` icon in emerald box).
- **Title**: `"Web & Backend"`
- **Description**: `"Desarrollo de APIs robustas, integraciones de microservicios y plataformas SaaS escalables con arquitecturas modernas."`
- **Tech Stack Pills**: `Next.js`, `React`, `TypeScript`, `Node.js`.

#### Card 2: Mobile Apps
- **Icon**: Mobile (`Smartphone` icon in emerald box).
- **Title**: `"Mobile Apps"`
- **Description**: `"Aplicaciones nativas e híbridas de alto rendimiento para iOS y Android que ofrecen una experiencia fluida al usuario final."`
- **Tech Stack Pills**: `React Native`, `iOS`, `Android`.

#### Card 3: Desktop Solutions
- **Icon**: Desktop (`Monitor` icon in emerald box).
- **Title**: `"Desktop Solutions"`
- **Description**: `"Herramientas corporativas, utilidades internas y software especializado a la medida para sistemas de escritorio robustos."`
- **Tech Stack Pills**: `Electron`, `Tauri`, `Cross-Platform`.

#### Card 4: Integración & DevOps
- **Icon**: Git / Cloud (`GitFork` / `Cloud` icon in emerald box).
- **Title**: `"Integración & DevOps"`
- **Description**: `"Estructuración de pipelines de CI/CD automatizados, migración y gestión optimizada de infraestructura cloud."`
- **Tech Stack Pills**: `AWS / GCP`, `Docker`.

---

## Section 4: Engineering Standards & Collective Metrics (`standards-section`)

![Standards Section Screenshot](/Users/franciscomaneiro/.gemini/antigravity/brain/cd137f09-b0d9-419f-91cf-fa018874f11c/.user_uploaded/media_1789438621100.png)

### 4.1 Layout & Background
- **Background**: Light Gray / Off-white (`bg-[#f8fafc]`).
- **Padding**: Vertical padding `py-20 lg:py-28`.

### 4.2 Top Grid Header (2 Columns)
- **Left Column Header**:
  - **Top Badge**: `EXCELENCIA TÉCNICA` (Light green pill `bg-emerald-100 text-emerald-700 font-semibold text-xs tracking-wider uppercase px-4 py-1.5 rounded-full`).
  - **Section Title**: `"Nuestros Estándares de Ingeniería"` (`text-[#0b172a] text-3xl sm:text-4xl font-extrabold`).
  - **Section Subtitle**: `"No solo escribimos software, estructuramos activos tecnológicos escalables y sostenibles en el tiempo que tu equipo podrá heredar fácilmente."` (`text-slate-600 text-base max-w-xl`).
- **Right Column Card (Métricas del Collective)**:
  - Container: White card (`bg-white rounded-2xl border border-slate-200/80 shadow-sm p-6 sm:p-7`).
  - Header: Chip/CPU icon (`Cpu` icon in emerald box) + `"Métricas del Collective"` (`text-[#0b172a] font-bold text-base flex items-center gap-2 mb-4`).
  - Metric 1: `Seniors dedicados` -> **`100%`**
  - Metric 2: `Test Coverage promedio` -> **`>85%`**
  - Metric 3: `Metodología` -> **`Ágil / Scrum`** (`text-emerald-600 font-bold`).

### 4.3 Bottom Rows (3 Full-Width Standard Cards)
- **Card 1**:
  - Icon: Speech bubble (`MessageSquareText` in light gray icon box `bg-slate-100 text-slate-700 p-4 rounded-xl`).
  - Title: `"Comunicación Directa con Seniors"`
  - Description: `"Eliminamos intermediarios y gestores de cuentas genéricos. Hablarás y coordinarás directamente con los arquitectos e ingenieros de software senior responsables de escribir el código de tu producto."`
- **Card 2**:
  - Icon: File code / Document (`FileCode2` in light gray icon box `bg-slate-100 text-slate-700 p-4 rounded-xl`).
  - Title: `"Especificaciones Claras Antes de Codificar"`
  - Description: `"Creemos en la precisión. Antes de escribir una sola línea de código, documentamos un folleto técnico completo e historias de usuario explícitas para evitar sorpresas y desviaciones de presupuesto."`
- **Card 3**:
  - Icon: Shield check (`ShieldCheck` in light gray icon box `bg-slate-100 text-slate-700 p-4 rounded-xl`).
  - Title: `"Pruebas y Calidad Integrada"`
  - Description: `"Tu software se despliega con redes de seguridad integradas. Escribimos pruebas unitarias, de integración y automatizamos el testing para garantizar que cada entrega sea robusta, segura y lista para producción."`

---

## Section 5: Lead Capture & Contact Form (`lead-capture-section`)

![Contact Form Screenshot](/Users/franciscomaneiro/.gemini/antigravity/brain/cd137f09-b0d9-419f-91cf-fa018874f11c/.user_uploaded/media_1789438732530.png)

### 5.1 Layout & Background
- **Background**: Dark Navy (`bg-[#081225]` / `bg-[#070f1e]`).
- **Outer Container Card**: Dark rounded card (`bg-[#0c182c] border border-slate-800 rounded-3xl p-8 sm:p-12 lg:p-16 shadow-2xl`).

### 5.2 Left Column Content
- **Top Badge**:
  - Text: `CONTACTO`
  - Style: Dark green pill badge (`bg-emerald-950/60 text-emerald-400 font-semibold text-xs tracking-wider uppercase px-4 py-1.5 rounded-full border border-emerald-500/30`).
- **Headline**:
  - Text: `"¿Listo para Dar el Siguiente Paso?"`
  - Style: Bold white text (`text-white text-3xl sm:text-4xl font-extrabold`).
- **Subtext**:
  - Text: `"Completa el formulario para agendar tu diagnóstico gratuito. Evaluaremos la viabilidad de tu idea técnica en menos de 48 horas bajo NDA estricto."`
  - Style: Muted slate text (`text-slate-300 text-sm leading-relaxed max-w-md`).
- **Trust Badges (2 Items)**:
  - Item 1: Clock icon in emerald square (`Clock` in `bg-emerald-950/80 text-emerald-400 p-2 rounded-lg border border-emerald-500/30`) + `"Respuesta garantizada en menos de 24h"`.
  - Item 2: Document icon in emerald square (`FileText` in `bg-emerald-950/80 text-emerald-400 p-2 rounded-lg border border-emerald-500/30`) + `"NDA estándar listo para firma"`.

### 5.3 Right Column Form Card (Dark Theme)
- **Card Container**: Darker background card (`bg-[#0a1424] rounded-2xl p-6 sm:p-8 border border-slate-800/80`).
- **Form Inputs**:
  1. `Nombre Completo` (Placeholder: `"Ej. Juan Pérez"`, dark input `bg-[#070f1e] text-white border-slate-800`).
  2. `Correo Corporativo` (Placeholder: `"Ej. juan@empresa.com"`, dark input `bg-[#070f1e] text-white border-slate-800`).
  3. `Tipo de Proyecto` (Dropdown select: `"Selecciona una opción..."`, dark select `bg-[#070f1e] text-white border-slate-800`).
  4. `Breve descripción del software` (Textarea: `"Cuéntanos un poco sobre lo que buscas construir..."`, dark textarea `bg-[#070f1e] text-white border-slate-800`).
- **Submit Button**:
  - Text: `"Solicitar Diagnóstico Gratuito"` + `→` arrow icon.
  - Style: Bright emerald green button (`bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-3.5 px-6 rounded-xl w-full flex items-center justify-center gap-2`).
- **Security Subtext**:
  - Text: `"Tus datos están protegidos por encriptación de nivel de servidor."` (`text-[10px] text-slate-500 text-center mt-3`).

---

## Section 6: Footer Section (`footer-section`)

![Footer Section Screenshot](/Users/franciscomaneiro/.gemini/antigravity/brain/cd137f09-b0d9-419f-91cf-fa018874f11c/.user_uploaded/media_1789438806924.png)

### 6.1 Layout & Background
- **Background**: Dark Navy (`bg-[#060d1a]` / `bg-[#081225]`).
- **Padding**: Vertical padding `pt-16 pb-12`.

### 6.2 Top Footer Columns (4 Columns Grid)
- **Column 1: Brand Column**:
  - Logo: Emerald green icon (`>_` terminal icon in green box) + `"Forge.dev"` (`text-white font-bold text-xl`).
  - Bio Text: `"Colectivo selecto de ingenieros de software senior dedicados a construir aplicaciones empresariales estables y escalables."` (`text-slate-400 text-xs sm:text-sm max-w-sm`).
  - Social Buttons (4 Pill Icons): Facebook, Twitter, LinkedIn, GitHub (`bg-[#0a1424] text-slate-300 hover:bg-emerald-500 hover:text-white p-2.5 rounded-lg border border-slate-800`).
- **Column 2: Collective**:
  - Title: `"Collective"` (`text-white font-bold text-sm mb-4`).
  - Links: `Proceso`, `Servicios`, `Estándares`, `Trabajos` (`text-slate-400 text-sm hover:text-emerald-400`).
- **Column 3: Especialidades**:
  - Title: `"Especialidades"` (`text-white font-bold text-sm mb-4`).
  - Links: `Web Apps`, `Nativo Mobile`, `DevOps Cloud`, `Desktop Tools` (`text-slate-400 text-sm hover:text-emerald-400`).
- **Column 4: Contacto Directo**:
  - Title: `"Contacto Directo"` (`text-white font-bold text-sm mb-4`).
  - Item 1: Envelope icon in emerald (`Mail` icon) + `"contacto@collective.dev"` (`text-slate-300 text-sm`).
  - Item 2: Phone icon in emerald (`Phone` icon) + `"+34 900 123 456"` (`text-slate-300 text-sm`).

### 6.3 Bottom Footer Bar
- **Divider**: Thin dark horizontal line (`border-t border-slate-800/80 my-8`).
- **Left Text**: `"© 2026 Forge.dev. Todos los derechos reservados."` (`text-slate-500 text-xs`).
- **Right Links**: `"Privacidad"` | `"Términos de Servicio"` (`text-slate-500 text-xs hover:text-emerald-400`).
