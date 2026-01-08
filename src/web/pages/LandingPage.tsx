import { Typography, Container } from '@mui/material';
import { MainLayout } from '../design-system/templates/MainLayout';

export const LandingPage = () => {
    return (
        <MainLayout sx={{ bgcolor: '#FFFFFF' }} mainSx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Container maxWidth="lg" sx={{ textAlign: 'center' }}>
                <Typography variant="h1" component="h1" sx={{ mb: 2 }}>
                    Landing Page
                </Typography>
                <Typography variant="h5" color="text.secondary">
                    Welcome to MAMBA
                </Typography>
            </Container>
        </MainLayout>
    );
};
