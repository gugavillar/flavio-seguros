import { zodResolver } from '@hookform/resolvers/zod'
import { ArrowRight, FileText, Upload, X } from 'lucide-react'
import { useRef } from 'react'
import { Controller, useForm } from 'react-hook-form'

import { Button, Input, Label, MaskedInput } from '@/components/core'

import { type FormSchemaType, formSchema } from './Form.schema'

export const Form = () => {
	const {
		register,
		handleSubmit,
		control,
		watch,
		setValue,
		formState: { errors },
	} = useForm<FormSchemaType>({
		defaultValues: {
			email: '',
			file: undefined,
			message: '',
			name: '',
			phone: '',
		},
		mode: 'onBlur',
		resolver: zodResolver(formSchema),
	})
	const inputRef = useRef<HTMLInputElement>(null)

	const onSubmit = (data: FormSchemaType) => {
		console.log(data)
	}

	const file = watch('file')

	return (
		<div className='mx-auto max-w-2xl rounded-lg border border-gray-200 bg-white shadow-sm shadow-soft-white'>
			<div className='p-8'>
				<form className='space-y-6' onSubmit={handleSubmit(onSubmit)}>
					<div className='space-y-2'>
						<Label htmlFor='name'>Nome completo*</Label>
						<Input id='name' placeholder='Seu nome completo' {...register('name')} />
						{errors.name && <p className='text-red-500 text-xs'>{errors.name.message}</p>}
					</div>
					<div className='grid gap-4 md:grid-cols-2'>
						<div className='space-y-2'>
							<Label htmlFor='email'>E-mail*</Label>
							<Input id='email' placeholder='seu@email.com' type='email' {...register('email')} />
							{errors.email && <p className='text-red-500 text-xs'>{errors.email.message}</p>}
						</div>
						<div className='space-y-2'>
							<Label htmlFor='phone'>Telefone*</Label>
							<MaskedInput format='(##) #####-####' id='phone' placeholder='(99) 99999-9999' {...register('phone')} />
							{errors.phone && <p className='text-red-500 text-xs'>{errors.phone.message}</p>}
						</div>
					</div>
					<div className='space-y-2'>
						<Label htmlFor='message'>Mensagem (opcional)</Label>
						<textarea
							className='flex min-h-20 w-full resize-none rounded-md border border-gray-400 px-3 py-2 text-base ring-offset-white file:border-0 file:bg-transparent file:font-medium file:text-black/80 file:text-sm placeholder:text-gray-400 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm'
							id='message'
							maxLength={1000}
							placeholder='Conte um pouco sobre você, sua experiência e área de interesse...'
							rows={4}
							{...register('message')}
						/>
						{errors.message && <p className='text-red-500 text-xs'>{errors.message.message}</p>}
					</div>
					<div className='space-y-2'>
						<Label htmlFor='file'>Currículo em PDF*</Label>
						{file ? (
							<div className='flex items-center gap-3 rounded-lg border border-gray-200 bg-primary/10 p-4'>
								<FileText className='size-8 shrink-0 text-primary' />
								<div className='min-w-0 flex-1'>
									<p className='truncate text-black/80 text-sm'>{file?.name}</p>
									<p className='text-gray-500 text-xs'>{(file?.size / 1024).toFixed(0)} KB</p>
								</div>
								<button
									className='cursor-pointer text-gray-500 transition-colors hover:text-red-500'
									onClick={() => setValue('file', undefined)}
									type='button'
								>
									<X />
								</button>
							</div>
						) : (
							<Controller
								control={control}
								name='file'
								render={({ field }) => (
									<>
										<input
											accept='.pdf'
											className='invisible'
											id='file'
											multiple={false}
											onChange={(e) => field.onChange(e.target.files?.[0] ?? null)}
											ref={(e) => {
												field.ref(e)
												inputRef.current = e
											}}
											type='file'
										/>
										<button
											className='w-full cursor-pointer cursor-pointer" rounded-lg border-2 border-gray-200 border-dashed p-8 text-center transition-colors hover:border-primary/50 hover:bg-primary/10'
											onClick={() => inputRef.current?.click()}
											type='button'
										>
											<Upload className='mx-auto mb-3 size-10 text-gray-500' />
											<p className='text-black/80 text-sm'>Clique para selecionar seu currículo</p>
											<p className='mt-1 text-gray-500 text-xs'>Apenas PDF, máximo de 2MB</p>
										</button>
									</>
								)}
							/>
						)}
						{errors.file && <p className='text-red-500 text-xs'>{errors?.file?.message as string}</p>}
					</div>
					<Button className='w-full' type='submit'>
						Enviar currículo <ArrowRight />
					</Button>
				</form>
			</div>
		</div>
	)
}
