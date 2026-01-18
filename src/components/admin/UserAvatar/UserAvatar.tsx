import { useNavigate } from '@tanstack/react-router'
import { useClickAway } from '@uidotdev/usehooks'
import { useState } from 'react'

import { signOut, useSession } from '@/lib/authClient'

export const UserAvatar = () => {
	const [isOpen, setIsOpen] = useState(false)

	const { data } = useSession()
	const navigate = useNavigate()

	const ref = useClickAway<HTMLDivElement>(() => setIsOpen(false))

	if (!data?.user) {
		return null
	}

	return (
		<div className='cursor-pointer relative' onClick={() => setIsOpen(!isOpen)}>
			<div className='flex items-center gap-2'>
				<img
					alt='User avatar'
					className='inline-flex items-center justify-center size-11 rounded-full bg-primary/25 font-semibold text-primary'
					src={data.user.image ?? ''}
				/>
				<div className='flex flex-col'>
					<span className='text-sm font-semibold'>{data?.user?.name}</span>
					<span className='text-xs text-gray-500 hidden sm:block'>{data?.user?.email}</span>
				</div>
			</div>
			{isOpen && (
				<div className='absolute top-full right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1' ref={ref}>
					<a className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100' href='#'>
						Usuários
					</a>
					<button
						className='inline-flex  w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'
						onClick={() => signOut({}, { onSuccess: () => navigate({ to: '/' }) })}
					>
						Sair
					</button>
				</div>
			)}
		</div>
	)
}
