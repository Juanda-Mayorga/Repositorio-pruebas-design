import { Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

/**
 * @atom WebComingSoonBadge
 * @description
 * Reusable badge indicator for features that are not yet implemented.
 * Features a blinking dot animation and stylized text.
 * 
 * @design_standards
 * - **Font:** Inter, 16px, Medium (500)
 * - **Colors:** Background #F3F0FF, Border #E9D8FD, Text/Dot #6B46C1
 * - **Animation:** Pulsing dot opacity (1 -> 0.4 -> 1)
 */
export const WebComingSoonBadge = () => {
    const { t } = useTranslation();

    return (
        <Box sx={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: { xxs: 0.8, sm: 1, md: 1.2, lg: 1.5 },
            px: { xxs: 1, sm: 1.5, md: 2 },
            py: { xxs: 0.4, sm: 0.6, md: 0.75 },
            mb: { xxs: 2, md: 3 },
            bgcolor: '#F3F0FF',
            borderRadius: '24px',
            border: '1px solid',
            borderColor: '#E9D8FD'
        }}>
            <Box
                component={motion.div}
                animate={{ opacity: [1, 0.4, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                sx={{
                    width: { xxs: 6, sm: 8, md: 10 },
                    height: { xxs: 6, sm: 8, md: 10 },
                    borderRadius: '50%',
                    bgcolor: '#6B46C1'
                }}
            />
            <Typography sx={{
                fontSize: {
                    xxs: '10px',
                    xs: '11px',
                    sm: '12px',
                    md: '13px',
                    lg: '14px',
                    xl: '16px'
                },
                fontWeight: 500,
                fontFamily: '"Inter", sans-serif',
                color: '#6B46C1',
                lineHeight: 1
            }}>
                {t('supportPage.cards.comingSoon')}
            </Typography>
        </Box>
    );
};
