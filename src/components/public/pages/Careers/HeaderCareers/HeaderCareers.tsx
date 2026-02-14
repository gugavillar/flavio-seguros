import { Users } from 'lucide-react'

import { HeaderInternalPages } from '@/components/core'

export const HeaderCareers = () => {
	return (
		<HeaderInternalPages
			badge={{ icon: <Users />, label: 'Faça parte do time' }}
			description='Junte-se a uma equipe apaixonada por proteger famílias e construir um futuro melhor. Aqui, seu talento faz a diferença.'
			isSplitTitle
			title='Trabalhe conosco'
		/>
	)
}
