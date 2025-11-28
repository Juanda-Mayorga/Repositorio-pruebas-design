import React, { useState } from 'react';
import { Box, Drawer } from '@mui/material';
import { Sidebar } from '../organisms/Sidebar';
import { Header } from '../organisms/Header';

const DRAWER_WIDTH = 280;

export const MainLayout = ({ children }: { children: React.ReactNode }) => {
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh', overflow: 'hidden' }}>
            {/* Header at top, full width */}
            <Header onDrawerToggle={handleDrawerToggle} />

            {/* Sidebar and main content side by side */}
            <Box sx={{ display: 'flex', flexGrow: 1, overflow: 'hidden', position: 'relative' }}>
                {/* Mobile Drawer */}
                <Drawer
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', md: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: DRAWER_WIDTH },
                    }}
                >
                    <Sidebar />
                </Drawer>

                {/* Desktop Sidebar */}
                <Box sx={{ display: { xs: 'none', md: 'block' } }}>
                    <Sidebar />
                </Box>

                <Box component="main" sx={{ flexGrow: 1, p: { xs: 2, md: 4 }, overflow: 'auto', bgcolor: '#FCFCFC', color: 'text.primary' }}>
                    {children}
                </Box>
            </Box>
        </Box>
    );
};
