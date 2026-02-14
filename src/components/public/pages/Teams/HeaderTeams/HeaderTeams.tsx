import { Shield } from 'lucide-react'

import { HeaderInternalPages } from '@/components/core'

export const HeaderTeams = () => {
	return (
		<HeaderInternalPages
			badge={{ icon: <Shield />, label: 'Gente de verdade cuidando de você' }}
			description='Somos uma corretora familiar e acreditamos que seguro bom é aquele feito com atenção, carinho e dedicação. Cada membro da nossa equipe está aqui para cuidar de você.'
			endSplitIndex={2}
			isSplitTitle
			title='Conheça nossa equipe'
		/>
	)
}
