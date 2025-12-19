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
                xs?: string;
                sm?: string;
                md?: string;
                lg?: string;
                xl?: string;
            };
        };
    }
}

export const getWebTheme = (mode: PaletteMode) => {
    const baseTheme = getTheme(mode);

    return createTheme(baseTheme, {
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
                '@media (min-width:600px)': {
                    fontSize: '28px',
                },
                '@media (min-width:960px)': {
                    fontSize: '32px',
                },
                '@media (min-width:1280px)': {
                    fontSize: '36px',
                },
                '@media (min-width:1920px)': {
                    fontSize: '40px',
                },
            },
            subtitle1: {
                fontFamily: '"Hind Siliguri", "Inter", sans-serif',
                fontWeight: 400,
                color: '#7A6EBD', // text.secondary
                fontSize: '16px', // Default (mobile)
                '@media (min-width:1200px)': { // lg breakpoint
                    fontSize: '20px',
                },
            }
        }
    });
};
