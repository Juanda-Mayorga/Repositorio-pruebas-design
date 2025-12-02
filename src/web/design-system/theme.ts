import { createTheme } from '@mui/material';
import { getTheme } from '../../platform/design-system/theme/theme';
import type { PaletteMode } from '@mui/material';

export const getWebTheme = (mode: PaletteMode) => {
    const baseTheme = getTheme(mode);

    return createTheme(baseTheme, {
        typography: {
            h1: {
                background: 'linear-gradient(to right, #9989EC, #6E659F, #333337)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                // Ensure we keep the font properties from the base theme if createTheme doesn't merge deep enough for specific keys, 
                // but MUI createTheme usually handles deep merge well. 
                // However, to be safe and explicit about the override:
                fontFamily: '"Inter", "Hind Siliguri", sans-serif',
                fontWeight: 500,
            },
            h2: {
                fontFamily: '"Inter", "Hind Siliguri", sans-serif',
                fontWeight: 500, // Medium
                color: '#5C528E',
                lineHeight: 1.3,
                fontSize: '24px', // xs
                '@media (min-width:600px)': {
                    fontSize: '28px', // sm
                },
                '@media (min-width:960px)': {
                    fontSize: '32px', // md
                },
                '@media (min-width:1280px)': {
                    fontSize: '36px', // lg
                },
                '@media (min-width:1920px)': {
                    fontSize: '40px', // xl
                },
            }
        }
    });
};
