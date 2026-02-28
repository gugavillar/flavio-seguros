import { render } from '@testing-library/react'

import { messages } from '@/__mocks__/whatsapp'
import { generateWhatsAppLink } from '@/utils'

import { RecognizedQuality } from './RecognizedQuality'

describe('<RecognizedQuality />', () => {
	it('should render correctly', () => {
		const { getByText, getByRole } = render(<RecognizedQuality />)

		const anchor = getByRole('link', { name: 'Solicitar cotação' })

		expect(anchor).toHaveAttribute('href', generateWhatsAppLink({ message: messages.price() }))
		expect(
			getByText(
				'Nossas premiações refletem o compromisso diário de oferecer o melhor serviço para você e sua família. Conte conosco!'
			)
		).toBeInTheDocument()
		expect(getByText('Qualidade reconhecida')).toBeInTheDocument()
	})
})
