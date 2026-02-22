import { render } from '@testing-library/react'

import { GoogleIcon } from './GoogleIcon'

describe('<GoogleIcon />', () => {
	it('should render correctly', () => {
		const { getByRole } = render(<GoogleIcon role='google-icon' />)
		expect(getByRole('google-icon')).toBeInTheDocument()
	})
})
