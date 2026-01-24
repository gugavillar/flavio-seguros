import { Quote } from 'lucide-react'

import { testimonials } from '@/__mocks__/testimonials'
import { Card as CardComponent, HeaderSection, UserAvatar } from '@/components/core'

const Card = ({ content, user }: { content: string; user: { name: string; description: string } }) => {
	return (
		<CardComponent>
			<div className='p-6'>
				<Quote className='size-10 text-primary/40' />
				<div className='mb-4 flex gap-1'></div>
				<p className='mb-6 leading-relaxed'>{content}</p>
				<UserAvatar description={user.description} name={user.name} />
			</div>
		</CardComponent>
	)
}

export const Testimonials = () => {
	return (
		<section className='py-20' id='depoimentos'>
			<div className='container mx-auto px-4'>
				<div className='mx-auto mb-16 max-w-2xl text-center'>
					<HeaderSection
						badgeLabel='Depoimentos'
						description='A satisfação dos nossos clientes é o que nos motiva a continuar oferecendo o melhor serviço.'
						title='O que nossos clientes dizem'
					/>
				</div>
				<div className='grid gap-6 md:grid-cols-3'>
					{testimonials.map((item) => (
						<Card content={item.content} key={item.name} user={item} />
					))}
				</div>
			</div>
		</section>
	)
}
