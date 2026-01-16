import React from 'react';
import { Box, Typography, Container, Grid, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { MambaLogo } from '../atoms/MambaLogo';

const MotionBox = motion(Box);

export const WebEcosystemSection = () => {
    const theme = useTheme();
    const { t } = useTranslation();

    return (
        <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: '#FAFAFA', overflow: 'hidden' }}>
            <Container maxWidth="lg" sx={{ px: { xs: 4, sm: 8, md: 10, lg: 8 } }}>
                <Grid container spacing={8} alignItems="center">
                    {/* Left Column: Text */}
                    <Grid size={{ xs: 12, md: 5 }}>
                        <MotionBox
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <Typography
                                variant="h2"
                                sx={{
                                    fontSize: { xs: '32px', md: '48px' },
                                    fontWeight: 500,
                                    lineHeight: 1.2,
                                    mb: 2,
                                    background: 'linear-gradient(to right, #9989EC, #6E659F, #333337)',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                    backgroundClip: 'text',
                                    display: 'inline-block'
                                }}
                            >
                                {t('landingPage.ecosystem.title')}
                            </Typography>
                            <Typography
                                variant="body1"
                                sx={{
                                    fontSize: '18px',
                                    color: 'text.secondary',
                                    maxWidth: '480px',
                                    lineHeight: 1.6
                                }}
                            >
                                {t('landingPage.ecosystem.description')}
                            </Typography>
                        </MotionBox>
                    </Grid>

                    {/* Right Column: Animated Ecosystem Visual */}
                    <Grid size={{ xs: 12, md: 7 }}>
                        <Box sx={{
                            position: 'relative',
                            height: '600px',
                            width: '100%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            {/* Layer 3: Outer Ring (Solutions) - Rotating */}
                            <Box sx={{
                                position: 'absolute',
                                width: '580px',
                                height: '580px',
                                borderRadius: '50%',
                                border: '1px dashed rgba(110, 101, 159, 0.2)',
                                animation: 'spin 60s linear infinite',
                                '@keyframes spin': {
                                    '0%': { transform: 'rotate(0deg)' },
                                    '100%': { transform: 'rotate(360deg)' }
                                }
                            }} />

                            {/* Layer 2: Middle Ring (Process) */}
                            <Box sx={{
                                position: 'absolute',
                                width: '380px',
                                height: '380px',
                                borderRadius: '50%',
                                border: '1px solid rgba(153, 137, 236, 0.3)',
                                bgcolor: 'rgba(255,255,255,0.4)',
                                backdropFilter: 'blur(10px)'
                            }} />

                            {/* Layer 1: Core Glow */}
                            <Box sx={{
                                position: 'absolute',
                                width: '180px',
                                height: '180px',
                                borderRadius: '50%',
                                background: 'radial-gradient(circle, rgba(153,137,236,0.15) 0%, rgba(255,255,255,0) 70%)',
                                zIndex: 1
                            }} />

                            {/* Center: MAMBA Core */}
                            <Box sx={{
                                position: 'relative',
                                zIndex: 2,
                                p: 4,
                                bgcolor: '#FFFFFF',
                                borderRadius: '50%',
                                boxShadow: '0 20px 40px rgba(110, 101, 159, 0.15)',
                                width: '140px',
                                height: '140px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                <MambaLogo />
                            </Box>

                            {/* Floating Nodes */}
                            {[
                                { id: 'software', angle: 0 },
                                { id: 'cloud', angle: 120 },
                                { id: 'support', angle: 240 }
                            ].map((item, i) => (
                                <Box
                                    key={i}
                                    sx={{
                                        position: 'absolute',
                                        top: '50%',
                                        left: '50%',
                                        width: '100px',
                                        height: '40px',
                                        bgcolor: '#FFFFFF',
                                        borderRadius: '20px',
                                        boxShadow: '0 8px 16px rgba(0,0,0,0.08)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        transform: `translate(-50%, -50%) rotate(${item.angle}deg) translate(290px) rotate(-${item.angle}deg)`,
                                        zIndex: 2
                                    }}
                                >
                                    <Typography variant="subtitle2" sx={{ fontWeight: 600, color: theme.palette.web.action.primary }}>
                                        {t(`landingPage.ecosystem.labels.${item.id}`)}
                                    </Typography>
                                </Box>
                            ))}
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};
