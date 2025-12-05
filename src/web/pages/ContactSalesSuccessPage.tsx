import { Box, Typography, Container } from '@mui/material';
import { ContactLayout } from '../design-system/templates/ContactLayout';
import { WebButton } from '../design-system/atoms/WebButton';
import { WebBreadcrumb } from '../design-system/molecules/WebBreadcrumb';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

export const ContactSalesSuccessPage = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();

    const handleViewResources = () => {
        navigate('/resources');
    };

    return (
        <ContactLayout>
            <Container maxWidth="lg">
                {/* Breadcrumb */}
                <Box sx={{ mb: { xs: '8px', sm: '17px', md: '25px', lg: '32px', xl: '43px' } }}>
                    <WebBreadcrumb
                        items={[
                            { label: t('contactSales.breadcrumb.contact'), href: '/contact' },
                            { label: t('contactSales.breadcrumb.contactSales') }
                        ]}
                    />
                </Box>

                {/* Header Section */}
                <Box sx={{ textAlign: 'center', mb: 6 }}>
                    <Typography
                        variant="h1"
                        component="h1"
                        sx={{
                            mb: 2,
                            color: '#7367B1', // Mamba Primary Dark
                            fontFamily: '"Inter", "Hind Siliguri", sans-serif',
                            fontWeight: 500,
                        }}
                    >
                        {t('contactSales.title')}
                    </Typography>
                    <Typography variant="h6" sx={{ color: 'text.secondary', maxWidth: 600, mx: 'auto', fontWeight: 'normal', fontFamily: 'Hind Siliguri' }}>
                        {t('contactSales.subtitle')}
                    </Typography>
                </Box>

                {/* Success Container with Background */}
                <Box sx={{
                    position: 'relative',
                    borderRadius: 8,
                    overflow: 'hidden',
                    minHeight: 600,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    py: 8,
                    px: 2
                }}>
                    {/* Background Image */}
                    <Box sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundImage: 'url(/src/assets/contact-sales-bg.png)',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        zIndex: 0
                    }} />

                    {/* White Success Card */}
                    <Box sx={{
                        position: 'relative',
                        zIndex: 1,
                        bgcolor: '#FFFFFF',
                        borderRadius: 2,
                        p: { xs: 4, md: 6 },
                        maxWidth: 800,
                        width: '100%',
                        boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
                        textAlign: 'center'
                    }}>
                        {/* Success Icon/Checkmark */}
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: [0, 1.2, 1] }}
                            transition={{ duration: 0.4, ease: "easeInOut" }}
                        >
                            <Box sx={{
                                width: 80,
                                height: 80,
                                borderRadius: '50%',
                                bgcolor: '#4CAF50',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                margin: '0 auto 24px',
                            }}>
                                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" fill="white" />
                                </svg>
                            </Box>
                        </motion.div>

                        {/* Success Title & Subtitle */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.35, delay: 0.15 }}
                        >
                            <Typography
                                variant="h3"
                                component="h2"
                                sx={{
                                    mb: 2,
                                    color: '#434343',
                                    fontFamily: '"Inter", "Hind Siliguri", sans-serif',
                                    fontWeight: 600,
                                    fontSize: { xs: '24px', md: '32px' }
                                }}
                            >
                                {t('contactSales.success.title')}
                            </Typography>

                            <Typography
                                variant="body1"
                                sx={{
                                    mb: 3,
                                    color: '#797D80',
                                    fontFamily: 'Hind Siliguri',
                                    fontSize: { xs: '16px', md: '18px' },
                                    lineHeight: 1.6,
                                    maxWidth: 600,
                                    mx: 'auto'
                                }}
                            >
                                {t('contactSales.success.subtitle')}
                            </Typography>
                        </motion.div>

                        {/* CTA Button */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: 0.3 }}
                        >
                            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
                                <WebButton
                                    variant="contained"
                                    onClick={handleViewResources}
                                    sx={{ minWidth: 200 }}
                                >
                                    {t('contactSales.success.cta')}
                                </WebButton>
                            </Box>
                        </motion.div>
                    </Box>
                </Box>
            </Container>
        </ContactLayout>
    );
};
