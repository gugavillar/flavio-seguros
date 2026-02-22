import { render } from '@testing-library/react'

import { Label } from './Label'

describe('<Label />', () => {
	it('should render correctly', () => {
		const { getByText } = render(<Label>any-label</Label>)
		expect(getByText('any-label')).toBeInTheDocument()
	})

	it('should accept any className and any props', () => {
		const { getByRole } = render(<Label className='any-className' htmlFor='label' role='any-label' />)
		expect(getByRole('any-label')).toHaveClass('any-className')
		expect(getByRole('any-label')).toHaveAttribute('for', 'label')
	})
})
