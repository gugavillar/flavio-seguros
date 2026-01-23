import { AvatarLogo } from '@/components/core'

import { UserAvatar } from '../UserAvatar'

export const Navbar = () => {
	return (
		<nav className='sticky top-0 z-50 flex w-full items-center justify-between bg-off-white-1 p-4 sm:px-6 lg:px-8'>
			<div className='mx-auto flex w-full max-w-6xl items-center justify-between gap-2'>
				<AvatarLogo />
				<UserAvatar />
			</div>
		</nav>
	)
}
