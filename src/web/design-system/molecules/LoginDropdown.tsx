import { Box, Paper, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const versions = [
    { label: 'MAMBA 23', value: '23', path: '/login-23' }, // Dummy paths for now, or assume external?
    // User didn't specify paths, but "selector" implies action. 
    // Previous code navigated to '/subscription'.
    // I will use that for now or just generic.
    // "MAMBA 26"
    { label: 'MAMBA 26', value: '26', path: '/subscription' }
];

export const LoginDropdown = () => {
    const navigate = useNavigate();


    return (
        <Paper
            elevation={0}
            sx={{
                width: 200, // Smaller width for simple list
                p: 1, // Less padding than Solution
                borderRadius: 2,
                bgcolor: '#FFFFFF',
                border: '1px solid #E8E8E8',
                boxShadow: '0px 4px 24px rgba(0, 0, 0, 0.06)',
                display: 'flex',
                flexDirection: 'column',
                gap: 1
            }}
        >
            {versions.map((version) => {
                // Simple logic for checking if active? likely none is active initially

                return (
                    <Box
                        key={version.value}
                        onClick={() => navigate(version.path)}
                        sx={{
                            p: 1.5,
                            borderRadius: 1,
                            cursor: 'pointer',
                            transition: 'all 0.2s',
                            bgcolor: 'transparent',
                            '&:hover': {
                                bgcolor: '#F9F9F9',
                                '& .MuiTypography-root': {
                                    color: '#7A6EBD',
                                }
                            }
                        }}
                    >
                        <Typography
                            variant="subtitle1"
                            sx={{
                                color: '#2F2F32',
                                fontWeight: 500,
                                fontFamily: '"Inter", sans-serif',
                                fontSize: '16px',
                                transition: 'color 0.2s',
                                '@media (min-width:1440px)': {
                                    fontSize: '20px',
                                }
                            }}
                        >
                            {version.label}
                        </Typography>
                    </Box>
                );
            })}
        </Paper>
    );
};
