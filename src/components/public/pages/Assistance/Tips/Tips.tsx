import { PageContainer } from '@/components/core'

export type TipsPrismicType = {
	primary: {
		'assistance-tips-title': string
	}
	slice_type: string
	items: Array<{
		'assistance-tips-title': string
		'assistance-tips-description': string
	}>
}

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

export const Tips = ({ data: { primary, items } }: { data: TipsPrismicType }) => {
	return (
		<PageContainer>
			<div className='mx-auto max-w-4xl'>
				<div className='rounded-2xl bg-white p-8 shadow-2xl md:p-12'>
					<h2 className='mb-6 text-center font-semibold font-title text-2xl text-black/80 md:text-3xl'>
						{primary['assistance-tips-title']}
					</h2>
					<div className='space-y-4'>
						{items.map((tip, index) => (
							<TipLine
								description={tip['assistance-tips-description']}
								index={index + 1}
								key={tip['assistance-tips-title']}
								title={tip['assistance-tips-title']}
							/>
						))}
					</div>
				</div>
			</div>
		</PageContainer>
	)
}
