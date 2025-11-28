import { ListItemButton, ListItemIcon, ListItemText, useTheme, type SxProps, type Theme } from '@mui/material';
import type { ReactNode } from 'react';

type SidebarItemState = 'default' | 'hover' | 'selected' | 'active' | 'disabled';

interface SidebarItemProps {
    icon: ReactNode;
    label: string;
    state?: SidebarItemState;
    onClick?: () => void;
    endIcon?: ReactNode;
    sx?: SxProps<Theme>;
    isSubItem?: boolean;
}

export const SidebarItem = ({
    icon,
    label,
    state = 'default',
    onClick,
    endIcon,
    sx,
    isSubItem = false
}: SidebarItemProps) => {
    const theme = useTheme();

    // Get colors based on state
    const getStateColors = () => {
        switch (state) {
            case 'selected':
                return {
                    bg: theme.sidebar.selected.bg,
                    text: theme.sidebar.selected.text,
                };
            case 'disabled':
                return {
                    bg: theme.sidebar.disabled.bg,
                    text: theme.sidebar.disabled.text,
                };
            case 'active':
                return {
                    bg: theme.sidebar.active.bg,
                    text: theme.sidebar.active.text,
                };
            case 'hover':
                return {
                    bg: theme.sidebar.hover.bg,
                    text: theme.sidebar.hover.text,
                };
            default:
                return {
                    bg: theme.sidebar.default.bg,
                    text: theme.sidebar.default.text,
                };
        }
    };

    const stateColors = getStateColors();

    const baseStyles: SxProps<Theme> = {
        py: isSubItem ? 1 : 1.5,
        px: 2,
        pl: isSubItem ? 5 : 2,
        mb: 0.5,
        borderRadius: '4px',
        mx: 1,
        bgcolor: stateColors.bg,
        color: stateColors.text,
        '&:hover': {
            bgcolor: state === 'selected'
                ? theme.sidebar.selected.bg
                : theme.sidebar.hover.bg,
            color: theme.sidebar.hover.text,
        },
        '&:active': {
            bgcolor: theme.sidebar.active.bg,
            color: theme.sidebar.active.text,
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
            <ListItemIcon sx={{ minWidth: 40, color: 'inherit', '& .MuiSvgIcon-root': { fontSize: 20 } }}>
                {icon}
            </ListItemIcon>
            <ListItemText
                primary={label}
                primaryTypographyProps={{
                    fontWeight: isSubItem ? 400 : 600,
                    fontSize: isSubItem ? '14px' : '15px',
                }}
            />
            {endIcon}
        </ListItemButton>
    );
};
