import { Snackbar, Alert } from '@mui/material';
import type { AlertColor } from '@mui/material';

interface FeedbackSnackbarProps {
    open: boolean;
    message: string;
    severity?: AlertColor;
    onClose: () => void;
    autoHideDuration?: number;
}

export const FeedbackSnackbar = ({
    open,
    message,
    severity = 'success',
    onClose,
    autoHideDuration = 3000
}: FeedbackSnackbarProps) => {
    return (
        <Snackbar
            open={open}
            autoHideDuration={autoHideDuration}
            onClose={onClose}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        >
            <Alert
                onClose={onClose}
                severity={severity}
                sx={{
                    width: '100%',
                    fontFamily: '"Hind Siliguri", sans-serif',
                    fontWeight: 500,
                    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.15)'
                }}
            >
                {message}
            </Alert>
        </Snackbar>
    );
};
