import React from 'react';
import { TextField, MenuItem } from '@mui/material';

export interface WebCountrySelectorProps {
    label?: string;
    placeholder?: string;
    value?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
    error?: boolean;
    helperText?: string;
    fullWidth?: boolean;
    disabled?: boolean;
    required?: boolean;
    name?: string;
    id?: string;
}

const countries = [
    "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan",
    "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burundi",
    "Cabo Verde", "Cambodia", "Cameroon", "Canada", "Central African Republic", "Chad", "Chile", "China", "Colombia", "Comoros", "Congo (Congo-Brazzaville)", "Costa Rica", "Croatia", "Cuba", "Cyprus", "Czechia (Czech Republic)",
    "Democratic Republic of the Congo", "Denmark", "Djibouti", "Dominica", "Dominican Republic",
    "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini (fmr. 'Swaziland')", "Ethiopia",
    "Fiji", "Finland", "France",
    "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana",
    "Haiti", "Holy See", "Honduras", "Hungary",
    "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy",
    "Jamaica", "Japan", "Jordan",
    "Kazakhstan", "Kenya", "Kiribati", "Kuwait", "Kyrgyzstan",
    "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg",
    "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia", "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar (formerly Burma)",
    "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Korea", "North Macedonia", "Norway",
    "Oman",
    "Pakistan", "Palau", "Palestine State", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal",
    "Qatar",
    "Romania", "Russia", "Rwanda",
    "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Korea", "South Sudan", "Spain", "Sri Lanka", "Sudan", "Suriname", "Sweden", "Switzerland", "Syria",
    "Tajikistan", "Tanzania", "Thailand", "Timor-Leste", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu",
    "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States of America", "Uruguay", "Uzbekistan",
    "Vanuatu", "Venezuela", "Vietnam",
    "Yemen",
    "Zambia", "Zimbabwe"
];

/**
 * WebCountrySelector - Country selector component for the web design system
 * 
 * A styled select input field that allows users to choose a country from a list.
 * Follows the same design specifications as WebInputField.
 */
export const WebCountrySelector: React.FC<WebCountrySelectorProps> = ({
    label,
    placeholder,
    value,
    onChange,
    onBlur,
    error = false,
    helperText,
    fullWidth = true,
    disabled = false,
    required = false,
    name,
    id,
}) => {
    return (
        <TextField
            id={id}
            name={name}
            select
            label={label}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            error={error}
            helperText={helperText}
            fullWidth={fullWidth}
            disabled={disabled}
            required={required}
            variant="outlined"
            InputLabelProps={{
                shrink: true,
            }}
            SelectProps={{
                displayEmpty: true,
                renderValue: (selected: any) => {
                    if (!selected) {
                        return <span style={{ color: '#797D80', opacity: 1, fontSize: '16px', fontFamily: '"Hind Siliguri", sans-serif' }}>{placeholder}</span>;
                    }
                    return selected;
                },
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
                    '& .MuiSelect-select': {
                        color: '#434343',
                        fontFamily: '"Hind Siliguri", sans-serif',
                        height: '48px', // Set explicit height
                        padding: '0 14px',
                        display: 'flex',
                        alignItems: 'center',
                        boxSizing: 'border-box',
                        '&.Mui-disabled': {
                            color: '#AAAAAA',
                            WebkitTextFillColor: '#AAAAAA',
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
        >
            {countries.map((country) => (
                <MenuItem key={country} value={country} sx={{ fontFamily: '"Hind Siliguri", sans-serif' }}>
                    {country}
                </MenuItem>
            ))}
        </TextField>
    );
};
