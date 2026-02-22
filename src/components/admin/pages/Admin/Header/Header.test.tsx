import { render } from '@testing-library/react'

import { Header } from './Header'

describe('<Header />', () => {
	it('should render correctly', () => {
		const { getByText, getByRole } = render(<Header />)
		expect(getByText('Portal de Serviços')).toBeInTheDocument()
		expect(getByRole('heading', { level: 1, name: 'Catálogo de Soluções' })).toBeInTheDocument()
		expect(
			getByText('Este é o portal de serviços da corretora onde reunimos todos os links para facilitar seu atendimento.')
		).toBeInTheDocument()
	})
})
