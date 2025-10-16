// ====== DADOS BNCC EI (4–6) ======

// ATIVIDADES (30)
const atividadesEI = [
  { nome: "Roda de conversa", descricao: "Crianças compartilham experiências, ideias e sentimentos, aprendendo a ouvir e respeitar os colegas." },
  { nome: "Oficina de pintura livre", descricao: "Exploração de cores, formas e materiais diversos para expressar emoções e criatividade." },
  { nome: "Caixa surpresa", descricao: "Brincadeira sensorial: adivinhar objetos pelo tato, estimulando percepção e linguagem." },
  { nome: "Circuito motor", descricao: "Obstáculos e desafios físicos para desenvolver coordenação, equilíbrio e controle corporal." },
  { nome: "Montagem e desmontagem", descricao: "Construções livres com blocos, tampinhas ou sucata para criar e recriar." },
  { nome: "Teatro de fantoches", descricao: "Criação e dramatização de histórias com bonecos feitos pelas crianças." },
  { nome: "Contação de histórias", descricao: "A professora narra contos com entonação e gestos, ampliando vocabulário e imaginação." },
  { nome: "Brincadeiras cantadas", descricao: "Músicas e movimentos corporais que associam ritmo, memória e expressão." },
  { nome: "Caça aos tesouros da natureza", descricao: "Exploração do ambiente para observar folhas, pedras e sementes." },
  { nome: "Experimentos simples", descricao: "Misturar cores, plantar feijão, observar gelo, investigando transformações." },
  { nome: "Mercado simbólico", descricao: "Simulação de compras e vendas, com noções de número, papéis sociais e cooperação." },
  { nome: "Jogo dos lugares da escola", descricao: "Caça ao tesouro com mapa simples, estimulando orientação espacial." },
  { nome: "Desfile das profissões", descricao: "Representação lúdica de profissões, valorizando diversidade e papéis sociais." },
  { nome: "Brincadeira das sombras", descricao: "Projetar e observar sombras com lanterna ou sol, explorando formas e movimento." },
  { nome: "Espelho meu", descricao: "Em duplas, uma criança imita os gestos da outra, favorecendo empatia e atenção." },
  { nome: "Sequência lógica de imagens", descricao: "Ordenar figuras para reconstruir uma história, promovendo raciocínio temporal." },
  { nome: "Criação de histórias coletivas", descricao: "Construção oral de narrativas em grupo, estimulando imaginação e cooperação." },
  { nome: "Jogo de contagem", descricao: "Contar objetos, passos ou palitos, introduzindo conceitos numéricos." },
  { nome: "Oficina de autorretrato", descricao: "Desenhar a si mesmo com espelho, promovendo identidade e autoconhecimento." },
  { nome: "Pintura com o corpo", descricao: "Uso de mãos e pés para criar obras coletivas, integrando movimento e expressão." },
  { nome: "História no tapete", descricao: "Objetos e bonecos representam histórias contadas sobre um tapete ilustrado." },
  { nome: "Brincadeira dos sentimentos", descricao: "Identificar e expressar emoções por meio de carinhas e espelhos." },
  { nome: "Dança das cadeiras cooperativa", descricao: "Versão sem eliminação, incentivando solidariedade e trabalho em grupo." },
  { nome: "Construção de cidades com caixas", descricao: "Montagem de maquetes com caixas/blocos, explorando espaço urbano e planejamento." },
  { nome: "Som misterioso", descricao: "Ouvir sons gravados/produzidos e adivinhar sua origem, estimulando atenção auditiva." },
  { nome: "Telefone sem fio", descricao: "Transmissão de frases em grupo para desenvolver escuta e articulação verbal." },
  { nome: "Mini feira de ciências", descricao: "Exposição oral de descobertas simples feitas pelas crianças." },
  { nome: "Teatro das profissões", descricao: "Dramatizações com figurinos e cenários sobre profissões do cotidiano." },
  { nome: "Cozinha experimental", descricao: "Receitas simples (salada de frutas, sucos), trabalhando medidas e sequências." },
  { nome: "Brincadeira do eco", descricao: "Repetir sons, palavras ou ritmos, desenvolvendo percepção sonora e linguagem." }
];

