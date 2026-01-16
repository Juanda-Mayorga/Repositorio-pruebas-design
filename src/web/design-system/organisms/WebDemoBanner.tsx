
import { Box, Container, Typography, useTheme } from '@mui/material';
import { WebButton } from '../atoms/WebButton';

import { useTranslation } from 'react-i18next';

import backgroundDemo from '../../../assets/BMM_MMI_BackgroundDemo.svg';

export const WebDemoBanner = () => {
    const theme = useTheme();
    const { t } = useTranslation();

    return (
        <Box sx={{ pb: 8 }}>
            <Container maxWidth="lg" sx={{ px: { xs: 4, sm: 8, md: 10, lg: 8 } }}>
                <Box sx={{
                    position: 'relative',
                    bgcolor: theme.palette.web.action.primary,
                    borderRadius: '24px',
                    p: { xs: 4, md: 8 },
                    textAlign: 'center',
                    color: '#FFFFFF',
                    overflow: 'hidden'
                }}>
                    <Box sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundImage: `url(${backgroundDemo})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        zIndex: 0,
                        opacity: 0.8
                    }} />
                    <Box sx={{ position: 'relative', zIndex: 1 }}>
                        <Typography variant="h2" sx={{ mb: 3, fontWeight: 500, color: '#FFFFFF' }}>
                            {t('landingPage.demo.title')}
                        </Typography>
                        <WebButton variant="contained" sx={{ bgcolor: '#FDB022', color: '#FFFFFF', '&:hover': { bgcolor: '#F9A01B' }, px: 6, py: 1.5 }}>
                            {t('landingPage.demo.cta')}
                        </WebButton>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};
