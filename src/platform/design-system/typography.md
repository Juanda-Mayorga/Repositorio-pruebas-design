# Sistema de Diseño - Tipografía Plataforma

> **Contexto:** Aplicación de plataforma (`/src/platform`)

Este documento define el sistema de tipografía para la aplicación interna de MAMBA, incluyendo breakpoints responsive, familias tipográficas, tamaños y estilos especiales.

## Breakpoints
The system uses 5 breakpoints for responsive design:

| Breakpoint | Size | Device |
|------------|------|--------|
| `xs` | 0px - 599px | Mobile (small) |
| `sm` | 600px - 959px | Mobile (large) / Tablet (small) |
| `md` | 960px - 1279px | Tablet (large) / Desktop (small) |
| `lg` | 1280px - 1919px | Desktop (medium) |
| `xl` | 1920px+ | Desktop (large) |

## Font Families

### Primary: Inter
- **Usage**: Website titles, headings, and marketing content
- **Weights**: 400 (Regular), 500 (Medium), 600 (SemiBold), 700 (Bold)

### Secondary: Hind Siliguri
- **Usage**: Platform UI, body text, and general content
- **Weights**: 400 (Regular), 500 (Medium), 600 (SemiBold)

## Typography Scale

### Website Titles (Inter)

#### Hero Title (h1)
- **Font**: Inter
- **Size**: 64px (xl), 56px (lg), 48px (md), 40px (sm), 32px (xs)
- **Weight**: 500 (Medium)
- **Line Height**: 1.2
- **Special**: Gradient text (#9989EC → #6E659F → #333337)

#### Section Title (h2)
- **Font**: Inter
- **Size**: 48px (xl), 40px (lg), 36px (md), 32px (sm), 28px (xs)
- **Weight**: 600 (SemiBold)
- **Line Height**: 1.3

#### Subsection Title (h3)
- **Font**: Inter
- **Size**: 36px (xl), 32px (lg), 28px (md), 24px (sm), 20px (xs)
- **Weight**: 600 (SemiBold)
- **Line Height**: 1.4

### Platform Headings (Hind Siliguri)

#### Page Title (h4)
- **Font**: Hind Siliguri
- **Size**: 32px (xl), 28px (lg), 24px (md), 20px (sm), 18px (xs)
- **Weight**: 600 (SemiBold)
- **Line Height**: 1.4

#### Card Title (h5)
- **Font**: Hind Siliguri
- **Size**: 24px (xl), 22px (lg), 20px (md), 18px (sm), 16px (xs)
- **Weight**: 600 (SemiBold)
- **Line Height**: 1.5

#### Component Title (h6)
- **Font**: Hind Siliguri
- **Size**: 20px (xl), 18px (lg), 16px (md), 14px (sm), 14px (xs)
- **Weight**: 600 (SemiBold)
- **Line Height**: 1.5

### Body Text

#### Large Body
- **Font**: Hind Siliguri
- **Size**: 18px (xl), 16px (lg-md), 14px (sm-xs)
- **Weight**: 400 (Regular)
- **Line Height**: 1.6

#### Regular Body
- **Font**: Hind Siliguri
- **Size**: 16px (xl-lg), 14px (md-sm), 12px (xs)
- **Weight**: 400 (Regular)
- **Line Height**: 1.6

#### Small Body
- **Font**: Hind Siliguri
- **Size**: 14px (xl-lg), 12px (md-xs)
- **Weight**: 400 (Regular)
- **Line Height**: 1.5

## Special Styles

### Gradient Title
Used for main website titles (e.g., Resources page hero).

**CSS Implementation:**
```css
background: linear-gradient(135deg, #9989EC 0%, #6E659F 50%, #333337 100%);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
background-clip: text;
```

**MUI sx prop:**
```typescript
sx={{
  fontFamily: 'Inter',
  fontSize: { xs: '32px', sm: '40px', md: '48px', lg: '56px', xl: '64px' },
  fontWeight: 500,
  background: 'linear-gradient(135deg, #9989EC 0%, #6E659F 50%, #333337 100%)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
}}
```

## Usage Guidelines

1. **Website pages** (Landing, Resources): Use Inter for titles and Hind Siliguri for body text
2. **Platform pages** (Subscription, Profile): Use Hind Siliguri for all text
3. **Gradient titles**: Apply only to main hero titles on website pages
4. **Responsive**: Always use breakpoint-based sizing for better mobile experience
5. **Consistency**: Stick to the defined scale to maintain visual hierarchy
