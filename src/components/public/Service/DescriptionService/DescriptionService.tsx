import { Fragment } from 'react'

import { PageContainer } from '@/components/core'

type DescriptionServiceProps = {
	title: string
	content: Array<string>
	indications: Array<string>
}

export const DescriptionService = ({ title, content, indications }: DescriptionServiceProps) => {
	return (
		<PageContainer className='py-20'>
			<div className='container mx-auto max-w-4xl'>
				<h2 className='mb-8 text-center font-bold font-title text-3xl text-black/80 md:text-4xl'> {title}</h2>
				<div className='space-y-6'>
					{content?.map((item, index) => (
						<Fragment key={index}>
							<p className='text-justify text-gray-500 text-lg leading-relaxed'>{item}</p>
						</Fragment>
					))}
				</div>
				<div className='mt-10 rounded-2xl border border-gray-200 bg-primary/10 p-6'>
					<h3 className='mb-4 font-semibold text-black/80 text-xl'>Para quem é indicado:</h3>
					<ul className='space-y-3'>
						{indications?.map((item, index) => (
							<Fragment key={index}>
								<li className='flex items-start gap-3'>
									<span className='mt-2 size-2 shrink-0 rounded-full bg-primary' />
									<span className='text-gray-500'>{item}</span>
								</li>
							</Fragment>
						))}
					</ul>
				</div>
			</div>
		</PageContainer>
	)
}
