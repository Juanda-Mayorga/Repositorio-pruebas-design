import { Box, Typography, Card, CardContent, Grid, Button, Container } from '@mui/material';
import { PublicHeader } from '../design-system/organisms/PublicHeader';
import { Footer } from '../design-system/organisms/Footer';
import TelegramIcon from '@mui/icons-material/Telegram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { useTranslation } from 'react-i18next';

export const ResourcesPage = () => {
    const { t } = useTranslation();

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', bgcolor: '#FCFCFC' }}>
            <PublicHeader />

            <Box component="main" sx={{ flexGrow: 1 }}>
                {/* Hero Section */}
                <Box sx={{ textAlign: 'center', py: 8, px: 2 }}>
                    <Typography
                        variant="h1"
                        component="h1"
                        sx={{
                            mb: 2,
                        }}
                    >
                        {t('resources.hero.title')}
                    </Typography>
                    <Typography variant="h6" sx={{ color: 'text.secondary', maxWidth: 600, mx: 'auto', fontWeight: 'normal', fontFamily: 'Hind Siliguri' }}>
                        {t('resources.hero.subtitle')}
                    </Typography>
                </Box>

                {/* Cards Section */}
                <Container maxWidth="lg" sx={{ mb: 8 }}>
                    <Box sx={{
                        bgcolor: '#F3F4F6',
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
                            backgroundImage: 'url(/src/assets/wave-background.png)',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center bottom',
                            backgroundRepeat: 'no-repeat',
                            opacity: 0.6,
                            zIndex: 0
                        }} />

                        <Grid container spacing={3} sx={{ position: 'relative', zIndex: 1 }}>
                            {/* Tips & Tricks Card */}
                            <Grid size={{ xs: 12, md: 3 }}>
                                <Card sx={{
                                    height: '100%',
                                    borderTop: '4px solid #736D8D',
                                    transition: 'all 0.3s ease-out',
                                    '&:hover': {
                                        transform: 'scale(1.02)',
                                        boxShadow: '0 12px 24px rgba(0,0,0,0.15)',
                                    }
                                }}>
                                    <CardContent sx={{ display: 'flex', flexDirection: 'column', height: '100%', p: 3 }}>
                                        <Typography variant="h3" sx={{ mb: 2, color: '#5C528E' }}>
                                            {t('resources.cards.tips.title')}
                                        </Typography>
                                        <Typography variant="body1" sx={{ mb: 3, flexGrow: 1, color: '#797979' }}>
                                            {t('resources.cards.tips.description')}
                                        </Typography>
                                        <Button variant="outlined" fullWidth sx={{ fontFamily: 'Hind Siliguri' }}>
                                            {t('resources.cards.tips.button')}
                                        </Button>
                                    </CardContent>
                                </Card>
                            </Grid>

                            {/* Community Card */}
                            <Grid size={{ xs: 12, md: 3 }}>
                                <Card sx={{
                                    height: '100%',
                                    borderTop: '4px solid #FDD550',
                                    transition: 'all 0.3s ease-out',
                                    '&:hover': {
                                        transform: 'scale(1.02)',
                                        boxShadow: '0 12px 24px rgba(0,0,0,0.15)',
                                    }
                                }}>
                                    <CardContent sx={{ display: 'flex', flexDirection: 'column', height: '100%', p: 3 }}>
                                        <Typography variant="h3" sx={{ mb: 2, color: '#5C528E' }}>
                                            {t('resources.cards.community.title')}
                                        </Typography>
                                        <Typography variant="body1" sx={{ mb: 3, flexGrow: 1, color: '#797979' }}>
                                            {t('resources.cards.community.description')}
                                        </Typography>
                                        <Box sx={{ display: 'flex', gap: 2 }}>
                                            <Button variant="soft" fullWidth>
                                                <WhatsAppIcon />
                                            </Button>
                                            <Button variant="soft" fullWidth>
                                                <TelegramIcon />
                                            </Button>
                                        </Box>
                                    </CardContent>
                                </Card>
                            </Grid>

                            {/* Documentation Card */}
                            <Grid size={{ xs: 12, md: 3 }}>
                                <Card sx={{
                                    height: '100%',
                                    borderTop: '4px solid #736D8D',
                                    transition: 'all 0.3s ease-out',
                                    '&:hover': {
                                        transform: 'scale(1.02)',
                                        boxShadow: '0 12px 24px rgba(0,0,0,0.15)',
                                    }
                                }}>
                                    <CardContent sx={{ display: 'flex', flexDirection: 'column', height: '100%', p: 3 }}>
                                        <Typography variant="h3" sx={{ mb: 2, color: '#5C528E' }}>
                                            {t('resources.cards.documentation.title')}
                                        </Typography>
                                        <Typography variant="body1" sx={{ mb: 3, flexGrow: 1, color: '#797979' }}>
                                            {t('resources.cards.documentation.description')}
                                        </Typography>
                                        <Button variant="outlined" fullWidth sx={{ fontFamily: 'Hind Siliguri' }}>
                                            {t('resources.cards.documentation.button')}
                                        </Button>
                                    </CardContent>
                                </Card>
                            </Grid>

                            {/* Support Card */}
                            <Grid size={{ xs: 12, md: 3 }}>
                                <Card sx={{
                                    height: '100%',
                                    borderTop: '4px solid #FDD550',
                                    transition: 'all 0.3s ease-out',
                                    '&:hover': {
                                        transform: 'scale(1.02)',
                                        boxShadow: '0 12px 24px rgba(0,0,0,0.15)',
                                    }
                                }}>
                                    <CardContent sx={{ display: 'flex', flexDirection: 'column', height: '100%', p: 3 }}>
                                        <Typography variant="h3" sx={{ mb: 2, color: '#5C528E' }}>
                                            {t('resources.cards.support.title')}
                                        </Typography>
                                        <Typography variant="body1" sx={{ mb: 3, flexGrow: 1, color: '#797979' }}>
                                            {t('resources.cards.support.description')}
                                        </Typography>
                                        <Button variant="outlined" fullWidth sx={{ fontFamily: 'Hind Siliguri' }}>
                                            {t('resources.cards.support.button')}
                                        </Button>
                                    </CardContent>
                                </Card>
                            </Grid>
                        </Grid>
                    </Box>
                </Container>
            </Box>

            <Footer />
        </Box>
    );
};
