import React, { useRef } from 'react';
import { Box, Typography, Container, Grid, useTheme } from '@mui/material';
import { motion, useScroll, useTransform } from 'framer-motion';

// Placeholder or real images import if accessible. 
// Assuming assets exist based on previous LandingPage context.
// If I can't import them directly relative to this file easily without knowing structure, 
// I will accept props or use colored placeholders for validation.
// Better approach: Use local placeholders for structure validation as requested ("te lo puede inventar").

const MotionBox = motion(Box);

export const WebPillarsSection = () => {
    const theme = useTheme();
    const containerRef = useRef<HTMLDivElement>(null);

    // Track scroll progress within this specific section
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const pillars = [
        {
            title: 'Software',
            description: 'Potente modelado y gestión de datos BIM para una precisión inigualable. Automatiza mediciones y mantén el control total de tus costes desde el diseño.',
            color: '#6E659F'
        },
        {
            title: 'Cloud Services',
            description: 'Colaboración en tiempo real y acceso centralizado desde cualquier lugar. Conecta a tus equipos de obra y oficina en un entorno de datos común seguro.',
            color: '#9989EC'
        },
        {
            title: 'Support',
            description: 'Asistencia técnica experta y formación continua para tu equipo. Resolvemos tus dudas al instante para que tu proyecto nunca se detenga.',
            color: '#333337'
        }
    ];

    return (
        <Box
            ref={containerRef}
            sx={{
                height: '300vh', // Tall container to enable scrolling
                position: 'relative',
                bgcolor: '#FFFFFF'
            }}
        >
            <Box
                sx={{
                    position: 'sticky',
                    top: 0,
                    height: '100vh',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    overflow: 'hidden'
                }}
            >
                <Container maxWidth="lg" sx={{ px: { xs: 4, sm: 8, md: 10, lg: 8 } }}>
                    <Grid container spacing={8} alignItems="center">

                        {/* Left Column: Title (Fixed) + Description (Dynamic) */}
                        <Grid size={{ xs: 12, md: 6 }}>
                            {/* STATIC TITLE SECTION */}
                            <Box sx={{ mb: 6 }}>
                                <Typography
                                    variant="overline"
                                    sx={{
                                        fontWeight: 700,
                                        letterSpacing: '1px',
                                        color: theme.palette.primary.main,
                                        mb: 2,
                                        display: 'block'
                                    }}
                                >
                                    NUESTRA SOLUCIÓN
                                </Typography>
                                <Typography
                                    variant="h2"
                                    sx={{
                                        fontSize: { xs: '32px', md: '42px' },
                                        fontWeight: 600,
                                        lineHeight: 1.2,
                                        color: '#1A1A1A'
                                    }}
                                >
                                    Tres pilares fundamentales <br />
                                    <Box component="span" sx={{ color: theme.palette.primary.main }}>para el éxito integral.</Box>
                                </Typography>
                            </Box>

                            {/* DYNAMIC CONTENT SECTION */}
                            <Box sx={{ position: 'relative', height: '180px' }}>
                                {pillars.map((pillar, index) => {
                                    // Calculate range for this pillar
                                    const start = index * 0.33;
                                    const end = start + 0.33;

                                    // Smooth fade in/out based on scroll position
                                    const opacity = useTransform(
                                        scrollYProgress,
                                        [start, start + 0.05, end - 0.05, end],
                                        [0, 1, 1, 0]
                                    );

                                    const y = useTransform(
                                        scrollYProgress,
                                        [start, start + 0.1, end],
                                        [20, 0, -20]
                                    );

                                    // Ensure proper visibility management (avoid overlapping interactions if interactive)
                                    // For simple text, opacity is enough visually.

                                    return (
                                        <MotionBox
                                            key={index}
                                            style={{ opacity, y, position: 'absolute', top: 0, left: 0, width: '100%' }}
                                        >
                                            <Typography variant="h4" sx={{ fontWeight: 600, mb: 2, color: pillar.color }}>
                                                {pillar.title}
                                            </Typography>
                                            <Typography variant="body1" sx={{ fontSize: '18px', color: 'text.secondary', lineHeight: 1.6 }}>
                                                {pillar.description}
                                            </Typography>
                                        </MotionBox>
                                    );
                                })}
                            </Box>
                        </Grid>

                        {/* Right Column: Visual Representation (Dynamic) */}
                        <Grid size={{ xs: 12, md: 6 }}>
                            <Box sx={{ position: 'relative', height: '400px', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                {pillars.map((pillar, index) => {
                                    const start = index * 0.33;
                                    const end = start + 0.33;

                                    const opacity = useTransform(
                                        scrollYProgress,
                                        [start, start + 0.05, end - 0.05, end],
                                        [0, 1, 1, 0]
                                    );

                                    const scale = useTransform(
                                        scrollYProgress,
                                        [start, start + 0.15, end],
                                        [0.9, 1, 0.9]
                                    );

                                    return (
                                        <MotionBox
                                            key={index}
                                            style={{ opacity, scale, position: 'absolute', zIndex: index }}
                                            sx={{
                                                width: '100%',
                                                height: '100%',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center'
                                            }}
                                        >
                                            <Box sx={{
                                                width: '100%',
                                                height: '320px',
                                                bgcolor: '#FAFAFA',
                                                borderRadius: '24px',
                                                boxShadow: '0 24px 48px rgba(0,0,0,0.08)',
                                                border: `1px solid ${pillar.color}30`,
                                                display: 'flex',
                                                flexDirection: 'column',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                position: 'relative',
                                                overflow: 'hidden'
                                            }}>
                                                {/* Decorative background circle */}
                                                <Box sx={{
                                                    position: 'absolute',
                                                    top: '-20%',
                                                    right: '-20%',
                                                    width: '300px',
                                                    height: '300px',
                                                    borderRadius: '50%',
                                                    bgcolor: pillar.color,
                                                    opacity: 0.05
                                                }} />

                                                <Box sx={{
                                                    width: 80,
                                                    height: 80,
                                                    borderRadius: '50%',
                                                    bgcolor: pillar.color,
                                                    opacity: 0.15,
                                                    mb: 3,
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center'
                                                }}>
                                                    {/* Ideally Icon here */}
                                                </Box>
                                                <Typography variant="h5" sx={{ fontWeight: 600, color: pillar.color, mb: 1 }}>
                                                    {pillar.title} Visual
                                                </Typography>
                                                <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                                                    (Imagen Placeholder)
                                                </Typography>
                                            </Box>
                                        </MotionBox>
                                    );
                                })}
                            </Box>
                        </Grid>

                    </Grid>
                </Container>
            </Box>
        </Box>
    );
};
