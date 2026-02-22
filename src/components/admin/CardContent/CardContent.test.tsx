import { render } from '@testing-library/react'

import { CardContent } from './CardContent'

describe('<CardContent />', () => {
	it('should render correctly CardContent as div', () => {
		const { getByText, getByRole } = render(
			<CardContent icon={<div role='icon' />} title='any-title'>
				children
			</CardContent>
		)
		expect(getByText('any-title')).toBeInTheDocument()
		expect(getByRole('icon')).toBeInTheDocument()
		expect(getByText('children')).toBeInTheDocument()
	})

	it('should render correctly CardContent as anchor', () => {
		const { getByText, getByRole } = render(
			<CardContent as='a' icon={<div role='icon' />} role='link' title='any-title'>
				children
			</CardContent>
		)
		expect(getByText('any-title')).toBeInTheDocument()
		expect(getByRole('icon')).toBeInTheDocument()
		expect(getByText('children')).toBeInTheDocument()
		expect(getByRole('link')).toBeInTheDocument()
	})

	it('should render description when is passed', () => {
		const { getByText } = render(
			<CardContent description='any-description' icon={<div role='icon' />} title='any-title' />
		)
		expect(getByText('any-description')).toBeInTheDocument()
	})
})
