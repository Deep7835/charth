import type { ToolsMessages } from "./en";

const messages: ToolsMessages = {
  common: {
    tools: "Ferramentas",
    home: "Início",
    hubMetaTitle: "Ferramentas de altura grátis: conversor e calculadoras",
    hubMetaDescription:
      "Ferramentas de altura grátis: converta cm para pés e polegadas, calcule a diferença de altura, descubra seu percentil e compare a altura média por país.",
    hubH1: "Ferramentas de altura",
    hubIntro: "Calculadoras rápidas e dados de referência para usar junto com o comparador de altura.",
    relatedTitle: "Mais ferramentas de altura",
    boardCta: "Compare no gráfico de altura",
    boardCtaBody: "Coloque pessoas, personagens e objetos lado a lado na mesma escala visual.",
    openInBoard: "Abrir no gráfico de altura",
    faqTitle: "Perguntas frequentes",
    men: "Homens",
    women: "Mulheres",
    man: "Homem",
    woman: "Mulher",
    sex: "Sexo",
    country: "País",
    height: "Altura",
    source: "Fonte",
    sourceNcd:
      "NCD Risk Factor Collaboration (NCD-RisC), Lancet 2020 — altura média aos 19 anos, estimativas mais recentes. Licença CC BY 4.0.",
  },
  names: {
    "height-converter": {
      name: "Conversor de altura",
      blurb: "Converta cm para pés e polegadas e vice-versa, com uma tabela de conversão completa.",
    },
    "height-difference-calculator": {
      name: "Calculadora de diferença de altura",
      blurb: "Descubra a diferença exata entre duas alturas e até onde uma pessoa chega na outra.",
    },
    "average-height-by-country": {
      name: "Altura média por país",
      blurb: "Altura média de homens e mulheres em 200 países, com ranking e busca.",
    },
    "height-percentile-calculator": {
      name: "Calculadora de percentil de altura",
      blurb: "Descubra quantos por cento dos homens ou das mulheres são mais baixos que você, no seu país e no mundo.",
    },
    "hug-simulator": {
      name: "Simulador de abraço",
      blurb: "Veja um abraço de frente ou por trás em escala real para duas alturas e onde cada cabeça fica.",
    },
    "3d-height-comparison": {
      name: "Comparação de altura 3D",
      blurb: "Compare pessoas, animais e objetos em modelos 3D que você pode girar e ampliar.",
    },
  },
  converter: {
    metaTitle: "Converter cm para pés e polegadas – Altura em pés",
    metaDescription:
      "Converter cm para pés e polegadas (e vice-versa) na hora. Veja sua altura em pés com a tabela de conversão de 4′6″ a 7′0″ e de 140 a 215 cm.",
    h1: "Conversor de altura: cm ↔ pés e polegadas",
    intro:
      "Digite uma altura em qualquer campo e os outros são atualizados na hora. Os resultados são arredondados para a polegada ou o 0,1 cm mais próximo.",
    centimeters: "Centímetros",
    meters: "Metros",
    feetInches: "Pés + polegadas",
    totalInches: "Total em polegadas",
    result: "{cm} equivalem a {ftin}",
    tableCmTitle: "Tabela de centímetros para pés e polegadas",
    tableFtTitle: "Tabela de pés e polegadas para centímetros",
    colCm: "cm",
    colFtIn: "ft / in",
    colInches: "polegadas",
    howTitle: "Como converter altura",
    how: [
      "Uma polegada equivale exatamente a 2,54 cm, e um pé tem 12 polegadas (30,48 cm).",
      "De cm para pés e polegadas: divida os centímetros por 2,54 para obter o total de polegadas e depois divida por 12. A parte inteira são os pés, e o resto são as polegadas. Exemplo: 175 cm ÷ 2,54 = 68,9 in → 5 ft 8,9 in ≈ 5′9″.",
      "De pés e polegadas para cm: multiplique os pés por 12, some as polegadas e multiplique o total por 2,54. Exemplo: 5′10″ = 70 in × 2,54 = 177,8 cm.",
    ],
    faq: [
      { q: "Quanto é 170 cm em pés?", a: "170 cm equivalem a cerca de 5 pés e 7 polegadas (5′6,9″)." },
      { q: "Quanto é 6 pés em cm?", a: "6 pés equivalem exatamente a 182,88 cm, normalmente arredondados para 183 cm." },
      { q: "Quanto é 5′5″ em cm?", a: "5 pés e 5 polegadas equivalem a 165,1 cm." },
      {
        q: "Por que as conversões de altura às vezes variam em um centímetro?",
        a: "Alturas em pés costumam ser arredondadas para a polegada mais próxima, e uma polegada tem 2,54 cm; por isso, um valor arredondado pode variar até cerca de 1,3 cm.",
      },
    ],
  },
  difference: {
    metaTitle: "Diferença de altura – Calculadora para comparar duas alturas",
    metaDescription:
      "Calcule a diferença de altura entre duas pessoas em cm e pés/polegadas, veja a diferença percentual e até onde a pessoa mais baixa chega na mais alta.",
    h1: "Calculadora de diferença de altura",
    intro:
      "Informe duas alturas para ver a diferença exata em cm e ft/in, a diferença percentual e uma prévia em escala.",
    personA: "Pessoa A",
    personB: "Pessoa B",
    name: "Nome",
    difference: "Diferença",
    percentTaller: "{a} mede {pct} a mais que {b}",
    sameHeight: "As duas pessoas têm a mesma altura",
    reachTitle: "Até onde o topo da cabeça de {b} chega em {a}",
    reach: {
      eyes: "Altura dos olhos",
      nose: "Nariz ou boca",
      chin: "Queixo",
      shoulders: "Ombros",
      chest: "Peito",
      waist: "Cintura",
      below: "Abaixo da cintura",
    },
    reachNote:
      "Com base nas proporções corporais médias de um adulto; postura, calçado e cabelo alteram o resultado real.",
    categoryTitle: "Qual é o tamanho da diferença?",
    categories: {
      tiny: "Quase imperceptível (menos de 3 cm / 1 in)",
      small: "Pequena (3–7 cm / 1–3 in)",
      medium: "Perceptível (8–14 cm / 3–5,5 in)",
      large: "Grande (15–24 cm / 6–9,5 in)",
      huge: "Muito grande (25 cm / 10 in ou mais)",
    },
    contentTitle: "Entendendo as diferenças de altura",
    content: [
      "Uma diferença de altura pode parecer maior ou menor do que o número sugere. Com 10 cm (4 in) de diferença, os olhos da pessoa mais baixa ficam mais ou menos na altura da boca da mais alta — algo bem visível em fotos.",
      "A diferença percentual ajuda a comparar tamanhos diferentes: 20 cm entre adultos de 165 e 185 cm equivalem a cerca de 12%, enquanto os mesmos 20 cm entre crianças de 100 e 120 cm representam 20%.",
      "Entre casais, uma diferença de cerca de 12 cm (5 in) é comum, porque é mais ou menos o quanto os homens são mais altos que as mulheres, em média, no mundo todo.",
    ],
    faq: [
      {
        q: "Como calcular a diferença de altura?",
        a: "Subtraia a altura menor da maior. Para obter a porcentagem, divida a diferença pela altura menor e multiplique por 100.",
      },
      {
        q: "15 cm de diferença de altura é muito?",
        a: "15 cm (cerca de 6 in) é uma diferença bem visível: o topo da cabeça da pessoa mais baixa costuma chegar mais ou menos no nariz da mais alta.",
      },
      {
        q: "Qual é a diferença média de altura entre homens e mulheres?",
        a: "No mundo, homens de 19 anos medem em média 170,8 cm e mulheres, 158,6 cm — uma diferença de cerca de 12 cm (4,8 in).",
      },
    ],
  },
  countries: {
    metaTitle: "Altura média por país 2026 – Homens e mulheres (200 países)",
    metaDescription:
      "Altura média por país: homens e mulheres em 200 países, em cm e pés, do mais alto ao mais baixo, com a variação desde 1985. Baseado em dados da NCD-RisC.",
    h1: "Altura média por país",
    intro:
      "Altura média de homens e mulheres de 19 anos em 200 países — a idade em que a maioria das pessoas atinge a altura adulta.",
    search: "Buscar país…",
    sortBy: "Ordenar por",
    rank: "#",
    change: "Desde 1985",
    compare: "Comparar",
    world: "Mundo",
    tallestMen: "Homens mais altos",
    tallestWomen: "Mulheres mais altas",
    shortestMen: "Homens mais baixos",
    shortestWomen: "Mulheres mais baixas",
    worldAverage: "Média mundial",
    contentTitle: "O que os dados mostram",
    content: [
      "Os Países Baixos (Holanda) têm os jovens adultos mais altos do mundo: os homens medem em média 183,8 cm (6′0″) e as mulheres, 170,4 cm (5′7″). As menores médias estão no Timor-Leste, entre os homens (160,1 cm), e na Guatemala, entre as mulheres (150,9 cm).",
      "No mundo, os homens medem em média 170,8 cm (5′7″) e as mulheres, 158,6 cm (5′2″). A diferença entre os países mais altos e os mais baixos passa de 20 cm.",
      "A genética influencia a altura, mas as diferenças entre países refletem principalmente a nutrição, a saúde e as condições de vida na infância. Por isso a altura média aumentou vários centímetros em muitos países desde 1985.",
    ],
    methodTitle: "Sobre os dados",
    method:
      "Os números são estimativas da NCD-RisC para a altura média aos 19 anos no ano mais recente disponível, reunidas a partir de estudos populacionais com medição real (e não de alturas autodeclaradas). Os valores são arredondados para 0,1 cm.",
    faq: [
      {
        q: "Qual país tem as pessoas mais altas?",
        a: "Os Países Baixos (Holanda), com média de 183,8 cm para homens e 170,4 cm para mulheres.",
      },
      {
        q: "Qual país tem as pessoas mais baixas?",
        a: "O Timor-Leste tem a menor média entre os homens (160,1 cm), e a Guatemala, entre as mulheres (150,9 cm).",
      },
      {
        q: "Qual é a altura média no mundo?",
        a: "Cerca de 170,8 cm (5′7″) para homens e 158,6 cm (5′2″) para mulheres.",
      },
      {
        q: "Por que usar jovens de 19 anos?",
        a: "A maioria das pessoas já atingiu a altura adulta aos 19 anos, e usar uma única idade permite comparar países diretamente entre gerações.",
      },
    ],
  },
  percentile: {
    metaTitle: "Percentil de altura – Calculadora por país e sexo",
    metaDescription:
      "Descubra seu percentil de altura: veja quantos por cento dos homens ou das mulheres são mais baixos que você no seu país e no mundo, com dados da NCD-RisC.",
    h1: "Calculadora de percentil de altura",
    intro: "Informe sua altura e seu sexo para ver sua posição em relação aos adultos do seu país e do mundo.",
    yourHeight: "Sua altura",
    result: "{country}: sua altura supera a de {pct} {group}.",
    groupMen: "dos homens",
    groupWomen: "das mulheres",
    oneIn: "Cerca de 1 em cada {n} pessoas é mais alta que você.",
    zScore: "{sd} desvios-padrão em relação à média ({avg})",
    otherCountries: "Seu percentil em outros países",
    percentile: "Percentil",
    average: "Média",
    note:
      "Estimativa: considera que as alturas seguem uma distribuição normal em torno da média da NCD-RisC de cada país, com dispersão típica de 7,1 cm para homens e 6,6 cm para mulheres. As distribuições reais variam um pouco de país para país.",
    contentTitle: "O que significa percentil de altura",
    content: [
      "O percentil indica a parcela de pessoas mais baixas que você. No percentil 50, você está exatamente na média; no percentil 90, sua altura supera a de 9 em cada 10 pessoas do mesmo sexo.",
      "Como as médias variam entre países, a mesma altura pode ser alta em um lugar e comum em outro. 175 cm está acima da média masculina na Índia ou no Japão, mas abaixo da média nos Países Baixos.",
    ],
    faq: [
      {
        q: "180 cm é alto para um homem?",
        a: "Sim, na maioria dos países. No mundo, 180 cm (5′11″) supera a altura de cerca de 90% dos homens, mas nos Países Baixos, onde a média masculina é de 183,8 cm, fica abaixo da média.",
      },
      {
        q: "170 cm é alto para uma mulher?",
        a: "Sim. 170 cm (5′7″) supera a altura de cerca de 96% das mulheres no mundo e fica próximo da média feminina nos Países Baixos.",
      },
      {
        q: "Qual é a precisão desta calculadora?",
        a: "As médias vêm de dados nacionais medidos, mas a dispersão é modelada com um desvio-padrão típico. Por isso, considere o resultado uma boa estimativa, e não uma posição exata.",
      },
    ],
  },
};

export default messages;
