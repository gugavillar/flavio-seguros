import { RouterContextProvider } from '@tanstack/react-router'
import { render } from '@testing-library/react'

import { getRouter } from '@/router'

import { AvatarLogo } from './AvatarLogo'

describe('<AvatarLogo />', () => {
	it('renders correctly', () => {
		const { getByRole } = render(<AvatarLogo src='any-logo.png' />, {
			wrapper: ({ children }) => <RouterContextProvider router={getRouter()}>{children}</RouterContextProvider>,
		})
		expect(getByRole('img')).toBeInTheDocument()
	})
})
