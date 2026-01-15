import { useState } from 'react';
import { Box, Typography, Container, Grid, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import WebRoleButton from '../atoms/WebRoleButton';
import { WebButton } from '../atoms/WebButton';

// Import images
import roleDirectorImg from '../../../assets/BMM_MMI_RoleDirectorProyecto.svg';
import roleTechnicianImg from '../../../assets/BMM_MMI_RolTécnico.svg';
import roleAccountantImg from '../../../assets/BMM_MMI_RolContable.svg';
import roleItImg from '../../../assets/BMM_MMI_RolResponsableIT.svg';
import roleLegalImg from '../../../assets/BMM_MMI_RolAsesorLegal.svg';

const MotionBox = motion(Box);

export const WebRolesSection = () => {
    const { t } = useTranslation();
    const [activeRole, setActiveRole] = useState(0);

    const roles = [
        {
            id: 'technician',
            color: '#12B76A',
            image: roleTechnicianImg,
        },
        {
            id: 'itManager',
            color: '#2E90FA',
            image: roleItImg,
        },
        {
            id: 'projectDirector',
            color: '#FDB022',
            image: roleDirectorImg,
        },
        {
            id: 'accountant',
            color: '#7A6EBD',
            image: roleAccountantImg,
        },
        {
            id: 'legal',
            color: '#F04438',
            image: roleLegalImg,
        }
    ];

    const currentRole = roles[activeRole];
    const roleTranslation = t(`landingPage.roles.profiles.${currentRole.id}`, { returnObjects: true }) as any;

    return (
        <Box sx={{ py: { xs: 8, md: 16 }, bgcolor: '#FFFFFF', overflow: 'hidden' }}>
            <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 6, md: 10, lg: 8 } }}>
                <Box sx={{
                    mb: { xs: 4, sm: 3, md: 10 },
                    textAlign: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    mx: 'auto'
                }}>
                    <Typography
                        variant="h2"
                        sx={{
                            mb: 2,
                            fontWeight: 500,
                            background: 'linear-gradient(to right, #9989EC, #6E659F, #333337)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                            display: 'inline-block',
                            fontSize: { xs: '32px', md: '48px' }
                        }}
                    >
                        {t('landingPage.roles.title')}
                    </Typography>
                    <Typography
                        variant="body1"
                        sx={{
                            color: 'text.secondary',
                            maxWidth: '700px',
                            fontSize: '18px',
                            fontFamily: '"Hind Siliguri", sans-serif'
                        }}
                    >
                        {t('landingPage.roles.subtitle')}
                    </Typography>
                </Box>

                <Typography
                    variant="body2"
                    sx={{
                        mb: 1,
                        color: 'text.secondary',
                        fontWeight: 600,
                        fontSize: '14px',
                        textAlign: { xs: 'center', md: 'left' },
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em',
                        opacity: 0.8
                    }}
                >
                    {t('landingPage.roles.selectorLabel')}
                </Typography>

                <Grid container spacing={{ xs: 3, md: 8 }} alignItems="flex-start">
                    {/* Role Selector */}
                    <Grid size={{ xs: 12, md: 4, lg: 3 }}>
                        <Box
                            sx={{
                                display: 'flex',
                                flexWrap: 'wrap',
                                flexDirection: { xs: 'row', md: 'column' },
                                justifyContent: { xs: 'center', md: 'flex-start' },
                                gap: { xs: 1, md: 3 },
                                mb: { xs: 2, md: 0 },
                                width: '100%',
                                maxWidth: { lg: '280px' }
                            }}
                        >
                            {roles.map((role, index) => (
                                <WebRoleButton
                                    key={index}
                                    title={t(`landingPage.roles.profiles.${role.id}.title`)}
                                    color={role.color}
                                    isActive={activeRole === index}
                                    onClick={() => setActiveRole(index)}
                                />
                            ))}
                        </Box>
                    </Grid>

                    {/* Role Content Preview */}
                    <Grid size={{ xs: 12, md: 8, lg: 9 }}>
                        <AnimatePresence mode="wait">
                            <MotionBox
                                key={activeRole}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.25, ease: "easeInOut" }}
                                sx={{
                                    bgcolor: '#FBFBFF',
                                    borderRadius: { xs: '16px', md: '24px' },
                                    p: { xs: 3, md: 4 },
                                    pt: { md: 2 },
                                    height: { xs: 'auto', md: '376px' },
                                    display: 'flex',
                                    flexDirection: 'column',
                                    position: 'relative',
                                    overflow: 'hidden',
                                    border: '1px solid',
                                    borderColor: `${currentRole.color}60`
                                }}
                            >
                                <Grid container spacing={{ xs: 2, md: 2 }} sx={{ height: '100%' }}>
                                    {/* Full-width Title Section */}
                                    <Grid size={12}>
                                        <Box sx={{
                                            textAlign: { xs: 'center', md: 'left' },
                                            width: '100%',
                                            mb: { xs: -1.5, sm: -1, md: 2 }
                                        }}>
                                            <Typography
                                                variant="overline"
                                                sx={{
                                                    color: currentRole.color,
                                                    fontWeight: 700,
                                                    letterSpacing: '0.1em'
                                                }}
                                            >
                                                {t('landingPage.roles.mambaFor', { role: roleTranslation.title.toUpperCase() })}
                                            </Typography>
                                            <Typography
                                                variant="h4"
                                                sx={{
                                                    mt: 0.5,
                                                    fontWeight: 500,
                                                    color: '#474747',
                                                    fontSize: { xs: '18px', sm: '20px', md: '28px' },
                                                    fontFamily: '"Inter", sans-serif',
                                                    maxWidth: '100%'
                                                }}
                                            >
                                                {roleTranslation.description}
                                            </Typography>
                                        </Box>
                                    </Grid>

                                    {/* Two-column Content Section */}
                                    <Grid size={{ xs: 12, md: 6 }} sx={{ display: 'flex', flexDirection: 'column' }}>
                                        <Box sx={{
                                            flex: 1,
                                            maxWidth: { xs: '500px', md: 'none' },
                                            mx: { xs: 'auto', md: 0 },
                                            textAlign: { xs: 'center', md: 'left' },
                                            height: {
                                                xs: 'auto',
                                                sm: 'auto',
                                                md: '240px',
                                                lg: '224px',
                                                xl: '228px'
                                            },
                                            mb: { xs: 3, md: 0 }
                                        }}>
                                            <List sx={{
                                                mb: { xs: 1, md: 2 },
                                                display: 'flex',
                                                flexDirection: 'column',
                                                alignItems: 'flex-start',
                                                width: 'fit-content',
                                                mx: { xs: 'auto', md: 0 }
                                            }}>
                                                {roleTranslation.items.map((item: string, i: number) => (
                                                    <ListItem key={i} sx={{
                                                        px: 0,
                                                        py: 0.25,
                                                        width: '100%',
                                                        justifyContent: 'flex-start'
                                                    }}>
                                                        <ListItemIcon sx={{ minWidth: 20 }}>
                                                            <Box sx={{
                                                                width: 5,
                                                                height: 5,
                                                                borderRadius: '50%',
                                                                bgcolor: currentRole.color
                                                            }} />
                                                        </ListItemIcon>
                                                        <ListItemText
                                                            primary={item}
                                                            primaryTypographyProps={{
                                                                sx: {
                                                                    color: '#4A4A4E',
                                                                    fontSize: '15px',
                                                                    fontWeight: 500,
                                                                    fontFamily: '"Hind Siliguri", sans-serif',
                                                                    textAlign: 'left'
                                                                }
                                                            }}
                                                        />
                                                    </ListItem>
                                                ))}
                                            </List>

                                            <WebButton
                                                variant="contained"
                                                sx={{
                                                    mt: 0,
                                                    bgcolor: currentRole.color,
                                                    color: '#FFFFFF',
                                                    borderColor: currentRole.color,
                                                    px: 3,
                                                    py: 1.25,
                                                    fontSize: '14px',
                                                    fontWeight: 600,
                                                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                                    boxShadow: `0 4px 12px ${currentRole.color}30`,
                                                    '&:hover': {
                                                        bgcolor: currentRole.color,
                                                        filter: 'brightness(0.9)',
                                                        borderColor: currentRole.color,
                                                        transform: 'translateY(-2px)',
                                                        boxShadow: `0 6px 16px ${currentRole.color}40`
                                                    },
                                                    '&:active': {
                                                        transform: 'translateY(0)',
                                                        boxShadow: `0 4px 12px ${currentRole.color}30`
                                                    }
                                                }}
                                            >
                                                {t('landingPage.roles.seeWorkflow', { role: roleTranslation.title })}
                                            </WebButton>
                                        </Box>
                                    </Grid>

                                    <Grid size={{ xs: 12, md: 6 }}>
                                        <Box sx={{ position: 'relative', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                            {/* Decorative Background Glow */}
                                            <Box sx={{
                                                position: 'absolute',
                                                width: { xs: '180px', md: '240px' },
                                                height: { xs: '180px', md: '240px' },
                                                borderRadius: '50%',
                                                bgcolor: `${currentRole.color}15`,
                                                filter: 'blur(50px)',
                                                zIndex: 0
                                            }} />
                                            <Box
                                                component="img"
                                                src={currentRole.image}
                                                alt={roleTranslation.title}
                                                sx={{
                                                    width: '100%',
                                                    maxWidth: { md: '320px' },
                                                    height: {
                                                        xs: '260px',
                                                        sm: '260px',
                                                        md: '240px',
                                                        lg: '224px',
                                                        xl: '228px'
                                                    },
                                                    objectFit: 'cover',
                                                    p: 0,
                                                    mx: 'auto',
                                                    display: 'block',
                                                    borderRadius: { xs: '12px', md: '16px' },
                                                    bgcolor: '#FFFFFF',
                                                    filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.1))',
                                                    position: 'relative',
                                                    zIndex: 1
                                                }}
                                            />
                                        </Box>
                                    </Grid>
                                </Grid>
                            </MotionBox>
                        </AnimatePresence>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};
