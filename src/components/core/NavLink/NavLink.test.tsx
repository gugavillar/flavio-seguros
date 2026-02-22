import { RouterContextProvider } from '@tanstack/react-router'
import { render } from '@testing-library/react'
import { createRef } from 'react'

import { getRouter } from '@/router'

import { NavLink } from './NavLink'

describe('<NavLink />', () => {
	it('should render correctly', () => {
		const { getByRole } = render(<NavLink to='/'>Home</NavLink>, {
			wrapper: ({ children }) => <RouterContextProvider router={getRouter()}>{children}</RouterContextProvider>,
		})
		expect(getByRole('link')).toHaveTextContent('Home')
	})

	it('should render ref correctly', () => {
		const ref = createRef<HTMLAnchorElement>()
		render(
			<NavLink ref={ref} to='/'>
				Home
			</NavLink>,
			{
				wrapper: ({ children }) => <RouterContextProvider router={getRouter()}>{children}</RouterContextProvider>,
			}
		)
		expect(ref.current).toBeInTheDocument()
	})
})
