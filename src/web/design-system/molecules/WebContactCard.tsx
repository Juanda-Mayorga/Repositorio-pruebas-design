import type { ReactNode } from 'react';
import { Card, CardContent, Typography } from '@mui/material';

interface WebContactCardProps {
    title: string;
    description: string;
    children: ReactNode;
}

/**
 * @component WebContactCard
 * @description
 * Tarjeta para mostrar información de contacto. Implementa el estándar de diseño
 * con sombras suaves y efecto de elevación al hacer hover.
 * 
 * @standards
 * - **Espaciado:** Padding interno de 24px (p: 3).
 * - **Tipografía:** Título usa `variant="cardTitle"` y descripción `variant="cardDescription"`.
 * - **Hover:** Escala a 1.02 para feedback táctil visual.
 */
export const WebContactCard = ({
    title,
    description,
    children
}: WebContactCardProps) => {

    return (
        <Card sx={{
            height: 'auto',
            minHeight: { xs: 280, sm: 'auto', md: 280 },
            borderRadius: 2,
            boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
            transition: 'all 0.3s ease-out',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            bgcolor: '#FFFFFF',
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
                    variant="cardTitle"
                    gutterBottom
                    sx={{ mb: 2 }}
                >
                    {title}
                </Typography>
                <Typography
                    variant="cardDescription"
                    sx={{
                        mb: { xs: 4, sm: 4, md: 3 },
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
