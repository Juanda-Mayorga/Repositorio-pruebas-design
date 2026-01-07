import React from 'react';
import { Box, Typography } from '@mui/material';
import { WebButton } from '../../atoms/WebButton';

interface InfoCardProps {
    title: string;
    description: string;
    ctaText: string;
    onCtaClick?: () => void;
}

export const InfoCard: React.FC<InfoCardProps> = ({ title, description, ctaText, onCtaClick }) => {
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            width: '100%',
            maxWidth: { md: '674px' },
            border: '1px solid',
            borderColor: 'grey.300',
            borderRadius: '4px',
            p: 2, // 16px
            gap: { xs: 2, md: '5%' },
            bgcolor: 'white',
            alignItems: 'center',
            mx: { xs: '3%', md: 'auto' }, // mx-[3%] in original logic for mobile
        }}>
            {/* Left Content */}
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
                flex: 1,
                width: { xs: '100%', md: 'auto' }
            }}>
                <Typography variant="h3" sx={{
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 500,
                    fontSize: '24px',
                    lineHeight: '20px',
                    color: 'black'
                }}>
                    {title}
                </Typography>
                <Typography sx={{
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 400,
                    fontSize: '16px',
                    lineHeight: '24px',
                    color: '#374151' // text-gray-700
                }}>
                    {description}
                </Typography>
            </Box>

            {/* CTA */}
            <Box sx={{ width: { xs: '100%', md: 'auto' } }}>
                <WebButton
                    variant="contained"
                    onClick={onCtaClick}
                    fullWidth // Default behavior of w-full in the div wrapper in original, but on tablet it might be auto width if the parent div allows. 
                    // Original: <CTAButton ... className='w-full'> inside a div with no width class.
                    // On mobile, flex-col, it will take full width. On tablet, flex-row, it will take natural width unless forced.
                    // Let's assume on desktop/tablet it should be auto width, mobile full width.
                    sx={{
                        width: { xs: '100%', md: 'auto' }
                    }}
                >
                    {ctaText}
                </WebButton>
            </Box>
        </Box>
    );
};
