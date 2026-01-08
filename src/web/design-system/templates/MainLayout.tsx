import type { ReactNode } from 'react';
import { Box, useTheme, type SxProps, type Theme } from '@mui/material';
import { PublicHeader } from '../organisms/PublicHeader';
import { Footer } from '../organisms/Footer';

export interface MainLayoutProps {
    children: ReactNode;
    sx?: SxProps<Theme>;
    mainSx?: SxProps<Theme>;
}

export const MainLayout = ({ children, sx, mainSx }: MainLayoutProps) => {
    const theme = useTheme();

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', bgcolor: theme.palette.web.background.default, ...sx }}>
            <PublicHeader />
            <Box component="main" sx={{ flexGrow: 1, mt: '64px', ...mainSx }}>
                {children}
            </Box>
            <Footer />
        </Box>
    );
};
