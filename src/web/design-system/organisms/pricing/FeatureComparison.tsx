import React, { useState } from 'react';
import { Box, Typography, Grid, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useTranslation } from 'react-i18next';
import { featureComparisonData } from '../../../data/pricing/featureComparison';
import type { FeatureItem } from '../../../data/pricing/featureComparison';

// Icons
import checkIcon from '../../../assets/pricing/icons/check.svg';
import crossIcon from '../../../assets/pricing/icons/cross.svg';

interface FeatureComparisonProps {
    className?: string; // Kept for compatibility, though sx is preferred
}

const FeatureCell: React.FC<{ value: boolean | string | number }> = ({ value }) => {
    const { t } = useTranslation();

    if (typeof value === 'boolean') {
        return (
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <Box component="img" src={value ? checkIcon : crossIcon} alt={value ? 'Included' : 'Not included'} sx={{ width: 24, height: 24 }} />
            </Box>
        );
    }

    if (value === 'Coming soon') {
        return (
            <Typography component="span" sx={{
                fontFamily: 'Inter, sans-serif',
                fontWeight: 500,
                fontSize: '14px',
                lineHeight: '16px',
                textAlign: 'center',
                display: 'block',
                px: 1,
                py: 0.5,
                borderRadius: '4px',
                whiteSpace: 'nowrap',
                maxWidth: '110px',
                mx: 'auto',
                bgcolor: '#EAEAEA',
                color: '#919191'
            }}>
                {t('pricing.featureComparison.comingSoon')}
            </Typography>
        );
    }

    // Handle pattern with | separator
    if (typeof value === 'string' && value.includes(' | ')) {
        const parts = value.split(' | ');
        return (
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 0.5 }}>
                {parts.map((part, index) => (
                    <Box key={index} sx={{ display: 'flex', alignItems: 'center' }}>
                        {part.trim() === 'check' ? (
                            <Box component="img" src={checkIcon} alt="Included" sx={{ width: 24, height: 24 }} />
                        ) : part.trim() === 'cross' ? (
                            <Box component="img" src={crossIcon} alt="Not included" sx={{ width: 24, height: 24 }} />
                        ) : !isNaN(Number(part.trim())) && part.trim() !== '' ? (
                            <Box sx={{
                                width: 20,
                                height: 20,
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontFamily: 'Inter, sans-serif',
                                fontWeight: 500,
                                fontSize: '10px',
                                lineHeight: '12px',
                                color: '#B8B0E6',
                                bgcolor: '#F5F3FD'
                            }}>
                                {part.trim()}
                            </Box>
                        ) : (
                            <Typography sx={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, fontSize: '12px', color: '#374151' }}>
                                {part.trim()}
                            </Typography>
                        )}
                        {index < parts.length - 1 && (
                            <Typography sx={{ mx: 1, fontSize: '32px', fontWeight: 500, lineHeight: 1, color: '#DCDCDC', display: 'flex', alignItems: 'center' }}>|</Typography>
                        )}
                    </Box>
                ))}
            </Box>
        );
    }

    // Handle numbers
    if (typeof value === 'number' || (!isNaN(Number(value)) && value !== '')) {
        return (
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <Box sx={{
                    width: 24,
                    height: 24,
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 500,
                    fontSize: '12px',
                    lineHeight: '16px',
                    color: '#B8B0E6',
                    bgcolor: '#F5F3FD'
                }}>
                    {value}
                </Box>
            </Box>
        );
    }

    return <Typography sx={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, fontSize: '14px', lineHeight: '20px', color: '#374151', textAlign: 'center', display: 'block' }}>{value}</Typography>;
};

