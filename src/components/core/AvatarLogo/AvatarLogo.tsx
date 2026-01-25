import { NavLink } from '../NavLink'

export const AvatarLogo = () => {
	return (
		<NavLink className='flex w-fit items-center justify-between gap-2' to='/'>
			<img alt='Logo' className='size-10 object-contain' src='/logos/Logo.webp' />
			<span className='font-bold font-title text-xl'>Flávio Seguros</span>
		</NavLink>
	)
}
