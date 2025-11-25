import { useState } from 'react';
import { Box, Typography, Card, CardContent, Grid, Button, TextField, Avatar } from '@mui/material';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import DeleteIcon from '@mui/icons-material/Delete';
import { useTranslation } from 'react-i18next';
import { PasswordField } from '../design-system/molecules/PasswordField';
import { FeedbackSnackbar } from '../design-system/molecules/FeedbackSnackbar';

export const ProfilePage = () => {
    const { t } = useTranslation();
    const [formData, setFormData] = useState({
        name: 'Olivia',
        surname: 'Jones',
        email: 'olivia@untitledui.com',
        currentPassword: '',
        newPassword: '',
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

    const commonTextFieldStyles = {
        '& .MuiOutlinedInput-root': {
            bgcolor: 'background.paper',
            '& fieldset': {
                borderColor: 'divider',
            },
            '&:hover fieldset': {
                borderColor: 'action.hover',
            },
            '&.Mui-focused fieldset': {
                borderColor: 'primary.main',
                borderWidth: '1px',
                boxShadow: '0px 0px 0px 4px rgba(99, 102, 241, 0.10)',
            },
            '&.Mui-error fieldset': {
                borderColor: 'error.main',
            },
            '&.Mui-disabled': {
                bgcolor: 'action.disabledBackground',
                '& fieldset': {
                    borderColor: 'divider',
                },
            },
            '& input': {
                color: 'text.primary',
                fontFamily: '"Hind Siliguri", sans-serif',
                fontWeight: 500,
                letterSpacing: '-0.02em',
                '&::placeholder': {
                    color: 'text.disabled',
                    opacity: 1,
                },
            },
        },
        '& .MuiInputLabel-root': {
            color: 'text.secondary',
            fontFamily: '"Hind Siliguri", sans-serif',
            fontWeight: 500,
            fontSize: '20px',
            letterSpacing: '-0.02em',
            transform: 'translate(0, -28px) scale(1)',
            '&.Mui-focused': {
                color: 'text.secondary',
            },
            '&.Mui-error': {
                color: 'error.main',
            },
        },
        '& .MuiFormHelperText-root': {
            marginLeft: 0,
            fontFamily: '"Hind Siliguri", sans-serif',
            fontWeight: 500,
            letterSpacing: '-0.02em',
            '&.Mui-error': {
                color: 'error.main',
            },
        },
        marginTop: '28px',
    };

    return (
        <Box sx={{ maxWidth: 800, mx: 'auto' }}>
            <Box sx={{ mb: 4 }}>
                <Typography variant="h4" sx={{ fontWeight: 600, color: 'text.primary', mb: 1 }}>
                    {t('profile.title')}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                    {t('profile.subtitle')}
                </Typography>
            </Box>

            <Card sx={{ mb: 4, bgcolor: 'background.paper' }}>
                <CardContent sx={{ p: 4 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 3, mb: 4 }}>
                        <Avatar sx={{ width: 80, height: 80, bgcolor: 'primary.main', fontSize: 32 }}>OJ</Avatar>
                        <Box>
                            <Button
                                component="label"
                                variant="outlined"
                                startIcon={<PhotoCamera />}
                                sx={{ mb: 1, textTransform: 'none', fontWeight: 600, color: 'text.primary', borderColor: 'divider' }}
                            >
                                {t('profile.addImage')}
                                <input hidden accept="image/*" type="file" />
                            </Button>
                            <Typography variant="caption" display="block" color="text.secondary">
                                {t('profile.maxSize')}
                            </Typography>
                        </Box>
                    </Box>

                    <Grid container spacing={3}>
                        <Grid size={{ xs: 12, md: 6 }}>
                            <TextField
                                fullWidth
                                label={t('profile.name')}
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                error={!!errors.name}
                                helperText={errors.name}
                                sx={commonTextFieldStyles}
                                InputLabelProps={{ shrink: true }}
                            />
                        </Grid>
                        <Grid size={{ xs: 12, md: 6 }}>
                            <TextField
                                fullWidth
                                label={t('profile.surname')}
                                name="surname"
                                value={formData.surname}
                                onChange={handleChange}
                                error={!!errors.surname}
                                helperText={errors.surname}
                                sx={commonTextFieldStyles}
                                InputLabelProps={{ shrink: true }}
                            />
                        </Grid>
                        <Grid size={{ xs: 12 }}>
                            <TextField
                                fullWidth
                                label={t('profile.email')}
                                name="email"
                                value={formData.email}
                                disabled
                                sx={commonTextFieldStyles}
                                InputLabelProps={{ shrink: true }}
                            />
                        </Grid>
                    </Grid>

                    <Box sx={{ mt: 3, display: 'flex', justifyContent: 'flex-end' }}>
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

            <Box sx={{ mb: 4 }}>
                <Typography variant="h5" sx={{ fontWeight: 600, color: 'text.primary', mb: 1 }}>
                    {t('profile.security')}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                    {t('profile.securitySubtitle')}
                </Typography>
            </Box>

            <Card sx={{ mb: 4, bgcolor: 'background.paper' }}>
                <CardContent sx={{ p: 4 }}>
                    <Grid container spacing={3}>
                        <Grid size={{ xs: 12 }}>
                            <PasswordField
                                label={t('profile.currentPassword')}
                                name="currentPassword"
                                value={formData.currentPassword}
                                onChange={handleChange}
                                sx={commonTextFieldStyles}
                                InputLabelProps={{ shrink: true }}
                            />
                        </Grid>
                        <Grid size={{ xs: 12 }}>
                            <PasswordField
                                label={t('profile.newPassword')}
                                name="newPassword"
                                value={formData.newPassword}
                                onChange={handleChange}
                                error={!!errors.newPassword}
                                helperText={errors.newPassword}
                                sx={commonTextFieldStyles}
                                InputLabelProps={{ shrink: true }}
                            />
                        </Grid>
                        <Grid size={{ xs: 12 }}>
                            <PasswordField
                                label={t('profile.verifyPassword')}
                                name="verifyPassword"
                                value={formData.verifyPassword}
                                onChange={handleChange}
                                error={!!errors.verifyPassword}
                                helperText={errors.verifyPassword}
                                sx={commonTextFieldStyles}
                                InputLabelProps={{ shrink: true }}
                            />
                        </Grid>
                    </Grid>

                    <Box sx={{ mt: 3, display: 'flex', justifyContent: 'flex-end' }}>
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

            <Box sx={{ mb: 2 }}>
                <Typography variant="h5" sx={{ fontWeight: 600, color: 'error.main', mb: 1 }}>
                    {t('profile.deleteAccount')}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                    {t('profile.deleteWarning')}
                </Typography>
            </Box>

            <Card sx={{ bgcolor: 'error.lighter', border: '1px solid', borderColor: 'error.light' }}>
                <CardContent sx={{ p: 3, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                        <Avatar sx={{ bgcolor: 'error.light', color: 'error.main' }}>
                            <DeleteIcon />
                        </Avatar>
                        <Box>
                            <Typography variant="subtitle1" fontWeight="bold" color="error.main">
                                {t('profile.deleteAccount')}
                            </Typography>
                            <Typography variant="body2" color="error.main">
                                {t('profile.deleteWarning')}
                            </Typography>
                        </Box>
                    </Box>
                    <Button variant="contained" color="error" sx={{ textTransform: 'none', fontWeight: 600, boxShadow: 'none' }}>
                        {t('profile.deleteButton')}
                    </Button>
                </CardContent>
            </Card>

            <FeedbackSnackbar
                open={snackbar.open}
                message={snackbar.message}
                severity={snackbar.severity}
                onClose={handleCloseSnackbar}
            />
        </Box>
    );
};
