import type { ReactNode } from 'react';
import { Box, Typography, Grid, useTheme, useMediaQuery } from '@mui/material';
import { motion } from 'framer-motion';
import type { SxProps, Theme } from '@mui/material';

const MotionGrid = motion(Grid);

interface WebProductCardProps {
    title: string;
    description: ReactNode;
    image: string;
    imageAlt?: string;
    imagePosition?: 'left' | 'right';
    imageMaxWidth?: number | string;
    imageHeight?: number | string;
    imageObjectFit?: React.CSSProperties['objectFit'];
    children?: ReactNode;
    sx?: SxProps<Theme>;
}

/**
 * @component WebProductCard
 * @description
 * Tarjeta estandarizada para mostrar características de producto. 
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
 * @param {number | string} [imageHeight='auto'] - Alto de la imagen.
 * @param {objectFit} [imageObjectFit='initial'] - Comportamiento de ajuste de la imagen.
 * @param {ReactNode} [children] - Slot para botones de Call to Action.
 */
export const WebProductCard = ({
    title,
    description,
    image,
    imageAlt = '',
    imagePosition = 'right',
    imageMaxWidth = 420,
    imageHeight = 'auto',
    imageObjectFit = 'initial',
    children,
    sx
}: WebProductCardProps) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const isImageLeft = imagePosition === 'left';

    return (
        <Box
            sx={{
                p: { xs: 4, md: 6 },
                ...sx
            }}
        >
            <Grid
                container
                spacing={{ xs: 3, md: 8 }}
                sx={{
                    flexDirection: 'row',
                    alignItems: 'stretch'
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
                        maxWidth: { xs: imageMaxWidth, md: 'none' },
                        mx: { xs: 'auto', md: 0 }
                    }}
                >
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        height: '100%',
                        justifyContent: 'center',
                        textAlign: 'left'
                    }}>
                        <Typography variant="cardTitle" sx={{ mb: 3 }}>
                            {title}
                        </Typography>
                        {typeof description === 'string' ? (
                            <Typography
                                variant="cardDescription"
                                sx={{
                                    color: 'text.secondary',
                                    mb: children ? 3 : 0,
                                    whiteSpace: 'pre-line'
                                }}
                                dangerouslySetInnerHTML={{ __html: description }}
                            />
                        ) : (
                            <Typography variant="cardDescription" sx={{
                                color: 'text.secondary',
                                mb: children ? 3 : 0
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
                        order: { xs: 1, md: isImageLeft ? 1 : 2 },
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                >
                    <Box
                        component="img"
                        src={image}
                        alt={imageAlt}
                        sx={{
                            width: '100%',
                            maxWidth: imageMaxWidth,
                            height: imageHeight,
                            objectFit: imageObjectFit,
                            display: 'block',
                            mx: 'auto',
                            borderRadius: '12px',
                        }}
                    />
                </MotionGrid>
            </Grid>
        </Box>
    );
};
