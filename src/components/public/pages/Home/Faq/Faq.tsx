import { AccordionContentText, HeaderSection, PageContainer } from '@/components/core'
import { NAVIGATION_HASH } from '@/utils'

export type FaqPrismicType = {
	id: string
	items: Array<{
		'faq-question': string
		'faq-answer': string
	}>
	primary: {
		'faq-badge': string
		'faq-description': string
		'faq-title': string
	}
	slice_type: string
}

export const Faq = ({ data: { primary, items } }: { data: FaqPrismicType }) => {
	return (
		<PageContainer id={NAVIGATION_HASH.FAQ}>
			<div className='mx-auto max-w-3xl text-center'>
				<HeaderSection
					badgeLabel={primary['faq-badge']}
					className='max-lg:mx-auto max-lg:max-w-2xl'
					description={primary['faq-description']}
					title={primary['faq-title']}
				/>
				<div className='space-y-4'>
					<AccordionContentText faqs={items} />
				</div>
			</div>
		</PageContainer>
	)
}
