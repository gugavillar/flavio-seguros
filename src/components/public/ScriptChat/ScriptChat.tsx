import { useEffect } from 'react'

import { IS_DEVELOPMENT } from '@/constants'

const SCRIPT_ID = 'wbot-chat-script'

export const ScriptChat = () => {
	useEffect(() => {
		if (document.getElementById(SCRIPT_ID) || IS_DEVELOPMENT) return

		const script = document.createElement('script')
		script.id = SCRIPT_ID
		script.src = 'https://wbot.chat/index.js'
		script.setAttribute('token', import.meta.env.VITE_WBOT_TOKEN)
		script.defer = true
		script.role = 'script'
		document.body.appendChild(script)
	}, [])

	return null
}
