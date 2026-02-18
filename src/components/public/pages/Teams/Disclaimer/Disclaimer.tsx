import { disclaimer } from '@/__mocks__/teams'

const Informer = ({ title, description }: { title: string; description: string }) => {
	return (
		<div>
			<p className='mb-2 font-bold font-title text-4xl md:text-5xl'>{title}</p>
			<p className='text-sm'>{description}</p>
		</div>
	)
}

export const Disclaimer = () => {
	return (
		<div className='bg-primary-gradient text-white shadow-sm'>
			<div className='p-12'>
				<div className='mx-auto flex max-w-7xl flex-col justify-around gap-8 text-center md:grid-cols-4 md:flex-row'>
					{disclaimer.map((item) => (
						<Informer key={item.title} {...item} />
					))}
				</div>
			</div>
		</div>
	)
}
