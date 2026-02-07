import { insurances } from '@/__mocks__/insurances'
import { HeaderSection, PageContainer } from '@/components/core'

const PartnerCard = ({ name, image }: { name: string; image: string }) => {
	return (
		<div className='rounded-lg border border-gray-200 bg-white text-gray-500 shadow-sm transition-all duration-300 hover:border-primary hover:shadow-soft-white'>
			<div className='flex aspect-square flex-col items-center justify-center p-6'>
				<div className='mb-3 flex size-16 items-center justify-center rounded-xl'>
					<img alt={name} src={image} />
				</div>
				<p className='text-center text-gray-500 text-xs'>{name}</p>
			</div>
		</div>
	)
}

export const TrustedPartners = () => {
	return (
		<PageContainer>
			<div className='mx-auto mb-16 max-w-2xl text-center'>
				<HeaderSection
					description='Trabalhamos com as maiores seguradoras do Brasil para oferecer as melhores opções'
					title='Parceiros de confiança'
				/>
			</div>
			<div className='mx-auto grid max-w-5xl grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-6'>
				{insurances.map((insurance) => (
					<PartnerCard image={insurance.image} key={insurance.name} name={insurance.name} />
				))}
			</div>
		</PageContainer>
	)
}
