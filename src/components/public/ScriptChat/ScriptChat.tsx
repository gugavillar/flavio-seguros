import { useEffect } from 'react'

const SCRIPT_ID = 'wbot-chat-script'

export const ScriptChat = () => {
	useEffect(() => {
		if (document.getElementById(SCRIPT_ID)) return

		const script = document.createElement('script')
		script.id = SCRIPT_ID
		script.src = 'https://wbot.chat/index.js'
		script.setAttribute('token', import.meta.env.VITE_WBOT_TOKEN)
		document.body.appendChild(script)
	}, [])

	return null
}
