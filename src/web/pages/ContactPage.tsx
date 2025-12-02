import { Box, Typography, Container, Button, useTheme } from '@mui/material';
import { PublicHeader } from '../design-system/organisms/PublicHeader';
import { Footer } from '../design-system/organisms/Footer';
import { ContentCard } from '../design-system/organisms/ContentCard';

export const ContactPage = () => {
    const theme = useTheme();
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', bgcolor: theme.palette.web.background.default }}>
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
                            bgcolor: theme.palette.web.background.paper,
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
                                <ContentCard
                                    title="Talk to Sales"
                                    description="Get in touch with our team to discuss your needs and discover how MAMBA can help your business"
                                    variant="contact"
                                >
                                    <Button
                                        variant="outlined"
                                        fullWidth
                                        sx={{
                                            textTransform: 'none',
                                            fontWeight: 600,
                                            borderColor: theme.palette.web.action.primary,
                                            color: theme.palette.web.action.primary,
                                            py: 1.5,
                                            '&:hover': {
                                                borderColor: theme.palette.web.action.primaryHover,
                                                bgcolor: 'rgba(99, 102, 241, 0.04)'
                                            }
                                        }}
                                    >
                                        Contact Sales
                                    </Button>
                                </ContentCard>

                                {/* Book a Demo Card */}
                                <ContentCard
                                    title="Book a Demo"
                                    description="See MAMBA in action with a personalized demo tailored to your workflow"
                                    variant="contact"
                                >
                                    <Button
                                        variant="contained"
                                        fullWidth
                                        sx={{
                                            textTransform: 'none',
                                            fontWeight: 600,
                                            bgcolor: theme.palette.web.action.primary,
                                            py: 1.5,
                                            '&:hover': {
                                                bgcolor: theme.palette.web.action.primaryHover
                                            }
                                        }}
                                    >
                                        Book a Demo
                                    </Button>
                                </ContentCard>
                            </Box>
                        </Box>
                    </Container>
                </Container>
            </Box>

            <Footer />
        </Box>
    );
};
