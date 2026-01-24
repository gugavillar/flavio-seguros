import { useEffect } from 'react'

export const ScriptChat = () => {
	useEffect(() => {
		const script = document.createElement('script')
		script.src = 'https://wbot.chat/index.js'
		script.setAttribute('token', import.meta.env.VITE_WBOT_TOKEN)
		document.body.appendChild(script)

		return () => {
			document.body.removeChild(script)
		}
	}, [])

	return null
}
