import {
	Activity,
	BadgeCheck,
	Banknote,
	Briefcase,
	Building,
	Building2,
	CalendarX,
	Car,
	CheckCircle,
	Clock,
	CloudRain,
	Cog,
	Droplets,
	FileText,
	Flame,
	Gavel,
	Globe,
	HardDrive,
	Headset,
	Heart,
	HeartHandshake,
	Home,
	Key,
	Laptop,
	Lock,
	Luggage,
	MapPin,
	MapPinHouse,
	Plane,
	Scale,
	Settings,
	Shield,
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
		path: '/seguro-vida',
		title: 'Seguro de Vida',
	},
	{
		description: 'Proteção completa para seu veículo com assistência 24h, guincho e carro reserva.',
		icon: Car,
		path: '/seguro-auto',
		title: 'Seguro Auto',
	},
	{
		description: 'Seu lar protegido contra incêndio, roubo, danos elétricos e muito mais.',
		icon: Home,
		path: '/seguro-residencial',
		title: 'Seguro Residencial',
	},
	{
		description: 'Soluções completas para proteger seu negócio e patrimônio empresarial.',
		icon: Umbrella,
		path: '/seguro-empresarial',
		title: 'Seguro Empresarial',
	},
	{
		description: 'Viaje tranquilo com cobertura médica, extravio de bagagem e muito mais.',
		icon: Plane,
		path: '/seguro-viagem',
		title: 'Seguro Viagem',
	},
	{
		description: 'Cobertura para imprevistos que possam causar invalidez, despesas médicas ou morte acidental.',
		icon: Shield,
		path: '/acidentes-pessoais',
		title: 'Acidentes Pessoais',
	},
	{
		description: 'Proteção completa para áreas comuns, estrutura e responsabilidades do condomínio.',
		icon: Building,
		path: '/seguro-condominio',
		title: 'Seguro Condomínio',
	},
	{
		description: 'Garanta seus equipamentos contra danos, roubo e acidentes inesperados.',
		icon: Laptop,
		path: '/seguro-equipamentos',
		title: 'Seguro de Equipamentos',
	},
	{
		description: 'Segurança para proprietários com garantia de recebimento do aluguel em caso de inadimplência.',
		icon: Key,
		path: '/fianca-locaticia',
		title: 'Fiança Locatícia',
	},
	{
		description: 'Solução financeira para conquistar imóveis, veículos ou serviços com parcelas planejadas.',
		icon: MapPinHouse,
		path: '/consorcio',
		title: 'Consórcio',
	},
	{
		description: 'Cobertura para danos causados a terceiros, garantindo mais segurança jurídica e financeira.',
		icon: Scale,
		path: '/responsabilidade-civil',
		title: 'Responsabilidade Civil',
	},
]

