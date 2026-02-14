import type { ComponentProps, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

import { Badge } from '../Badge'

export type HeaderSectionProps = ComponentProps<'div'> & {
	badgeLabel?: string
	title: string
	description: string
	icon?: ReactNode
}

export const HeaderSection = ({ badgeLabel, title, description, icon, className, ...props }: HeaderSectionProps) => {
	return (
		<div className={twMerge('mb-12', className)} {...props}>
			{badgeLabel && <Badge icon={icon} label={badgeLabel} />}
			<h2 className='mb-4 font-bold font-title text-3xl text-black/80 md:text-4xl'>{title}</h2>
			<p className='text-gray-500 text-lg'>{description}</p>
		</div>
	)
}
