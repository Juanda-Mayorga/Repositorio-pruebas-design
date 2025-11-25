import { useState } from 'react';
import { TextField, IconButton, InputAdornment } from '@mui/material';
import type { TextFieldProps } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

type PasswordFieldProps = Omit<TextFieldProps, 'type'> & {
    name: string;
    label: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    error?: boolean;
    helperText?: string;
    sx?: any;
};

export const PasswordField = ({
    name,
    label,
    value,
    onChange,
    error,
    helperText,
    sx,
    ...otherProps
}: PasswordFieldProps) => {
    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    return (
        <TextField
            fullWidth
            type={showPassword ? 'text' : 'password'}
            name={name}
            label={label}
            value={value}
            onChange={onChange}
            error={error}
            helperText={helperText}
            sx={sx}
            InputProps={{
                endAdornment: (
                    <InputAdornment position="end">
                        <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                            sx={{ color: 'text.secondary' }}
                        >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                    </InputAdornment>
                ),
            }}
            {...otherProps}
        />
    );
};
