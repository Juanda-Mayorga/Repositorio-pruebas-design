import { useState } from 'react';
import { Box, Typography, Container, useTheme } from '@mui/material';
import { PublicHeader } from '../design-system/organisms/PublicHeader';
import { Footer } from '../design-system/organisms/Footer';
import { WebButton } from '../design-system/atoms/WebButton';
import { WebInputField } from '../design-system/molecules/WebInputField';
import { WebCountrySelector } from '../design-system/molecules/WebCountrySelector';
import { WebTooltip } from '../design-system/atoms/WebTooltip';
import { useTranslation } from 'react-i18next';

export const ContactSalesPage = () => {
    const { t } = useTranslation();
    const theme = useTheme();

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        jobTitle: '',
        country: '',
        company: '',
        email: '',
        phone: '',
        message: '',
        acceptTerms: false
    });

    const [errors, setErrors] = useState({
        firstName: '',
        lastName: '',
        email: '',
        jobTitle: '',
        company: '',
        country: '',
        phone: ''
    });

    // List of common disposable email domains
    const disposableDomains = [
        'yopmail.com', 'temp-mail.org', 'guerrillamail.com', '10minutemail.com',
        'mailinator.com', 'throwawaymail.com', 'tempmail.com', 'maildrop.cc',
        'getairmail.com', 'dispostable.com'
    ];

    const validateEmail = (email: string) => {
        if (!email) return { isValid: true, message: '' }; // Let required check handle empty

        // 1. Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return { isValid: false, message: 'Please enter a valid email address' };
        }

        // 2. Validate temporary email
        const domain = email.split('@')[1]?.toLowerCase();
        if (domain && disposableDomains.includes(domain)) {
            return { isValid: false, message: 'Temporary email addresses are not allowed' };
        }

        return { isValid: true, message: '' };
    };

    const validatePhone = (phone: string) => {
        if (!phone) return { isValid: true, message: '' };

        // Remove non-digit characters for length check
        const digits = phone.replace(/\D/g, '');

        if (digits.length < 7) {
            return { isValid: false, message: 'El número de móvil debe tener al menos 7 dígitos' };
        }

        return { isValid: true, message: '' };
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));

        // Real-time validation
        const newErrors = { ...errors };

        if (name === 'firstName') {
            if (value.length > 0 && value.length < 2) {
                newErrors.firstName = t('validation.nameRequired');
            } else {
                newErrors.firstName = '';
            }
        }

        if (name === 'lastName') {
            if (value.length > 0 && value.length < 2) {
                newErrors.lastName = t('validation.surnameRequired');
            } else {
                newErrors.lastName = '';
            }
        }

        if (name === 'jobTitle') {
            if (value.length > 0 && value.length < 2) {
                newErrors.jobTitle = "El cargo debe tener al menos 2 caracteres";
            } else {
                newErrors.jobTitle = '';
            }
        }

        if (name === 'company') {
            if (value.length > 0 && value.length < 2) {
                newErrors.company = "El nombre de la empresa debe tener al menos 2 caracteres";
            } else {
                newErrors.company = '';
            }
        }

        if (name === 'country') {
            if (!value) {
                newErrors.country = "Por favor, selecciona tu país";
            } else {
                newErrors.country = '';
            }
        }

        if (name === 'email') {
            const { isValid, message } = validateEmail(value);
            if (!isValid) {
                newErrors.email = message;
            } else {
                newErrors.email = '';
            }
        }

        if (name === 'phone') {
            const { isValid, message } = validatePhone(value);
            if (!isValid) {
                newErrors.phone = message;
            } else {
                newErrors.phone = '';
            }
        }

        setErrors(newErrors);
    };

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        const newErrors = { ...errors };

        if (name === 'country') {
            if (!value) {
                newErrors.country = "Por favor, selecciona tu país";
            } else {
                newErrors.country = '';
            }
        }

        if (name === 'email') {
            const { isValid, message } = validateEmail(value);
            if (!isValid) {
                newErrors.email = message;
            } else {
                newErrors.email = '';
            }
        }

        if (name === 'phone') {
            const { isValid, message } = validatePhone(value);
            if (!isValid) {
                newErrors.phone = message;
            } else {
                newErrors.phone = '';
            }
        }

        setErrors(newErrors);
    };

    // TODO: Uncomment when Terms and Conditions checkbox is re-enabled
    // const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     setFormData(prev => ({ ...prev, acceptTerms: e.target.checked }));
    // };

    // Check if all required fields are filled
    const isFormValid =
        formData.firstName.trim() !== '' &&
        formData.lastName.trim() !== '' &&
        formData.jobTitle.trim() !== '' &&
        formData.company.trim() !== '' &&
        formData.country.trim() !== '' &&
        formData.email.trim() !== '' &&
        !errors.firstName &&
        !errors.lastName &&
        !errors.jobTitle &&
        !errors.company &&
        !errors.country &&
        !errors.email;

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', bgcolor: theme.palette.web.background.default }}>
            <PublicHeader />

            <Box component="main" sx={{ flexGrow: 1, py: 8, mt: '64px' }}>
                <Container maxWidth="lg">
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
                                        placeholder={t('contactSales.form.firstNamePlaceholder')}
                                        value={formData.firstName}
                                        onChange={handleChange}
                                        error={!!errors.firstName}
                                        helperText={errors.firstName}
                                        fullWidth
                                        required
                                    />
                                    <WebInputField
                                        name="lastName"
                                        label={t('contactSales.form.lastName')}
                                        placeholder={t('contactSales.form.lastNamePlaceholder')}
                                        value={formData.lastName}
                                        onChange={handleChange}
                                        error={!!errors.lastName}
                                        helperText={errors.lastName}
                                        fullWidth
                                        required
                                    />
                                    <WebInputField
                                        name="jobTitle"
                                        label={t('contactSales.form.jobTitle')}
                                        placeholder={t('contactSales.form.jobTitlePlaceholder')}
                                        value={formData.jobTitle}
                                        onChange={handleChange}
                                        error={!!errors.jobTitle}
                                        helperText={errors.jobTitle}
                                        fullWidth
                                        required
                                    />
                                    <WebInputField
                                        name="company"
                                        label={t('contactSales.form.company')}
                                        placeholder={t('contactSales.form.companyPlaceholder')}
                                        value={formData.company}
                                        onChange={handleChange}
                                        error={!!errors.company}
                                        helperText={errors.company}
                                        fullWidth
                                        required
                                    />
                                    <WebCountrySelector
                                        name="country"
                                        label={t('contactSales.form.country')}
                                        placeholder={t('contactSales.form.countryPlaceholder')}
                                        value={formData.country}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        error={!!errors.country}
                                        helperText={errors.country}
                                        fullWidth
                                        required
                                    />
                                    <WebInputField
                                        name="phone"
                                        type="tel"
                                        label="Móvil"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        error={!!errors.phone}
                                        helperText={errors.phone}
                                        fullWidth
                                    />
                                </Box>

                                <WebInputField
                                    name="email"
                                    type="email"
                                    label={t('contactSales.form.email')}
                                    placeholder={t('contactSales.form.emailPlaceholder')}
                                    value={formData.email}
                                    onChange={handleChange}
                                    error={!!errors.email}
                                    helperText={errors.email}
                                    fullWidth
                                    required
                                />

                                <Box>
                                    <WebInputField
                                        name="message"
                                        multiline
                                        rows={4}
                                        fullWidth
                                        placeholder={t('contactSales.form.messagePlaceholder')}
                                        value={formData.message}
                                        onChange={handleChange}
                                    />
                                </Box>

                                <Typography variant="body2" sx={{ color: '#797D80', fontSize: '14px', fontFamily: '"Hind Siliguri", sans-serif' }}>
                                    All fields marked with <span style={{ color: '#E63C3D' }}>*</span> are required
                                </Typography>

                                {/* TODO: Uncomment this section when Terms and Conditions are available
                                    Currently commented out because we don't have T&C ready yet.
                                    This will be implemented in a future version.
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            checked={formData.acceptTerms}
                                            onChange={handleCheckboxChange}
                                            sx={{ color: '#D1D5DB', '&.Mui-checked': { color: '#7367B1' } }}
                                        />
                                    }
                                    label={
                                        <Typography variant="body2" color="text.secondary">
                                            {t('contactSales.form.terms')}
                                        </Typography>
                                    }
                                />
                                */}

                                <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
                                    <WebTooltip
                                        title={!isFormValid ? "Completa todos los campos obligatorios para enviar el formulario" : ""}
                                        placement="top"
                                    >
                                        <span>
                                            <WebButton
                                                variant="contained"
                                                size="large"
                                                sx={{ minWidth: 200, px: 6 }}
                                                disabled={!isFormValid}
                                            >
                                                {t('contactSales.form.submit')}
                                            </WebButton>
                                        </span>
                                    </WebTooltip>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Container>
            </Box>

            <Footer />
        </Box>
    );
};
