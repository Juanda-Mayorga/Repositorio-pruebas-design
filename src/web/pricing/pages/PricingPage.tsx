import React, { useState, useRef, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { PricingCarouselCard } from '../components/PricingCarouselCard'
import { InfoCard } from '../components/InfoCard'
import { FeatureComparison } from '../components/FeatureComparison'
import { carouselPlans } from '../data/carouselPlans'
import pricingBackground from '../assets/backgrounds/pricing-background.png'
import { useTranslation } from 'react-i18next'

export const PricingPage: React.FC = () => {
	const { t } = useTranslation()
	const navigate = useNavigate()
	const [currentCarouselIndex, setCurrentCarouselIndex] = useState(0)
	const carouselRef = useRef<HTMLDivElement>(null)
	const isScrollingRef = useRef(false)

	const handleSelectPlan = (planId: string) => {
		// Navegar según el tipo de plan
		switch (planId) {
			case 'trial':
				navigate('/auth/select/trial')
				break
			case 'professional':
				navigate('/auth/select/professional')
				break
			case 'enterprise':
				navigate('/contact') // TODO: Crear formulario específico para enterprise
				break
			default:
				console.log('Plan no reconocido:', planId)
		}
	}

	const handleInfoCardCta = () => {
		// Para el InfoCard (probablemente educación), navegar a contacto
		navigate('/contact')
	}

	const handleCarouselNavigation = (index: number) => {
		setCurrentCarouselIndex(index)
		isScrollingRef.current = true

		if (carouselRef.current) {
			// Responsive spacing
			const getCardSpacing = () => {
				const width = window.innerWidth
				if (width < 640) return 16 // mobile
				if (width < 768) return 20 // small tablet
				if (width < 1000) return 24 // tablet
				return 28 // desktop
			}

			const cardWidth = 320 + getCardSpacing() // Width of card + responsive margin
			const containerWidth = carouselRef.current.clientWidth

			// Calcular posición para centrar la card
			const cardPosition = index * cardWidth + 320 / 2 // Centro de la card
			const scrollPosition = cardPosition - containerWidth / 2 // Centrar en el viewport

			carouselRef.current.scrollTo({
				left: Math.max(0, scrollPosition),
				behavior: 'smooth',
			})

			// Resetear flag después del scroll
			setTimeout(() => {
				isScrollingRef.current = false
			}, 500)
		}
	}

	useEffect(() => {
		const handleScroll = () => {
			if (carouselRef.current && !isScrollingRef.current) {
				// Responsive spacing
				const getCardSpacing = () => {
					const width = window.innerWidth
					if (width < 640) return 16 // mobile
					if (width < 768) return 20 // small tablet
					if (width < 1000) return 24 // tablet
					return 28 // desktop
				}

				const cardWidth = 320 + getCardSpacing() // Width of card + responsive margin
				const scrollLeft = carouselRef.current.scrollLeft
				const containerWidth = carouselRef.current.clientWidth

				// Encontrar la card más cercana al centro del viewport
				const viewportCenter = scrollLeft + containerWidth / 2
				let closestIndex = 0
				let closestDistance = Infinity

				for (let i = 0; i < carouselPlans.length; i++) {
					const cardCenter = i * cardWidth + 320 / 2
					const distance = Math.abs(viewportCenter - cardCenter)
					if (distance < closestDistance) {
						closestDistance = distance
						closestIndex = i
					}
				}

				setCurrentCarouselIndex(closestIndex)
			}
		}

		const carousel = carouselRef.current
		if (carousel) {
			carousel.addEventListener('scroll', handleScroll, { passive: true })
			return () => carousel.removeEventListener('scroll', handleScroll)
		}
	}, [carouselPlans.length])

	return (
		<div>
			{/* Header Section */}
			<div className='max-w-mamba mx-auto px-4 sm:px-6 lg:px-8 text-center pt-5 pb-10'>
				<h1 className='font-inter font-medium text-[40px] mobile:text-[40px] tablet:text-[54px] desktop:text-[64px] desktop-xl:text-[64px] bg-[linear-gradient(90deg,#9989EC_0%,#6E659F_51.92%,#333337_100%)] bg-clip-text text-transparent'>{t('pricing.title')}</h1>
			</div>

			{/* Carousel Cards */}
			<div className='mb-20'>
				{/* Mobile Carousel - hasta 1000px */}
				<div className='block max-[999px]:block min-[1000px]:hidden'>
					<div className='bg-cover tablet:bg-contain bg-center bg-no-repeat relative py-8 max-w-[1440px] mx-auto' style={{ backgroundImage: `url(${pricingBackground})` }}>
						<div ref={carouselRef} className='flex overflow-x-auto scrollbar-hide px-6' style={{ scrollSnapType: 'x mandatory' }}>
						{carouselPlans.map((plan, index) => (
							<div
								key={plan.id}
								className='flex-shrink-0 first:ml-4 last:mr-4'
								style={{
									scrollSnapAlign: 'center',
									marginRight: index < carouselPlans.length - 1 ? 'clamp(16px, 2.5vw, 28px)' : '0',
								}}
							>
								<PricingCarouselCard plan={plan} onSelectPlan={handleSelectPlan} />
							</div>
						))}
						</div>

						{/* Navigation Bars */}
						<div className='flex justify-center space-x-2 mt-6'>
						{carouselPlans.map((_, index) => (
							<button
								key={index}
								onClick={() => handleCarouselNavigation(index)}
								className={`
                  h-1 rounded-full transition-all duration-300 ease-in-out
                  ${index === currentCarouselIndex ? 'w-16 bg-gray-800' : 'w-8 bg-gray-300 hover:bg-gray-400'}
                `}
								aria-label={`Go to slide ${index + 1}`}
							/>
						))}
						</div>
					</div>

					{/* Info Card */}
					<div className='flex justify-center mt-6'>
						<InfoCard title={t('pricing.education.title')} description={t('pricing.education.description')} ctaText={t('pricing.education.cta')} onCtaClick={handleInfoCardCta} />
					</div>

				</div>

				{/* Desktop - desde 1000px */}
				<div className='hidden min-[1000px]:block'>
					<div className='bg-contain bg-center bg-no-repeat relative py-12 max-w-[1440px] mx-auto' style={{ backgroundImage: `url(${pricingBackground})` }}>
						<div className='max-w-mamba mx-auto px-4 sm:px-6 lg:px-8'>
						<div className='flex justify-center gap-4 tablet:gap-6 desktop:gap-8'>
							{carouselPlans.map((plan) => (
								<PricingCarouselCard key={plan.id} plan={plan} onSelectPlan={handleSelectPlan} />
							))}
						</div>

						</div>
					</div>

					{/* Info Card - Desktop */}
					<div className='flex justify-center mt-12'>
						<InfoCard title={t('pricing.education.title')} description={t('pricing.education.description')} ctaText={t('pricing.education.cta')} onCtaClick={handleInfoCardCta} />
					</div>
				</div>
			</div>

			{/* Feature Comparison - Único componente responsive */}
			<div id='feature-comparison' className='mt-8 px-4 max-[999px]:mb-0 min-[1000px]:max-w-mamba min-[1000px]:mx-auto min-[1000px]:mb-20 min-[1000px]:max-w-[876px] sm:min-[1000px]:px-6 lg:min-[1000px]:px-8'>
				<FeatureComparison />
			</div>
		</div>
	)
}
