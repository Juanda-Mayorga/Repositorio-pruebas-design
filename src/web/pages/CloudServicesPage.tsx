import { Box, Typography, Container, Grid, useTheme, useMediaQuery } from '@mui/material';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { PublicHeader } from '../design-system/organisms/PublicHeader';
import { Footer } from '../design-system/organisms/Footer';
import { WebServiceCard } from '../design-system/molecules/WebServiceCard';
import { WebButton } from '../design-system/atoms/WebButton';

const MotionBox = motion(Box);
const MotionTypography = motion(Typography);

/**
 * @view CloudServicesPage
 * @description
 * Página de Servicios en la Nube de MAMBA. Presenta la gestión de licencias,
 * usuarios y formación con una estética premium y animaciones de scroll.
 * 
 * @design_standards
 * - **Hero:** Título centralizado con escala responsive (32px - 64px).
 * - **License Control:** Sección destacada con fondo decorativo amarillo (#FFF5CC).
 * - **Features:** Uso de WebProductCard para consistencia con la página de producto.
 */
export const CloudServicesPage = () => {
    const { t } = useTranslation();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', bgcolor: '#FFFFFF', overflowX: 'hidden' }}>
            <PublicHeader />

            <Box component="main" sx={{ flexGrow: 1, mt: '64px' }}>
                {/* Hero Header */}
                <Box sx={{ textAlign: 'center', pt: theme.webLayout.headerSpacing, pb: 6, px: 2 }}>
                    <MotionTypography
                        variant="h1"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
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
                        {t('cloudServicesPage.hero.title')}
                    </MotionTypography>
                    <MotionTypography
                        variant="subtitle1"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        sx={{
                            color: 'text.secondary',
                            maxWidth: 700,
                            mx: 'auto',
                            fontSize: '16px', // xs, sm, md (375px, 744px, 1133px)
                            [theme.breakpoints.up('lg')]: { // 1440px, 1920px
                                fontSize: '20px'
                            }
                        }}
                    >
                        {t('cloudServicesPage.hero.subtitle')}
                    </MotionTypography>
                </Box>

                {/* License Control Feature */}
                <Box sx={{ position: 'relative', mb: { xs: 10, md: 20 }, px: { xs: 2, md: 4 } }}>
                    <Container maxWidth="lg">
                        <Box sx={{
                            position: 'relative',
                            bgcolor: theme.palette.web.background.paper,
                            borderRadius: '40px',
                            p: { xs: 3, md: 8 },
                            display: 'flex',
                            flexDirection: { xs: 'column', md: 'row' },
                            alignItems: 'center',
                            gap: 4,
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

                            {/* Screenshot Side */}
                            <Grid container spacing={4} sx={{ position: 'relative', zIndex: 1, alignItems: 'center' }}>
                                <Grid size={{ xs: 12, md: 6 }}>
                                    <MotionBox
                                        initial={{ opacity: 0, scale: 0.98, y: 20 }}
                                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                                        viewport={{ once: true, amount: 0.1 }}
                                        transition={{ duration: 0.8, ease: "easeOut" }}
                                        sx={{ flex: 1, p: { xs: 3, md: 6 }, pb: { xs: 0, md: 6 }, display: 'flex', justifyContent: 'center' }}
                                    >
                                        <Box
                                            component="img"
                                            src="/src/assets/cloud-license.png"
                                            alt="License Control Dashboard"
                                            sx={{
                                                width: '100%',
                                                maxWidth: '500px',
                                                height: 'auto',
                                                borderRadius: '8px',
                                                boxShadow: '0px 4px 24px rgba(0, 0, 0, 0.15)',
                                            }}
                                        />
                                    </MotionBox>
                                </Grid>

                                {/* Content Side */}
                                <Grid size={{ xs: 12, md: 6 }}>
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
                                        <Typography variant="cardTitle" sx={{ mb: 2, display: 'block' }}>
                                            {t('cloudServicesPage.licenseControl.title')}
                                        </Typography>
                                        <Typography variant="cardDescription" sx={{ mb: 4, display: 'block' }}>
                                            {t('cloudServicesPage.licenseControl.description')}
                                        </Typography>
                                        <WebButton variant="contained">
                                            {t('cloudServicesPage.licenseControl.cta')}
                                        </WebButton>
                                    </MotionBox>
                                </Grid>
                            </Grid>
                        </Box>
                    </Container>
                </Box>

                {/* Other Features using WebServiceCard */}
                <Box sx={{ mb: { xs: 8, md: 15 } }}>
                    <WebServiceCard
                        title={t('cloudServicesPage.userManagement.title')}
                        description={t('cloudServicesPage.userManagement.description')}
                        image="/src/assets/cloud-users.png"
                        imagePosition="right"
                    />
                </Box>

                <Box sx={{ mb: { xs: 10, md: 20 } }}>
                    <WebServiceCard
                        title={t('cloudServicesPage.training.title')}
                        description={t('cloudServicesPage.training.description')}
                        image="/src/assets/cloud-training.png"
                        imagePosition="left"
                    />
                </Box>
            </Box>

            <Footer />
        </Box>
    );
};
