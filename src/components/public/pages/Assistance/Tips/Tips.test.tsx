import { render } from '@testing-library/react'

import { Tips, type TipsPrismicType } from './Tips'

const mockData: TipsPrismicType = {
	items: [
		{
			'assistance-tips-description': 'any-tip-description',
			'assistance-tips-title': 'any-tip-title',
		},
	],
	primary: {
		'assistance-tips-title': 'any-title',
	},
	slice_type: 'any-slice',
}

describe('<Tips />', () => {
	it('should render correctly', () => {
		const { getByText } = render(<Tips data={mockData} />)
		expect(getByText(mockData.primary['assistance-tips-title'])).toBeInTheDocument()
		mockData.items.forEach((item) => {
			expect(getByText(item['assistance-tips-title'])).toBeInTheDocument()
			expect(getByText(item['assistance-tips-description'])).toBeInTheDocument()
		})
	})
})
