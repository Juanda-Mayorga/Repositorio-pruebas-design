import { Box, Typography, Avatar, IconButton, Menu, MenuItem } from '@mui/material';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import MenuIcon from '@mui/icons-material/Menu';
import { useTheme } from '@mui/material/styles';
import { useColorMode } from '../theme/ThemeContext';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

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

interface HeaderProps {
    onDrawerToggle?: () => void;
}

export const Header = ({ onDrawerToggle }: HeaderProps) => {
    const theme = useTheme();
    const { toggleColorMode } = useColorMode();
    const { t, i18n } = useTranslation();
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const navigate = useNavigate();

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
        <Box component="header" sx={{ height: 64, borderBottom: '1px solid', borderColor: 'divider', display: 'flex', alignItems: 'center', justifyContent: 'space-between', px: { xs: 2, md: 4 }, bgcolor: '#FFFFFF' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                {/* Hamburger Menu - Visible only on mobile/tablet */}
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    edge="start"
                    onClick={onDrawerToggle}
                    sx={{ display: { md: 'none' } }}
                >
                    <MenuIcon />
                </IconButton>

                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, cursor: 'pointer' }} onClick={() => navigate('/resources')}>
                    <Box sx={{ width: 32, height: 32, bgcolor: 'primary.main', borderRadius: 1 }} />
                    <Typography variant="h6" fontWeight="bold" color="text.primary" sx={{ display: { xs: 'none', sm: 'block' } }}>
                        {t('header.title')} <Typography component="span" color="text.secondary" sx={{ fontWeight: 'normal' }}>/ {t('header.product')}</Typography>
                    </Typography>
                    {/* Mobile Title */}
                    <Typography variant="h6" fontWeight="bold" color="text.primary" sx={{ display: { xs: 'block', sm: 'none' } }}>
                        {t('header.title')}
                    </Typography>
                </Box>
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center', gap: { xs: 1, md: 2 } }}>
                {/* Language Selector - Hidden on very small screens if needed, or simplified */}
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, cursor: 'pointer' }} onClick={handleClick}>
                    <Box sx={{ width: 24, height: 24, borderRadius: '50%', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center', bgcolor: 'action.hover', fontSize: '10px', fontWeight: 'bold' }}>
                        {i18n.language.toUpperCase()}
                    </Box>
                    <KeyboardArrowDownIcon sx={{ color: 'text.secondary', display: { xs: 'none', sm: 'block' } }} />
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

                {/* Theme Toggle - Hidden on mobile as per requirement? Or keep it? Keeping it for now but can hide if strictly following "selector de empresa y notificacion" */}
                <IconButton onClick={toggleColorMode} color="inherit" sx={{ display: { xs: 'none', sm: 'flex' } }}>
                    {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
                </IconButton>

                <IconButton>
                    <NotificationsNoneIcon sx={{ color: 'text.secondary' }} />
                </IconButton>

                <Box sx={{ width: 1, height: 32, bgcolor: 'divider', mx: 1, display: { xs: 'none', md: 'block' } }} />

                {/* Profile - Hidden on mobile/tablet vertical (< 900px) as per requirement? Or just simplified? */}
                <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 1 }}>
                    <Avatar sx={{ width: 32, height: 32, bgcolor: 'primary.main', fontSize: 14 }}>OJ</Avatar>
                    <Box sx={{ display: { xs: 'none', lg: 'block' } }}>
                        <Typography variant="subtitle2" sx={{ lineHeight: 1.2, color: 'text.primary' }}>Olivia Jones</Typography>
                        <Typography variant="caption" color="text.secondary">{t('header.profile')}</Typography>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};
