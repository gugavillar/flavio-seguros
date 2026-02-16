import { ExplanationSection } from '@/components/core'
import { translateIcon } from '@/formatters'
import type { CareersPrismicType } from '@/routes/(public)/(layout)/_layout.trabalhe-conosco'

export const WhyWork = ({ body }: { body: CareersPrismicType['body'][number] }) => {
	const data = body.items.map((item) => ({
		description: item['careers-why-work-card-description'],
		icon: translateIcon[item['careers-why-work-card-icon']],
		title: item['careers-why-work-card-title'],
	}))

	return (
		<ExplanationSection
			data={data}
			headerSectionProps={{
				description: body.primary['careers-why-work-description'],
				title: body.primary['careers-why-work-title'],
			}}
		/>
	)
}
