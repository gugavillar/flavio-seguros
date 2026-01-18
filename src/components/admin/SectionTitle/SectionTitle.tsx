import type { ReactNode } from 'react'

type SectionTitleProps = {
	title: string
	icon: ReactNode
}

export const SectionTitle = ({ title, icon }: SectionTitleProps) => {
	return (
		<div className='flex items-center gap-3'>
			<div className='p-2 rounded-lg bg-primary/25 text-primary'>{icon}</div>
			<h2 className='text-xl font-semibold tracking-tight'>{title}</h2>
			<div className='flex-1 h-px bg-primary/40' />
		</div>
	)
}
