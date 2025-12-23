import { Box, Typography, Container, Grid, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { PublicHeader } from '../design-system/organisms/PublicHeader';
import { Footer } from '../design-system/organisms/Footer';
import { WebProductCard } from '../design-system/molecules/WebProductCard';
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

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', bgcolor: '#FFFFFF', overflowX: 'hidden' }}>
            <PublicHeader />

            <Box component="main" sx={{ flexGrow: 1, pt: theme.webLayout.headerSpacing }}>
                {/* Hero Header */}
                <Container maxWidth="lg" sx={{ textAlign: 'center', mb: { xs: 6, md: 10 } }}>
                    <MotionTypography
                        variant="h1"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        sx={{ mb: 2 }}
                    >
                        {t('cloudServicesPage.hero.title')}
                    </MotionTypography>
                    <MotionTypography
                        variant="subtitle1"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        sx={{ color: 'text.secondary', maxWidth: 700, mx: 'auto' }}
                    >
                        {t('cloudServicesPage.hero.subtitle')}
                    </MotionTypography>
                </Container>

                {/* License Control Feature */}
                <Box sx={{ position: 'relative', mb: { xs: 10, md: 20 }, px: { xs: 2, md: 4 } }}>
                    <Container maxWidth="lg">
                        <Box sx={{
                            position: 'relative',
                            bgcolor: '#FFF9E5', // Light yellow/cream bg
                            borderRadius: '40px',
                            p: { xs: 3, md: 8 },
                            display: 'flex',
                            flexDirection: { xs: 'column', md: 'row' },
                            alignItems: 'center',
                            gap: 4,
                            overflow: 'hidden'
                        }}>
                            {/* Decorative Shape */}
                            <Box sx={{
                                position: 'absolute',
                                bottom: -50,
                                right: -50,
                                width: '300px',
                                height: '300px',
                                background: 'linear-gradient(135deg, #FFEAB5 0%, #FFD970 100%)',
                                borderRadius: '100px',
                                opacity: 0.6,
                                zIndex: 0,
                                transform: 'rotate(15deg)'
                            }} />

                            {/* Screenshot Side */}
                            <Grid container spacing={4} sx={{ position: 'relative', zIndex: 1, alignItems: 'center' }}>
                                <Grid size={{ xs: 12, md: 7 }}>
                                    <MotionBox
                                        initial={{ opacity: 0, x: -30 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.8 }}
                                        sx={{
                                            borderRadius: '12px',
                                            overflow: 'hidden',
                                            boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                                            bgcolor: '#FFFFFF'
                                        }}
                                    >
                                        <Box
                                            component="img"
                                            src="/src/assets/cloud-license.png"
                                            alt="License Control Dashboard"
                                            sx={{ width: '100%', height: 'auto', display: 'block' }}
                                        />
                                    </MotionBox>
                                </Grid>

                                {/* Content Side */}
                                <Grid size={{ xs: 12, md: 5 }}>
                                    <MotionBox
                                        initial={{ opacity: 0, x: 30 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.8 }}
                                        sx={{
                                            bgcolor: '#FFFFFF',
                                            p: { xs: 4, md: 5 },
                                            borderRadius: '16px',
                                            boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
                                            border: '1px solid #F0F0F0'
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

                {/* Other Features using WebProductCard */}
                <Box sx={{ mb: { xs: 8, md: 15 } }}>
                    <WebProductCard
                        title={t('cloudServicesPage.userManagement.title')}
                        description={t('cloudServicesPage.userManagement.description')}
                        image="/src/assets/cloud-users.png"
                        imagePosition="right"
                    />
                </Box>

                <Box sx={{ mb: { xs: 10, md: 20 } }}>
                    <WebProductCard
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
