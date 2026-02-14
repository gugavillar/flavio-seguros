import type { LucideIcon } from 'lucide-react'

import { HeaderSection, type HeaderSectionProps, PageContainer } from '@/components/core'

type ExplanationSectionCardProps = {
	icon: LucideIcon
	title: string
	description: string
}

type ExplanationSectionProps = {
	data: ExplanationSectionCardProps[]
	headerSectionProps: HeaderSectionProps
}

const ExplanationSectionCard = ({
	icon: Icon,
	title,
	description,
}: {
	icon: LucideIcon
	title: string
	description: string
}) => {
	return (
		<div className='rounded-lg bg-white text-gray-500 shadow-sm transition-all hover:shadow-2xl'>
			<div className='p-6 text-center'>
				<div className='mx-auto mb-4 flex size-14 items-center justify-center rounded-xl bg-primary-gradient text-white'>
					<Icon className='size-7' />
				</div>
				<h3 className='mb-2 font-semibold font-title text-black/80 text-lg'>{title}</h3>
				<p className='text-sm'>{description}</p>
			</div>
		</div>
	)
}

export const ExplanationSection = ({ data, headerSectionProps }: ExplanationSectionProps) => {
	return (
		<PageContainer>
			<div className='mx-auto max-w-3xl text-center'>
				<HeaderSection {...headerSectionProps} />
			</div>
			<div className='grid gap-6 md:grid-cols-2 lg:grid-cols-4'>
				{data.map((item) => (
					<ExplanationSectionCard key={item.title} {...item} />
				))}
			</div>
		</PageContainer>
	)
}
