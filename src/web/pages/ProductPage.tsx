import { Box, Typography, Container } from '@mui/material';
import { PublicHeader } from '../design-system/organisms/PublicHeader';
import { Footer } from '../design-system/organisms/Footer';

export const ProductPage = () => {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', bgcolor: '#FFFFFF' }}>
            <PublicHeader />

            <Box component="main" sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Container maxWidth="lg" sx={{ textAlign: 'center' }}>
                    <Typography variant="h2" component="h1" fontWeight="bold" color="text.primary" gutterBottom>
                        Product
                    </Typography>
                    <Typography variant="h5" color="text.secondary">
                        Automate BIM audits, measurements, and estimates with all-in-one software
                    </Typography>
                </Container>
            </Box>

            <Footer />
        </Box>
    );
};
