import { render } from '@testing-library/react'

import { Card } from './Card'

describe('<Card />', () => {
	it('should render card correctly', () => {
		const { getByRole } = render(<Card role='card'>Children</Card>)
		expect(getByRole('card')).toBeInTheDocument()
	})

	it('should accept any className and any props', () => {
		const { getByRole } = render(
			<Card className='any-class' role='card'>
				Children
			</Card>
		)
		expect(getByRole('card')).toHaveClass('any-class')
		expect(getByRole('card')).toHaveAttribute('role', 'card')
	})
})
