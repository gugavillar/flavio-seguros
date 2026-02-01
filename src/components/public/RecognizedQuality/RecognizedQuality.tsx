import { Crown } from 'lucide-react'

import { Button } from '../Button'

export const RecognizedQuality = () => {
	return (
		<div className='bg-primary-gradient text-white shadow-md'>
			<div className='p-12 text-center'>
				<Crown className='mx-auto mb-6 size-16' />
				<h2 className='mb-4 font-bold font-title text-3xl md:text-4xl'>Qualidade reconhecida</h2>
				<p className='mx-auto mb-8 max-w-xl text-slate-200'>
					Nossas premiações refletem o compromisso diário de oferecer o melhor serviço para você e sua família. Conte
					conosco!
				</p>
				<Button className='border border-gray-200 bg-white text-primary hover:bg-white/70'>Solicitar cotação</Button>
			</div>
		</div>
	)
}
