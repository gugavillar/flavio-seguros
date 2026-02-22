import { render } from '@testing-library/react'

import { supportAndResources } from '@/__mocks__/supportAndResources'

import { SupportAndResources } from './SupportAndResources'

describe('<SupportAndResources />', () => {
	it('should render correctly', () => {
		const { getByText } = render(<SupportAndResources />)
		expect(getByText('Suporte & Recursos')).toBeInTheDocument()
	})

	it('should render cards correctly', () => {
		const { getByText } = render(<SupportAndResources />)
		supportAndResources.forEach((support) => {
			expect(getByText(support.name)).toBeInTheDocument()
		})
	})
})
