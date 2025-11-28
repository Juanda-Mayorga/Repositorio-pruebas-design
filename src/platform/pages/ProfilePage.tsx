import { useState } from 'react';
import { Box, Typography, Card, CardContent, Grid, Button, Avatar, IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import { useTranslation } from 'react-i18next';
import { InputField } from '../design-system/molecules/InputField';
import { FeedbackSnackbar } from '../design-system/molecules/FeedbackSnackbar';
// TODO: Uncomment when delete account feature is ready
// import { ProfileDeleteAccountModal } from './components/ProfileDeleteAccountModal';

export const ProfilePage = () => {
    const { t } = useTranslation();
    const [formData, setFormData] = useState({
        name: 'Olivia',
        surname: 'Jones',
        email: 'olivia@untitledui.com',
        currentPassword: '',
        newPassword: 'TestPassword123',
        verifyPassword: ''
    });

    const [errors, setErrors] = useState({
        name: '',
        surname: '',
        newPassword: '',
        verifyPassword: ''
    });

    const [snackbar, setSnackbar] = useState({
        open: false,
        message: '',
        severity: 'success' as 'success' | 'error' | 'warning' | 'info'
    });

    // TODO: Uncomment when delete account feature is ready
    // const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

    const handleCloseSnackbar = () => {
        setSnackbar({ ...snackbar, open: false });
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));

        // Real-time validation
        const newErrors = { ...errors };

        if (name === 'name') {
            if (value.length > 0 && value.length < 2) {
                newErrors.name = t('validation.nameRequired');
            } else {
                newErrors.name = '';
            }
        }

        if (name === 'surname') {
            if (value.length > 0 && value.length < 2) {
                newErrors.surname = t('validation.surnameRequired');
            } else {
                newErrors.surname = '';
            }
        }

        if (name === 'newPassword') {
            if (value.length > 0 && value.length < 6) {
                newErrors.newPassword = t('validation.passwordLength');
            } else {
                newErrors.newPassword = '';
            }

            // Also check verify password match
            if (formData.verifyPassword && value !== formData.verifyPassword) {
                newErrors.verifyPassword = t('validation.passwordMatch');
            } else if (formData.verifyPassword) {
                newErrors.verifyPassword = '';
            }
        }

        if (name === 'verifyPassword') {
            if (value && value !== formData.newPassword) {
                newErrors.verifyPassword = t('validation.passwordMatch');
            } else {
                newErrors.verifyPassword = '';
            }
        }

        setErrors(newErrors);
    };

    const validatePersonalDetails = () => {
        let isValid = true;
        const newErrors = { ...errors };

        if (formData.name.length < 2) {
            newErrors.name = t('validation.nameRequired');
            isValid = false;
        }

        if (formData.surname.length < 2) {
            newErrors.surname = t('validation.surnameRequired');
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    const validatePassword = () => {
        let isValid = true;
        const newErrors = { ...errors };

        if (formData.newPassword.length > 0 && formData.newPassword.length < 6) {
            newErrors.newPassword = t('validation.passwordLength');
            isValid = false;
        }

        if (formData.newPassword !== formData.verifyPassword) {
            newErrors.verifyPassword = t('validation.passwordMatch');
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    const handleSavePersonalDetails = () => {
        if (validatePersonalDetails()) {
            console.log('Personal details saved:', { name: formData.name, surname: formData.surname });
            setSnackbar({
                open: true,
                message: t('feedback.profileSaved'),
                severity: 'success'
            });
        }
    };

    const handleUpdatePassword = () => {
        if (validatePassword()) {
            console.log('Password updated');
            setSnackbar({
                open: true,
                message: t('feedback.passwordUpdated'),
                severity: 'success'
            });
        }
    };



    // TODO: Uncomment when delete account feature is ready
    // const handleDeleteAccount = (reason: string, otherReason?: string) => {
    //     console.log('Account deletion requested:', { reason, otherReason });
    //     // Here you would typically make an API call to delete the account
    //     // The modal will close when the user clicks the "Cerrar" button in the success state
    // };

    return (
        <Box sx={{ maxWidth: 800, mx: 'auto' }}>
            <Box sx={{ mb: 2 }}>
                <Typography variant="h4" sx={{ fontWeight: 500, color: 'primary.950', mb: 1, fontSize: '32px', fontFamily: '"Hind Siliguri", sans-serif' }}>
                    {t('profile.title')}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                    {t('profile.subtitle')}
                </Typography>
            </Box>

            <Card sx={{ mb: 4, bgcolor: '#FFFFFF', border: '1px solid', borderColor: 'divider', boxShadow: 'none' }}>
                <CardContent sx={{ p: 4 }}>
                    <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4 }}>
                        <Box sx={{ position: 'relative' }}>
                            <Avatar sx={{ width: 80, height: 80, bgcolor: 'primary.main', fontSize: 32 }}>OJ</Avatar>
                            <IconButton
                                component="label"
                                sx={{
                                    position: 'absolute',
                                    bottom: -4,
                                    right: -4,
                                    bgcolor: '#FFFFFF',
                                    color: '#434343',
                                    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
                                    '&:hover': {
                                        bgcolor: '#F5F5F5',
                                    },
                                    '&:active': {
                                        bgcolor: '#E0E0E0',
                                    },
                                    width: 32,
                                    height: 32,
                                }}
                            >
                                <EditIcon sx={{ fontSize: 18 }} />
                                <input hidden accept="image/*" type="file" />
                            </IconButton>
                        </Box>
                    </Box>

                    <Grid container spacing={3}>
                        <Grid size={{ xs: 12, md: 6 }}>
                            <InputField
                                variant="name"
                                label={t('profile.name')}
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                error={!!errors.name}
                                helperText={errors.name}
                            />
                        </Grid>
                        <Grid size={{ xs: 12, md: 6 }}>
                            <InputField
                                variant="surname"
                                label={t('profile.surname')}
                                name="surname"
                                value={formData.surname}
                                onChange={handleChange}
                                error={!!errors.surname}
                                helperText={errors.surname}
                            />
                        </Grid>
                        <Grid size={{ xs: 12 }}>
                            <InputField
                                variant="email"
                                label={t('profile.email')}
                                name="email"
                                value={formData.email}
                                disabled
                            />
                        </Grid>
                    </Grid>

                    <Box sx={{ mt: 3, display: 'flex', justifyContent: 'flex-end' }}>
                        {/* //TODO: This should be refactored to a global component*/}
                        <Button
                            variant="contained"
                            onClick={handleSavePersonalDetails}
                            sx={{ bgcolor: 'primary.main', '&:hover': { bgcolor: 'primary.dark' }, textTransform: 'none', fontWeight: 600, boxShadow: 'none' }}
                        >
                            {t('profile.save')}
                        </Button>
                    </Box>
                </CardContent>
            </Card>

            <Box sx={{ mb: 2 }}>
                <Typography variant="h5" sx={{ fontWeight: 500, color: 'primary.950', mb: 1, fontSize: '32px', fontFamily: '"Hind Siliguri", sans-serif' }}>
                    {t('profile.security')}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                    {t('profile.securitySubtitle')}
                </Typography>
            </Box>

            <Card sx={{ mb: 4, bgcolor: '#FFFFFF', border: '1px solid', borderColor: 'divider', boxShadow: 'none' }}>
                <CardContent sx={{ p: 4 }}>
                    <Grid container spacing={3}>
                        <Grid size={{ xs: 12 }}>
                            <InputField
                                variant="password"
                                label={t('profile.currentPassword')}
                                name="currentPassword"
                                value={formData.currentPassword}
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid size={{ xs: 12 }}>
                            <InputField
                                variant="password"
                                label={t('profile.newPassword')}
                                placeholder={t('profile.newPasswordPlaceholder')}
                                name="newPassword"
                                value={formData.newPassword}
                                onChange={handleChange}
                                error={!!errors.newPassword}
                                helperText={errors.newPassword}
                            />
                        </Grid>
                        <Grid size={{ xs: 12 }}>
                            <InputField
                                variant="verify_password"
                                label={t('profile.verifyPassword')}
                                placeholder={t('profile.rewritePasswordPlaceholder')}
                                name="verifyPassword"
                                value={formData.verifyPassword}
                                onChange={handleChange}
                                error={!!errors.verifyPassword}
                                helperText={errors.verifyPassword}
                            />
                        </Grid>
                    </Grid>

                    <Box sx={{ mt: 3, display: 'flex', justifyContent: 'flex-end' }}>
                        {/* //TODO: This should be refactored to a global component*/}
                        <Button
                            variant="contained"
                            onClick={handleUpdatePassword}
                            sx={{ bgcolor: 'primary.main', '&:hover': { bgcolor: 'primary.dark' }, textTransform: 'none', fontWeight: 600, boxShadow: 'none' }}
                        >
                            {t('profile.save')}
                        </Button>
                    </Box>
                </CardContent>
            </Card>

            {/* TODO: Uncomment when delete account feature is ready */}
            {/* <Box sx={{ mb: 2 }}>
                <Typography variant="h5" sx={{ fontWeight: 500, color: 'primary.950', mb: 1, fontSize: '32px', fontFamily: '"Hind Siliguri", sans-serif' }}>
                    {t('profile.deleteAccount')}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                    {t('profile.deleteAccountSubtitle')}
                </Typography>
            </Box>

            <Card sx={{ bgcolor: '#FFFFFF', border: '1px solid', borderColor: '#E9E8E8', boxShadow: 'none' }}>
                <CardContent sx={{ p: 4 }}>
                    <Box>
                        <Typography variant="body2" sx={{ color: '#797D80', fontSize: '18px', lineHeight: 1.5, mb: 2 }}>
                            La <Box component="span" sx={{ fontWeight: 700 }}>eliminación de tu cuenta es irreversible</Box> y requiere una <Box component="span" sx={{ fontWeight: 700 }}>solicitud de verificación</Box>. Para proteger tus datos y cumplir la normativa de seguridad, nuestro equipo procesa cada solicitud de baja de forma manual.
                        </Typography>
                        <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                            <Button
                                variant="contained"
                                color="error"
                                onClick={() => setIsDeleteModalOpen(true)}
                                sx={{ textTransform: 'none', fontWeight: 600, boxShadow: 'none', whiteSpace: 'nowrap' }}
                            >
                                {t('profile.deleteButton')}
                            </Button>
                        </Box>
                    </Box>
                </CardContent>
            </Card> */}

            <FeedbackSnackbar
                open={snackbar.open}
                message={snackbar.message}
                severity={snackbar.severity}
                onClose={handleCloseSnackbar}
            />

            {/* TODO: Uncomment when delete account feature is ready */}
            {/* <ProfileDeleteAccountModal
                open={isDeleteModalOpen}
                onClose={() => setIsDeleteModalOpen(false)}
                userEmail={formData.email}
                onConfirm={handleDeleteAccount}
            /> */}
        </Box>
    );
};
