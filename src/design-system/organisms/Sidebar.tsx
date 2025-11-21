import React from 'react';
import { Box, List, ListItemButton, ListItemIcon, ListItemText, Collapse } from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';
import SchoolIcon from '@mui/icons-material/School';
import GroupIcon from '@mui/icons-material/Group';
import FolderIcon from '@mui/icons-material/Folder';
import ChatIcon from '@mui/icons-material/Chat';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

export const Sidebar = () => {
    const [open, setOpen] = React.useState(true);

    const handleClick = () => {
        setOpen(!open);
    };

    return (
        <Box sx={{ width: 250, height: '100vh', borderRight: '1px solid #E5E7EB', bgcolor: '#F9FAFB' }}>
            <List component="nav">
                <ListItemButton onClick={handleClick} sx={{ color: 'primary.main', bgcolor: 'rgba(91, 77, 157, 0.08)' }}>
                    <ListItemIcon sx={{ color: 'primary.main' }}>
                        <SettingsIcon />
                    </ListItemIcon>
                    <ListItemText primary="Account" />
                    {open ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={open} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItemButton sx={{ pl: 9 }}>
                            <ListItemText primary="Profile" primaryTypographyProps={{ fontSize: '0.9rem', color: 'text.secondary' }} />
                        </ListItemButton>
                        <ListItemButton sx={{ pl: 9, bgcolor: 'rgba(91, 77, 157, 0.04)', borderRight: '3px solid #5B4D9D' }}>
                            <ListItemText primary="Plan and subscription" primaryTypographyProps={{ fontSize: '0.9rem', color: 'primary.main', fontWeight: 500 }} />
                        </ListItemButton>
                        <ListItemButton sx={{ pl: 9 }}>
                            <ListItemText primary="Company information" primaryTypographyProps={{ fontSize: '0.9rem', color: 'text.secondary' }} />
                        </ListItemButton>
                        <ListItemButton sx={{ pl: 9 }}>
                            <ListItemText primary="Billing" primaryTypographyProps={{ fontSize: '0.9rem', color: 'text.secondary' }} />
                        </ListItemButton>
                    </List>
                </Collapse>

                <ListItemButton>
                    <ListItemIcon>
                        <SchoolIcon />
                    </ListItemIcon>
                    <ListItemText primary="Trainings" />
                </ListItemButton>

                <ListItemButton>
                    <ListItemIcon>
                        <GroupIcon />
                    </ListItemIcon>
                    <ListItemText primary="Users" />
                </ListItemButton>

                <ListItemButton>
                    <ListItemIcon>
                        <FolderIcon />
                    </ListItemIcon>
                    <ListItemText primary="Projects" />
                </ListItemButton>

                <ListItemButton>
                    <ListItemIcon>
                        <ChatIcon />
                    </ListItemIcon>
                    <ListItemText primary="Support" />
                </ListItemButton>
            </List>
        </Box>
    );
};
