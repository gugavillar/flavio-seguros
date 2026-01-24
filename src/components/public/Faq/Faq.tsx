import { Badge } from '@/components/core'

import { AccordionContentText } from '../AccordionContentText'

export const Faq = () => {
	return (
		<section className='py-20' id='faq'>
			<div className='container mx-auto px-4'>
				<div className='mx-auto max-w-3xl'>
					<div className='mb-12 text-center'>
						<Badge label='Perguntas frequentes' />
						<h2 className='mb-4 font-bold font-title text-3xl text-foreground md:text-4xl'>Tire suas dúvidas</h2>
						<p className='text-gray-400 text-lg'>
							Encontre respostas para as perguntas mais comuns sobre nossos serviços.
						</p>
					</div>
					<div className='space-y-4'>
						<AccordionContentText />
					</div>
				</div>
			</div>
		</section>
	)
}
