import React from 'react';
import { Box, Typography, } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { WebButton } from '../../atoms/WebButton';
import type { PricingPlan } from '../../../data/pricing/types';

// Importing icons
import userIcon from '../../../assets/pricing/icons/user.svg';
import usersIcon from '../../../assets/pricing/icons/users.svg';
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
            p: 3, // 24px
            display: 'flex',
            flexDirection: 'column'
        }}>
            {/* Title */}
            <Typography variant="h3" sx={{
                fontFamily: 'Inter, sans-serif',
                fontWeight: 500,
                fontSize: '36px',
                lineHeight: '20px',
                color: 'black',
                mb: 1.5
            }}>
                {t(plan.name)}
            </Typography>

            {/* Description */}
            <Typography sx={{
                fontFamily: 'Inter, sans-serif',
                fontWeight: 400,
                fontSize: '18px',
                lineHeight: '24px',
                color: '#49454F', // text-card-description-gray (approx)
                mb: 0
            }}>
                {t(plan.description)}
            </Typography>

            {/* Price */}
            <Box sx={{ display: 'flex', alignItems: 'baseline', mt: 2, mb: 1.5 }}>
                <Typography sx={{
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 500,
                    fontSize: '48px',
                    lineHeight: '24px',
                    color: '#49454F' // text-card-price-gray
                }}>
                    {plan.price.yearly === 0 ? '0€' : `${plan.price.yearly}€`}
                </Typography>
                <Typography sx={{
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 400,
                    fontSize: '24px',
                    lineHeight: '37px',
                    color: '#49454F',
                    ml: 1
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
                    width: '272px',
                    height: '40px',
                    mb: 2,
                    fontSize: '14px',
                    ...buttonSx
                }}
            >
                {t(plan.buttonText)}
            </WebButton>

            {/* License Type Section */}
            <Box sx={{ mb: 2 }}>
                <Typography sx={{
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 500,
                    fontSize: '20px',
                    lineHeight: '24px',
                    color: '#49454F', // text-card-title-gray
                    mb: 1.5
                }}>
                    {t('pricing.carousel.licenseType')}
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Box component="img" src={plan.licenseType?.includes('Multi-seat') ? usersIcon : userIcon} sx={{ width: 24, height: 24, mr: 1.5 }} />
                    <Typography sx={{
                        fontFamily: 'Inter, sans-serif',
                        fontWeight: 400,
                        fontSize: '20px',
                        lineHeight: '24px',
                        color: '#49454F',
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis'
                    }}>
                        {plan.licenseType ? t(plan.licenseType) : (plan.maxLicenses ? t('pricing.carousel.upToLicenses', { count: plan.maxLicenses }) : t('pricing.carousel.unlimitedLicenses'))}
                    </Typography>
                </Box>
            </Box>

            {/* Features Section */}
            <Box sx={{ flex: 1 }}>
                <Typography sx={{
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 500,
                    fontSize: '20px',
                    lineHeight: '24px',
                    color: '#49454F',
                    mb: 1.5
                }}>
                    {t('pricing.carousel.features')}
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                    {plan.features.slice(0, 4).map((feature, index) => (
                        <Box key={index} sx={{ display: 'flex', alignItems: 'center' }}>
                            <Box component="img" src={feature.included ? checkIcon : crossIcon} sx={{ width: 24, height: 24, mr: 1.5 }} />
                            <Typography sx={{
                                fontFamily: 'Inter, sans-serif',
                                fontWeight: 400,
                                fontSize: '20px',
                                lineHeight: '24px',
                                color: '#49454F',
                                whiteSpace: 'nowrap',
                                overflow: 'hidden',
                                textOverflow: 'ellipsis'
                            }}>
                                {t(feature.text || feature.name || '')}
                            </Typography>
                        </Box>
                    ))}
                </Box>
            </Box>

            {/* See all features link */}
            <Box sx={{ mt: 'auto' }}>
                <Typography
                    component="a"
                    href="#feature-comparison"
                    onClick={handleScrollToFeatures}
                    sx={{
                        fontFamily: 'Inter, sans-serif',
                        fontWeight: 400,
                        fontSize: '18px',
                        lineHeight: '24px',
                        color: '#7A6EBD', // text-card-link-purple
                        textDecoration: 'underline',
                        cursor: 'pointer'
                    }}
                >
                    {t('pricing.carousel.seeAllFeatures')}
                </Typography>
            </Box>
        </Box>
    );
};
