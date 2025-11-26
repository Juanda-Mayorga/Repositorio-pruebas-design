import React from 'react';
import { Box } from '@mui/material';
import { Sidebar } from '../organisms/Sidebar';
import { Header } from '../organisms/Header';

export const MainLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh', overflow: 'hidden' }}>
            {/* Header at top, full width */}
            <Header />

            {/* Sidebar and main content side by side */}
            <Box sx={{ display: 'flex', flexGrow: 1, overflow: 'hidden' }}>
                <Sidebar />
                <Box component="main" sx={{ flexGrow: 1, p: 4, overflow: 'auto', bgcolor: '#FCFCFC', color: 'text.primary' }}>
                    {children}
                </Box>
            </Box>
        </Box>
    );
};
