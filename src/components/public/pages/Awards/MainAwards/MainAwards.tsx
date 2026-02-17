import type { LucideIcon } from 'lucide-react'

import { Badge, PageContainer } from '@/components/core'
import { translateIcon } from '@/formatters'

export type MainAwardsPrismicType = {
	slice_type: string
	items: Array<{
		'award-main-title': string
		'award-main-award-name': string
		'award-main-year': number
		'award-main-description': string
		'award-main-icon': keyof typeof translateIcon
	}>
}

const AwardCard = ({
	icon: Icon,
	badgeLabel,
	title,
	award,
	description,
}: {
	icon: LucideIcon
	badgeLabel: string
	title: string
	award: string
	description: string
}) => {
	return (
		<div className='group relative overflow-hidden rounded-lg border border-gray-200 bg-white text-gray-500 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-soft-white'>
			<div className='absolute top-0 right-0 left-0 h-1 bg-primary-gradient' />
			<div className='px-5 py-8 text-center'>
				<div className='mx-auto mb-6 flex size-20 items-center justify-center rounded-full bg-primary-gradient transition-transform duration-300 group-hover:scale-110'>
					<Icon className='size-10 text-white' />
				</div>
				<Badge className='mb-4' label={badgeLabel} />
				<h3 className='mb-2 font-bold font-title text-black/80 text-lg'>{title}</h3>
				<p className='mb-3 text-primary text-sm'>{award}</p>
				<p className='text-sm'>{description}</p>
			</div>
		</div>
	)
}

export const MainAwards = ({ data: { items } }: { data: MainAwardsPrismicType }) => {
	return (
		<PageContainer>
			<div className='mx-auto grid max-w-5xl gap-8 md:grid-cols-3'>
				{items.map((item) => {
					const icon = translateIcon[item['award-main-icon']]
					return (
						<AwardCard
							award={item['award-main-award-name']}
							badgeLabel={String(item['award-main-year'])}
							description={item['award-main-description']}
							icon={icon}
							key={item['award-main-title']}
							title={item['award-main-title']}
						/>
					)
				})}
			</div>
		</PageContainer>
	)
}
