import { Box, Typography, Menu, MenuItem, IconButton, Drawer, Collapse } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useTranslation } from 'react-i18next';
import { useState, useRef, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useMediaQuery } from '@mui/material';
import { HeaderNavLink } from '../atoms/HeaderNavLink';
import { SolutionDropdown } from '../molecules/SolutionDropdown';
import { LoginDropdown } from '../molecules/LoginDropdown';
import { MambaLogo } from '../atoms/MambaLogo';
import { WebButton } from '../atoms/WebButton';

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

    // Auto-expand solution dropdown in mobile when on a solution route
    useEffect(() => {
        const solutionRoutes = ['/product', '/cloud-services', '/support'];
        const isOnSolutionRoute = solutionRoutes.some(route => location.pathname.startsWith(route));

        if (isOnSolutionRoute && isMobile) {
            setMobileSolutionOpen(true);
        }
    }, [location.pathname, isMobile]);

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
                    <HeaderNavLink>
                        <Typography component="span" sx={{ ...navLinkFontSize, lineHeight: 1 }}>
                            {t('publicHeader.pricing')}
                        </Typography>
                    </HeaderNavLink>
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
                        <WebButton
                            variant="dropdown"
                            isOpen={showLoginMenu}
                        >
                            {t('publicHeader.login')}
                        </WebButton>
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
                {/* Mobile Menu Content */}
                <Box sx={{ px: 2, display: 'flex', flexDirection: 'column', gap: 3 }}>

                    {/* Solution Accordion */}
                    <Box>
                        <Box
                            onClick={() => setMobileSolutionOpen(!mobileSolutionOpen)}
                            sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', cursor: 'pointer', mb: mobileSolutionOpen ? 2 : 0 }}
                        >
                            <HeaderNavLink active={mobileSolutionOpen} disableHover>
                                <Typography component="span" sx={{ ...navLinkFontSize, lineHeight: 1, color: mobileSolutionOpen ? '#7A6EBD' : '#2F2F32' }}>
                                    {t('publicHeader.solution')}
                                </Typography>
                            </HeaderNavLink>
                            <KeyboardArrowDownIcon sx={{ transform: mobileSolutionOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s', color: mobileSolutionOpen ? '#7A6EBD' : '#2F2F32' }} />
                        </Box>
                        <Collapse in={mobileSolutionOpen} timeout="auto" unmountOnExit>
                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                                <SolutionDropdown isMobile onItemClick={() => setMobileMenuOpen(false)} />
                            </Box>
                        </Collapse>
                    </Box>

                    {/* Pricing */}
                    <Box>
                        <HeaderNavLink disableHover>
                            <Typography component="span" sx={{ ...navLinkFontSize, lineHeight: 1 }}>
                                {t('publicHeader.pricing')}
                            </Typography>
                        </HeaderNavLink>
                    </Box>

                    {/* Resources */}
                    <Box>
                        <HeaderNavLink
                            onClick={() => { navigate('/resources'); setMobileMenuOpen(false); }}
                            selected={location.pathname === '/resources'}
                            disableHover
                        >
                            <Typography component="span" sx={{ ...navLinkFontSize, lineHeight: 1 }}>
                                {t('publicHeader.resources')}
                            </Typography>
                        </HeaderNavLink>
                    </Box>

                    {/* Contact */}
                    <Box>
                        <HeaderNavLink
                            onClick={() => { navigate('/contact'); setMobileMenuOpen(false); }}
                            selected={location.pathname.startsWith('/contact')}
                            disableHover
                        >
                            <Typography component="span" sx={{ ...navLinkFontSize, lineHeight: 1 }}>
                                {t('publicHeader.contact')}
                            </Typography>
                        </HeaderNavLink>
                    </Box>

                    {/* Login Accordion (Moved from bottom) */}
                    <Box>
                        <WebButton
                            variant="dropdown"
                            isOpen={showLoginMenu}
                            fullWidth
                            onClick={() => setShowLoginMenu(!showLoginMenu)}
                        >
                            {t('publicHeader.login')}
                        </WebButton>
                        {/* We reuse the LogicDropdown Logic or similar listing.
                            Since LoginDropdown is a popup component, for mobile we might want a simple list like Solution
                            or we can just reuse the component if it fits, but usually accordions are better.
                            The user said "uses the same behavior that you use in ... this component",
                            which likely means EXPANDABLE list.
                            I will hardcode the login links here for mobile simplicity based on previous context ("MAMBA 23", "MAMBA 26")
                            OR I can assume LoginDropdown is usable if stripped of paper.
                            Let's use a simple list for robust mobile UX as requested "apilado".
                        */}
                        <Collapse in={showLoginMenu} timeout="auto" unmountOnExit>
                            <Box sx={{ pl: 2, display: 'flex', flexDirection: 'column', gap: 2, mt: 2 }}>
                                <HeaderNavLink onClick={() => { navigate('/login-23'); setMobileMenuOpen(false); }} disableHover>
                                    <Typography component="span" sx={{ ...navLinkFontSize, lineHeight: 1 }}>
                                        MAMBA 23
                                    </Typography>
                                </HeaderNavLink>
                                <HeaderNavLink onClick={() => { navigate('/subscription'); setMobileMenuOpen(false); }} disableHover>
                                    <Typography component="span" sx={{ ...navLinkFontSize, lineHeight: 1 }}>
                                        MAMBA 26
                                    </Typography>
                                </HeaderNavLink>
                            </Box>
                        </Collapse>
                    </Box>

                </Box>
            </Drawer>
        </Box>
    );
};
