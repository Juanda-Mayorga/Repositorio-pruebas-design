import { Box, Container, Typography, useTheme, useMediaQuery } from '@mui/material';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { MainLayout } from '../design-system/templates/MainLayout';
import { WebButton } from '../design-system/atoms/WebButton';
import { WebProductCard } from '../design-system/molecules/WebProductCard';

const MotionBox = motion(Box);

/**
 * @view CloudServicesPageII
 * @description
 * Página clonada de ProductPage. 
 * 
 * @design_standards
 * - **Header Scalability:** El título (h1) y subtítulo implementan una escala responsive 
 *   agresiva de 5 niveles (375px -> 1920px) para máxima legibilidad.
 * - **Animations:** Implementa entrada escalonada (stagger) en la sección Hero 
 *   y revelado por scroll en las tarjetas.
 * - **Buttons:** Los botones dentro de tarjetas ocupan el 100% del ancho en pantallas grandes (lg+).
 */
export const CloudServicesPageII = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const { t } = useTranslation();

    return (
        <MainLayout>
            {/* Page Header */}
            <Box sx={{ textAlign: 'center', pt: theme.webLayout.headerSpacing, pb: 6, px: 2 }}>
                <Typography
                    variant="h1"
                    component={motion.h1}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    sx={{ mb: 2 }}
                >
                    Servicios en la Nube
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
                    Centraliza la gestión de licencias, empleados, formación y proyectos en un solo lugar
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
                        backgroundImage: 'url(/src/assets/contact-wave-yellow.png)',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        zIndex: 0,
                        opacity: 1,
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
                                src="/src/assets/cloud-services-hero-license-final.png"
                                alt="Control de licencias"
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
                            flexDirection: 'column',
                            justifyContent: 'center'
                        }}>
                            <MotionBox
                                initial={{ opacity: 0, x: isMobile ? 0 : 30, y: isMobile ? 20 : 0 }}
                                whileInView={{ opacity: 1, x: 0, y: 0 }}
                                viewport={{ once: true, amount: 0.1 }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    textAlign: 'left',
                                    bgcolor: '#FFFFFF',
                                    borderRadius: '16px',
                                    boxShadow: '0px 4px 24px rgba(0, 0, 0, 0.08)',
                                    p: { xs: 3, md: 6 }
                                }}
                            >
                                <motion.div variants={{
                                    hidden: { opacity: 0, y: 15 },
                                    visible: { opacity: 1, y: 0 }
                                }} initial="hidden" animate="visible" transition={{ duration: 0.5, delay: 0.4 }}>
                                    <Typography variant="h2" sx={{ mb: 3 }}>
                                        Control de licencias
                                    </Typography>
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
                                    }}>
                                        Mantén el control total sobre la suscripción, facturación y uso de licencias de tu empresa a través de una interfaz <strong>centralizada</strong> e <strong>intuitiva</strong>
                                    </Typography>
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



                {/* Feature Cards Container */}
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: { xs: 4, md: 8 } }}>
                    {/* Feature 2: Automatic Model Audit (First) */}
                    <WebProductCard
                        title="Gestión de usuarios"
                        imagePosition="right"
                        description="Invita a usuarios, asigna formación y realiza un seguimiento del progreso sin esfuerzo. MAMBA permite a los administradores gestionar a los miembros del <strong>equipo</strong>, supervisar el aprendizaje y asegurar que todos estén <strong>alineados</strong> desde una única interfaz."
                        image="/src/assets/cloud-services-users.png"
                        imageAlt="Gestión de usuarios"
                        imageMaxWidth="100%"
                        sx={{
                            p: { xs: 4, md: 2 },
                            maxWidth: { xs: '420px', md: 'none' },
                            mx: { xs: 'auto', md: 0 }
                        }}
                    />

                    {/* Feature 3: Training (Second) */}
                    <WebProductCard
                        title="Formación"
                        imagePosition="left"
                        description="MAMBA ofrece una interfaz intuitiva donde puedes seguir <strong>rutas de aprendizaje</strong> construidas con nodos, realizar un seguimiento de tu progreso y mantenerte motivado con la <strong>gamificación</strong>."
                        image="/src/assets/cloud-services-training.png"
                        imageAlt="Formación"
                        imageMaxWidth={500}
                        sx={{
                            p: { xs: 4, md: 2 },
                            maxWidth: { xs: '420px', md: 'none' },
                            mx: { xs: 'auto', md: 0 }
                        }}
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
                </Box>
            </Container>
        </MainLayout>
    );
};
