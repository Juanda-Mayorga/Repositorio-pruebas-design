import React from 'react'
import { Accordion } from './Accordion'
import { featureComparisonData, FeatureItem } from '../data/featureComparison'
import checkIcon from '../assets/icons/check.svg'
import crossIcon from '../assets/icons/cross.svg'
import { useTranslation } from 'react-i18next'

interface FeatureComparisonProps {
	className?: string
}

export const FeatureCell: React.FC<{ value: boolean | string | number }> = ({ value }) => {
	const { t } = useTranslation()
	if (typeof value === 'boolean') {
		return <div className='flex justify-center'>{value ? <img src={checkIcon} alt='Included feature' className='w-6 h-6' /> : <img src={crossIcon} alt='Not included feature' className='w-6 h-6' />}</div>
	}

	if (value === 'Coming soon') {
		return (
			<span className='font-sans font-medium text-[14px] leading-[16px] text-center block px-2 py-1 rounded whitespace-nowrap max-w-[110px] mx-auto' style={{ backgroundColor: '#EAEAEA', color: '#919191' }}>
				{t('pricing.featureComparison.comingSoon')}
			</span>
		)
	}

	// Handle pattern with | separator (cross | check or 3 | 9)
	if (typeof value === 'string' && value.includes(' | ')) {
		const parts = value.split(' | ')
		return (
			<div className='flex justify-center items-center space-x-1'>
				{parts.map((part, index) => (
					<span key={index} className='flex items-center'>
						{part.trim() === 'check' ? (
							<img src={checkIcon} alt='Included' className='w-6 h-6' />
						) : part.trim() === 'cross' ? (
							<img src={crossIcon} alt='Not included' className='w-6 h-6' />
						) : !isNaN(Number(part.trim())) && part.trim() !== '' ? (
							<span className='w-5 h-5 rounded-full flex items-center justify-center font-sans font-medium text-[10px] leading-[12px] text-[#B8B0E6]' style={{ backgroundColor: '#F5F3FD' }}>
								{part.trim()}
							</span>
						) : (
							<span className='font-sans font-normal text-[12px] leading-[16px] text-gray-700'>{part.trim()}</span>
						)}
						{index < parts.length - 1 && (
							<span className='mx-2 text-[32px] font-medium leading-none flex items-center' style={{ color: '#DCDCDC' }}>
								|
							</span>
						)}
					</span>
				))}
			</div>
		)
	}

	// Handle numbers (including string numbers like "3")
	if (typeof value === 'number' || (!isNaN(Number(value)) && value !== '')) {
		return (
			<div className='flex justify-center'>
				<span className='w-6 h-6 rounded-full flex items-center justify-center font-sans font-medium text-[12px] leading-[16px] text-[#B8B0E6]' style={{ backgroundColor: '#F5F3FD' }}>
					{value}
				</span>
			</div>
		)
	}

	return <span className='font-sans font-normal text-[14px] leading-[20px] text-gray-700 text-center block'>{value}</span>
}

const MobileFeatureRow: React.FC<{ feature: FeatureItem }> = ({ feature }) => {
	const { t } = useTranslation()
	if (feature.isSubheader) {
		return (
			<div>
				<h4 className='font-sans font-medium text-[16px] leading-none text-gray-800 bg-white text-left'>{t(feature.name)}</h4>
				<div className='border-b border-gray-800 mt-1 mb-2'></div>
			</div>
		)
	}

	return (
		<div className='py-3 border-b border-gray-100 last:border-b-0'>
			<div className='grid grid-cols-3 gap-2 items-center'>
				<div className='font-sans font-normal text-[14px] leading-[20px] text-black'>{t(feature.name)}</div>
				<div className='flex justify-center'>
					<FeatureCell value={feature.trial} />
				</div>
				<div className='flex justify-center'>
					<FeatureCell value={feature.enterprise} />
				</div>
			</div>
		</div>
	)
}

