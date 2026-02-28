import { render } from '@testing-library/react'

import { SmallTeam, type TeamsWhyDifferencePrismicType } from './SmallTeam'

const mockData: TeamsWhyDifferencePrismicType = {
	items: [
		{
			'teams-why-difference-card-description': 'any-card-description',
			'teams-why-difference-card-icon': 'Heart',
			'teams-why-difference-card-title': 'any-card-title',
		},
	],
	primary: {
		'teams-why-difference-description': 'any-description',
		'teams-why-difference-title': 'any-title',
	},
	slice_type: 'any-slice-type',
}

describe('<SmallTeam />', () => {
	it('should render correctly', () => {
		const { getByText } = render(<SmallTeam data={mockData} />)

		expect(getByText('any-title')).toBeInTheDocument()
		expect(getByText('any-description')).toBeInTheDocument()
		expect(getByText('any-card-title')).toBeInTheDocument()
		expect(getByText('any-card-description')).toBeInTheDocument()
	})
})
