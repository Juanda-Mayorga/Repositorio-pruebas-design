import React from 'react'
import { CTAButton } from './CTAButton'

interface InfoCardProps {
	title: string
	description: string
	ctaText: string
	onCtaClick?: () => void
}

export const InfoCard: React.FC<InfoCardProps> = ({ title, description, ctaText, onCtaClick }) => {
	return (
		<div className='flex flex-col tablet:flex-row w-full tablet:max-w-[674px] border border-gray-300 rounded-[4px] p-4 gap-[5%] bg-white items-center mx-[3%]'>
			{/* Contenido izquierdo */}
			<div className='flex flex-col gap-4 flex-1 w-full tablet:w-auto'>
				<h3 className='font-sans font-medium text-[24px] leading-[20px] text-black'>{title}</h3>
				<p className='font-sans font-normal text-[16px] leading-[24px] text-gray-700'>{description}</p>
			</div>

			{/* CTA */}
			<div className=''>
				<CTAButton variant='contained' onClick={onCtaClick} className='w-full'>
					{ctaText}
				</CTAButton>
			</div>
		</div>
	)
}
