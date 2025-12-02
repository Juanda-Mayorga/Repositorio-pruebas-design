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
                            variant="h1"
                            component="h1"
                            sx={{
                                mb: 2,
                                background: 'linear-gradient(to right, #9989EC, #6E659F, #333337)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                backgroundClip: 'text',
                                fontFamily: '"Inter", "Hind Siliguri", sans-serif',
                                fontWeight: 500,
                            }}
                        >
                            Let's talk
                        </Typography>
                        <Typography variant="h6" sx={{ color: 'text.secondary', maxWidth: 600, mx: 'auto', fontWeight: 'normal', fontFamily: 'Hind Siliguri' }}>
                            Whether you want to explore the product with our team or see it in action, we've got you covered
                        </Typography>
                    </Box>

                    {/* Cards Section */}
                    <Container maxWidth="lg" sx={{ mb: 8 }}>
                        <Box sx={{
                            bgcolor: '#F3F4F6',
                            borderRadius: 4,
                            p: 4,
                            position: 'relative',
                            overflow: 'hidden'
                        }}>
                            {/* Wave Background Image */}
                            <Box sx={{
                                position: 'absolute',
                                bottom: 0,
                                left: 0,
                                right: 0,
                                height: '100%',
                                backgroundImage: 'url(/src/assets/contact-wave-yellow.png)',
                                backgroundSize: 'cover',
                                backgroundPosition: 'center bottom',
                                backgroundRepeat: 'no-repeat',
                                opacity: 1,
                                zIndex: 0
                            }} />

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
                                        <Typography variant="h2" gutterBottom>
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
                                        <Typography variant="h2" gutterBottom>
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
                </Container>
            </Box>

            <Footer />
        </Box>
    );
};
