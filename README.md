# Biocoding & Healing Therapy Course - Onboarding

Página de onboarding interactiva para el curso de Biocodificación y Terapia de Sanación.

## 📋 Descripción

Este proyecto es una aplicación React moderna que guía a los estudiantes a través de un proceso de onboarding completo para el curso de Biocodificación y Terapia de Sanación. Incluye múltiples pasos con animaciones fluidas, gestión de progreso y una experiencia de usuario pulida.

## 🚀 Características

- **Onboarding Multi-paso**: Proceso guiado con 4 pasos principales
- **Gestión de Progreso**: Guarda el progreso del usuario usando base44
- **Animaciones Fluidas**: Usando Framer Motion para transiciones suaves
- **Diseño Moderno**: UI moderna con Tailwind CSS
- **TypeScript**: Código completamente tipado
- **Responsive**: Diseño adaptable a diferentes tamaños de pantalla

## 📁 Estructura del Proyecto

```
Bio/
├── src/
│   ├── api/              # Cliente API (base44)
│   ├── components/       # Componentes React
│   │   ├── onboarding/  # Componentes específicos de onboarding
│   │   └── ui/          # Componentes UI reutilizables
│   ├── lib/             # Utilidades de librería
│   ├── pages/           # Páginas de la aplicación
│   ├── schemas/         # Esquemas JSON
│   └── utils/           # Funciones utilitarias
├── Entities/            # (Legacy - mover a src/schemas/)
├── Pages/               # (Legacy - mover a src/pages/)
└── [archivos de configuración]
```

## 🛠️ Instalación

1. Instala las dependencias:

```bash
npm install
```

2. Configura las variables de entorno (si es necesario):

Crea un archivo `.env` con las configuraciones necesarias para base44.

3. Inicia el servidor de desarrollo:

```bash
npm run dev
```

## 📝 Scripts Disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Construye la aplicación para producción
- `npm run preview` - Previsualiza la build de producción
- `npm run lint` - Ejecuta el linter
- `npm run type-check` - Verifica los tipos de TypeScript

## 🔧 Configuración

### Path Aliases

El proyecto usa path aliases configurados en `tsconfig.json`:

- `@/*` → `./src/*`

### Dependencias Principales

- **React 18** - Biblioteca UI
- **TypeScript** - Tipado estático
- **Vite** - Build tool y dev server
- **Tailwind CSS** - Framework CSS
- **Framer Motion** - Animaciones
- **React Query** - Gestión de estado del servidor
- **React Router** - Enrutamiento

## 📦 Componentes Principales

### Onboarding Components

- `WelcomeSection` - Pantalla de bienvenida inicial
- `CourseOverview` - Visión general del curso
- `CoreValues` - Valores fundamentales del curso
- `TeamIntroduction` - Presentación del equipo
- `GettingStarted` - Pasos para comenzar
- `CompletionScreen` - Pantalla de finalización
- `StepIndicator` - Indicador de progreso

### UI Components

- `Button` - Botón reutilizable con variantes
- `Card` - Tarjeta contenedora
- `Checkbox` - Checkbox personalizado

## 🔌 Integración con base44

El proyecto está configurado para usar base44 para:

- Autenticación de usuarios (`base44.auth.me()`)
- Guardado de progreso (`base44.entities.OnboardingProgress`)

**Nota**: El cliente base44 en `src/api/base44Client.ts` es un placeholder. Debes implementar la integración real según la documentación de tu API base44.

## 🎨 Personalización

### Colores

Los colores principales se pueden personalizar en `tailwind.config.js` o directamente en los componentes usando clases de Tailwind.

### Contenido

El contenido del onboarding se puede modificar directamente en los componentes correspondientes en `src/components/onboarding/`.

## 🐛 Solución de Problemas

### Errores de Importación

Asegúrate de que los path aliases estén correctamente configurados en `tsconfig.json` y `vite.config.ts`.

### Errores de base44

El cliente base44 necesita ser implementado con la lógica real de tu API. Revisa `src/api/base44Client.ts` para más detalles.

## 📄 Licencia

Este proyecto es privado y está destinado para uso interno.

## 👥 Contribución

Para contribuir al proyecto, por favor sigue las convenciones de código establecidas y asegúrate de que todos los tipos TypeScript estén correctamente definidos.