const camposExperiencia = [
  {
    nome: "O eu, o outro e o nós",
    abreviacao: "CE1",
    cor: getComputedStyle(document.documentElement).getPropertyValue("--cor-eo").trim(),
    classePill: "eo",
    objetivos: [
      { codigo: "EI03EO01", descricao: "Demonstrar empatia pelos outros, percebendo que as pessoas têm diferentes sentimentos, necessidades e maneiras de pensar e agir." },
      { codigo: "EI03EO02", descricao: "Agir de maneira independente, com confiança em suas capacidades, reconhecendo suas conquistas e limitações." },
      { codigo: "EI03EO03", descricao: "Ampliar as relações interpessoais, desenvolvendo atitudes de participação e cooperação." },
      { codigo: "EI03EO04", descricao: "Comunicar suas ideias e sentimentos a pessoas e grupos diversos." },
      { codigo: "EI03EO05", descricao: "Demonstrar valorização das características de seu corpo e respeitar as características dos outros (crianças e adultos) com os quais convive." },
      { codigo: "EI03EO06", descricao: "Manifestar interesse e respeito por diferentes culturas e modos de vida." },
      { codigo: "EI03EO07", descricao: "Usar estratégias pautadas no respeito mútuo para lidar com conflitos nas interações com crianças e adultos." }
    ]
  },
  {
    nome: "Corpo, gestos e movimentos",
    abreviacao: "CE2",
    cor: getComputedStyle(document.documentElement).getPropertyValue("--cor-cg").trim(),
    classePill: "cg",
    objetivos: [
      { codigo: "EI03CG01", descricao: "Criar com o corpo formas diversificadas de expressão de sentimentos, sensações e emoções, tanto nas situações do cotidiano quanto em brincadeiras, dança, teatro, música." },
      { codigo: "EI03CG02", descricao: "Demonstrar controle e adequação do uso de seu corpo em brincadeiras e jogos, escuta e reconto de histórias, atividades artísticas, entre outras possibilidades." },
      { codigo: "EI03CG03", descricao: "Criar movimentos, gestos, olhares e mímicas em brincadeiras, jogos e atividades artísticas como dança, teatro e música." },
      { codigo: "EI03CG04", descricao: "Adotar hábitos de autocuidado relacionados a higiene, alimentação, conforto e aparência." },
      { codigo: "EI03CG05", descricao: "Coordenar suas habilidades manuais no atendimento adequado a seus interesses e necessidades em situações diversas." }
    ]
  },
  {
    nome: "Traços, sons, cores e formas",
    abreviacao: "CE3",
    cor: getComputedStyle(document.documentElement).getPropertyValue("--cor-ts").trim(),
    classePill: "ts",
    objetivos: [
      { codigo: "EI03TS01", descricao: "Utilizar sons produzidos por materiais, objetos e instrumentos musicais durante brincadeiras de faz de conta, encenações, criações musicais, festas." },
      { codigo: "EI03TS02", descricao: "Expressar-se livremente por meio de desenho, pintura, colagem, dobradura e escultura, criando produções bidimensionais e tridimensionais." },
      { codigo: "EI03TS03", descricao: "Reconhecer as qualidades do som (intensidade, duração, altura e timbre), utilizando-as em suas produções sonoras e ao ouvir músicas e sons." }
    ]
  },
  {
    nome: "Escuta, fala, pensamento e imaginação",
    abreviacao: "CE4",
    cor: getComputedStyle(document.documentElement).getPropertyValue("--cor-ef").trim(),
    classePill: "ef",
    objetivos: [
      { codigo: "EI03EF01", descricao: "Expressar ideias, desejos e sentimentos sobre suas vivências, por meio da linguagem oral e escrita (escrita espontânea), de fotos, desenhos e outras formas de expressão." },
      { codigo: "EI03EF02", descricao: "Inventar brincadeiras cantadas, poemas e canções, criando rimas, aliterações e ritmos." },
      { codigo: "EI03EF03", descricao: "Escolher e folhear livros, procurando orientar-se por temas e ilustrações e tentando identificar palavras conhecidas." },
      { codigo: "EI03EF04", descricao: "Recontar histórias ouvidas e planejar coletivamente roteiros de vídeos e de encenações, definindo os contextos, os personagens, a estrutura da história." },
      { codigo: "EI03EF05", descricao: "Recontar histórias ouvidas para produção de reconto escrito, tendo o professor como escriba." },
      { codigo: "EI03EF06", descricao: "Produzir suas próprias histórias orais e escritas (escrita espontânea), em situações com função social significativa." },
      { codigo: "EI03EF07", descricao: "Levantar hipóteses sobre gêneros textuais veiculados em portadores conhecidos, recorrendo a estratégias de observação gráfica e/ou de leitura." },
      { codigo: "EI03EF08", descricao: "Selecionar livros e textos de gêneros conhecidos para a leitura de um adulto e/ou para sua própria leitura (partindo de seu repertório sobre esses textos, como a recuperação pela memória, pela leitura das ilustrações etc.)." },
      { codigo: "EI03EF09", descricao: "Levantar hipóteses em relação à linguagem escrita, realizando registros de palavras e textos, por meio de escrita espontânea." }
    ]
  },
  {
    nome: "Espaços, tempos, quantidades, relações e transformações",
    abreviacao: "CE5",
    cor: getComputedStyle(document.documentElement).getPropertyValue("--cor-et").trim(),
    classePill: "et",
    objetivos: [
      { codigo: "EI03ET01", descricao: "Estabelecer relações de comparação entre objetos, observando suas propriedades." },
      { codigo: "EI03ET02", descricao: "Observar e descrever mudanças em diferentes materiais, resultantes de ações sobre eles, em experimentos envolvendo fenômenos naturais e artificiais." },
      { codigo: "EI03ET03", descricao: "Identificar e selecionar fontes de informações, para responder a questões sobre a natureza, seus fenômenos, sua conservação." },
      { codigo: "EI03ET04", descricao: "Registrar observações, manipulações e medidas, usando múltiplas linguagens (desenho, registro por números ou escrita espontânea), em diferentes suportes." },
      { codigo: "EI03ET05", descricao: "Classificar objetos e figuras de acordo com suas semelhanças e diferenças." },
      { codigo: "EI03ET06", descricao: "Relatar fatos importantes sobre seu nascimento e desenvolvimento, a história dos seus familiares e da sua comunidade." },
      { codigo: "EI03ET07", descricao: "Relacionar números às suas respectivas quantidades e identificar o antes, o depois e o entre em uma sequência." },
      { codigo: "EI03ET08", descricao: "Expressar medidas (peso, altura etc.), construindo gráficos básicos." }
    ]
  }
];

