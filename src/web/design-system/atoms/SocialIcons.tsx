import { Box, IconButton, type SxProps, type Theme } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';

interface SocialIconsProps {
    containerSx?: SxProps<Theme>;
    iconSx?: SxProps<Theme>;
}

export const SocialIcons = ({ containerSx, iconSx }: SocialIconsProps) => {
    return (
        <Box sx={{ display: 'flex', gap: 1, ...containerSx }}>
            <IconButton color="inherit" size="small">
                <FacebookIcon sx={iconSx} />
            </IconButton>
            <IconButton color="inherit" size="small">
                <TwitterIcon sx={iconSx} />
            </IconButton>
            <IconButton color="inherit" size="small">
                <LinkedInIcon sx={iconSx} />
            </IconButton>
            <IconButton color="inherit" size="small">
                <YouTubeIcon sx={iconSx} />
            </IconButton>
        </Box>
    );
};
