
import { useState, useEffect } from 'react';
import { Box, Typography, Container, useTheme, Grid } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { MainLayout } from '../design-system/templates/MainLayout';
import { WebButton } from '../design-system/atoms/WebButton';
import { WebRolesSection } from '../design-system/organisms/WebRolesSection';
import { WebEcosystemSection } from '../design-system/organisms/WebEcosystemSection';
import { WebPillarsSection } from '../design-system/organisms/WebPillarsSection';
import { WebValueSection } from '../design-system/organisms/WebValueSection';
import { WebWhatIsMambaSection } from '../design-system/organisms/WebWhatIsMambaSection';
import { WebDemoBanner } from '../design-system/organisms/WebDemoBanner';
import { motion, AnimatePresence } from 'framer-motion';

// Import images
import measurementHero from '../../assets/Measurement.svg';
import sustainabilityHero from '../../assets/Sustainability.svg';
import managementHero from '../../assets/Management.svg';
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
            keyword: 'measurement',
            image: measurementHero
        },
        {
            keyword: 'sustainability',
            image: sustainabilityHero
        },
        {
            keyword: 'management',
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



    return (
        <MainLayout sx={{ bgcolor: '#FCFCFC' }} mainSx={{ mt: 0 }}>
            {/* 1. Hero Section */}
            <Box sx={{
                pt: { xs: 12, md: 16 },
                pb: { xs: 8, md: 12 },
                background: 'linear-gradient(180deg, #FFFFFF 0%, #F8F9FA 100%)'
            }}>
                <Container maxWidth="lg" sx={{ px: { xs: 4, sm: 8, md: 10, lg: 8 } }}>
                    <Grid container spacing={4} alignItems="center">
                        <Grid size={{ xs: 12, md: 6 }}>
                            <MotionBox
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: { xs: 'center', md: 'flex-start' }
                                }}
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
                                        textAlign: { xs: 'center', md: 'left' }
                                    }}
                                >
                                    {t('landingPage.hero.title')} <Box component="span" sx={{ display: 'inline-block', minWidth: { md: '300px' } }}>
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
                                                {t(`landingPage.hero.keywords.${heroSlides[activeHeroIndex].keyword}`)}
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
                                        fontFamily: '"Hind Siliguri", sans-serif',
                                        textAlign: { xs: 'center', md: 'left' }
                                    }}
                                >
                                    {t('landingPage.hero.description')}
                                </Typography>
                                <WebButton
                                    variant="contained"
                                    sx={{
                                        py: 2,
                                        px: 6,
                                        fontSize: '16px',
                                        fontWeight: 600,
                                        textTransform: 'none',
                                        boxShadow: '0 4px 14px 0 rgba(122, 110, 189, 0.39)'
                                    }}
                                >
                                    {t('landingPage.hero.cta')}
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
                                            alt={`MAMBA BIM ${heroSlides[activeHeroIndex].keyword} `}
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
                <Container maxWidth="lg" sx={{ px: { xs: 4, sm: 8, md: 10, lg: 8 } }}>
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
                <Container maxWidth="lg" sx={{ px: { xs: 4, sm: 8, md: 10, lg: 8 } }}>
                    <Box sx={{ textAlign: 'center', mb: 8 }}>
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



            {/* 5. Designed to fit every role */}
            <WebRolesSection />

            {/* 6. What is MAMBA? Section */}
            {/* 6. What is MAMBA? Section (Organism Created but Hidden) */}
            {/* <WebWhatIsMambaSection /> */}

            {/* 7. How we deliver value? (Organism Created but Hidden) */}
            {/* <WebValueSection /> */}

            {/* 8. Final CTA Banner (Moved to End) */}

            {/* 9. Ecosystem Section (Static) */}
            <WebEcosystemSection />

            {/* 10. Pillars Details Section */}
            <WebPillarsSection />

            {/* 11. Final CTA Banner */}
            <WebDemoBanner />

        </MainLayout >
    );
};
