import { TrophyIcon } from 'lucide-react'

import { Badge, PageContainer } from '@/components/core'

export const HeaderAwards = () => {
	return (
		<PageContainer className='pt-44 pb-20 text-center'>
			<Badge icon={<TrophyIcon />} label='Reconhecimento e excelência' />
			<h1 className='mb-6 font-bold font-title text-4xl text-black/80 md:text-5xl lg:text-6xl'>
				Nossas <span className='text-primary'>premiações</span>
			</h1>
			<p className='mx-auto max-w-2xl text-gray-500 text-lg md:text-xl'>
				Ao longo dos anos, conquistamos reconhecimentos que refletem nosso compromisso com a excelência e satisfação dos
				clientes.
			</p>
		</PageContainer>
	)
}
