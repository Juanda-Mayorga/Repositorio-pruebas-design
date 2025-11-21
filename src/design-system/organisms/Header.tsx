import { Box, Typography, IconButton, Avatar, Badge } from '@mui/material';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export const Header = () => {
    return (
        <Box sx={{
            height: 64,
            borderBottom: '1px solid #E5E7EB',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            px: 3,
            bgcolor: 'white'
        }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Typography variant="h5" sx={{ fontWeight: 700, color: '#374151' }}>
                    MAMBA
                </Typography>
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    bgcolor: '#F3F4F6',
                    px: 1.5,
                    py: 0.5,
                    borderRadius: 1,
                    gap: 1
                }}>
                    <Typography variant="body2" color="primary">BiMMate</Typography>
                    <KeyboardArrowDownIcon fontSize="small" color="action" />
                </Box>

                <IconButton>
                    <Badge color="error" variant="dot">
                        <NotificationsNoneIcon />
                    </Badge>
                </IconButton>

                <Avatar sx={{ bgcolor: '#5B4D9D', width: 32, height: 32, fontSize: '0.875rem' }}>AD</Avatar>

                <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                    {/* Placeholder for Flag */}
                    <Typography variant="body2">ES</Typography>
                    <KeyboardArrowDownIcon fontSize="small" />
                </Box>
            </Box>
        </Box>
    );
};
