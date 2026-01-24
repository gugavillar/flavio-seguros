type UserAvatarProps = {
	name: string
	description: string
	image?: string | null
}

const getFirstLetter = (name: string) => {
	const nameArray = name.split(' ')
	if (nameArray.length > 1) {
		return nameArray[0].charAt(0).toUpperCase() + nameArray.at(-1)?.charAt(0).toUpperCase()
	}
	return nameArray[0].charAt(0).toUpperCase()
}

export const UserAvatar = ({ name, description, image }: UserAvatarProps) => {
	const firstLetter = getFirstLetter(name)
	return (
		<div className='flex items-center gap-2'>
			{image ? (
				<img
					alt='User avatar'
					className='inline-flex size-11 items-center justify-center rounded-full'
					src={image ?? ''}
				/>
			) : (
				<div className='inline-flex size-11 items-center justify-center rounded-full bg-primary font-semibold text-white'>
					{firstLetter}
				</div>
			)}
			<div className='flex flex-col'>
				<span className='font-semibold text-black/80 text-sm'>{name}</span>
				<span className='hidden text-gray-400 text-xs sm:block'>{description}</span>
			</div>
		</div>
	)
}
