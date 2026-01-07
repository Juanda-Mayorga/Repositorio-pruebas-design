import React from 'react';
import { PricingPlan, ButtonVariant } from '../types';
// Importar SVGs como URLs
import userIcon from '../assets/icons/user.svg';
import usersIcon from '../assets/icons/users.svg';
import checkIcon from '../assets/icons/check.svg';
import crossIcon from '../assets/icons/cross.svg';
import { useTranslation } from 'react-i18next';

interface PricingCarouselCardProps {
  plan: PricingPlan;
  onSelectPlan: (planId: string) => void;
}

export const PricingCarouselCard: React.FC<PricingCarouselCardProps> = ({
  plan,
  onSelectPlan
}) => {
  const { t } = useTranslation();
  const getButtonStyles = (variant: ButtonVariant = 'primary') => {
    const baseClasses = " flex items-center justify-center text-center w-[272px] h-[40px] rounded-[4px] py-3 px-2 mb-4 font-sans text-sm transition-colors";

    switch (variant) {
      case 'primary':
        return `${baseClasses} bg-[#DFDAF9] text-card-button-text hover:bg-[#CFC9F2]`;
      case 'secondary':
        return `${baseClasses} bg-[#7367B1] text-[#F5F3FD] hover:bg-[#5C528E]`;
      case 'outline':
        return `${baseClasses} bg-transparent border border-[#7367B1] text-[#7367B1] hover:bg-gray-50`;
      case 'disabled':
        return `${baseClasses} bg-gray-100 text-gray-400 cursor-not-allowed`;
      default:
        return `${baseClasses} bg-card-button-bg text-card-button-text`;
    }
  };

  const handleScrollToFeatures = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const featureComparisonElement = document.getElementById('feature-comparison');
    if (featureComparisonElement) {
      featureComparisonElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };
  return (
    <div className="w-[320px] h-[532px] border border-gray-300 rounded-[4px] bg-white p-6 flex flex-col">
      {/* Título */}
      <h3 className="font-sans font-medium text-[36px] leading-[20px] text-black mb-3">
        {t(plan.name)}
      </h3>

      {/* Descripción */}
      <p className="font-sans font-normal text-[18px] leading-[24px] text-card-description-gray mb-0">
        {t(plan.description)}
      </p>

      {/* Precio */}
      <div className="flex items-baseline mt-4 mb-3">
        <span className="font-sans font-medium text-[48px] leading-[24px] text-card-price-gray">
          {plan.price.yearly === 0 ? `${0}€` : `${plan.price.yearly}€`}
        </span>
        <span className="font-sans font-normal text-[24px] leading-[37px] text-card-text-gray ml-2">
          {plan.priceNote ? t(plan.priceNote) : ''}
        </span>
      </div>

      {/* CTA Button */}
      <button
        onClick={() => !plan.buttonDisabled && onSelectPlan(plan.id)}
        className={getButtonStyles(plan.buttonVariant)}
        disabled={plan.buttonDisabled}
      >
        {t(plan.buttonText)}
      </button>

      {/* License Type Section */}
      <div className="mb-4">
        <h4 className="font-sans font-medium text-[20px] leading-[24px] text-card-title-gray mb-3">
          {t('pricing.carousel.licenseType')}
        </h4>
        <div className="flex items-center">
          <div className="w-6 h-6 mr-3">
            <img
              src={plan.licenseType?.includes('Multi-seat') ? usersIcon : userIcon}
              alt="License type icon"
              className="w-6 h-6"
            />
          </div>
          <span className="font-sans font-normal text-[20px] leading-[24px] text-card-text-gray whitespace-nowrap overflow-hidden text-ellipsis">
            {plan.licenseType ? t(plan.licenseType) : (plan.maxLicenses ? t('pricing.carousel.upToLicenses', {count: plan.maxLicenses}) : t('pricing.carousel.unlimitedLicenses'))}
          </span>
        </div>
      </div>

      {/* Features Section */}
      <div className="flex-1">
        <h4 className="font-sans font-medium text-[20px] leading-[24px] text-card-title-gray mb-3">
          {t('pricing.carousel.features')}
        </h4>
        <div className="space-y-3">
          {plan.features.slice(0, 4).map((feature, index) => (
            <div key={index} className="flex items-center">
              <div className="w-6 h-6 mr-3">
                <img
                  src={feature.included ? checkIcon : crossIcon}
                  alt={feature.included ? 'Included feature' : 'Not included feature'}
                  className="w-6 h-6"
                />
              </div>
              <span className="font-sans font-normal text-[20px] leading-[24px] text-card-text-gray whitespace-nowrap overflow-hidden text-ellipsis">
                {t(feature.text || feature.name || '')}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* See all features link */}
      <div className="mt-auto">
        <a
          href="#feature-comparison"
          onClick={handleScrollToFeatures}
          className="font-sans font-normal text-[18px] leading-[24px] text-card-link-purple underline cursor-pointer"
        >
          {t('pricing.carousel.seeAllFeatures')}
        </a>
      </div>
    </div>
  );
};