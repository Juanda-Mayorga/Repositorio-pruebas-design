# Page Animations and Transitions

## Philosophy

Animations in our web application are not merely decorative; they serve an essential function in User Experience (UX):
-   **Context:** They help the user understand the navigation flow and state changes (e.g., form submission -> success).
-   **Performance Perception:** They mask load times and make the interface feel more "snappy" and reactive.
-   **Subtlety:** We prioritize speed/performance. Animations are fast (`~300ms`) and discrete, avoiding excessive bouncing or long durations that block interaction.

## Motion Principles

All transitions must adhere to the design tokens defined in [TOKENS.md](file:///Users/carolinadomenechreal/Desktop/Prueba/Repositorio-pruebas-design/src/web/design-system/TOKENS.md).

-   **Standard Duration:** `0.3s` to `0.35s` (reference `transition.default`).
-   **Easing Curve:** `ease-out` (starts fast, slows down gently) or `easeInOut` for elements that both enter and exit.

## Transition Types

### Default Page Transition (Subtle Fade/Slide)
Used for major page changes or workflow steps.
-   **Exit:** Element fades out (`opacity: 0`) and slides up slightly (`y: -10px`) to indicate progress.
-   **Enter:** New content appears (`opacity: 1`) sliding from below (`y: 20px` -> `0`) or scaling gently.

### Micro-interactions
-   **Hover Effects:** distinct scale (`1.02`) and shadow deepening to indicate interactivity.
-   **Focus States:** input borders change color to guide user attention.

---

## Page-Specific Animations

### 1. Contact Page (`ContactPage.tsx`)
*Entry point for main contact options.*

-   **Component Interactions:**
    -   **Content Cards:** Uses `ContentCard` component. On hover, the cards scale up (`1.02`) and the shadow increases (`shadow.card.hover`) to invite clicking.
    -   **Buttons:** Standard button hover states (color shift).

### 2. Contact Sales Page (`ContactSalesPage.tsx`)
*The main form for sales inquiries.*

-   **Component Interactions:**
    -   **Inputs:** `WebInputField` border transition on focus (`transition.default`).
    -   **Validation:** Immediate feedback on blur/change.
    -   **Buttons:** Submit button has a disabled state opacity change and a loading spinner state.

### 3. Contact Sales Submitting Page (`ContactSalesSubmittingPage.tsx`)
*Interstitial state while data is being processed.*

-   **Page Transition (Exit):**
    -   **Trigger:** When navigating to the Success page (after 2s simulation).
    -   **Animation:** Fades out (`opacity: 0`) and slides up (`y: -10px`) over `350ms`.
    -   **Purpose:** Smoothly removes the "busy" state to clear the stage for the success validation.

### 4. Contact Sales Success Page (`ContactSalesSuccessPage.tsx`)
*Confirmation state with positive reinforcement.*

-   **Page Animations (Enter):**
    -   **Sequence:**
        1.  **Checkmark:** Bounces in (`scale: 0` -> `1.2` -> `1`) over `400ms`.
        2.  **Title & Subtitle:** Fade in + Slide Up (`y: 20px` -> `0`) over `350ms` (delayed `150ms`).
        3.  **CTA Button:** Fades in + Scales (`0.95` -> `1`) over `300ms` (delayed `300ms`).
    -   **Purpose:** Guides the user's eye from the confirmation (Check) -> Message (Text) -> Next Action (Button).

### 5. Resources Page (`ResourcesPage.tsx`)
*Hub for documentation and community links.*

-   **Component Interactions:**
    -   **Content Cards:** Extensive use of `ContentCard`. Each resource block (Tips, Community, Docs, Support) lifts up and deepens shadow on hover.
    -   **Buttons:** `WebButton` variants (`outlined` and `soft`) react to hover with background color changes.

---

## Scroll Reveal (Visibility triggers)

Para mejorar el "percepción de valor" y el dinamismo, hemos implementado un sistema de revelado progresivo basado en el scroll del usuario.

### 1. Product Page (`ProductPage.tsx`)
*Foco en la entrada elegante de características.*

-   **Encabezado:** Fade In + Slide Down (-20px -> 0) al montar el componente.
-   **Hero:** Animación escalonada (Stagger). La imagen entra con un ligero zoom (`scale: 0.98`), seguida del bloque de texto que se desplaza lateralmente en Desktop.

### 2. Mobile & Tablet UX (Optimización)
Para evitar que las animaciones se sientan "bruscas" en dispositivos móviles (375px y 744px):
-   **Dirección:** Se eliminan los deslizamientos laterales largos (`x`), sustituyéndolos por un ligero desplazamiento vertical (`y: 20px`).
-   **Suavidad:** El escalado inicial se ajusta a `0.98` (en lugar de `0.95`) para una transición fluida.
-   **Trigger (Viewport):** En mobile, se usa un `amount: 0.1` (10% de visibilidad) para activar la animación antes, compensando el scroll rápido.

### 3. Componentes Reutilizables (`WebProductCard`)
Las tarjetas implementan el efecto de entrada automáticamente:
-   **Lógica Espejo:** El contenido entra desde el lado opuesto a la posición de la imagen para crear equilibrio visual.
-   **Trigger:** Activado por visibilidad real usando `whileInView` de Framer Motion.

## Technical Implementation

We use **Framer Motion** for complex state transitions and mounting/unmounting animations.

### Wrapper Example
```tsx
import { motion } from 'framer-motion';

<motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -10 }}
    transition={{ duration: 0.35 }}
>
    {/* Page Content */}
</motion.div>
```

### Usage
To activate sequential page transitions, `App.tsx` wraps routes in `<AnimatePresence mode="wait">`. Pages then implement their own `motion.div` wrappers to define how they enter or exit.
