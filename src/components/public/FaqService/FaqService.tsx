import { PageContainer } from '@/components/core'

import { AccordionContentText } from '../AccordionContentText'

type FaqServiceProps = {
	faqs: Array<{
		question: string
		answer: string
	}>
}

export const FaqService = ({ faqs }: FaqServiceProps) => {
	return (
		<PageContainer className='py-20'>
			<div className='container mx-auto max-w-3xl'>
				<h2 className='mb-12 text-center font-bold font-title text-3xl md:text-4xl'>Perguntas frequentes</h2>
				<div className='space-y-4'>
					<AccordionContentText faqs={faqs} />
				</div>
			</div>
		</PageContainer>
	)
}
