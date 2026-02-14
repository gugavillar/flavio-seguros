import { ClockIcon, type LucideIcon } from 'lucide-react'

import { benefits } from '@/__mocks__/assistance'
import { HeaderInternalPages } from '@/components/core'

const Benefit = ({ icon: Icon, label }: { icon: LucideIcon; label: string }) => {
	return (
		<div className='flex items-center gap-2 text-black/80'>
			<Icon className='text-primary' />
			<span>{label}</span>
		</div>
	)
}

export const HeaderAssistance = () => {
	return (
		<HeaderInternalPages
			badge={{ icon: <ClockIcon />, label: 'Disponível 24 horas' }}
			description='Estamos aqui para você a qualquer momento. Nossa rede de assistência 24 horas oferece suporte completo em situações de emergência, garantindo sua tranquilidade e segurança onde quer que você esteja.'
			title='Assistência 24h'
		>
			<div className='mt-8 flex flex-wrap justify-center gap-4'>
				{benefits.map((item) => (
					<Benefit key={item.label} {...item} />
				))}
			</div>
		</HeaderInternalPages>
	)
}
