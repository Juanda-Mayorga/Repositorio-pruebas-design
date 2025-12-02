import { Box, Typography, Container, useTheme, TextField, Checkbox, FormControlLabel } from '@mui/material';
import { PublicHeader } from '../design-system/organisms/PublicHeader';
import { Footer } from '../design-system/organisms/Footer';
import { WebButton } from '../design-system/atoms/WebButton';
import { InputField } from '../../platform/design-system/molecules/InputField';
import { useTranslation } from 'react-i18next';

export const ContactSalesPage = () => {
    const { t } = useTranslation();
    const theme = useTheme();

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', bgcolor: theme.palette.web.background.default }}>
            <PublicHeader />

            <Box component="main" sx={{ flexGrow: 1, py: 8 }}>
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
                                    <InputField
                                        variant="name"
                                        label={t('contactSales.form.firstName')}
                                        placeholder={t('contactSales.form.firstNamePlaceholder')}
                                        fullWidth
                                        required
                                    />
                                    <InputField
                                        variant="company" // Reusing company variant style for Job Title
                                        label={t('contactSales.form.jobTitle')}
                                        placeholder={t('contactSales.form.jobTitlePlaceholder')}
                                        fullWidth
                                        required
                                    />
                                    <InputField
                                        variant="surname"
                                        label={t('contactSales.form.lastName')}
                                        placeholder={t('contactSales.form.lastNamePlaceholder')}
                                        fullWidth
                                        required
                                    />
                                    <InputField
                                        variant="country"
                                        label={t('contactSales.form.country')}
                                        placeholder={t('contactSales.form.countryPlaceholder')}
                                        fullWidth
                                        required
                                    />
                                    <InputField
                                        variant="company"
                                        label={t('contactSales.form.company')}
                                        placeholder={t('contactSales.form.companyPlaceholder')}
                                        fullWidth
                                        required
                                    />
                                    <InputField
                                        variant="email"
                                        label={t('contactSales.form.email')}
                                        placeholder={t('contactSales.form.emailPlaceholder')}
                                        fullWidth
                                        required
                                    />
                                </Box>

                                <Box>
                                    <TextField
                                        multiline
                                        rows={4}
                                        fullWidth
                                        placeholder={t('contactSales.form.messagePlaceholder')}
                                        sx={{
                                            '& .MuiOutlinedInput-root': {
                                                borderRadius: 1,
                                                bgcolor: 'background.paper',
                                                '& fieldset': {
                                                    borderColor: 'divider',
                                                },
                                                '&:hover fieldset': {
                                                    borderColor: 'primary.main',
                                                },
                                            }
                                        }}
                                    />
                                </Box>

                                <FormControlLabel
                                    control={<Checkbox sx={{ color: '#D1D5DB', '&.Mui-checked': { color: '#7367B1' } }} />}
                                    label={
                                        <Typography variant="body2" color="text.secondary">
                                            {t('contactSales.form.terms')}
                                        </Typography>
                                    }
                                />

                                <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
                                    <WebButton variant="contained" size="large" sx={{ minWidth: 200, px: 6 }}>
                                        {t('contactSales.form.submit')}
                                    </WebButton>
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
