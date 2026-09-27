import type { ToolsMessages } from "./en";

const messages: ToolsMessages = {
  common: {
    tools: "Herramientas",
    home: "Inicio",
    hubMetaTitle: "Herramientas de estatura gratis: conversor y calculadoras",
    hubMetaDescription:
      "Herramientas gratis: convierte cm a pies y pulgadas, calcula la diferencia de altura, descubre tu percentil de estatura y compara la estatura promedio por país.",
    hubH1: "Herramientas de estatura",
    hubIntro: "Calculadoras rápidas y datos de referencia para complementar el comparador de estaturas.",
    relatedTitle: "Más herramientas de estatura",
    boardCta: "Compara en el gráfico de estaturas",
    boardCtaBody: "Pon personas, personajes y objetos lado a lado en una misma escala visual.",
    openInBoard: "Abrir en el gráfico de estaturas",
    faqTitle: "Preguntas frecuentes",
    men: "Hombres",
    women: "Mujeres",
    man: "Hombre",
    woman: "Mujer",
    sex: "Sexo",
    country: "País",
    height: "Estatura",
    source: "Fuente",
    sourceNcd:
      "NCD Risk Factor Collaboration (NCD-RisC), Lancet 2020 — estatura media de jóvenes de 19 años, estimaciones más recientes. Licencia CC BY 4.0.",
  },
  names: {
    "height-converter": {
      name: "Conversor de estatura",
      blurb: "Convierte cm a pies y pulgadas y viceversa, con una tabla de conversión completa.",
    },
    "height-difference-calculator": {
      name: "Calculadora de diferencia de estatura",
      blurb: "Calcula la diferencia exacta entre dos estaturas y descubre hasta dónde le llega una persona a la otra.",
    },
    "average-height-by-country": {
      name: "Estatura promedio por país",
      blurb: "Estatura promedio de hombres y mujeres en 200 países, con ranking y buscador.",
    },
    "height-percentile-calculator": {
      name: "Calculadora de percentil de estatura",
      blurb: "Descubre a qué porcentaje de hombres o mujeres superas en estatura, en tu país y en el mundo.",
    },
    "hug-simulator": {
      name: "Simulador de abrazos",
      blurb: "Mira un abrazo de frente o por la espalda a escala real para dos estaturas y dónde queda cada cabeza.",
    },
    "3d-height-comparison": {
      name: "Comparador de altura 3D",
      blurb: "Compara personas, animales y objetos como modelos 3D que puedes girar y ampliar.",
    },
  },
  converter: {
    metaTitle: "Convertir cm a pies y pulgadas – Calculadora de estatura",
    metaDescription:
      "Convertir cm a pies y pulgadas (y al revés) al instante con esta calculadora de estatura. Incluye una tabla de 4′6″ a 7′0″ y de 140 a 215 cm.",
    h1: "Conversor de estatura: cm ↔ pies y pulgadas",
    intro:
      "Escribe una estatura en cualquier casilla y las demás se actualizan al instante. Los resultados se redondean a la pulgada o al 0.1 cm más cercano.",
    centimeters: "Centímetros",
    meters: "Metros",
    feetInches: "Pies + pulgadas",
    totalInches: "Pulgadas totales",
    result: "{cm} equivalen a {ftin}",
    tableCmTitle: "Tabla de centímetros a pies y pulgadas",
    tableFtTitle: "Tabla de pies y pulgadas a centímetros",
    colCm: "cm",
    colFtIn: "ft / in",
    colInches: "pulgadas",
    howTitle: "Cómo convertir la estatura",
    how: [
      "Una pulgada equivale exactamente a 2.54 cm y un pie tiene 12 pulgadas (30.48 cm).",
      "De cm a pies y pulgadas: divide los centímetros entre 2.54 para obtener el total de pulgadas y luego divide entre 12. La parte entera son los pies y el resto, las pulgadas. Ejemplo: 175 cm ÷ 2.54 = 68.9 in → 5 ft 8.9 in ≈ 5′9″.",
      "De pies y pulgadas a cm: multiplica los pies por 12, suma las pulgadas y multiplica el resultado por 2.54. Ejemplo: 5′10″ = 70 in × 2.54 = 177.8 cm.",
    ],
    faq: [
      { q: "¿Cuánto es 170 cm en pies?", a: "170 cm son unos 5 pies 7 pulgadas (5′6.9″)." },
      { q: "¿Cuánto es 6 pies en cm?", a: "6 pies son exactamente 182.88 cm, que normalmente se redondean a 183 cm." },
      { q: "¿Cuánto es 5′5″ en cm?", a: "5 pies 5 pulgadas son 165.1 cm." },
      {
        q: "¿Por qué a veces las conversiones de estatura difieren en un centímetro?",
        a: "Las estaturas en pies suelen redondearse a la pulgada más cercana, y una pulgada mide 2.54 cm, así que un valor redondeado puede variar hasta unos 1.3 cm.",
      },
    ],
  },
  difference: {
    metaTitle: "Diferencia de altura – Calculadora de diferencia de estatura",
    metaDescription:
      "Calcula la diferencia de altura entre dos personas en cm y pies/pulgadas, el porcentaje de diferencia y hasta dónde le llega la más baja a la más alta.",
    h1: "Calculadora de diferencia de estatura",
    intro:
      "Ingresa dos estaturas para obtener la diferencia exacta en cm y ft/in, el porcentaje de diferencia y una vista previa a escala.",
    personA: "Persona A",
    personB: "Persona B",
    name: "Nombre",
    difference: "Diferencia",
    percentTaller: "{a} mide un {pct} más que {b}",
    sameHeight: "Las dos personas miden lo mismo",
    reachTitle: "Hasta dónde le llega {b} a {a}",
    reach: {
      eyes: "A la altura de los ojos",
      nose: "Nariz o boca",
      chin: "Mentón",
      shoulders: "Hombros",
      chest: "Pecho",
      waist: "Cintura",
      below: "Por debajo de la cintura",
    },
    reachNote:
      "Basado en las proporciones corporales promedio de un adulto; la postura, el calzado y el peinado cambian el resultado real.",
    categoryTitle: "¿Qué tan grande es la diferencia?",
    categories: {
      tiny: "Casi imperceptible (menos de 3 cm / 1 in)",
      small: "Pequeña (3–7 cm / 1–3 in)",
      medium: "Notable (8–14 cm / 3–5.5 in)",
      large: "Grande (15–24 cm / 6–9.5 in)",
      huge: "Muy grande (25 cm / 10 in o más)",
    },
    contentTitle: "Cómo interpretar las diferencias de estatura",
    content: [
      "Una diferencia de altura puede parecer mayor o menor de lo que indica la cifra. Con 10 cm (4 in) de diferencia, los ojos de la persona más baja quedan más o menos a la altura de la boca de la más alta, algo muy visible en las fotos.",
      "El porcentaje de diferencia es útil para comparar tamaños distintos: 20 cm entre adultos de 165 y 185 cm equivalen a un 12% aproximadamente, mientras que esos mismos 20 cm entre niños de 100 y 120 cm son un 20%.",
      "En las parejas, lo habitual es una diferencia de unos 12 cm (5 in), porque es más o menos lo que los hombres les sacan en promedio a las mujeres en todo el mundo.",
    ],
    faq: [
      {
        q: "¿Cómo se calcula una diferencia de estatura?",
        a: "Resta la estatura menor a la mayor. Para obtener el porcentaje, divide la diferencia entre la estatura menor y multiplica por 100.",
      },
      {
        q: "¿15 cm de diferencia de altura es mucho?",
        a: "15 cm (unas 6 in) es una diferencia claramente visible: la coronilla de la persona más baja suele llegar más o menos a la nariz de la más alta.",
      },
      {
        q: "¿Cuál es la diferencia de estatura promedio entre hombres y mujeres?",
        a: "A nivel mundial, los hombres de 19 años miden en promedio 170.8 cm y las mujeres 158.6 cm, una diferencia de unos 12 cm (4.8 in).",
      },
    ],
  },
  countries: {
    metaTitle: "Estatura promedio por país 2026: hombres y mujeres",
    metaDescription:
      "Estatura promedio por país: altura media de hombres y mujeres en 200 países en cm y pies, de mayor a menor y con su cambio desde 1985. Datos de NCD-RisC.",
    h1: "Estatura promedio por país",
    intro:
      "Estatura media de hombres y mujeres de 19 años en 200 países, la edad a la que la mayoría de las personas alcanza su estatura adulta.",
    search: "Buscar país…",
    sortBy: "Ordenar por",
    rank: "#",
    change: "Desde 1985",
    compare: "Comparar",
    world: "Mundo",
    tallestMen: "Hombres más altos",
    tallestWomen: "Mujeres más altas",
    shortestMen: "Hombres más bajos",
    shortestWomen: "Mujeres más bajas",
    worldAverage: "Promedio mundial",
    contentTitle: "Qué muestran los datos",
    content: [
      "Países Bajos tiene los adultos jóvenes más altos del mundo: los hombres miden en promedio 183.8 cm (6′0″) y las mujeres 170.4 cm (5′7″). Los promedios más bajos están en Timor Oriental para los hombres (160.1 cm) y en Guatemala para las mujeres (150.9 cm).",
      "A nivel mundial, los hombres miden en promedio 170.8 cm (5′7″) y las mujeres 158.6 cm (5′2″). La diferencia entre los países más altos y los más bajos supera los 20 cm.",
      "La genética influye en la estatura, pero las diferencias entre países reflejan sobre todo la nutrición, la salud y las condiciones de vida durante la infancia. Por eso la estatura promedio ha aumentado varios centímetros en muchos países desde 1985.",
    ],
    methodTitle: "Sobre los datos",
    method:
      "Las cifras son estimaciones de NCD-RisC de la estatura media a los 19 años para el año más reciente disponible, obtenidas de estudios poblacionales con mediciones reales (no de estaturas declaradas por las propias personas). Los valores se redondean a 0.1 cm.",
    faq: [
      {
        q: "¿Qué país tiene las personas más altas?",
        a: "Países Bajos, con un promedio de 183.8 cm en los hombres y 170.4 cm en las mujeres.",
      },
      {
        q: "¿Qué país tiene las personas más bajas?",
        a: "Timor Oriental tiene el promedio más bajo en hombres (160.1 cm) y Guatemala en mujeres (150.9 cm).",
      },
      {
        q: "¿Cuál es la estatura promedio en el mundo?",
        a: "Unos 170.8 cm (5′7″) en los hombres y 158.6 cm (5′2″) en las mujeres.",
      },
      {
        q: "¿Por qué se usan jóvenes de 19 años?",
        a: "A los 19 años la mayoría de las personas ya alcanzó su estatura adulta, y usar una sola edad permite comparar países directamente entre generaciones.",
      },
    ],
  },
  percentile: {
    metaTitle: "Percentil de estatura – Calculadora por país y sexo",
    metaDescription:
      "Calcula tu percentil de estatura: descubre a qué porcentaje de hombres o mujeres superas en altura en tu país y en el mundo, según los promedios de NCD-RisC.",
    h1: "Calculadora de percentil de estatura",
    intro: "Ingresa tu estatura y tu sexo para ver cómo te ubicas frente a los adultos de tu país y del mundo.",
    yourHeight: "Tu estatura",
    result: "En {country}, superas en estatura al {pct} de {group}.",
    groupMen: "los hombres",
    groupWomen: "las mujeres",
    oneIn: "Aproximadamente 1 de cada {n} personas te supera en estatura.",
    zScore: "{sd} desviaciones estándar respecto al promedio ({avg})",
    otherCountries: "Tu percentil en otros países",
    percentile: "Percentil",
    average: "Promedio",
    note:
      "Estimación: supone que las estaturas siguen una distribución normal en torno al promedio de NCD-RisC de cada país, con una dispersión típica de 7.1 cm en hombres y 6.6 cm en mujeres. Las distribuciones reales varían ligeramente según el país.",
    contentTitle: "Qué significa un percentil de estatura",
    content: [
      "Un percentil indica el porcentaje de personas que son más bajas que tú. En el percentil 50 estás justo en el promedio; en el percentil 90 superas en estatura a 9 de cada 10 personas de tu mismo sexo.",
      "Como los promedios varían entre países, una misma estatura puede ser alta en un lugar y normal en otro. 175 cm está por encima del promedio masculino en India o Japón, pero por debajo en Países Bajos.",
    ],
    faq: [
      {
        q: "¿180 cm es alto para un hombre?",
        a: "Sí, en la mayoría de los países. A nivel mundial, 180 cm (5′11″) supera aproximadamente al 90% de los hombres, aunque en Países Bajos, donde el promedio masculino es de 183.8 cm, queda por debajo de la media.",
      },
      {
        q: "¿170 cm es alto para una mujer?",
        a: "Sí. 170 cm (5′7″) supera a cerca del 96% de las mujeres en el mundo y equivale más o menos al promedio femenino en Países Bajos.",
      },
      {
        q: "¿Qué tan precisa es esta calculadora?",
        a: "Los promedios provienen de mediciones nacionales reales, pero la dispersión se modela con una desviación estándar típica, así que toma los resultados como una buena estimación y no como una posición exacta.",
      },
    ],
  },
};

export default messages;
