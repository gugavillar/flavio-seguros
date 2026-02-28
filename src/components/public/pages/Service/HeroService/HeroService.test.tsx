import { render } from '@testing-library/react'
import { Heart } from 'lucide-react'

import { messages } from '@/__mocks__/whatsapp'
import { generateWhatsAppLink } from '@/utils'

import { HeroService } from './HeroService'

describe('<HeroService />', () => {
	it('should render correctly', () => {
		const { getByText } = render(
			<HeroService badgeLabel='any-badge' icon={Heart} subtitle='any-subtitle' title='any-title' />
		)

		expect(getByText('any-badge')).toBeInTheDocument()
		expect(getByText('any-title')).toBeInTheDocument()
		expect(getByText('any-subtitle')).toBeInTheDocument()
	})

	it('should click in anchor navigate to correct link', () => {
		const { getByRole } = render(
			<HeroService badgeLabel='any-badge' icon={Heart} subtitle='any-subtitle' title='any-title' />
		)

		const anchor = getByRole('link', { name: 'Solicitar cotação grátis' })

		expect(anchor).toHaveAttribute('href', generateWhatsAppLink({ message: messages.price('any-title') }))
	})
})
