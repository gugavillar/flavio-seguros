import type { LucideIcon } from 'lucide-react'

import { mainAwards } from '@/__mocks__/awards'
import { Badge, PageContainer } from '@/components/core'

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

export const MainAwards = () => {
	return (
		<PageContainer>
			<div className='mx-auto grid max-w-5xl gap-8 md:grid-cols-3'>
				{mainAwards.map((item) => (
					<AwardCard
						award={item.organization}
						badgeLabel={item.year}
						description={item.description}
						icon={item.icon}
						key={item.title}
						title={item.title}
					/>
				))}
			</div>
		</PageContainer>
	)
}
