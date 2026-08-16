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
