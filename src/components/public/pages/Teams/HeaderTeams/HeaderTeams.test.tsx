import { render } from '@testing-library/react'

import { HeaderTeams } from './HeaderTeams'

describe('<HeaderTeams />', () => {
	it('should render correctly', () => {
		const { getByText } = render(
			<HeaderTeams teams-badge='any-badge' teams-description='any-description' teams-title='any-title' />
		)
		expect(getByText('any-badge')).toBeInTheDocument()
		expect(getByText('any-description')).toBeInTheDocument()
		expect(getByText('any-title')).toBeInTheDocument()
	})
})
