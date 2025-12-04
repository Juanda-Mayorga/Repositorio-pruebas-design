import React from 'react';
import { Button, CircularProgress, useTheme } from '@mui/material';
import type { ButtonProps } from '@mui/material';

interface WebButtonProps extends Omit<ButtonProps, 'variant'> {
    variant?: 'outlined' | 'contained' | 'soft';
    /**
     * If true, displays a loading spinner and disables the button.
     * Useful for showing loading state during form submissions or async operations.
     */
    loading?: boolean;
}

/**
 * WebButton - Reusable button component for web pages
 * 
 * A styled button component that follows the web design system specifications.
 * Supports multiple variants and loading state with spinner.
 * 
 * @example
 * ```tsx
 * <WebButton variant="contained" onClick={handleSubmit}>
 *   Submit
 * </WebButton>
 * 
 * <WebButton variant="contained" loading={isSubmitting}>
 *   Submitting...
 * </WebButton>
 * ```
 */
export const WebButton: React.FC<WebButtonProps> = ({
    variant = 'outlined',
    children,
    fullWidth = false,
    loading = false,
    disabled,
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
                    boxShadow: 'none',
                    '&:hover': {
                        bgcolor: theme.palette.web.action.primaryHover,
                        boxShadow: 'none',
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
            disabled={disabled || loading}
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
            startIcon={loading ? <CircularProgress size={20} color="inherit" /> : props.startIcon}
            {...props}
        >
            {children}
        </Button>
    );
};
