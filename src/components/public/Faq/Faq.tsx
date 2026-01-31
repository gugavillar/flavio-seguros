import { faqs } from '@/__mocks__/faq'
import { HeaderSection, PageContainer } from '@/components/core'

import { AccordionContentText } from '../AccordionContentText'

export const Faq = () => {
	return (
		<PageContainer id='faq'>
			<div className='mx-auto max-w-3xl text-center'>
				<HeaderSection
					badgeLabel='Perguntas frequentes'
					description='Encontre respostas para as perguntas mais comuns sobre nossos serviços.'
					title='Tire suas dúvidas'
				/>
				<div className='space-y-4'>
					<AccordionContentText faqs={faqs} />
				</div>
			</div>
		</PageContainer>
	)
}