export const servicePage = {
	'acidentes-pessoais': {
		badgeLabel: 'Proteção para imprevistos do dia a dia',
		benefits: [
			{
				description:
					'Indenização financeira em caso de morte ou invalidez permanente causada por acidentes inesperados.',
				icon: Shield,
				title: 'Cobertura por Acidente',
			},
			{
				description: 'Reembolso de despesas médicas, hospitalares e odontológicas decorrentes de acidentes cobertos.',
				icon: Stethoscope,
				title: 'Despesas Médicas',
			},
			{
				description: 'Cobertura válida 24 horas por dia, tanto em atividades profissionais quanto pessoais.',
				icon: Clock,
				title: 'Proteção 24h',
			},
			{
				description: 'Possibilidade de contratação individual ou inclusão de familiares na mesma apólice.',
				icon: Users,
				title: 'Cobertura Familiar',
			},
			{
				description: 'Planos flexíveis com valores acessíveis e adaptação às suas necessidades.',
				icon: Sliders,
				title: 'Planos Flexíveis',
			},
			{
				description: 'Segurança financeira para manter sua estabilidade mesmo em situações imprevistas.',
				icon: HeartHandshake,
				title: 'Tranquilidade Financeira',
			},
		],
		description: {
			content: [
				'O Seguro de Acidentes Pessoais oferece proteção financeira em casos de eventos inesperados que podem gerar afastamento do trabalho, despesas médicas elevadas ou impacto direto na renda familiar.',
				'É uma solução ideal para quem busca segurança contínua, garantindo indenização e suporte financeiro mesmo fora do ambiente profissional, durante atividades cotidianas ou momentos de lazer.',
				'Com contratação simples e planos acessíveis, o seguro proporciona tranquilidade para você e sua família, reduzindo riscos financeiros causados por acidentes inesperados.',
			],
			indications: [
				'Profissionais autônomos e liberais',
				'Trabalhadores operacionais e técnicos',
				'Pessoas com rotina ativa ou esportiva',
				'Quem deseja proteção financeira complementar',
			],
			title: 'Sobre acidentes pessoais',
		},
		faqs: [
			{
				'faq-answer':
					'Sim. A cobertura é válida 24 horas por dia, inclusive em atividades pessoais, lazer ou deslocamentos.',
				'faq-question': 'O seguro cobre acidentes fora do trabalho?',
			},
			{
				'faq-answer':
					'Consultas, exames, internações, cirurgias e outros procedimentos relacionados ao acidente coberto.',
				'faq-question': 'Quais despesas médicas são reembolsadas?',
			},
			{
				'faq-answer': 'Sim. É possível contratar planos individuais ou familiares, conforme sua necessidade.',
				'faq-question': 'Posso incluir familiares na apólice?',
			},
			{
				'faq-answer': 'Algumas coberturas podem ter carência, variando conforme a seguradora e o plano contratado.',
				'faq-question': 'Existe carência para utilização do seguro?',
			},
			{
				'faq-answer': 'Sim, dependendo da apólice, pode haver cobertura para afastamento temporário por acidente.',
				'faq-question': 'O seguro cobre invalidez temporária?',
			},
			{
				'faq-answer': 'Qualquer pessoa física que deseje proteção financeira contra acidentes inesperados.',
				'faq-question': 'Quem pode contratar o seguro de acidentes pessoais?',
			},
		],
		icon: Shield,
		subtitle: 'Proteção financeira contínua contra acidentes que podem impactar sua renda e qualidade de vida.',
		title: 'Acidentes pessoais',
	},
	consorcio: {
		badgeLabel: 'Planejamento para suas conquistas',
		benefits: [
			{
				description:
					'Permite adquirir bens ou serviços de forma planejada, sem juros, por meio de parcelas mensais que cabem no seu orçamento.',
				icon: Home,
				title: 'Aquisição Planejada',
			},
			{
				description:
					'Possibilidade de contemplação por sorteio ou lance, antecipando a conquista do seu bem ou serviço.',
				icon: Zap,
				title: 'Contemplação Flexível',
			},
			{
				description:
					'Não há cobrança de juros, apenas taxa de administração, tornando o consórcio uma alternativa mais econômica.',
				icon: CloudRain,
				title: 'Sem Juros',
			},
			{
				description:
					'Oferece segurança jurídica com regras claras definidas em contrato e fiscalização pelos órgãos reguladores.',
				icon: Shield,
				title: 'Segurança e Transparência',
			},
			{
				description:
					'Pode ser utilizado para aquisição de imóveis, veículos ou contratação de serviços, conforme o grupo escolhido.',
				icon: Building,
				title: 'Diversidade de Finalidades',
			},
			{
				description:
					'Planos e valores de crédito podem ser ajustados conforme o objetivo e a capacidade financeira do participante.',
				icon: Settings,
				title: 'Planos Personalizáveis',
			},
		],
		description: {
			content: [
				'O consórcio é uma forma inteligente de planejar a aquisição de bens ou serviços de maneira econômica e organizada.',
				'Ele funciona por meio da união de pessoas com o mesmo objetivo, contribuindo mensalmente para a formação de um fundo comum.',
				'Com opções de contemplação e planos flexíveis, o consórcio oferece previsibilidade financeira e mais controle sobre suas conquistas.',
			],
			indications: [
				'Pessoas que desejam comprar imóveis ou veículos',
				'Quem busca planejamento financeiro sem juros',
				'Famílias que querem realizar projetos de médio e longo prazo',
				'Investidores que preferem aquisição programada',
			],
			title: 'Sobre o consórcio',
		},
		faqs: [
			{
				'faq-answer':
					'Sim. É possível ofertar lances para antecipar a contemplação, além de participar dos sorteios mensais.',
				'faq-question': 'Posso ser contemplado antes do fim do consórcio?',
			},
			{
				'faq-answer': 'Imóveis, veículos e serviços, conforme as regras e categorias definidas no grupo de consórcio.',
				'faq-question': 'Quais bens podem ser adquiridos com consórcio?',
			},
			{
				'faq-answer':
					'O consórcio não possui juros, apenas taxa de administração, enquanto o financiamento inclui juros sobre o valor financiado.',
				'faq-question': 'Qual a diferença entre consórcio e financiamento?',
			},
			{
				'faq-answer':
					'Não. A contemplação depende de sorteio ou lance, respeitando as regras estabelecidas em contrato.',
				'faq-question': 'A contemplação é garantida imediatamente?',
			},
			{
				'faq-answer': 'Sim. É possível escolher planos, valores de crédito e prazos de acordo com seu objetivo.',
				'faq-question': 'Os planos de consórcio podem ser personalizados?',
			},
			{
				'faq-answer': 'Pessoas que desejam se planejar financeiramente para adquirir bens ou serviços sem pagar juros.',
				'faq-question': 'Quem deve contratar um consórcio?',
			},
		],
		icon: Home,
		subtitle: 'Planejamento inteligente para realizar seus sonhos.',
		title: 'Consórcio',
	},
	'fianca-locaticia': {
		badgeLabel: 'Garantia para contratos de aluguel',
		benefits: [
			{
				description: 'Garante o pagamento do aluguel ao proprietário em caso de inadimplência do inquilino.',
				icon: Key,
				title: 'Garantia de Aluguel',
			},
			{
				description: 'Dispensa a necessidade de fiador, caução ou depósito antecipado.',
				icon: CheckCircle,
				title: 'Sem Fiador',
			},
			{
				description: 'Cobertura para encargos como condomínio, IPTU e contas previstas em contrato.',
				icon: FileText,
				title: 'Encargos Inclusos',
			},
			{
				description: 'Processo de contratação rápido, digital e com menos burocracia.',
				icon: Zap,
				title: 'Contratação Simplificada',
			},
			{
				description: 'Mais segurança financeira para o proprietário durante todo o contrato.',
				icon: Shield,
				title: 'Segurança ao Locador',
			},
			{
				description: 'Facilita a aprovação do aluguel, agilizando a negociação do imóvel.',
				icon: TrendingUp,
				title: 'Agilidade na Locação',
			},
		],
		description: {
			content: [
				'A Fiança Locatícia é uma solução moderna que substitui o fiador tradicional, garantindo ao proprietário o recebimento do aluguel mesmo em situações de inadimplência do inquilino.',
				'Além de reduzir burocracias, ela simplifica o processo de locação, trazendo mais segurança jurídica ao locador e praticidade ao inquilino durante toda a vigência do contrato.',
				'É indicada para imóveis residenciais e comerciais, oferecendo tranquilidade financeira e agilidade nas negociações, sem necessidade de depósitos ou garantias adicionais.',
			],
			indications: [
				'Proprietários de imóveis residenciais ou comerciais',
				'Inquilinos que não possuem fiador',
				'Imobiliárias e administradoras de imóveis',
				'Contratos de locação que exigem agilidade',
			],
			title: 'Sobre a fiança locatícia',
		},
		faqs: [
			{
				'faq-answer': 'Sim. Ela elimina a necessidade de fiador, caução ou depósito antecipado.',
				'faq-question': 'A fiança locatícia substitui o fiador?',
			},
			{
				'faq-answer': 'Aluguel, condomínio, IPTU e outros encargos previstos no contrato de locação.',
				'faq-question': 'Quais valores são garantidos pela fiança locatícia?',
			},
			{
				'faq-answer': 'Normalmente o inquilino realiza o pagamento no momento da contratação do aluguel.',
				'faq-question': 'Quem é responsável pelo pagamento da fiança locatícia?',
			},
			{
				'faq-answer': 'Sim. Pode ser contratada tanto para imóveis residenciais quanto comerciais.',
				'faq-question': 'A fiança locatícia é válida para imóveis comerciais?',
			},
			{
				'faq-answer': 'Sim. A seguradora garante o pagamento conforme as condições previstas na apólice.',
				'faq-question': 'O proprietário recebe mesmo em caso de inadimplência?',
			},
			{
				'faq-answer': 'A renovação ocorre conforme o prazo do contrato de aluguel, podendo ser ajustada anualmente.',
				'faq-question': 'Como funciona a renovação da fiança locatícia?',
			},
		],
		icon: Key,
		subtitle: 'Garantia completa para contratos de aluguel com menos burocracia e mais segurança.',
		title: 'Fiança locatícia',
	},
	'responsabilidade-civil': {
		badgeLabel: 'Proteção contra danos a terceiros',
		benefits: [
			{
				description:
					'Cobertura para prejuízos materiais causados involuntariamente a terceiros, protegendo seu patrimônio contra indenizações inesperadas.',
				icon: Scale,
				title: 'Danos Materiais',
			},
			{
				description:
					'Garante indenização em casos de lesões físicas causadas a terceiros durante atividades profissionais ou operacionais.',
				icon: Activity,
				title: 'Danos Corporais',
			},
			{
				description:
					'Proteção financeira para reclamações por danos morais, evitando impactos financeiros decorrentes de processos judiciais.',
				icon: Shield,
				title: 'Danos Morais',
			},
			{
				description:
					'Inclui despesas com defesa jurídica, honorários advocatícios e custas processuais, conforme limites contratados.',
				icon: Gavel,
				title: 'Custos Jurídicos',
			},
			{
				description:
					'Indicada para profissionais e empresas que prestam serviços e desejam se proteger contra erros ou omissões.',
				icon: Briefcase,
				title: 'Cobertura Profissional',
			},
			{
				description:
					'Permite ajustar limites e coberturas de acordo com o risco da atividade exercida, oferecendo segurança sob medida.',
				icon: Settings,
				title: 'Proteção Personalizável',
			},
		],
		description: {
			content: [
				'O Seguro de Responsabilidade Civil protege pessoas físicas e jurídicas contra prejuízos financeiros causados involuntariamente a terceiros no exercício de suas atividades.',
				'Ele é essencial para reduzir riscos jurídicos, cobrindo indenizações por danos materiais, corporais ou morais que possam gerar processos e altos custos.',
				'Com coberturas flexíveis, o seguro oferece mais tranquilidade para empresas e profissionais que desejam atuar com segurança e respaldo financeiro.',
			],
			indications: [
				'Empresas de prestação de serviços',
				'Profissionais liberais',
				'Empreendedores e autônomos',
				'Negócios com atendimento ao público',
			],
			title: 'Sobre responsabilidade civil',
		},
		faqs: [
			{
				'faq-answer':
					'São prejuízos materiais, corporais ou morais causados involuntariamente a outras pessoas durante atividades cobertas pela apólice.',
				'faq-question': 'O que é considerado dano a terceiros?',
			},
			{
				'faq-answer':
					'Não. Ele também é indicado para profissionais liberais, autônomos e pessoas físicas que desejam se proteger contra riscos.',
				'faq-question': 'O seguro é indicado apenas para empresas?',
			},
			{
				'faq-answer': 'Sim. Dependendo do plano contratado, pode incluir honorários advocatícios e despesas judiciais.',
				'faq-question': 'O seguro cobre custos com advogados?',
			},
			{
				'faq-answer':
					'Atividades profissionais, comerciais e operacionais, desde que estejam declaradas e aceitas na contratação.',
				'faq-question': 'Quais atividades podem ser seguradas?',
			},
			{
				'faq-answer': 'Sim. Os limites podem ser ajustados conforme o risco e o porte da atividade exercida.',
				'faq-question': 'É possível personalizar os limites de cobertura?',
			},
			{
				'faq-answer':
					'Sempre que houver uma reclamação formal de terceiros por danos cobertos ocorridos durante a vigência da apólice.',
				'faq-question': 'Quando o seguro pode ser acionado?',
			},
		],
		icon: Scale,
		subtitle: 'Segurança jurídica e financeira.',
		title: 'Responsabilidade civil',
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
				'faq-answer':
					'Você precisará do documento do veículo (CRLV), CNH do condutor principal, comprovante de residência e CPF. Para pessoa jurídica, também é necessário o CNPJ e contrato social.',
				'faq-question': 'Qual documentação preciso para contratar o seguro auto?',
			},
			{
				'faq-answer':
					'Após o envio de toda a documentação, a análise é feita em até 24 horas úteis. Em casos simples, a aprovação pode sair no mesmo dia.',
				'faq-question': 'Quanto tempo leva para aprovar minha proposta?',
			},
			{
				'faq-answer':
					'Sim! Você pode incluir condutores adicionais na apólice. Isso é importante para garantir a cobertura quando outras pessoas dirigirem seu veículo.',
				'faq-question': 'Posso incluir outros motoristas na apólice?',
			},
			{
				'faq-answer':
					'A franquia é o valor que você paga em caso de sinistro parcial. Quanto maior a franquia escolhida, menor o valor do seguro. Oferecemos opções de franquia reduzida, normal e majorada.',
				'faq-question': 'Como funciona a franquia do seguro?',
			},
			{
				'faq-answer':
					'Acessórios instalados após a compra do veículo podem ser cobertos mediante contratação adicional. Som, rodas, kit gás e blindagem são alguns exemplos.',
				'faq-question': 'O seguro cobre acessórios do veículo?',
			},
			{
				'faq-answer':
					'Basta ligar para nossa central de atendimento disponível 24 horas. Você também pode acionar pelo nosso aplicativo ou WhatsApp.',
				'faq-question': 'Como acionar a assistência 24 horas?',
			},
		],
		icon: Car,
		subtitle:
			'Proteja seu veículo contra roubo, colisão e imprevistos com as melhores coberturas do mercado. Assistência 24h e atendimento humanizado.',
		title: 'Seguro Auto',
	},
	'seguro-condominio': {
		badgeLabel: 'Proteção para áreas comuns',
		benefits: [
			{
				description:
					'Cobertura para a estrutura do condomínio, incluindo áreas comuns, fundações, muros, portões e demais elementos essenciais ao funcionamento.',
				icon: Building2,
				title: 'Proteção Estrutural',
			},
			{
				description:
					'Garante indenização em casos de incêndio, explosão, queda de raio e fumaça, protegendo o patrimônio coletivo contra grandes prejuízos.',
				icon: Flame,
				title: 'Danos por Incêndio e Explosão',
			},
			{
				description:
					'Proteção contra vendaval, granizo, alagamento e outros eventos naturais previstos na apólice, reduzindo impactos financeiros ao condomínio.',
				icon: CloudRain,
				title: 'Eventos Naturais',
			},
			{
				description:
					'Cobre danos materiais ou corporais causados a moradores, visitantes ou terceiros nas áreas comuns do condomínio.',
				icon: Shield,
				title: 'Responsabilidade Civil',
			},
			{
				description:
					'Cobertura para elevadores, portões automáticos, bombas, centrais elétricas e outros equipamentos essenciais.',
				icon: Cog,
				title: 'Equipamentos do Condomínio',
			},
			{
				description:
					'Permite a inclusão de coberturas adicionais conforme o perfil do condomínio, oferecendo proteção sob medida.',
				icon: Settings,
				title: 'Coberturas Personalizáveis',
			},
		],
		description: {
			content: [
				'O Seguro Condomínio protege o patrimônio coletivo, cobrindo a estrutura, áreas comuns e equipamentos essenciais contra diversos riscos previstos em apólice.',
				'Além de garantir mais tranquilidade aos moradores, o seguro ajuda a evitar prejuízos financeiros elevados decorrentes de incêndios, eventos naturais ou acidentes.',
				'É uma proteção fundamental para síndicos e administradoras, assegurando o cumprimento legal e a gestão financeira responsável do condomínio.',
			],
			indications: ['Síndicos', 'Administradoras de condomínio', 'Condomínios residenciais', 'Condomínios comerciais'],
			title: 'Sobre o seguro condomínio',
		},
		faqs: [
			{
				'faq-answer':
					'Sim. A legislação brasileira exige que condomínios contratem seguro contra incêndio e outros riscos previstos em lei.',
				'faq-question': 'O seguro condomínio é obrigatório?',
			},
			{
				'faq-answer':
					'Não. O seguro condomínio cobre áreas comuns e estrutura. As unidades devem possuir seguro residencial próprio.',
				'faq-question': 'O seguro cobre apartamentos individuais?',
			},
			{
				'faq-answer': 'Sim, desde que a cobertura de responsabilidade civil esteja contratada na apólice.',
				'faq-question': 'Danos a terceiros estão cobertos?',
			},
			{
				'faq-answer': 'Hall, escadas, elevadores, garagens, portões, áreas de lazer e demais espaços de uso coletivo.',
				'faq-question': 'Quais áreas são consideradas áreas comuns?',
			},
			{
				'faq-answer': 'Sim. Equipamentos do condomínio podem ser incluídos conforme as coberturas contratadas.',
				'faq-question': 'Equipamentos como elevadores estão cobertos?',
			},
			{
				'faq-answer':
					'Sim. As coberturas podem ser ajustadas de acordo com o porte, tipo e necessidades do condomínio.',
				'faq-question': 'É possível personalizar as coberturas?',
			},
		],
		icon: Building2,
		subtitle: 'Segurança para o patrimônio coletivo.',
		title: 'Seguro condomínio',
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
				'faq-answer':
					'Não existe um valor mínimo fixo. O custo depende do tamanho da empresa, atividade, valor do patrimônio e coberturas escolhidas. Fazemos cotações personalizadas.',
				'faq-question': 'Qual o valor mínimo para contratar o seguro empresarial?',
			},
			{
				'faq-answer':
					'Sim, é possível incluir cobertura para equipamentos e atividades realizadas em home office pelos colaboradores. Consulte-nos sobre esta extensão.',
				'faq-question': 'O seguro cobre home office dos funcionários?',
			},
			{
				'faq-answer':
					'Sim, trabalhamos com seguros para diversos segmentos: comércio, indústria, serviços, tecnologia, saúde, entre outros. Cada segmento tem coberturas específicas.',
				'faq-question': 'Empresas de todos os segmentos podem contratar?',
			},
			{
				'faq-answer':
					'É uma proteção que indeniza sua empresa pelos lucros que deixaria de ter durante uma paralisação causada por um sinistro coberto, como incêndio ou explosão.',
				'faq-question': 'O que é a cobertura de lucros cessantes?',
			},
			{
				'faq-answer':
					'Não. Seguros específicos como de veículos da frota ou seguro de vida em grupo para funcionários devem ser contratados separadamente. Oferecemos pacotes completos.',
				'faq-question': 'O seguro empresarial substitui outros seguros obrigatórios?',
			},
			{
				'faq-answer':
					'Ao identificar um sinistro, entre em contato conosco imediatamente. Nossa equipe orienta sobre a documentação necessária e acompanha todo o processo de indenização.',
				'faq-question': 'Como funciona em caso de sinistro?',
			},
		],
		icon: Building2,
		subtitle:
			'Proteja o patrimônio da sua empresa, seus funcionários e a continuidade das operações. Soluções personalizadas para cada segmento.',
		title: 'Seguro empresarial',
	},
	'seguro-equipamentos': {
		badgeLabel: 'Proteção para seus equipamentos',
		benefits: [
			{
				description:
					'Cobertura contra roubo, furto qualificado e danos acidentais que possam comprometer o funcionamento dos equipamentos.',
				icon: Laptop,
				title: 'Danos e Roubo',
			},
			{
				description:
					'Proteção para equipamentos portáteis e fixos utilizados em atividades profissionais ou empresariais.',
				icon: HardDrive,
				title: 'Cobertura Flexível',
			},
			{
				description: 'Indenização em caso de perda total ou danos irreparáveis aos equipamentos segurados.',
				icon: Shield,
				title: 'Perda Total',
			},
			{
				description: 'Cobertura válida em diferentes endereços, conforme condições previstas na apólice.',
				icon: MapPin,
				title: 'Cobertura em Múltiplos Locais',
			},
			{
				description: 'Planos ajustáveis de acordo com o tipo, valor e uso dos equipamentos.',
				icon: Sliders,
				title: 'Planos Personalizados',
			},
			{
				description: 'Redução de prejuízos financeiros e continuidade das atividades profissionais.',
				icon: TrendingUp,
				title: 'Continuidade Operacional',
			},
		],
		description: {
			content: [
				'O Seguro de Equipamentos é a solução ideal para proteger bens essenciais utilizados no dia a dia profissional, evitando prejuízos financeiros causados por roubos, acidentes ou danos inesperados.',
				'Com coberturas personalizadas, o seguro garante indenização ou reparo dos equipamentos, permitindo que sua empresa ou atividade profissional mantenha suas operações sem interrupções.',
				'É indicado tanto para equipamentos fixos quanto portáteis, oferecendo segurança financeira para profissionais autônomos, empresas e prestadores de serviço.',
			],
			indications: [
				'Empresas de pequeno, médio e grande porte',
				'Profissionais autônomos e liberais',
				'Prestadores de serviços técnicos',
				'Negócios que dependem de equipamentos especializados',
			],
			title: 'Sobre o seguro de equipamentos',
		},
		faqs: [
			{
				'faq-answer': 'Sim. Desde que contratado com cobertura para equipamentos portáteis ou múltiplos locais.',
				'faq-question': 'O seguro cobre equipamentos fora do endereço principal?',
			},
			{
				'faq-answer': 'Notebooks, computadores, máquinas industriais, equipamentos médicos, tecnológicos e similares.',
				'faq-question': 'Quais tipos de equipamentos podem ser segurados?',
			},
			{
				'faq-answer': 'Sim. Quedas, impactos e acidentes estão cobertos conforme as condições da apólice.',
				'faq-question': 'Danos acidentais estão cobertos?',
			},
			{
				'faq-answer': 'Depende da seguradora e do contrato. Em muitos casos, é possível incluir equipamentos locados.',
				'faq-question': 'O seguro cobre equipamentos alugados?',
			},
			{
				'faq-answer': 'Sim. O limite varia conforme o plano contratado e o valor declarado dos equipamentos.',
				'faq-question': 'Existe limite de valor para os equipamentos segurados?',
			},
			{
				'faq-answer':
					'Após análise do sinistro, a seguradora realiza o reparo ou pagamento conforme previsto em contrato.',
				'faq-question': 'Como funciona a indenização em caso de sinistro?',
			},
		],
		icon: Laptop,
		subtitle: 'Segurança financeira para proteger equipamentos essenciais contra danos, roubos e imprevistos.',
		title: 'Seguro de equipamentos',
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
				'faq-answer':
					'Sim! O seguro residencial pode ser contratado tanto para casas quanto para apartamentos, com coberturas adaptadas a cada tipo de imóvel.',
				'faq-question': 'O seguro residencial cobre apartamento e casa?',
			},
			{
				'faq-answer':
					'Com certeza! Inquilinos podem contratar o seguro para proteger seus bens pessoais e benfeitorias. Muitos contratos de aluguel inclusive exigem isso.',
				'faq-question': 'Imóvel alugado pode ter seguro residencial?',
			},
			{
				'faq-answer':
					'Móveis, eletrodomésticos, eletrônicos, roupas, objetos de decoração e outros itens dentro da residência. Joias e obras de arte podem ter cobertura adicional.',
				'faq-question': 'Quais bens ficam cobertos pelo seguro?',
			},
			{
				'faq-answer':
					'Reformas pequenas geralmente são cobertas. Para obras maiores, é recomendável contratar um seguro específico de obras para garantir a cobertura completa.',
				'faq-question': 'O seguro cobre reformas e construções?',
			},
			{
				'faq-answer':
					'Você pode acionar serviços como chaveiro, eletricista, encanador, vidraceiro e desentupidor a qualquer hora, sem custo adicional até os limites da apólice.',
				'faq-question': 'Como funciona a assistência 24 horas?',
			},
			{
				'faq-answer':
					'Geralmente não são cobertos: danos por desgaste natural, infestações de pragas, terremotos (salvo contratação específica) e danos intencionais.',
				'faq-question': 'O que não é coberto pelo seguro residencial?',
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
				'faq-answer': 'Sim, o seguro viagem é obrigatório para entrada em países do Espaço Schengen.',
				'faq-question': 'O seguro viagem é obrigatório?',
			},
			{
				'faq-answer': 'Sim, desde que a contratação seja feita antes do início da viagem.',
				'faq-question': 'Posso contratar o seguro viagem depois de comprar a passagem?',
			},
			{
				'faq-answer': 'Você entra em contato com a central de atendimento 24h indicada na apólice.',
				'faq-question': 'Como acionar o seguro durante a viagem?',
			},
			{
				'faq-answer': 'Sim, existem planos específicos para idosos e pessoas com condições pré-existentes.',
				'faq-question': 'O seguro cobre idosos?',
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
				'faq-answer':
					'O seguro individual cobre apenas o titular, enquanto o familiar pode incluir cônjuge e dependentes na mesma apólice, geralmente com custo-benefício melhor.',
				'faq-question': 'Qual a diferença entre seguro de vida individual e familiar?',
			},
			{
				'faq-answer':
					'A maioria das seguradoras aceita contratação até 65-70 anos, mas as condições podem variar. Quanto mais jovem você contratar, menores serão os valores.',
				'faq-question': 'Existe idade máxima para contratar o seguro de vida?',
			},
			{
				'faq-answer':
					'Existe um período de carência de 30 dias. Após esse período sem pagamento, a apólice pode ser cancelada. Algumas seguradoras oferecem opção de reativação.',
				'faq-question': 'O que acontece se eu deixar de pagar o seguro?',
			},
			{
				'faq-answer':
					'Para coberturas até determinados valores, geralmente não é necessário. Para valores maiores, pode ser solicitada uma declaração de saúde ou exames simples.',
				'faq-question': 'Preciso fazer exame médico para contratar?',
			},
			{
				'faq-answer':
					'Por lei, a seguradora tem até 30 dias para pagar após a entrega de toda a documentação necessária. Na prática, muitas pagam em menos tempo.',
				'faq-question': 'Quanto tempo leva para os beneficiários receberem a indenização?',
			},
			{
				'faq-answer':
					'Sim, você pode alterar os beneficiários a qualquer momento, sem custo adicional. Basta solicitar a alteração através da corretora.',
				'faq-question': 'Posso alterar os beneficiários depois de contratar?',
			},
		],
		icon: Heart,
		subtitle:
			'Proteja o futuro da sua família com coberturas completas. Indenização por morte, invalidez e doenças graves com atendimento humanizado.',
		title: 'Seguro de vida',
	},
}
