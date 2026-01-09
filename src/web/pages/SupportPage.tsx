import { Box, Typography, useTheme, Grid, Container } from '@mui/material';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import GroupsOutlined from '@mui/icons-material/GroupsOutlined';
import ChatOutlined from '@mui/icons-material/ChatOutlined';
import ListAltOutlined from '@mui/icons-material/ListAltOutlined';
import { MainLayout } from '../design-system/templates/MainLayout';

const MotionTypography = motion(Typography);
const MotionGrid = motion(Grid);

/**
 * @view SupportPage
 * @description
 * Página de Soporte. Presenta la gestión de licencias,
 * usuarios y formación con una estética premium y animaciones de scroll.
 * 
 * @design_standards
 * - **Hero:** Título centralizado con escala responsive (32px - 64px).
 * - **Features:** Grid de 3 columnas con tarjetas personalizadas.
 */
export const SupportPage = () => {
    const { t } = useTranslation();
    const theme = useTheme();

    const features = [
        {
            icon: GroupsOutlined,
            titleKey: 'supportPage.cards.teamAligned.title',
            descKey: 'supportPage.cards.teamAligned.description'
        },
        {
            icon: ChatOutlined,
            titleKey: 'supportPage.cards.integratedSupport.title',
            descKey: 'supportPage.cards.integratedSupport.description'
        },
        {
            icon: ListAltOutlined,
            titleKey: 'supportPage.cards.traceability.title',
            descKey: 'supportPage.cards.traceability.description'
        }
    ];

    return (
        <MainLayout sx={{ bgcolor: '#FFFFFF', overflowX: 'hidden' }}>
            {/* Hero Header */}
            <Box sx={{ textAlign: 'center', pt: theme.webLayout.headerSpacing, pb: 6, px: 2 }}>
                <MotionTypography
                    variant="h1"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    sx={{ mb: 2 }}
                >
                    {t('supportPage.hero.title')}
                </MotionTypography>
                <MotionTypography
                    variant="subtitle1"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    sx={{
                        color: 'text.secondary',
                        maxWidth: 700,
                        mx: 'auto',
                        fontSize: '16px', // xs, sm, md (375px, 744px, 1133px)
                        [theme.breakpoints.up('lg')]: { // 1440px, 1920px
                            fontSize: '20px'
                        }
                    }}
                >
                    {t('supportPage.hero.subtitle')}
                </MotionTypography>
            </Box>

            {/* Feature Cards Section */}
            <Container maxWidth="lg" sx={{ px: { xs: 2, md: 4 }, pb: 10 }}>
                <Grid container spacing={4}>
                    {features.map((feature, index) => (
                        <MotionGrid
                            size={{ xs: 12, md: 4 }}
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <Box sx={{
                                p: 4,
                                height: '100%',
                                bgcolor: '#FFFFFF',
                                borderRadius: '16px',
                                border: '1px solid',
                                borderColor: 'divider',
                                boxShadow: '0px 4px 24px rgba(0, 0, 0, 0.04)',
                                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                                '&:hover': {
                                    transform: 'translateY(-4px)',
                                    boxShadow: '0px 12px 32px rgba(0, 0, 0, 0.08)',
                                }
                            }}>
                                <Box sx={{
                                    display: 'inline-flex',
                                    p: 1.5,
                                    mb: 3,
                                    bgcolor: '#F3F0FF',
                                    borderRadius: '12px',
                                    color: '#6B46C1'
                                }}>
                                    <feature.icon sx={{ fontSize: 32 }} />
                                </Box>
                                <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>
                                    {t(feature.titleKey)}
                                </Typography>
                                <Typography variant="body1" color="text.secondary">
                                    {t(feature.descKey)}
                                </Typography>
                            </Box>
                        </MotionGrid>

                    ))}
                </Grid>
            </Container>


        </MainLayout >
    );
};
