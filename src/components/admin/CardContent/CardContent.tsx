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
				'group block',
				isLink && 'transition-all duration-300 hover:scale-105 hover:border-primary/80'
			)}
			{...props}
		>
			<div className='relative h-full overflow-hidden rounded-lg border border-slate-300 font-sans shadow-md backdrop:blur-sm'>
				<div className='relative p-6'>
					<div className='flex items-start gap-4'>
						<div className='rounded-xl bg-primary/5 p-3 text-primary'>{icon}</div>
						<div className='min-w-0 flex-1'>
							<h3
								className={twMerge(
									'truncate font-semibold text-foreground',
									isLink && 'transition-colors duration-300 group-hover:text-primary'
								)}
							>
								{title}
							</h3>
							{description && <p className='mt-1 line-clamp-2 text-muted-foreground text-sm'>{description}</p>}
							{children}
						</div>
					</div>
				</div>
			</div>
		</Component>
	)
}
