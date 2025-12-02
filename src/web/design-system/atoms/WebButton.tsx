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
                    bgcolor: '#FFFFFF',
                    borderColor: '#7367B1',
                    color: '#7367B1',
                    '&:hover': {
                        bgcolor: '#EDEBFB',
                        borderColor: '#7367B1',
                    },
                    '&:active': {
                        bgcolor: '#DFDAF9',
                        borderColor: '#7367B1',
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
                fontWeight: variant === 'contained' ? 400 : 400, // All variants use 400
                fontSize: variant === 'contained' ? '20px' : undefined,
                fontFamily: 'Hind Siliguri',
                minHeight: 44, // Accessibility standard for touch targets
                maxHeight: 48,
                py: { xs: 1, sm: 1.25, md: 1.5 }, // Responsive padding
                ...getVariantStyles(),
                ...sx
            }}
            {...props}
        >
            {children}
        </Button>
    );
};