const MobileFeatureRow: React.FC<{ feature: FeatureItem }> = ({ feature }) => {
    const { t } = useTranslation();

    if (feature.isSubheader) {
        return (
            <Box>
                <Typography sx={{ fontFamily: 'Inter, sans-serif', fontWeight: 500, fontSize: '16px', lineHeight: 1, color: '#1F2937', textAlign: 'left', bgcolor: 'white' }}>
                    {t(feature.name)}
                </Typography>
                <Box sx={{ borderBottom: '1px solid #1F2937', mt: 0.5, mb: 1 }} />
            </Box>
        );
    }

    return (
        <Box sx={{ py: 1.5, borderBottom: '1px solid #F3F4F6', '&:last-child': { borderBottom: 0 } }}>
            <Grid container spacing={1} alignItems="center">
                <Grid size={{ xs: 4 }}>
                    <Typography sx={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, fontSize: '14px', lineHeight: '20px', color: 'black' }}>
                        {t(feature.name)}
                    </Typography>
                </Grid>
                <Grid size={{ xs: 4 }} sx={{ display: 'flex', justifyContent: 'center' }}>
                    <FeatureCell value={feature.trial} />
                </Grid>
                <Grid size={{ xs: 4 }} sx={{ display: 'flex', justifyContent: 'center' }}>
                    <FeatureCell value={feature.enterprise} />
                </Grid>
            </Grid>
        </Box>
    );
};

