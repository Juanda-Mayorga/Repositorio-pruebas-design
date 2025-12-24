import { Box, Typography, Container, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { PublicHeader } from '../design-system/organisms/PublicHeader';
import { Footer } from '../design-system/organisms/Footer';
import { WebServiceCard } from '../design-system/molecules/WebServiceCard';
import { WebButton } from '../design-system/atoms/WebButton';

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

                {/* Content Section */}
                <Container maxWidth="lg" sx={{ px: { xs: 2, md: 4 }, pb: 10 }}>
                    {/* License Control Feature */}
                    <Box sx={{
                        position: 'relative',
                        bgcolor: theme.palette.web.background.paper,
                        borderRadius: '16px',
                        overflow: 'hidden',
                        mb: { xs: 4, md: 12 }
                    }}>
                        {/* Wave Background Image */}
                        <Box sx={{
                            position: 'absolute',
                            top: 0,
                            bottom: 0,
                            left: 0,
                            right: 0,
                            backgroundImage: 'url(/src/assets/contact-wave-yellow.png)',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat',
                            opacity: 1,
                            zIndex: 0
                        }} />

                        <WebServiceCard
                            title={t('cloudServicesPage.licenseControl.title')}
                            description={t('cloudServicesPage.licenseControl.description')}
                            image="/src/assets/cloud-license.png"
                            imagePosition="left"
                            imageMaxWidth={{ xs: 500, lg: 500 }}
                            variant="contained"
                            sx={{ position: 'relative', zIndex: 1 }}
                        >
                            <WebButton variant="contained">
                                {t('cloudServicesPage.licenseControl.cta')}
                            </WebButton>
                        </WebServiceCard>
                    </Box>

                    {/* Other Features using WebServiceCard */}
                    <Box sx={{ mb: { xs: 4, md: 8 } }}>
                        <WebServiceCard
                            title={t('cloudServicesPage.userManagement.title')}
                            description={t('cloudServicesPage.userManagement.description')}
                            image="/src/assets/cloud-users.png"
                            imagePosition="right"
                            imageMaxWidth={{ xs: 420, lg: 500 }}
                        />
                    </Box>

                    <Box sx={{ mb: 0 }}>
                        <WebServiceCard
                            title={t('cloudServicesPage.training.title')}
                            description={t('cloudServicesPage.training.description')}
                            image="/src/assets/cloud-training.png"
                            imagePosition="left"
                            imageMaxWidth={{ xs: 420, lg: 500 }}
                        />
                    </Box>
                </Container>
            </Box>

            <Footer />
        </Box>
    );
};
