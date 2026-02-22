import { act, fireEvent, render } from '@testing-library/react'

import { AccordionContentText } from './AccordionContentText'

describe('<AccordionContentText />', () => {
	it('should renders correctly', () => {
		const { getByText } = render(
			<AccordionContentText faqs={[{ 'faq-answer': 'any-answer', 'faq-question': 'any-question' }]} />
		)
		expect(getByText('any-question')).toBeInTheDocument()
	})

	it('should show content when click in accordion', () => {
		const { getByText } = render(
			<AccordionContentText faqs={[{ 'faq-answer': 'any-answer', 'faq-question': 'any-question' }]} />
		)
		act(() => {
			fireEvent.click(getByText('any-question'))
		})
		expect(getByText('any-answer')).toBeInTheDocument()
	})
})
