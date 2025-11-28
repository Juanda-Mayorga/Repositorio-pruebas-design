import { Box, Typography, Container, Button, Card, CardContent } from '@mui/material';
import { PublicHeader } from '../design-system/organisms/PublicHeader';
import { Footer } from '../design-system/organisms/Footer';

export const ContactPage = () => {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', bgcolor: '#FFFFFF' }}>
            <PublicHeader />

            <Box component="main" sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', py: 8 }}>
                <Container maxWidth="lg">
                    {/* Header Section */}
                    <Box sx={{ textAlign: 'center', mb: 6 }}>
                        <Typography
                            variant="h2"
                            component="h1"
                            fontWeight="bold"
                            sx={{ color: '#6366F1', mb: 2 }}
                        >
                            Let's talk
                        </Typography>
                        <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 600, mx: 'auto' }}>
                            Whether you want to explore the product with our team or see it in action, we've got you covered
                        </Typography>
                    </Box>

                    {/* Cards Section */}
                    <Box sx={{ position: 'relative', maxWidth: 900, mx: 'auto' }}>
                        {/* Decorative Yellow Background Shapes */}
                        <Box
                            sx={{
                                position: 'absolute',
                                left: -50,
                                top: '50%',
                                transform: 'translateY(-50%)',
                                width: 300,
                                height: 300,
                                bgcolor: '#FDE68A',
                                borderRadius: '50% 0% 50% 50%',
                                opacity: 0.6,
                                zIndex: 0
                            }}
                        />
                        <Box
                            sx={{
                                position: 'absolute',
                                right: -30,
                                top: '20%',
                                width: 200,
                                height: 200,
                                bgcolor: '#FDE68A',
                                borderRadius: '50%',
                                opacity: 0.4,
                                zIndex: 0
                            }}
                        />

                        {/* Cards Grid */}
                        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 4, position: 'relative', zIndex: 1 }}>
                            {/* Talk to Sales Card */}
                            <Card
                                sx={{
                                    p: 3,
                                    borderRadius: 2,
                                    boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'space-between',
                                    minHeight: 280
                                }}
                            >
                                <CardContent sx={{ p: 0 }}>
                                    <Typography variant="h5" fontWeight="bold" color="text.primary" gutterBottom>
                                        Talk to Sales
                                    </Typography>
                                    <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
                                        Get in touch with our team to discuss your needs and discover how MAMBA can help your business
                                    </Typography>
                                </CardContent>
                                <Button
                                    variant="outlined"
                                    fullWidth
                                    sx={{
                                        textTransform: 'none',
                                        fontWeight: 600,
                                        borderColor: '#6366F1',
                                        color: '#6366F1',
                                        py: 1.5,
                                        '&:hover': {
                                            borderColor: '#4F46E5',
                                            bgcolor: 'rgba(99, 102, 241, 0.04)'
                                        }
                                    }}
                                >
                                    Contact Sales
                                </Button>
                            </Card>

                            {/* Book a Demo Card */}
                            <Card
                                sx={{
                                    p: 3,
                                    borderRadius: 2,
                                    boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'space-between',
                                    minHeight: 280
                                }}
                            >
                                <CardContent sx={{ p: 0 }}>
                                    <Typography variant="h5" fontWeight="bold" color="text.primary" gutterBottom>
                                        Book a Demo
                                    </Typography>
                                    <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
                                        See MAMBA in action with a personalized demo tailored to your workflow
                                    </Typography>
                                </CardContent>
                                <Button
                                    variant="contained"
                                    fullWidth
                                    sx={{
                                        textTransform: 'none',
                                        fontWeight: 600,
                                        bgcolor: '#6366F1',
                                        py: 1.5,
                                        '&:hover': {
                                            bgcolor: '#4F46E5'
                                        }
                                    }}
                                >
                                    Book a Demo
                                </Button>
                            </Card>
                        </Box>
                    </Box>
                </Container>
            </Box>

            <Footer />
        </Box>
    );
};
