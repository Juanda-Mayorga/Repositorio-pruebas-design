import { useState } from 'react';
import { Box, Typography, Container, useTheme, Grid, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import WebRoleButton from '../atoms/WebRoleButton';
import { WebButton } from '../atoms/WebButton';

// Import images
import roleSalesImg from '../../../assets/role-sales.png';
import roleBimImg from '../../../assets/role-bim-manager.png';
import roleAdminImg from '../../../assets/role-administration.png';
import roleCommercialImg from '../../../assets/role-commercial.png';
import roleEstimatorImg from '../../../assets/role-estimator.png';

const MotionBox = motion(Box);

export const WebRolesSection = () => {
    const theme = useTheme();
    const [activeRole, setActiveRole] = useState(0);

    const roles = [
        {
            title: 'Técnico',
            color: '#12B76A',
            image: roleBimImg,
            description: 'MAMBA permite a los técnicos medir, cuantificar y generar presupuestos directamente desde modelos BIM',
            items: [
                'Reglas automatizadas de medición',
                'Extracción precisa de datos QTO',
                'Reducción drástica del trabajo manual'
            ]
        },
        {
            title: 'Responsable IT',
            color: '#2E90FA',
            image: roleCommercialImg,
            description: 'Entorno centralizado para gestionar usuarios, licencias e integraciones de forma segura',
            items: [
                'Control de accesos y seguridad',
                'Gestión estable en la nube',
                'Sincronización organizacional coherente'
            ]
        },
        {
            title: 'Director de Proyectos',
            color: '#FDB022',
            image: roleSalesImg,
            description: 'Visión clara de costes, avance y rendimiento del equipo para una toma de decisiones informada',
            items: [
                'Datos y KPI en tiempo real',
                'Procesos estandarizados de control',
                'Control integral del ciclo de proyecto'
            ]
        },
        {
            title: 'Contable',
            color: '#7A6EBD',
            image: roleAdminImg,
            description: 'Conecta mediciones y presupuestos con datos financieros reales para un control total',
            items: [
                'Seguimiento exhaustivo de costes',
                'Detección temprana de desviaciones',
                'Coherencia financiera con el flujo BIM'
            ]
        },
        {
            title: 'Asesor Legal',
            color: '#F04438',
            image: roleEstimatorImg,
            description: 'Control, trazabilidad y cumplimiento normativo de toda la documentación del proyecto',
            items: [
                'Trazabilidad total y registros claros',
                'Reducción de riesgos legales',
                'Aseguramiento del cumplimiento técnico'
            ]
        }
    ];

    return (
        <Box sx={{ py: { xs: 8, md: 16 }, bgcolor: '#FFFFFF', overflow: 'hidden' }}>
            <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 6, md: 10, lg: 15 } }}>
                <Box sx={{
                    mb: { xs: 6, md: 10 },
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
                            fontWeight: 700,
                            background: 'linear-gradient(to right, #9989EC, #6E659F, #333337)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                            display: 'inline-block',
                            fontSize: { xs: '32px', md: '48px' }
                        }}
                    >
                        Designed to fit every <Box component="span" sx={{ color: theme.palette.web.action.primary }}>role</Box>
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
                        From technicians to lawyers, MAMBA provides the complete solution that works for every role
                    </Typography>
                </Box>

                <Grid container spacing={{ xs: 3, md: 8 }}>
                    {/* Role Selector */}
                    <Grid size={{ xs: 12, md: 4 }}>
                        <Typography
                            variant="body2"
                            sx={{
                                mb: 2,
                                color: 'text.secondary',
                                fontWeight: 600,
                                fontSize: '14px',
                                textAlign: { xs: 'center', md: 'left' },
                                textTransform: 'uppercase',
                                letterSpacing: '0.05em',
                                opacity: 0.8
                            }}
                        >
                            Selecciona tu perfil profesional
                        </Typography>
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: { xs: 'row', md: 'column' },
                                flexWrap: { xs: 'wrap', md: 'nowrap' },
                                justifyContent: { xs: 'center', md: 'flex-start' },
                                gap: { xs: 1.5, md: 1 },
                                mb: { xs: 2, md: 0 }
                            }}
                        >
                            {roles.map((role, index) => (
                                <WebRoleButton
                                    key={index}
                                    title={role.title}
                                    color={role.color}
                                    isActive={activeRole === index}
                                    onClick={() => setActiveRole(index)}
                                />
                            ))}
                        </Box>
                    </Grid>

                    {/* Role Content Preview */}
                    <Grid size={{ xs: 12, md: 8 }}>
                        <AnimatePresence mode="wait">
                            <MotionBox
                                key={activeRole}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.25, ease: "easeInOut" }}
                                sx={{
                                    bgcolor: '#FBFBFF',
                                    borderRadius: { xs: '24px', md: '32px' },
                                    p: { xs: 3, md: 6 },
                                    height: '100%',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    position: 'relative',
                                    overflow: 'hidden',
                                    border: '1px solid',
                                    borderColor: `${roles[activeRole].color}60`
                                    // Removed CSS transition that conflicted with Framer Motion
                                }}
                            >
                                <Grid container spacing={4} alignItems="center" sx={{ height: '100%' }}>
                                    <Grid size={{ xs: 12, lg: 6 }}>
                                        <Box sx={{
                                            maxWidth: { xs: '500px', lg: 'none' },
                                            mx: { xs: 'auto', lg: 0 },
                                            textAlign: { xs: 'center', lg: 'left' },
                                            display: 'flex',
                                            flexDirection: 'column',
                                            alignItems: { xs: 'center', lg: 'flex-start' }
                                        }}>
                                            <Box sx={{ mb: 2, width: '100%' }}>
                                                <Typography
                                                    variant="overline"
                                                    sx={{
                                                        color: roles[activeRole].color,
                                                        fontWeight: 700,
                                                        letterSpacing: '0.1em'
                                                    }}
                                                >
                                                    MAMBA FOR {roles[activeRole].title.toUpperCase()}
                                                </Typography>
                                                <Typography
                                                    variant="h4"
                                                    sx={{
                                                        mt: 1,
                                                        mb: 2,
                                                        fontWeight: 500,
                                                        color: '#474747',
                                                        fontSize: { xs: '24px', md: '32px' }
                                                    }}
                                                >
                                                    {roles[activeRole].description}
                                                </Typography>
                                            </Box>

                                            <List sx={{
                                                mb: 2,
                                                display: 'flex',
                                                flexDirection: 'column',
                                                alignItems: 'flex-start',
                                                width: 'fit-content',
                                                mx: { xs: 'auto', lg: 0 }
                                            }}>
                                                {roles[activeRole].items.map((item, i) => (
                                                    <ListItem key={i} sx={{
                                                        px: 0,
                                                        py: 1,
                                                        width: '100%',
                                                        justifyContent: 'flex-start'
                                                    }}>
                                                        <ListItemIcon sx={{ minWidth: 32 }}>
                                                            <Box sx={{
                                                                width: 8,
                                                                height: 8,
                                                                borderRadius: '50%',
                                                                bgcolor: roles[activeRole].color
                                                            }} />
                                                        </ListItemIcon>
                                                        <ListItemText
                                                            primary={item}
                                                            primaryTypographyProps={{
                                                                sx: {
                                                                    color: '#4A4A4E',
                                                                    fontSize: '16px',
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
                                                variant="outlined"
                                                sx={{
                                                    borderColor: roles[activeRole].color,
                                                    color: roles[activeRole].color,
                                                    borderRadius: '12px',
                                                    px: 4,
                                                    py: 1.2,
                                                    '&:hover': {
                                                        borderColor: roles[activeRole].color,
                                                        bgcolor: `${roles[activeRole].color}08`
                                                    }
                                                }}
                                            >
                                                See {roles[activeRole].title} workflow
                                            </WebButton>
                                        </Box>
                                    </Grid>
                                    <Grid size={{ xs: 12, lg: 6 }}>
                                        <Box
                                            component="img"
                                            src={roles[activeRole].image}
                                            alt={roles[activeRole].title}
                                            sx={{
                                                width: '100%',
                                                height: 'auto',
                                                maxWidth: '320px',
                                                mx: 'auto',
                                                display: 'block',
                                                filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.08))'
                                            }}
                                        />
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
