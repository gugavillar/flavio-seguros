import { faqs } from '@/__mocks__/faq'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/core'

export const AccordionContentText = () => {
	return (
		<Accordion className='space-y-4' collapsible type='single'>
			{faqs.map((faq, index) => (
				<AccordionItem
					className='rounded-xl border border-gray-300 bg-white px-6 transition-shadow data-[state=open]:shadow-card'
					key={index}
					value={`item-${index}`}
				>
					<AccordionTrigger className='cursor-pointer py-6 text-left font-semibold text-black/80 hover:text-primary hover:no-underline data-[state=open]:text-primary'>
						{faq.question}
					</AccordionTrigger>
					<AccordionContent className='pb-6 text-gray-400 leading-relaxed'>{faq.answer}</AccordionContent>
				</AccordionItem>
			))}
		</Accordion>
	)
}
