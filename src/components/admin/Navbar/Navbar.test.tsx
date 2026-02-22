import { RouterContextProvider } from '@tanstack/react-router'
import { render } from '@testing-library/react'

import { getRouter } from '@/router'

import { Navbar } from './Navbar'

describe('<Navbar />', () => {
	it('should render correctly', () => {
		const { getByRole } = render(<Navbar />, {
			wrapper: ({ children }) => <RouterContextProvider router={getRouter()}>{children}</RouterContextProvider>,
		})
		expect(getByRole('navigation')).toBeInTheDocument()
	})
})
