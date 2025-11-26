import { ListItemButton, ListItemText, type SxProps, type Theme } from '@mui/material';

type SidebarItemState = 'default' | 'hover' | 'selected' | 'active' | 'disabled';

interface SidebarSubItemProps {
    label: string;
    state?: SidebarItemState;
    onClick?: () => void;
    sx?: SxProps<Theme>;
}

export const SidebarSubItem = ({
    label,
    state = 'default',
    onClick,
    sx,
}: SidebarSubItemProps) => {
    // Custom colors for sub-items
    const getStateColors = () => {
        switch (state) {
            case 'selected':
                return {
                    bg: '#F6F6F6',
                    text: '#7A6EBD',
                };
            case 'hover':
                return {
                    bg: '#FFFFFF',
                    text: '#7A6EBD',
                };
            default:
                return {
                    bg: '#FFFFFF',
                    text: '#797D80',
                };
        }
    };

    const stateColors = getStateColors();


    const baseStyles: SxProps<Theme> = {
        py: 1,
        px: 2,
        pl: '30px', // Align text with parent item (adjusted for new margin)
        mb: 0.5, // Add vertical margin between sub-items
        borderRadius: '8px',
        ml: '34px', // 28px (red line) + 1.5px (width) + ~4.5px gap
        mr: 1,
        bgcolor: stateColors.bg,
        color: stateColors.text,
        position: 'relative',
        '&:hover': {
            bgcolor: '#FFFFFF',
            color: '#7A6EBD',
        },
        transition: 'all 0.2s ease-in-out',
        pointerEvents: state === 'disabled' ? 'none' : 'auto',
        opacity: state === 'disabled' ? 0.6 : 1,
    };

    return (
        <ListItemButton
            onClick={onClick}
            sx={{ ...baseStyles, ...sx }}
        >
            <ListItemText
                primary={label}
                primaryTypographyProps={{
                    fontWeight: 500,
                    fontSize: '14px',
                }}
            />
        </ListItemButton>
    );
};
