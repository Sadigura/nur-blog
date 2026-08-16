import type { CategoryId } from './categories';

export interface Resource {
	slug: string;
	title: string;
	author: string;
	category: CategoryId;
	description: string;
	image: string | null;
	href: string;
}

// Mesma lógica de src/lib/data/articles.ts, mas para a seção de
// recursos bibliográficos. Cada item aqui é uma "chamada" (como um
// card de destaque) para uma página com uma lista de leituras — não
// um link direto pra fora do site. Adicionar um item aqui já o
// encaixa automaticamente na seção da categoria correspondente.

export const RESOURCES: Resource[] = [
	{
		slug: 'recursos-bibliograficos',
		title: 'Recursos bibliográficos',
		author: 'Núcleo de Estudos NUR',
		category: 'outros',
		description:
			'Sites, revistas, textos-fonte e artigos acadêmicos de acesso livre sobre filosofia islâmica, judaica e a Al-Andalus medieval — organizados por autor e por tema.',
		image: '/images/article-mosaic-12-tribos.jpg',
		href: '/recursos/recursos-bibliograficos'
	}
];
