import { Medal } from 'lucide-react'

import { timelineAwards } from '@/__mocks__/awards'
import { HeaderSection, PageContainer } from '@/components/core'

const CardAward = ({ title, description }: { title: string; description: string }) => {
	return (
		<div className='rounded-lg border border-gray-200 bg-white text-gray-500 shadow-sm transition-all duration-300 hover:shadow-soft-white'>
			<div className='p-5'>
				<div className='flex items-start gap-3'>
					<Medal className='mt-0.5 size-5 shrink-0 text-primary' />
					<div>
						<h4 className='font-semibold text-black/80 text-sm'>{title}</h4>
						<p className='mt-1 text-xs'>{description}</p>
					</div>
				</div>
			</div>
		</div>
	)
}

const Timeline = ({ year, awards }: { year: string; awards: { title: string; description: string }[] }) => {
	return (
		<div className='mb-8 flex gap-6 last:mb-0'>
			<div className='flex flex-col items-center'>
				<div className='flex size-16 items-center justify-center rounded-full bg-primary-gradient font-bold text-lg text-white shadow-soft-white'>
					{year}
				</div>
				<div className='mt-4 h-2.5 w-0.5 bg-primary/60' />
			</div>
			<div className='flex-1'>
				<div className='grid gap-4 md:grid-cols-2'>
					{awards.map((award) => (
						<CardAward key={award.title} {...award} />
					))}
				</div>
			</div>
		</div>
	)
}

export const TimelineAwards = () => {
	return (
		<PageContainer>
			<div className='mb-16 text-center'>
				<HeaderSection
					description='Uma história construída com dedicação e reconhecimento'
					title='Nossa trajetória de conquistas'
				/>
			</div>
			<div className='mx-auto max-w-4xl'>
				{timelineAwards.map((item) => (
					<Timeline key={item.year} {...item} />
				))}
			</div>
		</PageContainer>
	)
}
