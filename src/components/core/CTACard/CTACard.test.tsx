import { render } from '@testing-library/react'
import { Anchor } from 'lucide-react'

import { CTACard } from './CTACard'

describe('<CTACard />', () => {
	it('should render correctly CTACard', () => {
		const { getByRole, getByText } = render(
			<CTACard description='any-description' icon={Anchor} role='card' title='any-title' />
		)
		expect(getByRole('card')).toBeInTheDocument()
		expect(getByText('any-title')).toBeInTheDocument()
		expect(getByText('any-description')).toBeInTheDocument()
	})

	it('should accept any className and props', () => {
		const { getByRole } = render(
			<CTACard className='any-class' description='any-description' icon={Anchor} role='card' title='any-title' />
		)
		expect(getByRole('card')).toHaveClass('any-class')
		expect(getByRole('card')).toHaveAttribute('role', 'card')
	})

	it('should render icon correctly', () => {
		const { getByTestId } = render(
			<CTACard description='any-description' icon={Anchor} role='card' title='any-title' />
		)
		expect(getByTestId('cta-card-icon')).toBeInTheDocument()
		expect(getByTestId('cta-card-icon')).toHaveClass('lucide lucide-anchor')
	})
})
