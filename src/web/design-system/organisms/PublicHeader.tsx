import { Box, Typography, Menu, MenuItem } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
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
    const { i18n } = useTranslation();
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const [showSolutionMenu, setShowSolutionMenu] = useState(false);
    const [showLoginMenu, setShowLoginMenu] = useState(false);
    const open = Boolean(anchorEl);
    const navigate = useNavigate();
    const location = useLocation();

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

    return (
        <Box component="header" sx={{
            height: 64,
            borderBottom: '1px solid',
            borderColor: 'divider',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            px: 4,
            bgcolor: '#FFFFFF',
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            zIndex: 1100,
            width: '100%'
        }}>
            {/* Logo */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, cursor: 'pointer' }} onClick={() => navigate('/landing')}>
                <MambaLogo sx={{ width: 32, height: 32 }} />
                <Typography
                    variant="h6" // Maintain variant for semantic readiness but override styles
                    sx={{
                        fontFamily: '"Inter", sans-serif',
                        fontWeight: 500,
                        fontSize: '32px',
                        color: '#2F2F32',
                        lineHeight: 1
                    }}
                >
                    MAMBA
                </Typography>
            </Box>

            {/* Navigation & Actions */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                {/* Menu Items */}
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                    <Box
                        onMouseEnter={() => setShowSolutionMenu(true)}
                        onMouseLeave={() => setShowSolutionMenu(false)}
                        sx={{ position: 'relative' }}
                    >
                        <HeaderNavLink
                            selected={['/product', '/cloud-services', '/support'].some(path => location.pathname.startsWith(path))}
                            active={showSolutionMenu}
                        >
                            Solution <KeyboardArrowDownIcon fontSize="small" sx={{
                                transform: showSolutionMenu ? 'rotate(180deg)' : 'none',
                                transition: 'transform 0.2s'
                            }} />
                        </HeaderNavLink>
                        {showSolutionMenu && (
                            <Box sx={{
                                position: 'absolute',
                                top: '100%',
                                left: 0,
                                pt: 1, // 8px padding to create the gap but keep hover area
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
                        Resources
                    </HeaderNavLink>
                    <HeaderNavLink
                        onClick={() => navigate('/contact')}
                        selected={location.pathname.startsWith('/contact')}
                    >
                        Contact
                    </HeaderNavLink>
                    <HeaderNavLink>
                        Pricings
                    </HeaderNavLink>
                </Box>

                {/* Log in Button */}
                <Box
                    onMouseEnter={() => setShowLoginMenu(true)}
                    onMouseLeave={() => setShowLoginMenu(false)}
                    sx={{ position: 'relative' }}
                >
                    <Box sx={{
                        backgroundColor: '#7A6EBD',
                        padding: '8px 16px',
                        borderRadius: '4px',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        gap: 0.5,
                        color: '#FFFFFF',
                        transition: 'all 0.2s',
                        '&:hover': {
                            backgroundColor: '#6B5EA9' // Slightly darker on hover
                        }
                    }}>
                        <Typography
                            variant="body1"
                            component="span"
                            sx={{
                                fontWeight: 500,
                                fontFamily: '"Hind Siliguri", sans-serif',
                                color: 'inherit',
                                '@media (min-width:1440px)': {
                                    fontSize: '20px',
                                }
                            }}
                        >
                            Log in
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

                {/* Language Selector */}
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, cursor: 'pointer', border: '1px solid', borderColor: 'divider', borderRadius: 1, px: 1, py: 0.5 }} onClick={handleClick}>
                    <Box sx={{ width: 20, height: 14, bgcolor: 'action.hover', borderRadius: 0.5, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '10px', overflow: 'hidden' }}>
                        {/* Placeholder flag or just code */}
                        {i18n.language === 'es' ? '🇪🇸' : i18n.language.toUpperCase()}
                    </Box>
                    <Typography variant="body2" fontWeight="medium">
                        {i18n.language.toUpperCase()}
                    </Typography>
                    <KeyboardArrowDownIcon fontSize="small" color="action" />
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
            </Box>
        </Box>
    );
};
