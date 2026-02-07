import { importantTips } from '@/__mocks__/assistance'
import { PageContainer } from '@/components/core'

const TipLine = ({ index, title, description }: { index: number; title: string; description: string }) => {
	return (
		<div className='flex items-center gap-4 rounded-xl bg-primary/15 p-4'>
			<div className='flex size-8 shrink-0 items-center justify-center rounded-full bg-primary-gradient text-white'>
				{index}
			</div>
			<div>
				<h4 className='mb-1 font-semibold text-black/80'>{title}</h4>
				<p className='text-gray-500 text-sm'>{description}</p>
			</div>
		</div>
	)
}

export const Tips = () => {
	return (
		<PageContainer>
			<div className='mx-auto max-w-4xl'>
				<div className='rounded-2xl bg-white p-8 shadow-2xl md:p-12'>
					<h2 className='mb-6 text-center font-semibold font-title text-2xl text-black/80 md:text-3xl'>
						Dicas importantes
					</h2>
					<div className='space-y-4'>
						{importantTips.map((tip, index) => (
							<TipLine index={index + 1} key={tip.title} {...tip} />
						))}
					</div>
				</div>
			</div>
		</PageContainer>
	)
}
