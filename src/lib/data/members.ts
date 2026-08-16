export interface Member {
	slug: string;
	name: string;
	role: string;
	/** caminho em static/, ou null pra usar o retrato placeholder */
	photo: string | null;
}

// Como adicionar um integrante:
//   1. Coloque a foto em static/images/integrantes/<slug>.jpg
//   2. Adicione um objeto aqui com o mesmo `slug` e `photo` apontando
//      pra ela. O card aparece sozinho na página /integrantes — nada
//      mais precisa ser editado.

export const MEMBERS: Member[] = [];
