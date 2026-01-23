import type { ReactNode } from 'react'

type SectionTitleProps = {
	title: string
	icon: ReactNode
}

export const SectionTitle = ({ title, icon }: SectionTitleProps) => {
	return (
		<div className='flex items-center gap-3'>
			<div className='rounded-lg bg-primary/25 p-2 text-primary'>{icon}</div>
			<h2 className='font-semibold text-xl tracking-tight'>{title}</h2>
			<div className='h-px flex-1 bg-primary/40' />
		</div>
	)
}
