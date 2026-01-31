import {
	Activity,
	BadgeCheck,
	Banknote,
	Briefcase,
	Building2,
	CalendarX,
	Car,
	Clock,
	Droplets,
	FileText,
	Flame,
	Globe,
	Headset,
	Heart,
	HeartHandshake,
	Home,
	Lock,
	Luggage,
	PiggyBank,
	Plane,
	Scale,
	Shield,
	ShieldCheck,
	Sliders,
	Stethoscope,
	TrendingUp,
	Umbrella,
	Users,
	Wrench,
	Zap,
} from 'lucide-react'

export const services = [
	{
		description: 'Proteção financeira para sua família em momentos difíceis. Coberturas flexíveis e personalizadas.',
		icon: Heart,
		path: 'seguro-vida',
		title: 'Seguro de Vida',
	},
	{
		description: 'Proteção completa para seu veículo com assistência 24h, guincho e carro reserva.',
		icon: Car,
		path: 'seguro-auto',
		title: 'Seguro Auto',
	},
	{
		description: 'Seu lar protegido contra incêndio, roubo, danos elétricos e muito mais.',
		icon: Home,
		path: 'seguro-residencial',
		title: 'Seguro Residencial',
	},
	{
		description: 'Soluções completas para proteger seu negócio e patrimônio empresarial.',
		icon: Umbrella,
		path: 'seguro-empresarial',
		title: 'Seguro Empresarial',
	},
	{
		description: 'Planeje seu futuro com planos de previdência que se adaptam aos seus objetivos.',
		icon: Shield,
		path: 'previdencia-privada',
		title: 'Previdência Privada',
	},
	{
		description: 'Viaje tranquilo com cobertura médica, extravio de bagagem e muito mais.',
		icon: Plane,
		path: 'seguro-viagem',
		title: 'Seguro Viagem',
	},
]

