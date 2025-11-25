import React from 'react';
import { Box } from '@mui/material';
import { Sidebar } from '../organisms/Sidebar';
import { Header } from '../organisms/Header';

export const MainLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <Box sx={{ display: 'flex', height: '100vh', overflow: 'hidden' }}>
            <Sidebar />
            <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                <Header />
                <Box component="main" sx={{ flexGrow: 1, p: 4, overflow: 'auto', bgcolor: 'background.default', color: 'text.primary' }}>
                    {children}
                </Box>
            </Box>
        </Box>
    );
};
