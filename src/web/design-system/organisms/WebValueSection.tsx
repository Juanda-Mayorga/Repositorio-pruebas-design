import React from 'react';
import { Box, Container, Typography, Grid, useTheme } from '@mui/material';
import { WebButton } from '../atoms/WebButton';

// Import local images - Adjust paths if necessary
import deliverySoftware from '../../../assets/BMM_MMI_Software.svg';
import deliveryCloud from '../../../assets/BMM_MMI_CloudServices.svg';
import deliverySupport from '../../../assets/BMM_MMI_Support.svg';

export const WebValueSection = () => {
    const theme = useTheme();

    return (
        <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: '#FFFFFF' }}>
            <Container maxWidth="lg" sx={{ px: { xs: 4, sm: 8, md: 10, lg: 8 }, maxWidth: { sm: '604px', md: '100%' } }}>
                <Box sx={{ textAlign: 'center', mb: 8 }}>
                    <Typography
                        variant="h2"
                        sx={{
                            mb: 2,
                            fontWeight: 500,
                            background: 'linear-gradient(to right, #9989EC, #6E659F, #333337)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                            display: 'inline-block',
                            fontSize: { xs: '32px', md: '48px' }
                        }}
                    >
                        How we deliver <Box component="span" sx={{ color: theme.palette.web.action.primary }}>value</Box>?
                    </Typography>
                    <Typography variant="body1" sx={{ color: 'text.secondary', maxWidth: '600px', mx: 'auto' }}>
                        A cost-effective cloud solution for the AECO workflow, ensuring precision and reducing risk.
                    </Typography>
                </Box>

                <Grid container spacing={4}>
                    {[
                        {
                            title: 'Software',
                            description: 'MAMBA software turns BIM models into actionable results',
                            items: ['Eliminate errors', 'Make smarter decisions', 'Keep projects on time and on budget'],
                            image: deliverySoftware,
                            cta: 'See how our software works'
                        },
                        {
                            title: 'Cloud services',
                            description: 'MAMBA\'s cloud platform centralizes licenses, training, and support',
                            items: ['Everything in one place', 'Training built into the platform', 'Grow and align your team'],
                            image: deliveryCloud,
                            cta: 'See how our cloud services work'
                        },
                        {
                            title: 'Support',
                            description: 'Get fast, reliable support directly in MAMBA, available on both the software and cloud',
                            items: ['Support integrated across tools', 'Solve problem faster', 'Support where you work'],
                            image: deliverySupport,
                            cta: 'See how our support works'
                        }
                    ].map((card, index) => (
                        <Grid key={index} size={{ xs: 12, md: 4 }}>
                            <Box sx={{
                                borderRadius: '24px',
                                bgcolor: '#FFFFFF',
                                boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.05)',
                                border: '1px solid rgba(157, 157, 157, 0.4)',
                                transition: 'all 0.3s ease-out',
                                '&:hover': {
                                    transform: 'translateY(-4px)',
                                    boxShadow: '0 12px 24px rgba(0,0,0,0.15)',
                                },
                                height: '100%',
                                display: 'flex',
                                flexDirection: 'column',
                                overflow: 'hidden'
                            }}>
                                <Box
                                    component="img"
                                    src={card.image}
                                    sx={{
                                        width: '100%',
                                        height: { xs: '200px', md: '220px', lg: '240px' },
                                        objectFit: 'cover',
                                        display: 'block'
                                    }}
                                />
                                <Box sx={{ p: { xs: 3, lg: 2.5, xl: 4 }, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                                    <Typography sx={{ mb: 1, fontSize: { xs: '28px', lg: '32px' }, fontWeight: 500, fontFamily: '"Hind Siliguri", sans-serif' }}>{card.title}</Typography>
                                    <Typography variant="body1" sx={{ color: 'text.secondary', mb: 3, fontSize: { xs: '16px', lg: '18px' } }}>{card.description}</Typography>
                                    <Box sx={{ flexGrow: 1, mb: { xs: 1, md: 1, lg: 1, xl: 3 } }}>
                                        <Box sx={{
                                            borderLeft: '3px solid #E0E0E0',
                                            pl: 2,
                                            ml: 0.5,
                                            display: 'flex',
                                            flexDirection: 'column',
                                            gap: 1.5
                                        }}>
                                            {card.items.map((item, i) => (
                                                <Typography
                                                    key={i}
                                                    variant="body2"
                                                    sx={{
                                                        color: 'text.secondary',
                                                        fontWeight: 400,
                                                        fontSize: { xs: '16px', lg: '18px' },
                                                        lineHeight: 1.2
                                                    }}
                                                >
                                                    {item}
                                                </Typography>
                                            ))}
                                        </Box>
                                    </Box>
                                    <WebButton
                                        variant="contained"
                                        fullWidth
                                        sx={{
                                            mt: { xs: 1, md: 1, lg: 1, xl: 3 },
                                            py: 1.5,
                                            px: { lg: 2, xl: 2 },
                                            fontSize: { lg: '16px', xl: '16px' },
                                            textTransform: 'none'
                                        }}
                                    >
                                        {card.cta}
                                    </WebButton>
                                </Box>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};
