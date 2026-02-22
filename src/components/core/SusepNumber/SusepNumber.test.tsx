import { render } from '@testing-library/react'

import { SusepNumber } from './SusepNumber'

describe('<SusepNumber />', () => {
	it('should render correctly', () => {
		const { getByText } = render(<SusepNumber />)
		expect(getByText('© 2026 Flávio Seguros. Todos os direitos reservados.')).toBeInTheDocument()
		expect(getByText('SUSEP Nº 202091931 - Gravatá Corretora de Seguros')).toBeInTheDocument()
	})
})