// ===== Princípios do RC =====
const rcPrincipios = [
  { nome: "Criticidade", definicao: "Articular o raciocínio por meio de inferências logicamente bem construídas para analisar uma situação, avaliar uma experiência ou mesmo para desenvolver argumentos. Questionar é fundamental para o desenvolvimento da criticidade." },
  { nome: "Criatividade", definicao: "Não é necessariamente sobre inventar algo novo. É juntar ideias diferentes para encontrar novas soluções, novas formas de analisar ou de transformar. Envolve imaginação, flexibilidade, curiosidade e coragem para tentar sem medo de errar.
" },
  { nome: "Colaboração", definicao: "Colaboração é compartilhar a aprendizagem, trabalhando junto com os outros, ouvindo, respeitando e ajudando. Na Educação Infantil, a colaboração aparece em gestos simples, como dividir brinquedos ou esperar a vez, e isso já mostra que a criança está aprendendo a conviver.
" },
  { nome: "Interpretabilidade", definicao: "Refere-se à atribuição de significado, compreensão e organização de informações com base em contextos específicos, conectando dados às estruturas cognitivas e experiências das crianças." },
  { nome: "Argumentatividade", definicao: "Refere-se ao desenvolvimento de estruturas lógicas de organização do conhecimento e comunicação, de modo a elaborar e expressar narrativas bem desenvolvidas. Não se refere ao ato de opinião, mas de justificar com base em evidências e fatos." },
  { nome: "Protagonismo da criança", definicao: "É quando a criança, individualmente ou em grupo, toma as decisões quando provocada pela professora. Ser protagonista não deve ser uma permissão da professora, mas uma provocação intencionalmente planejada.
" },
  { nome: "Protagonismo docente", definicao: "Refere-se à atuação ativa, crítica e reflexiva da professora no planejamento da ação educativa. Não se trata de ser o centro das atenções, mas de tomar decisões intencionais e fundamentadas, que se desdobram em práticas pedagógicas consistentes conforme as necessidades das crianças e dos objetivos de aprendizagem e desenvolvimento." },
  { nome: "Autonomia", definicao: "Escolher caminhos, tomar decisões e reflexões próprias. O desenvolvimento da autonomia favorece e necessita da liberdade, da responsabilidade e da manutenção de sentido nas ações, interações e decisões.
" },
  { nome: "Autoreconhecimento identitário", definicao: "Está relacionado a auto reconhecer seu vínculo e sentimento de  pertença  a  uma determinada categoria, grupo ou comunidade, reconhecendo suas histórias e conexões com o hoje e o futuro." },
  { nome: "Empoderamento e emancipação", definicao: "Empoderar-se é tomar as rédeas do seu desenvolvimento, da sua aprendizagem e, consequentemente, da sua existência. É um fenômeno incremental ao longo da vida. Emancipar-se é tornar-se independente, apto em pensar por si mesmo, fazendo suas próprias escolhas e ações com responsabilidade" }
];

// ===== Habilidades do RC (5) =====
const rcHabilidades = [
  {
    nome: "Abstração seletiva",
    definicao:
      "Habilidade de focalizar no que é fundamental em um conjunto de elementos, retirando temporariamente a atenção de características menos relevantes para o contexto, momento ou objetivo."
  },
  {
    nome: "Raciocínio Algorítmico",
    definicao:
      "Habilidade de utilizar elementos algorítmicos para enunciação, leitura de mundo e tomada de decisões."
  },
  {
    nome: "Análise de Padrões",
    definicao:
      "Habilidade de analisar situações, fatos ou problemas a partir da classificação e categorização de elementos, reconhecendo e reutilizando padrões."
  },
  {
    nome: "Recomposição",
    definicao:
      "Habilidade de analisar o todo a partir da junção de pequenas análises; útil quando dividir ajuda a observar a tarefa, situação ou problema como um todo."
  },
  {
    nome: "Paralelismo",
    definicao:
      "Habilidade de compreender a coexistência de fenômenos paralelos e suas inter-relações, atuando estrategicamente com múltiplas tarefas, revezando prioridades para maximizar tempo e energia."
  }
];

