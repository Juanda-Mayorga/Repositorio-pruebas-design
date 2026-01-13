import { useState } from 'react';
import { Box, Typography, Container, useTheme, Grid, ButtonBase, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { MainLayout } from '../design-system/templates/MainLayout';
import { WebButton } from '../design-system/atoms/WebButton';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';

// Import images
import measurementHero from '../../assets/Measurement.svg';
import sustainabilityHero from '../../assets/Sustainability.svg';
import managementHero from '../../assets/Management.svg';
import roleSalesImg from '../../assets/role-sales.png';
import roleBimImg from '../../assets/role-bim-manager.png';
import roleAdminImg from '../../assets/role-administration.png';
import roleCommercialImg from '../../assets/role-commercial.png';
import roleEstimatorImg from '../../assets/role-estimator.png';
import architectsImg from '../../assets/Architects.svg';
import constructionImg from '../../assets/Construction.svg';
import promotersImg from '../../assets/Promoters.svg';
import engineeringImg from '../../assets/Engineering.svg';
import logoAcciona from '../../assets/BMM_MMI_LogoAcciona_0100.svg';
import logoArup from '../../assets/BMM_MMI_LogoArup_0100.svg';
import logoIdom from '../../assets/BMM_MMI_LogoIdom_0100.svg';
import logoMvc from '../../assets/BMM_MMI_LogoMvc_0100.svg';
import logoCfc from '../../assets/BMM_MMI_LogoCFC_0100.svg';
import logoWisebuild from '../../assets/Logo_Wisebuild.svg';
import logoApogea from '../../assets/BMM_MMI_LogoApogea_0100.svg';
import logoIneco from '../../assets/BMM_MMI_LogoIneco_0100.svg';
import logoTylin from '../../assets/BMM_MMI_LogoTYlin_0100.svg';
import logoVielca from '../../assets/BMM_MMI_LogoVielca_0100.svg';
import logoMsi from '../../assets/BMM_MMI_LogoMsi_0100.svg';
import logoGlobalOmnium from '../../assets/BMM_MMI_LogoGlobalOmnium_0100.svg';
import logoBerrilan from '../../assets/BMM_MMI_Berrilan_0100.svg';
import logoHualca from '../../assets/BMM_MMI_Hualca.svg';
import logoGobNavarra from '../../assets/BMM_MMI_LogoGobiernoDeNavarra_0100.svg';
import logoGobTpf from '../../assets/BMM_MMI_LogoGobiernoTpf_0100.svg';
import logoPlanho from '../../assets/BMM_MMI_LogoPlanho_0100.svg';

const MotionBox = motion(Box);

/**
 * @view LandingPage
 * @description
 * Página de aterrizaje principal de MAMBA rediseñada. 
 * Implementa un flujo de conversión basado en el nuevo diseño visual.
 * 
 * @sections
 * 1. Hero: Propuesta de valor con imagen de producto.
 * 2. Trusted By: Prueba social con logos.
 * 3. Sectors: Enfoque industrial (AECO).
 * 4. Problems: Identificación de puntos de dolor.
 * 5. Roles: Adaptabilidad por perfil.
 * 6. Value: Qué es MAMBA y su valor diferencial.
 * 7. Delivery: Software, Cloud y Soporte.
 * 8. CTA: Banner final de conversión.
 */
export const LandingPage = () => {
    const { t } = useTranslation();
    const theme = useTheme();

    const [activeHeroIndex, setActiveHeroIndex] = useState(0);

    const heroSlides = [
        {
            keyword: 'Measurement',
            image: measurementHero
        },
        {
            keyword: 'Sustainability',
            image: sustainabilityHero
        },
        {
            keyword: 'Management',
            image: managementHero
        }
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setActiveHeroIndex((prev) => (prev + 1) % heroSlides.length);
        }, 4000);
        return () => clearInterval(timer);
    }, []);

    const logos = [
        { name: 'Acciona', src: logoAcciona },
        { name: 'Arup', src: logoArup },
        { name: 'IDOM', src: logoIdom },
        { name: 'MVC', src: logoMvc },
        { name: 'CFC', src: logoCfc },
        { name: 'Wisebuild', src: logoWisebuild },
        { name: 'Apogea', src: logoApogea },
        { name: 'Ineco', src: logoIneco },
        { name: 'TYlin', src: logoTylin },
        { name: 'Vielca', src: logoVielca },
        { name: 'MSI', src: logoMsi },
        { name: 'Global Omnium', src: logoGlobalOmnium },
        { name: 'Berrilan', src: logoBerrilan },
        { name: 'Hualca', src: logoHualca },
        { name: 'Gobierno de Navarra', src: logoGobNavarra },
        { name: 'Gobierno TPF', src: logoGobTpf },
        { name: 'Planho', src: logoPlanho },
    ];

    const sectors = [
        { name: 'Engineering', image: engineeringImg },
        { name: 'Architects', image: architectsImg },
        { name: 'Promoters', image: promotersImg },
        { name: 'Construction', image: constructionImg },
    ];

    const problems = [
        "Extraer mediciones de forma manual requiere mucho tiempo",
        "Modificaciones manuales constantes",
        "Dificultad para mantener el control de costes",
        "Falta de trazabilidad en el dato"
    ];

    const [activeRole, setActiveRole] = useState(0);

    const roles = [
        {
            title: 'Técnico',
            color: '#12B76A',
            image: roleBimImg,
            description: 'MAMBA permite a los técnicos medir, cuantificar y generar presupuestos directamente desde modelos BIM.',
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
            description: 'Entorno centralizado para gestionar usuarios, licencias e integraciones de forma segura.',
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
            description: 'Visión clara de costes, avance y rendimiento del equipo para una toma de decisiones informada.',
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
            description: 'Conecta mediciones y presupuestos con datos financieros reales para un control total.',
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
            description: 'Control, trazabilidad y cumplimiento normativo de toda la documentación del proyecto.',
            items: [
                'Trazabilidad total y registros claros',
                'Reducción de riesgos legales',
                'Aseguramiento del cumplimiento técnico'
            ]
        }
    ];

    return (
        <MainLayout sx={{ bgcolor: '#FCFCFC' }} mainSx={{ mt: 0 }}>
            {/* 1. Hero Section */}
            <Box sx={{
                pt: { xs: 12, md: 16 },
                pb: { xs: 8, md: 12 },
                background: 'linear-gradient(180deg, #FFFFFF 0%, #F8F9FA 100%)'
            }}>
                <Container maxWidth="lg">
                    <Grid container spacing={4} alignItems="center">
                        <Grid size={{ xs: 12, md: 6 }}>
                            <MotionBox
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                            >
                                <Typography
                                    variant="h1"
                                    sx={{
                                        fontSize: { xs: '32px', sm: '48px', md: '56px' },
                                        lineHeight: 1.2,
                                        mb: 3,
                                        background: 'none',
                                        WebkitTextFillColor: 'initial',
                                        color: '#333337',
                                        textAlign: 'left'
                                    }}
                                >
                                    The smartest way to automate BIM <Box component="span" sx={{ display: 'inline-block', minWidth: { md: '300px' } }}>
                                        <AnimatePresence mode="wait">
                                            <MotionBox
                                                key={heroSlides[activeHeroIndex].keyword}
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: -10 }}
                                                transition={{ duration: 0.5 }}
                                                sx={{
                                                    background: 'linear-gradient(to right, #9989EC, #6E659F, #333337)',
                                                    WebkitBackgroundClip: 'text',
                                                    WebkitTextFillColor: 'transparent',
                                                    backgroundClip: 'text',
                                                    display: 'inline-block'
                                                }}
                                            >
                                                {heroSlides[activeHeroIndex].keyword}
                                            </MotionBox>
                                        </AnimatePresence>
                                    </Box>
                                </Typography>
                                <Typography
                                    variant="body1"
                                    sx={{
                                        fontSize: '18px',
                                        color: 'text.secondary',
                                        mb: 5,
                                        maxWidth: '480px',
                                        fontFamily: '"Hind Siliguri", sans-serif'
                                    }}
                                >
                                    MAMBA extracts and updates quantities directly from BIM models,
                                    eliminating errors and manual tasks for construction teams.
                                </Typography>
                                <WebButton
                                    variant="contained"
                                    sx={{
                                        py: 2,
                                        px: 6,
                                        borderRadius: '8px',
                                        fontSize: '16px',
                                        fontWeight: 600,
                                        textTransform: 'none',
                                        boxShadow: '0 4px 14px 0 rgba(122, 110, 189, 0.39)'
                                    }}
                                >
                                    {t('common.beOurPartner', 'Sea nuestro socio')}
                                </WebButton>
                            </MotionBox>
                        </Grid>
                        <Grid size={{ xs: 12, md: 6 }}>
                            <MotionBox
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                sx={{ position: 'relative' }}
                            >
                                <AnimatePresence mode="wait">
                                    <MotionBox
                                        key={activeHeroIndex}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -20 }}
                                        transition={{ duration: 0.7 }}
                                        sx={{ position: 'relative' }}
                                    >
                                        <Box
                                            component="img"
                                            src={heroSlides[activeHeroIndex].image}
                                            alt={`MAMBA BIM ${heroSlides[activeHeroIndex].keyword}`}
                                            sx={{
                                                width: '100%',
                                                height: 'auto',
                                                borderRadius: '16px',
                                                boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
                                            }}
                                        />
                                    </MotionBox>
                                </AnimatePresence>
                            </MotionBox>
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            {/* 2. Trusted By Section */}
            <Box sx={{ py: 6, bgcolor: '#FFFFFF', borderTop: '1px solid #F0F0F0', borderBottom: '1px solid #F0F0F0' }}>
                <Container maxWidth="lg">
                    <Typography
                        variant="overline"
                        sx={{
                            display: 'block',
                            textAlign: 'center',
                            mb: 4,
                            color: 'text.secondary',
                            letterSpacing: '0.1em'
                        }}
                    >
                        Trusted by leading AECO companies
                    </Typography>
                    <Grid container spacing={4} justifyContent="center" alignItems="center">
                        {logos.map((logo, index) => (
                            <Grid key={index} size={{ xs: 4, sm: 3, md: 2, lg: 2, xl: 2 }}>
                                <Box
                                    component="img"
                                    src={logo.src}
                                    alt={logo.name}
                                    sx={{
                                        width: '100%',
                                        maxWidth: {
                                            xs: '80px',
                                            sm: '96px',
                                            md: '110px',
                                            lg: '120px',
                                            xl: '140px'
                                        },
                                        height: {
                                            xs: '32px',
                                            sm: '40px',
                                            md: '44px',
                                            lg: '48px',
                                            xl: '56px'
                                        },
                                        objectFit: 'contain',
                                        mx: 'auto',
                                        display: 'block'
                                    }}
                                />
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Box>

            {/* 3. Designed for the AECO Sector */}
            <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: '#FFFFFF' }}>
                <Container maxWidth="lg">
                    <Box sx={{ textAlign: 'center', mb: 8 }}>
                        <Typography variant="h2" sx={{ mb: 2, color: '#333337' }}>
                            Designed for the <Box component="span" sx={{ color: theme.palette.web.action.primary }}>AECO</Box> sector
                        </Typography>
                        <Typography
                            variant="body1"
                            sx={{
                                color: 'text.secondary',
                                maxWidth: '600px',
                                mx: 'auto',
                                fontFamily: '"Hind Siliguri", sans-serif'
                            }}
                        >
                            A solution that connects every part of the AECO workflow, reducing errors and maximizing efficiency
                        </Typography>
                    </Box>

                    <Grid container spacing={4}>
                        {sectors.map((sector, index) => (
                            <Grid key={index} size={{ xs: 12, sm: 6, md: 3 }}>
                                <MotionBox
                                    sx={{
                                        position: 'relative',
                                        height: { xs: '132px', sm: '140px', md: '400px' },
                                        maxWidth: {
                                            xs: '325px',
                                            sm: '300px',
                                            md: '100%'
                                        },
                                        mx: 'auto',
                                        borderRadius: '16px',
                                        overflow: 'hidden',
                                        boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
                                    }}
                                >
                                    <Box
                                        component="img"
                                        src={sector.image}
                                        alt={sector.name}
                                        sx={{
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'cover'
                                        }}
                                    />
                                    <Box sx={{
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        right: 0,
                                        bottom: 0,
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        background: 'rgba(0,0,0,0.4)',
                                        color: '#FFFFFF',
                                        p: 2
                                    }}>
                                        <Typography variant="h5" sx={{ fontWeight: 600, textAlign: 'center' }}>
                                            {sector.name}
                                        </Typography>
                                    </Box>
                                </MotionBox>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Box>

            {/* 4. What's holding your projects back? */}
            <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: '#F8F9FA' }}>
                <Container maxWidth="lg">
                    <Box sx={{ textAlign: 'center', mb: 8 }}>
                        <Typography variant="h2" sx={{ mb: 2, color: '#333337' }}>
                            What’s holding your <Box component="span" sx={{ color: theme.palette.web.action.primary }}>projects back</Box>?
                        </Typography>
                        <Typography
                            variant="body1"
                            sx={{
                                color: 'text.secondary',
                                maxWidth: '600px',
                                mx: 'auto',
                                fontFamily: '"Hind Siliguri", sans-serif'
                            }}
                        >
                            With 25 years of experience in the AECO industry, we know the model isn’t the main problem
                        </Typography>
                    </Box>

                    <Grid container spacing={4}>
                        {problems.map((problem, index) => (
                            <Grid key={index} size={{ xs: 12, md: 6 }}>
                                <Box sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    bgcolor: '#FFFFFF',
                                    p: 3,
                                    borderRadius: '12px',
                                    boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
                                    height: '100%'
                                }}>
                                    <Box sx={{
                                        width: 24,
                                        height: 24,
                                        borderRadius: '50%',
                                        bgcolor: theme.palette.web.action.primary,
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        mr: 2,
                                        color: '#FFFFFF',
                                        fontSize: '14px',
                                        flexShrink: 0
                                    }}>
                                        ✓
                                    </Box>
                                    <Typography variant="body1" sx={{ color: '#333337', fontWeight: 500 }}>
                                        {problem}
                                    </Typography>
                                </Box>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Box>

            {/* 5. Designed to fit every role */}
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
                                fontSize: { xs: '32px', md: '48px' },
                                fontWeight: 700,
                                mb: 2,
                                color: '#333337'
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
                                    <ButtonBase
                                        key={index}
                                        onClick={() => setActiveRole(index)}
                                        sx={{
                                            justifyContent: { xs: 'center', md: 'flex-start' },
                                            px: { xs: 2.5, md: 3 },
                                            py: { xs: 1, md: 3 },
                                            height: { xs: '40px', md: 'auto' },
                                            borderRadius: { xs: '8px', md: '16px' },
                                            textAlign: 'left',
                                            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                            position: 'relative',
                                            bgcolor: activeRole === index ? `${role.color}15` : `${role.color}08`,
                                            border: '1px solid',
                                            borderColor: activeRole === index ? role.color : `${role.color}50`,
                                            '&:hover': {
                                                bgcolor: activeRole === index ? `${role.color}15` : `${role.color}10`,
                                                transform: { xs: 'none', md: activeRole === index ? 'none' : 'translateX(8px)' },
                                                borderColor: role.color,
                                                '& .role-title': {
                                                    color: role.color
                                                }
                                            }
                                        }}
                                    >
                                        <Box sx={{
                                            width: 4,
                                            height: activeRole === index ? '60%' : '0%',
                                            position: 'absolute',
                                            left: 0,
                                            bgcolor: role.color,
                                            borderRadius: '0 4px 4px 0',
                                            transition: 'height 0.3s ease'
                                        }} />
                                        <Box>
                                            <Typography
                                                variant="h6"
                                                className="role-title"
                                                sx={{
                                                    color: activeRole === index ? role.color : '#333337',
                                                    fontWeight: activeRole === index ? 700 : 500,
                                                    fontSize: { xs: '16px', sm: '18px', md: '20px' },
                                                    transition: 'color 0.3s ease'
                                                }}
                                            >
                                                {role.title}
                                            </Typography>
                                        </Box>
                                    </ButtonBase>
                                ))}
                            </Box>
                        </Grid>

                        {/* Role Content Preview */}
                        <Grid size={{ xs: 12, md: 8 }}>
                            <AnimatePresence mode="wait">
                                <MotionBox
                                    key={activeRole}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ duration: 0.3, ease: "easeOut" }}
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
                                        borderColor: `${roles[activeRole].color}60`,
                                        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
                                    }}
                                >
                                    <Grid container spacing={4} alignItems="center" sx={{ height: '100%' }}>
                                        <Grid size={{ xs: 12, lg: 6 }}>
                                            <Box sx={{ mb: 4 }}>
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
                                                        fontWeight: 700,
                                                        color: '#333337',
                                                        fontSize: { xs: '24px', md: '32px' }
                                                    }}
                                                >
                                                    {roles[activeRole].description}
                                                </Typography>
                                            </Box>

                                            <List sx={{ mb: 4 }}>
                                                {roles[activeRole].items.map((item, i) => (
                                                    <ListItem key={i} sx={{ px: 0, py: 1 }}>
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
                                                                    fontFamily: '"Hind Siliguri", sans-serif'
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
                                        </Grid>
                                        <Grid size={{ xs: 12, lg: 6 }}>
                                            <Box
                                                component="img"
                                                src={roles[activeRole].image}
                                                alt={roles[activeRole].title}
                                                sx={{
                                                    width: '100%',
                                                    height: 'auto',
                                                    maxWidth: '400px',
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

            {/* 6. What is MAMBA? Section */}
            <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: '#F8F9FA' }}>
                <Container maxWidth="lg">
                    <Grid container spacing={6} alignItems="center">
                        <Grid size={{ xs: 12, md: 6 }}>
                            <Typography variant="h2" sx={{ mb: 3, color: '#333337' }}>
                                What is <Box component="span" sx={{ color: theme.palette.web.action.primary }}>MAMBA</Box>?
                            </Typography>
                            <Typography variant="body1" sx={{ color: 'text.secondary', mb: 4 }}>
                                MAMBA is a cloud-based measurement and cost estimation software designed
                                specifically for the AECO industry. It connects your BIM models to your
                                budgets in real-time.
                            </Typography>
                            {[
                                "Conecta mediciones con presupuestos en la nube",
                                "Actualizaciones automáticas ante cambios de diseño",
                                "Colaboración en tiempo real para todo el equipo"
                            ].map((text, i) => (
                                <Box key={i} sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                                    <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: theme.palette.web.action.primary, mr: 2 }} />
                                    <Typography sx={{ color: '#333337', fontWeight: 500 }}>{text}</Typography>
                                </Box>
                            ))}
                            <WebButton variant="contained" sx={{ mt: 4, px: 6 }}>
                                Saber más
                            </WebButton>
                        </Grid>
                        <Grid size={{ xs: 12, md: 6 }}>
                            <Box sx={{
                                position: 'relative',
                                pt: '56.25%',
                                borderRadius: '24px',
                                overflow: 'hidden',
                                boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                                bgcolor: '#000000'
                            }}>
                                <Box
                                    component="img"
                                    src="https://via.placeholder.com/800x450?text=Software+Demo+Video"
                                    sx={{
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover'
                                    }}
                                />
                                <Box sx={{
                                    position: 'absolute',
                                    top: '50%',
                                    left: '50%',
                                    transform: 'translate(-50%, -50%)',
                                    width: 64,
                                    height: 64,
                                    bgcolor: 'rgba(255,255,255,0.9)',
                                    borderRadius: '50%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    cursor: 'pointer',
                                    '&:hover': { bgcolor: '#FFFFFF', scale: 1.1 },
                                    transition: 'all 0.2s'
                                }}>
                                    <Box sx={{
                                        width: 0,
                                        height: 0,
                                        borderTop: '10px solid transparent',
                                        borderBottom: '10px solid transparent',
                                        borderLeft: `16px solid ${theme.palette.web.action.primary}`,
                                        ml: 0.5
                                    }} />
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            {/* 7. How we deliver value? */}
            <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: '#FFFFFF' }}>
                <Container maxWidth="lg">
                    <Box sx={{ textAlign: 'center', mb: 8 }}>
                        <Typography variant="h2" sx={{ mb: 2, color: '#333337' }}>
                            How we deliver <Box component="span" sx={{ color: theme.palette.web.action.primary }}>value</Box>?
                        </Typography>
                        <Typography variant="body1" sx={{ color: 'text.secondary', maxWidth: '600px', mx: 'auto' }}>
                            A cost-effective cloud solution for the AECO workflow, ensuring precision and reducing risk.
                        </Typography>
                    </Box>

                    <Grid container spacing={4}>
                        {[
                            { title: 'Software', items: ['Mediciones Automáticas', 'Estimación de Costes', 'Auditoría del Modelo'] },
                            { title: 'Cloud Services', items: ['Gestión de Licencias', 'Colaboración en Nube', 'Repositorio Proyectos'] },
                            { title: 'Support', items: ['Formación Personalizada', 'Soporte Técnico', 'Consultoría BIM'] }
                        ].map((card, index) => (
                            <Grid key={index} size={{ xs: 12, md: 4 }}>
                                <Box sx={{
                                    p: 4,
                                    borderRadius: '24px',
                                    bgcolor: '#FFFFFF',
                                    boxShadow: '0 8px 30px rgba(0,0,0,0.05)',
                                    height: '100%',
                                    display: 'flex',
                                    flexDirection: 'column'
                                }}>
                                    <Box component="img" src="https://via.placeholder.com/300x200" sx={{ width: '100%', borderRadius: '12px', mb: 3 }} />
                                    <Typography variant="h5" sx={{ mb: 2, fontWeight: 700 }}>{card.title}</Typography>
                                    <Box sx={{ flexGrow: 1 }}>
                                        {card.items.map((item, i) => (
                                            <Typography key={i} variant="body2" sx={{ color: 'text.secondary', mb: 1 }}>• {item}</Typography>
                                        ))}
                                    </Box>
                                    <WebButton variant="outlined" sx={{ mt: 3 }}>Explore {card.title}</WebButton>
                                </Box>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Box>

            {/* 8. Final CTA Banner */}
            <Box sx={{ pb: 8 }}>
                <Container maxWidth="lg">
                    <Box sx={{
                        bgcolor: theme.palette.web.action.primary,
                        borderRadius: '24px',
                        p: { xs: 4, md: 8 },
                        textAlign: 'center',
                        color: '#FFFFFF'
                    }}>
                        <Typography variant="h3" sx={{ mb: 3, fontWeight: 700 }}>
                            Discover how MAMBA optimizes rules, quantities, and sustainability
                        </Typography>
                        <WebButton variant="contained" sx={{ bgcolor: '#FDB022', color: '#000000', '&:hover': { bgcolor: '#F9A01B' }, px: 6, py: 1.5, borderRadius: '8px' }}>
                            Solicite su demo
                        </WebButton>
                    </Box>
                </Container>
            </Box>
        </MainLayout>
    );
};
