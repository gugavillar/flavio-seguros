export const messages = {
	lost: 'Olá! Não encontrei a página que estava procurando no site.\nPoderia me orientar ou tirar uma dúvida?',
	price: (type?: string) =>
		`Olá! Vim pelo site e gostaria de solicitar uma cotação${type ? ` de ${type}` : ''}.\nPode me ajudar?`,
	talk: 'Olá! Tudo bem? Vim pelo site e gostaria de falar com um consultor sobre seguros.',
}
