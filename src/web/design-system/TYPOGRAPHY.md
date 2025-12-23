# Sistema de Diseño - Tipografía Web

> **Contexto:** Páginas web públicas (`/src/web`)

Este documento define el sistema de tipografía para las páginas web públicas de MAMBA.

## Breakpoints del Sistema Web

Se han redefinido los breakpoints del sistema web para alinearse con los requisitos específicos del diseño:

> **Nota:** Se incluye `xxs` para cubrir dispositivos menores a 375px, manteniendo `xs` en el valor solicitado de 375px.

| Nombre | Valor | Dispositivo Típico |
|--------|-------|-------------------|
| **xxs** | 0px | Dispositivos muy pequeños |
| **xs** | 375px | Mobile Standard |
| **sm** | 744px | Tablet Portrait |
| **md** | 1133px | Tablet Landscape / Small Laptop |
| **lg** | 1440px | Desktop Standard |
| **xl** | 1920px | Large Desktop |

---

## Familias Tipográficas

### Inter
- **Uso:** Títulos principales, encabezados de secciones, títulos de tarjetas
- **Pesos:** Medium (500), SemiBold (600)
- **Características:** Moderna, legible, optimizada para pantallas

### Hind Siliguri
- **Uso:** Textos de cuerpo, descripciones de tarjetas, subtítulos
- **Pesos:** Regular (400), Medium (500), SemiBold (600)
- **Características:** Versátil, excelente legibilidad

---

## Escala Tipográfica Web

### Titulares Generales

#### Hero Title (h1)
**Uso:** Títulos principales de landing pages y secciones hero.
*Font: Inter (Medium)*

#### Section Title (h2)
**Uso:** Títulos de secciones principales.
*Font: Inter (Medium)*

#### Subsection Title (h3)
**Uso:** Subtítulos de secciones.
*Font: Inter (Medium)*

---

### Tipografía de Tarjetas (Cards)

Estas variantes están estandarizadas y se aplican automáticamente a `WebResourceCard`, `WebProductCard` y `WebContactCard`.

#### Card Title (`variant="cardTitle"`)
**Uso:** Título principal dentro de una tarjeta.

| Propiedad | Valor |
|-----------|-------|
| Font Family | Inter |
| Font Weight | 400 (Regular) |
| Line Height | 1.2 |

**Tamaños Responsive:**
- **xs (375px - 743px):** 28px
- **sm (744px - 1132px):** 28px
- **md (1133px - 1439px):** 28px
- **lg (1440px - 1919px):** 36px
- **xl (≥ 1920px):** 40px

#### Card Description (`variant="cardDescription"`)
**Uso:** Texto descriptivo o cuerpo dentro de una tarjeta.

| Propiedad | Valor |
|-----------|-------|
| Font Family | Hind Siliguri |
| Font Weight | 400 (Regular) |
| Line Height | 1.5 |

**Tamaños Responsive:**
- **xs (375px - 743px):** 16px
- **sm (744px - 1132px):** 16px
- **md (1133px - 1439px):** 18px
- **lg (1440px - 1919px):** 18px
- **xl (≥ 1920px):** 18px

---

## Implementación

Para utilizar estos estilos en nuevos componentes, usa las variantes personalizadas del componente `Typography`:

```tsx
<Typography variant="cardTitle">
  Título de la tarjeta
</Typography>

<Typography variant="cardDescription">
  Descripción detallada de la tarjeta...
</Typography>
```
