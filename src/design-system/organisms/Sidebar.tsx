import { Box, List, Button } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import PeopleIcon from '@mui/icons-material/People';
import FolderIcon from '@mui/icons-material/Folder';
import ChatIcon from '@mui/icons-material/Chat';
import DownloadIcon from '@mui/icons-material/Download';
import SettingsIcon from '@mui/icons-material/Settings';
import { useTranslation } from 'react-i18next';
import { useNavigate, useLocation } from 'react-router-dom';
import { SidebarItem } from '../molecules/SidebarItem';
import { SidebarExpandableItem } from '../molecules/SidebarExpandableItem';
import { SidebarSubItem } from '../molecules/SidebarSubItem';
import type { ReactNode } from 'react';

interface NavItem {
    label: string;
    icon: ReactNode;
    path: string;
}

const NAV_ITEMS: NavItem[] = [
    {
        label: 'sidebar.trainings',
        icon: <SchoolIcon />,
        path: '/trainings',
    },
    {
        label: 'sidebar.users',
        icon: <PeopleIcon />,
        path: '/users',
    },
    {
        label: 'sidebar.projects',
        icon: <FolderIcon />,
        path: '/projects',
    },
    {
        label: 'sidebar.support',
        icon: <ChatIcon />,
        path: '/support',
    },
];

interface SidebarProps {
    activePath?: string;
}

export const Sidebar = ({ activePath = '/account' }: SidebarProps) => {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const location = useLocation();

    const isActive = (path: string) => location.pathname === path;
    const isAccountSection = () => location.pathname === '/profile' || location.pathname === '/subscription';

    return (
        <Box
            component="nav"
            sx={{
                width: 280,
                height: 'calc(100vh - 64px)', // Subtract header height
                flexShrink: 0,
                borderRight: '1px solid',
                borderColor: 'divider',
                bgcolor: '#FFFFFF',
                display: 'flex',
                flexDirection: 'column',
            }}
        >
            <List component="nav" sx={{ flex: 1, py: 2 }}>
                {/* Account - Expandable */}
                <SidebarExpandableItem
                    icon={<SettingsIcon />}
                    label={t('sidebar.account')}
                    state={isAccountSection() ? 'selected' : 'default'}
                    defaultOpen={true}
                >
                    <SidebarSubItem
                        label={t('sidebar.profile')}
                        state={isActive('/profile') ? 'selected' : 'default'}
                        onClick={() => navigate('/profile')}
                    />
                    <SidebarSubItem
                        label={t('sidebar.plan')}
                        state={isActive('/subscription') ? 'selected' : 'default'}
                        onClick={() => navigate('/subscription')}
                    />
                </SidebarExpandableItem>

                {/* Navigation Items */}
                {NAV_ITEMS.map((item) => (
                    <SidebarItem
                        key={item.path}
                        icon={item.icon}
                        label={t(item.label)}
                        state={activePath === item.path ? 'selected' : 'default'}
                    />
                ))}
            </List>

            {/* Download Button at Bottom */}
            <Box sx={{ p: 2 }}>
                <Button
                    fullWidth
                    variant="contained"
                    startIcon={<DownloadIcon />}
                    sx={{
                        bgcolor: '#7A6EBD',
                        color: '#FFFFFF',
                        py: 1.5,
                        borderRadius: '4px',
                        textTransform: 'none',
                        fontWeight: 600,
                        fontSize: '15px',
                        boxShadow: 'none',
                        '&:hover': {
                            bgcolor: '#6B5FAE',
                            boxShadow: 'none',
                        },
                        '&:active': {
                            bgcolor: '#5C528E',
                        },
                    }}
                >
                    {t('sidebar.download')}
                </Button>
            </Box>
        </Box>
    );
};
