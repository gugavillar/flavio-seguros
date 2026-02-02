import { ChevronRight } from 'lucide-react'
import { Fragment } from 'react'

import { NavLink } from '@/components/core'
import { NAVIGATION_HASH } from '@/utils'

type BreadcrumbBarProps = {
	breadcrumbs: Array<string>
}

export const BreadcrumbBar = ({ breadcrumbs }: BreadcrumbBarProps) => {
	if (!breadcrumbs.length) return null

	return (
		<div className='border-gray-300 border-t bg-off-white-2'>
			<div className='container mx-auto px-4 py-3'>
				<nav aria-label='Breadcrumb' role='navigation'>
					<ol className='flex flex-wrap items-center gap-1.5 text-gray-500 text-sm sm:gap-2.5'>
						<li className='inline-flex items-center gap-1.5'>
							<NavLink className='text-gray-500 hover:text-primary' hash={NAVIGATION_HASH.SERVICES} to='/'>
								Início
							</NavLink>
						</li>
						<li>
							<ChevronRight />
						</li>
						{breadcrumbs.map((crumb) => {
							return (
								<Fragment key={crumb}>
									<li className='inline-flex items-center gap-1.5' key={crumb}>
										<span className='text-black capitalize'>{crumb}</span>
									</li>
									<li className='last:hidden'>
										<ChevronRight />
									</li>
								</Fragment>
							)
						})}
					</ol>
				</nav>
			</div>
		</div>
	)
}
