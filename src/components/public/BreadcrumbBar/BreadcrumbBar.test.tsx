import { RouterContextProvider } from '@tanstack/react-router'
import { render } from '@testing-library/react'

import { getRouter } from '@/router'

import { BreadcrumbBar } from './BreadcrumbBar'

describe('<BreadcrumbBar />', () => {
	it('should render null when breadcrumbs is empty', () => {
		const { container } = render(<BreadcrumbBar breadcrumbs={[]} />)
		expect(container).toBeEmptyDOMElement()
	})

	it('should render correctly breadcrumb', () => {
		const { getByText } = render(<BreadcrumbBar breadcrumbs={['any-crumb']} />, {
			wrapper: ({ children }) => <RouterContextProvider router={getRouter()}>{children}</RouterContextProvider>,
		})
		expect(getByText('any-crumb')).toBeInTheDocument()
	})
})
