import { useDebounce } from '@uidotdev/usehooks'
import { Shield } from 'lucide-react'
import { useState } from 'react'

import { insurances } from '@/__mocks__/insurances'

import { CardContent } from '../CardContent'
import { SectionTitle } from '../SectionTitle'

export const Insurances = () => {
	const [search, setSearch] = useState('')
	const debouncedSearch = useDebounce(search, 300)
	const filteredInsurances = insurances.filter((insurance) =>
		insurance.name.toLowerCase().includes(debouncedSearch.toLowerCase())
	)
	return (
		<section className='space-y-6'>
			<SectionTitle icon={<Shield className='size-5' />} title='Seguradoras' />
			<div className='space-y-3'>
				<input
					className='block w-full rounded-lg border-gray-200 px-4 py-2.5 text-gray-800 focus:border-blue-500 focus:ring-blue-500 disabled:pointer-events-none disabled:opacity-50 sm:py-3 sm:text-sm'
					onChange={(e) => setSearch(e.target.value)}
					placeholder='Procurar seguradora'
					type='search'
					value={search}
				/>
			</div>
			<div className='grid gap-4 sm:grid-cols-2 lg:grid-cols-3'>
				{filteredInsurances.map(({ name, image, urls }) => (
					<CardContent
						icon={<img alt={name} className='h-12 w-12 object-contain' src={image} />}
						key={name}
						title={name}
					>
						<div className='flex items-center gap-8'>
							{urls.map((url, index) => (
								<a
									className='inline-flex items-center gap-x-2 rounded-lg border border-transparent bg-primary/25 px-4 py-1 font-medium text-primary text-sm transition-all duration-300 hover:scale-105 hover:bg-primary hover:text-white focus:bg-primary focus:outline-hidden disabled:pointer-events-none disabled:opacity-50'
									href={url}
									key={url}
									rel='noopener noreferrer'
									target='_blank'
								>
									Site {index + 1}
								</a>
							))}
						</div>
					</CardContent>
				))}
			</div>
		</section>
	)
}
