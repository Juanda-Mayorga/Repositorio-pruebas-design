import { PricingPlan } from '../types';

export const pricingPlans: PricingPlan[] = [
  {
    id: 'starter',
    name: 'Starter',
    description: 'Perfecto para equipos pequeños que empiezan con la gestión de licencias',
    price: {
      monthly: 29,
      yearly: 290
    },
    maxLicenses: 50,
    maxUsers: 3,
    buttonText: 'Comenzar gratis',
    features: [
      { name: 'Hasta 50 licencias monitoreadas', included: true },
      { name: 'Dashboard básico en tiempo real', included: true },
      { name: 'Reportes mensuales', included: true },
      { name: 'Soporte por email', included: true },
      { name: 'Integración con 2 herramientas', included: true },
      { name: 'Alertas automáticas', included: false },
      { name: 'API acceso', included: false },
      { name: 'Soporte prioritario', included: false }
    ]
  },
  {
    id: 'professional',
    name: 'Professional',
    description: 'Ideal para empresas medianas que buscan optimizar costos',
    price: {
      monthly: 79,
      yearly: 790
    },
    maxLicenses: 200,
    maxUsers: 10,
    buttonText: 'Prueba 30 días gratis',
    popular: true,
    features: [
      { name: 'Hasta 200 licencias monitoreadas', included: true },
      { name: 'Dashboard avanzado en tiempo real', included: true },
      { name: 'Reportes semanales y mensuales', included: true },
      { name: 'Soporte por email y chat', included: true },
      { name: 'Integración con 10 herramientas', included: true },
      { name: 'Alertas automáticas', included: true },
      { name: 'API acceso básico', included: true },
      { name: 'Soporte prioritario', included: false }
    ]
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    description: 'Solución completa para grandes organizaciones',
    price: {
      monthly: 199,
      yearly: 1990
    },
    buttonText: 'Contactar ventas',
    features: [
      { name: 'Licencias ilimitadas', included: true },
      { name: 'Dashboard personalizable', included: true },
      { name: 'Reportes en tiempo real', included: true },
      { name: 'Soporte 24/7 dedicado', included: true },
      { name: 'Integraciones ilimitadas', included: true },
      { name: 'Alertas automáticas avanzadas', included: true },
      { name: 'API acceso completo', included: true },
      { name: 'Soporte prioritario', included: true }
    ]
  }
];