import { render } from '@testing-library/react'

import { SectionTitle } from './SectionTitle'

describe('<SectionTitle />', () => {
	it('should render correctly SectionTitle', () => {
		const { getByText, getByRole } = render(<SectionTitle icon={<div role='icon' />} title='any-title' />)
		expect(getByText('any-title')).toBeInTheDocument()
		expect(getByRole('icon')).toBeInTheDocument()
	})
})
