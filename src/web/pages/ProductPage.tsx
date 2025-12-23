import { Box, Container, Typography, useTheme, useMediaQuery } from '@mui/material';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { PublicHeader } from '../design-system/organisms/PublicHeader';
import { Footer } from '../design-system/organisms/Footer';
import { WebButton } from '../design-system/atoms/WebButton';
import { WebProductCard } from '../design-system/molecules/WebProductCard';

const MotionBox = motion(Box);

/**
 * @view ProductPage
 * @description
 * Página principal de productos de MAMBA. 
 * 
 * @design_standards
 * - **Header Scalability:** El título (h1) y subtítulo implementan una escala responsive 
 *   agresiva de 5 niveles (375px -> 1920px) para máxima legibilidad.
 * - **Animations:** Implementa entrada escalonada (stagger) en la sección Hero 
 *   y revelado por scroll en las tarjetas.
 * - **Buttons:** Los botones dentro de tarjetas ocupan el 100% del ancho en pantallas grandes (lg+).
 */
export const ProductPage = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const { t } = useTranslation();

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', bgcolor: theme.palette.web.background.default }}>
            <PublicHeader />

            <Box component="main" sx={{ flexGrow: 1, mt: '64px' }}>
                {/* Page Header */}
                <Box sx={{ textAlign: 'center', pt: theme.webLayout.headerSpacing, pb: 6, px: 2 }}>
                    <Typography
                        variant="h1"
                        component={motion.h1}
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        sx={{
                            mb: 2,
                            fontSize: '32px', // xs (375px)
                            [theme.breakpoints.up('sm')]: { // 744px
                                fontSize: '40px'
                            },
                            [theme.breakpoints.up('md')]: { // 1133px
                                fontSize: '48px'
                            },
                            [theme.breakpoints.up('lg')]: { // 1440px
                                fontSize: '56px'
                            },
                            [theme.breakpoints.up('xl')]: { // 1920px
                                fontSize: '64px'
                            }
                        }}
                    >
                        {t('productPage.title')}
                    </Typography>
                    <Typography
                        variant="subtitle1"
                        component={motion.p}
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        sx={{
                            color: 'text.secondary',
                            maxWidth: 600,
                            mx: 'auto',
                            textAlign: 'center',
                            fontSize: '16px', // xs, sm, md (375px, 744px, 1133px)
                            [theme.breakpoints.up('lg')]: { // 1440px, 1920px
                                fontSize: '20px'
                            }
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
                            mb: { xs: 4, md: 12 },
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
                            <MotionBox
                                initial={{ opacity: 0, scale: 0.98, y: 20 }}
                                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.1 }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                                sx={{ flex: 1, p: { xs: 3, md: 6 }, pb: { xs: 0, md: 6 }, display: 'flex', justifyContent: 'center' }}
                            >
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
                            </MotionBox>

                            <Box sx={{
                                flex: 1,
                                width: '100%',
                                maxWidth: { xs: '420px', md: 'none' },
                                mx: { xs: 'auto', md: 0 },
                                display: 'flex',
                                flexDirection: 'column'
                            }}>
                                <MotionBox
                                    initial={{ opacity: 0, x: isMobile ? 0 : 30, y: isMobile ? 20 : 0 }}
                                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                                    viewport={{ once: true, amount: 0.1 }}
                                    transition={{ duration: 0.8, ease: "easeOut" }}
                                    sx={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        height: '100%',
                                        justifyContent: 'center',
                                        textAlign: 'left',
                                        p: { xs: 3, md: 6 }
                                    }}
                                >
                                    <motion.div variants={{
                                        hidden: { opacity: 0, y: 15 },
                                        visible: { opacity: 1, y: 0 }
                                    }} initial="hidden" animate="visible" transition={{ duration: 0.5, delay: 0.4 }}>
                                        <Typography variant="h2" sx={{ mb: 3 }}>
                                            {t('productPage.heroTitle')}
                                        </Typography>
                                    </motion.div>

                                    <motion.div variants={{
                                        hidden: { opacity: 0, y: 15 },
                                        visible: { opacity: 1, y: 0 }
                                    }} initial="hidden" animate="visible" transition={{ duration: 0.5, delay: 0.5 }}>
                                        <Typography sx={{
                                            color: 'text.secondary',
                                            fontFamily: 'Hind Siliguri',
                                            mb: 3,
                                            fontSize: { xs: '16px', md: '18px' }
                                        }} dangerouslySetInnerHTML={{ __html: t('productPage.heroHighlight') }} />
                                    </motion.div>

                                    <motion.div variants={{
                                        hidden: { opacity: 0, y: 15 },
                                        visible: { opacity: 1, y: 0 }
                                    }} initial="hidden" animate="visible" transition={{ duration: 0.5, delay: 0.6 }}>
                                        <Typography variant="body1" sx={{
                                            color: 'text.secondary',
                                            mb: 3,
                                            whiteSpace: 'pre-line',
                                            fontSize: { xs: '16px', md: '18px' }
                                        }} dangerouslySetInnerHTML={{ __html: t('productPage.heroDescription') }} />
                                    </motion.div>

                                    <motion.div variants={{
                                        hidden: { opacity: 0, y: 15 },
                                        visible: { opacity: 1, y: 0 }
                                    }} initial="hidden" animate="visible" transition={{ duration: 0.5, delay: 0.7 }}>
                                        <WebButton
                                            variant="contained"
                                            sx={{
                                                width: '100%',
                                                maxWidth: '480px',
                                            }}
                                        >
                                            {t('productPage.heroCta')}
                                        </WebButton>
                                    </motion.div>
                                </MotionBox>
                            </Box>
                        </Box>
                    </Box>

                    {/* Feature 1: Cost Estimating */}
                    <WebProductCard
                        title={t('productPage.costEstimating.title')}
                        description={t('productPage.costEstimating.description')}
                        image="/src/assets/feature-cost-estimating.png"
                        imageAlt={t('productPage.costEstimating.title')}
                        sx={{ mb: { xs: 4, md: 8 } }}
                    />

                    {/* Feature 2: Automatic Model Audit */}
                    <WebProductCard
                        title={t('productPage.modelAudit.title')}
                        imagePosition="left"
                        description={t('productPage.modelAudit.description')}
                        image="/src/assets/feature-model-audit.png"
                        imageAlt={t('productPage.modelAudit.title')}
                        sx={{ mb: { xs: 4, md: 8 } }}
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
                                maxWidth: { xs: '480px', lg: 'none' },
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
