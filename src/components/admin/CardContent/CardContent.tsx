import type { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

type CardContentProps<T extends ElementType = 'div'> = {
	as?: T
	icon: ReactNode
	title: string
	description?: string
} & ComponentPropsWithoutRef<T>

export const CardContent = <T extends ElementType = 'div'>({
	as,
	icon,
	title,
	description,
	children,
	...props
}: CardContentProps<T>) => {
	const Component = as || 'div'
	const isLink = as === 'a'
	return (
		<Component
			className={twMerge(
				'block group',
				isLink && 'hover:scale-105 transition-all duration-300 hover:border-primary/80'
			)}
			{...props}
		>
			<div className='rounded-lg border shadow-md h-full backdrop:blur-sm border-slate-300 overflow-hidden relative font-sans'>
				<div className='p-6 relative'>
					<div className='flex items-start gap-4'>
						<div className='p-3 rounded-xl bg-primary/5 text-primary'>{icon}</div>
						<div className='flex-1 min-w-0'>
							<h3
								className={twMerge(
									'font-semibold text-foreground truncate',
									isLink && 'group-hover:text-primary transition-colors duration-300'
								)}
							>
								{title}
							</h3>
							{description && <p className='text-sm text-muted-foreground mt-1 line-clamp-2'>{description}</p>}
							{children}
						</div>
					</div>
				</div>
			</div>
		</Component>
	)
}
