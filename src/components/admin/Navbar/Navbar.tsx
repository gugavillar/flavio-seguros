import { AvatarLogo } from '@/components/core'

import { AvatarUser } from '../AvatarUser'

export const Navbar = () => {
	return (
		<nav
			aria-label='Navbar'
			className='sticky top-0 z-50 flex w-full items-center justify-between bg-off-white-1 p-4 sm:px-6 lg:px-8'
			role='navigation'
		>
			<div className='mx-auto flex w-full max-w-6xl items-center justify-between gap-2'>
				<AvatarLogo />
				<AvatarUser />
			</div>
		</nav>
	)
}
