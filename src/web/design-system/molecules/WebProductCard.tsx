import type { ReactNode } from 'react';
import { Box, Typography, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import type { SxProps, Theme } from '@mui/material';

interface WebProductCardProps {
    title: string;
    description: ReactNode;
    image: string;
    imageAlt?: string;
    imagePosition?: 'left' | 'right';
    imageMaxWidth?: number | string;
    children?: ReactNode;
    sx?: SxProps<Theme>;
}

export const WebProductCard = ({
    title,
    description,
    image,
    imageAlt = '',
    imagePosition = 'right',
    imageMaxWidth = 420,
    children,
    sx
}: WebProductCardProps) => {
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
                <Grid
                    size={{ xs: 12, md: 6 }}
                    component={motion.div}
                    initial={{ opacity: 0, x: { xs: 0, md: isImageLeft ? 40 : -40 }, y: { xs: 20, md: 0 } }}
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
                </Grid>

                {/* Image Side */}
                <Grid
                    size={{ xs: 12, md: 6 }}
                    component={motion.div}
                    initial={{ opacity: 0, scale: 0.98, y: { xs: 20, md: 0 } }}
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
                            borderRadius: '12px',
                            boxShadow: '0px 4px 24px rgba(0, 0, 0, 0.1)',
                        }}
                    />
                </Grid>
            </Grid>
        </Box>
    );
};
