import React from 'react';
import { Box, useTheme } from '@mui/material';
import { PublicHeader } from '../organisms/PublicHeader';
import { Footer } from '../organisms/Footer';

interface ContactLayoutProps {
    children: React.ReactNode;
}

export const ContactLayout: React.FC<ContactLayoutProps> = ({ children }) => {
    const theme = useTheme();

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', bgcolor: theme.palette.web.background.default }}>
            <PublicHeader />

            <Box component="main" sx={{ flexGrow: 1, pt: theme.webLayout.headerSpacing, pb: 8, mt: '64px' }}>
                {children}
            </Box>

            <Footer />
        </Box>
    );
};
