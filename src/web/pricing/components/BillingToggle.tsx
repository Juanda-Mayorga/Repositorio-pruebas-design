import React from 'react';
import { BillingPeriod } from '../types';
import { cn } from '../../../shared/utils/cn';

interface BillingToggleProps {
  period: BillingPeriod;
  onToggle: (period: BillingPeriod) => void;
}

export const BillingToggle: React.FC<BillingToggleProps> = ({ period, onToggle }) => {
  return (
    <div className="flex items-center justify-center mb-12">
      <div className="bg-gray-100 p-1 rounded-lg flex">
        <button
          onClick={() => onToggle('monthly')}
          className={cn(
            'px-6 py-2 rounded-md text-sm font-medium transition-all',
            period === 'monthly'
              ? 'bg-white text-gray-900 shadow-sm'
              : 'text-gray-600 hover:text-gray-900'
          )}
        >
          Mensual
        </button>
        <button
          onClick={() => onToggle('yearly')}
          className={cn(
            'px-6 py-2 rounded-md text-sm font-medium transition-all relative',
            period === 'yearly'
              ? 'bg-white text-gray-900 shadow-sm'
              : 'text-gray-600 hover:text-gray-900'
          )}
        >
          Anual
          <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full">
            20% OFF
          </span>
        </button>
      </div>
    </div>
  );
};