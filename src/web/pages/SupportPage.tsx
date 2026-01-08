import { Typography, Container } from '@mui/material';
import { MainLayout } from '../design-system/templates/MainLayout';

export const SupportPage = () => {
    return (
        <MainLayout sx={{ bgcolor: '#FFFFFF' }} mainSx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Container maxWidth="lg" sx={{ textAlign: 'center' }}>
                <Typography variant="h1" component="h1" sx={{ mb: 2 }}>
                    Support
                </Typography>
                <Typography variant="h5" color="text.secondary">
                    Continuous assistance, rapid incident resolution, and expert support through every phase of the project
                </Typography>
            </Container>
        </MainLayout>
    );
};
