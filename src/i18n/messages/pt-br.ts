import type { Messages } from "./en";

const messages: Messages = {
  meta: {
    title: "Comparar altura – Comparador de altura em gráfico visual",
    description:
      "Comparador de altura grátis: compare a altura de pessoas, famosos, personagens de anime e objetos lado a lado em cm ou pés e polegadas. Compartilhe ou baixe.",
    ogAlt: "Gráfico de comparação de altura com várias pessoas lado a lado",
  },
  nav: {
    tool: "Comparador de altura",
    tools: "Ferramentas",
    language: "Idioma",
    skip: "Pular para o conteúdo",
  },
  board: {
    title: "Painel de comparação de altura",
    add: "Adicionar",
    addMan: "Homem",
    addWoman: "Mulher",
    addObject: "Objeto",
    addImage: "Imagem",
    library: "Biblioteca",
    searchPlaceholder: "Busque pessoas, personagens, objetos…",
    noResults: "Nenhum resultado. Adicione uma pessoa personalizada.",
    categories: {
      generic: "Pessoas",
      athlete: "Atletas",
      celebrity: "Famosos",
      character: "Personagens",
      record: "Recordes",
      object: "Objetos",
      animal: "Animais",
    },
    defaultMan: "Homem",
    defaultWoman: "Mulher",
    defaultObject: "Objeto",
    defaultImage: "Imagem",
    name: "Nome",
    height: "Altura",
    feet: "ft",
    inches: "in",
    unitMetric: "cm",
    unitImperial: "ft/in",
    type: "Tipo",
    kinds: { male: "Homem", female: "Mulher", object: "Objeto", image: "Imagem" },
    build: "Porte físico",
    builds: { slim: "Magro", average: "Médio", broad: "Robusto" },
    shape: "Forma",
    shapes: { block: "Bloco", door: "Porta", tree: "Árvore", building: "Prédio", tower: "Torre" },
    adultProportions: "Proporções de adulto",
    color: "Cor",
    remove: "Remover",
    duplicate: "Duplicar",
    moveLeft: "Mover para a esquerda",
    moveRight: "Mover para a direita",
    share: "Compartilhar",
    linkCopied: "Link copiado",
    download: "Baixar PNG",
    reset: "Redefinir",
    clearAll: "Limpar tudo",
    subjects: "Itens",
    empty: "Adicione uma pessoa, um objeto ou uma imagem para começar a comparar.",
    tallerBy: "{a} é {diff} ({pct}) mais alto que {b}",
    sameHeight: "{a} e {b} têm a mesma altura",
    imageNote: "As imagens enviadas ficam no seu dispositivo e não são incluídas nos links compartilhados.",
    edit: "Editar",
    done: "Concluir",
    fitAll: "Ver tudo",
    focus: "Focar",
    resize: "Arraste para mudar a altura",
    loading3d: "Carregando 3D…",
    orbitHint: "Arraste para girar · role ou use pinça para zoom",
  },
  home: {
    h1: "Comparador de altura",
    tagline:
      "Compare a altura de pessoas, famosos, personagens e objetos lado a lado em um único gráfico preciso, em centímetros ou em pés e polegadas.",
    howTitle: "Como comparar altura",
    how: [
      {
        title: "Adicione itens",
        body: "Adicione um homem, uma mulher, um objeto ou sua própria imagem, ou escolha na biblioteca de famosos, atletas e personagens de anime.",
      },
      {
        title: "Defina a altura exata",
        body: "Digite a altura em cm ou ft/in. As figuras são desenhadas em escala, com proporções corporais de acordo com a idade.",
      },
      {
        title: "Compartilhe ou baixe",
        body: "Copie um link que recria o seu gráfico ou baixe um PNG para conversas, redes sociais e fichas de referência.",
      },
    ],
    featuresTitle: "Por que usar este gráfico de comparação de altura",
    features: [
      {
        title: "Desenho em escala real",
        body: "Todas as figuras usam a mesma escala vertical, com uma grade em unidades métricas e imperiais, então as diferenças são exatas.",
      },
      {
        title: "Proporções realistas",
        body: "Crianças são desenhadas com cabeça maior e pernas mais curtas; adultos seguem o cânone de 7,5 cabeças. Escolha porte magro, médio ou robusto.",
      },
      {
        title: "Pessoas, personagens e objetos",
        body: "Compare-se com atletas, atores, heróis de anime, portas, carros, árvores e monumentos tão altos quanto o Burj Khalifa.",
      },
      {
        title: "Grátis, rápido e sem cadastro",
        body: "Tudo roda no seu navegador. Os links compartilhados guardam o próprio gráfico, então nada é enviado.",
      },
    ],
    useCasesTitle: "Formas populares de usar",
    useCases: [
      { title: "Diferença de altura do casal", body: "Veja como você e seu par ficam lado a lado e o quanto a diferença aparece nas fotos." },
      { title: "Altura dos famosos", body: "Fique ao lado de Neymar, Cristiano Ronaldo ou Tom Cruise e veja a diferença real." },
      { title: "Referência de tamanho de personagens", body: "Artistas e escritores podem alinhar personagens para manter a escala consistente entre as cenas." },
      { title: "Crescimento das crianças", body: "Acompanhe como uma criança se compara com irmãos, pais ou a altura média para a idade dela." },
    ],
    faqTitle: "Perguntas frequentes",
    faq: [
      {
        q: "Qual é a precisão da comparação de altura?",
        a: "As figuras são desenhadas em uma única escala linear, então a diferença visual corresponde exatamente aos números que você digita. As alturas da biblioteca são valores divulgados com frequência e podem variar um pouco em outras fontes.",
      },
      {
        q: "Posso alternar entre centímetros e pés?",
        a: "Sim. Use o seletor cm / ft-in acima do gráfico. Você pode digitar a altura em qualquer uma das unidades, e as duas aparecem sempre nos rótulos e na grade.",
      },
      {
        q: "Como comparar minha altura com a de um famoso?",
        a: "Adicione uma pessoa com a sua altura, abra a biblioteca, busque o famoso e toque para colocá-lo ao seu lado.",
      },
      {
        q: "Posso salvar ou compartilhar meu gráfico?",
        a: "Toque em Compartilhar para copiar um link que recria o mesmo gráfico para quem abrir, ou em Baixar PNG para salvar uma imagem.",
      },
      {
        q: "Por que as figuras baixas parecem crianças?",
        a: "As proporções do corpo mudam com a idade, então alturas abaixo da faixa adulta recebem proporções infantis. Marque “Proporções de adulto” para adultos de baixa estatura.",
      },
      {
        q: "Posso comparar objetos e prédios?",
        a: "Sim. Adicione portas, carros, árvores ou monumentos, ou crie um objeto personalizado com qualquer altura e largura, com até quilômetros de altura.",
      },
    ],
    ctaTitle: "Comece a comparar alturas",
    ctaBody: "Seu gráfico está no topo da página e é atualizado enquanto você digita.",
    ctaButton: "Ir para o gráfico",
  },
  footer: {
    about: "Um comparador de altura visual e gratuito para pessoas, personagens e objetos.",
    rights: "Todos os direitos reservados.",
  },
};

export default messages;
