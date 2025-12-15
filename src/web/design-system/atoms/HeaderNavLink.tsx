import { Box, Typography } from '@mui/material';
import React from 'react';

interface HeaderNavLinkProps {
    children: React.ReactNode;
    selected?: boolean;
    onClick?: (event: React.MouseEvent<HTMLElement>) => void;
    onMouseEnter?: (event: React.MouseEvent<HTMLElement>) => void;
    onMouseLeave?: (event: React.MouseEvent<HTMLElement>) => void;
    active?: boolean;
    disableHover?: boolean;
}

export const HeaderNavLink = ({ children, selected = false, active = false, disableHover = false, onClick, onMouseEnter, onMouseLeave }: HeaderNavLinkProps) => {
    return (
        <Box
            onClick={onClick}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            sx={{
                cursor: 'pointer',
                padding: '8px',
                borderRadius: '4px',
                color: selected ? '#6B46C1' : '#2F2F32',
                backgroundColor: active ? '#F4F4F7' : 'transparent',
                display: 'flex',
                alignItems: 'center',
                gap: 0.5,
                transition: 'all 0.2s ease-in-out',
                '&:hover': disableHover ? {} : (!selected ? {
                    backgroundColor: '#F4F4F7',
                    color: '#2F2F32',
                } : {}),
                // Ensure typography inherits color
                '& .MuiTypography-root': {
                    fontWeight: 500,
                    color: 'inherit',
                }
            }}
        >
            {typeof children === 'string' ? (
                <Typography
                    variant="body1"
                    component="span"
                    sx={{
                        fontWeight: 500,
                        fontFamily: '"Hind Siliguri", sans-serif',
                        color: 'inherit'
                    }}
                >
                    {children}
                </Typography>
            ) : (
                <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 0.5,
                    fontFamily: '"Hind Siliguri", sans-serif',
                    fontWeight: 500,
                    color: 'inherit'
                }}>
                    {children}
                </Box>
            )}
        </Box>
    );
};
