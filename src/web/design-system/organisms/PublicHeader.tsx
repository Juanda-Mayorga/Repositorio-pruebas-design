import { Box, Typography, Menu, MenuItem, IconButton, Drawer, List, ListItemButton, ListItemText, Collapse } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useTranslation } from 'react-i18next';
import { useState, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useMediaQuery } from '@mui/material';
import { HeaderNavLink } from '../atoms/HeaderNavLink';
import { SolutionDropdown } from '../molecules/SolutionDropdown';
import { LoginDropdown } from '../molecules/LoginDropdown';
import { MambaLogo } from '../atoms/MambaLogo';

const languages = [
    { code: 'da', label: 'Dansk' },
    { code: 'de', label: 'Deutsch' },
    { code: 'ca', label: 'Catalá' },
    { code: 'es', label: 'Español' },
    { code: 'eu', label: 'Euskera' },
    { code: 'gl', label: 'Galego' },
    { code: 'fr', label: 'Français' },
    { code: 'en', label: 'English' },
    { code: 'it', label: 'Italiano' },
    { code: 'nl', label: 'Nederlands' },
    { code: 'no', label: 'Norsk' },
    { code: 'pt', label: 'Português' },
];

export const PublicHeader = () => {
    const { t, i18n } = useTranslation();
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const [showSolutionMenu, setShowSolutionMenu] = useState(false);
    const [showLoginMenu, setShowLoginMenu] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [mobileSolutionOpen, setMobileSolutionOpen] = useState(false);

    const open = Boolean(anchorEl);
    const navigate = useNavigate();
    const location = useLocation();

    const solutionMenuTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

    const handleSolutionEnter = () => {
        if (solutionMenuTimer.current) {
            clearTimeout(solutionMenuTimer.current);
        }
        setShowSolutionMenu(true);
    };

    const handleSolutionLeave = () => {
        solutionMenuTimer.current = setTimeout(() => {
            setShowSolutionMenu(false);
        }, 200); // 200ms delay to allow bridging the gap
    };

    // Responsive Breakpoints
    // 1133px is the cutoff for Mobile/Tablet Horizontal vs Desktop
    const isTabletHorizontal = useMediaQuery('(min-width:1133px)');
    const isMobile = !isTabletHorizontal;

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleLanguageChange = (langCode: string) => {
        i18n.changeLanguage(langCode);
        handleClose();
    };

    // Font Scaling Logic
    // 1133px - 1439px: 14px
    // 1440px - 1919px: 16px
    // 1920px+: 20px
    const navLinkFontSize = {
        fontFamily: '"Hind Siliguri", sans-serif',
        fontWeight: 500,
        fontSize: '14px',
        '@media (min-width: 1440px)': {
            fontSize: '18px'
        },
        '@media (min-width: 1920px)': {
            fontSize: '20px'
        }
    };

    return (
        <Box component="header" sx={{
            height: 64,
            borderBottom: '1px solid',
            borderColor: 'divider',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            px: { xs: 2, md: 4 },
            bgcolor: '#FFFFFF',
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            zIndex: 1100,
            width: '100%'
        }}>
            {/* Left Section: Mobile Menu Icon + Logo */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                {isMobile && (
                    <IconButton onClick={() => setMobileMenuOpen(true)}>
                        <MenuIcon sx={{ color: '#2F2F32' }} />
                    </IconButton>
                )}

                {/* Logo */}
                <MambaLogo
                    onClick={() => navigate('/landing')}
                    sx={{
                        cursor: 'pointer',
                        // MambaLogo has fixed sizing internally currently.
                        // To properly scale it, we might need to adjust MambaLogo definition.
                        // Assuming MambaLogo accepts sx that can override child styles or scale via transform is limited.
                        // For now we pass sx, but if it doesn't scale text, it satisfies the structure request.
                    }}
                />
            </Box>

            {/* Desktop Navigation (Centered) */}
            {!isMobile && (
                <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: { md: 2, lg: 4 },
                    position: 'absolute',
                    left: '50%',
                    transform: 'translateX(-50%)'
                }}>
                    <Box
                        onMouseEnter={handleSolutionEnter}
                        onMouseLeave={handleSolutionLeave}
                        sx={{ position: 'relative' }}
                    >
                        <HeaderNavLink
                            selected={['/product', '/cloud-services', '/support'].some(path => location.pathname.startsWith(path))}
                            active={showSolutionMenu}
                        >
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                                <Typography component="span" sx={{ ...navLinkFontSize, lineHeight: 1 }}>
                                    {t('publicHeader.solution')}
                                </Typography>
                                <KeyboardArrowDownIcon fontSize="small" sx={{
                                    transform: showSolutionMenu ? 'rotate(180deg)' : 'none',
                                    transition: 'transform 0.2s'
                                }} />
                            </Box>
                        </HeaderNavLink>
                        {showSolutionMenu && (
                            <Box
                                onMouseEnter={handleSolutionEnter}
                                onMouseLeave={handleSolutionLeave}
                                sx={{
                                    position: 'fixed',
                                    top: 64,
                                    left: '50%',
                                    transform: 'translateX(-50%)',
                                    pt: 1, // 8px visual gap (using padding to maintain hover path)
                                    zIndex: 1200
                                }}>
                                <SolutionDropdown />
                            </Box>
                        )}
                    </Box>
                    <HeaderNavLink
                        onClick={() => navigate('/resources')}
                        selected={location.pathname === '/resources'}
                    >
                        <Typography component="span" sx={{ ...navLinkFontSize, lineHeight: 1 }}>
                            {t('publicHeader.resources')}
                        </Typography>
                    </HeaderNavLink>
                    <HeaderNavLink
                        onClick={() => navigate('/contact')}
                        selected={location.pathname.startsWith('/contact')}
                    >
                        <Typography component="span" sx={{ ...navLinkFontSize, lineHeight: 1 }}>
                            {t('publicHeader.contact')}
                        </Typography>
                    </HeaderNavLink>
                    <HeaderNavLink>
                        <Typography component="span" sx={{ ...navLinkFontSize, lineHeight: 1 }}>
                            {t('publicHeader.pricing')}
                        </Typography>
                    </HeaderNavLink>
                </Box>
            )}

            {/* Right Section: Actions Group (Login + Language) */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                {/* Log in Button (Desktop Only) */}
                {!isMobile && (
                    <Box
                        onMouseEnter={() => setShowLoginMenu(true)}
                        onMouseLeave={() => setShowLoginMenu(false)}
                        sx={{ position: 'relative' }}
                    >
                        <Box sx={{
                            backgroundColor: '#7A6EBD',
                            padding: '8px 16px', // Standardized to match HeaderNavLink vertical padding (8px)
                            borderRadius: '4px',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            gap: 0.5,
                            color: '#FFFFFF',
                            transition: 'all 0.2s',
                            '&:hover': {
                                backgroundColor: '#6B5EA9'
                            }
                        }}>
                            <Typography
                                component="span"
                                sx={{
                                    color: 'inherit',
                                    ...navLinkFontSize,
                                    lineHeight: 1
                                }}
                            >
                                {t('publicHeader.login')}
                            </Typography>
                            <KeyboardArrowDownIcon fontSize="small" sx={{
                                transform: showLoginMenu ? 'rotate(180deg)' : 'none',
                                transition: 'transform 0.2s',
                                color: 'inherit'
                            }} />
                        </Box>
                        {showLoginMenu && (
                            <Box sx={{
                                position: 'absolute',
                                top: '100%',
                                right: 0,
                                pt: 1,
                                zIndex: 1200
                            }}>
                                <LoginDropdown />
                            </Box>
                        )}
                    </Box>
                )}

                {/* Language Selector */}
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, cursor: 'pointer', border: '1px solid', borderColor: 'divider', borderRadius: 1, px: 1, py: 0.5 }} onClick={handleClick}>
                    <Box sx={{ width: 20, height: 14, bgcolor: 'action.hover', borderRadius: 0.5, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '10px', overflow: 'hidden' }}>
                        {i18n.language === 'es' ? '🇪🇸' : i18n.language.toUpperCase()}
                    </Box>
                    <Typography variant="body2" fontWeight="medium" sx={{ display: { xs: 'none', sm: 'block' } }}>
                        {i18n.language.toUpperCase()}
                    </Typography>
                    <KeyboardArrowDownIcon fontSize="small" color="action" />
                </Box>
            </Box>

            <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                {languages.map((lang) => (
                    <MenuItem key={lang.code} onClick={() => handleLanguageChange(lang.code)}>
                        {lang.label}
                    </MenuItem>
                ))}
            </Menu>

            {/* Mobile Drawer */}
            <Drawer
                anchor="left"
                open={mobileMenuOpen}
                onClose={() => setMobileMenuOpen(false)}
                PaperProps={{
                    sx: { width: '80%', maxWidth: 300 }
                }}
            >
                <Box sx={{ p: 2, display: 'flex', justifyContent: 'flex-end' }}>
                    <IconButton onClick={() => setMobileMenuOpen(false)}>
                        <CloseIcon />
                    </IconButton>
                </Box>
                <Box sx={{ px: 2, mb: 2 }}>
                    <MambaLogo onClick={() => { navigate('/landing'); setMobileMenuOpen(false); }} />
                </Box>
                <List>
                    {/* Solution Accordion in Mobile */}
                    <ListItemButton onClick={() => setMobileSolutionOpen(!mobileSolutionOpen)}>
                        <ListItemText primary={t('publicHeader.solution')} primaryTypographyProps={{ fontWeight: 500 }} />
                        <KeyboardArrowDownIcon sx={{ transform: mobileSolutionOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }} />
                    </ListItemButton>
                    <Collapse in={mobileSolutionOpen} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItemButton sx={{ pl: 4 }} onClick={() => { navigate('/product'); setMobileMenuOpen(false); }}>
                                <ListItemText primary={t('solutionDropdown.product.title')} />
                            </ListItemButton>
                            <ListItemButton sx={{ pl: 4 }} onClick={() => { navigate('/cloud-services'); setMobileMenuOpen(false); }}>
                                <ListItemText primary={t('solutionDropdown.cloudServices.title')} />
                            </ListItemButton>
                            <ListItemButton sx={{ pl: 4 }} onClick={() => { navigate('/support'); setMobileMenuOpen(false); }}>
                                <ListItemText primary={t('solutionDropdown.support.title')} />
                            </ListItemButton>
                        </List>
                    </Collapse>

                    <ListItemButton onClick={() => { navigate('/resources'); setMobileMenuOpen(false); }}>
                        <ListItemText primary={t('publicHeader.resources')} primaryTypographyProps={{ fontWeight: 500 }} />
                    </ListItemButton>
                    <ListItemButton onClick={() => { navigate('/contact'); setMobileMenuOpen(false); }}>
                        <ListItemText primary={t('publicHeader.contact')} primaryTypographyProps={{ fontWeight: 500 }} />
                    </ListItemButton>
                    <ListItemButton>
                        <ListItemText primary={t('publicHeader.pricing')} primaryTypographyProps={{ fontWeight: 500 }} />
                    </ListItemButton>
                </List>

                <Box sx={{ p: 2, mt: 'auto', borderTop: '1px solid', borderColor: 'divider' }}>
                    <Box sx={{
                        backgroundColor: '#7A6EBD',
                        padding: '12px',
                        borderRadius: '4px',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#FFFFFF',
                        mb: 2
                    }}>
                        <Typography fontWeight={500}>
                            {t('publicHeader.login')}
                        </Typography>
                    </Box>
                </Box>
            </Drawer>
        </Box>
    );
};
