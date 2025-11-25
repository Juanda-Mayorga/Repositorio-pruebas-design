import React, { createContext, useState, useMemo, useContext } from 'react';
import { ThemeProvider as MuiThemeProvider } from '@mui/material';
import type { PaletteMode } from '@mui/material';
import { getTheme } from './theme';

interface ThemeContextType {
    mode: PaletteMode;
    toggleColorMode: () => void;
}

const ThemeContext = createContext<ThemeContextType>({
    mode: 'light',
    toggleColorMode: () => { },
});

export const useColorMode = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
    const [mode, setMode] = useState<PaletteMode>('light');

    const colorMode = useMemo(
        () => ({
            mode,
            toggleColorMode: () => {
                setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
            },
        }),
        [mode]
    );

    const theme = useMemo(() => getTheme(mode), [mode]);

    return (
        <ThemeContext.Provider value={colorMode}>
            <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
        </ThemeContext.Provider>
    );
};
