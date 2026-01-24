import type { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

export const PageContainer = ({ children, id, className, ...props }: ComponentProps<'section'>) => {
	return (
		<section className={twMerge('py-20', className)} id={id} {...props}>
			<div className='container mx-auto px-4'>{children}</div>
		</section>
	)
}
