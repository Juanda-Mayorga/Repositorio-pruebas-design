import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Container, Typography, useMediaQuery } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { PricingCarouselCard } from '../design-system/organisms/pricing/PricingCarouselCard';
import { InfoCard } from '../design-system/organisms/pricing/InfoCard';
import { FeatureComparison } from '../design-system/organisms/pricing/FeatureComparison';
import { carouselPlans } from '../data/pricing/carouselPlans';
import { PublicHeader } from '../design-system/organisms/PublicHeader';
import { Footer } from '../design-system/organisms/Footer';

// Assets
import pricingBackground from '../assets/pricing/backgrounds/pricing-background.png';

export const PricingPage: React.FC = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();
    // Use custom query for 1000px breakpoint logic
    const isLargeScreen = useMediaQuery('(min-width:1000px)');

    const [currentCarouselIndex, setCurrentCarouselIndex] = useState(0);
    const carouselRef = useRef<HTMLDivElement>(null);
    const isScrollingRef = useRef(false);

    const handleSelectPlan = (planId: string) => {
        switch (planId) {
            case 'trial':
                navigate('/auth/select/trial');
                break;
            case 'professional':
                navigate('/auth/select/professional');
                break;
            case 'enterprise':
                navigate('/contact');
                break;
            default:
                console.log('Plan not recognized:', planId);
        }
    };

    const handleInfoCardCta = () => {
        navigate('/contact');
    };

    const handleCarouselNavigation = (index: number) => {
        setCurrentCarouselIndex(index);
        isScrollingRef.current = true;

        if (carouselRef.current) {
            const children = carouselRef.current.children;
            if (children[index]) {
                children[index].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
            }

            setTimeout(() => {
                isScrollingRef.current = false;
            }, 500);
        }
    };

    return (
        <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', bgcolor: '#F9FAFB' }}>
            <PublicHeader />

            <Box component="main" sx={{ flex: 1, pt: '64px' }}> {/* pt 64 for fixed header */}

                {/* Header Section */}
                <Container maxWidth={false} sx={{ maxWidth: '1440px', pt: 5, pb: 10, textAlign: 'center' }}>
                    <Typography variant="h1" component="h1">
                        {t('pricing.title')}
                    </Typography>
                </Container>

                <Box sx={{ mb: 10 }}>
                    {/* Mobile Carousel (< 1000px) */}
                    <Box sx={{ display: isLargeScreen ? 'none' : 'block' }}>
                        <Box sx={{
                            backgroundImage: `url(${pricingBackground})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat',
                            py: 4,
                            maxWidth: '1440px',
                            mx: 'auto'
                        }}>
                            <Box
                                ref={carouselRef}
                                sx={{
                                    display: 'flex',
                                    overflowX: 'auto',
                                    gap: 2, // 16px
                                    px: 3,
                                    py: 1,
                                    scrollSnapType: 'x mandatory',
                                    '::-webkit-scrollbar': { display: 'none' },
                                    scrollbarWidth: 'none'
                                }}
                            >
                                {carouselPlans.map((plan) => (
                                    <Box key={plan.id} sx={{ flexShrink: 0, scrollSnapAlign: 'center' }}>
                                        <PricingCarouselCard plan={plan} onSelectPlan={handleSelectPlan} />
                                    </Box>
                                ))}
                            </Box>

                            {/* Navigation Dots */}
                            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1, mt: 3 }}>
                                {carouselPlans.map((_, index) => (
                                    <Box
                                        key={index}
                                        onClick={() => handleCarouselNavigation(index)}
                                        sx={{
                                            height: 4,
                                            borderRadius: 2,
                                            transition: 'all 0.3s ease-in-out',
                                            width: index === currentCarouselIndex ? 32 : 16, // w-16 vs w-8 (approx) in Tailwind (16=4rem=64px? No w-16 is 4rem=64px. w-8 is 2rem=32px. Let's adjust)
                                            // Original: w-16 (4rem -> 64px) and w-8 (2rem -> 32px).
                                            bgcolor: index === currentCarouselIndex ? 'grey.800' : 'grey.300',
                                            cursor: 'pointer',
                                            '&:hover': { bgcolor: 'grey.400' }
                                        }}
                                    />
                                ))}
                            </Box>
                        </Box>

                        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}>
                            <InfoCard title={t('pricing.education.title')} description={t('pricing.education.description')} ctaText={t('pricing.education.cta')} onCtaClick={handleInfoCardCta} />
                        </Box>
                    </Box>

                    {/* Desktop Grid (>= 1000px) */}
                    <Box sx={{ display: isLargeScreen ? 'block' : 'none' }}>
                        <Box sx={{
                            backgroundImage: `url(${pricingBackground})`,
                            backgroundSize: 'contain',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat',
                            py: 6,
                            maxWidth: '1440px',
                            mx: 'auto'
                        }}>
                            <Container maxWidth={false} sx={{ maxWidth: '1440px' }}>
                                <Box sx={{ display: 'flex', justifyContent: 'center', gap: { md: 3, lg: 4 } }}>
                                    {carouselPlans.map((plan) => (
                                        <PricingCarouselCard key={plan.id} plan={plan} onSelectPlan={handleSelectPlan} />
                                    ))}
                                </Box>
                            </Container>
                        </Box>

                        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 6 }}>
                            <InfoCard title={t('pricing.education.title')} description={t('pricing.education.description')} ctaText={t('pricing.education.cta')} onCtaClick={handleInfoCardCta} />
                        </Box>
                    </Box>
                </Box>

                {/* Feature Comparison */}
                <Box id="feature-comparison" sx={{
                    px: { xs: 2, sm: 3, lg: 4 },
                    mt: 4,
                    mb: { lg: 10 },
                    maxWidth: { lg: '876px' },
                    mx: 'auto'
                }}>
                    <FeatureComparison />
                </Box>

            </Box>
            <Footer />
        </Box>
    );
};
