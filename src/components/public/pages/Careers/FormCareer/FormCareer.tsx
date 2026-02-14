import { PageContainer } from '@/components/core'

import { Form } from './Form'

export const FormCareer = () => {
	return (
		<PageContainer>
			<div className='mb-16 text-center'>
				<h2 className='mb-4 font-bold font-title text-3xl text-black/80 md:text-4xl'>Envie seu currículo</h2>
				<p className='mx-auto max-w-2xl text-gray-500'>
					Preencha o formulário abaixo e anexe seu currículo em PDF. Entraremos em contato quando surgir uma
					oportunidade compatível com seu perfil.
				</p>
			</div>
			<Form />
		</PageContainer>
	)
}
