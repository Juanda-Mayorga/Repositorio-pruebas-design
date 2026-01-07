import { Box, Typography, Container } from '@mui/material';
import { PublicHeader } from '../design-system/organisms/PublicHeader';
import { Footer } from '../design-system/organisms/Footer';

export const SupportPage = () => {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', bgcolor: '#FFFFFF' }}>
            <PublicHeader />

            <Box component="main" sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Container maxWidth="lg" sx={{ textAlign: 'center' }}>
                    <Typography variant="h1" component="h1" sx={{ mb: 2 }}>
                        Support
                    </Typography>
                    <Typography variant="h5" color="text.secondary">
                        Continuous assistance, rapid incident resolution, and expert support through every phase of the project
                    </Typography>
                </Container>
            </Box>

            <Footer />
        </Box>
    );
};
