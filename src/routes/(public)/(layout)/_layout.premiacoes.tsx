import { createFileRoute } from '@tanstack/react-router'

import { GlobalLoading } from '@/components/core'
import {
	HeaderAwards,
	MainAwards,
	type MainAwardsPrismicType,
	RecognizedQuality,
	TimelineAwards,
	type TimelineAwardsSlicePrismicType,
	TrustedPartners,
} from '@/components/public'
import { TEN_MINUTES } from '@/constants'
import { getPageData } from '@/lib/prismic'

export type AwardsPrismicType = {
	'awards-badge': string
	'awards-description': string
	'awards-title': string
	'timeline-award-title': string
	'timeline-award-description': string
	'partners-award-title': string
	'partners-award-description': string
	body: Array<{
		slice_type: string
	}>
}

export const Route = createFileRoute('/(public)/(layout)/_layout/premiacoes')({
	component: AwardsPage,
	head: () => ({
		meta: [
			{
				content:
					'Conheça as premiações e reconhecimentos que comprovam a excelência do nosso trabalho no mercado de seguros.',
				name: 'description',
			},
			{
				title: 'Flávio Seguros | Corretora de Seguros | Premiações e Reconhecimentos',
			},
		],
	}),
	loader: async () => {
		const response = await getPageData({
			data: {
				args: ['awards', 'premiacoes'],
				method: 'getByUID',
			},
		})
		return response.data
	},
	pendingComponent: () => <GlobalLoading />,
	staleTime: TEN_MINUTES,
	staticData: {
		breadcrumb: 'Premiações',
	},
})

function AwardsPage() {
	const response = Route.useLoaderData()
	const mainAwards = response.body.find((slice: MainAwardsPrismicType) => slice.slice_type === 'main-awards')
	const timelineAwards = response.body.filter(
		(slice: TimelineAwardsSlicePrismicType) => slice.slice_type === 'timeline-award'
	)
	return (
		<>
			<HeaderAwards
				awards-badge={response['awards-badge']}
				awards-description={response['awards-description']}
				awards-title={response['awards-title']}
			/>
			<MainAwards data={mainAwards} />
			<TimelineAwards
				data={timelineAwards}
				timeline-award-description={response['timeline-award-description']}
				timeline-award-title={response['timeline-award-title']}
			/>
			<TrustedPartners
				partners-award-description={response['partners-award-description']}
				partners-award-title={response['partners-award-title']}
			/>
			<RecognizedQuality />
		</>
	)
}
