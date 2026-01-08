import { Box, Paper, Typography } from '@mui/material';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import CloudQueueIcon from '@mui/icons-material/CloudQueue';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import { useTranslation } from 'react-i18next';

import { useNavigate, useLocation } from 'react-router-dom';


interface SolutionDropdownProps {
    isMobile?: boolean;
    onItemClick?: () => void;
}

export const SolutionDropdown = ({ isMobile = false, onItemClick }: SolutionDropdownProps) => {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const location = useLocation();

    const items = [
        {
            title: t('solutionDropdown.product.title'),
            description: t('solutionDropdown.product.description'),
            icon: <LaptopMacIcon sx={{ fontSize: 24 }} />,
            path: '/product'
        },
        {
            title: t('solutionDropdown.cloudServices.title'),
            description: t('solutionDropdown.cloudServices.description'),
            icon: <CloudQueueIcon sx={{ fontSize: 24 }} />,
            path: '/cloud-services-ii'
        },
        {
            title: t('solutionDropdown.support.title'),
            description: t('solutionDropdown.support.description'),
            icon: <ChatBubbleOutlineIcon sx={{ fontSize: 24 }} />,
            path: '/support'
        }
    ];

    return (
        <Paper
            elevation={isMobile ? 0 : 0}
            sx={{
                width: isMobile ? '100%' : 'max-content',
                p: isMobile ? 0 : 2,
                borderRadius: isMobile ? 0 : 2,
                bgcolor: isMobile ? 'transparent' : '#FFFFFF',
                border: isMobile ? 'none' : '1px solid #E8E8E8',
                boxShadow: isMobile ? 'none' : '0px 4px 24px rgba(0, 0, 0, 0.06)',
                display: 'flex',
                gap: 2,
                flexDirection: isMobile ? 'column' : 'row'
            }}
        >
            {items.map((item, index) => {
                const isSelected = location.pathname.startsWith(item.path);

                return (
                    <Box
                        key={index}
                        onClick={() => {
                            navigate(item.path);
                            if (onItemClick) onItemClick();
                        }}
                        sx={{
                            display: 'flex',
                            flexDirection: 'column', // Stack Content Vertically
                            gap: 1, // Gap between Header (Icon+Title) and Description
                            p: isMobile ? 1 : 1.5,
                            borderRadius: 1,
                            cursor: 'pointer',
                            transition: 'all 0.2s',
                            bgcolor: isSelected ? '#F5F3FD' : (isMobile ? '#FFFFFF' : 'transparent'),
                            border: isSelected ? (isMobile ? '1px solid #6b46c1' : '1px solid #7A6EBD') : (isMobile ? '1px solid #E8E8E8' : '1px solid transparent'),
                            maxWidth: isMobile ? '100%' : '260px',
                            '&:hover': isMobile ? {} : {
                                bgcolor: isSelected ? '#F5F3FD' : '#F9F9F9',
                                ...(isSelected && {
                                    borderColor: '#7A6EBD'
                                })
                            }
                        }}
                    >
                        {/* Header: Icon + Title */}
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                            <Box
                                sx={{
                                    width: isMobile ? 32 : 40,
                                    height: isMobile ? 32 : 40,
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
                            <Typography
                                variant="subtitle1"
                                sx={{
                                    lineHeight: 1.2,
                                    color: (isSelected && !isMobile) ? '#6b46c1' : '#2F2F32',
                                    fontWeight: 500,
                                    fontFamily: '"Hind Siliguri", sans-serif',
                                    fontSize: '14px',
                                    '@media (min-width:1440px)': {
                                        fontSize: '18px',
                                    },
                                    '@media (min-width:1920px)': {
                                        fontSize: '20px',
                                    }
                                }}
                            >
                                {item.title}
                            </Typography>
                        </Box>

                        {/* Description */}
                        <Typography variant="body2" color="text.secondary" sx={{
                            lineHeight: 1.4,
                            fontFamily: '"Inter", sans-serif',
                            fontSize: '12px',
                            transition: 'color 0.2s',
                            '@media (min-width:1440px)': {
                                fontSize: '14px',
                            },
                            '@media (min-width:1920px)': {
                                fontSize: '16px',
                            }
                        }}>
                            {item.description}
                        </Typography>
                    </Box>
                );
            })}
        </Paper>
    );
};
