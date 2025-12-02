# Web Design System

This directory contains the design system for the web application (public-facing pages like Landing, Resources, and Contact).

## Structure

The design system follows the Atomic Design methodology:

```
web/design-system/
├── atoms/          # Basic building blocks (currently empty, ready for future components)
├── molecules/      # Simple combinations of atoms
├── organisms/      # Complex UI components
├── theme.ts        # MUI theme configuration with web-specific tokens
├── TOKENS.md       # Design tokens documentation
└── typography.md   # Typography system documentation
```

## Atoms

### [WebButton](file:///Users/carolinadomenechreal/Desktop/Prueba/Repositorio-pruebas-design/src/web/design-system/atoms/WebButton.tsx)

A reusable button component for web pages with consistent styling.

**Props:**
- `variant?: 'outlined' | 'contained' | 'soft'` - Button style variant (default: 'outlined')
- `fullWidth?: boolean` - Whether button should take full width
- `children: React.ReactNode` - Button content
- `onClick?: () => void` - Click handler
- All standard MUI Button props

**Features:**
- Consistent typography (Hind Siliguri, weight 600)
- Theme-based colors from `theme.palette.web.action.*`
- No text transform
- Padding y: 1.5
- Variant-specific hover states

**Usage:**
```tsx
<WebButton variant="outlined" fullWidth>
  Click Me
</WebButton>

<WebButton variant="contained">
  Submit
</WebButton>

<WebButton variant="soft">
  <Icon />
</WebButton>
```

## Molecules

### [ContentCard](file:///Users/carolinadomenechreal/Desktop/Prueba/Repositorio-pruebas-design/src/web/design-system/molecules/ContentCard.tsx)

A versatile card component with two variants:

**Props:**
- `title: string` - Card title
- `description: string` - Card description text
- `borderTopColor?: string` - Top border color (resources variant only)
- `variant?: 'resources' | 'contact'` - Card style variant (default: 'resources')
- `children: React.ReactNode` - Action buttons or other content

**Variants:**
- **Resources**: Border-top with color, h3 title, themed text colors
- **Contact**: No border-top, h2 title, static shadow, min-height 280px

**Features:**
- Hover animation (scale + shadow) on both variants
- Responsive typography
- Theme-based colors

**Usage:**
```tsx
// Resources variant
<ContentCard
  title="Card Title"
  description="Card description"
  borderTopColor={theme.palette.web.border.primary}
  variant="resources"
>
  <Button>Action</Button>
</ContentCard>

// Contact variant
<ContentCard
  title="Card Title"
  description="Card description"
  variant="contact"
>
  <Button>Action</Button>
</ContentCard>
```

## Organisms

### [PublicHeader](file:///Users/carolinadomenechreal/Desktop/Prueba/Repositorio-pruebas-design/src/web/design-system/organisms/PublicHeader.tsx)

Navigation header for public pages with logo, menu items, and login button.

### [Footer](file:///Users/carolinadomenechreal/Desktop/Prueba/Repositorio-pruebas-design/src/web/design-system/organisms/Footer.tsx)

Footer component for public pages.

## Theme

See [theme.ts](file:///Users/carolinadomenechreal/Desktop/Prueba/Repositorio-pruebas-design/src/web/design-system/theme.ts) for the complete theme configuration.

The web theme extends the base platform theme with:
- **Custom palette**: `theme.palette.web.*` for web-specific colors
- **Typography overrides**: H1 with gradient, H2 with custom styling
- **Responsive breakpoints**: xs (0), sm (600), md (960), lg (1280), xl (1920)

## Design Tokens

See [TOKENS.md](file:///Users/carolinadomenechreal/Desktop/Prueba/Repositorio-pruebas-design/src/web/design-system/TOKENS.md) for the complete design tokens documentation, including:
- Colors (backgrounds, text, borders, actions)
- Gradients
- Shadows
- Typography tokens
- Layout & Grid tokens

## Typography

See [typography.md](file:///Users/carolinadomenechreal/Desktop/Prueba/Repositorio-pruebas-design/src/web/design-system/typography.md) for typography guidelines and usage.

## Usage

Import components from their respective directories:

```tsx
import { WebButton } from '@/web/design-system/atoms/WebButton';
import { ContentCard } from '@/web/design-system/molecules/ContentCard';
import { PublicHeader } from '@/web/design-system/organisms/PublicHeader';
import { Footer } from '@/web/design-system/organisms/Footer';
import { useTheme } from '@mui/material';

function MyPage() {
  const theme = useTheme();
  
  return (
    <>
      <PublicHeader />
      <ContentCard
        title="Example"
        description="Description"
        borderTopColor={theme.palette.web.border.primary}
      >
        <WebButton variant="outlined" fullWidth>
          Action
        </WebButton>
      </ContentCard>
      <Footer />
    </>
  );
}
```

## Theme Context

The web theme is provided via `WebThemeProvider`:

```tsx
import { WebThemeProvider } from '@/web/design-system/WebThemeContext';

<WebThemeProvider>
  <YourWebPage />
</WebThemeProvider>
```

This is already configured in `App.tsx` for all web routes.
