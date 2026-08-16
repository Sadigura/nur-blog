export type CategoryId =
	| 'falsafa'
	| 'kalam'
	| 'averroismo-latino'
	| 'mistica'
	| 'cabala'
	| 'mistica-judaica'
	| 'neoplatonismo-judaico'
	| 'racionalismo-judaico'
	| 'filosofia-judaico-arabe'
	| 'sufismo'
	| 'escolastica-comparada'
	| 'outros';

export interface Category {
	id: CategoryId;
	label: string;
}

// A cor de cada categoria vem das variáveis --cat-<id> e --cat-<id>-tint
// definidas em src/app.css (uma para o modo claro, uma para o escuro).
// Para adicionar uma categoria nova: crie o par de variáveis em app.css
// e adicione uma entrada aqui.
export const CATEGORIES: Category[] = [
	{ id: 'falsafa', label: 'Falsafa' },
	{ id: 'kalam', label: 'Kalam' },
	{ id: 'averroismo-latino', label: 'Averroísmo latino' },
	{ id: 'mistica', label: 'Mística' },
	{ id: 'cabala', label: 'Cabala' },
	{ id: 'mistica-judaica', label: 'Mística judaica' },
	{ id: 'neoplatonismo-judaico', label: 'Neoplatonismo judaico' },
	{ id: 'racionalismo-judaico', label: 'Racionalismo judaico' },
	{ id: 'filosofia-judaico-arabe', label: 'Filosofia judaico-árabe' },
	{ id: 'sufismo', label: 'Sufismo' },
	{ id: 'escolastica-comparada', label: 'Escolástica comparada' },
	{ id: 'outros', label: 'Outros' }
];

export function categoryLabel(id: CategoryId): string {
	return CATEGORIES.find((c) => c.id === id)?.label ?? id;
}
