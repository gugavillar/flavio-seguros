import type { LucideIcon } from 'lucide-react'

import { Card } from '../Card'

export const DescriptionCard = ({
	title,
	description,
	icon: Icon,
}: {
	title: string
	description: string
	icon: LucideIcon
}) => {
	return (
		<Card className='group cursor-pointer'>
			<div className='flex flex-col space-y-1.5 p-6'>
				<div className='mb-4 flex size-14 items-center justify-center rounded-xl bg-primary-gradient text-white transition-transform duration-300 group-hover:scale-110'>
					<Icon />
				</div>
				<h3 className='font-semibold font-title text-black/80 text-xl tracking-tight transition-colors group-hover:text-primary'>
					{title}
				</h3>
			</div>
			<div className='p-6 pt-0'>
				<p className='text-gray-500 text-sm leading-relaxed'>{description}</p>
			</div>
		</Card>
	)
}
