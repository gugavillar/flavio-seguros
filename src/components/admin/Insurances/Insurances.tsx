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
			<SectionTitle icon={<Shield className='w-5 h-5' />} title='Seguradoras' />
			<div className='space-y-3'>
				<input
					className='py-2.5 sm:py-3 px-4 block w-full border-gray-200 rounded-lg sm:text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 text-gray-800 disabled:pointer-events-none'
					onChange={(e) => setSearch(e.target.value)}
					placeholder='Procurar seguradora'
					type='search'
					value={search}
				/>
			</div>
			<div className='grid gap-4 sm:grid-cols-2 lg:grid-cols-3'>
				{filteredInsurances.map(({ name, image, urls }) => (
					<CardContent
						icon={<img alt={name} className='w-12 h-12 object-contain' src={image} />}
						key={name}
						title={name}
					>
						<div className='flex items-center gap-8'>
							{urls.map((url, index) => (
								<a
									className='py-1 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-primary/25 text-primary hover:bg-primary focus:outline-hidden focus:bg-primary hover:scale-105 hover:text-white transition-all duration-300 disabled:opacity-50 disabled:pointer-events-none'
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
