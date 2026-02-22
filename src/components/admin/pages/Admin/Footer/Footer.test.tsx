import { render } from '@testing-library/react'

import { Footer } from './Footer'

describe('<Footer />', () => {
	it('should render correctly', () => {
		const { getByText } = render(<Footer />)
		expect(getByText('Gravatá Corretora de Seguros')).toBeInTheDocument()
		expect(getByText('© 2026 Todos os direitos reservados')).toBeInTheDocument()
	})
})
