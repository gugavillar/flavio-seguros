import { NavLink } from '../NavLink'

export const AvatarLogo = () => {
	return (
		<div className='flex w-fit items-center justify-between gap-2'>
			<NavLink to='/'>
				<img alt='Logo' className='size-10 object-contain' src='/logos/Logo.webp' />
			</NavLink>
			<span className='font-bold font-title text-xl'>Flávio Seguros</span>
		</div>
	)
}
