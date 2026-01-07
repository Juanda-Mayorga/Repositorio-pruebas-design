export interface PricingFeature {
  name?: string; // Para compatibilidad con datos antiguos
  text?: string; // Para nuevos datos
  included: boolean;
  description?: string;
}

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'disabled';

export interface PricingPlan {
  id: string;
  name: string;
  description: string;
  disabled?: boolean;
  price: {
    monthly: number;
    yearly: number;
  };
  priceNote?: string; // Nuevo campo para "/ 14 days", "/year", etc.
  licenseType?: string; // Nuevo campo para "Single seat", "Multi-seat", etc.
  features: PricingFeature[];
  popular?: boolean;
  buttonText: string;
  buttonVariant?: ButtonVariant; // Nuevo campo para tipo de botón
  buttonDisabled?: boolean; // Nuevo campo para estado deshabilitado
  maxLicenses?: number;
  maxUsers?: number;
}

export type BillingPeriod = 'monthly' | 'yearly';