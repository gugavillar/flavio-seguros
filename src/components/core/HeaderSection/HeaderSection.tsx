import { Badge } from '../Badge'

interface HeaderSectionProps {
	badgeLabel: string
	title: string
	description: string
}

export const HeaderSection = ({ badgeLabel, title, description }: HeaderSectionProps) => {
	return (
		<div className='mb-12 text-center'>
			<Badge label={badgeLabel} />
			<h2 className='mb-4 font-bold font-title text-3xl text-black/80 md:text-4xl'>{title}</h2>
			<p className='text-gray-400 text-lg'>{description}</p>
		</div>
	)
}
