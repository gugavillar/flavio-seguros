import { render } from '@testing-library/react'

import type { MainAwardsPrismicType } from './MainAwards'
import { MainAwards } from './MainAwards'

const mockData: MainAwardsPrismicType = {
	items: [
		{
			'award-main-award-name': 'any-award-name',
			'award-main-description': 'any-award-description',
			'award-main-icon': 'Award',
			'award-main-title': 'any-award-title',
			'award-main-year': 2022,
		},
	],
	slice_type: 'any-slice',
}

describe('<MainAwards />', () => {
	it('should render correctly', () => {
		const { getByText } = render(<MainAwards data={mockData} />)
		expect(getByText(mockData.items[0]['award-main-title'])).toBeInTheDocument()
		expect(getByText(mockData.items[0]['award-main-award-name'])).toBeInTheDocument()
		expect(getByText(mockData.items[0]['award-main-description'])).toBeInTheDocument()
		expect(getByText(mockData.items[0]['award-main-year'])).toBeInTheDocument()
	})
})
