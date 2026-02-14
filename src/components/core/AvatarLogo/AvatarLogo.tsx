import { NavLink } from '../NavLink'

export const AvatarLogo = () => {
	return (
		<NavLink className='flex h-6 w-50 items-center justify-between gap-2' to='/'>
			<img alt='Logo' src='/logos/Logo.webp' />
		</NavLink>
	)
}
