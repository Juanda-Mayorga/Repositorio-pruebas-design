import React from 'react';
import { Card, CardContent, Typography, useTheme } from '@mui/material';

interface WebContactCardProps {
    title: string;
    description: string;
    children: React.ReactNode;
}

export const WebContactCard: React.FC<WebContactCardProps> = ({
    title,
    description,
    children
}) => {
    const theme = useTheme();

    return (
        <Card sx={{
            height: 'auto',
            minHeight: 280,
            borderRadius: 2,
            boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
            transition: 'all 0.3s ease-out',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            bgcolor: theme.palette.web.background.paper,
            p: 3,
            '&:hover': {
                transform: 'scale(1.02)',
                boxShadow: '0 12px 24px rgba(0,0,0,0.15)',
            }
        }}>
            <CardContent sx={{
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                p: 0,
                '&:last-child': { pb: 0 }
            }}>
                <Typography
                    variant="h2"
                    gutterBottom
                    sx={{ mb: 2 }}
                >
                    {title}
                </Typography>
                <Typography
                    variant="body1"
                    sx={{
                        mb: 3,
                        flexGrow: 1,
                        color: 'text.secondary'
                    }}
                >
                    {description}
                </Typography>
                {children}
            </CardContent>
        </Card>
    );
};
