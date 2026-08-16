// Estado compartilhado do efeito "Curtains: Doors" (motion.dev): duas
// portas cobrem a tela, trocam o conteúdo por baixo (nova página ou
// tema claro/escuro) e depois abrem revelando o resultado. Usa as
// mesmas 3 cores dos cartões de categoria (--tint-a/b/c), nunca
// repetindo a mesma cor duas vezes seguidas.

const TINTS = ['var(--tint-a)', 'var(--tint-b)', 'var(--tint-c)'];
let lastIndex = -1;

function nextColor() {
	let i = Math.floor(Math.random() * TINTS.length);
	while (i === lastIndex) i = Math.floor(Math.random() * TINTS.length);
	lastIndex = i;
	return TINTS[i];
}

function reducedMotion() {
	return (
		typeof window !== 'undefined' &&
		window.matchMedia('(prefers-reduced-motion: reduce)').matches
	);
}

const CLOSE_MS = 600;
const OPEN_MS = 600;
const HOLD_MS = 150;

export const doors = $state({
	phase: 'idle' as 'idle' | 'closing' | 'closed' | 'opening',
	color: TINTS[0]
});

/** Fecha as portas cobrindo a tela. Resolve quando a cobertura termina. */
export function closeDoors(): Promise<void> {
	if (reducedMotion()) return Promise.resolve();
	doors.color = nextColor();
	doors.phase = 'closing';
	return new Promise((resolve) => {
		setTimeout(() => {
			doors.phase = 'closed';
			resolve();
		}, CLOSE_MS);
	});
}

/** Reabre as portas revelando o conteúdo — só faz algo se elas estiverem fechadas. */
export function openDoors() {
	if (doors.phase !== 'closed') return;
	setTimeout(() => {
		doors.phase = 'opening';
		setTimeout(() => {
			doors.phase = 'idle';
		}, OPEN_MS);
	}, HOLD_MS);
}
