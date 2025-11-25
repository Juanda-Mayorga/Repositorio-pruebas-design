import { createTheme } from '@mui/material';
import type { PaletteMode } from '@mui/material';

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
