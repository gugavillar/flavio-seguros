import { createFileRoute, useLoaderData } from '@tanstack/react-router'

import { servicePage } from '@/__mocks__/services'
import { DescriptionService, HeroService } from '@/components/public'

export const Route = createFileRoute('/(public)/(layout)/_layout/$service')({
	component: ServicePage,
	loader: ({ params }) => {
		return params.service
	},
})

function ServicePage() {
	const service: keyof typeof servicePage = useLoaderData({ from: '/(public)/(layout)/_layout/$service' })
	return (
		<>
			<HeroService
				badgeLabel={servicePage[service].badgeLabel}
				icon={servicePage[service].icon}
				subtitle={servicePage[service].subtitle}
				title={servicePage[service].title}
			/>
			<DescriptionService {...servicePage[service].description} />
		</>
	)
}
