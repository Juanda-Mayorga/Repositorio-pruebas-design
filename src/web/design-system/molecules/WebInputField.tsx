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
    const [internalError, setInternalError] = React.useState(false);
    const [internalHelperText, setInternalHelperText] = React.useState('');

    // List of common disposable email domains
    const disposableDomains = [
        'yopmail.com', 'temp-mail.org', 'guerrillamail.com', '10minutemail.com',
        'mailinator.com', 'throwawaymail.com', 'tempmail.com', 'maildrop.cc',
        'getairmail.com', 'dispostable.com'
    ];

    const validateEmail = (email: string) => {
        if (!email) return true; // Let required prop handle empty state if needed

        // 1. Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setInternalError(true);
            setInternalHelperText('Please enter a valid email address');
            return false;
        }

        // 2. Validate temporary email
        const domain = email.split('@')[1]?.toLowerCase();
        if (domain && disposableDomains.includes(domain)) {
            setInternalError(true);
            setInternalHelperText('Temporary email addresses are not allowed');
            return false;
        }

        setInternalError(false);
        setInternalHelperText('');
        return true;
    };

    const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
        if (type === 'email') {
            validateEmail(event.target.value);
        }
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        // Clear error on change if there was one
        if (internalError) {
            setInternalError(false);
            setInternalHelperText('');
        }
        if (onChange) {
            onChange(event);
        }
    };

    // Determine if we should show external or internal error/helperText
    // External props take precedence if provided and true (for error)
    const showError = error || internalError;
    const currentHelperText = error ? helperText : (internalError ? internalHelperText : helperText);

    return (
        <TextField
            id={id}
            name={name}
            label={label}
            placeholder={placeholder}
            value={value}
            onChange={handleChange}
            onBlur={handleBlur}
            error={showError}
            helperText={currentHelperText}
            fullWidth={fullWidth}
            disabled={disabled}
            required={required}
            type={type}
            multiline={multiline}
            rows={rows}
            variant="outlined"
            InputLabelProps={{
                shrink: true,
            }}
            sx={{
                '& .MuiOutlinedInput-root': {
                    borderRadius: '4px',
                    backgroundColor: '#FFFFFF',
                    '& fieldset': {
                        borderColor: '#CCCCCC',
                    },
                    '&:hover fieldset': {
                        borderColor: '#AAAAAA',
                    },
                    '&.Mui-focused fieldset': {
                        borderColor: '#666666',
                        borderWidth: '1px',
                    },
                    '&.Mui-error fieldset': {
                        borderColor: '#d32f2f',
                    },
                    '&.Mui-disabled': {
                        backgroundColor: '#F5F5F5',
                        '& fieldset': {
                            borderColor: '#DEDEDE',
                        },
                    },
                    '& input': {
                        color: '#434343',
                        fontFamily: '"Hind Siliguri", sans-serif',
                        height: '48px', // Set explicit height
                        padding: '0 14px',
                        boxSizing: 'border-box',
                        '&::placeholder': {
                            color: '#797D80',
                            opacity: 1,
                            fontSize: '16px',
                            fontFamily: '"Hind Siliguri", sans-serif',
                        },
                        '&.Mui-disabled': {
                            color: '#AAAAAA',
                            WebkitTextFillColor: '#AAAAAA',
                            '&::placeholder': {
                                color: '#AAAAAA',
                                opacity: 1,
                            },
                        },
                    },
                },
                '& .MuiInputLabel-root': {
                    color: '#434343',
                    fontSize: '16px',
                    fontFamily: '"Hind Siliguri", sans-serif',
                    '&.Mui-focused': {
                        color: '#434343',
                    },
                    '&.Mui-error': {
                        color: '#d32f2f',
                    },
                    '&.Mui-disabled': {
                        color: '#AAAAAA',
                    },
                    '& .MuiFormLabel-asterisk': {
                        color: '#E63C3D',
                    },
                },
            }}
        />
    );
};
