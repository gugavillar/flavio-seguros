import { ClientOnly, createFileRoute, notFound, useLoaderData } from '@tanstack/react-router'

import { BenefitsService, DescriptionService, FaqService, HeroService } from '@/components/public'
import { TEN_MINUTES } from '@/constants'
import type { InsuranceType } from '@/contexts'
import { translateIcon } from '@/formatters'
import { client } from '@/lib/prismic'

export const Route = createFileRoute('/(public)/(layout)/_layout/$service')({
	beforeLoad: async ({ params }) => {
		try {
			const insurances = await client.getAllByType('insurance')
			const allUID = insurances.map((insurance) => insurance.uid)
			if (!allUID.includes(params.service)) {
				throw notFound()
			}
		} catch {
			throw notFound()
		}
	},
	component: ServicePage,
	loader: async ({ params }) => {
		const response = await client.getByUID('insurance', params.service)
		return response.data
	},
	staleTime: TEN_MINUTES,
	staticData: {
		breadcrumb: (ctx) => ctx.params?.service,
	},
})

function ServicePage() {
	const data: InsuranceType = useLoaderData({ from: '/(public)/(layout)/_layout/$service' })
	const transformFaqs = data['insurance-faq'].map((faq) => ({
		'faq-answer': faq['insurance-faq-answer'],
		'faq-question': faq['insurance-faq-question'],
	}))
	return (
		<ClientOnly>
			<HeroService
				badgeLabel={data['insurance-badge']}
				icon={translateIcon[data['insurance-icon']]}
				subtitle={data['insurance-subtitle']}
				title={data['insurance-title']}
			/>
			<DescriptionService
				insurance-content={data['insurance-content']}
				insurance-description={data['insurance-description']}
				insurance-indication={data['insurance-indication']}
			/>
			<BenefitsService insurance-benefits={data['insurance-benefits']} />
			<FaqService faqs={transformFaqs} />
		</ClientOnly>
	)
}
