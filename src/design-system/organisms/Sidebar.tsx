import { Box, List, ListItemButton, ListItemIcon, ListItemText, Collapse, useTheme } from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import PersonIcon from '@mui/icons-material/Person';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import GroupIcon from '@mui/icons-material/Group';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import LogoutIcon from '@mui/icons-material/Logout';
import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export const Sidebar = () => {
    const [open, setOpen] = useState(true);
    const navigate = useNavigate();
    const location = useLocation();
    const theme = useTheme();
    const { t } = useTranslation();

    const handleClick = () => {
        setOpen(!open);
    };

    const isActive = (path: string) => location.pathname === path;

    const getListItemStyles = (active: boolean) => ({
        pl: 4,
        borderRight: active ? `3px solid ${theme.palette.primary.main}` : '3px solid transparent',
        bgcolor: active ? (theme.palette.mode === 'dark' ? 'rgba(99, 102, 241, 0.16)' : 'rgba(91, 77, 157, 0.08)') : 'transparent',
        '&:hover': {
            bgcolor: active ? (theme.palette.mode === 'dark' ? 'rgba(99, 102, 241, 0.24)' : 'rgba(91, 77, 157, 0.12)') : 'action.hover',
        },
        color: active ? 'primary.main' : 'text.secondary',
    });

    return (
        <Box component="nav" sx={{ width: 280, flexShrink: 0, borderRight: '1px solid', borderColor: 'divider', bgcolor: 'background.paper', color: 'text.primary' }}>
            <List component="nav">
                <ListItemButton onClick={handleClick} sx={{ color: 'primary.main', bgcolor: theme.palette.mode === 'dark' ? 'rgba(99, 102, 241, 0.16)' : 'rgba(91, 77, 157, 0.08)' }}>
                    <ListItemIcon sx={{ color: 'primary.main' }}>
                        <SettingsIcon />
                    </ListItemIcon>
                    <ListItemText primary={t('sidebar.account')} primaryTypographyProps={{ fontWeight: 600 }} />
                    {open ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={open} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItemButton sx={getListItemStyles(isActive('/profile'))} onClick={() => navigate('/profile')}>
                            <ListItemIcon sx={{ minWidth: 40, color: isActive('/profile') ? 'primary.main' : 'text.secondary' }}>
                                <PersonIcon fontSize="small" />
                            </ListItemIcon>
                            <ListItemText primary={t('sidebar.profile')} />
                        </ListItemButton>
                        <ListItemButton sx={getListItemStyles(isActive('/subscription'))} onClick={() => navigate('/subscription')}>
                            <ListItemIcon sx={{ minWidth: 40, color: isActive('/subscription') ? 'primary.main' : 'text.secondary' }}>
                                <CreditCardIcon fontSize="small" />
                            </ListItemIcon>
                            <ListItemText primary={t('sidebar.plan')} />
                        </ListItemButton>
                        <ListItemButton sx={getListItemStyles(false)}>
                            <ListItemIcon sx={{ minWidth: 40, color: 'text.secondary' }}>
                                <GroupIcon fontSize="small" />
                            </ListItemIcon>
                            <ListItemText primary={t('sidebar.team')} />
                        </ListItemButton>
                        <ListItemButton sx={getListItemStyles(false)}>
                            <ListItemIcon sx={{ minWidth: 40, color: 'text.secondary' }}>
                                <NotificationsNoneIcon fontSize="small" />
                            </ListItemIcon>
                            <ListItemText primary={t('sidebar.notifications')} />
                        </ListItemButton>
                        <ListItemButton sx={getListItemStyles(false)}>
                            <ListItemIcon sx={{ minWidth: 40, color: 'text.secondary' }}>
                                <IntegrationInstructionsIcon fontSize="small" />
                            </ListItemIcon>
                            <ListItemText primary={t('sidebar.integrations')} />
                        </ListItemButton>
                    </List>
                </Collapse>
            </List>
            <Box sx={{ mt: 'auto', p: 2 }}>
                <List>
                    <ListItemButton>
                        <ListItemIcon>
                            <HelpOutlineIcon />
                        </ListItemIcon>
                        <ListItemText primary={t('sidebar.help')} />
                    </ListItemButton>
                    <ListItemButton>
                        <ListItemIcon>
                            <LogoutIcon />
                        </ListItemIcon>
                        <ListItemText primary={t('sidebar.logout')} />
                    </ListItemButton>
                </List>
            </Box>
        </Box>
    );
};
