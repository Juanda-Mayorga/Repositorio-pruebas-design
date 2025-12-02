import React from 'react';
import { Card, CardContent, Typography, useTheme } from '@mui/material';

interface ContentCardProps {
    title: string;
    description: string;
    borderTopColor?: string;
    children: React.ReactNode;
    variant?: 'resources' | 'contact';
}

export const ContentCard: React.FC<ContentCardProps> = ({
    title,
    description,
    borderTopColor,
    children,
    variant = 'resources'
}) => {
    const theme = useTheme();

    const isResourcesVariant = variant === 'resources';
    const isContactVariant = variant === 'contact';

    return (
        <Card sx={{
            height: isResourcesVariant ? '100%' : 'auto',
            minHeight: isContactVariant ? 280 : undefined,
            borderTop: isResourcesVariant && borderTopColor ? `4px solid ${borderTopColor}` : undefined,
            borderRadius: isContactVariant ? 2 : undefined,
            boxShadow: isContactVariant ? '0 4px 12px rgba(0,0,0,0.08)' : undefined,
            transition: 'all 0.3s ease-out',
            display: isContactVariant ? 'flex' : undefined,
            flexDirection: isContactVariant ? 'column' : undefined,
            justifyContent: isContactVariant ? 'space-between' : undefined,
            p: isContactVariant ? 3 : undefined,
            '&:hover': {
                transform: 'scale(1.02)',
                boxShadow: '0 12px 24px rgba(0,0,0,0.15)',
            }
        }}>
            <CardContent sx={{
                display: 'flex',
                flexDirection: 'column',
                height: isResourcesVariant ? '100%' : 'auto',
                p: isContactVariant ? 0 : 3
            }}>
                <Typography
                    variant={isContactVariant ? 'h2' : 'h3'}
                    sx={{
                        mb: 2,
                        color: isResourcesVariant ? theme.palette.web.text.secondary : undefined
                    }}
                    gutterBottom={isContactVariant}
                >
                    {title}
                </Typography>
                <Typography
                    variant="body1"
                    sx={{
                        mb: 3,
                        flexGrow: isResourcesVariant ? 1 : undefined,
                        color: isResourcesVariant ? theme.palette.web.text.body : 'text.secondary'
                    }}
                >
                    {description}
                </Typography>
                {children}
            </CardContent>
        </Card>
    );
};
