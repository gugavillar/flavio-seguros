import { PrismicImage } from '@prismicio/react'
import { useDebounce } from '@uidotdev/usehooks'
import { ChevronRight, Shield } from 'lucide-react'
import { useState } from 'react'

import { CardContent, SectionTitle } from '@/components/admin'
import { Input } from '@/components/core'
import { useInsuranceContext } from '@/contexts'

export const Insurances = () => {
	const [search, setSearch] = useState('')
	const contextData = useInsuranceContext()
	const debouncedSearch = useDebounce(search, 300)
	const filteredInsurances = contextData.partners.filter((insurance) =>
		insurance.primary['company-name'].toLowerCase().includes(debouncedSearch.toLowerCase())
	)
	return (
		<section className='space-y-6'>
			<SectionTitle icon={<Shield className='size-5' />} title='Seguradoras' />
			<div className='space-y-3'>
				<Input
					onChange={(e) => setSearch(e.target.value)}
					placeholder='Procurar seguradora'
					type='search'
					value={search}
				/>
			</div>
			<div className='grid gap-4 sm:grid-cols-2 lg:grid-cols-3'>
				{filteredInsurances.map(({ primary, items }) => (
					<CardContent
						icon={
							<PrismicImage
								className='size-12 object-contain'
								fetchPriority='high'
								field={primary['company-logo']}
								imgixParams={{ auto: ['compress', 'format'], w: 48 }}
								loading='eager'
							/>
						}
						key={primary['company-name']}
						title={primary['company-name']}
					>
						<div className='mt-1 space-y-1 border-slate-300 border-t pt-2'>
							{items.map(({ 'company-site': url }, index) => (
								<a
									className='-mx-3 flex items-center justify-between rounded-lg px-3 py-2 transition-colors duration-200 hover:bg-primary/10'
									href={url}
									key={url}
									rel='noopener noreferrer'
									target='_blank'
								>
									{items?.length > 1 ? `Site ${index + 1}` : 'Site'}
									<ChevronRight className='size-5' />
								</a>
							))}
						</div>
					</CardContent>
				))}
			</div>
		</section>
	)
}
