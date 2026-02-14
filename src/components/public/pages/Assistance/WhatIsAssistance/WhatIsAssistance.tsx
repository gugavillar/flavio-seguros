import { assistanceTypes } from '@/__mocks__/assistance'
import { ExplanationSection } from '@/components/core'

export const WhatIsAssistance = () => {
	return (
		<ExplanationSection
			data={assistanceTypes}
			headerSectionProps={{
				badgeLabel: 'O que é?',
				description:
					'A assistência 24 horas é um serviço incluído em seu seguro que oferece suporte emergencial a qualquer hora do dia ou da noite, todos os dias do ano.',
				title: 'Entenda a assistência 24 horas',
			}}
		/>
	)
}
