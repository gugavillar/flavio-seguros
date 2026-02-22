import { render } from '@testing-library/react'

import { FloatCard } from './FloatCard'

describe('<FloatCard />', () => {
	it('should render correctly', () => {
		const { getByText, getByRole } = render(
			<FloatCard description='any-description' icon={<div role='icon' />} title='any-title' />
		)
		expect(getByText('any-title')).toBeInTheDocument()
		expect(getByText('any-description')).toBeInTheDocument()
		expect(getByRole('icon')).toBeInTheDocument()
	})

	it('should accept any className and any props', () => {
		const { getByRole } = render(
			<FloatCard
				className='any-class'
				description='any-description'
				icon={<div role='icon' />}
				role='float'
				title='any-title'
			/>
		)
		expect(getByRole('float')).toHaveClass('any-class')
		expect(getByRole('float')).toHaveAttribute('role', 'float')
	})
})
