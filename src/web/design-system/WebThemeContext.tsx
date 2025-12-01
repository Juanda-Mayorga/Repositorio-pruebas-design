import React, { createContext, useState, useMemo, useContext } from 'react';
import { ThemeProvider as MuiThemeProvider } from '@mui/material';
import type { PaletteMode } from '@mui/material';
import { getWebTheme } from './theme';

interface WebThemeContextType {
    mode: PaletteMode;
    toggleColorMode: () => void;
}

const WebThemeContext = createContext<WebThemeContextType>({
    mode: 'light',
    toggleColorMode: () => { },
});

export const useWebColorMode = () => useContext(WebThemeContext);

export const WebThemeProvider = ({ children }: { children: React.ReactNode }) => {
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

    const theme = useMemo(() => getWebTheme(mode), [mode]);

    return (
        <WebThemeContext.Provider value={colorMode}>
            <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
        </WebThemeContext.Provider>
    );
};
