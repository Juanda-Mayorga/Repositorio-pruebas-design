import React from 'react';
import { Snackbar, Box, Typography, IconButton } from '@mui/material';
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
    const getBorderColor = () => {
        switch (severity) {
            case 'success':
                return '#10B981';
            case 'error':
                return '#FECACA';
            case 'warning':
                return '#FDE68A';
            case 'info':
            default:
                return '#BFDBFE';
        }
    };

    return (
        <Snackbar
            open={open}
            autoHideDuration={4000}
            onClose={onClose}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            sx={{
                top: '80px !important',
                right: '24px !important'
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1.5,
                    bgcolor: '#FFFFFF',
                    border: `1px solid #E5E7EB`,
                    borderRadius: '4px',
                    minWidth: '320px',
                    maxWidth: '400px',
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
                    bgcolor: getBorderColor(),
                    position: 'absolute',
                    left: 0,
                    top: 0
                }} />

                {/* Icon square */}
                <Box sx={{
                    width: 32,
                    height: 32,
                    borderRadius: '4px',
                    bgcolor: getBorderColor(),
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    ml: 2
                }}>
                    {severity === 'success' && <CheckCircleOutlineIcon sx={{ fontSize: 20, color: '#FFFFFF' }} />}
                    {severity === 'error' && <ErrorOutlineIcon sx={{ fontSize: 20, color: '#FFFFFF' }} />}
                    {severity === 'warning' && <WarningAmberIcon sx={{ fontSize: 20, color: '#FFFFFF' }} />}
                    {severity === 'info' && <InfoOutlinedIcon sx={{ fontSize: 20, color: '#FFFFFF' }} />}
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
