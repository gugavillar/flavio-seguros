import { render } from '@testing-library/react'

import { Badge } from './Badge'

describe('<Badge />', () => {
	it('should renders correctly', () => {
		const { getByText } = render(<Badge label='any-text' />)
		expect(getByText('any-text')).toBeInTheDocument()
	})

	it('should render any component in icon', () => {
		const { getByRole } = render(<Badge icon={<div role='any-icon' />} label='any-text' />)
		expect(getByRole('any-icon')).toBeInTheDocument()
	})

	it('should accept any className and any props', () => {
		const { getByRole } = render(<Badge className='any-class' label='any-text' role='badge' />)
		expect(getByRole('badge')).toHaveClass('any-class')
		expect(getByRole('badge')).toHaveAttribute('role', 'badge')
	})
})
