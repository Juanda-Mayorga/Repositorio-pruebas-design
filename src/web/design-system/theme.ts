import { createTheme } from '@mui/material';
import { getTheme } from '../../platform/design-system/theme/theme';
import type { PaletteMode } from '@mui/material';

// Extend MUI theme to include web-specific color tokens
declare module '@mui/material/styles' {
    interface Palette {
        web: {
            background: {
                default: string;
                paper: string;
            };
            text: {
                secondary: string;
                body: string;
            };
            border: {
                primary: string;
                secondary: string;
            };
            action: {
                primary: string;
                primaryHover: string;
            };
        };
    }
    interface PaletteOptions {
        web?: {
            background?: {
                default?: string;
                paper?: string;
            };
            text?: {
                secondary?: string;
                body?: string;
            };
            border?: {
                primary?: string;
                secondary?: string;
            };
            action?: {
                primary?: string;
                primaryHover?: string;
            };
        };
    }
    interface Theme {
        webLayout: {
            headerSpacing: {
                xxs: string;
                xs: string;
                sm: string;
                md: string;
                lg: string;
                xl: string;
            };
        };
    }
    interface ThemeOptions {
        webLayout?: {
            headerSpacing?: {
                xxs?: string;
                xs?: string;
                sm?: string;
                md?: string;
                lg?: string;
                xl?: string;
            };
        };
    }

    interface BreakpointOverrides {
        xxs: true;
        xs: true;
        sm: true;
        md: true;
        lg: true;
        xl: true;
    }

    interface TypographyVariants {
        cardTitle: React.CSSProperties;
        cardDescription: React.CSSProperties;
    }

    interface TypographyVariantsOptions {
        cardTitle?: React.CSSProperties;
        cardDescription?: React.CSSProperties;
    }
}

declare module '@mui/material/Typography' {
    interface TypographyPropsVariantOverrides {
        cardTitle: true;
        cardDescription: true;
    }
}

export const getWebTheme = (mode: PaletteMode) => {
    const baseTheme = getTheme(mode);

    return createTheme(baseTheme, {
        breakpoints: {
            values: {
                xxs: 0,
                xs: 375,
                sm: 744,
                md: 1133,
                lg: 1440,
                xl: 1920,
            },
        },
        palette: {
            web: {
                background: {
                    default: '#FCFCFC',
                    paper: '#F3F4F6',
                },
                text: {
                    secondary: '#7A6EBD',
                    body: '#797979',
                },
                border: {
                    primary: '#736D8D',
                    secondary: '#FDD550',
                },
                action: {
                    primary: '#7A6EBD',
                    primaryHover: '#6B5EA9', // Slightly darker for hover
                },
            },
        },
        webLayout: {
            headerSpacing: {
                xxs: '14px',
                xs: '14px',
                sm: '28px',
                md: '42px',
                lg: '54px',
                xl: '72px',
            },
        },
        typography: {
            h1: {
                background: 'linear-gradient(to right, #9989EC, #6E659F, #333337)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                fontFamily: '"Inter", "Hind Siliguri", sans-serif',
                fontWeight: 500,
            },
            h2: {
                fontFamily: '"Inter", "Hind Siliguri", sans-serif',
                fontWeight: 500,
                color: '#7A6EBD',
                lineHeight: 1.3,
                fontSize: '24px',
                '@media (min-width:744px)': { // sm
                    fontSize: '28px',
                },
                '@media (min-width:1133px)': { // md
                    fontSize: '32px',
                },
                '@media (min-width:1440px)': { // lg
                    fontSize: '36px',
                },
                '@media (min-width:1920px)': { // xl
                    fontSize: '40px',
                },
            },
            subtitle1: {
                fontFamily: '"Hind Siliguri", "Inter", sans-serif',
                fontWeight: 400,
                color: '#7A6EBD', // text.secondary
                fontSize: '16px', // Default (xxs/xs)
                '@media (min-width:1440px)': { // lg breakpoint
                    fontSize: '20px',
                },
            },
            cardTitle: {
                fontFamily: '"Inter", sans-serif',
                fontWeight: 400,
                lineHeight: 1.2,
                color: '#7A6EBD', // Standardized color for all card titles
                fontSize: '24px', // xxs/xs
                '@media (min-width:744px)': { // sm
                    fontSize: '28px',
                },
                '@media (min-width:1133px)': { // md
                    fontSize: '28px',
                },
                '@media (min-width:1440px)': { // lg
                    fontSize: '36px',
                },
                '@media (min-width:1920px)': { // xl
                    fontSize: '40px',
                },
            },
            cardDescription: {
                fontFamily: '"Hind Siliguri", sans-serif',
                fontWeight: 400,
                lineHeight: 1.5,
                fontSize: '16px', // xxs/xs/sm: 0-1132px
                '@media (min-width:1133px)': { // md
                    fontSize: '18px',
                },
                '@media (min-width:1440px)': { // lg
                    fontSize: '18px',
                },
                '@media (min-width:1920px)': { // xl
                    fontSize: '18px',
                },
            },
        }
    });
};
