import { Box, Typography, Card, CardContent, Grid, Button, Container } from '@mui/material';
import { PublicHeader } from '../design-system/organisms/PublicHeader';
import { Footer } from '../design-system/organisms/Footer';
import TelegramIcon from '@mui/icons-material/Telegram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

export const ResourcesPage = () => {
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
                            background: 'linear-gradient(135deg, #9989EC 0%, #6E659F 50%, #333337 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                        }}
                    >
                        Learn, connect and solve faster
                    </Typography>
                    <Typography variant="h6" sx={{ color: 'text.secondary', maxWidth: 600, mx: 'auto', fontWeight: 'normal', fontFamily: 'Hind Siliguri' }}>
                        Access FAQs, practical tips, community insights and dedicated support for MAMBA
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
                                <Card sx={{ height: '100%', borderRadius: 2, borderTop: '4px solid #6366F1' }}>
                                    <CardContent sx={{ display: 'flex', flexDirection: 'column', height: '100%', p: 3 }}>
                                        <Typography variant="h5" sx={{ fontWeight: 600, mb: 2, color: '#4338CA', fontFamily: 'Hind Siliguri' }}>
                                            Tips&Tricks
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary" sx={{ mb: 3, flexGrow: 1, fontFamily: 'Hind Siliguri' }}>
                                            Discover expert shortcuts and practical use cases to work faster and smarter
                                        </Typography>
                                        <Button variant="outlined" fullWidth sx={{ textTransform: 'none', color: '#6366F1', borderColor: '#6366F1', fontFamily: 'Hind Siliguri' }}>
                                            See Tips
                                        </Button>
                                    </CardContent>
                                </Card>
                            </Grid>

                            {/* Community Card */}
                            <Grid size={{ xs: 12, md: 3 }}>
                                <Card sx={{ height: '100%', borderRadius: 2, borderTop: '4px solid #FBBF24' }}>
                                    <CardContent sx={{ display: 'flex', flexDirection: 'column', height: '100%', p: 3 }}>
                                        <Typography variant="h5" sx={{ fontWeight: 600, mb: 2, color: '#4338CA', fontFamily: 'Hind Siliguri' }}>
                                            Community
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary" sx={{ mb: 3, flexGrow: 1, fontFamily: 'Hind Siliguri' }}>
                                            MAMBA users share tips, ask questions, and exchange best practices join our community
                                        </Typography>
                                        <Box sx={{ display: 'flex', gap: 2 }}>
                                            <Button variant="contained" fullWidth sx={{ bgcolor: '#E0E7FF', color: '#4338CA', '&:hover': { bgcolor: '#C7D2FE' }, boxShadow: 'none' }}>
                                                <WhatsAppIcon />
                                            </Button>
                                            <Button variant="contained" fullWidth sx={{ bgcolor: '#E0E7FF', color: '#4338CA', '&:hover': { bgcolor: '#C7D2FE' }, boxShadow: 'none' }}>
                                                <TelegramIcon />
                                            </Button>
                                        </Box>
                                    </CardContent>
                                </Card>
                            </Grid>

                            {/* Documentation Card */}
                            <Grid size={{ xs: 12, md: 3 }}>
                                <Card sx={{ height: '100%', borderRadius: 2, borderTop: '4px solid #6366F1' }}>
                                    <CardContent sx={{ display: 'flex', flexDirection: 'column', height: '100%', p: 3 }}>
                                        <Typography variant="h5" sx={{ fontWeight: 600, mb: 2, color: '#4338CA', fontFamily: 'Hind Siliguri' }}>
                                            Documentation
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary" sx={{ mb: 3, flexGrow: 1, fontFamily: 'Hind Siliguri' }}>
                                            Explore answers to the most frequent questions about using MAMBA
                                        </Typography>
                                        <Button variant="outlined" fullWidth sx={{ textTransform: 'none', color: '#6366F1', borderColor: '#6366F1', fontFamily: 'Hind Siliguri' }}>
                                            Quick Help
                                        </Button>
                                    </CardContent>
                                </Card>
                            </Grid>

                            {/* Support Card */}
                            <Grid size={{ xs: 12, md: 3 }}>
                                <Card sx={{ height: '100%', borderRadius: 2, borderTop: '4px solid #FBBF24' }}>
                                    <CardContent sx={{ display: 'flex', flexDirection: 'column', height: '100%', p: 3 }}>
                                        <Typography variant="h5" sx={{ fontWeight: 600, mb: 2, color: '#4338CA', fontFamily: 'Hind Siliguri' }}>
                                            Support
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary" sx={{ mb: 3, flexGrow: 1, fontFamily: 'Hind Siliguri' }}>
                                            Log in to your MAMBA account so we can help you faster:
                                        </Typography>
                                        <Button variant="outlined" fullWidth sx={{ textTransform: 'none', color: '#6366F1', borderColor: '#6366F1', fontFamily: 'Hind Siliguri' }}>
                                            Log in
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
