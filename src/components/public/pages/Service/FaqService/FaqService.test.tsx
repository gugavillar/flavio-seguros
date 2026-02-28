import { fireEvent, render } from '@testing-library/react'
import { act } from 'react'

import { FaqService } from './FaqService'

const mockFaq = [
	{
		'faq-answer': 'any-answer',
		'faq-question': 'any-question',
	},
]

describe('<FaqService />', () => {
	it('should render correctly', () => {
		const { getByRole, getByText } = render(<FaqService faqs={mockFaq} />)

		expect(getByRole('heading', { name: 'Perguntas frequentes' })).toBeInTheDocument()
		expect(getByText('any-question')).toBeInTheDocument()
	})

	it('should expand the accordion when clicked', () => {
		const { getByText } = render(<FaqService faqs={mockFaq} />)

		const accordionTrigger = getByText('any-question')
		act(() => {
			fireEvent.click(accordionTrigger)
		})

		expect(getByText('any-answer')).toBeInTheDocument()
	})
})
