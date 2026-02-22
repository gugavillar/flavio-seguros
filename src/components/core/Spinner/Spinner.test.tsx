import { render } from '@testing-library/react'

import { Spinner } from './Spinner'

describe('<Spinner />', () => {
	it('should render correctly and accept some props and className', () => {
		const { getByRole } = render(<Spinner className='any-className' id='spinner-id' />)
		expect(getByRole('status')).toHaveClass('any-className')
		expect(getByRole('status')).toHaveAttribute('id', 'spinner-id')
	})
})
