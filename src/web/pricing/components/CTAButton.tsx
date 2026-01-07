import React from 'react';
import { useNavigate } from 'react-router-dom';

export type CTAButtonVariant = 'contained' | 'outlined' | 'text';
export type PlanType = 'trial' | 'professional' | 'enterprise';

interface CTAButtonProps {
  children: React.ReactNode;
  variant?: CTAButtonVariant;
  planType?: PlanType;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
}

export const CTAButton: React.FC<CTAButtonProps> = ({
  children,
  variant = 'contained',
  planType,
  onClick,
  disabled = false,
  className = ''
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    // Si hay un onClick personalizado, usarlo
    if (onClick) {
      onClick();
      return;
    }

    // Si no hay onClick y hay planType, navegar automáticamente
    if (planType) {
      switch (planType) {
        case 'trial':
          navigate('/auth/register/trial');
          break;
        case 'professional':
          navigate('/auth/register/professional');
          break;
        case 'enterprise':
          navigate('/contact'); // TODO: Crear formulario específico para enterprise
          break;
      }
    }
  };

  const getButtonStyles = () => {
    const baseClasses = "w-[286px] h-[32px] rounded-[4px] px-2 py-3 font-sans font-normal text-[16px] leading-[24px] transition-colors flex items-center justify-center cursor-pointer";

    switch (variant) {
      case 'contained':
        return `${baseClasses} bg-[#DFDAF9] text-[#8A7BD4] hover:bg-[#D0C8F5]`;
      case 'outlined':
        return `${baseClasses} bg-transparent border border-[#8A7BD4] text-[#8A7BD4] hover:bg-[#DFDAF9]/10`;
      case 'text':
        return `${baseClasses} bg-transparent text-[#8A7BD4] hover:bg-[#DFDAF9]/10`;
      default:
        return `${baseClasses} bg-[#DFDAF9] text-[#8A7BD4]`;
    }
  };

  return (
    <button
      onClick={handleClick}
      disabled={disabled}
      className={`${getButtonStyles()} ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className}`}
    >
      {children}
    </button>
  );
};