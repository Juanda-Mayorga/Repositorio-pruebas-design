import React from 'react';
import { Button, type ButtonProps } from '@mui/material';

interface PrimaryButtonProps extends ButtonProps {
    children: React.ReactNode;
}

export const PrimaryButton: React.FC<PrimaryButtonProps> = ({
    children,
    sx,
    ...props
}) => {
    return (
        <Button
            variant="contained"
            {...props}
            sx={{
                height: '48px',
                bgcolor: 'primary.main',
                textTransform: 'none',
                fontWeight: 600,
                boxShadow: 'none',
                fontSize: '16px',
                '&:hover': {
                    bgcolor: 'primary.dark',
                    boxShadow: 'none',
                },
                ...sx,
            }}
        >
            {children}
        </Button>
    );
};
