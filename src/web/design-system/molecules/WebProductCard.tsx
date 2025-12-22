import type { ReactNode } from 'react';
import { Box, Typography, Grid } from '@mui/material';
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
                    alignItems: 'center',
                    flexDirection: 'row'
                }}
            >
                {/* Content Side */}
                <Grid
                    size={{ xs: 12, md: 6 }}
                    sx={{
                        textAlign: 'left',
                        order: { xs: 2, md: isImageLeft ? 2 : 1 },
                        maxWidth: { xs: imageMaxWidth, md: 'none' },
                        mx: { xs: 'auto', md: 0 }
                    }}
                >
                    <Typography variant="h2" sx={{ mb: 2 }}>
                        {title}
                    </Typography>
                    {typeof description === 'string' ? (
                        <Typography
                            sx={{ color: 'text.secondary', fontFamily: 'Hind Siliguri', mb: children ? 3 : 0, whiteSpace: 'pre-line' }}
                            dangerouslySetInnerHTML={{ __html: description }}
                        />
                    ) : (
                        <Typography sx={{ color: 'text.secondary', fontFamily: 'Hind Siliguri', mb: children ? 3 : 0 }}>
                            {description}
                        </Typography>
                    )}
                    {children}
                </Grid>

                {/* Image Side */}
                <Grid
                    size={{ xs: 12, md: 6 }}
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
