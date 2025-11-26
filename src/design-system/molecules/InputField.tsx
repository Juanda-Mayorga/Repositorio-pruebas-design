import React, { useState } from 'react';
import { TextField, InputAdornment, IconButton } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

export type InputFieldVariant =
    | 'name'
    | 'surname'
    | 'company'
    | 'email'
    | 'password'
    | 'verify_password'
    | 'full_company_name'
    | 'country'
    | 'zip_code'
    | 'address'
    | 'municipality'
    | 'province_state'
    | 'name_surname'
    | 'tax_id'
    | 'phone_number';

interface InputFieldProps {
    variant: InputFieldVariant;
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
}

const VARIANT_CONFIG: Record<InputFieldVariant, { label: string; placeholder: string; type?: string }> = {
    name: { label: 'Nombre', placeholder: 'Introduce tu nombre' },
    surname: { label: 'Apellido', placeholder: 'Introduce tu apellido' },
    company: { label: 'Empresa', placeholder: 'Escribe el nombre de tu empresa' },
    email: { label: 'Correo electrónico', placeholder: 'nombre@ejemplo.com', type: 'email' },
    password: { label: 'Contraseña', placeholder: 'New password', type: 'password' },
    verify_password: { label: 'Verificar Contraseña', placeholder: 'Rewrite password', type: 'password' },
    full_company_name: { label: 'Nombre completo de la empresa', placeholder: 'Razón social completa' },
    country: { label: 'País', placeholder: 'Selecciona tu país' },
    zip_code: { label: 'Código postal', placeholder: '00000' },
    address: { label: 'Dirección', placeholder: 'Nombre de la calle, número, piso' },
    municipality: { label: 'Municipio', placeholder: 'Nombre de la ciudad o pueblo' },
    province_state: { label: 'Provincia/Estado', placeholder: 'Selecciona la provincia/estado' },
    name_surname: { label: 'Nombre y Apellido', placeholder: 'Nombre Apellido' },
    tax_id: { label: 'NIF/CIF/Tax ID', placeholder: 'Introduce tu identificación fiscal' },
    phone_number: { label: 'Número de teléfono', placeholder: '600 000 000', type: 'tel' },
};

export const InputField: React.FC<InputFieldProps> = ({
    variant,
    label: customLabel,
    placeholder: customPlaceholder,
    value,
    onChange,
    error = false,
    helperText,
    fullWidth = true,
    disabled = false,
    required = false,
    name,
    id,
}) => {
    const config = VARIANT_CONFIG[variant];
    const [showPassword, setShowPassword] = useState(false);

    const isPassword = variant === 'password' || variant === 'verify_password';
    const isPhone = variant === 'phone_number';

    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    const getType = () => {
        if (isPassword) {
            return showPassword ? 'text' : 'password';
        }
        return config.type || 'text';
    };

    return (
        <TextField
            id={id || variant}
            name={name || variant}
            label={customLabel || config.label}
            placeholder={customPlaceholder || config.placeholder}
            value={value}
            onChange={onChange}
            error={error}
            helperText={helperText}
            fullWidth={fullWidth}
            disabled={disabled}
            required={required}
            type={getType()}
            variant="outlined"
            InputLabelProps={{
                shrink: true,
            }}
            InputProps={{
                startAdornment: isPhone ? (
                    <InputAdornment position="start">
                        <span style={{ color: '#333', fontWeight: 500 }}>(+34)</span>
                    </InputAdornment>
                ) : null,
                endAdornment: isPassword ? (
                    <InputAdornment position="end">
                        <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                        >
                            {showPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                    </InputAdornment>
                ) : null,
            }}
            sx={{
                '& .MuiOutlinedInput-root': {
                    borderRadius: '8px',
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
                        '&::placeholder': {
                            color: '#797D80',
                            opacity: 1,
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
