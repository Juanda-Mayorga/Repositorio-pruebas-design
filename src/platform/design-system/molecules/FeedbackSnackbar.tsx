import React from 'react';
import { Snackbar, Box, Typography, IconButton, useMediaQuery, useTheme } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import CloseIcon from '@mui/icons-material/Close';

interface FeedbackSnackbarProps {
    open: boolean;
    message: string;
    severity: 'success' | 'error' | 'warning' | 'info';
    onClose: () => void;
    subtitle?: string;
}

export const FeedbackSnackbar: React.FC<FeedbackSnackbarProps> = ({
    open,
    message,
    severity,
    onClose,
    subtitle
}) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const getColors = () => {
        switch (severity) {
            case 'success':
                return { main: '#10B981', bg: '#ECFDF5' }; // Green-500, Green-50
            case 'error':
                return { main: '#F04438', bg: '#FEF2F2' }; // Red-500, Red-50 (Updated for better contrast)
            case 'warning':
                return { main: '#F59E0B', bg: '#FFFBEB' }; // Amber-500, Amber-50
            case 'info':
            default:
                return { main: '#3B82F6', bg: '#EFF6FF' }; // Blue-500, Blue-50
        }
    };

    const colors = getColors();

    return (
        <Snackbar
            open={open}
            autoHideDuration={4000}
            onClose={onClose}
            anchorOrigin={
                isMobile
                    ? { vertical: 'top', horizontal: 'center' }
                    : { vertical: 'top', horizontal: 'right' }
            }
            sx={
                isMobile
                    ? {
                        top: '68px !important', // Header (64px) + 4px
                        left: '16px !important',
                        right: '16px !important',
                        transform: 'none !important'
                    }
                    : {
                        top: '68px !important', // Header (64px) + 4px
                        right: '24px !important'
                    }
            }
        >
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1.5,
                    bgcolor: '#FFFFFF',
                    border: `1px solid #E5E7EB`,
                    borderRadius: '4px',
                    minWidth: isMobile ? 'auto' : '320px',
                    maxWidth: isMobile ? 'none' : '400px',
                    width: isMobile ? '100%' : 'auto',
                    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
                    position: 'relative',
                    overflow: 'hidden',
                    paddingLeft: 0
                }}
            >
                {/* Vertical bar on the left */}
                <Box sx={{
                    width: '4px',
                    height: '100%',
                    bgcolor: colors.main,
                    position: 'absolute',
                    left: 0,
                    top: 0
                }} />

                {/* Icon square */}
                <Box sx={{
                    width: 32,
                    height: 32,
                    borderRadius: '4px',
                    bgcolor: colors.bg,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    ml: 2
                }}>
                    {severity === 'success' && <CheckCircleOutlineIcon sx={{ fontSize: 20, color: colors.main }} />}
                    {severity === 'error' && <ErrorOutlineIcon sx={{ fontSize: 20, color: colors.main }} />}
                    {severity === 'warning' && <WarningAmberIcon sx={{ fontSize: 20, color: colors.main }} />}
                    {severity === 'info' && <InfoOutlinedIcon sx={{ fontSize: 20, color: colors.main }} />}
                </Box>

                {/* Text content */}
                <Box sx={{ flex: 1, py: 1.5 }}>
                    <Typography variant="body1" sx={{ fontWeight: 500, fontSize: '16px', color: '#1F2937', mb: subtitle ? 0.5 : 0 }}>
                        {message}
                    </Typography>
                    {subtitle && (
                        <Typography variant="body2" sx={{ color: '#6B7280', fontSize: '14px' }}>
                            {subtitle}
                        </Typography>
                    )}
                </Box>

                {/* Close button */}
                <IconButton
                    size="small"
                    onClick={onClose}
                    sx={{
                        color: '#9CA3AF',
                        mr: 1.5,
                        p: 0.5,
                        '&:hover': {
                            bgcolor: 'rgba(0, 0, 0, 0.04)'
                        }
                    }}
                >
                    <CloseIcon sx={{ fontSize: 20 }} />
                </IconButton>
            </Box>
        </Snackbar>
    );
};
