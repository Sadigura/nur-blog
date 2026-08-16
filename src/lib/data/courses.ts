export interface Course {
	slug: string;
	title: string;
	professor: string;
	modality?: string;
	year?: string;
	image?: string;
	href?: string;
}

export const COURSES_2025: Course[] = [
	{
		slug: 'inteligencia-do-coracao',
		title: 'A inteligência do coração: a linguística antropológica da Bíblia Hebraica',
		modality: 'Minicurso online',
		year: '2025',
		professor: 'Prof. Dr. André Oswaldo Ribeiro',
		image: '/images/course-biblia-hebraica.avif',
		href: '/cursos/2025/inteligencia-do-coracao'
	},
	{
		slug: 'historias-chassidicas',
		title: 'Histórias Chassídicas: Cinco Horizontes do Baal Shem',
		modality: 'Minicurso online',
		year: '2025',
		professor: 'Profa. Ana Beatriz Chagas Mello',
		image: '/images/course-historias-chassidicas.jpg',
		href: '/cursos/2025/historias-chassidicas'
	}
];

export const COURSES_2026: Course[] = [
	{
		slug: 'kuzari-e-a-anti-filosofia',
		title: 'Yehuda Ha-Levi: O Kuzari e a Anti-Filosofia',
		modality: 'Grupo de estudos de pós-graduação',
		year: '2026',
		professor: 'Profa. Dra. Cecilia Cintra Cavaleiro de Macedo',
		image: '/images/course-kuzari.png',
		href: '/cursos/2026/kuzari-e-a-anti-filosofia'
	},
	{
		slug: 'suhrawardi-luz-e-limites-da-razao',
		title: 'Conhecimento, Luz e os Limites da Razão: Introdução à Filosofia de Suhrawardi',
		modality: 'Minicurso online',
		year: '2026',
		professor: 'Prof. Dr. Saeed Javdaniyan',
		image: '/images/course-suhrawardi.jpg',
		href: '/cursos/2026/suhrawardi-luz-e-limites-da-razao'
	}
];
