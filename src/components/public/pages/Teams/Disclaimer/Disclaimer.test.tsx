import { render } from '@testing-library/react'

import { disclaimer } from '@/__mocks__/teams'

import { Disclaimer } from './Disclaimer'

describe('<Disclaimer />', () => {
	it('should render correctly', () => {
		const { getByText } = render(<Disclaimer />)

		disclaimer.forEach((item) => {
			expect(getByText(item.title)).toBeInTheDocument()
			expect(getByText(item.description)).toBeInTheDocument()
		})
	})
})
