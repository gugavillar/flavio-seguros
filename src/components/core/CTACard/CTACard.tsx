import type { LucideIcon } from 'lucide-react'
import type { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

type CTACardProps = ComponentProps<'div'> & {
	icon: LucideIcon
	title: string
	description: string
}

export const CTACard = ({ icon: Icon, title, description, className, children, ...props }: CTACardProps) => {
	return (
		<div className={twMerge('bg-primary-gradient text-white shadow-md', className)} {...props}>
			<div className='p-12 text-center'>
				<Icon className='mx-auto mb-6 size-16' />
				<h2 className='mb-4 font-bold font-title text-3xl md:text-4xl'>{title}</h2>
				<p className='mx-auto mb-8 max-w-2xl text-slate-200'>{description}</p>
				{children}
			</div>
		</div>
	)
}
