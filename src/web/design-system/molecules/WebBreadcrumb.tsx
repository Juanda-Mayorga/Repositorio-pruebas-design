import { Breadcrumbs, Typography, Link } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

interface WebBreadcrumbProps {
    items: Array<{
        label: string;
        href?: string;
    }>;
}

export const WebBreadcrumb = ({ items }: WebBreadcrumbProps) => {
    return (
        <Breadcrumbs
            separator={
                <NavigateNextIcon
                    sx={{
                        fontSize: { xs: '12px', sm: '14px', lg: '18px' },
                        color: '#434343'
                    }}
                />
            }
            aria-label="breadcrumb"
            sx={{
                '& .MuiBreadcrumbs-separator': {
                    mx: { xs: 0.5, lg: 1 },
                }
            }}
        >
            {items.map((item, index) => {
                const isLast = index === items.length - 1;

                if (isLast || !item.href) {
                    return (
                        <Typography
                            key={index}
                            sx={{
                                color: '#7367B1',
                                fontSize: { xs: '12px', sm: '14px', lg: '18px' },
                                fontFamily: '"Hind Siliguri", sans-serif',
                                fontWeight: 600, // semibold
                            }}
                        >
                            {item.label}
                        </Typography>
                    );
                }

                return (
                    <Link
                        key={index}
                        href={item.href}
                        underline="none"
                        sx={{
                            color: '#434343',
                            fontSize: { xs: '12px', sm: '14px', lg: '18px' },
                            fontFamily: '"Hind Siliguri", sans-serif',
                            fontWeight: 400,
                            textDecoration: 'none',
                            '&:hover': {
                                color: '#2A2A2A', // darker gray
                                textDecoration: 'underline',
                            }
                        }}
                    >
                        {item.label}
                    </Link>
                );
            })}
        </Breadcrumbs>
    );
};
