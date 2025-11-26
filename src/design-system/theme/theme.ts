import { createTheme } from '@mui/material';
import type { PaletteMode } from '@mui/material';

// Extend the Theme interface to include sidebar colors
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
}

export const getTheme = (mode: PaletteMode) => createTheme({
    palette: {
        mode,
        ...(mode === 'light'
            ? {
                // Light mode
                primary: {
                    main: '#5B4D9D',
                },
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
                primary: {
                    main: '#7C6FD8', // Lighter purple for dark mode
                },
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
    typography: {
        fontFamily: '"Hind Siliguri", "Inter", "Roboto", "Helvetica", "Arial", sans-serif',
        h1: {
            fontSize: '2rem',
            fontWeight: 600,
        },
        h2: {
            fontSize: '1.5rem',
            fontWeight: 600,
        },
        h3: {
            fontSize: '1.25rem',
            fontWeight: 600,
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: 'none',
                    borderRadius: '8px',
                },
            },
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    borderRadius: '12px',
                    boxShadow: mode === 'light' ? '0px 4px 20px rgba(0, 0, 0, 0.05)' : '0px 4px 20px rgba(0, 0, 0, 0.5)',
                },
            },
        },
    },
});
