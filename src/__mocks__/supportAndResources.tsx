import { CarFront } from 'lucide-react'

export const supportAndResources = [
	{
		description: 'Atendimento para vidros, faróis, retrovisores e lanternas.',
		image: <CarFront className='size-12' />,
		name: 'Atendimento',
		url: 'https://www.abraseuatendimento.com.br/',
	},
	{
		description: 'Sistema de Declaração de Acidente de Trânsito',
		image: <img alt='Polícia Rodoviária Federal' className='size-12 object-contain' src='/logos/PRF.webp' />,
		name: 'Polícia Rodoviária Federal',
		url: 'https://declarante.prf.gov.br/declarante/',
	},
	{
		description: 'Boletim de Ocorrência',
		image: <img alt='Polícia Civil de Pernambuco' className='size-12 object-contain' src='/logos/PE.webp' />,
		name: 'Polícia Civil de PE',
		url: 'http://servicos.sds.pe.gov.br/delegacia/',
	},
]
