import { ClientOnly, createFileRoute, notFound, useLoaderData } from '@tanstack/react-router'
import z from 'zod'

import { servicePage } from '@/__mocks__/services'
import { BenefitsService, DescriptionService, FaqService, HeroService } from '@/components/public'

const serviceSchema = z.object({ service: z.enum(Object.keys(servicePage)) })

export const Route = createFileRoute('/(public)/(layout)/_layout/$service')({
	beforeLoad: ({ params }) => {
		try {
			serviceSchema.parse({ service: params.service })
		} catch {
			throw notFound()
		}
	},
	component: ServicePage,
	loader: ({ params }) => params.service,
	staticData: {
		breadcrumb: (ctx) => ctx.params?.service,
	},
})

function ServicePage() {
	const service: keyof typeof servicePage = useLoaderData({ from: '/(public)/(layout)/_layout/$service' })

	return (
		<ClientOnly>
			<HeroService
				badgeLabel={servicePage[service].badgeLabel}
				icon={servicePage[service].icon}
				subtitle={servicePage[service].subtitle}
				title={servicePage[service].title}
			/>
			<DescriptionService {...servicePage[service].description} />
			<BenefitsService benefits={servicePage[service].benefits} />
			<FaqService faqs={servicePage[service].faqs} />
		</ClientOnly>
	)
}
