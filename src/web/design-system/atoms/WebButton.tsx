import React from 'react';
import { Button, CircularProgress, useTheme } from '@mui/material';
import type { ButtonProps } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

interface WebButtonProps extends Omit<ButtonProps, 'variant'> {
    variant?: 'outlined' | 'contained' | 'soft' | 'dropdown';
    /**
     * If true, displays a loading spinner and disables the button.
     * Useful for showing loading state during form submissions or async operations.
     */
    loading?: boolean;
    /**
     * For 'dropdown' variant, controls the rotation of the arrow icon.
     */
    isOpen?: boolean;
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
    isOpen = false,
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
                    borderColor: '#7A6EBD',
                    color: '#7A6EBD',
                    '&:hover': {
                        bgcolor: '#EDEBFB',
                        borderColor: '#7A6EBD',
                    },
                    '&:active': {
                        bgcolor: '#DFDAF9',
                        borderColor: '#7A6EBD',
                    }
                };
            case 'contained':
            case 'dropdown':
                return {
                    bgcolor: theme.palette.web.action.primary,
                    color: '#FFFFFF',
                    boxShadow: 'none',
                    '&:hover': {
                        bgcolor: theme.palette.web.action.primaryHover,
                        boxShadow: 'none',
                    },
                    '&:active': {
                        bgcolor: theme.palette.web.action.primaryHover,
                    }
                };
            case 'soft':
                return {};
            default:
                return {};
        }
    };

    const navLinkFontSize = {
        fontFamily: '"Hind Siliguri", sans-serif',
        fontWeight: 500,
        fontSize: '14px',
        '@media (min-width: 1440px)': {
            fontSize: '18px'
        },
        '@media (min-width: 1920px)': {
            fontSize: '20px'
        }
    };

    return (
        <Button
            variant={variant === 'dropdown' ? 'contained' : (variant as any)}
            fullWidth={fullWidth}
            disabled={disabled || loading}
            sx={{
                textTransform: 'none',
                fontWeight: 500,
                fontSize: variant === 'contained' || variant === 'dropdown' ? '20px' : undefined,
                fontFamily: 'Hind Siliguri',
                minHeight: 44,
                maxHeight: 48,
                borderRadius: '4px',
                py: { xs: 1, sm: 1.25, md: 1.5 },
                ...(variant === 'dropdown' ? {
                    ...navLinkFontSize,
                    py: '8px',
                    px: '16px',
                    minHeight: 'auto',
                    maxHeight: 'none',
                } : {}),
                ...getVariantStyles(),
                ...sx
            }}
            startIcon={loading ? <CircularProgress size={20} color="inherit" /> : props.startIcon}
            endIcon={variant === 'dropdown' ? (
                <KeyboardArrowDownIcon
                    sx={{
                        transform: isOpen ? 'rotate(180deg)' : 'none',
                        transition: 'transform 0.2s',
                        color: 'inherit'
                    }}
                />
            ) : props.endIcon}
            {...props}
        >
            {children}
        </Button>
    );
};
