export const Footer = () => {
	return (
		<footer className='mt-20 pt-10 border-t border-primary/40'>
			<div className='flex flex-col sm:flex-row items-center justify-between gap-6 text-sm text-black'>
				<div className='flex items-center gap-2'>
					<img alt='Logo' className='size-18 object-contain' src='/logos/Logo.webp' />
					<div className='flex flex-col'>
						<p className='font-medium'>Flávio Seguros</p>
						<p>Gravatá Corretora de Seguros</p>
					</div>
				</div>
				<p>© 2026 Todos os direitos reservados</p>
			</div>
		</footer>
	)
}