export const FeatureComparison: React.FC<FeatureComparisonProps> = () => {
    const { t } = useTranslation();
    const [expanded, setExpanded] = useState<string | false>('panel0'); // Default open first panel

    const handleChange = (panel: string) => (_event: React.SyntheticEvent, isExpanded: boolean) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <Box sx={{ width: '100%' }}>
            {/* Mobile Version - Visible only on mobile/tablet vertical */}
            <Box sx={{ display: { xs: 'block', md: 'none' } }}>
                <Box sx={{ mb: 3 }}>
                    <Typography variant="h2" sx={{ fontFamily: 'Inter, sans-serif', fontWeight: 500, fontSize: '24px', color: 'black', textAlign: 'start' }}>
                        {t('pricing.featureComparison.title')}
                    </Typography>
                    <Typography sx={{ color: '#BDBDBD' }}>
                        {t('pricing.featureComparison.subtitle')}
                    </Typography>
                </Box>

                <Box sx={{ border: '1px solid', borderColor: 'grey.200', borderRadius: '4px', bgcolor: 'white', overflow: 'hidden' }}>
                    <Grid container sx={{ bgcolor: 'white', p: 2, borderBottom: '1px solid', borderColor: 'grey.200', alignItems: 'end' }}>
                        <Grid size={{ xs: 4 }}>
                            <Typography sx={{ fontFamily: 'Inter, sans-serif', fontWeight: 500, fontSize: '20px', lineHeight: '24px', color: 'black', textAlign: 'left' }}>
                                {t('pricing.featureComparison.feature')}
                            </Typography>
                        </Grid>
                        <Grid size={{ xs: 4 }}>
                            <Typography sx={{ fontFamily: 'Inter, sans-serif', fontWeight: 500, fontSize: '20px', lineHeight: '24px', color: 'black', textAlign: 'left' }}>
                                {t('pricing.featureComparison.trialPro')}
                            </Typography>
                        </Grid>
                        <Grid size={{ xs: 4 }}>
                            <Typography sx={{ fontFamily: 'Inter, sans-serif', fontWeight: 500, fontSize: '20px', lineHeight: '24px', color: 'black', textAlign: 'left' }}>
                                {t('pricing.featureComparison.enterprise')}
                            </Typography>
                        </Grid>
                    </Grid>

                    <Box sx={{ p: 1 }}>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                            {featureComparisonData.map((section, index) => (
                                <Accordion
                                    key={section.title}
                                    expanded={expanded === `panel${index}`}
                                    onChange={handleChange(`panel${index}`)}
                                    disableGutters
                                    elevation={0}
                                    sx={{ '&:before': { display: 'none' }, border: '1px solid #E5E7EB', borderRadius: '4px' }}
                                >
                                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                        <Typography sx={{ fontWeight: 500 }}>{t(section.title)}</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails sx={{ p: 1, pt: 0 }}>
                                        {section.features.map((feature) => (
                                            <MobileFeatureRow key={feature.name} feature={feature} />
                                        ))}
                                    </AccordionDetails>
                                </Accordion>
                            ))}
                        </Box>
                    </Box>
                </Box>
            </Box>

            {/* Desktop Version */}
            <Box sx={{ display: { xs: 'none', md: 'block' } }}>
                <Box sx={{ mb: 3 }}>
                    <Typography variant="h2" sx={{ fontFamily: 'Inter, sans-serif', fontWeight: 500, fontSize: '24px', color: 'black', textAlign: 'start' }}>
                        {t('pricing.featureComparison.title')}
                    </Typography>
                    <Typography sx={{ color: '#BDBDBD' }}>
                        {t('pricing.featureComparison.subtitle')}
                    </Typography>
                </Box>

                <Box sx={{ bgcolor: 'white', border: '1px solid', borderColor: 'grey.200', borderRadius: '8px', overflow: 'hidden' }}>
                    {/* Table Header */}
                    <Grid container sx={{ bgcolor: '#F9FAFB', borderBottom: '1px solid', borderColor: 'grey.200', alignItems: 'end' }}>
                        <Grid size={{ xs: 4 }} sx={{ p: 3 }}>
                            <Typography sx={{ fontFamily: 'Inter, sans-serif', fontWeight: 500, fontSize: { md: '18px', lg: '32px' }, lineHeight: '24px', color: 'black', textAlign: 'left' }}>
                                {t('pricing.featureComparison.feature')}
                            </Typography>
                        </Grid>
                        <Grid size={{ xs: 4 }} sx={{ p: 3, borderLeft: '1px solid', borderColor: 'grey.200' }}>
                            <Typography sx={{ fontFamily: 'Inter, sans-serif', fontWeight: 500, fontSize: { md: '18px', lg: '32px' }, lineHeight: '24px', color: 'black', textAlign: 'left' }}>
                                {t('pricing.featureComparison.trialPro')}
                            </Typography>
                        </Grid>
                        <Grid size={{ xs: 4 }} sx={{ p: 3, borderLeft: '1px solid', borderColor: 'grey.200' }}>
                            <Typography sx={{ fontFamily: 'Inter, sans-serif', fontWeight: 500, fontSize: { md: '18px', lg: '32px' }, lineHeight: '24px', color: 'black', textAlign: 'left' }}>
                                {t('pricing.featureComparison.enterprise')}
                            </Typography>
                        </Grid>
                    </Grid>

                    {/* Table Sections */}
                    {featureComparisonData.map((section, sectionIndex) => (
                        <Box key={section.title}>
                            {/* Section Header */}
                            <Box sx={{ bgcolor: '#F3F4F6', borderBottom: '1px solid', borderColor: 'grey.200', p: 2 }}>
                                <Typography sx={{ fontFamily: 'Inter, sans-serif', fontWeight: 500, fontSize: { md: '16px', lg: '24px' }, lineHeight: '24px', color: '#1F2937' }}>
                                    {t(section.title)}
                                </Typography>
                            </Box>

                            {/* Section Features */}
                            {section.features.map((feature, featureIndex) => {
                                if (feature.isSubheader) {
                                    return (
                                        <Grid container key={feature.name} sx={{ bgcolor: 'white' }}>
                                            <Grid size={{ xs: 12 }} sx={{ p: 2 }}>
                                                <Typography sx={{ fontFamily: 'Inter, sans-serif', fontWeight: 500, fontSize: '14px', lineHeight: 1, color: '#1F2937', textAlign: 'left' }}>
                                                    {t(feature.name)}
                                                </Typography>
                                                <Box sx={{ borderBottom: '1px solid #1F2937', mt: 0.5, mb: 1 }} />
                                            </Grid>
                                        </Grid>
                                    );
                                }

                                const isLast = sectionIndex === featureComparisonData.length - 1 && featureIndex === section.features.length - 1;

                                return (
                                    <Grid container key={feature.name} sx={{
                                        borderBottom: isLast ? 0 : '1px solid',
                                        borderColor: 'grey.100',
                                        transition: 'background-color 0.2s',
                                        '&:hover': { bgcolor: '#F9FAFB' }
                                    }}>
                                        <Grid size={{ xs: 4 }} sx={{ p: 2 }}>
                                            <Typography sx={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, fontSize: '16px', lineHeight: '24px', color: 'black' }}>
                                                {t(feature.name)}
                                            </Typography>
                                        </Grid>
                                        <Grid size={{ xs: 4 }} sx={{ p: 2, borderLeft: '1px solid', borderColor: 'grey.200' }}>
                                            <FeatureCell value={feature.trial} />
                                        </Grid>
                                        <Grid size={{ xs: 4 }} sx={{ p: 2, borderLeft: '1px solid', borderColor: 'grey.200' }}>
                                            <FeatureCell value={feature.enterprise} />
                                        </Grid>
                                    </Grid>
                                );
                            })}
                        </Box>
                    ))}
                </Box>
            </Box>
        </Box>
    );
};