export const servicePage = {
	'previdencia-privada': {
		badgeLabel: 'Planeje hoje, viva tranquilo amanhã',
		benefits: [
			{
				description: 'Construa uma reserva financeira sólida para complementar sua aposentadoria.',
				icon: PiggyBank,
				title: 'Renda para o Futuro',
			},
			{
				description: 'Escolha como e quando receber seu benefício, com opções de renda ou resgate.',
				icon: Sliders,
				title: 'Flexibilidade de Resgate',
			},
			{
				description: 'Planos com vantagens fiscais que ajudam a pagar menos imposto no longo prazo.',
				icon: Banknote,
				title: 'Benefícios Fiscais',
			},
			{
				description: 'Indique beneficiários para garantir segurança financeira à sua família.',
				icon: Users,
				title: 'Proteção Familiar',
			},
			{
				description: 'Invista de forma estratégica com perfis conservador, moderado ou arrojado.',
				icon: TrendingUp,
				title: 'Diversidade de Investimentos',
			},
			{
				description: 'Ideal para quem pensa no longo prazo e quer estabilidade financeira.',
				icon: ShieldCheck,
				title: 'Planejamento de Longo Prazo',
			},
		],
		description: {
			content: [
				'A Previdência Privada é a melhor forma de planejar o futuro com segurança, autonomia e tranquilidade financeira.',
				'Com planos flexíveis, você define o valor das contribuições e escolhe o perfil de investimento mais adequado ao seu objetivo.',
				'É uma excelente alternativa para complementar a aposentadoria do INSS e também uma poderosa ferramenta de planejamento sucessório.',
			],
			indications: [
				'Quem deseja complementar a aposentadoria',
				'Profissionais liberais e autônomos',
				'Pessoas que buscam eficiência tributária',
				'Quem pensa em planejamento sucessório',
			],
			title: 'Sobre a previdência privada',
		},
		faqs: [
			{
				answer:
					'O PGBL permite deduzir contribuições do imposto de renda, enquanto o VGBL é indicado para quem faz declaração simplificada.',
				question: 'Qual a diferença entre PGBL e VGBL?',
			},
			{
				answer: 'Sim, a previdência privada permite resgates conforme as regras do plano contratado.',
				question: 'Posso resgatar o valor antes da aposentadoria?',
			},
			{
				answer: 'Não. Você escolhe o valor e pode ajustar as contribuições ao longo do tempo.',
				question: 'Existe valor mínimo para contribuir?',
			},
			{
				answer: 'Sim, é possível alterar o perfil conforme seus objetivos e momento de vida.',
				question: 'Posso mudar o perfil de investimento?',
			},
		],
		icon: PiggyBank,
		subtitle: 'Garanta um futuro financeiro mais tranquilo com planejamento, flexibilidade e vantagens fiscais.',
		title: 'Previdência privada',
	},
	'seguro-auto': {
		badgeLabel: 'Proteção veicular completa',
		benefits: [
			{
				description: 'Proteção contra roubo, furto, colisão, incêndio e danos causados pela natureza.',
				icon: Shield,
				title: 'Cobertura completa',
			},
			{
				description: 'Socorro mecânico, guincho, chaveiro e troca de pneus a qualquer hora do dia.',
				icon: Clock,
				title: 'Assistência 24 horas',
			},
			{
				description: 'Ampla rede de oficinas e concessionárias credenciadas em todo o Brasil.',
				icon: Wrench,
				title: 'Rede credenciada',
			},
			{
				description: 'Veículo substituto enquanto o seu estiver em reparo ou em caso de sinistro.',
				icon: Car,
				title: 'Carro reserva',
			},
			{
				description: 'Proteção contra danos materiais e corporais causados a outras pessoas.',
				icon: BadgeCheck,
				title: 'Cobertura para terceiros',
			},
			{
				description: 'Suporte dedicado durante todo o processo de sinistro.',
				icon: HeartHandshake,
				title: 'Atendimento humanizado',
			},
		],
		description: {
			content: [
				'O Seguro Auto é a proteção essencial para quem possui um veículo. Mais do que apenas cobrir danos materiais, nosso seguro oferece tranquilidade para você e sua família no dia a dia.',
				'Trabalhamos com as melhores seguradoras do mercado para oferecer as coberturas mais completas com os melhores preços. Nossa equipe especializada analisa seu perfil e encontra a opção ideal para suas necessidades.',
				'Com nosso seguro, você tem a garantia de um atendimento ágil e humanizado em qualquer situação. Desde um simples socorro mecânico até casos mais complexos de sinistro, estamos ao seu lado.',
			],
			indications: [
				'Proprietários de veículos novos ou seminovos',
				'Motoristas que utilizam o carro diariamente',
				'Quem financia ou faz leasing do veículo',
				'Motoristas de aplicativo e frotas empresariais',
			],
			title: 'Sobre o seguro auto',
		},
		faqs: [
			{
				answer:
					'Você precisará do documento do veículo (CRLV), CNH do condutor principal, comprovante de residência e CPF. Para pessoa jurídica, também é necessário o CNPJ e contrato social.',
				question: 'Qual documentação preciso para contratar o seguro auto?',
			},
			{
				answer:
					'Após o envio de toda a documentação, a análise é feita em até 24 horas úteis. Em casos simples, a aprovação pode sair no mesmo dia.',
				question: 'Quanto tempo leva para aprovar minha proposta?',
			},
			{
				answer:
					'Sim! Você pode incluir condutores adicionais na apólice. Isso é importante para garantir a cobertura quando outras pessoas dirigirem seu veículo.',
				question: 'Posso incluir outros motoristas na apólice?',
			},
			{
				answer:
					'A franquia é o valor que você paga em caso de sinistro parcial. Quanto maior a franquia escolhida, menor o valor do seguro. Oferecemos opções de franquia reduzida, normal e majorada.',
				question: 'Como funciona a franquia do seguro?',
			},
			{
				answer:
					'Acessórios instalados após a compra do veículo podem ser cobertos mediante contratação adicional. Som, rodas, kit gás e blindagem são alguns exemplos.',
				question: 'O seguro cobre acessórios do veículo?',
			},
			{
				answer:
					'Basta ligar para nossa central de atendimento disponível 24 horas. Você também pode acionar pelo nosso aplicativo ou WhatsApp.',
				question: 'Como acionar a assistência 24 horas?',
			},
		],
		icon: Car,
		subtitle:
			'Proteja seu veículo contra roubo, colisão e imprevistos com as melhores coberturas do mercado. Assistência 24h e atendimento humanizado.',
		title: 'Seguro Auto',
	},
	'seguro-empresarial': {
		badgeLabel: 'Proteção completa para seu negócio',
		benefits: [
			{
				description: 'Cobertura para prédio, instalações, maquinário e estoque da empresa.',
				icon: Building2,
				title: 'Proteção Patrimonial',
			},
			{
				description: 'Proteção contra danos causados a terceiros em suas atividades.',
				icon: Shield,
				title: 'Responsabilidade Civil',
			},
			{
				description: 'Indenização pela perda de lucros durante paralisação das atividades.',
				icon: TrendingUp,
				title: 'Lucros Cessantes',
			},
			{
				description: 'Cobertura para funcionários em caso de acidentes no trabalho.',
				icon: Users,
				title: 'Acidentes Pessoais',
			},
			{
				description: 'Proteção para documentos, arquivos e sistemas de informação.',
				icon: FileText,
				title: 'Documentos e Dados',
			},
			{
				description: 'Coberturas específicas para seu ramo de atividade.',
				icon: Briefcase,
				title: 'Riscos Diversos',
			},
		],
		description: {
			content: [
				'O Seguro Empresarial é fundamental para proteger o patrimônio e a continuidade do seu negócio. Mais do que uma proteção, é um investimento na segurança da sua empresa.',
				'Oferecemos soluções completas que vão desde a proteção do prédio e equipamentos até coberturas específicas para seu segmento de atuação. Cada apólice é personalizada.',
				'Com uma equipe especializada em riscos empresariais, ajudamos você a identificar vulnerabilidades e construir a proteção ideal para seu negócio crescer com segurança.',
			],
			indications: [
				'Pequenas e médias empresas de todos os setores',
				'Comércios e lojas físicas',
				'Indústrias e fábricas',
				'Prestadores de serviços e escritórios',
				'Empresas de tecnologia e startups',
			],
			title: 'Sobre o seguro empresarial',
		},
		faqs: [
			{
				answer:
					'Não existe um valor mínimo fixo. O custo depende do tamanho da empresa, atividade, valor do patrimônio e coberturas escolhidas. Fazemos cotações personalizadas.',
				question: 'Qual o valor mínimo para contratar o seguro empresarial?',
			},
			{
				answer:
					'Sim, é possível incluir cobertura para equipamentos e atividades realizadas em home office pelos colaboradores. Consulte-nos sobre esta extensão.',
				question: 'O seguro cobre home office dos funcionários?',
			},
			{
				answer:
					'Sim, trabalhamos com seguros para diversos segmentos: comércio, indústria, serviços, tecnologia, saúde, entre outros. Cada segmento tem coberturas específicas.',
				question: 'Empresas de todos os segmentos podem contratar?',
			},
			{
				answer:
					'É uma proteção que indeniza sua empresa pelos lucros que deixaria de ter durante uma paralisação causada por um sinistro coberto, como incêndio ou explosão.',
				question: 'O que é a cobertura de lucros cessantes?',
			},
			{
				answer:
					'Não. Seguros específicos como de veículos da frota ou seguro de vida em grupo para funcionários devem ser contratados separadamente. Oferecemos pacotes completos.',
				question: 'O seguro empresarial substitui outros seguros obrigatórios?',
			},
			{
				answer:
					'Ao identificar um sinistro, entre em contato conosco imediatamente. Nossa equipe orienta sobre a documentação necessária e acompanha todo o processo de indenização.',
				question: 'Como funciona em caso de sinistro?',
			},
		],
		icon: Building2,
		subtitle:
			'Proteja o patrimônio da sua empresa, seus funcionários e a continuidade das operações. Soluções personalizadas para cada segmento.',
		title: 'Seguro empresarial',
	},
	'seguro-residencial': {
		badgeLabel: 'Proteção para seu lar',
		benefits: [
			{
				description: 'Proteção contra danos causados por incêndio, explosão e fumaça.',
				icon: Flame,
				title: 'Incêndio e Explosão',
			},
			{
				description: 'Cobertura para bens roubados ou furtados dentro da residência.',
				icon: Lock,
				title: 'Roubo e Furto',
			},
			{
				description: 'Proteção para eletrodomésticos e eletrônicos danificados por oscilações.',
				icon: Zap,
				title: 'Danos Elétricos',
			},
			{
				description: 'Cobertura contra danos causados por fenômenos naturais.',
				icon: Droplets,
				title: 'Vendaval e Alagamento',
			},
			{
				description: 'Proteção contra danos que você causar involuntariamente a terceiros.',
				icon: Shield,
				title: 'Responsabilidade Civil',
			},
			{
				description: 'Eletricista, encanador, chaveiro e outros serviços emergenciais 24h.',
				icon: Home,
				title: 'Assistência Residencial',
			},
		],
		description: {
			content: [
				'Sua casa é seu maior patrimônio e merece proteção completa. O Seguro Residencial oferece tranquilidade para você e sua família, protegendo contra imprevistos do dia a dia.',
				'Além das coberturas tradicionais contra incêndio e roubo, nosso seguro inclui assistência 24 horas com serviços essenciais como eletricista, encanador e chaveiro.',
				'Personalizamos sua apólice de acordo com suas necessidades, garantindo que você pague apenas pelo que realmente precisa. Do apartamento compacto à casa de praia, temos a solução ideal.',
			],
			indications: [
				'Proprietários de imóveis residenciais',
				'Inquilinos que desejam proteger seus bens',
				'Donos de casas de veraneio ou campo',
				'Moradores de condomínios',
			],
			title: 'Sobre o seguro residencial',
		},
		faqs: [
			{
				answer:
					'Sim! O seguro residencial pode ser contratado tanto para casas quanto para apartamentos, com coberturas adaptadas a cada tipo de imóvel.',
				question: 'O seguro residencial cobre apartamento e casa?',
			},
			{
				answer:
					'Com certeza! Inquilinos podem contratar o seguro para proteger seus bens pessoais e benfeitorias. Muitos contratos de aluguel inclusive exigem isso.',
				question: 'Imóvel alugado pode ter seguro residencial?',
			},
			{
				answer:
					'Móveis, eletrodomésticos, eletrônicos, roupas, objetos de decoração e outros itens dentro da residência. Joias e obras de arte podem ter cobertura adicional.',
				question: 'Quais bens ficam cobertos pelo seguro?',
			},
			{
				answer:
					'Reformas pequenas geralmente são cobertas. Para obras maiores, é recomendável contratar um seguro específico de obras para garantir a cobertura completa.',
				question: 'O seguro cobre reformas e construções?',
			},
			{
				answer:
					'Você pode acionar serviços como chaveiro, eletricista, encanador, vidraceiro e desentupidor a qualquer hora, sem custo adicional até os limites da apólice.',
				question: 'Como funciona a assistência 24 horas?',
			},
			{
				answer:
					'Geralmente não são cobertos: danos por desgaste natural, infestações de pragas, terremotos (salvo contratação específica) e danos intencionais.',
				question: 'O que não é coberto pelo seguro residencial?',
			},
		],
		icon: Home,
		subtitle:
			'Proteja sua casa e seus bens contra incêndio, roubo, danos elétricos e muito mais. Assistência 24h com eletricista, encanador e chaveiro.',
		title: 'Seguro residencial',
	},

	'seguro-viagem': {
		badgeLabel: 'Viaje com tranquilidade',
		benefits: [
			{
				description: 'Cobertura para despesas médicas e hospitalares em viagens nacionais e internacionais.',
				icon: Stethoscope,
				title: 'Assistência Médica',
			},
			{
				description: 'Atendimento em caso de extravio, roubo ou dano à bagagem.',
				icon: Luggage,
				title: 'Proteção de Bagagem',
			},
			{
				description: 'Cobertura para cancelamento ou interrupção da viagem.',
				icon: CalendarX,
				title: 'Cancelamento de Viagem',
			},
			{
				description: 'Suporte jurídico e assistência em situações emergenciais.',
				icon: Scale,
				title: 'Assistência Jurídica',
			},
			{
				description: 'Atendimento 24h em português, em qualquer lugar do mundo.',
				icon: Headset,
				title: 'Atendimento 24h',
			},
			{
				description: 'Cobertura exigida por países do Tratado de Schengen.',
				icon: Globe,
				title: 'Cobertura Internacional',
			},
		],
		description: {
			content: [
				'O Seguro Viagem é essencial para quem quer aproveitar a viagem sem preocupações.',
				'Ele garante assistência médica, suporte em emergências e proteção contra imprevistos que podem gerar altos custos.',
				'É obrigatório para entrada em alguns países e altamente recomendado para qualquer tipo de viagem.',
			],
			indications: [
				'Viagens internacionais',
				'Viagens a lazer ou trabalho',
				'Estudantes em intercâmbio',
				'Famílias e idosos viajando',
			],
			title: 'Sobre o seguro viagem',
		},
		faqs: [
			{
				answer: 'Sim, o seguro viagem é obrigatório para entrada em países do Espaço Schengen.',
				question: 'O seguro viagem é obrigatório?',
			},
			{
				answer: 'Sim, desde que a contratação seja feita antes do início da viagem.',
				question: 'Posso contratar o seguro viagem depois de comprar a passagem?',
			},
			{
				answer: 'Você entra em contato com a central de atendimento 24h indicada na apólice.',
				question: 'Como acionar o seguro durante a viagem?',
			},
			{
				answer: 'Sim, existem planos específicos para idosos e pessoas com condições pré-existentes.',
				question: 'O seguro cobre idosos?',
			},
		],
		icon: Plane,
		subtitle: 'Viaje protegido contra imprevistos com assistência completa, no Brasil e no exterior.',
		title: 'Seguro viagem',
	},
	'seguro-vida': {
		badgeLabel: 'Proteção para quem você ama',
		benefits: [
			{
				description: 'Garanta a segurança financeira da sua família em caso de imprevistos.',
				icon: Shield,
				title: 'Proteção Financeira',
			},
			{
				description: 'Inclua cônjuge e filhos na mesma apólice com condições especiais.',
				icon: Users,
				title: 'Cobertura Familiar',
			},
			{
				description: 'Receba uma indenização em caso de invalidez permanente por acidente.',
				icon: Banknote,
				title: 'Indenização por Invalidez',
			},
			{
				description: 'Cobertura adicional para diagnóstico de doenças graves como câncer e infarto.',
				icon: Activity,
				title: 'Doenças Graves',
			},
			{
				description: 'Serviço completo de assistência funeral para você e sua família.',
				icon: Clock,
				title: 'Assistência Funeral',
			},
			{
				description: 'Opção de resgate de parte do valor pago após determinado período.',
				icon: Heart,
				title: 'Seguro Resgatável',
			},
		],
		description: {
			content: [
				'O Seguro de Vida é mais do que uma proteção financeira - é um ato de amor e responsabilidade com quem você ama. Garanta que sua família esteja amparada em qualquer situação.',
				'Oferecemos planos flexíveis que se adaptam ao seu momento de vida e orçamento. Das coberturas básicas às mais completas, você escolhe o nível de proteção ideal.',
				'Nossos especialistas ajudam você a entender cada cobertura e benefício, garantindo que você faça a escolha certa. O processo é simples, rápido e sem burocracia.',
			],
			indications: [
				'Chefes de família que são a principal fonte de renda',
				'Profissionais autônomos e empreendedores',
				'Pessoas com financiamentos ou dívidas',
				'Quem deseja deixar uma herança organizada',
			],
			title: 'Sobre o seguro de vida',
		},
		faqs: [
			{
				answer:
					'O seguro individual cobre apenas o titular, enquanto o familiar pode incluir cônjuge e dependentes na mesma apólice, geralmente com custo-benefício melhor.',
				question: 'Qual a diferença entre seguro de vida individual e familiar?',
			},
			{
				answer:
					'A maioria das seguradoras aceita contratação até 65-70 anos, mas as condições podem variar. Quanto mais jovem você contratar, menores serão os valores.',
				question: 'Existe idade máxima para contratar o seguro de vida?',
			},
			{
				answer:
					'Existe um período de carência de 30 dias. Após esse período sem pagamento, a apólice pode ser cancelada. Algumas seguradoras oferecem opção de reativação.',
				question: 'O que acontece se eu deixar de pagar o seguro?',
			},
			{
				answer:
					'Para coberturas até determinados valores, geralmente não é necessário. Para valores maiores, pode ser solicitada uma declaração de saúde ou exames simples.',
				question: 'Preciso fazer exame médico para contratar?',
			},
			{
				answer:
					'Por lei, a seguradora tem até 30 dias para pagar após a entrega de toda a documentação necessária. Na prática, muitas pagam em menos tempo.',
				question: 'Quanto tempo leva para os beneficiários receberem a indenização?',
			},
			{
				answer:
					'Sim, você pode alterar os beneficiários a qualquer momento, sem custo adicional. Basta solicitar a alteração através da corretora.',
				question: 'Posso alterar os beneficiários depois de contratar?',
			},
		],
		icon: Heart,
		subtitle:
			'Proteja o futuro da sua família com coberturas completas. Indenização por morte, invalidez e doenças graves com atendimento humanizado.',
		title: 'Seguro de vida',
	},
}
