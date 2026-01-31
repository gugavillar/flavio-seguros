import { services } from '@/__mocks__/services'
import { DescriptionCard, HeaderSection, PageContainer } from '@/components/core'

export const Services = () => {
	return (
		<PageContainer id='servicos'>
			<div className='mx-auto mb-16 max-w-2xl text-center'>
				<HeaderSection
					badgeLabel='Nossos Serviços'
					description='Trabalhamos com as melhores seguradoras do mercado para oferecer as melhores condições e coberturas para você.'
					title='Seguros para todas as suas necessidades'
				/>
			</div>
			<div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
				{services.map((item) => (
					<DescriptionCard key={item.title} {...item} />
				))}
			</div>
		</PageContainer>
	)
}
