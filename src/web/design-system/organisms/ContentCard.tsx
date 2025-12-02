import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

interface ContentCardProps {
    title: string;
    description: string;
    borderTopColor: string;
    children: React.ReactNode;
}

export const ContentCard: React.FC<ContentCardProps> = ({
    title,
    description,
    borderTopColor,
    children
}) => {
    return (
        <Card sx={{
            height: '100%',
            borderTop: `4px solid ${borderTopColor}`,
            transition: 'all 0.3s ease-out',
            '&:hover': {
                transform: 'scale(1.02)',
                boxShadow: '0 12px 24px rgba(0,0,0,0.15)',
            }
        }}>
            <CardContent sx={{ display: 'flex', flexDirection: 'column', height: '100%', p: 3 }}>
                <Typography variant="h3" sx={{ mb: 2, color: '#5C528E' }}>
                    {title}
                </Typography>
                <Typography variant="body1" sx={{ mb: 3, flexGrow: 1, color: '#797979' }}>
                    {description}
                </Typography>
                {children}
            </CardContent>
        </Card>
    );
};
