import { NavLink } from '@/components/core'

import { UserAvatar } from '../UserAvatar'

export const Navbar = () => {
	return (
		<nav className='flex w-full items-center justify-between px-4 sm:px-6 lg:px-8 bg-off-white-1 sticky top-0 z-50'>
			<div className='flex items-center justify-between w-full gap-2 max-w-6xl mx-auto'>
				<NavLink to='/'>
					<img alt='Logo' className='size-18 object-contain' src='/logos/Logo.webp' />
				</NavLink>
				<UserAvatar />
			</div>
		</nav>
	)
}
