import { createClient } from '@prismicio/client'
import { createServerFn } from '@tanstack/react-start'
import z from 'zod'

type Method = 'getByUID' | 'getAllByType'

type Data = {
	method: Method
	args: Array<string>
}

export const getPageData = createServerFn()
	.validator((data: Data) => {
		return z
			.object({
				args: z.array(z.string()),
				method: z.enum(['getByUID', 'getAllByType']),
			})
			.parse(data)
	})
	.handler(async ({ data }) => {
		const client = createClient(process.env.PRISMIC_ENDPOINT as string, {
			accessToken: process.env.PRISMIC_ACCESS_TOKEN,
		})

		const { args, method } = data

		let result: unknown

		if (method === 'getByUID') {
			result = await client.getByUID(args[0], args[1])
		} else {
			result = await client.getAllByType(args[0])
		}

		return JSON.parse(JSON.stringify(result))
	})