export const FeatureComparison: React.FC<FeatureComparisonProps> = ({ className = '' }) => {
	const { t } = useTranslation()
	return (
		<div className={`w-full ${className}`}>
			{/* Mobile Version */}
			<div className='block tablet:hidden'>
				{/* Header */}
				<div className='mb-6'>
					<h2 className='font-sans font-medium text-[24px]  text-black text-start'>{t('pricing.featureComparison.title')}</h2>
					<p className='text-[#BDBDBD]'>{t('pricing.featureComparison.subtitle')}</p>
				</div>

				{/* Table Container */}
				<div className='border border-gray-200 rounded-[4px] bg-white overflow-hidden'>
					{/* Header */}
					<div className='grid grid-cols-3 gap-4 bg-white p-4 border-b border-gray-200 items-end'>
						<div className='font-sans font-medium text-[20px] leading-[24px] text-black text-left'>{t('pricing.featureComparison.feature')}</div>
						<div className='font-sans font-medium text-[20px] leading-[24px] text-black text-left'>{t('pricing.featureComparison.trialPro')}</div>
						<div className='font-sans font-medium text-[20px] leading-[24px] text-black text-left'>{t('pricing.featureComparison.enterprise')}</div>
					</div>

					{/* Accordion Sections */}
					<div className='p-2'>
						<div className='space-y-3'>
							{featureComparisonData.map((section, index) => (
								<Accordion key={section.title} title={t(section.title)} defaultOpen={index === 0}>
									<div className='space-y-0'>
										{section.features.map((feature) => (
											<MobileFeatureRow key={feature.name} feature={feature} />
										))}
									</div>
								</Accordion>
							))}
						</div>
					</div>
				</div>
			</div>

			{/* Desktop Version */}
			<div className='hidden tablet:block'>
				<div className='mb-6'>
					<h2 className='font-sans font-medium text-[24px]  text-black text-start'>{t('pricing.featureComparison.title')}</h2>
					<p className='text-[#BDBDBD]'>{t('pricing.featureComparison.subtitle')}</p>
				</div>

				<div className='bg-white border border-gray-200 rounded-[8px] overflow-hidden'>
					{/* Table Header */}
					<div className='grid grid-cols-3 bg-gray-50 border-b border-gray-200 items-end'>
						<div className='p-6 font-sans font-medium text-[18px] desktop:text-[32px] leading-[24px] text-black text-left'>{t('pricing.featureComparison.feature')}</div>
						<div className='p-6 font-sans font-medium text-[18px] desktop:text-[32px] leading-[24px] text-black text-left border-l border-gray-200'>
							{t('pricing.featureComparison.trialPro')}
						</div>
						<div className='p-6 font-sans font-medium text-[18px] desktop:text-[32px] leading-[24px] text-black text-left border-l border-gray-200'>{t('pricing.featureComparison.enterprise')}</div>
					</div>

					{/* Table Sections */}
					{featureComparisonData.map((section, sectionIndex) => (
						<div key={section.title}>
							{/* Section Header */}
							<div className='grid grid-cols-3 bg-gray-100 border-b border-gray-200'>
								<div className='p-4 font-sans font-medium text-[16px] desktop:text-[24px] leading-[24px] text-gray-800 col-span-3'>{t(section.title)}</div>
							</div>

							{/* Section Features */}
							{section.features.map((feature, featureIndex) => {
								if (feature.isSubheader) {
									return (
										<div key={feature.name} className='grid grid-cols-3 bg-white'>
											<div className='font-sans font-medium text-[14px] leading-none text-gray-800 text-left col-span-3 py-4 px-4'>
												{t(feature.name)}
												<div className='border-b border-gray-800 mt-1 mb-2'></div>
											</div>
										</div>
									)
								}

								return (
									<div key={feature.name} className={`grid grid-cols-3 border-b border-gray-100 hover:bg-gray-50 transition-colors ${sectionIndex === featureComparisonData.length - 1 && featureIndex === section.features.length - 1 ? 'border-b-0' : ''}`}>
										<div className='p-4 font-sans font-normal text-[16px] leading-[24px] text-black'>{t(feature.name)}</div>
										<div className='p-4 border-l border-gray-200'>
											<FeatureCell value={feature.trial} />
										</div>
										<div className='p-4 border-l border-gray-200'>
											<FeatureCell value={feature.enterprise} />
										</div>
									</div>
								)
							})}
						</div>
					))}
				</div>
			</div>
		</div>
	)
}
