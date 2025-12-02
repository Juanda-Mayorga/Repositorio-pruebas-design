# Web Design System Tokens

This document outlines the specific design tokens used in the Web application, following a semantic naming convention.

## Colors

> **Note**: All colors are defined in `theme.ts` and accessible via `theme.palette.web.*`

### Brand
| Token Name | Value | Usage |
| :--- | :--- | :--- |
| `theme.palette.web.primary.main` | `#9989EC` | Main brand color (Purple) |
| `theme.palette.web.secondary.main` | `#6E659F` | Secondary brand color (Darker Purple) |
| `theme.palette.web.accent.dark` | `#333337` | Dark accent color |

### Text
| Token Name | Value | Usage |
| :--- | :--- | :--- |
| `theme.palette.web.text.secondary` | `#5C528E` | Subtitles and H2/H3 text color |
| `theme.palette.web.text.body` | `#797979` | Body text color |

### Backgrounds & Borders
| Token Name | Value | Usage |
| :--- | :--- | :--- |
| `theme.palette.web.background.default` | `#FCFCFC` | Main page background |
| `theme.palette.web.background.paper` | `#F3F4F6` | Container/Section background |
| `theme.palette.web.border.primary` | `#736D8D` | Primary border color (Purple) |
| `theme.palette.web.border.secondary` | `#FDD550` | Secondary border color (Yellow) |

### Actions
| Token Name | Value | Usage |
| :--- | :--- | :--- |
| `theme.palette.web.action.primary` | `#8A7BD4` | Primary action color (mambaPrimary.main) |
| `theme.palette.web.action.primaryHover` | `#7367B1` | Primary action hover state (mambaPrimary.dark) |

## Gradients

| Token Name | Value | Description |
| :--- | :--- | :--- |
| `gradient.text.primary` | `linear-gradient(to right, #9989EC, #6E659F, #333337)` | Main H1 text gradient |

## Shadows

| Token Name | Value | Description |
| :--- | :--- | :--- |
| `shadow.card.default` | `0 4px 12px rgba(0,0,0,0.08)` | Default card shadow |
| `shadow.card.hover` | `0 12px 24px rgba(0,0,0,0.15)` | Card shadow on hover |

## Typography

### H1 (Main Heading)
| Token Name | Value |
| :--- | :--- |
| `typography.h1.fontFamily` | `"Inter", "Hind Siliguri", sans-serif` |
| `typography.h1.fontWeight` | `500` |
| `typography.h1.background` | `gradient.text.primary` |

### H2 (Section Heading)
| Token Name | Value |
| :--- | :--- |
| `typography.h2.fontFamily` | `"Inter", "Hind Siliguri", sans-serif` |
| `typography.h2.fontWeight` | `500` |
| `typography.h2.color` | `color.text.secondary` |
| `typography.h2.fontSize.xs` | `24px` |
| `typography.h2.fontSize.xl` | `40px` |

## Transitions

| Token Name | Value | Description |
| :--- | :--- | :--- |
| `transition.default` | `all 0.3s ease-out` | Standard transition |
| `transform.scale.hover` | `scale(1.02)` | Card hover scale effect |

## Layout & Grid

### Breakpoints
| Token Name | Value | Description |
| :--- | :--- | :--- |
| `layout.breakpoint.xs` | `0px` | Extra small devices (phones) |
| `layout.breakpoint.sm` | `600px` | Small devices (tablets) |
| `layout.breakpoint.md` | `960px` | Medium devices (small laptops) |
| `layout.breakpoint.lg` | `1280px` | Large devices (desktops) |
| `layout.breakpoint.xl` | `1920px` | Extra large devices (large screens) |

### Containers
| Token Name | Value | Description |
| :--- | :--- | :--- |
| `layout.container.maxWidth` | `1280px` | Standard maximum width for content (lg) |
| `layout.container.padding` | `32px` | Standard horizontal padding (4 * 8px) |

### Spacing
| Token Name | Value | Description |
| :--- | :--- | :--- |
| `layout.spacing.base` | `8px` | Base unit for spacing (1 unit) |
| `layout.spacing.card` | `24px` | Standard padding inside cards (3 units) |
| `layout.spacing.section` | `64px` | Standard vertical padding for sections (8 units) |

### Grid
| Token Name | Value | Description |
| :--- | :--- | :--- |
| `layout.grid.gap.default` | `24px` | Standard gap between grid items (3 units) |
| `layout.grid.columns.default` | `12` | Standard grid column count |
