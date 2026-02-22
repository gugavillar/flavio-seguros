import { render } from '@testing-library/react'

import { principalServices } from '@/__mocks__/principalServices'

import { PrincipalServices } from './PrincipalServices'

describe('<PrincipalServices />', () => {
	it('should render correctly', () => {
		const { getByText } = render(<PrincipalServices />)
		expect(getByText('Serviços Principais')).toBeInTheDocument()
	})

	it('should render cards correctly', () => {
		const { getByText } = render(<PrincipalServices />)
		principalServices.forEach((service) => {
			expect(getByText(service.name)).toBeInTheDocument()
		})
	})
})
