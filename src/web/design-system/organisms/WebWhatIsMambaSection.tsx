import React from 'react';
import { Box, Container, Grid, Typography, useTheme } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { WebButton } from '../atoms/WebButton';

export const WebWhatIsMambaSection = () => {
    const { t } = useTranslation();
    const theme = useTheme();

    return (
        <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: '#F8F9FA' }}>
            <Container maxWidth="lg" sx={{ px: { xs: 4, sm: 8, md: 10, lg: 8 }, maxWidth: { sm: '604px', md: '100%' } }}>
                <Grid container spacing={6} alignItems="center">
                    <Grid size={{ xs: 12, md: 6 }}>
                        <Typography
                            variant="h2"
                            sx={{
                                mb: 3,
                                fontWeight: 500,
                                background: 'linear-gradient(to right, #9989EC, #6E659F, #333337)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                backgroundClip: 'text',
                                display: 'inline-block',
                                fontSize: { xs: '32px', md: '48px' }
                            }}
                        >
                            What is <Box component="span" sx={{ color: theme.palette.web.action.primary }}>MAMBA</Box>?
                        </Typography>
                        <Typography variant="body1" sx={{ color: 'text.secondary', mb: 4 }}>
                            MAMBA is a cloud-based measurement and cost estimation software designed
                            specifically for the AECO industry. It connects your BIM models to your
                            budgets in real-time.
                        </Typography>
                        {[
                            "Conecta mediciones con presupuestos en la nube",
                            "Actualizaciones automáticas ante cambios de diseño",
                            "Colaboración en tiempo real para todo el equipo"
                        ].map((text, i) => (
                            <Box key={i} sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                                <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: theme.palette.web.action.primary, mr: 2 }} />
                                <Typography sx={{ color: '#333337', fontWeight: 500 }}>{text}</Typography>
                            </Box>
                        ))}
                        <WebButton variant="contained" sx={{ mt: 4, px: 6 }}>
                            {t('landingPage.whatIsMamba.cta')}
                        </WebButton>
                    </Grid>
                    <Grid size={{ xs: 12, md: 6 }}>
                        <Box sx={{
                            position: 'relative',
                            pt: '56.25%',
                            borderRadius: '24px',
                            overflow: 'hidden',
                            boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                            bgcolor: '#000000'
                        }}>
                            <Box
                                component="img"
                                src="https://via.placeholder.com/800x450?text=Software+Demo+Video"
                                sx={{
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover'
                                }}
                            />
                            <Box sx={{
                                position: 'absolute',
                                top: '50%',
                                left: '50%',
                                transform: 'translate(-50%, -50%)',
                                width: 64,
                                height: 64,
                                bgcolor: 'rgba(255,255,255,0.9)',
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                cursor: 'pointer',
                                '&:hover': { bgcolor: '#FFFFFF', scale: 1.1 },
                                transition: 'all 0.2s'
                            }}>
                                <Box sx={{
                                    width: 0,
                                    height: 0,
                                    borderTop: '10px solid transparent',
                                    borderBottom: '10px solid transparent',
                                    borderLeft: `16px solid ${theme.palette.web.action.primary} `,
                                    ml: 0.5
                                }} />
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};
