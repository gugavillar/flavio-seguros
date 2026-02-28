import { render } from '@testing-library/react'

import { WhatIsAssistance, type WhatIsAssistancePrismicType } from './WhatIsAssistance'

const mockData: WhatIsAssistancePrismicType = {
	items: [
		{
			'assistance-what-is-card-title': 'any-card-title',
			'assistance-what-is-description': 'any-card-description',
			'assistance-what-is-icon': 'Activity',
		},
	],
	primary: {
		'assistance-what-is-badge': 'any-badge',
		'assistance-what-is-description': 'any-description',
		'assistance-what-is-title': 'any-title',
	},
	slice_type: 'any-slice',
}

describe('<WhatIsAssistance />', () => {
	it('should render correctly', () => {
		const { getByText } = render(<WhatIsAssistance data={mockData} />)
		expect(getByText(mockData.primary['assistance-what-is-badge'])).toBeInTheDocument()
		expect(getByText(mockData.primary['assistance-what-is-title'])).toBeInTheDocument()
		expect(getByText(mockData.primary['assistance-what-is-description'])).toBeInTheDocument()

		mockData.items.forEach((item) => {
			expect(getByText(item['assistance-what-is-card-title'])).toBeInTheDocument()
			expect(getByText(item['assistance-what-is-description'])).toBeInTheDocument()
		})
	})
})
