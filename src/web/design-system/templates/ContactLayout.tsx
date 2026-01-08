import React from 'react';
import { useTheme } from '@mui/material';
import { MainLayout } from './MainLayout';

interface ContactLayoutProps {
    children: React.ReactNode;
}

export const ContactLayout: React.FC<ContactLayoutProps> = ({ children }) => {
    const theme = useTheme();

    return (
        <MainLayout
            mainSx={{
                pt: theme.webLayout.headerSpacing,
                pb: 8
            }}
        >
            {children}
        </MainLayout>
    );
};
