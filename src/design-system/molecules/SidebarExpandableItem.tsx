import { useState } from 'react';
import { Collapse, List, Box } from '@mui/material';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { SidebarItem } from './SidebarItem';
import type { ReactNode } from 'react';
import type { SxProps, Theme } from '@mui/material';

type SidebarItemState = 'default' | 'hover' | 'selected' | 'active' | 'disabled';

interface SidebarExpandableItemProps {
    icon: ReactNode;
    label: string;
    state?: SidebarItemState;
    children: ReactNode;
    defaultOpen?: boolean;
    onClick?: () => void;
    sx?: SxProps<Theme>;
}

export const SidebarExpandableItem = ({
    icon,
    label,
    state = 'default',
    children,
    defaultOpen = true,
    onClick,
    sx,
}: SidebarExpandableItemProps) => {
    const [open, setOpen] = useState(defaultOpen);

    const handleClick = () => {
        setOpen(!open);
        onClick?.();
    };

    return (
        <Box sx={{ position: 'relative' }}>
            {/* Continuous line covering sub‑items only */}
            <Box
                sx={{
                    position: 'absolute',
                    // 4px gap below the button, centered with the icon container
                    left: 28, // icon left (24) + 4px separation
                    top: 52, // button height (≈48px) + 4px gap
                    bottom: 0,
                    width: '1.5px',
                    bgcolor: '#7A6EBD',
                    zIndex: 10,
                    pointerEvents: 'none',
                    // Center the line vertically relative to the icon (assuming icon height ~24px)
                    // Using transform to align middle of the line with middle of the icon
                    // This may need adjustment based on actual icon size
                    // transform: 'translateY(12px)', // optional adjustment
                }}
            />
            <SidebarItem
                icon={icon}
                label={label}
                state={state}
                onClick={handleClick}
                endIcon={open ? <ExpandLess /> : <ExpandMore />}
                sx={{ ...sx }}
            />
            <Collapse in={open} timeout="auto" unmountOnExit>
                <Box sx={{ position: 'relative' }}>
                    <List component="div" disablePadding>
                        {children}
                    </List>
                </Box>
            </Collapse>
        </Box>
    );
};
