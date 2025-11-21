import { Box, Typography, Card, CardContent, Button, Chip, Divider, Grid } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import PersonIcon from '@mui/icons-material/Person';

const FeatureStatus = ({ active }: { active: boolean }) => {
    return active ? (
        <CheckCircleIcon sx={{ color: '#C4B5FD', bgcolor: '#F3F4F6', borderRadius: '50%', p: 0.5 }} />
    ) : (
        <CancelIcon sx={{ color: '#9CA3AF', bgcolor: '#F3F4F6', borderRadius: '50%', p: 0.5 }} />
    );
};

const FeatureRow = ({ label, active }: { label: string; active: boolean }) => (
    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', py: 1 }}>
        <Typography variant="body2" color="text.secondary">{label}</Typography>
        <FeatureStatus active={active} />
    </Box>
);

export const SubscriptionPage = () => {
    return (
        <Box sx={{ maxWidth: 1200, mx: 'auto' }}>
            <Typography variant="body2" color="text.secondary" gutterBottom>
                Plan and subscription
            </Typography>
            <Typography variant="h4" sx={{ fontWeight: 600, color: '#374151', mb: 1 }}>
                Plan and subscription
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 4 }}>
                Manage your plan, licenses, and subscription options
            </Typography>

            <Grid container spacing={3} sx={{ mb: 4 }}>
                <Grid size={{ xs: 12, md: 8 }}>
                    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                        <CardContent>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 3 }}>
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                    <Typography variant="h5" fontWeight="bold">Trial</Typography>
                                    <Chip label="Active" size="small" sx={{ bgcolor: '#D1FAE5', color: '#065F46', fontWeight: 600 }} />
                                </Box>
                                <Button variant="contained" color="primary" sx={{ bgcolor: '#5B4D9D' }}>
                                    Update plan
                                </Button>
                            </Box>

                            <Box sx={{ display: 'flex', gap: 4 }}>
                                <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
                                    <Box sx={{ bgcolor: '#F3F4F6', p: 1, borderRadius: 1 }}>
                                        <CalendarTodayIcon color="action" />
                                    </Box>
                                    <Box>
                                        <Typography variant="caption" color="text.secondary" display="block">Next renewal</Typography>
                                        <Typography variant="body2">October 15, 2026</Typography>
                                    </Box>
                                </Box>

                                <Divider orientation="vertical" flexItem />

                                <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
                                    <Box sx={{ bgcolor: '#F3F4F6', p: 1, borderRadius: 1 }}>
                                        <PersonIcon color="action" />
                                    </Box>
                                    <Box>
                                        <Typography variant="caption" color="text.secondary" display="block">License type</Typography>
                                        <Typography variant="body2">Single seat</Typography>
                                    </Box>
                                </Box>

                                <Divider orientation="vertical" flexItem />

                                <Box sx={{ display: 'flex', alignItems: 'baseline', gap: 0.5 }}>
                                    <Typography variant="h4" fontWeight="bold">0€</Typography>
                                    <Typography variant="body2" color="text.secondary">/14 days</Typography>
                                </Box>
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid size={{ xs: 12, md: 4 }}>
                    <Card sx={{ height: '100%' }}>
                        <CardContent>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                                <Typography variant="h6" fontWeight="bold">Payment method</Typography>
                                <Button variant="outlined" color="inherit" size="small">Update</Button>
                            </Box>
                            <Typography variant="body2" color="text.secondary">
                                There is no payment method registered. It will be saved upon your first purchase.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>

            <Card>
                <CardContent>
                    <Grid container spacing={4}>
                        <Grid size={{ xs: 12, md: 4 }}>
                            <Typography variant="h6" fontWeight="bold" gutterBottom>Feature</Typography>

                            <Box sx={{ mb: 3 }}>
                                <Typography variant="subtitle2" fontWeight="bold" gutterBottom>Filtering</Typography>
                                <FeatureRow label="Filters by category" active={true} />
                                <FeatureRow label="Export filters" active={true} />
                                <FeatureRow label="Shared filters online" active={false} />
                            </Box>

                            <Box>
                                <Typography variant="subtitle2" fontWeight="bold" gutterBottom>Ruling</Typography>
                                <FeatureRow label="Audit rules" active={false} />
                                <FeatureRow label="Cost estimating rules" active={true} />
                                <FeatureRow label="Clash detection rules" active={false} />
                                <FeatureRow label="Planning rules" active={false} />
                                <FeatureRow label="Export rules" active={true} />
                                <FeatureRow label="Shared rules online" active={false} />
                                <FeatureRow label="Information Delivery Specification (IDS)" active={false} />
                            </Box>

                            <Box sx={{ mt: 3 }}>
                                <Typography variant="subtitle2" fontWeight="bold" gutterBottom>Communications</Typography>
                                {/* Add items if visible in full design, assuming truncated */}
                            </Box>
                        </Grid>

                        <Grid size={{ xs: 12, md: 4 }}>
                            <Typography variant="h6" fontWeight="bold" gutterBottom>Progress Certification</Typography>
                            <FeatureRow label="Filters by category" active={true} />

                            <Box sx={{ mt: 4 }}>
                                <Typography variant="h6" fontWeight="bold" gutterBottom>File system</Typography>
                                <Typography variant="subtitle2" fontWeight="bold" gutterBottom>Templates</Typography>
                                <Divider sx={{ mb: 1 }} />
                                <FeatureRow label="Default document" active={true} />
                                <FeatureRow label="Custom document" active={false} />
                                <FeatureRow label="Shared document" active={false} />

                                <Typography variant="subtitle2" fontWeight="bold" sx={{ mt: 2 }} gutterBottom>Save Options</Typography>
                                <Divider sx={{ mb: 1 }} />
                                <FeatureRow label="Save/Autosave" active={true} />
                            </Box>
                        </Grid>

                        <Grid size={{ xs: 12, md: 4 }}>
                            {/* Spacer or 3rd column content */}
                            <Box sx={{ mt: 0 }}> {/* Aligned with Progress Certification visually? No, it's Publish */}
                                <Typography variant="h6" fontWeight="bold" gutterBottom>Publish</Typography>
                                <Typography variant="subtitle2" fontWeight="bold" gutterBottom>Templates</Typography>
                                <Divider sx={{ mb: 1 }} />
                                <FeatureRow label="Default report" active={true} />
                                <FeatureRow label="Custom report" active={false} />
                                <FeatureRow label="Shared report" active={false} />
                            </Box>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </Box>
    );
};
