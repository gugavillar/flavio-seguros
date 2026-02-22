import { render } from '@testing-library/react'

import { HeaderInternalPages } from './HeaderInternalPages'

describe('<HeaderInternalPages />', () => {
	it('should render correctly children', () => {
		const { getByText } = render(
			<HeaderInternalPages badge={{ label: 'any-label' }} description='any-description' title='any-title'>
				children
			</HeaderInternalPages>
		)
		expect(getByText('children')).toBeInTheDocument()
	})

	it('should accept any className and any props', () => {
		const { getByRole } = render(
			<HeaderInternalPages
				badge={{ label: 'any-label' }}
				className='any-class'
				description='any-description'
				role='header-internal-pages'
				title='any-title'
			/>
		)
		expect(getByRole('header-internal-pages')).toHaveClass('any-class')
		expect(getByRole('header-internal-pages')).toHaveAttribute('role', 'header-internal-pages')
	})

	it('should split title when is split is passed', () => {
		const { getByRole } = render(
			<HeaderInternalPages
				badge={{ label: 'any-label' }}
				className='any-class'
				description='any-description'
				isSplitTitle
				role='header-internal-pages'
				title='any-title'
			/>
		)
		expect(getByRole('heading', { level: 1, name: 'any-title' })).toBeInTheDocument()
	})
})
