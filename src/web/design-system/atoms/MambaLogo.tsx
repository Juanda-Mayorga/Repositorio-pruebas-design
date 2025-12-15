import { Box, type BoxProps } from '@mui/material';

export const MambaLogo = (props: BoxProps) => {
    return (
        <Box
            {...props}
            sx={{
                width: 40,
                height: 40,
                flexShrink: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                ...props.sx
            }}
        >
            <svg
                width="100%"
                height="100%"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <rect width="40" height="40" rx="8" fill="#DFDAF9" />
                <path
                    d="M10 20C10 20 12 14 15 14C18 14 18 26 21 26C24 26 24 14 27 14C30 14 30 20 30 20"
                    stroke="#2F2F32"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
        </Box>
    );
};
