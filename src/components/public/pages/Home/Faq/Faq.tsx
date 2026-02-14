import { faqs } from '@/__mocks__/faq'
import { AccordionContentText, HeaderSection, PageContainer } from '@/components/core'
import { NAVIGATION_HASH } from '@/utils'

export const Faq = () => {
	return (
		<PageContainer id={NAVIGATION_HASH.FAQ}>
			<div className='mx-auto max-w-3xl text-center'>
				<HeaderSection
					badgeLabel='Perguntas frequentes'
					className='max-lg:mx-auto max-lg:max-w-2xl'
					description='Encontre respostas para as perguntas mais comuns sobre nossos seguros.'
					title='Tire suas dúvidas'
				/>
				<div className='space-y-4'>
					<AccordionContentText faqs={faqs} />
				</div>
			</div>
		</PageContainer>
	)
}
