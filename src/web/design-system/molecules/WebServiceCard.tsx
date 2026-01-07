import type { ReactNode } from 'react';
import { Box, Typography, Grid, useTheme, useMediaQuery } from '@mui/material';
import { motion } from 'framer-motion';
import type { SxProps, Theme } from '@mui/material';

const MotionGrid = motion(Grid);

interface WebServiceCardProps {
    title: string;
    description: ReactNode;
    image: string;
    imageAlt?: string;
    imagePosition?: 'left' | 'right';
    imageMaxWidth?: number | string | any;
    variant?: 'default' | 'contained';
    children?: ReactNode;
    sx?: SxProps<Theme>;
}

/**
 * @component WebServiceCard
 * @description
 * Tarjeta estandarizada para mostrar servicios. 
 * Implementa automáticamente la escala tipográfica, el espaciado y las animaciones de scroll.
 * 
 * @standards
 * - **Espaciado:** Siempre 24px (mb: 3) entre Título, Descripción y CTA.
 * - **Tipografía:** Título usa `variant="cardTitle"` y descripción `variant="cardDescription"`.
 * - **Animación:** Revelado lateral en Desktop y Vertical en Mobile mediante `framer-motion`.
 * - **Alineación:** Contenido siempre alineado a la izquierda.
 * 
 * @param {string} title - Título de la tarjeta.
 * @param {ReactNode} description - Texto descriptivo (soporta HTML).
 * @param {string} image - Ruta de la imagen.
 * @param {string} [imageAlt] - Texto alternativo para accesibilidad.
 * @param {'left' | 'right'} [imagePosition='right'] - Posición de la imagen respecto al texto.
 * @param {number | string} [imageMaxWidth=420] - Ancho máximo de la imagen.
 * @param {ReactNode} [children] - Slot para botones de Call to Action.
 */
export const WebServiceCard = ({
    title,
    description,
    image,
    imageAlt = '',
    imagePosition = 'right',
    imageMaxWidth = 420,
    variant = 'default',
    children,
    sx
}: WebServiceCardProps) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const isImageLeft = imagePosition === 'left';

    return (
        <Box
            sx={{
                p: variant === 'contained' ? 0 : { xs: 4, md: 6 },
                ...sx
            }}
        >
            <Grid
                container
                spacing={{
                    xs: variant === 'contained' ? 0 : 3,
                    md: 8
                }}
                sx={{
                    flexDirection: 'row',
                    alignItems: 'center'
                }}
            >
                {/* Content Side */}
                <MotionGrid
                    size={{ xs: 12, md: 6 }}
                    initial={{ opacity: 0, x: isMobile ? 0 : (isImageLeft ? 40 : -40), y: isMobile ? 20 : 0 }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    viewport={{ once: true, amount: 0.1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    sx={{
                        order: { xs: 2, md: isImageLeft ? 2 : 1 },
                        maxWidth: typeof imageMaxWidth === 'object'
                            ? { ...imageMaxWidth, md: 'none' }
                            : { xs: imageMaxWidth, md: 'none' },
                        mx: { xs: 'auto', md: 0 },
                        width: '100%'
                    }}
                >
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        height: variant === 'contained' ? 'auto' : '100%', // Prevent stretching in contained variant
                        justifyContent: 'center',
                        textAlign: 'left',
                        ...(variant === 'contained' && {
                            bgcolor: '#FFFFFF',
                            border: '1px solid #E2E8F0',
                            borderRadius: '8px',
                            p: '24px',
                            boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
                        })
                    }}>
                        <Typography variant="cardTitle" sx={{ mb: '24px', mt: 0 }}>
                            {title}
                        </Typography>
                        {typeof description === 'string' ? (
                            <Typography
                                variant="cardDescription"
                                sx={{
                                    color: 'text.secondary',
                                    mb: children ? '24px' : 0,
                                    mt: 0,
                                    whiteSpace: 'pre-line'
                                }}
                                dangerouslySetInnerHTML={{ __html: description }}
                            />
                        ) : (
                            <Typography variant="cardDescription" sx={{
                                color: 'text.secondary',
                                mb: children ? '24px' : 0,
                                mt: 0
                            }}>
                                {description}
                            </Typography>
                        )}
                        {children}
                    </Box>
                </MotionGrid>

                {/* Image Side */}
                <MotionGrid
                    size={{ xs: 12, md: 6 }}
                    initial={{ opacity: 0, scale: 0.98, y: isMobile ? 20 : 0 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.1 }}
                    transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
                    sx={{
                        order: { xs: 1, md: isImageLeft ? 1 : 2 }
                    }}
                >
                    <Box
                        component="img"
                        src={image}
                        alt={imageAlt}
                        sx={{
                            width: '100%',
                            maxWidth: imageMaxWidth,
                            height: 'auto',
                            display: 'block',
                            mx: 'auto',
                        }}
                    />
                </MotionGrid>
            </Grid>
        </Box>
    );
};
