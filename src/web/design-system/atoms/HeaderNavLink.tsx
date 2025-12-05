import { Box, Typography } from '@mui/material';
import React from 'react';

interface HeaderNavLinkProps {
    children: React.ReactNode;
    selected?: boolean;
    onClick?: (event: React.MouseEvent<HTMLElement>) => void;
}

export const HeaderNavLink = ({ children, selected = false, onClick }: HeaderNavLinkProps) => {
    return (
        <Box
            onClick={onClick}
            sx={{
                cursor: 'pointer',
                padding: '8px',
                borderRadius: '4px',
                color: selected ? '#6B46C1' : '#2F2F32',
                backgroundColor: 'transparent',
                display: 'flex',
                alignItems: 'center',
                gap: 0.5,
                transition: 'all 0.2s ease-in-out',
                '&:hover': {
                    backgroundColor: '#F4F4F7',
                    color: '#2F2F32',
                },
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
                        '@media (min-width:1440px)': {
                            fontSize: '20px',
                        }
                    }}
                >
                    {children}
                </Typography>
            ) : (
                // If children is complex (e.g. icon + text), we apply styles to a wrapper or rely on inheritance.
                // However, the user specifically asked for text styling.
                <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 0.5,
                    fontFamily: '"Hind Siliguri", sans-serif',
                    fontWeight: 500,
                    '@media (min-width:1440px)': {
                        fontSize: '20px',
                    }
                }}>
                    {children}
                </Box>
            )}
        </Box>
    );
};
