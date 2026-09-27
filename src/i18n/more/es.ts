import type { MoreMessages } from "./en";

const messages: MoreMessages = {
  names: {
    "height-predictor": {
      name: "Calculadora de estatura adulta",
      blurb: "¿Cuánto voy a medir? Predice la estatura adulta a partir de la estatura de los padres o de la estatura actual de un niño.",
    },
    "growth-chart": {
      name: "Estatura promedio por edad",
      blurb: "Curva de crecimiento para niños y niñas de 5 a 19 años en 200 países, con verificación de la estatura infantil.",
    },
    "bmi-calculator": {
      name: "IMC y peso saludable",
      blurb: "Calcula tu IMC y descubre el rango de peso saludable para tu estatura.",
    },
  },
  common: {
    boy: "Niño",
    girl: "Niña",
    age: "Edad",
    years: "{n} años",
    father: "Estatura del padre",
    mother: "Estatura de la madre",
    childHeight: "Estatura actual del niño",
    optional: "opcional",
    estimateNote: "Solo son estimaciones: la genética, la nutrición, la salud y el momento de la pubertad influyen en el crecimiento real.",
  },
  predictor: {
    metaTitle: "Calculadora de estatura: ¿cuánto voy a medir? (niños)",
    metaDescription:
      "Calculadora de estatura: estima cuánto medirá un niño de adulto según la estatura de sus padres o su estatura actual para su edad, con datos de 200 países.",
    h1: "Calculadora de estatura: ¿cuánto voy a medir?",
    intro:
      "Estima la estatura adulta de dos formas: a partir de la estatura de ambos padres y a partir de la estatura actual del niño comparada con el crecimiento promedio en su país.",
    parentsResult: "Según la estatura de los padres",
    currentResult: "Según la estatura actual para su edad",
    range: "Rango probable: {low} – {high}",
    currentUnavailable: "Ingresa la estatura del niño (de 5 a 17 años) para obtener una segunda estimación.",
    howTitle: "Cómo funciona la predicción",
    how: [
      "Estatura de los padres (método de la talla media parental): suma la estatura de la madre y la del padre, añade 13 cm si es niño o resta 13 cm si es niña, y divide entre 2. Es la estatura objetivo que usan los pediatras; la mayoría de los niños (alrededor del 95%) terminan a menos de unos 8.5 cm (3.3 in) de ella.",
      "Estatura actual para la edad: se compara la estatura del niño con el promedio nacional para su edad y sexo (datos de NCD-RisC), suponiendo que mantendrá la misma posición relativa hasta la edad adulta. Funciona mejor antes de la pubertad; una pubertad temprana o tardía puede modificar el resultado.",
      "Cuando ambas estimaciones coinciden, la predicción es más fiable. Una gran diferencia entre ellas es frecuente durante los estirones y, por sí sola, no es motivo de preocupación.",
    ],
    faq: [
      {
        q: "¿Qué tan precisa es una predicción de estatura?",
        a: "El método de la talla media parental sitúa a la mayoría de los niños a unos ±8.5 cm de la estatura objetivo. Ninguna calculadora puede tener en cuenta el momento de la pubertad, la nutrición o las afecciones médicas, así que toma los resultados como una orientación.",
      },
      {
        q: "¿Puedo predecir mi estatura si soy adolescente?",
        a: "Sí. Ingresa tu edad y tu estatura actual. A partir de los 15 años aproximadamente en las chicas y de los 17 en los chicos, la mayoría de las personas crecen menos de 1 cm al año, así que tu estatura actual ya está cerca de tu estatura adulta.",
      },
      {
        q: "¿Qué influye más en la estatura, el padre o la madre?",
        a: "Ambos padres contribuyen más o menos por igual; por eso la fórmula promedia sus estaturas y luego ajusta según la diferencia típica entre hombres y mujeres.",
      },
    ],
  },
  growth: {
    metaTitle: "Estatura promedio por edad: tabla para niños y niñas (5–19)",
    metaDescription:
      "Estatura promedio por edad de 5 a 19 años para niños y niñas en 200 países, con curva de crecimiento y una comparación rápida de la estatura de tu hijo con el promedio.",
    h1: "Estatura promedio por edad: curva de crecimiento para niños y niñas",
    intro: "Consulta la estatura promedio a cada edad, de los 5 a los 19 años, en cualquier país, y compárala con la de un niño.",
    tableTitle: "Estatura promedio por edad — {country}",
    above: "{diff} por encima del promedio a los {age} años",
    below: "{diff} por debajo del promedio a los {age} años",
    atAverage: "Justo en el promedio a los {age} años",
    chartBoys: "Niños",
    chartGirls: "Niñas",
    childPoint: "Tu hijo",
    contentTitle: "Cómo crecen los niños",
    content: [
      "Desde los 5 años hasta la pubertad, los niños crecen unos 5–6 cm (2 in) al año. En 200 países, el año de crecimiento más rápido de las niñas suele darse entre los 10 y los 11 años, y el de los niños entre los 12 y los 13.",
      "A los 14 años, las niñas han alcanzado en promedio el 98% de su estatura adulta y los niños alrededor del 94%. Los niños llegan aproximadamente al 98% a los 16. Después de los 17, el crecimiento promedio baja a menos de 1 cm (0.4 in) al año.",
      "Son promedios nacionales, que suavizan los estirones individuales. Un niño sano puede estar bastante por encima o por debajo de la línea del promedio; lo que más importa es un crecimiento constante a lo largo del tiempo.",
    ],
    faq: [
      {
        q: "¿Cuál es la estatura promedio a los 12 años?",
        a: "Depende del país: en Estados Unidos, unos 155 cm (5′1″) tanto en niños como en niñas; en Japón, unos 151 cm (poco menos de 5 ft), y en la India, unos 142–144 cm (4′8″–4′9″). Elige un país arriba para ver las cifras exactas.",
      },
      {
        q: "¿A qué edad dejan de crecer las niñas y los niños?",
        a: "La mayoría de las niñas están cerca de su estatura adulta a los 15–16 años y la mayoría de los niños a los 17–18. A partir de entonces, el crecimiento promedio es de menos de 1 cm al año.",
      },
      {
        q: "¿Es normal la estatura de mi hijo?",
        a: "Los niños varían mucho en torno al promedio, así que una medición por encima o por debajo suele ser normal. Consulta a un médico si el crecimiento se frena de repente o si, con el tiempo, el niño se aleja mucho de su posición habitual.",
      },
    ],
  },
  bmi: {
    metaTitle: "Calculadora IMC y peso saludable según tu estatura",
    metaDescription:
      "Calculadora IMC: calcula tu índice de masa corporal en unidades métricas o imperiales y ve el peso saludable para tu estatura, según las categorías de IMC de la OMS.",
    h1: "Calculadora de IMC y peso saludable para tu estatura",
    intro: "Ingresa tu estatura y tu peso para obtener tu índice de masa corporal (IMC) y el rango de peso saludable para tu estatura.",
    weight: "Peso",
    yourBmi: "Tu IMC",
    categories: {
      underweight: "Bajo peso",
      normal: "Peso saludable",
      overweight: "Sobrepeso",
      obese: "Obesidad",
    },
    healthyRange: "Peso saludable para {height}: {low} – {high}",
    chartTitle: "Rango de peso saludable por estatura",
    colHeight: "Estatura",
    colRange: "Peso saludable (IMC 18.5–24.9)",
    note: "Para adultos de 18 años o más. El IMC no distingue entre músculo y grasa; los niños y adolescentes necesitan tablas de IMC específicas para su edad.",
    contentTitle: "Qué te dice el IMC",
    content: [
      "El IMC es el peso en kilogramos dividido entre la estatura en metros al cuadrado. La Organización Mundial de la Salud clasifica el IMC adulto como bajo peso por debajo de 18.5, saludable de 18.5 a 24.9, sobrepeso de 25 a 29.9 y obesidad a partir de 30.",
      "Como solo usa la estatura y el peso, el IMC es un indicador rápido de detección, no un diagnóstico. Las personas muy musculosas pueden tener un IMC alto sin exceso de grasa, y algunas guías de salud usan umbrales más bajos para las personas de ascendencia asiática.",
    ],
    faq: [
      { q: "¿Cuál es un IMC saludable?", a: "Para adultos, el rango saludable de la OMS es de 18.5 a 24.9." },
      { q: "¿Cómo se calcula el IMC?", a: "Divide el peso en kilogramos entre la estatura en metros al cuadrado. Por ejemplo, 70 kg con 1.75 m: 70 ÷ 3.06 = 22.9." },
      {
        q: "¿Cuál es el peso saludable para 170 cm?",
        a: "Para 170 cm (5′7″), un IMC de 18.5–24.9 corresponde a unos 53.5–72.0 kg (118–159 lb).",
      },
    ],
  },
  person: {
    metaTitle: "Estatura de {name}: ¿cuánto mide {name}? ({cm} / {ftin})",
    metaDescription:
      "{name} mide {cm} ({ftin}). Compara la estatura de {name} con la del hombre y la mujer promedio y descubre quién mide más o menos lo mismo.",
    h1: "Estatura de {name}",
    answer: "{name} mide {cm} ({ftin}).",
    boardTitle: "{name} junto al hombre y la mujer promedio",
    statsTitle: "¿Qué tan alto es eso?",
    tallerThan: "Supera en estatura al {pct} de {group} del mundo",
    groupMen: "los hombres",
    groupWomen: "las mujeres",
    diffTaller: "{diff} más que {who}",
    diffShorter: "{diff} menos que {who}",
    whoMan: "el hombre promedio",
    whoWoman: "la mujer promedio",
    similarTitle: "Con una estatura parecida",
    compareCta: "Compárate con {name}",
    sourceNote: "Estatura según las cifras más difundidas sobre {name}; los datos pueden variar ligeramente según la fuente.",
    faqFeet: "¿Cuánto mide {name} en pies?",
    faqFeetA: "{name} mide {ftin}, es decir, {cm}.",
    faqTall: "¿{name} es una persona alta?",
    faqTallAbove: "Sí. Con {cm}, {name} supera en estatura al {pct} de {group} del mundo.",
    faqTallAverage: "{name} tiene una estatura cercana al promedio: con {cm}, supera al {pct} de {group} del mundo.",
    faqTallBelow: "{name} tiene una estatura por debajo del promedio: con {cm}, solo supera al {pct} de {group} del mundo.",
    faqVs: "¿{name} mide más que {other}?",
    faqVsTaller: "Sí. {name} ({cm}) mide {diff} más que {other} ({otherCm}).",
    faqVsShorter: "No. {name} ({cm}) mide {diff} menos que {other} ({otherCm}).",
    faqVsSame: "Miden lo mismo: {cm}.",
  },
  people: {
    metaTitle: "Estatura de famosos y personajes: ¿cuánto miden?",
    metaDescription:
      "Estatura de deportistas, actores, músicos y personajes de anime en cm y en pies, cada una con una comparación visual con el hombre y la mujer promedio.",
    h1: "Estatura de famosos, deportistas y personajes",
    intro: "Elige un nombre para ver su estatura en un gráfico a escala y compararla con la tuya.",
  },
  guides: {
    metaTitle: "Guías sobre la estatura: medición, crecimiento y diferencias",
    metaDescription:
      "Guías prácticas para medir tu estatura en casa, saber a qué edad se deja de crecer y ver cómo se ven realmente las diferencias de estatura.",
    h1: "Guías sobre la estatura",
    intro: "Guías breves y prácticas, con los datos que las respaldan.",
    read: "Leer la guía",
    minutes: "{n} min de lectura",
  },
};

export default messages;
