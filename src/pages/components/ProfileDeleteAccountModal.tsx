import React, { useState } from 'react';
import {
    Dialog,
    DialogContent,
    Typography,
    Box,
    Button,
    Select,
    MenuItem,
    TextField,
    FormControl,
    CircularProgress,
    type SelectChangeEvent
} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { useTranslation } from 'react-i18next';
import { InputField } from '../../design-system/molecules/InputField';

interface ProfileDeleteAccountModalProps {
    open: boolean;
    onClose: () => void;
    userEmail: string;
    onConfirm: (reason: string, otherReason?: string) => void;
}

export const ProfileDeleteAccountModal: React.FC<ProfileDeleteAccountModalProps> = ({
    open,
    onClose,
    userEmail,
    onConfirm
}) => {
    const { t } = useTranslation();
    const [reason, setReason] = useState<string>('');
    const [otherReason, setOtherReason] = useState<string>('');
    const [isProcessing, setIsProcessing] = useState<boolean>(false);
    const [isSuccess, setIsSuccess] = useState<boolean>(false);

    const handleReasonChange = (event: SelectChangeEvent<unknown>) => {
        setReason(event.target.value as string);
    };

    const handleConfirm = () => {
        setIsProcessing(true);
        // Simulate processing - in real app this would be an API call
        setTimeout(() => {
            setIsProcessing(false);
            setIsSuccess(true);
            onConfirm(reason, otherReason);
        }, 2000);
    };

    const handleClose = () => {
        setReason('');
        setOtherReason('');
        setIsProcessing(false);
        setIsSuccess(false);
        onClose();
    };

    return (
        <Dialog
            open={open}
            onClose={handleClose}
            maxWidth="sm"
            fullWidth
            slotProps={{
                backdrop: {
                    sx: {
                        backdropFilter: 'blur(4px)',
                        backgroundColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }}
            PaperProps={{
                sx: {
                    borderRadius: '4px',
                    padding: '24px',
                    boxShadow: '0px 8px 24px rgba(0, 0, 0, 0.15)'
                }
            }}
        >
            <DialogContent sx={{ p: 0 }}>
                {isSuccess ? (
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', py: 4 }}>
                        <Box sx={{
                            width: 80,
                            height: 80,
                            borderRadius: '50%',
                            bgcolor: '#D1FAE5',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            mb: 3
                        }}>
                            <CheckCircleIcon sx={{ fontSize: 48, color: '#10B981' }} />
                        </Box>
                        <Typography variant="h5" sx={{ fontWeight: 700, mb: 2, textAlign: 'center' }}>
                            {t('deleteModal.successTitle', 'Solicitud Recibida')}
                        </Typography>
                        <Typography variant="body1" sx={{ color: 'text.secondary', textAlign: 'center', mb: 1 }}>
                            {t('deleteModal.successMessage', 'Hemos recibido tu solicitud para eliminar la cuenta.')}
                        </Typography>
                        <Typography variant="body1" sx={{ color: 'text.secondary', textAlign: 'center', mb: 4 }}>
                            {t('deleteModal.successSubtitle', 'Nuestro equipo la procesará en breve.')}
                        </Typography>
                        <Button
                            variant="outlined"
                            onClick={handleClose}
                            sx={{
                                textTransform: 'none',
                                fontWeight: 600,
                                borderColor: '#D0D5DD',
                                color: '#344054',
                                px: 4,
                                '&:hover': {
                                    borderColor: '#D0D5DD',
                                    bgcolor: '#F9FAFB'
                                }
                            }}
                        >
                            {t('deleteModal.closeButton', 'Cerrar')}
                        </Button>
                    </Box>
                ) : isProcessing ? (
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', py: 6 }}>
                        <CircularProgress size={60} sx={{ mb: 3, color: '#FF4D4F' }} />
                        <Typography variant="h6" sx={{ fontWeight: 600, mb: 1, textAlign: 'center' }}>
                            {t('deleteModal.processing', 'Estamos procesando su solicitud')}
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary', textAlign: 'center' }}>
                            {t('deleteModal.processingSubtitle', 'Por favor, espere un momento...')}
                        </Typography>
                    </Box>
                ) : (
                    <>
                        <Typography variant="h5" sx={{ fontWeight: 700, mb: 1, textAlign: 'center', fontSize: '24px' }}>
                            {t('deleteModal.title', 'Lamentamos que te vayas')}
                        </Typography>
                        <Typography variant="body1" sx={{ color: 'text.secondary', mb: 4, textAlign: 'center' }}>
                            {t('deleteModal.subtitle', 'Para ayudarnos a mejorar, por favor, cuéntanos por qué quieres eliminar tu cuenta.')}
                        </Typography>

                        <Box sx={{ mb: 3 }}>
                            <InputField
                                label={t('deleteModal.emailLabel', 'Tu correo electrónico')}
                                value={userEmail}
                                disabled
                                name="email"
                                variant="email"
                            />
                        </Box>

                        <Box sx={{ mb: 3 }}>
                            <Typography variant="body2" sx={{ mb: 1, fontWeight: 500 }}>
                                {t('deleteModal.reasonLabel', 'Motivo de la baja')}
                            </Typography>
                            <FormControl fullWidth>
                                <Select
                                    value={reason}
                                    onChange={handleReasonChange}
                                    displayEmpty
                                    renderValue={(selected) => {
                                        if (!selected) {
                                            return <Typography color="text.secondary">{t('deleteModal.reasonPlaceholder', 'Selecciona un motivo...')}</Typography>;
                                        }
                                        return t(`deleteModal.reasons.${selected}`, selected);
                                    }}
                                    sx={{
                                        borderRadius: '8px',
                                        '& .MuiOutlinedInput-notchedOutline': {
                                            borderColor: '#E0E0E0',
                                        }
                                    }}
                                >
                                    <MenuItem value="" disabled>
                                        {t('deleteModal.reasonPlaceholder', 'Selecciona un motivo...')}
                                    </MenuItem>
                                    <MenuItem value="unused">{t('deleteModal.reasons.unused', 'No lo uso')}</MenuItem>
                                    <MenuItem value="expensive">{t('deleteModal.reasons.expensive', 'Es muy caro')}</MenuItem>
                                    <MenuItem value="other">{t('deleteModal.reasons.other', 'Otro')}</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>

                        {reason === 'other' && (
                            <Box sx={{ mb: 4 }}>
                                <Typography variant="body2" sx={{ mb: 1, fontWeight: 500 }}>
                                    {t('deleteModal.otherReasonLabel', 'Cuéntanos más')}
                                </Typography>
                                <TextField
                                    fullWidth
                                    multiline
                                    rows={4}
                                    value={otherReason}
                                    onChange={(e) => setOtherReason(e.target.value)}
                                    placeholder={t('deleteModal.otherReasonPlaceholder', 'Escribe aquí...')}
                                    sx={{
                                        '& .MuiOutlinedInput-root': {
                                            borderRadius: '8px',
                                        }
                                    }}
                                />
                            </Box>
                        )}

                        <Box sx={{ display: 'flex', gap: 2, justifyContent: 'space-between', mt: 2 }}>
                            <Button
                                variant="outlined"
                                onClick={onClose}
                                fullWidth
                                sx={{
                                    textTransform: 'none',
                                    fontWeight: 600,
                                    borderColor: '#D0D5DD',
                                    color: '#344054',
                                    height: '44px',
                                    '&:hover': {
                                        borderColor: '#D0D5DD',
                                        bgcolor: '#F9FAFB'
                                    }
                                }}
                            >
                                {t('deleteModal.cancelButton', 'Cancelar')}
                            </Button>
                            <Button
                                variant="contained"
                                onClick={handleConfirm}
                                disabled={!reason || (reason === 'other' && !otherReason)}
                                fullWidth
                                sx={{
                                    textTransform: 'none',
                                    fontWeight: 600,
                                    bgcolor: '#FF4D4F', // Red color for delete action
                                    height: '44px',
                                    '&:hover': {
                                        bgcolor: '#D9363E'
                                    },
                                    '&:disabled': {
                                        bgcolor: '#FFCCC7',
                                        color: '#FFFFFF'
                                    }
                                }}
                            >
                                {t('deleteModal.deleteButton', 'Enviar y eliminar cuenta')}
                            </Button>
                        </Box>
                    </>
                )}
            </DialogContent>
        </Dialog>
    );
};
