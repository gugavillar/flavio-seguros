import { render } from '@testing-library/react'

import { TimelineAwards, type TimelineAwardsPrismicType, type TimelineAwardsSlicePrismicType } from './TimelineAwards'

const mockData: TimelineAwardsPrismicType & { data: Array<TimelineAwardsSlicePrismicType> } = {
	data: [
		{
			items: [
				{
					'timeline-award-description-award': 'any-award-description',
					'timeline-award-title-award': 'any-award-title',
				},
			],
			primary: {
				'timeline-award-year': 2022,
			},
			slice_type: 'any-slice',
		},
		{
			items: [
				{
					'timeline-award-description-award': 'any-award-description-1',
					'timeline-award-title-award': 'any-award-title-1',
				},
			],
			primary: {
				'timeline-award-year': 2021,
			},
			slice_type: 'any-slice',
		},
	],
	'timeline-award-description': 'any-description',
	'timeline-award-title': 'any-title',
}

describe('<TimelineAwards />', () => {
	it('should render correctly', () => {
		const { getByText, getByTestId } = render(<TimelineAwards {...mockData} />)
		expect(getByText(mockData['timeline-award-title'])).toBeInTheDocument()
		expect(getByText(mockData['timeline-award-description'])).toBeInTheDocument()

		mockData.data.forEach((item) => {
			expect(getByText(item.primary['timeline-award-year'].toString())).toBeInTheDocument()
			item.items.forEach((award) => {
				expect(getByText(award['timeline-award-title-award'])).toBeInTheDocument()
				expect(getByText(award['timeline-award-description-award'])).toBeInTheDocument()
			})
		})
		const line = getByTestId('timeline-line')
		expect(line).toBeInTheDocument()
	})
})
