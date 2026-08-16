import type { CategoryId } from './categories';

export interface Article {
	slug: string;
	title: string;
	author: string;
	category: CategoryId;
	description: string;
	/** caminho em static/, ou null para usar o padrão geométrico gerado */
	image: string | null;
	href: string;
	/** 'hero' = card grande do topo, 'spotlight' = card de destaque, undefined = grade normal */
	featured?: 'hero' | 'spotlight';
}

// -----------------------------------------------------------------
// Como adicionar um artigo novo:
//   1. Escreva a página em src/routes/artigos/<slug>/+page.svelte
//      (copie uma pasta existente como modelo).
//   2. Adicione um objeto aqui com o mesmo `slug` e o `href` apontando
//      pra rota criada.
//   3. Escolha uma `category` da lista em src/lib/data/categories.ts.
// O card aparece sozinho na seção da categoria escolhida, já com a
// cor certa — nada mais precisa ser editado na página inicial.
// -----------------------------------------------------------------

export const ARTICLES: Article[] = [
	{
		slug: 'al-farabi-vida-e-reflexao-filosofica',
		title: 'Al-Fārābī: vida e reflexão filosófica',
		author: 'Francisca Galiléia Pereira da Silva',
		category: 'falsafa',
		description:
			'Antes de expor o pensamento do Segundo Mestre, é preciso situá-lo no contexto religioso-político que viveu: a emancipação do Islã e o círculo de traduções do grego para o árabe.',
		image: '/images/article-xadrez-karabela.jpg',
		href: '/artigos/al-farabi-vida-e-reflexao-filosofica'
	},

	// -- Kalam --------------------------------------------------------
	{
		slug: 'saadia-al-fayyumi',
		title: 'Saadia Al-Fayyumi (Gaon)',
		author: 'Núcleo de Estudos NUR',
		category: 'kalam',
		description:
			'Gaon da Academia de Sura e um dos primeiros filósofos judeus medievais — autor do Livro das Crenças e Opiniões, que aplica o método do kalam mutazilita à defesa racional do judaísmo.',
		image: null,
		href: '/artigos/saadia-al-fayyumi'
	},
	{
		slug: 'daud-al-muqammas',
		title: 'Daud al-Muqammas',
		author: 'Núcleo de Estudos NUR',
		category: 'kalam',
		description:
			'Considerado o pai da filosofia judaica medieval — combina o kalam com a filosofia grega nos Vinte Capítulos, parcialmente redescobertos em São Petersburgo em 1898.',
		image: null,
		href: '/artigos/daud-al-muqammas'
	},
	{
		slug: 'al-qirqisani',
		title: "Al-Qirqisani (o caraíta)",
		author: 'Núcleo de Estudos NUR',
		category: 'kalam',
		description:
			'Filósofo e exegeta caraíta do século X, autor do Livro das Luzes — uma fonte central sobre o desenvolvimento das seitas judaicas.',
		image: '/images/article-qibla-diagrama.jpg',
		href: '/artigos/al-qirqisani'
	},

	// -- Neoplatonismo judaico -----------------------------------------
	{
		slug: 'isaac-israeli',
		title: 'Isaac Israeli',
		author: 'Cecília Cintra Cavaleiro de Macedo',
		category: 'neoplatonismo-judaico',
		description:
			'O primeiro neoplatônico judeu medieval — médico da corte fatímida cujas obras, traduzidas ao latim, circularam por séculos sob o nome de seu próprio tradutor.',
		image: '/images/article-mosaic-12-tribos.jpg',
		href: '/artigos/isaac-israeli'
	},
	{
		slug: 'ibn-gabirol',
		title: 'Ibn Gabirol (Avicebron)',
		author: 'Cecília Cintra Cavaleiro de Macedo',
		category: 'neoplatonismo-judaico',
		description:
			'Poeta e o primeiro metafísico espanhol — autor da Fonte da Vida (Fons Vitae), lida por séculos na Escolástica latina sem que se soubesse tratar-se de um autor judeu.',
		image: '/images/article-manuscrito-iluminado.jpg',
		href: '/artigos/ibn-gabirol'
	},

	// -- Falsafa (continuação) ------------------------------------------
	{
		slug: 'ibn-sina',
		title: 'Ibn Sina (Avicena)',
		author: 'Jamil Ibrahim Iskandar',
		category: 'falsafa',
		description:
			'O Sumo Sheik — médico e filósofo cujo Cânone de Medicina e Al-Shifā\' moldaram tanto a ciência quanto a Escolástica latina até o século XVII.',
		image: '/images/article-cirurgia-medieval.jpg',
		href: '/artigos/ibn-sina'
	},

	// -- Outros ---------------------------------------------------------
	{
		slug: 'maimonides',
		title: 'Maimônides',
		author: 'Núcleo de Estudos NUR',
		category: 'outros',
		description:
			'Médico, filósofo e o mais influente pensador judeu medieval — vida, formação, e o projeto do Guia para os Perplexos entre razão filosófica e Lei revelada.',
		image: null,
		href: '/artigos/maimonides'
	},
	{
		slug: 'yehuda-halevi',
		title: 'Yehuda Halevi',
		author: 'Núcleo de Estudos NUR',
		category: 'outros',
		description:
			'Poeta e filósofo de Al-Andalus, autor do Kuzari — o diálogo entre um rei cazar e um sábio judeu que se tornou uma das defesas mais lidas da fé revelada contra a filosofia.',
		image: '/images/article-mahzor-cavaleiros.jpg',
		href: '/artigos/yehuda-halevi'
	},
	{
		slug: 'ibn-arabi',
		title: "Ibn 'Arabi",
		author: 'Sandra Regina Benato',
		category: 'outros',
		description:
			'Al-Sheikh al-Akbar, o Mestre Maior — a doutrina da wahdat al-wujud, a unidade do ser, e sua vasta obra mística entre Múrcia e Damasco.',
		image: '/images/article-profetas-persa.jpg',
		href: '/artigos/ibn-arabi'
	},
	{
		slug: 'samuel-ibn-nagrella',
		title: 'Samuel ibn Nagrella (Samuel Há-Naguid)',
		author: 'Núcleo de Estudos NUR',
		category: 'outros',
		description:
			'Poeta e político de Córdoba, figura de prestígio no governo de Granada — dos poucos a escrever poesia épica e política na tradição hebraica de seu tempo.',
		image: '/images/article-manuscrito-bizantino.jpg',
		href: '/artigos/samuel-ibn-nagrella'
	}
];
