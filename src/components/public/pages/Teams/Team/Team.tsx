import { Mail, Phone } from 'lucide-react'

import { team } from '@/__mocks__/teams'
import { PageContainer } from '@/components/core'

type TeamCardProps = {
	name: string
	role: string
	description: string
	src: string
	phone: string
	email: string
}

const TeamCard = ({ name, role, description, src, phone, email }: TeamCardProps) => {
	return (
		<div className='group flex overflow-hidden rounded-lg border border-gray-200 bg-white text-gray-500 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl'>
			<div className='p-0'>
				<div className='flex min-h-full flex-col sm:flex-row'>
					<div className='h-48 w-full shrink-0 overflow-hidden sm:h-auto sm:w-40'>
						<img
							alt={name}
							className='size-full object-cover transition-transform duration-500 group-hover:scale-105'
							src={src}
						/>
					</div>
					<div className='flex flex-col justify-between p-6'>
						<div>
							<h3 className='mb-1 font-semibold text-black/80 text-xl'>{name}</h3>
							<p className='mb-3 text-primary text-sm'>{role}</p>
							<p className='mb-4 text-sm leading-relaxed'>{description}</p>
						</div>
						<div className='flex gap-2'>
							<a
								className='flex size-9 items-center justify-center rounded-full bg-gray-200 transition-colors hover:bg-primary hover:text-white'
								href={`tel:${phone}`}
							>
								<Phone className='size-4' />
							</a>
							<a
								className='flex size-9 items-center justify-center rounded-full bg-gray-200 transition-colors hover:bg-primary hover:text-white'
								href={`mailto:${email}`}
								rel='noopener noreferrer'
								target='_blank'
							>
								<Mail className='size-4' />
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export const Team = () => {
	return (
		<PageContainer>
			<div className='mx-auto grid max-w-4xl gap-8 md:grid-cols-2'>
				{team.map((item) => (
					<TeamCard key={item.name} {...item} />
				))}
			</div>
		</PageContainer>
	)
}
