import { Box, Paper, Typography, alpha } from '@mui/material';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import CloudQueueIcon from '@mui/icons-material/CloudQueue';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import { useTheme } from '@mui/material/styles';

const items = [
    {
        title: 'Product',
        description: 'Automate BIM audits, measurements, and estimates with all-in-one software',
        icon: <LaptopMacIcon sx={{ fontSize: 24 }} />,
        color: '#9989EC' // Example color based on palette
    },
    {
        title: 'Cloud Services',
        description: 'Manage your teams, licenses, BIM projects and training from a single cloud platform',
        icon: <CloudQueueIcon sx={{ fontSize: 24 }} />,
        color: '#9989EC'
    },
    {
        title: 'Support',
        description: 'Continuous assistance, rapid incident resolution, and expert support through every phase of the project',
        icon: <ChatBubbleOutlineIcon sx={{ fontSize: 24 }} />,
        color: '#9989EC'
    }
];

export const SolutionDropdown = () => {
    const theme = useTheme();

    return (
        <Paper
            elevation={4}
            sx={{
                width: 380,
                p: 2,
                borderRadius: 2,
                bgcolor: 'background.paper',
                display: 'flex',
                gap: 2,
                flexDirection: 'column'
            }}
        >
            {items.map((item, index) => (
                <Box
                    key={index}
                    sx={{
                        display: 'flex',
                        gap: 2,
                        p: 1.5,
                        borderRadius: 1,
                        cursor: 'pointer',
                        transition: 'all 0.2s',
                        '&:hover': {
                            bgcolor: alpha(theme.palette.primary.main, 0.04), // Subtle hover
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
                            bgcolor: alpha(item.color, 0.1),
                            color: item.color,
                            flexShrink: 0
                        }}
                    >
                        {item.icon}
                    </Box>
                    <Box>
                        <Typography variant="subtitle1" fontWeight={600} color="text.primary" sx={{ lineHeight: 1.2, mb: 0.5 }}>
                            {item.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.4, fontSize: '0.875rem' }}>
                            {item.description}
                        </Typography>
                    </Box>
                </Box>
            ))}
        </Paper>
    );
};
