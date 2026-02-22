import { render } from '@testing-library/react'

import { PageContainer } from './PageContainer'

describe('<PageContainer />', () => {
	it('should render correctly with props, id, and className', () => {
		const { getByRole, getByText } = render(
			<PageContainer className='any-className' id='any-id' role='page-container'>
				children
			</PageContainer>
		)
		expect(getByRole('page-container')).toHaveClass('any-className')
		expect(getByRole('page-container')).toHaveAttribute('id', 'any-id')
		expect(getByText('children')).toBeInTheDocument()
	})
})
