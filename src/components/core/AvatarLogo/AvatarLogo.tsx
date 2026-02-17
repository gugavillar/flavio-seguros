import { NavLink } from '../NavLink'

export const AvatarLogo = () => {
	return (
		<NavLink className='flex h-6 w-50 items-center justify-between gap-2' to='/'>
			<img
				alt='Logo'
				src='https://images.prismic.io/flavio-seguros-ssr/aZLk51WLo0XkEiE0_Logo.webp?auto=format,compress'
			/>
		</NavLink>
	)
}
