import { Box, Paper, Typography } from '@mui/material';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import CloudQueueIcon from '@mui/icons-material/CloudQueue';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';

import { useNavigate, useLocation } from 'react-router-dom';

const items = [
    {
        title: 'Product',
        description: 'Automate BIM audits, measurements, and estimates with all-in-one software',
        icon: <LaptopMacIcon sx={{ fontSize: 24 }} />,
        path: '/product'
    },
    {
        title: 'Cloud Services',
        description: 'Manage your teams, licenses, BIM projects and training from a single cloud platform',
        icon: <CloudQueueIcon sx={{ fontSize: 24 }} />,
        path: '/cloud-services'
    },
    {
        title: 'Support',
        description: 'Continuous assistance, rapid incident resolution, and expert support through every phase of the project',
        icon: <ChatBubbleOutlineIcon sx={{ fontSize: 24 }} />,
        path: '/support'
    }
];

export const SolutionDropdown = () => {
    const navigate = useNavigate();
    const location = useLocation();

    return (
        <Paper
            elevation={0}
            sx={{
                width: 380,
                p: 2,
                borderRadius: 2,
                bgcolor: '#FFFFFF',
                border: '1px solid #E8E8E8',
                boxShadow: '0px 4px 24px rgba(0, 0, 0, 0.06)',
                display: 'flex',
                gap: 2,
                flexDirection: 'column'
            }}
        >
            {items.map((item, index) => {
                const isSelected = location.pathname.startsWith(item.path);

                return (
                    <Box
                        key={index}
                        onClick={() => navigate(item.path)}
                        sx={{
                            display: 'flex',
                            gap: 2,
                            p: 1.5,
                            borderRadius: 1,
                            cursor: 'pointer',
                            transition: 'all 0.2s',
                            bgcolor: 'transparent',
                            border: '1px solid transparent',
                            '&:hover': {
                                bgcolor: isSelected ? '#F5F3FD' : '#F9F9F9',
                                ...(isSelected && {
                                    borderColor: '#7A6EBD'
                                })
                            }
                        }}
                    >
                        <Box
                            sx={{
                                width: 40,
                                height: 40,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                borderRadius: 1,
                                bgcolor: isSelected ? '#DFDAF9' : '#F5F3FD',
                                color: '#8A7BD4',
                                flexShrink: 0,
                                transition: 'all 0.2s'
                            }}
                        >
                            {item.icon}
                        </Box>
                        <Box>
                            <Typography
                                variant="subtitle1"
                                sx={{
                                    lineHeight: 1.2,
                                    mb: 0.5,
                                    color: '#2F2F32',
                                    fontWeight: 500,
                                    fontFamily: '"Hind Siliguri", sans-serif',
                                    '@media (min-width:1440px)': {
                                        fontSize: '20px',
                                    }
                                }}
                            >
                                {item.title}
                            </Typography>
                            <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.4, fontSize: '0.875rem' }}>
                                {item.description}
                            </Typography>
                        </Box>
                    </Box>
                );
            })}
        </Paper>
    );
};
