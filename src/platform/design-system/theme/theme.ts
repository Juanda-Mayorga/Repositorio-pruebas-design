import { createTheme } from '@mui/material';
import type { PaletteMode } from '@mui/material';

// Extend the Theme interface to include sidebar colors and custom palette shades
declare module '@mui/material/styles' {
    interface Theme {
        sidebar: {
            default: {
                bg: string;
                text: string;
            };
            hover: {
                bg: string;
                text: string;
            };
            selected: {
                bg: string;
                text: string;
            };
            active: {
                bg: string;
                text: string;
            };
            disabled: {
                bg: string;
                text: string;
            };
        };
    }
    interface ThemeOptions {
        sidebar?: {
            default?: {
                bg?: string;
                text?: string;
            };
            hover?: {
                bg?: string;
                text?: string;
            };
            selected?: {
                bg?: string;
                text?: string;
            };
            active?: {
                bg?: string;
                text?: string;
            };
            disabled?: {
                bg?: string;
                text?: string;
            };
        };
    }

    interface PaletteColor {
        50: string;
        100: string;
        300: string;
        400: string;
        500: string;
        600: string;
        700: string;
        800: string;
        900: string;
        950: string;
    }

    interface SimplePaletteColorOptions {
        50?: string;
        100?: string;
        300?: string;
        400?: string;
        500?: string;
        600?: string;
        700?: string;
        800?: string;
        900?: string;
        950?: string;
    }
}

const mambaPrimary = {
    50: '#F5F3FD',
    100: '#EDEBFB',
    300: '#DFDAF9',
    400: '#B8B0E6',
    500: '#8A7BD4',
    600: '#7A6EBD',
    700: '#7367B1',
    800: '#5C528E',
    900: '#453E6A',
    950: '#363053',
    main: '#8A7BD4',
    light: '#B8B0E6',
    dark: '#7367B1',
    contrastText: '#FFFFFF',
};

