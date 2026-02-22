import { render } from '@testing-library/react'

import { ScriptChat } from './ScriptChat'

const SCRIPT_ID = 'wbot-chat-script'

describe('<ScriptChat />', () => {
	it('should add script correctly', () => {
		render(<ScriptChat />)
		const script = document.querySelector('script[role="script"]')
		expect(script).toBeInTheDocument()
		expect(script).toHaveAttribute('id', SCRIPT_ID)
		expect(script).toHaveAttribute('src', 'https://wbot.chat/index.js')
		expect(script).toHaveAttribute('defer')
		expect(script).toHaveAttribute('token', import.meta.env.VITE_WBOT_TOKEN)
	})

	it('should not add script if already exists', () => {
		render(<ScriptChat />)
		render(<ScriptChat />)
		const scripts = document.querySelectorAll('script[role="script"]')
		expect(scripts).toHaveLength(1)
	})
})
