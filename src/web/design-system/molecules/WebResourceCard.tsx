import React from 'react';
import { Card, CardContent, Typography, useTheme } from '@mui/material';

interface WebResourceCardProps {
    title: string;
    description: string;
    borderTopColor?: string;
    children: React.ReactNode;
}

export const WebResourceCard: React.FC<WebResourceCardProps> = ({
    title,
    description,
    borderTopColor,
    children
}) => {
    const theme = useTheme();

    return (
        <Card sx={{
            height: '100%',
            borderTop: borderTopColor ? `4px solid ${borderTopColor}` : undefined,
            transition: 'all 0.3s ease-out',
            bgcolor: '#FFFFFF',
            '&:hover': {
                transform: 'scale(1.02)',
                boxShadow: '0 12px 24px rgba(0,0,0,0.15)',
            }
        }}>
            <CardContent sx={{
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                p: 3
            }}>
                <Typography
                    variant="h3"
                    sx={{
                        mb: 2,
                        color: theme.palette.web.text.secondary
                    }}
                >
                    {title}
                </Typography>
                <Typography
                    variant="body1"
                    sx={{
                        mb: 3,
                        flexGrow: 1,
                        color: theme.palette.web.text.body
                    }}
                >
                    {description}
                </Typography>
                {children}
            </CardContent>
        </Card>
    );
};
