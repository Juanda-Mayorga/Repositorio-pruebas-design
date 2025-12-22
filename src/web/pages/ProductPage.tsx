import { Box, Container, Typography, useTheme } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { PublicHeader } from '../design-system/organisms/PublicHeader';
import { Footer } from '../design-system/organisms/Footer';
import { WebButton } from '../design-system/atoms/WebButton';
import { WebProductCard } from '../design-system/molecules/WebProductCard';

export const ProductPage = () => {
    const theme = useTheme();
    const { t } = useTranslation();

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
                            fontSize: { xs: '32px', lg: '56px' }
                        }}
                    >
                        {t('productPage.title')}
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
                        {t('productPage.subtitle')}
                    </Typography>
                </Box>

                <Container maxWidth="lg" sx={{ px: { xs: 2, md: 4 }, pb: 10 }}>
                    {/* Hero Section */}
                    <Box
                        sx={{
                            position: 'relative',
                            bgcolor: theme.palette.web.background.paper,
                            borderRadius: '16px',
                            overflow: 'hidden',
                            mb: 12,
                            display: 'flex',
                            flexDirection: { xs: 'column', md: 'row' },
                            alignItems: 'center',
                        }}
                    >
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
                            opacity: 0.1,
                        }} />

                        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, width: '100%', position: 'relative', zIndex: 1 }}>
                            <Box sx={{ flex: 1, p: { xs: 3, md: 6 }, display: 'flex', justifyContent: 'center' }}>
                                <Box
                                    component="img"
                                    src="/src/assets/product-hero-qto.png"
                                    alt={t('productPage.heroTitle')}
                                    sx={{
                                        width: '100%',
                                        maxWidth: '500px',
                                        height: 'auto',
                                        borderRadius: '8px',
                                        boxShadow: '0px 4px 24px rgba(0, 0, 0, 0.15)',
                                    }}
                                />
                            </Box>

                            <Box sx={{ flex: 1, p: { xs: 3, md: 6 }, textAlign: 'left' }}>
                                <Typography variant="h2" sx={{ mb: 2 }}>
                                    {t('productPage.heroTitle')}
                                </Typography>
                                <Typography sx={{ color: 'text.secondary', fontFamily: 'Hind Siliguri', mb: 1 }}>
                                    <strong>{t('productPage.heroHighlight')}</strong>
                                </Typography>
                                <Typography variant="body1" sx={{ color: 'text.secondary', mb: 4, whiteSpace: 'pre-line' }}>
                                    {t('productPage.heroDescription')}
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
                                    {t('productPage.heroCta')}
                                </WebButton>
                            </Box>
                        </Box>
                    </Box>

                    {/* Feature 1: Cost Estimating */}
                    <WebProductCard
                        title={t('productPage.costEstimating.title')}
                        description={t('productPage.costEstimating.description')}
                        image="/src/assets/feature-cost-estimating.png"
                        imageAlt={t('productPage.costEstimating.title')}
                        sx={{ mb: 8 }}
                    />

                    {/* Feature 2: Automatic Model Audit */}
                    <WebProductCard
                        title={t('productPage.modelAudit.title')}
                        imagePosition="left"
                        description={t('productPage.modelAudit.description')}
                        image="/src/assets/feature-model-audit.png"
                        imageAlt={t('productPage.modelAudit.title')}
                        sx={{ mb: 8 }}
                    />

                    {/* Feature 3: Automatic Waste Calculation */}
                    <WebProductCard
                        title={t('productPage.wasteCalculation.title')}
                        description={t('productPage.wasteCalculation.description')}
                        image="/src/assets/feature-waste-calculation.png"
                        imageAlt={t('productPage.wasteCalculation.title')}
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
                            {t('productPage.wasteCalculation.cta')}
                        </WebButton>
                    </WebProductCard>


                </Container>
            </Box>

            <Footer />
        </Box>
    );
};
