import { Box, Typography, Button, Menu, MenuItem } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { HeaderNavLink } from '../atoms/HeaderNavLink';

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
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, cursor: 'pointer' }} onClick={() => navigate('/landing')}>
                <Box sx={{ width: 32, height: 32, bgcolor: 'primary.main', borderRadius: 1 }} />
                <Typography variant="h6" fontWeight="bold" color="text.primary">
                    MAMBA
                </Typography>
            </Box>

            {/* Navigation & Actions */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                {/* Menu Items */}
                {/* Menu Items */}
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                    <HeaderNavLink>
                        Solution <KeyboardArrowDownIcon fontSize="small" />
                    </HeaderNavLink>
                    <HeaderNavLink
                        onClick={() => navigate('/resources')}
                        selected={location.pathname === '/resources'}
                    >
                        Resources
                    </HeaderNavLink>
                    <HeaderNavLink
                        onClick={() => navigate('/contact')}
                        selected={location.pathname === '/contact'}
                    >
                        Contact
                    </HeaderNavLink>
                    <HeaderNavLink>
                        Pricings
                    </HeaderNavLink>
                </Box>

                {/* Log in Button */}
                <Button variant="contained" sx={{ bgcolor: '#6366F1', textTransform: 'none', fontWeight: 600, '&:hover': { bgcolor: '#4F46E5' } }} onClick={() => navigate('/subscription')}>
                    Log in
                </Button>

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
