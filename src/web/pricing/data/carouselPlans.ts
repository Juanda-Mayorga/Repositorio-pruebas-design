import { PricingPlan } from '../types'

export const carouselPlans: PricingPlan[] = [
	{
		id: 'trial',
		name: 'pricing.carousel.trial.name',
		description: 'pricing.carousel.trial.description',
		price: {
			monthly: 0,
			yearly: 0,
		},
		priceNote: 'pricing.carousel.trial.priceNote',
		licenseType: 'pricing.carousel.trial.licenseType',
		features: [
			{ text: 'pricing.carousel.trial.features.filtersByCategory', included: true },
			{ text: 'pricing.carousel.trial.features.ruleTypesSingle', included: true },
			{ text: 'pricing.carousel.trial.features.certificationsManagement', included: false },
			{ text: 'pricing.carousel.trial.features.templatesDefault', included: true },
		],
		popular: false,
		buttonText: 'pricing.carousel.trial.buttonText',
		buttonVariant: 'outline',
	},
	{
		id: 'professional',
		name: 'pricing.carousel.professional.name',
		description: 'pricing.carousel.professional.description',
		price: {
			monthly: 0,
			yearly: 649,
		},
		priceNote: 'pricing.carousel.professional.priceNote',
		licenseType: 'pricing.carousel.professional.licenseType',
		features: [
			{ text: 'pricing.carousel.professional.features.filtersByCategory', included: true },
			{ text: 'pricing.carousel.professional.features.ruleTypesSingle', included: true },
			{ text: 'pricing.carousel.professional.features.certificationsManagement', included: true },
			{ text: 'pricing.carousel.professional.features.templatesCustom', included: true },
		],
		popular: true,
		buttonText: 'pricing.carousel.professional.buttonText',
		buttonVariant: 'primary',
	},
	{
		id: 'enterprise',
		name: 'pricing.carousel.enterprise.name',
		description: 'pricing.carousel.enterprise.description',
		price: {
			monthly: 0,
			yearly: 849,
		},
		priceNote: 'pricing.carousel.enterprise.priceNote',
		licenseType: 'pricing.carousel.enterprise.licenseType',
		features: [
			{ text: 'pricing.carousel.enterprise.features.filtersByCategory', included: true },
			{ text: 'pricing.carousel.enterprise.features.ruleTypesAll', included: true },
			{ text: 'pricing.carousel.enterprise.features.certificationsManagement', included: true },
			{ text: 'pricing.carousel.enterprise.features.templatesCustomSharing', included: true },
		],
		popular: false,
		buttonText: 'pricing.carousel.enterprise.buttonText',
		buttonVariant: 'secondary',
	},
]