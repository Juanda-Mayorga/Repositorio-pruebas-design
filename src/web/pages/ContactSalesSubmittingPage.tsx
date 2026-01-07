import React, { useEffect } from 'react';
import { Box, Typography, Container } from '@mui/material';
import { ContactLayout } from '../design-system/templates/ContactLayout';
import { WebButton } from '../design-system/atoms/WebButton';
import { WebInputField } from '../design-system/molecules/WebInputField';
import { WebCountrySelector } from '../design-system/molecules/WebCountrySelector';
import { WebTooltip } from '../design-system/atoms/WebTooltip';
import { WebBreadcrumb } from '../design-system/molecules/WebBreadcrumb';
import { useTranslation } from 'react-i18next';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

export const ContactSalesSubmittingPage = () => {
    const { t } = useTranslation();
    const location = useLocation();
    const navigate = useNavigate();

    const formData = location.state?.formData || {
        firstName: '',
        lastName: '',
        jobTitle: '',
        country: '',
        company: '',
        email: '',
        phone: '',
        message: '',
        acceptTerms: false
    };

    // Always in submitting state
    const isSubmitting = true;

    useEffect(() => {
        // Simulate API call completion after 2 seconds
        const timer = setTimeout(() => {
            // Navigate to success page after submission completes
            navigate('/contact-sales/success');
        }, 2000);

        return () => clearTimeout(timer);
    }, [navigate]);

    return (
        <ContactLayout>
            <Container maxWidth="lg">
                <motion.div
                    initial={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.35 }}
                >
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
                            sx={{ mb: 2 }}
                        >
                            {t('contactSales.title')}
                        </Typography>
                        <Typography variant="h6" sx={{ color: 'text.secondary', maxWidth: 600, mx: 'auto', fontWeight: 'normal', fontFamily: 'Hind Siliguri' }}>
                            {t('contactSales.subtitle')}
                        </Typography>
                    </Box>

                    {/* Form Container with Background */}
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

                        {/* White Form Card */}
                        <Box sx={{
                            position: 'relative',
                            zIndex: 1,
                            bgcolor: '#FFFFFF',
                            borderRadius: 2,
                            p: { xs: 4, md: 6 },
                            maxWidth: 800,
                            width: '100%',
                            boxShadow: '0 4px 20px rgba(0,0,0,0.05)'
                        }}>
                            <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                                <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 3 }}>
                                    <WebInputField
                                        name="firstName"
                                        label={t('contactSales.form.firstName')}
                                        value={formData.firstName}
                                        fullWidth
                                        required
                                        disabled={isSubmitting}
                                    />
                                    <WebInputField
                                        name="lastName"
                                        label={t('contactSales.form.lastName')}
                                        value={formData.lastName}
                                        fullWidth
                                        required
                                        disabled={isSubmitting}
                                    />
                                    <WebInputField
                                        name="jobTitle"
                                        label={t('contactSales.form.jobTitle')}
                                        value={formData.jobTitle}
                                        fullWidth
                                        required
                                        disabled={isSubmitting}
                                    />
                                    <WebInputField
                                        name="company"
                                        label={t('contactSales.form.company')}
                                        value={formData.company}
                                        fullWidth
                                        required
                                        disabled={isSubmitting}
                                    />
                                    <WebCountrySelector
                                        name="country"
                                        label={t('contactSales.form.country')}
                                        value={formData.country}
                                        fullWidth
                                        required
                                        disabled={isSubmitting}
                                    />
                                    <WebInputField
                                        name="phone"
                                        type="tel"
                                        label={t('contactSales.form.phoneLabel')}
                                        value={formData.phone}
                                        fullWidth
                                        disabled={isSubmitting}
                                    />
                                </Box>

                                <WebInputField
                                    name="email"
                                    type="email"
                                    label={t('contactSales.form.email')}
                                    value={formData.email}
                                    fullWidth
                                    required
                                    disabled={isSubmitting}
                                />

                                <Box>
                                    <WebInputField
                                        name="message"
                                        multiline
                                        rows={2}
                                        disabled={isSubmitting}
                                        fullWidth
                                        value={formData.message}
                                    />
                                </Box>

                                <Typography variant="body2" sx={{ color: '#797D80', fontSize: '14px', fontFamily: '"Hind Siliguri", sans-serif' }}>
                                    {t('contactSales.form.requiredFieldsNotice', { returnObjects: false }).split('*').map((part, index, array) => (
                                        index < array.length - 1 ? (
                                            <React.Fragment key={index}>
                                                {part}<span style={{ color: '#E63C3D' }}>*</span>
                                            </React.Fragment>
                                        ) : part
                                    ))}
                                </Typography>

                                <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
                                    <WebTooltip
                                        title=""
                                        placement="top"
                                    >
                                        <span>
                                            <WebButton
                                                variant="contained"
                                                fullWidth
                                                loading={true}
                                            >
                                                {t('contactSales.form.submitting')}
                                            </WebButton>
                                        </span>
                                    </WebTooltip>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </motion.div>
            </Container>
        </ContactLayout>
    );
};
