import { NavLink } from '../NavLink'

type AvatarLogoProps = {
	src: string
}

export const AvatarLogo = ({ src }: AvatarLogoProps) => {
	return (
		<NavLink className='flex h-6 w-50 items-center justify-between gap-2' to='/'>
			<img alt='Logo' src={src} />
		</NavLink>
	)
}
