import { Box, Container, Grid, Typography, useTheme } from '@mui/material';
import { PublicHeader } from '../design-system/organisms/PublicHeader';
import { Footer } from '../design-system/organisms/Footer';
import { WebButton } from '../design-system/atoms/WebButton';

export const ProductPage = () => {
    const theme = useTheme();

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', bgcolor: theme.palette.web.background.default }}>
            <PublicHeader />

            <Box component="main" sx={{ flexGrow: 1, mt: '64px' }}>
                {/* Page Header */}
                <Box sx={{ textAlign: 'center', pt: theme.webLayout.headerSpacing, pb: 6, px: 2 }}>
                    <Typography
                        variant="h1"
                        component="h1"
                        sx={{
                            mb: 2,
                            fontSize: { xs: '32px', lg: '56px' } // 56px at 1440px (lg)
                        }}
                    >
                        Product Features
                    </Typography>
                    <Typography
                        variant="subtitle1"
                        sx={{
                            color: 'text.secondary',
                            maxWidth: 600,
                            mx: 'auto',
                            textAlign: 'center',
                        }}
                    >
                        Each feature is designed to save you time, reduce errors, and scale your workflow
                    </Typography>
                </Box>

                <Container maxWidth="lg" sx={{ px: { xs: 2, md: 4 }, pb: 10 }}>
                    {/* Hero Section */}
                    <Box
                        sx={{
                            position: 'relative', // Context for absolute background
                            bgcolor: theme.palette.web.background.paper, // Light gray for consistency
                            borderRadius: '16px', // Matching design rounding
                            overflow: 'hidden',
                            mb: 12, // Spacing before next section
                            display: 'flex',
                            flexDirection: { xs: 'column', md: 'row' },
                            alignItems: 'center',
                        }}
                    >
                        {/* Background Image Layer */}
                        <Box sx={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            backgroundImage: 'url(/src/assets/product-hero-background.png)',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            zIndex: 0,
                            opacity: 0.1, // Reduced opacity for colored text legibility if needed, or keep as is if background is light
                        }} />

                        {/* Content Wrapper to ensure Z-Index above background */}
                        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, width: '100%', position: 'relative', zIndex: 1 }}>
                            {/* Hero Image Area (Left) */}
                            <Box sx={{ flex: 1, p: { xs: 3, md: 6 }, display: 'flex', justifyContent: 'center' }}>
                                <Box
                                    component="img"
                                    src="/src/assets/product-hero-qto.png"
                                    alt="Automatic Quantity Take-Off"
                                    sx={{
                                        width: '100%',
                                        maxWidth: '500px',
                                        height: 'auto',
                                        borderRadius: '8px',
                                        boxShadow: '0px 4px 24px rgba(0, 0, 0, 0.15)', // Added shadow for better integration
                                    }}
                                />
                            </Box>

                            {/* Hero Content Area (Right) */}
                            <Box sx={{ flex: 1, p: { xs: 3, md: 6 }, textAlign: 'left' }}>
                                <Typography variant="h3" sx={{ color: 'text.secondary', mb: 2 }}>
                                    Automatic Quantity Take-Off (QTO)
                                </Typography>
                                <Typography variant="body1" sx={{ color: 'text.secondary', mb: 1, fontWeight: 500 }}>
                                    Get accurate quantities in seconds from your BIM model.
                                </Typography>
                                <Typography variant="body1" sx={{ color: 'text.secondary', mb: 4 }}>
                                    MAMBA automates Quantity Take-Off. Remove manual work and errors. Keep quantities up to date for better project control and faster decisions.
                                </Typography>
                                <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                                    <WebButton
                                        sx={{
                                            color: '#7367B1',
                                            bgcolor: 'white',
                                            borderColor: 'white',
                                            '&:hover': { bgcolor: '#f5f5f5', borderColor: 'white' }
                                        }}
                                    >
                                        View plans and prices
                                    </WebButton>
                                    <WebButton
                                        variant="contained"
                                        sx={{
                                            bgcolor: '#7367B1',
                                            '&:hover': { bgcolor: '#5E5494' }
                                        }}
                                    >
                                        Try it for free
                                    </WebButton>
                                </Box>
                            </Box>
                        </Box>

                    </Box>


                    {/* Feature 1: Cost Estimating */}
                    <Grid container spacing={8} sx={{ mb: 12, alignItems: 'center' }}>
                        <Grid size={{ xs: 12, md: 6 }}>
                            <Typography variant="h2" sx={{ mb: 2 }}>
                                Cost Estimating
                            </Typography>
                            <Typography sx={{ color: 'text.secondary', fontFamily: 'Hind Siliguri', mb: 2 }}>
                                Link your quantity take-offs to your cost databases and get <strong>instant budget</strong> estimates. Make informed financial decisions from the earliest stages of the project.
                            </Typography>
                        </Grid>
                        <Grid size={{ xs: 12, md: 6 }}>
                            <Box
                                component="img"
                                src="/src/assets/feature-cost-estimating.png"
                                alt="Cost Estimating"
                                sx={{
                                    width: '100%',
                                    height: 'auto',
                                    borderRadius: '12px',
                                    boxShadow: '0px 4px 24px rgba(0, 0, 0, 0.1)',
                                }}
                            />
                        </Grid>
                    </Grid>

                    {/* Feature 2: Automatic Model Audit */}
                    <Grid container spacing={8} sx={{ mb: 12, alignItems: 'center', flexDirection: { xs: 'column-reverse', md: 'row' } }}>
                        <Grid size={{ xs: 12, md: 6 }}>
                            <Box
                                component="img"
                                src="/src/assets/feature-model-audit.png"
                                alt="Automatic Model Audit"
                                sx={{
                                    width: '100%',
                                    height: 'auto',
                                    borderRadius: '12px',
                                    boxShadow: '0px 4px 24px rgba(0, 0, 0, 0.1)',
                                }}
                            />
                        </Grid>
                        <Grid size={{ xs: 12, md: 6 }}>
                            <Typography variant="h2" sx={{ mb: 2 }}>
                                Automatic Model Audit
                            </Typography>
                            <Typography sx={{ color: 'text.secondary', fontFamily: 'Hind Siliguri', mb: 1 }}>
                                <strong>Detect problems in your model early and maintain the reliability of your BIM data.</strong>
                            </Typography>
                            <Typography sx={{ color: 'text.secondary', fontFamily: 'Hind Siliguri' }}>
                                MAMBA automatically checks your BIM model for errors and rule conflicts, helping you reduce rework and ensure data consistency.
                            </Typography>
                        </Grid>
                    </Grid>

                    {/* Feature 3: Automatic Waste Calculation */}
                    <Grid container spacing={8} sx={{ mb: 0, alignItems: 'center' }}>
                        <Grid size={{ xs: 12, md: 6 }}>
                            <Typography variant="h2" sx={{ mb: 2 }}>
                                Automatic Waste Calculation
                            </Typography>
                            <Typography sx={{ color: 'text.secondary', fontFamily: 'Hind Siliguri', mb: 3 }}>
                                <strong>Reduce waste and costs</strong> with predictive model analysis. Improve efficiency and minimize environmental impact.
                            </Typography>
                            <WebButton variant="contained">
                                See how it works
                            </WebButton>
                        </Grid>
                        <Grid size={{ xs: 12, md: 6 }}>
                            <Box
                                component="img"
                                src="/src/assets/feature-waste-calculation.png"
                                alt="Automatic Waste Calculation"
                                sx={{
                                    width: '100%',
                                    height: 'auto',
                                    borderRadius: '12px',
                                    boxShadow: '0px 4px 24px rgba(0, 0, 0, 0.1)',
                                }}
                            />
                        </Grid>
                    </Grid>

                </Container>
            </Box>

            <Footer />
        </Box>
    );
};
