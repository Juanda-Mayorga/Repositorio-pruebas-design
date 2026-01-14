import React from 'react';
import { Box, Typography, ButtonBase } from '@mui/material';

interface WebRoleButtonProps {
    title: string;
    color: string;
    isActive: boolean;
    onClick: () => void;
}

/**
 * WebRoleButton component for the Roles section.
 * Encapsulates styling for role selection including active states and hover effects.
 */
const WebRoleButton: React.FC<WebRoleButtonProps> = ({ title, color, isActive, onClick }) => {
    return (
        <ButtonBase
            onClick={onClick}
            sx={{
                justifyContent: { xs: 'center', md: 'flex-start' },
                px: { xs: 2.5, md: 3 },
                py: { xs: 1, md: 3 },
                height: { xs: '40px', md: 'auto' },
                borderRadius: { xs: '8px', md: '16px' },
                textAlign: 'left',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                position: 'relative',
                bgcolor: isActive ? `${color}15` : `${color}08`,
                border: '1px solid',
                borderColor: isActive ? color : `${color}50`,
                width: { xs: 'auto', md: '100%' },
                '&:hover': {
                    bgcolor: isActive ? `${color}15` : `${color}10`,
                    transform: { xs: 'none', md: isActive ? 'none' : 'translateX(8px)' },
                    borderColor: color,
                    '& .role-title': {
                        color: color
                    }
                }
            }}
        >
            <Box sx={{
                width: 4,
                height: isActive ? '60%' : '0%',
                position: 'absolute',
                left: 0,
                bgcolor: color,
                borderRadius: '0 4px 4px 0',
                transition: 'height 0.3s ease'
            }} />
            <Box>
                <Typography
                    variant="h6"
                    className="role-title"
                    sx={{
                        color: isActive ? color : '#474747',
                        fontWeight: isActive ? 700 : 500,
                        fontSize: { xs: '16px', sm: '18px', md: '20px' },
                        transition: 'color 0.3s ease',
                        whiteSpace: 'nowrap'
                    }}
                >
                    {title}
                </Typography>
            </Box>
        </ButtonBase>
    );
};

export default WebRoleButton;
