import { Spinner } from '../Spinner'

export const GlobalLoading = () => {
	return (
		<div className='fixed inset-0 z-50 flex items-center justify-center bg-black/20'>
			<Spinner className='size-12 text-primary' />
		</div>
	)
}
