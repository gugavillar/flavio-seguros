import { render } from '@testing-library/react'

import { HeaderSection } from './HeaderSection'

describe('<HeaderSection />', () => {
	it('should renders correctly', () => {
		const { getByText } = render(<HeaderSection description='any-description' title='any-title' />)
		expect(getByText('any-title')).toBeInTheDocument()
		expect(getByText('any-description')).toBeInTheDocument()
	})

	it('should accept any className and any props', () => {
		const { getByRole } = render(
			<HeaderSection className='any-class' description='any-description' role='header-role' title='any-title' />
		)
		expect(getByRole('header-role')).toHaveClass('any-class')
		expect(getByRole('header-role')).toHaveAttribute('role', 'header-role')
	})

	it('should render badge when badgeLabel is passed', () => {
		const { getByText } = render(
			<HeaderSection badgeLabel='any-label' description='any-description' title='any-title' />
		)
		expect(getByText('any-label')).toBeInTheDocument()
	})
})
