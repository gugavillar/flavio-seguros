import { render } from '@testing-library/react'

import { GlobalLoading } from './GlobalLoading'

describe('<GlobalLoading />', () => {
	it('should render correctly', () => {
		const { getByRole } = render(<GlobalLoading />)
		expect(getByRole('status')).toBeInTheDocument()
	})
})
