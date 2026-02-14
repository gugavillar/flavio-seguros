import { TrophyIcon } from 'lucide-react'

import { HeaderInternalPages } from '@/components/core'

export const HeaderAwards = () => {
	return (
		<HeaderInternalPages
			badge={{ icon: <TrophyIcon />, label: 'Reconhecimento e excelência' }}
			description='Ao longo dos anos, conquistamos reconhecimentos que refletem nosso compromisso com a excelência e satisfação dos clientes.'
			isSplitTitle
			title='Nossas premiações'
		/>
	)
}
