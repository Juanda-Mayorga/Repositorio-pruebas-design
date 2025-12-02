import { Box, Typography, Grid, Button, Container, useTheme } from '@mui/material';
import { PublicHeader } from '../design-system/organisms/PublicHeader';
import { Footer } from '../design-system/organisms/Footer';
import { ContentCard } from '../design-system/organisms/ContentCard';
import TelegramIcon from '@mui/icons-material/Telegram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { useTranslation } from 'react-i18next';

export const ResourcesPage = () => {
    const { t } = useTranslation();
    const theme = useTheme();

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', bgcolor: theme.palette.web.background.default }}>
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
                                <ContentCard
                                    title={t('resources.cards.tips.title')}
                                    description={t('resources.cards.tips.description')}
                                    borderTopColor={theme.palette.web.border.primary}
                                >
                                    <Button variant="outlined" fullWidth sx={{ fontFamily: 'Hind Siliguri' }}>
                                        {t('resources.cards.tips.button')}
                                    </Button>
                                </ContentCard>
                            </Grid>

                            {/* Community Card */}
                            <Grid size={{ xs: 12, md: 3 }}>
                                <ContentCard
                                    title={t('resources.cards.community.title')}
                                    description={t('resources.cards.community.description')}
                                    borderTopColor={theme.palette.web.border.secondary}
                                >
                                    <Box sx={{ display: 'flex', gap: 2 }}>
                                        <Button variant="soft" fullWidth>
                                            <WhatsAppIcon />
                                        </Button>
                                        <Button variant="soft" fullWidth>
                                            <TelegramIcon />
                                        </Button>
                                    </Box>
                                </ContentCard>
                            </Grid>

                            {/* Documentation Card */}
                            <Grid size={{ xs: 12, md: 3 }}>
                                <ContentCard
                                    title={t('resources.cards.documentation.title')}
                                    description={t('resources.cards.documentation.description')}
                                    borderTopColor={theme.palette.web.border.primary}
                                >
                                    <Button variant="outlined" fullWidth sx={{ fontFamily: 'Hind Siliguri' }}>
                                        {t('resources.cards.documentation.button')}
                                    </Button>
                                </ContentCard>
                            </Grid>

                            {/* Support Card */}
                            <Grid size={{ xs: 12, md: 3 }}>
                                <ContentCard
                                    title={t('resources.cards.support.title')}
                                    description={t('resources.cards.support.description')}
                                    borderTopColor={theme.palette.web.border.secondary}
                                >
                                    <Button variant="outlined" fullWidth sx={{ fontFamily: 'Hind Siliguri' }}>
                                        {t('resources.cards.support.button')}
                                    </Button>
                                </ContentCard>
                            </Grid>
                        </Grid>
                    </Box>
                </Container>
            </Box>

            <Footer />
        </Box>
    );
};
