import type { ComponentProps, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

type FloatCardProps = ComponentProps<'div'> & {
	icon: ReactNode
	title: string
	description: string
}

export const FloatCard = ({ className, icon, title, description, ...props }: FloatCardProps) => {
	return (
		<div className={twMerge('absolute rounded-xl bg-white p-4 shadow-lg', className)} {...props}>
			<div className='flex items-center gap-3'>
				<div className='flex size-12 items-center justify-center rounded-full bg-primary-gradient'> {icon}</div>
				<div>
					<p className='font-semibold text-black/80'>{title}</p>
					<p className='text-gray-400 text-sm'>{description}</p>
				</div>
			</div>
		</div>
	)
}
