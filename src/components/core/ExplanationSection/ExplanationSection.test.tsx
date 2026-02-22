import { render } from '@testing-library/react'
import { Shield } from 'lucide-react'

import type { HeaderSectionProps } from '../HeaderSection'
import { ExplanationSection } from './ExplanationSection'

const headerSectionProps: HeaderSectionProps = {
	badgeLabel: 'any-badge-label',
	description: 'any-description',
	title: 'any-title',
}

const data = [
	{
		description: 'any-description1',
		icon: Shield,
		title: 'any-title1',
	},
	{
		description: 'any-description2',
		icon: Shield,
		title: 'any-title2',
	},
	{
		description: 'any-description3',
		icon: Shield,
		title: 'any-title3',
	},
]

describe('<ExplanationSection />', () => {
	it('should renders correctly', () => {
		const { getByText } = render(<ExplanationSection data={[]} headerSectionProps={headerSectionProps} />)
		expect(getByText('any-title')).toBeInTheDocument()
		expect(getByText('any-description')).toBeInTheDocument()
		expect(getByText('any-badge-label')).toBeInTheDocument()
	})

	it('should renders correctly data', () => {
		const { getByText } = render(<ExplanationSection data={data} headerSectionProps={headerSectionProps} />)
		data.forEach((item) => {
			expect(getByText(item.title)).toBeInTheDocument()
			expect(getByText(item.description)).toBeInTheDocument()
		})
	})
})
