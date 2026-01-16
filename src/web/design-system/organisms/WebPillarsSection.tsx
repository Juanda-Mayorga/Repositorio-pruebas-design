import { useRef } from 'react';
import { Box, Typography, Container, Grid, useTheme } from '@mui/material';
import { motion, useScroll, useTransform } from 'framer-motion';
import { WebButton } from '../atoms/WebButton';

// Import Real Images
import deliverySoftware from '../../../assets/BMM_MMI_Software.svg';
import deliveryCloud from '../../../assets/BMM_MMI_CloudServices.svg';
import deliverySupport from '../../../assets/BMM_MMI_Support.svg';

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
            description: 'MAMBA software turns BIM models into actionable results',
            items: ['Eliminate errors', 'Make smarter decisions', 'Keep projects on time and on budget'],
            cta: 'Explore all software features',
            color: '#6E659F',
            image: deliverySoftware
        },
        {
            title: 'Cloud Services',
            description: "MAMBA's cloud platform centralizes licenses, training, and support",
            items: ['Everything in one place', 'Training built into the platform', 'Grow and align your team'],
            cta: 'Discover cloud features',
            color: '#9989EC',
            image: deliveryCloud
        },
        {
            title: 'Support',
            description: 'Get fast, reliable support directly in MAMBA, available on both the software and cloud',
            items: ['Support integrated across tools', 'Solve problem faster', 'Support where you work'],
            cta: 'See how our support works',
            color: '#333337',
            image: deliverySupport
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
                                    3 pilares que definen <br />
                                    <Box component="span" sx={{ color: theme.palette.primary.main }}>la solución de MAMBA</Box>
                                </Typography>
                            </Box>

                            {/* DYNAMIC CONTENT SECTION */}
                            <Box sx={{ position: 'relative', height: 'auto', minHeight: '320px' }}>
                                {pillars.map((pillar, index) => {
                                    // Custom Scroll Logic for "Always Visible at Start/End"
                                    const totalPillars = pillars.length;
                                    const sectionSize = 1 / totalPillars; // 0.33 each

                                    // Calculate precise fade-in/out points
                                    const fadeStart = index * sectionSize;
                                    const fadeInEnd = fadeStart + (sectionSize * 0.2); // Quick fade in
                                    const fadeOutStart = (index + 1) * sectionSize - (sectionSize * 0.2); // Start fading out before next
                                    const fadeEnd = (index + 1) * sectionSize;

                                    let opacityInputRange = [fadeStart, fadeInEnd, fadeOutStart, fadeEnd];
                                    let opacityOutputRange = [0, 1, 1, 0];

                                    // Special Case: First Item (Start Visible)
                                    if (index === 0) {
                                        opacityInputRange = [0, 0.1, fadeOutStart, fadeEnd]; // Visible from 0 to fadeOut
                                        opacityOutputRange = [1, 1, 1, 0];
                                    }

                                    // Special Case: Last Item (Stay Visible till End)
                                    if (index === totalPillars - 1) {
                                        opacityInputRange = [fadeStart, fadeInEnd, 1, 1]; // Fade in, then stay
                                        opacityOutputRange = [0, 1, 1, 1];
                                    }

                                    const opacity = useTransform(scrollYProgress, opacityInputRange, opacityOutputRange);

                                    // Subtle Y Movement
                                    const y = useTransform(
                                        scrollYProgress,
                                        [index * sectionSize, (index + 1) * sectionSize],
                                        [20, -20]
                                    );

                                    return (
                                        <MotionBox
                                            key={index}
                                            style={{ opacity, y, position: 'absolute', top: 0, left: 0, width: '100%', pointerEvents: 'none' }} // Added pointerEvents none to prevent overlapping click issues
                                        >
                                            <Typography variant="h4" sx={{ fontWeight: 600, mb: 2, color: pillar.color }}>
                                                {pillar.title}
                                            </Typography>
                                            <Typography variant="body1" sx={{ fontSize: '18px', color: 'text.secondary', lineHeight: 1.6, mb: 3 }}>
                                                {pillar.description}
                                            </Typography>

                                            {/* Items List with Design from Card */}
                                            <Box sx={{
                                                borderLeft: '3px solid #E0E0E0',
                                                pl: 2,
                                                ml: 0.5,
                                                display: 'flex',
                                                flexDirection: 'column',
                                                gap: 1.5,
                                                mb: 4
                                            }}>
                                                {pillar.items.map((item, i) => (
                                                    <Typography
                                                        key={i}
                                                        variant="body2"
                                                        sx={{
                                                            color: 'text.secondary',
                                                            fontWeight: 400,
                                                            fontSize: { xs: '16px', lg: '18px' },
                                                            lineHeight: 1.2
                                                        }}
                                                    >
                                                        {item}
                                                    </Typography>
                                                ))}
                                            </Box>

                                            <Box sx={{ pointerEvents: 'auto' }}> {/* Re-enable interactions for button */}
                                                <WebButton
                                                    variant="contained"
                                                    sx={{
                                                        py: 1.5,
                                                        px: 3,
                                                        fontSize: '16px',
                                                        textTransform: 'none',
                                                        bgcolor: pillar.color, // Match pillar color usually, or primary
                                                        '&:hover': {
                                                            bgcolor: pillar.color,
                                                            filter: 'brightness(0.9)'
                                                        }
                                                    }}
                                                >
                                                    {pillar.cta}
                                                </WebButton>
                                            </Box>
                                        </MotionBox>
                                    );
                                })}
                            </Box>
                        </Grid>

                        {/* Right Column: Visual Representation (Dynamic) */}
                        <Grid size={{ xs: 12, md: 6 }}>
                            <Box sx={{ position: 'relative', height: '400px', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                {pillars.map((pillar, index) => {

                                    // Sync Visual Animation exactly with Text
                                    const totalPillars = pillars.length;
                                    const sectionSize = 1 / totalPillars;

                                    const fadeStart = index * sectionSize;
                                    const fadeInEnd = fadeStart + (sectionSize * 0.2);
                                    const fadeOutStart = (index + 1) * sectionSize - (sectionSize * 0.2);
                                    const fadeEnd = (index + 1) * sectionSize;

                                    let opacityInputRange = [fadeStart, fadeInEnd, fadeOutStart, fadeEnd];
                                    let opacityOutputRange = [0, 1, 1, 0];

                                    if (index === 0) {
                                        opacityInputRange = [0, 0.1, fadeOutStart, fadeEnd];
                                        opacityOutputRange = [1, 1, 1, 0];
                                    }
                                    if (index === totalPillars - 1) {
                                        opacityInputRange = [fadeStart, fadeInEnd, 1, 1];
                                        opacityOutputRange = [0, 1, 1, 1];
                                    }

                                    const opacity = useTransform(scrollYProgress, opacityInputRange, opacityOutputRange);

                                    const scale = useTransform(
                                        scrollYProgress,
                                        [fadeStart, fadeEnd],
                                        [0.95, 1.05]
                                    );

                                    return (
                                        <MotionBox
                                            key={index}
                                            style={{ opacity, scale, position: 'absolute', zIndex: index, width: '100%', height: '100%' }}
                                            sx={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center'
                                            }}
                                        >
                                            <Box sx={{
                                                width: '100%',
                                                height: '100%', // Full height to fit image
                                                bgcolor: 'transparent',
                                                borderRadius: '24px', // Rounded corners on container
                                                overflow: 'hidden', // Clip image to corners
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                position: 'relative',
                                                // Optional: Add a subtle border or shadow to emphasize the card shape if image is full bleed
                                                // border: '1px solid rgba(0,0,0,0.05)',
                                            }}>
                                                <Box
                                                    component="img"
                                                    src={pillar.image}
                                                    alt={pillar.title}
                                                    sx={{
                                                        width: '100%',
                                                        height: '100%',
                                                        objectFit: 'cover', // FILLS the container, maintained aspect ratio
                                                        // filter: 'drop-shadow(0px 20px 40px rgba(0,0,0,0.1))' // Shadow might look weird if clipped, better on container if needed
                                                    }}
                                                />
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
