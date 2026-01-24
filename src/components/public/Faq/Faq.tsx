import { HeaderSection } from '@/components/core'

import { AccordionContentText } from '../AccordionContentText'

export const Faq = () => {
	return (
		<section className='py-20' id='faq'>
			<div className='container mx-auto px-4'>
				<div className='mx-auto max-w-3xl'>
					<HeaderSection
						badgeLabel='Perguntas frequentes'
						description='Encontre respostas para as perguntas mais comuns sobre nossos serviços.'
						title='Tire suas dúvidas'
					/>
					<div className='space-y-4'>
						<AccordionContentText />
					</div>
				</div>
			</div>
		</section>
	)
}
