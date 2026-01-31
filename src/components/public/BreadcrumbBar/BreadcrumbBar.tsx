import { useParams } from '@tanstack/react-router'
import { ChevronRight } from 'lucide-react'

import { NavLink } from '@/components/core'

export const BreadcrumbBar = () => {
	const { service } = useParams({ from: '/(public)/(layout)/_layout/$service' })
	const serviceTransform = service.replace('-', ' ')
	return (
		<div className='border-gray-300 border-t bg-off-white-2'>
			<div className='container mx-auto px-4 py-3'>
				<nav aria-label='Breadcrumb' role='navigation'>
					<ol className='flex flex-wrap items-center gap-1.5 text-gray-400 text-sm sm:gap-2.5'>
						<li className='inline-flex items-center gap-1.5'>
							<NavLink className='text-gray-400 hover:text-primary' to='/'>
								Início
							</NavLink>
						</li>
						<li>
							<ChevronRight />
						</li>
						<li className='inline-flex items-center gap-1.5'>
							<span className='text-black capitalize'>{serviceTransform}</span>
						</li>
					</ol>
				</nav>
			</div>
		</div>
	)
}
