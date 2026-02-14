import { benefits } from '@/__mocks__/careers'
import { ExplanationSection } from '@/components/core'

export const WhyWork = () => {
	return (
		<ExplanationSection
			data={benefits}
			headerSectionProps={{
				description:
					'Na Flávio Seguros, acreditamos que nossos colaboradores são nosso maior ativo. Oferecemos um ambiente de trabalho dinâmico, colaborativo e inovador, onde cada pessoa tem a oportunidade de crescer e se desenvolver profissionalmente.',
				title: 'Por que trabalhar na Flávio Seguros?',
			}}
		/>
	)
}
