# Sistema de Diseño - Tipografía Web

> **Contexto:** Páginas web públicas (`/src/web`)

Este documento define el sistema de tipografía para las páginas web públicas de MAMBA.

## Familias Tipográficas

### Inter
- **Uso:** Títulos principales, encabezados de secciones web
- **Pesos:** Medium (500), SemiBold (600)
- **Características:** Moderna, legible, optimizada para pantallas

### Hind Siliguri
- **Uso:** Textos de cuerpo, subtítulos, interfaz de plataforma
- **Pesos:** Regular (400), Medium (500), SemiBold (600)
- **Características:** Versátil, excelente legibilidad

---

## Escala Tipográfica Web

### Hero Title (h1)
**Uso:** Títulos principales de landing pages y secciones hero

| Propiedad | Valor |
|-----------|-------|
| Font Family | Inter |
| Font Weight | 500 (Medium) |
| Letter Spacing | 0 |
| Line Height | 1.2 |

**Tamaños Responsive:**
- Mobile (< 600px): **32px**
- Tablet (600-959px): **40px**
- Laptop (960-1279px): **48px**
- Desktop (1280-1919px): **56px**
- Large Desktop (≥ 1920px): **64px**

**Ejemplo de uso:**
```tsx
<Typography variant="h1">
  Learn, connect and solve faster
</Typography>
```

---

### Section Title (h2)
**Uso:** Títulos de secciones principales

| Propiedad | Valor |
|-----------|-------|
| Font Family | Inter |
| Font Weight | 600 (SemiBold) |
| Line Height | 1.3 |

**Tamaños Responsive:**
- Mobile: **28px**
- Tablet: **32px**
- Laptop: **36px**
- Desktop: **40px**
- Large Desktop: **48px**

---

### Subsection Title (h3)
**Uso:** Subtítulos de secciones

| Propiedad | Valor |
|-----------|-------|
| Font Family | Inter |
| Font Weight | 600 (SemiBold) |
| Line Height | 1.4 |

**Tamaños Responsive:**
- Mobile: **20px**
- Tablet: **24px**
- Laptop: **28px**
- Desktop: **32px**
- Large Desktop: **36px**

---

## Notas de Implementación

### Responsive Strategy
Todos los tamaños de fuente escalan proporcionalmente según el breakpoint, asegurando legibilidad óptima en todos los dispositivos.

### Gradientes en Texto
Para títulos con gradiente (como en hero sections), aplicar:
```tsx
sx={{
  background: 'linear-gradient(135deg, #9989EC 0%, #6E659F 50%, #333337 100%)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
}}
```

---

## Breakpoints de Referencia

| Nombre | Valor | Dispositivo Típico |
|--------|-------|-------------------|
| xs | 0px | Mobile Portrait |
| sm | 600px | Mobile Landscape / Tablet Portrait |
| md | 960px | Tablet Landscape / Laptop |
| lg | 1280px | Desktop |
| xl | 1920px | Large Desktop |