export const getTheme = (mode: PaletteMode) => createTheme({
    palette: {
        mode,
        ...(mode === 'light'
            ? {
                // Light mode
                primary: mambaPrimary,
                secondary: {
                    main: '#F3F4F6',
                },
                background: {
                    default: '#FFFFFF',
                    paper: '#F9FAFB',
                },
                text: {
                    primary: '#1F2937',
                    secondary: '#6B7280',
                },
            }
            : {
                // Dark mode
                primary: mambaPrimary, // Using same scale for now, can be adjusted if needed
                secondary: {
                    main: '#374151',
                },
                background: {
                    default: '#121212',
                    paper: '#1E1E1E',
                },
                text: {
                    primary: '#F9FAFB',
                    secondary: '#9CA3AF',
                },
                divider: 'rgba(255, 255, 255, 0.12)',
            }),
    },
    sidebar: {
        default: {
            bg: '#FFFFFF',
            text: '#797D80',
        },
        hover: {
            bg: '#FFFFFF',
            text: '#7A6EBD',
        },
        selected: {
            bg: '#F5F3FD',
            text: '#7A6EBD',
        },
        active: {
            bg: '#DFDAF9',
            text: '#5C528E',
        },
        disabled: {
            bg: '#E0E0E0',
            text: '#6A6A6A',
        },
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 960,
            lg: 1280,
            xl: 1920,
        },
    },
    typography: {
        fontFamily: '"Hind Siliguri", "Inter", "Roboto", "Helvetica", "Arial", sans-serif',
        // Website Hero Title (Inter Medium)
        h1: {
            fontFamily: '"Inter", "Hind Siliguri", sans-serif',
            fontWeight: 500, // Medium
            lineHeight: 1.2,
            letterSpacing: 0,
            fontSize: '32px',
            '@media (min-width:600px)': {
                fontSize: '40px',
            },
            '@media (min-width:960px)': {
                fontSize: '48px',
            },
            '@media (min-width:1280px)': {
                fontSize: '56px',
            },
            '@media (min-width:1920px)': {
                fontSize: '64px',
            },
        },
        // Website Section Title (Inter)
        h2: {
            fontFamily: '"Inter", "Hind Siliguri", sans-serif',
            fontWeight: 600,
            lineHeight: 1.3,
            fontSize: '28px',
            '@media (min-width:600px)': {
                fontSize: '32px',
            },
            '@media (min-width:960px)': {
                fontSize: '36px',
            },
            '@media (min-width:1280px)': {
                fontSize: '40px',
            },
            '@media (min-width:1920px)': {
                fontSize: '48px',
            },
        },
        // Website Card Title (Inter Medium) - Used in Resources page cards
        h3: {
            fontFamily: '"Inter", "Hind Siliguri", sans-serif',
            fontWeight: 500, // Medium
            lineHeight: 1.4,
            fontSize: '18px', // xs: 375x812
            '@media (min-width:600px)': {
                fontSize: '20px', // sm: 744x1133
            },
            '@media (min-width:960px)': {
                fontSize: '24px', // md: 1133x744
            },
            '@media (min-width:1280px)': {
                fontSize: '28px', // lg: 1440x1024
            },
            '@media (min-width:1920px)': {
                fontSize: '32px', // xl: 1920x1080
            },
        },
        // Platform Page Title (Hind Siliguri)
        h4: {
            fontFamily: '"Hind Siliguri", sans-serif',
            fontWeight: 500,
            lineHeight: 1.4,
            fontSize: '24px', // Mobile base
            '@media (min-width:600px)': {
                fontSize: '26px',
            },
            '@media (min-width:960px)': {
                fontSize: '28px',
            },
            '@media (min-width:1280px)': {
                fontSize: '32px',
            },
        },
        // Platform Card Title (Hind Siliguri)
        h5: {
            fontFamily: '"Hind Siliguri", sans-serif',
            fontWeight: 600,
            lineHeight: 1.5,
            fontSize: '16px',
            '@media (min-width:600px)': {
                fontSize: '18px',
            },
            '@media (min-width:960px)': {
                fontSize: '20px',
            },
            '@media (min-width:1280px)': {
                fontSize: '22px',
            },
            '@media (min-width:1920px)': {
                fontSize: '24px',
            },
        },
        // Platform Component Title (Hind Siliguri)
        h6: {
            fontFamily: '"Hind Siliguri", sans-serif',
            fontWeight: 600,
            lineHeight: 1.5,
            fontSize: '14px',
            '@media (min-width:600px)': {
                fontSize: '14px',
            },
            '@media (min-width:960px)': {
                fontSize: '16px',
            },
            '@media (min-width:1280px)': {
                fontSize: '18px',
            },
            '@media (min-width:1920px)': {
                fontSize: '20px',
            },
        },
        // Body text variants
        body1: {
            fontFamily: '"Hind Siliguri", sans-serif',
            fontWeight: 400,
            lineHeight: 1.6,
            fontSize: '14px', // Mobile base
            '@media (min-width:960px)': {
                fontSize: '16px',
            },
        },
        body2: {
            fontFamily: '"Hind Siliguri", sans-serif',
            fontWeight: 400,
            lineHeight: 1.5,
            fontSize: '12px',
            '@media (min-width:960px)': {
                fontSize: '14px',
            },
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: 'none',
                    borderRadius: '4px',
                },
                containedPrimary: {
                    backgroundColor: mambaPrimary[500],
                    '&:hover': {
                        backgroundColor: mambaPrimary[600],
                    },
                    '&:active': {
                        backgroundColor: mambaPrimary[700],
                    },
                },
                outlinedPrimary: {
                    borderColor: mambaPrimary[300],
                    '&:hover': {
                        backgroundColor: mambaPrimary[50],
                        borderColor: mambaPrimary[400],
                    },
                },
                textPrimary: {
                    '&:hover': {
                        backgroundColor: mambaPrimary[100],
                    },
                },
            },
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    borderRadius: '4px',
                    boxShadow: mode === 'light' ? '0px 4px 20px rgba(0, 0, 0, 0.05)' : '0px 4px 20px rgba(0, 0, 0, 0.5)',
                },
            },
        },
        MuiOutlinedInput: {
            styleOverrides: {
                root: {
                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                        borderColor: mambaPrimary[700],
                    },
                },
            },
        },
    },
});
