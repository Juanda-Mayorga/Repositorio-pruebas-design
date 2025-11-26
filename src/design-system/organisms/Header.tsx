import { Box, Typography, Avatar, IconButton, Menu, MenuItem } from '@mui/material';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { useTheme } from '@mui/material/styles';
import { useColorMode } from '../theme/ThemeContext';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';

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

export const Header = () => {
    const theme = useTheme();
    const { toggleColorMode } = useColorMode();
    const { t, i18n } = useTranslation();
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

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
        <Box component="header" sx={{ height: 64, borderBottom: '1px solid', borderColor: 'divider', display: 'flex', alignItems: 'center', justifyContent: 'space-between', px: 4, bgcolor: '#FFFFFF' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Box sx={{ width: 32, height: 32, bgcolor: 'primary.main', borderRadius: 1 }} />
                <Typography variant="h6" fontWeight="bold" color="text.primary">
                    {t('header.title')} <Typography component="span" color="text.secondary" sx={{ fontWeight: 'normal' }}>/ {t('header.product')}</Typography>
                </Typography>
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, cursor: 'pointer' }} onClick={handleClick}>
                    <Box sx={{ width: 24, height: 24, borderRadius: '50%', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center', bgcolor: 'action.hover', fontSize: '10px', fontWeight: 'bold' }}>
                        {i18n.language.toUpperCase()}
                    </Box>
                    <KeyboardArrowDownIcon sx={{ color: 'text.secondary' }} />
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

                <IconButton onClick={toggleColorMode} color="inherit">
                    {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
                </IconButton>

                <IconButton>
                    <NotificationsNoneIcon sx={{ color: 'text.secondary' }} />
                </IconButton>
                <Box sx={{ width: 1, height: 32, bgcolor: 'divider', mx: 1 }} />
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Avatar sx={{ width: 32, height: 32, bgcolor: 'primary.main', fontSize: 14 }}>OJ</Avatar>
                    <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                        <Typography variant="subtitle2" sx={{ lineHeight: 1.2, color: 'text.primary' }}>Olivia Jones</Typography>
                        <Typography variant="caption" color="text.secondary">{t('header.profile')}</Typography>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};
