import React from 'react';
import { Box, Typography, } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { WebButton } from '../../atoms/WebButton';
import type { PricingPlan } from '../../../data/pricing/types';

// Importing icons
import userIcon from '../../../assets/pricing/icons/user.svg';
import checkIcon from '../../../assets/pricing/icons/check.svg';
import crossIcon from '../../../assets/pricing/icons/cross.svg';

interface PricingCarouselCardProps {
    plan: PricingPlan;
    onSelectPlan: (planId: string) => void;
}

export const PricingCarouselCard: React.FC<PricingCarouselCardProps> = ({
    plan,
    onSelectPlan
}) => {
    const { t } = useTranslation();

    const handleScrollToFeatures = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        const featureComparisonElement = document.getElementById('feature-comparison');
        if (featureComparisonElement) {
            featureComparisonElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    const getButtonVariant = (variant: string | undefined): 'contained' | 'outlined' | 'soft' => {
        switch (variant) {
            case 'primary': return 'contained';
            case 'secondary': return 'contained'; // Mapping to contained but will override style
            case 'outline': return 'outlined';
            default: return 'contained';
        }
    };

    const isSecondary = plan.buttonVariant === 'secondary';
    const isPrimary = plan.buttonVariant === 'primary';

    // Custom styles to match original design exactly
    const buttonSx = isSecondary ? {
        bgcolor: '#7367B1',
        color: '#F5F3FD',
        '&:hover': {
            bgcolor: '#5C528E'
        }
    } : isPrimary ? {
        bgcolor: '#DFDAF9',
        color: '#2F2F32', // text-card-button-text
        '&:hover': {
            bgcolor: '#CFC9F2'
        }
    } : {};

    return (
        <Box sx={{
            width: '320px',
            height: '532px',
            border: '1px solid',
            borderColor: 'grey.300',
            borderRadius: '4px',
            bgcolor: 'white',
            p: 3, // 24px margin/padding
            display: 'flex',
            flexDirection: 'column',
            boxShadow: '0px 4px 6px -2px rgba(16, 24, 40, 0.03), 0px 12px 16px -4px rgba(16, 24, 40, 0.08)'
        }}>
            {/* Title */}
            <Typography variant="h3" sx={{
                fontFamily: 'Inter, sans-serif',
                fontWeight: 500, // Medium
                fontSize: { xs: '24px', md: '36px' }, // 24px on mobile
                lineHeight: { xs: '32px', md: '44px' },
                color: '#4C4C4C', // Customized color
                mb: 1
            }}>
                {t(plan.name)}
            </Typography>

            {/* Description */}
            <Typography sx={{
                fontFamily: 'Inter, sans-serif',
                fontWeight: 400, // Regular
                fontSize: '16px', // Size 16
                lineHeight: '24px',
                color: '#8A8A8A', // Color 8A8A8A
                mb: 2,
                whiteSpace: 'pre-line' // Allow newlines in description
            }}>
                {t(plan.description)}
            </Typography>

            {/* Price */}
            <Box sx={{ display: 'flex', alignItems: 'baseline', mb: 3 }}>
                <Typography sx={{
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 600,
                    fontSize: '48px',
                    lineHeight: '60px',
                    color: '#101828',
                    letterSpacing: '-0.02em'
                }}>
                    {plan.price.yearly === 0 ? '0€' : `${plan.price.yearly}€`}
                </Typography>
                <Typography sx={{
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 500,
                    fontSize: '16px',
                    lineHeight: '24px',
                    color: '#475467',
                    ml: 0.5
                }}>
                    {plan.priceNote ? t(plan.priceNote) : ''}
                </Typography>
            </Box>

            {/* CTA Button */}
            <WebButton
                onClick={() => !plan.buttonDisabled && onSelectPlan(plan.id)}
                variant={getButtonVariant(plan.buttonVariant)}
                disabled={plan.buttonDisabled}
                sx={{
                    width: '100%',
                    height: '44px',
                    mb: 3,
                    fontSize: '20px', // Size 20
                    fontWeight: 400, // Regular
                    textTransform: 'none',
                    borderRadius: '4px', // Radius 4px
                    borderColor: '#7A6EBD',
                    color: '#7367B1', // Color 7367B1
                    ...buttonSx // Override if needed, but the user asked for #7367B1 specifically. 
                    // Note: buttonSx logic might override color. Let's check logic.
                }}
            >
                {t(plan.buttonText)}
            </WebButton>

            {/* License Type Section */}
            <Box sx={{ mb: 2 }}>
                <Typography sx={{
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 600,
                    fontSize: '14px',
                    lineHeight: '20px',
                    color: '#101828',
                    mb: 1
                }}>
                    {t('pricing.carousel.licenseType')}
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Box component="img" src={userIcon} sx={{ width: 20, height: 20, mr: 1, opacity: 0.5 }} />
                    <Typography sx={{
                        fontFamily: 'Inter, sans-serif',
                        fontWeight: 400,
                        fontSize: '16px',
                        lineHeight: '24px',
                        color: '#475467'
                    }}>
                        {plan.licenseType ? t(plan.licenseType) : (plan.maxLicenses ? t('pricing.carousel.upToLicenses', { count: plan.maxLicenses }) : t('pricing.carousel.unlimitedLicenses'))}
                    </Typography>
                </Box>
            </Box>

            {/* Features Section */}
            <Box sx={{ flex: 1 }}>
                <Typography sx={{
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 600,
                    fontSize: '14px',
                    lineHeight: '20px',
                    color: '#101828',
                    mb: 1.5
                }}>
                    {t('pricing.carousel.features')}
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                    {plan.features.slice(0, 6).map((feature, index) => (
                        <Box key={index} sx={{ display: 'flex', alignItems: 'flex-start' }}>
                            <Box sx={{
                                width: 20,
                                height: 20,
                                mr: 1.5,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                borderRadius: '50%',
                                bgcolor: feature.included ? '#F4EBFF' : '#F2F4F7'
                            }}>
                                <Box component="img" src={feature.included ? checkIcon : crossIcon} sx={{ width: 12, height: 12 }} />
                            </Box>
                            <Typography sx={{
                                fontFamily: 'Inter, sans-serif',
                                fontWeight: 400,
                                fontSize: '16px',
                                lineHeight: '24px',
                                color: feature.included ? '#475467' : '#98A2B3',
                                textDecoration: feature.included ? 'none' : 'line-through'
                            }}>
                                {t(feature.text || feature.name || '')}
                            </Typography>
                        </Box>
                    ))}
                </Box>
            </Box>

            {/* See all features link */}
            <Box sx={{ mt: 'auto', pt: 2 }}>
                <Typography
                    component="a"
                    href="#feature-comparison"
                    onClick={handleScrollToFeatures}
                    sx={{
                        fontFamily: 'Inter, sans-serif',
                        fontWeight: 600,
                        fontSize: '16px',
                        lineHeight: '24px',
                        color: '#7A6EBD',
                        textDecoration: 'none',
                        cursor: 'pointer',
                        '&:hover': {
                            textDecoration: 'underline'
                        }
                    }}
                >
                    {t('pricing.carousel.seeAllFeatures')}
                </Typography>
            </Box>
        </Box>
    );
};
