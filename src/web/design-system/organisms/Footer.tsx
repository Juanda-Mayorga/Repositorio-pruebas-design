import { Box, Container, Grid, Typography, IconButton, Link, Collapse, useMediaQuery } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { MambaLogo } from '../atoms/MambaLogo';

export const Footer = () => {
    const isMobile = useMediaQuery('(max-width: 1132px)');
    const [openSections, setOpenSections] = useState<Record<string, boolean>>({});

    const handleToggle = (title: string) => {
        setOpenSections((prev) => ({ ...prev, [title]: !prev[title] }));
    };

    const navigationItems = [
        {
            title: 'Solution',
            items: [
                { label: 'Product', href: '/product' },
                { label: 'Cloud Services', href: '/cloud-services' },
                { label: 'Support', href: '/support' }
            ]
        },
        {
            title: 'Resources',
            items: [
                { label: 'Tips&Tricks', href: '#' },
                { label: 'Community', href: '#' },
                { label: 'Help Center', href: '#' },
                { label: 'Support', href: '#' }
            ]
        },
        {
            title: 'Contact',
            items: [
                { label: 'Talk to sales', href: '/contact-sales' },
                { label: 'Book a demo', href: '#' }
            ]
        }
    ];

    return (
        <Box component="footer" sx={{ bgcolor: 'background.paper', py: 6, borderTop: '1px solid', borderColor: 'divider', mt: 'auto' }}>
            <Container maxWidth="lg">
                {isMobile ? (
                    // Mobile Layout (Accordions)
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                        {/* Logo and Description */}
                        <Box>
                            <Box sx={{ mb: 2 }}>
                                <MambaLogo />
                            </Box>
                            <Typography variant="body2" color="text.secondary" sx={{ maxWidth: '300px', fontSize: '14px' }}>
                                A powerful solution, driven by advanced software, cloud services and support
                            </Typography>
                        </Box>

                        {/* Accordions */}
                        <Box>
                            {navigationItems.map((column) => (
                                <Box key={column.title} sx={{ borderBottom: '1px solid', borderColor: 'divider' }}>
                                    <Box
                                        onClick={() => handleToggle(column.title)}
                                        sx={{
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                            alignItems: 'center',
                                            py: 1.5,
                                            cursor: 'pointer',
                                            userSelect: 'none' // Prevent text selection on quick toggles
                                        }}
                                    >
                                        <Typography
                                            variant="subtitle1"
                                            sx={{
                                                fontFamily: '"Inter", sans-serif',
                                                fontWeight: 500,
                                                fontSize: { xs: '14px', sm: '16px' }, // 375: 14px, 744: 16px
                                                color: 'text.primary'
                                            }}
                                        >
                                            {column.title}
                                        </Typography>
                                        <KeyboardArrowDownIcon
                                            sx={{
                                                transform: openSections[column.title] ? 'rotate(180deg)' : 'none',
                                                transition: 'transform 0.3s',
                                                color: 'text.secondary'
                                            }}
                                        />
                                    </Box>
                                    <Collapse in={!!openSections[column.title]} timeout="auto" unmountOnExit>
                                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, pb: 2 }}>
                                            {column.items.map((item) => (
                                                <Link
                                                    key={item.label}
                                                    component={item.href !== '#' ? RouterLink : 'a'}
                                                    to={item.href !== '#' ? item.href : undefined}
                                                    href={item.href === '#' ? '#' : undefined}
                                                    color="text.secondary"
                                                    underline="hover"
                                                    sx={{
                                                        fontFamily: '"Hind Siliguri", sans-serif',
                                                        fontWeight: 400,
                                                        fontSize: '14px' // 375: 14px
                                                    }}
                                                >
                                                    {item.label}
                                                </Link>
                                            ))}
                                        </Box>
                                    </Collapse>
                                </Box>
                            ))}
                        </Box>

                        {/* Social Icons - Centered Bottom */}
                        <Box sx={{ display: 'flex', gap: 1, justifyContent: 'center', mt: 1 }}>
                            <IconButton color="inherit" size="small">
                                <FacebookIcon sx={{ fontSize: 28, color: '#2F2F32' }} />
                            </IconButton>
                            {/* Using TwitterIcon as placeholder for X, styling to match dark theme described or implied */}
                            <IconButton color="inherit" size="small">
                                <TwitterIcon sx={{ fontSize: 28, color: '#2F2F32' }} />
                            </IconButton>
                            <IconButton color="inherit" size="small">
                                <LinkedInIcon sx={{ fontSize: 28, color: '#2F2F32' }} />
                            </IconButton>
                            <IconButton color="inherit" size="small">
                                <YouTubeIcon sx={{ fontSize: 28, color: '#2F2F32' }} />
                            </IconButton>
                        </Box>
                    </Box>
                ) : (
                    // Desktop Layout (Columns)
                    <Grid container spacing={4} sx={{ justifyContent: 'space-between' }}>
                        <Grid size={{ xs: 12, md: 4 }}>
                            <Box sx={{ mb: 2 }}>
                                <MambaLogo />
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

                        <Grid size={{ xs: 12, md: 8 }} container spacing={4} sx={{ justifyContent: 'flex-end', textAlign: 'right' }}>
                            {navigationItems.map((column) => (
                                <Grid size={{ md: 3 }} key={column.title}>
                                    <Typography
                                        variant="subtitle1"
                                        gutterBottom
                                        sx={{
                                            fontFamily: '"Inter", sans-serif',
                                            fontWeight: 500,
                                            color: 'text.primary',
                                            // Desktop sizes
                                            fontSize: {
                                                md: '16px', // 1133
                                                lg: '18px', // 1440
                                                xl: '20px'  // 1920
                                            }
                                        }}
                                    >
                                        {column.title}
                                    </Typography>
                                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, alignItems: 'flex-end' }}>
                                        {column.items.map((item) => (
                                            <Link
                                                key={item.label}
                                                component={item.href !== '#' ? RouterLink : 'a'}
                                                to={item.href !== '#' ? item.href : undefined}
                                                href={item.href === '#' ? '#' : undefined}
                                                color="text.secondary"
                                                underline="hover"
                                                sx={{
                                                    fontFamily: '"Hind Siliguri", sans-serif',
                                                    fontWeight: 400,
                                                    // Desktop sizes
                                                    fontSize: {
                                                        md: '14px', // 1133
                                                        lg: '16px', // 1440
                                                        xl: '18px'  // 1920
                                                    }
                                                }}
                                            >
                                                {item.label}
                                            </Link>
                                        ))}
                                    </Box>
                                </Grid>
                            ))}
                        </Grid>
                    </Grid>
                )}

                <Box sx={{ mt: 4, textAlign: 'center' }}>
                    <Typography variant="body2" color="text.secondary" sx={{ fontSize: '12px' }}>
                        Copyright @2024 BiMMate
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
};
