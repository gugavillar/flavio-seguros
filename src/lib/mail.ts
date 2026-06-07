import { createServerFn } from '@tanstack/react-start'
import { Resend } from 'resend'
import { validateEmail, validatePhone } from 'validations-br'
import z, { ZodError } from 'zod'

import { IS_DEVELOPMENT } from '@/constants'

type Data = {
	name: string
	email: string
	phone: string
	file: string
	message?: string
}

const dataSchema = z.object({
	email: z.email().refine((email) => validateEmail(email)),
	file: z.string(),
	message: z.string().optional(),
	name: z.string(),
	phone: z.string().refine((phone) => validatePhone(phone)),
})

const resend = new Resend(process.env.RESEND_API_KEY)

export const sendMail = createServerFn({ method: 'POST' })
	.validator(async (data: Data) => {
		try {
			const result = dataSchema.parseAsync(data)
			return result
		} catch (error) {
			if (error instanceof ZodError) {
				throw new Error(error.issues[0].message)
			}
		}
	})
	.handler(async ({ data }) => {
		if (!data) {
			throw new Error('Ocorreu um erro ao enviar o formulário')
		}

		const filePath = data.file
		const url = new URL(IS_DEVELOPMENT ? 'http://localhost:3000/api/file' : 'https://gravatacorretora.com.br/api/file')
		url.searchParams.set('file', filePath)

		try {
			const { error } = await resend.emails.send({
				from: 'Não responda <naoresponda@naoresponda.helpmydesk.com.br>',
				html: `
			     <div className='flex flex-col text-lg'>
			     <p>
			       Nome: <strong>${data.name}</strong>
			     </p>
			     <p>
			       Email: <strong>${data.email}</strong>
			     </p>
			     <p>
			       Telefone: <strong>${data.phone}</strong>
			     </p>
			     <p>
			       Currículo: <strong>${url}</strong>
			     </p>
			     ${
							data?.message &&
							`<p>
			         Mensagem: <strong>${data.message}</strong>
			       </p>`
						}
			     </div>
			     `,
				subject: `Currículo - ${data.name}`,
				to: [process.env.SEND_MAIL_TO!],
			})

			if (error) {
				throw new Error('Ocorreu um erro ao enviar o formulário')
			}
			return { message: 'Formulário enviado com sucesso!' }
		} catch {
			throw new Error('Ocorreu um erro ao enviar o formulário')
		}
	})
