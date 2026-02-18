import type { LucideIcon } from 'lucide-react'

import { PageContainer } from '@/components/core'
import { translateIcon } from '@/formatters'

export type TeamsWhyDifferencePrismicType = {
	primary: {
		'teams-why-difference-title': string
		'teams-why-difference-description': string
	}
	slice_type: string
	items: Array<{
		'teams-why-difference-card-title': string
		'teams-why-difference-card-description': string
		'teams-why-difference-card-icon': keyof typeof translateIcon
	}>
}

type ValueCardProps = {
	icon: LucideIcon
	title: string
	description: string
}

const ValueCard = ({ icon: Icon, title, description }: ValueCardProps) => {
	return (
		<div className='rounded-lg border border-gray-200 bg-white text-center text-gray-500 shadow-sm transition-all duration-300 hover:shadow-soft-white'>
			<div className='p-6 pt-8'>
				<div className='mx-auto mb-4 flex size-14 items-center justify-center rounded-2xl bg-primary/10'>
					<Icon className='size-7 text-primary' />
				</div>
				<h3 className='mb-2 font-semibold text-black/80 text-lg'>{title}</h3>
				<p className='text-gray-500 text-sm leading-relaxed'>{description}</p>
			</div>
		</div>
	)
}

export const SmallTeam = ({ data: { primary, items } }: { data: TeamsWhyDifferencePrismicType }) => {
	return (
		<PageContainer>
			<div className='mb-16 text-center'>
				<h2 className='mb-4 font-bold font-title text-3xl text-black/80 md:text-4xl'>
					{primary['teams-why-difference-title']}
				</h2>
				<p className='mx-auto max-w-2xl text-gray-500'>{primary['teams-why-difference-description']}</p>
			</div>
			<div className='mx-auto grid max-w-7xl gap-6 sm:grid-cols-2 lg:grid-cols-4'>
				{items.map((item) => {
					const icon = translateIcon[item['teams-why-difference-card-icon']]
					return (
						<ValueCard
							description={item['teams-why-difference-card-description']}
							icon={icon}
							key={item['teams-why-difference-card-title']}
							title={item['teams-why-difference-card-title']}
						/>
					)
				})}
			</div>
		</PageContainer>
	)
}
