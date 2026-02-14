export const Footer = () => {
	return (
		<footer className='mt-20 border-primary/40 border-t pt-10'>
			<div className='flex flex-col items-center justify-between gap-6 text-black text-sm sm:flex-row'>
				<div className='flex flex-col gap-2'>
					<img alt='Logo' className='h-6 w-50' src='/logos/Logo.webp' />
					<p>Gravatá Corretora de Seguros</p>
				</div>
				<p>© 2026 Todos os direitos reservados</p>
			</div>
		</footer>
	)
}
