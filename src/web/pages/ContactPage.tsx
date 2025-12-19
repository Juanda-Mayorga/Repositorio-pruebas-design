import { Box, Typography, Container, useTheme } from '@mui/material';
import { ContactLayout } from '../design-system/templates/ContactLayout';
import { WebContactCard } from '../design-system/molecules/WebContactCard';
import { WebButton } from '../design-system/atoms/WebButton';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

export const ContactPage = () => {
    const { t } = useTranslation();
    const theme = useTheme();
    const navigate = useNavigate();
    return (
        <ContactLayout>
            <Container maxWidth="lg">
                {/* Header Section */}
                <Box sx={{ textAlign: 'center', mb: 6 }}>
                    <Typography
                        variant="h1"
                        component="h1"
                        sx={{
                            mb: 2,
                            background: 'linear-gradient(to right, #9989EC, #6E659F, #333337)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                            fontFamily: '"Inter", "Hind Siliguri", sans-serif',
                            fontWeight: 500,
                        }}
                    >
                        {t('contact.title')}
                    </Typography>
                    <Typography
                        variant="subtitle1"
                        sx={{
                            color: 'text.secondary',
                            maxWidth: 600,
                            mx: 'auto'
                        }}
                    >
                        {t('contact.subtitle')}
                    </Typography>
                </Box>

                {/* Cards Section */}
                <Container maxWidth="lg" sx={{ mb: 8 }}>
                    <Box sx={{
                        bgcolor: theme.palette.web.background.paper,
                        borderRadius: 4,
                        p: 4,
                        position: 'relative',
                        overflow: 'hidden'
                    }}>
                        {/* Wave Background Image */}
                        <Box sx={{
                            position: 'absolute',
                            bottom: 0,
                            left: 0,
                            right: 0,
                            height: '100%',
                            backgroundImage: 'url(/src/assets/contact-wave-yellow.png)',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center bottom',
                            backgroundRepeat: 'no-repeat',
                            opacity: 1,
                            zIndex: 0
                        }} />

                        {/* Cards Grid */}
                        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 4, position: 'relative', zIndex: 1 }}>
                            {/* Talk to Sales Card */}
                            <WebContactCard
                                title={t('contact.cards.sales.title')}
                                description={t('contact.cards.sales.description')}
                            >
                                <WebButton
                                    variant="outlined"
                                    fullWidth
                                    onClick={() => navigate('/contact-sales')}
                                >
                                    {t('contact.cards.sales.button')}
                                </WebButton>
                            </WebContactCard>

                            {/* Book a Demo Card */}
                            <WebContactCard
                                title={t('contact.cards.demo.title')}
                                description={t('contact.cards.demo.description')}
                            >
                                <WebButton variant="contained" fullWidth>
                                    {t('contact.cards.demo.button')}
                                </WebButton>
                            </WebContactCard>
                        </Box>
                    </Box>
                </Container>
            </Container>
        </ContactLayout>
    );
};
