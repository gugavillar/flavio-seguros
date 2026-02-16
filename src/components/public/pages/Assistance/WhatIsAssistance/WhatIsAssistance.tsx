import { ExplanationSection } from '@/components/core'
import { translateIcon } from '@/formatters'

export type WhatIsAssistancePrismicType = {
	primary: {
		'assistance-what-is-badge': string
		'assistance-what-is-title': string
		'assistance-what-is-description': string
	}
	slice_type: string
	items: Array<{
		'assistance-what-is-card-title': string
		'assistance-what-is-description': string
		'assistance-what-is-icon': keyof typeof translateIcon
	}>
}

export const WhatIsAssistance = ({ data: { primary, items } }: { data: WhatIsAssistancePrismicType }) => {
	const data = items.map((item) => ({
		description: item['assistance-what-is-description'],
		icon: translateIcon[item['assistance-what-is-icon']],
		title: item['assistance-what-is-card-title'],
	}))
	return (
		<ExplanationSection
			data={data}
			headerSectionProps={{
				badgeLabel: primary['assistance-what-is-badge'],
				description: primary['assistance-what-is-description'],
				title: primary['assistance-what-is-title'],
			}}
		/>
	)
}
