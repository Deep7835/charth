import type { MoreMessages } from "./en";

const messages: MoreMessages = {
  names: {
    "height-predictor": {
      name: "Previsão de altura",
      blurb: "Quanto vou medir? Estime a altura adulta a partir da altura dos pais ou da altura atual de uma criança.",
    },
    "growth-chart": {
      name: "Altura média por idade",
      blurb: "Curva de crescimento para meninos e meninas de 5 a 19 anos em 200 países, com verificação da altura da criança.",
    },
    "bmi-calculator": {
      name: "IMC e peso saudável",
      blurb: "Calcule seu IMC e veja a faixa de peso saudável para a sua altura.",
    },
  },
  common: {
    boy: "Menino",
    girl: "Menina",
    age: "Idade",
    years: "{n} anos",
    father: "Altura do pai",
    mother: "Altura da mãe",
    childHeight: "Altura atual da criança",
    optional: "opcional",
    estimateNote: "Apenas estimativas — genética, nutrição, saúde e o momento da puberdade influenciam o crescimento real.",
  },
  predictor: {
    metaTitle: "Quanto vou medir? Calculadora de altura para crianças",
    metaDescription:
      "Quanto vou medir? Estime a altura adulta pela altura dos pais (método da altura-alvo) e pela altura atual da criança para a idade, com dados de 200 países.",
    h1: "Previsão de altura: quanto vou medir?",
    intro:
      "Estime a altura adulta de duas formas: pela altura do pai e da mãe e pela altura atual da criança em comparação com o crescimento médio no país dela.",
    parentsResult: "Com base na altura dos pais",
    currentResult: "Com base na altura atual para a idade",
    range: "Faixa provável: {low} – {high}",
    currentUnavailable: "Informe a altura da criança (5 a 17 anos) para uma segunda estimativa.",
    howTitle: "Como funciona a previsão",
    how: [
      "Altura dos pais (método da altura-alvo): some as alturas da mãe e do pai, acrescente 13 cm para menino ou subtraia 13 cm para menina e divida por 2. Essa é a altura-alvo usada pelos pediatras; a maioria das crianças (cerca de 95%) termina a até aproximadamente 8,5 cm (3,3 in) dela.",
      "Altura atual para a idade: a altura da criança é comparada com a média nacional para a idade e o sexo (dados da NCD-RisC), supondo que ela mantenha a mesma posição relativa até a idade adulta. Funciona melhor antes da puberdade; uma puberdade precoce ou tardia pode alterar o resultado.",
      "Quando as duas estimativas coincidem, a previsão é mais confiável. Uma grande diferença entre elas é comum durante os estirões de crescimento e, por si só, não é motivo de preocupação.",
    ],
    faq: [
      {
        q: "Qual é a precisão de uma previsão de altura?",
        a: "O método da altura-alvo coloca a maioria das crianças a cerca de ±8,5 cm do alvo. Nenhuma calculadora consegue levar em conta o momento da puberdade, a nutrição ou problemas de saúde, então use os resultados como referência.",
      },
      {
        q: "Consigo prever minha altura se eu for adolescente?",
        a: "Sim. Informe sua idade e sua altura atual. Depois dos 15 anos, mais ou menos, nas meninas e dos 17 nos meninos, a maioria das pessoas cresce menos de 1 cm por ano, então sua altura atual já está perto da sua altura adulta.",
      },
      {
        q: "Quem influencia mais a altura: o pai ou a mãe?",
        a: "Os dois contribuem mais ou menos por igual; por isso a fórmula tira a média das alturas e depois ajusta pela diferença típica entre homens e mulheres.",
      },
    ],
  },
  growth: {
    metaTitle: "Altura média por idade – Curva de crescimento (5–19 anos)",
    metaDescription:
      "Altura média por idade de 5 a 19 anos para meninos e meninas em 200 países, com curva de crescimento e uma verificação rápida da altura do seu filho em relação à média.",
    h1: "Altura média por idade: curva de crescimento para meninos e meninas",
    intro: "Veja a altura média em cada idade, de 5 a 19 anos, em qualquer país, e compare com a altura de uma criança.",
    tableTitle: "Altura média por idade — {country}",
    above: "{diff} acima da média para {age} anos",
    below: "{diff} abaixo da média para {age} anos",
    atAverage: "Exatamente na média para {age} anos",
    chartBoys: "Meninos",
    chartGirls: "Meninas",
    childPoint: "Seu filho",
    contentTitle: "Como as crianças crescem",
    content: [
      "Dos 5 anos até a puberdade, as crianças crescem cerca de 5–6 cm (2 in) por ano. Em 200 países, o ano de crescimento mais rápido das meninas costuma ser entre 10 e 11 anos, e o dos meninos entre 12 e 13.",
      "Aos 14 anos, as meninas já atingiram em média 98% da altura adulta, e os meninos cerca de 94%. Os meninos chegam a aproximadamente 98% aos 16. Depois dos 17, o crescimento médio cai para menos de 1 cm (0,4 in) por ano.",
      "Essas são médias nacionais, que suavizam os estirões individuais. Uma criança saudável pode estar bem acima ou bem abaixo da linha da média; o que mais importa é um crescimento regular ao longo do tempo.",
    ],
    faq: [
      {
        q: "Qual é a altura média aos 12 anos?",
        a: "Depende do país: nos Estados Unidos, cerca de 155 cm (5′1″) para meninos e meninas; no Japão, cerca de 151 cm (pouco menos de 5 ft); e na Índia, cerca de 142–144 cm (4′8″–4′9″). Escolha um país acima para ver os números exatos.",
      },
      {
        q: "Com que idade meninas e meninos param de crescer?",
        a: "A maioria das meninas está perto da altura adulta aos 15–16 anos, e a maioria dos meninos aos 17–18. Depois disso, o crescimento médio é inferior a 1 cm por ano.",
      },
      {
        q: "A altura do meu filho é normal?",
        a: "As crianças variam muito em torno da média, então uma medida acima ou abaixo dela costuma ser normal. Converse com um médico se o crescimento desacelerar de repente ou se a criança se afastar muito da sua posição habitual ao longo do tempo.",
      },
    ],
  },
  bmi: {
    metaTitle: "Calculadora de IMC e peso saudável para sua altura",
    metaDescription:
      "Calculadora de IMC: calcule seu IMC em unidades métricas ou imperiais e veja a faixa de peso saudável para sua altura, com tabela de altura e peso baseada na OMS.",
    h1: "Calculadora de IMC e peso saudável para sua altura",
    intro: "Informe sua altura e seu peso para saber seu índice de massa corporal (IMC) e a faixa de peso saudável para a sua altura.",
    weight: "Peso",
    yourBmi: "Seu IMC",
    categories: {
      underweight: "Abaixo do peso",
      normal: "Peso saudável",
      overweight: "Sobrepeso",
      obese: "Obesidade",
    },
    healthyRange: "Peso saudável para {height}: {low} – {high}",
    chartTitle: "Faixa de peso saudável por altura",
    colHeight: "Altura",
    colRange: "Peso saudável (IMC 18,5–24,9)",
    note: "Para adultos a partir de 18 anos. O IMC não distingue músculo de gordura; crianças e adolescentes precisam de curvas de IMC específicas para a idade.",
    contentTitle: "O que o IMC indica",
    content: [
      "O IMC é o peso em quilogramas dividido pela altura em metros ao quadrado. A Organização Mundial da Saúde classifica o IMC de adultos como abaixo do peso quando é menor que 18,5, saudável de 18,5 a 24,9, sobrepeso de 25 a 29,9 e obesidade a partir de 30.",
      "Como usa apenas altura e peso, o IMC é um número rápido de triagem, e não um diagnóstico. Pessoas muito musculosas podem ter IMC alto sem excesso de gordura, e algumas diretrizes de saúde usam limites mais baixos para pessoas de ascendência asiática.",
    ],
    faq: [
      { q: "O que é um IMC saudável?", a: "Para adultos, a faixa saudável da OMS vai de 18,5 a 24,9." },
      { q: "Como se calcula o IMC?", a: "Divida o peso em quilogramas pela altura em metros ao quadrado. Por exemplo, 70 kg com 1,75 m: 70 ÷ 3,06 = 22,9." },
      {
        q: "Qual é o peso saudável para 170 cm?",
        a: "Para 170 cm (5′7″), um IMC de 18,5–24,9 corresponde a cerca de 53,5–72,0 kg (118–159 lb).",
      },
    ],
  },
  person: {
    metaTitle: "Altura de {name}: quanto mede {name}? ({cm} / {ftin})",
    metaDescription:
      "{name} mede {cm} ({ftin}). Compare a altura de {name} com a de um homem e uma mulher de altura média e veja quem tem quase a mesma altura.",
    h1: "Altura de {name}",
    answer: "{name} mede {cm} ({ftin}).",
    boardTitle: "{name} ao lado de um homem e uma mulher de altura média",
    statsTitle: "Isso é alto ou baixo?",
    tallerThan: "Supera a altura de {pct} {group} do mundo",
    groupMen: "dos homens",
    groupWomen: "das mulheres",
    diffTaller: "{diff} a mais que {who}",
    diffShorter: "{diff} a menos que {who}",
    whoMan: "o homem médio",
    whoWoman: "a mulher média",
    similarTitle: "Quase a mesma altura",
    compareCta: "Compare sua altura com a de {name}",
    sourceNote: "Altura mais divulgada de {name}; os números podem variar um pouco de uma fonte para outra.",
    faqFeet: "Quanto mede {name} em pés?",
    faqFeetA: "{name} mede {ftin}, ou seja, {cm}.",
    faqTall: "{name} é uma pessoa alta?",
    faqTallAbove: "Sim. Com {cm}, {name} supera a altura de {pct} {group} do mundo.",
    faqTallAverage: "{name} tem altura próxima da média: com {cm}, supera a altura de {pct} {group} do mundo.",
    faqTallBelow: "{name} tem altura abaixo da média: com {cm}, supera a altura de apenas {pct} {group} do mundo.",
    faqVs: "{name} mede mais que {other}?",
    faqVsTaller: "Sim. {name} ({cm}) mede {diff} a mais que {other} ({otherCm}).",
    faqVsShorter: "Não. {name} ({cm}) mede {diff} a menos que {other} ({otherCm}).",
    faqVsSame: "A altura é a mesma: {cm}.",
  },
  people: {
    metaTitle: "Altura dos famosos: quanto medem celebridades e personagens?",
    metaDescription:
      "Altura de atletas, atores, músicos e personagens de anime em cm e em pés, cada um com uma comparação visual com um homem e uma mulher de altura média.",
    h1: "Altura de famosos, atletas e personagens",
    intro: "Escolha um nome para ver a altura em um gráfico em escala e comparar com a sua.",
  },
  guides: {
    metaTitle: "Guias de altura: como medir, crescimento e diferenças",
    metaDescription:
      "Guias práticos sobre como medir a altura em casa, quando paramos de crescer e como ficam, na prática, as diferenças de altura.",
    h1: "Guias de altura",
    intro: "Guias curtos e práticos, com os números por trás de cada um.",
    read: "Ler o guia",
    minutes: "{n} min de leitura",
  },
};

export default messages;
