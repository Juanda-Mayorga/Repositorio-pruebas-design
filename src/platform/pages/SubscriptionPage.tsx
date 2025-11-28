import { Box, Typography, Card, CardContent, Grid, Button, LinearProgress } from '@mui/material';
import { useTranslation } from 'react-i18next';

export const SubscriptionPage = () => {
    const { t } = useTranslation();

    return (
        <Box sx={{ maxWidth: 1200, mx: 'auto' }}>
            <Typography variant="body2" color="text.secondary" gutterBottom>
                {t('subscription.title')}
            </Typography>
            <Typography variant="h4" sx={{ fontWeight: 600, color: 'text.primary', mb: 1 }}>
                {t('subscription.title')}
            </Typography>

            <Grid container spacing={3} sx={{ mb: 4 }}>
                <Grid size={{ xs: 12, md: 8 }}>
                    <Card sx={{ height: '100%', bgcolor: 'background.paper' }}>
                        <CardContent>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
                                <Box>
                                    <Typography variant="h6" fontWeight="bold" color="text.primary">
                                        {t('subscription.standardPlan')}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {t('subscription.renewsOn', { date: 'July 12th, 2024' })}
                                    </Typography>
                                </Box>
                                <Button variant="contained" sx={{ bgcolor: '#E0E7FF', color: '#4338CA', '&:hover': { bgcolor: '#C7D2FE' }, textTransform: 'none', fontWeight: 600, boxShadow: 'none' }}>
                                    {t('subscription.upgradePlan')}
                                </Button>
                            </Box>

                            <Typography variant="h3" fontWeight="bold" sx={{ mb: 1, color: 'text.primary' }}>
                                $49.00 <Typography component="span" variant="body1" color="text.secondary">/ {t('subscription.billedMonthly')}</Typography>
                            </Typography>
                            <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                                {t('subscription.billedMonthly')}
                            </Typography>

                            <Box sx={{ mb: 3 }}>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                                    <Typography variant="body2" fontWeight="medium" color="text.primary">{t('subscription.storage')}</Typography>
                                    <Typography variant="body2" color="text.secondary">{t('subscription.used', { percentage: 75 })}</Typography>
                                </Box>
                                <LinearProgress variant="determinate" value={75} sx={{ height: 8, borderRadius: 4, bgcolor: 'action.hover', '& .MuiLinearProgress-bar': { bgcolor: 'primary.main' } }} />
                                <Typography variant="caption" color="text.secondary" sx={{ mt: 0.5, display: 'block' }}>
                                    {t('subscription.storageDetail', { used: 15, total: 20 })}
                                </Typography>
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid size={{ xs: 12, md: 4 }}>
                    <Card sx={{ height: '100%', bgcolor: 'primary.main', color: 'white' }}>
                        <CardContent sx={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'space-between' }}>
                            <Box>
                                <Typography variant="h6" fontWeight="bold" gutterBottom>
                                    {t('subscription.needMoreSpace')}
                                </Typography>
                                <Typography variant="body2" sx={{ opacity: 0.9 }}>
                                    {t('subscription.upgradePro')}
                                </Typography>
                            </Box>
                            <Button variant="contained" sx={{ mt: 2, bgcolor: 'white', color: 'primary.main', '&:hover': { bgcolor: 'rgba(255, 255, 255, 0.9)' }, textTransform: 'none', fontWeight: 600 }}>
                                {t('subscription.contactSales')}
                            </Button>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>

            <Typography variant="h6" sx={{ fontWeight: 600, color: 'text.primary', mb: 2 }}>
                {t('subscription.paymentMethod')}
            </Typography>
            <Card sx={{ mb: 4, bgcolor: 'background.paper' }}>
                <CardContent sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 2 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                        <Box sx={{ width: 48, height: 32, bgcolor: 'action.hover', borderRadius: 0.5, display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid', borderColor: 'divider' }}>
                            {/* Placeholder for Visa Logo */}
                            <Typography variant="caption" fontWeight="bold" color="text.secondary">VISA</Typography>
                        </Box>
                        <Box>
                            <Typography variant="subtitle2" fontWeight="bold" color="text.primary">
                                {t('subscription.visaEnding', { last4: '4242' })}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {t('subscription.expiry', { date: '12/2024' })}
                            </Typography>
                        </Box>
                    </Box>
                    <Button variant="outlined" sx={{ textTransform: 'none', fontWeight: 600, borderColor: 'divider', color: 'text.primary' }}>
                        {t('subscription.edit')}
                    </Button>
                </CardContent>
            </Card>

            <Typography variant="h6" sx={{ fontWeight: 600, color: 'text.primary', mb: 2 }}>
                {t('subscription.billingHistory')}
            </Typography>
            <Card sx={{ bgcolor: 'background.paper' }}>
                <CardContent>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', py: 2, borderBottom: '1px solid', borderColor: 'divider' }}>
                        <Box>
                            <Typography variant="subtitle2" fontWeight="bold" color="text.primary">{t('subscription.invoice', { number: '001' })}</Typography>
                            <Typography variant="body2" color="text.secondary">July 12, 2024</Typography>
                        </Box>
                        <Box sx={{ textAlign: 'right' }}>
                            <Typography variant="subtitle2" fontWeight="bold" color="text.primary">$49.00</Typography>
                            <Typography variant="caption" sx={{ bgcolor: '#DEF7EC', color: '#03543F', px: 1, py: 0.5, borderRadius: 0.5, fontWeight: 'bold' }}>{t('subscription.paid')}</Typography>
                        </Box>
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', py: 2 }}>
                        <Box>
                            <Typography variant="subtitle2" fontWeight="bold" color="text.primary">{t('subscription.invoice', { number: '002' })}</Typography>
                            <Typography variant="body2" color="text.secondary">June 12, 2024</Typography>
                        </Box>
                        <Box sx={{ textAlign: 'right' }}>
                            <Typography variant="subtitle2" fontWeight="bold" color="text.primary">$49.00</Typography>
                            <Typography variant="caption" sx={{ bgcolor: '#DEF7EC', color: '#03543F', px: 1, py: 0.5, borderRadius: 0.5, fontWeight: 'bold' }}>{t('subscription.paid')}</Typography>
                        </Box>
                    </Box>
                </CardContent>
            </Card>
        </Box>
    );
};
