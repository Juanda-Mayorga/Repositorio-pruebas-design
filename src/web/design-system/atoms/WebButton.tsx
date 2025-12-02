import React from 'react';
import { Button, useTheme } from '@mui/material';
import type { ButtonProps } from '@mui/material';

interface WebButtonProps extends Omit<ButtonProps, 'variant'> {
    variant?: 'outlined' | 'contained' | 'soft';
}

export const WebButton: React.FC<WebButtonProps> = ({
    variant = 'outlined',
    children,
    fullWidth = false,
    sx,
    ...props
}) => {
    const theme = useTheme();

    const getVariantStyles = () => {
        switch (variant) {
            case 'outlined':
                return {
                    borderColor: theme.palette.web.action.primary,
                    color: theme.palette.web.action.primary,
                    '&:hover': {
                        borderColor: theme.palette.web.action.primaryHover,
                        bgcolor: 'rgba(99, 102, 241, 0.04)'
                    }
                };
            case 'contained':
                return {
                    bgcolor: theme.palette.web.action.primary,
                    '&:hover': {
                        bgcolor: theme.palette.web.action.primaryHover
                    }
                };
            case 'soft':
                // Use MUI's soft variant (already defined in base theme)
                return {};
            default:
                return {};
        }
    };

    return (
        <Button
            variant={variant as any}
            fullWidth={fullWidth}
            sx={{
                textTransform: 'none',
                fontWeight: 600,
                fontFamily: 'Hind Siliguri',
                py: 1.5,
                ...getVariantStyles(),
                ...sx
            }}
            {...props}
        >
            {children}
        </Button>
    );
};
