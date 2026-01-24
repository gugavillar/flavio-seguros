import { Mail, MapPin, Phone } from 'lucide-react'

export const heroMock = [
	{
		image: {
			alt: 'casa',
			url: 'https://images.unsplash.com/photo-1732717566587-f5a155bd8dea?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		},
		subTitle: 'Cuidamos do que é mais importante para você, com segurança, transparência e tranquilidade.',
		title: 'Proteção em todos os momentos',
	},
	{
		image: {
			alt: 'idosos',
			url: 'https://images.unsplash.com/photo-1514415008039-efa173293080?q=80&w=2346&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		},
		subTitle: 'Planos feitos para proteger sua família e garantir um futuro mais seguro.',
		title: 'Segurança hoje, tranquilidade amanhã',
	},
	{
		image: {
			alt: 'contrato',
			url: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		},
		subTitle: 'Atendimento personalizado e as melhores opções para você, sua família e patrimônio.',
		title: 'Soluções feitas para a sua realidade',
	},
]

export const info = [
	{
		href: 'tel:08135331163',
		icon: <Phone />,
		text: '(81) 3533-1163',
	},
	{
		href: 'mailto:contato@flavioseguros.com.br',
		icon: <Mail />,
		rel: 'noreferrer',
		target: '_blank',
		text: 'contato@flavioseguros.com.br',
	},
	{
		href: 'https://www.google.com/maps/place/R.+Izaltino+Poggi,+130+-+Prado,+Gravat%C3%A1+-+PE,+55642-160/@-8.2014147,-35.5670971,17z/data=!3m1!4b1!4m6!3m5!1s0x7aa4827e0434525:0xc2a0c4de41ffd656!8m2!3d-8.2014147!4d-35.5645222!16s%2Fg%2F11jyxswqlp?entry=ttu&g_ep=EgoyMDI2MDEyMS4wIKXMDSoKLDEwMDc5MjA2OUgBUAM%3D',
		icon: <MapPin />,
		rel: 'noreferrer',
		target: '_blank',
		text: 'Rua Isaltino Pogg, 130 - Prado - Gravatá - PE',
	},
]
