import { Box, Container, Grid, Typography, IconButton, Link } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';

export const Footer = () => {
    return (
        <Box component="footer" sx={{ bgcolor: 'background.paper', py: 6, borderTop: '1px solid', borderColor: 'divider', mt: 'auto' }}>
            <Container maxWidth="lg">
                <Grid container spacing={4}>
                    <Grid size={{ xs: 12, md: 4 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                            <Box sx={{ width: 32, height: 32, bgcolor: 'primary.main', borderRadius: 1 }} />
                            <Typography variant="h6" fontWeight="bold" color="text.primary">
                                MAMBA
                            </Typography>
                        </Box>
                        <Box sx={{ display: 'flex', gap: 1 }}>
                            <IconButton size="small" color="inherit">
                                <FacebookIcon />
                            </IconButton>
                            <IconButton size="small" color="inherit">
                                <TwitterIcon />
                            </IconButton>
                            <IconButton size="small" color="inherit">
                                <LinkedInIcon />
                            </IconButton>
                            <IconButton size="small" color="inherit">
                                <YouTubeIcon />
                            </IconButton>
                        </Box>
                    </Grid>

                    <Grid size={{ xs: 6, md: 2 }}>
                        <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
                            Solution
                        </Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                            <Link href="#" color="text.secondary" underline="hover">Product</Link>
                            <Link href="#" color="text.secondary" underline="hover">Cloud Services</Link>
                            <Link href="#" color="text.secondary" underline="hover">Support</Link>
                        </Box>
                    </Grid>

                    <Grid size={{ xs: 6, md: 2 }}>
                        <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
                            Resources
                        </Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                            <Link href="#" color="text.secondary" underline="hover">Tips&Tricks</Link>
                            <Link href="#" color="text.secondary" underline="hover">Community</Link>
                            <Link href="#" color="text.secondary" underline="hover">Help Center</Link>
                            <Link href="#" color="text.secondary" underline="hover">Support</Link>
                        </Box>
                    </Grid>

                    <Grid size={{ xs: 6, md: 2 }}>
                        <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
                            Contact
                        </Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                            <Link href="#" color="text.secondary" underline="hover">Talk to sales</Link>
                            <Link href="#" color="text.secondary" underline="hover">Book a demo</Link>
                        </Box>
                    </Grid>

                    {/* 
                    <Grid size={{ xs: 6, md: 2 }}>
                        <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
                            Privacy
                        </Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                            <Link href="#" color="text.secondary" underline="hover">Cookies policy</Link>
                            <Link href="#" color="text.secondary" underline="hover">Privacy policy</Link>
                        </Box>
                    </Grid> 
                    The privacy section is removed for the moment because we do not have the necessary documents for the user to read 
                    */}
                </Grid>

                <Box sx={{ mt: 8, textAlign: 'center' }}>
                    <Typography variant="body2" color="text.secondary">
                        Copyright @2024 BiMMate
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
};
