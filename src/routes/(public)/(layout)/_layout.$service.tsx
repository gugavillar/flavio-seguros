import { ClientOnly, createFileRoute, useLoaderData } from '@tanstack/react-router'

import { servicePage } from '@/__mocks__/services'
import { BenefitsService, DescriptionService, FaqService, HeroService } from '@/components/public'

export const Route = createFileRoute('/(public)/(layout)/_layout/$service')({
	component: ServicePage,
	loader: ({ params }) => {
		return params.service
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
