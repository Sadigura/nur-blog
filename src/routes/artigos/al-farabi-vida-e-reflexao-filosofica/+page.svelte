<script lang="ts">
	import Sidenote from '$lib/components/Sidenote.svelte';

	const sections = [
		{ id: 'contexto', label: 'Contexto religioso-político e filosófico' },
		{ id: 'formacao', label: 'Origem e formação em Bagdá' },
		{ id: 'constantinopla', label: 'Constantinopla e o retorno a Bagdá' },
		{ id: 'siria', label: 'Os anos na Síria' },
		{ id: 'viagens', label: 'Um homem em viagem constante' },
		{ id: 'recepcao', label: 'A recepção da filosofia grega' },
		{ id: 'obra', label: 'A obra e o propósito da filosofia farabiana' }
	];
</script>

<svelte:head>
	<title>Al-Fārābī: vida e reflexão filosófica — NUR</title>
</svelte:head>

<article class="essay" style="--cat: var(--cat-falsafa); --cat-tint: var(--cat-falsafa-tint);">
	<div class="wrap essay-head">
		<a class="back-link" href="/">← Voltar para a página inicial</a>
		<p class="eyebrow">Filósofos · <span class="cat-name">Falsafa</span></p>
		<h1>Al-Fārābī</h1>
		<p class="subtitle">Vida e reflexão filosófica</p>
		<div class="byline">
			Por <b>Francisca Galiléia Pereira da Silva</b> — doutoranda em Filosofia na Universidad
			Complutense de Madrid; professora da Universidade Estadual do Ceará.
		</div>
	</div>

	<div class="wrap essay-body">
		<nav class="toc" aria-label="Sumário">
			<p class="toc-title label">Sumário</p>
			<ol>
				{#each sections as s}
					<li><a href="#{s.id}">{s.label}</a></li>
				{/each}
			</ol>
		</nav>

		<div class="prose-outer">
			<div class="prose">
				<section id="contexto">
					<h2>Contexto religioso-político e filosófico</h2>
					<p>
						Antes de iniciar a breve exposição acerca dos elementos biográficos de um dos mais
						importantes representantes de Falsafa, é preciso, primeiramente, levar em consideração
						o contexto religioso-político por ele vivenciado. Afinal, tanto o processo de
						emancipação do Islamismo e a necessidade de fundamentação das doutrinas próprias do
						Islã, quanto o famoso círculo de traduções da filosofia grega para o árabe se
						constituem como eventos fundamentais no desenvolvimento do pensamento filosófico
						farabiano. O filósofo, a quem foi dado o título de Segundo Mestre<Sidenote n={1}
							>Al-Mu'allim al-tānī, por referência ao "Primeiro Mestre", Aristóteles.</Sidenote
						>, não esteve alheio ao seu tempo e, com uma reflexão filosófica voltada para a
						prática, teve como objetivo pensar sua realidade histórica valendo-se dos estudos que
						realizara.
					</p>
				</section>

				<section id="formacao">
					<h2>Origem e formação em Bagdá</h2>
					<p>
						Pouco se sabe sobre a vida de Abū Nasr al-Fārābī. Nascido em data ainda desconhecida,
						mas se supõe que tenha sido entre os anos de 870-875/ 248-253H, em Farab, na
						Transoxiana, diz-se que seu pai fora um nobre oficial persa e que cedo seguira para
						Bagdá, onde se dedicou aos estudos da Filosofia Antiga e da Lógica. Tendo vivido no
						período da Bagdá Abássida, presenciou, portanto, o ápice do desenvolvimento das
						escolas filosóficas e teológicas, bem como a maior tolerância no que concerne ao
						pluralismo religioso e filosófico. Entretanto, foi pouco conhecido até a segunda
						metade do século XIX.
					</p>
					<p>
						Tendo, possivelmente, o turco como sua língua materna o turco, al-Fārābī aprendeu,
						ainda jovem, o árabe e, segundo algumas lendas, outras 70 línguas<Sidenote n={2}
							>Cf. RAMÓN GUERRERO, Rafael. Apuntes biográficos de al-Fārābī. In: <em
								>Anaquel de Estudios Árabes</em
							>. Madrid: s/ed, 2003. p. 231-238.</Sidenote
						>. Estudou medicina – mas nunca a exerceu –, ciências matemáticas e a gramática árabe,
						em Bagdá com Abū Bakr al-Sarrāy (m.929/307H), ao mesmo tempo em que este aprendia
						lógica com ele. Estudou música – tendo fabricado um instrumento que afirmavam
						embriagar o espírito – e foi um dos primeiros teóricos medievais a se dedicar ao
						estudo da Mística.
					</p>
				</section>

				<section id="constantinopla">
					<h2>Constantinopla e o retorno a Bagdá</h2>
					<p>
						No período de mudança do califado de al-Muktafi (902-908/280-286H) para al-Muqtadir
						(908-932/286-1310H), o filósofo deixa Bagdá e vai para Constantinopla, onde se
						encontrava um núcleo representativo de estudos sobre a filosofia platônica e
						aristotélica promovido pelo patriarca Focio (820-891/204-277H). Neste momento, após
						passar vários anos se dedicando aos estudos da lógica junto a Yuhanna b. Haylan,
						envolve-se com estudos da filosofia grega, obtendo textos platônicos<Sidenote n={3}
							>A respeito da leitura realizada por al-Fārābī dos textos platônicos, cf.: VALLAT,
							Philippe. <em
								>Farabi et l'École d'Alexandrie: Des premisses de la connaissance à la philosophie
								politique</em
							>. Paris: VRIN, 2004. p. 77.</Sidenote
						> e uma vasta literatura da tradição. Retornando à Bagdá, depois de 920/298H, com
						considerável bagagem de conhecimento, al-Fārābī conquista numerosos discípulos, entre
						eles o cristão jacobita Yahya b. 'Adi (893/94-974 / 271/72-352H).
					</p>
				</section>

				<section id="siria">
					<h2>Os anos na Síria</h2>
					<p>
						Com uma breve permanência em Bagdá, devido os frequentes conflitos políticos internos,
						o Segundo Mestre se muda para a Síria, então governada por Sayf-Dawla
						(916-967/303-355H), "[...] conhecido na história por sua filiação xiita, em cujos
						salões se respirava um ambiente cultural, elegante e refinado, onde se reuniam homens
						de ciência, poetas e filólogos renomados"<Sidenote n={4}
							>RAMÓN GUERRERO, Rafael. <em>Filosofias Árabe y Judía</em>. Madrid: Editorial
							Sintesis, 2001. p.110.</Sidenote
						>. Foi neste momento que escreveu uma de suas principais obras políticas,
						<em>A cidade excelente</em> (<em>Kitāb al-madina al-fādila</em>), e concluiu a
						<em>Política</em> (<em>Kitāb al-siyāsa al-madaniyya</em>) – obras cujo fundamento está
						no propósito de indicar que o melhor caminho para a vida política verdadeira está nas
						leis que se fundamentam na razão. Nessas obras, al-Fārābī deixa claro a sua
						preocupação com o momento por ele vivenciado, deixando dúvidas, em alguns estudiosos,
						quanto a uma possível militância sua com os xiitas, enquanto outros consideram que
						sua filosofia proporciona suportes ideológicos para os imãs<Sidenote n={5}
							>Acerca da afinidade entre al-Fārābī e os xiitas, cf. RAMÓN GUERRERO, Rafael. El
							compromiso político de Al-Fārābī ¿Fue un filósofo šī'ī? <em
								>Actas de las II Jornadas de cultura Árabe e Islamica</em
							> (1980). Madrid: Instituto Hispano-arabe de cultura, s/informações, 1985. p.
							463-477.</Sidenote
						>.
					</p>
				</section>

				<section id="viagens">
					<h2>Um homem em viagem constante</h2>
					<p>
						Al-Fārābī, segundo biografias<Sidenote n={6}
							>Sobre informações biográficas de al-Fārābī, cf. Al-NADIM. <em>The Fihrist</em>. vol.2.
							Trad. Bayard Dodge, New York: Columbia University Press, 1970. RAMÓN GUERRERO,
							Rafael. Apuntes biográficos de al-Fārābī. In: <em>Anaquel de Estudios Árabes</em>.
							Madrid: s/ed, 2003. p. 231-238; RAMÓN GUERRERO, Rafael. Al-Fārābī: O Filósofo e a
							Felicidade. In: PEREIRA, Rosalie de S. (Org.). <em
								>O islã clássico: itinerários de uma cultura</em
							>. São Paulo: Perspectivas, 2007. p. 287-328; RAMÓN GUERRERO, Rafael. <em
								>Filosofía árabe y judia</em
							>. Madrid: Editorial Síntesis, 2004. p.107-136; FILHO, Miguel Attie. <em
								>Falsafa: a filosofia entre os árabes: uma herança esquecida</em
							>. São Paulo: Palas Athenas, 2002. p. 195-225.</Sidenote
						>, é apresentado como um homem que contava apenas com o indispensável para a vida,
						porém, parecia descontente com as cidades e regimes políticos com os quais tinha
						contato, o que o levava a realizar constantes viagens. Como ele mesmo indica no
						<em>Livro da Religião</em> (<em>Kitāb al-milla</em>), "[...] é necessário que os
						virtuosos que se veem impelidos a residir nas cidades da ignorância, por não existir
						a cidade virtuosa, tenham de migrar para a cidade virtuosa no momento em que esta
						passe a existir"<Sidenote n={7}
							>AL-FĀRĀBĪ, Abū Nasr. Libro de la religión. In. <em>Obras filosófico-políticas</em>.
							Trad. int. e not de Rafael Ramón Guerrero. Madrid: Debate – C.S.I.C., 1992. p.
							98.</Sidenote
						>. Como um acréscimo a este suposto motivo, é possível, também, que suas viagens
						tenham se dado pela afinidade ideológica com os governantes do Egito e do norte da
						Síria, tendo permanecido nesta até a sua morte, em 950/338H, com exceção de uma breve
						viagem ao Egito.
					</p>
				</section>

				<section id="recepcao">
					<h2>A recepção da filosofia grega</h2>
					<p>
						No que concerne ao contato com a filosofia grega, al-Fārābī conseguiu reunir um
						grande volume de fontes, entre as quais se destacam as obras de Aristóteles e Platão,
						mas que não estavam excluídos comentários e escritos espúrios. Dos textos platônicos
						é visível a influência sobre as obras de caráter filosófico-político, sendo notória a
						semelhança existente entre a Cidade Virtuosa (na qual se fundamenta a concepção
						política farabiana) e a Cidade Ideal formulada por Platão em <em>A República</em>. Já
						no que diz respeito aos estudos acerca da metafísica e da lógica, é possível perceber
						que, além da influência recebida de Platão, ele considera as categorias aristotélicas
						de essência e existência, bem como a ordem hierárquica do universo advindo de uma
						Causa Primeira. Ademais, em sua filosofia, não pode ser esquecida a influência das
						doutrinas de vertente neoplatônicas<Sidenote n={8}
							>Principalmente aquelas presentes na <em>Teologia</em>, falsamente atribuída a
							Aristóteles, e no famoso <em>Livro das Causas</em>, também erroneamente compreendido
							como de autoria do Estagirita.</Sidenote
						> que, mescladas com as categorias próprias da metafísica aristotélica, resultam em um
						sistema cosmológico emanacionista que pretendia englobar, não só os problemas
						puramente metafísicos, mas questões que circundam o homem tanto sob as perspectivas
						éticas e políticas como físicas e epistemológicas.
					</p>
				</section>

				<section id="obra">
					<h2>A obra e o propósito da filosofia farabiana</h2>
					<p>
						É vasto o volume de escritos farabianos bem como de áreas de conhecimento à que
						destinou atenção<Sidenote n={9}
							>Noticia-se que foram escritos, por al-Fārābī, cerca de 100 epígrafes, embora nem
							todas elas tenham se conservado até os dias atuais (Cf. FILHO ATTIE, Miguel.
							<em>Falsafa: a filosofia entre os árabes: uma herança esquecida</em>. São Paulo:
							Palas Athenas, 2002, p. 198.). Da diversidade das áreas às quais dedicou sua atenção,
							é válida a leitura de seu Catálogo das Ciências: AL-FĀRĀBĪ, Abu Nasr.
							<em>Catálogo de las ciencias</em>. 2ed. Trad. de Ángel Gonzales Palencia. Madrid:
							CSIC, 1953.</Sidenote
						>. No entanto, são maioria os estudos farabianos que visam uma reflexão que pudesse
						servir de instrumento para possíveis reformas na sociedade – seja na qual ele vivia,
						seja no âmbito universal. Concordando com Aristóteles, o filósofo árabe também afirma
						ser a felicidade o fim supremo de todo homem, alcançado, somente, no interior de uma
						sociedade. Deste modo, suas obras políticas propõem um misto de filosofia prática e
						teórica, em que todo conhecimento obtido por meio da reflexão deve ter como
						finalidade sua efetivação no interior de uma sociedade pretensamente perfeita. É com
						este propósito que o Segundo Mestre concilia a ideia do Rei-Filósofo platônico com a
						figura do profeta, como quem pretende harmonizar leis universais e crenças
						particulares.
					</p>
				</section>
			</div>
		</div>
	</div>
</article>

<style>
	.essay-head {
		padding: 40px 0 24px;
		border-bottom: var(--rule);
	}
	.back-link {
		display: inline-block;
		font-family: var(--font-mono);
		font-size: 0.78rem;
		color: var(--ink-soft);
		margin-bottom: 22px;
	}
	.back-link:hover {
		color: var(--accent);
	}
	.eyebrow {
		font-family: var(--font-mono);
		font-size: 0.8rem;
		color: var(--ink-soft);
		margin: 0 0 8px;
	}
	.eyebrow .cat-name {
		color: var(--cat);
		font-weight: 400;
	}
	.essay-head h1 {
		font-family: var(--font-headline);
		font-size: clamp(2.2rem, 6vw, 3.6rem);
		line-height: 1;
	}
	.subtitle {
		font-family: var(--font-body);
		font-size: 1.15rem;
		color: var(--ink-soft);
		margin: 10px 0 0;
	}
	.byline {
		font-family: var(--font-mono);
		font-size: 0.82rem;
		color: var(--ink-soft);
		margin-top: 18px;
	}
	.byline b {
		color: var(--ink);
		font-weight: 400;
	}

	.essay-body {
		display: grid;
		grid-template-columns: 240px 1fr;
		gap: 50px;
		padding: 34px 0 60px;
		align-items: start;
	}
	.toc {
		position: sticky;
		top: 24px;
	}
	.toc-title {
		color: var(--ink);
		margin: 0 0 12px;
	}
	.toc ol {
		list-style: none;
		margin: 0;
		padding: 0;
		display: flex;
		flex-direction: column;
		gap: 2px;
		counter-reset: toc;
	}
	.toc li {
		counter-increment: toc;
		border-top: 1px solid var(--line);
	}
	.toc li a {
		display: block;
		padding: 9px 0;
		font-family: var(--font-mono);
		font-size: 0.78rem;
		color: var(--ink-soft);
		line-height: 1.4;
	}
	.toc li a::before {
		content: counter(toc, decimal-leading-zero) '  ';
		color: var(--cat);
	}
	.toc li a:hover {
		color: var(--ink);
	}

	.prose-outer {
		max-width: 940px;
	}

	.prose {
		max-width: 68ch;
		font-family: var(--font-body);
		font-size: 1.05rem;
		line-height: 1.75;
		color: var(--ink);
	}
	.prose section {
		margin-bottom: 44px;
		scroll-margin-top: 24px;
	}
	.prose h2 {
		font-family: var(--font-headline);
		font-size: 1.4rem;
		margin-bottom: 18px;
		padding-bottom: 10px;
		border-bottom: 2px solid var(--cat);
		color: var(--cat);
	}
	.prose p {
		margin: 0 0 20px;
	}
	.prose em {
		font-style: italic;
	}

	@media (max-width: 900px) {
		.essay-body {
			grid-template-columns: 1fr;
		}
		.toc {
			position: static;
			border-bottom: var(--rule);
			padding-bottom: 20px;
		}
	}
</style>
