import React from 'react';
import { TextField } from '@mui/material';

export interface WebInputFieldProps {
    label?: string;
    placeholder?: string;
    value?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    error?: boolean;
    helperText?: string;
    fullWidth?: boolean;
    disabled?: boolean;
    required?: boolean;
    name?: string;
    id?: string;
    type?: 'text' | 'email' | 'tel' | 'number';
    multiline?: boolean;
    rows?: number;
}

/**
 * WebInputField - Generic input field component for the web design system
 * 
 * A styled text input field that follows the web design system specifications.
 * Supports single-line and multi-line inputs with validation states.
 * 
 * @example
 * ```tsx
 * <WebInputField
 *   label="Email"
 *   placeholder="name@example.com"
 *   type="email"
 *   required
 *   value={email}
 *   onChange={handleChange}
 *   error={!!errors.email}
 *   helperText={errors.email}
 * />
 * ```
 */
export const WebInputField: React.FC<WebInputFieldProps> = ({
    label,
    placeholder,
    value,
    onChange,
    error = false,
    helperText,
    fullWidth = true,
    disabled = false,
    required = false,
    name,
    id,
    type = 'text',
    multiline = false,
    rows,
}) => {
    return (
        <TextField
            id={id}
            name={name}
            label={label}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            error={error}
            helperText={helperText}
            fullWidth={fullWidth}
            disabled={disabled}
            required={required}
            type={type}
            multiline={multiline}
            rows={rows}
            sx={{
                '& .MuiOutlinedInput-root': {
                    borderRadius: 1,
                    bgcolor: 'background.paper',
                    '& fieldset': {
                        borderColor: 'divider',
                    },
                    '&:hover fieldset': {
                        borderColor: 'primary.main',
                    },
                    '&.Mui-focused fieldset': {
                        borderColor: 'primary.main',
                    },
                    '&.Mui-error fieldset': {
                        borderColor: 'error.main',
                    },
                },
                '& .MuiInputLabel-root': {
                    '&.Mui-focused': {
                        color: 'primary.main',
                    },
                    '&.Mui-error': {
                        color: 'error.main',
                    },
                },
            }}
        />
    );
};
