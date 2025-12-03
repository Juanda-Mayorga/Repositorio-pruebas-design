import React from 'react';
import { Tooltip, type TooltipProps } from '@mui/material';
import { styled } from '@mui/material/styles';

interface WebTooltipProps {
    title: string;
    children: React.ReactElement;
    placement?: TooltipProps['placement'];
}

const StyledTooltip = styled(({ className, ...props }: TooltipProps) => (
    <Tooltip {...props} classes={{ popper: className }} />
))(() => ({
    '& .MuiTooltip-tooltip': {
        backgroundColor: '#1F2937',
        color: '#FFFFFF',
        fontSize: '14px',
        fontFamily: '"Hind Siliguri", sans-serif',
        padding: '8px 12px',
        borderRadius: '4px',
        maxWidth: 300,
        lineHeight: 1.5,
    },
    '& .MuiTooltip-arrow': {
        color: '#1F2937',
    },
}));

/**
 * WebTooltip - Tooltip component for the web design system
 * 
 * A styled tooltip that matches the platform design system aesthetics.
 */
export const WebTooltip: React.FC<WebTooltipProps> = ({
    title,
    children,
    placement = 'top',
}) => {
    return (
        <StyledTooltip title={title} placement={placement} arrow>
            {children}
        </StyledTooltip>
    );
};
