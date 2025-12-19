import { Box, Container, Typography, useTheme } from '@mui/material';
import { PublicHeader } from '../design-system/organisms/PublicHeader';
import { Footer } from '../design-system/organisms/Footer';
import { WebButton } from '../design-system/atoms/WebButton';
import { WebProductCard } from '../design-system/molecules/WebProductCard';

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
                                <Typography variant="h2" sx={{ mb: 2 }}>
                                    Automatic Quantity Take-Off (QTO)
                                </Typography>
                                <Typography sx={{ color: 'text.secondary', fontFamily: 'Hind Siliguri', mb: 1 }}>
                                    <strong>Get accurate quantities in seconds from your BIM model.</strong>
                                </Typography>
                                <Typography variant="body1" sx={{ color: 'text.secondary', mb: 4 }}>
                                    MAMBA automates Quantity Take-Off. Remove manual work and errors. Keep quantities up to date for better project control and faster decisions.
                                </Typography>
                                <WebButton
                                    variant="contained"
                                    sx={{
                                        width: '100%',
                                        maxWidth: '480px',
                                        display: 'block',
                                        mx: 'auto'
                                    }}
                                >
                                    Try it for free
                                </WebButton>
                            </Box>
                        </Box>

                    </Box>


                    {/* Feature 1: Cost Estimating */}
                    <WebProductCard
                        title="Cost Estimating"
                        description={
                            <>
                                Link your quantity take-offs to your cost databases and get <strong>instant budget</strong> estimates. Make informed financial decisions from the earliest stages of the project.
                            </>
                        }
                        image="/src/assets/feature-cost-estimating.png"
                        imageAlt="Cost Estimating"
                        sx={{ mb: 8 }}
                    />

                    {/* Feature 2: Automatic Model Audit */}
                    <WebProductCard
                        title="Automatic Model Audit"
                        imagePosition="left"
                        description={
                            <>
                                <strong>Detect problems in your model early and maintain the reliability of your BIM data.</strong>
                                <br /><br />
                                MAMBA automatically checks your BIM model for errors and rule conflicts, helping you reduce rework and ensure data consistency.
                            </>
                        }
                        image="/src/assets/feature-model-audit.png"
                        imageAlt="Automatic Model Audit"
                        sx={{ mb: 8 }}
                    />

                    {/* Feature 3: Automatic Waste Calculation */}
                    <WebProductCard
                        title="Automatic Waste Calculation"
                        description={
                            <>
                                <strong>Reduce waste and costs</strong> with predictive model analysis. Improve efficiency and minimize environmental impact.
                            </>
                        }
                        image="/src/assets/feature-waste-calculation.png"
                        imageAlt="Automatic Waste Calculation"
                        sx={{ mb: 0 }}
                    >
                        <WebButton
                            variant="contained"
                            sx={{
                                width: '100%',
                                maxWidth: '480px',
                                display: 'block',
                                mx: 'auto'
                            }}
                        >
                            View plans and prices
                        </WebButton>
                    </WebProductCard>


                </Container>
            </Box>

            <Footer />
        </Box>
    );
};
