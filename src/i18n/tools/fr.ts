import type { ToolsMessages } from "./en";

const messages: ToolsMessages = {
  common: {
    tools: "Outils",
    home: "Accueil",
    hubMetaTitle: "Outils gratuits sur la taille : convertisseur et calculateurs",
    hubMetaDescription:
      "Outils gratuits : convertissez les cm en pieds et pouces, calculez une différence de taille, trouvez votre percentile et comparez la taille moyenne par pays.",
    hubH1: "Outils sur la taille",
    hubIntro: "Des calculateurs rapides et des données de référence à utiliser avec le comparateur de taille.",
    relatedTitle: "Autres outils sur la taille",
    boardCta: "Comparer sur le graphique des tailles",
    boardCtaBody: "Alignez personnes, personnages et objets côte à côte sur une même échelle visuelle.",
    openInBoard: "Ouvrir dans le graphique des tailles",
    faqTitle: "Questions fréquentes",
    men: "Hommes",
    women: "Femmes",
    man: "Homme",
    woman: "Femme",
    sex: "Sexe",
    country: "Pays",
    height: "Taille",
    source: "Source",
    sourceNcd:
      "NCD Risk Factor Collaboration (NCD-RisC), Lancet 2020 — taille moyenne à 19 ans, estimations les plus récentes. Sous licence CC BY 4.0.",
  },
  names: {
    "height-converter": {
      name: "Convertisseur de taille",
      blurb: "Convertissez les cm en pieds et pouces et inversement, avec un tableau de conversion complet.",
    },
    "height-difference-calculator": {
      name: "Calculateur de différence de taille",
      blurb: "Calculez l’écart exact entre deux tailles et voyez jusqu’où une personne arrive sur l’autre.",
    },
    "average-height-by-country": {
      name: "Taille moyenne par pays",
      blurb: "Taille moyenne des hommes et des femmes dans 200 pays, avec classement et recherche.",
    },
    "height-percentile-calculator": {
      name: "Calculateur de percentile de taille",
      blurb: "Découvrez quel pourcentage d’hommes ou de femmes vous dépassez, dans votre pays et dans le monde.",
    },
    "hug-simulator": {
      name: "Simulateur de câlin",
      blurb: "Visualisez un câlin de face ou de dos à l’échelle pour deux tailles, et où arrivent les têtes.",
    },
    "3d-height-comparison": {
      name: "Comparateur de taille 3D",
      blurb: "Comparez personnes, animaux et objets en modèles 3D à faire pivoter et zoomer.",
    },
  },
  converter: {
    metaTitle: "Convertir cm en pieds – Taille en pieds et pouces",
    metaDescription:
      "Convertir des cm en pieds et pouces (et inversement) en un instant, avec un tableau de 4′6″ à 7′0″ et de 140 à 215 cm pour trouver votre taille en pieds.",
    h1: "Convertisseur de taille : cm ↔ pieds et pouces",
    intro:
      "Saisissez une taille dans n’importe quel champ : les autres se mettent à jour instantanément. Les résultats sont arrondis au pouce ou au 0,1 cm le plus proche.",
    centimeters: "Centimètres",
    meters: "Mètres",
    feetInches: "Pieds + pouces",
    totalInches: "Total en pouces",
    result: "{cm} correspondent à {ftin}",
    tableCmTitle: "Tableau de conversion des centimètres en pieds et pouces",
    tableFtTitle: "Tableau de conversion des pieds et pouces en centimètres",
    colCm: "cm",
    colFtIn: "ft / in",
    colInches: "pouces",
    howTitle: "Comment convertir une taille",
    how: [
      "Un pouce vaut exactement 2,54 cm et un pied compte 12 pouces (30,48 cm).",
      "Des cm aux pieds et pouces : divisez les centimètres par 2,54 pour obtenir le total en pouces, puis divisez par 12. La partie entière donne les pieds et le reste, les pouces. Exemple : 175 cm ÷ 2,54 = 68,9 in → 5 ft 8,9 in ≈ 5′9″.",
      "Des pieds et pouces aux cm : multipliez les pieds par 12, ajoutez les pouces, puis multipliez par 2,54. Exemple : 5′10″ = 70 in × 2,54 = 177,8 cm.",
    ],
    faq: [
      { q: "Combien font 170 cm en pieds ?", a: "170 cm font environ 5 pieds 7 pouces (5′6,9″)." },
      { q: "Combien font 6 pieds en cm ?", a: "6 pieds font exactement 182,88 cm, généralement arrondis à 183 cm." },
      { q: "Combien font 5′5″ en cm ?", a: "5 pieds 5 pouces font 165,1 cm." },
      {
        q: "Pourquoi les conversions de taille diffèrent-elles parfois d’un centimètre ?",
        a: "Les tailles en pieds sont généralement arrondies au pouce le plus proche, et un pouce mesure 2,54 cm : une valeur arrondie peut donc varier jusqu’à 1,3 cm environ.",
      },
    ],
  },
  difference: {
    metaTitle: "Différence de taille – Calculateur pour comparer deux tailles",
    metaDescription:
      "Calculez la différence de taille entre deux personnes en cm et en pieds/pouces, l’écart en pourcentage et jusqu’où la plus petite arrive sur la plus grande.",
    h1: "Calculateur de différence de taille",
    intro:
      "Saisissez deux tailles pour obtenir l’écart exact en cm et en ft/in, la différence en pourcentage et un aperçu à l’échelle.",
    personA: "Personne A",
    personB: "Personne B",
    name: "Nom",
    difference: "Différence",
    percentTaller: "{a} mesure {pct} de plus que {b}",
    sameHeight: "Les deux personnes ont la même taille",
    reachTitle: "Jusqu’où le haut de la tête de {b} arrive sur {a}",
    reach: {
      eyes: "Hauteur des yeux",
      nose: "Nez ou bouche",
      chin: "Menton",
      shoulders: "Épaules",
      chest: "Poitrine",
      waist: "Ceinture",
      below: "Sous la ceinture",
    },
    reachNote:
      "D’après les proportions moyennes d’un adulte ; la posture, les chaussures et la coiffure modifient le résultat réel.",
    categoryTitle: "Quelle est l’ampleur de l’écart ?",
    categories: {
      tiny: "À peine perceptible (moins de 3 cm / 1 in)",
      small: "Faible (3–7 cm / 1–3 in)",
      medium: "Visible (8–14 cm / 3–5,5 in)",
      large: "Important (15–24 cm / 6–9,5 in)",
      huge: "Très important (25 cm / 10 in ou plus)",
    },
    contentTitle: "Comprendre les différences de taille",
    content: [
      "Un écart de taille paraît souvent plus grand ou plus petit que ne le laisse penser le chiffre brut. Avec 10 cm (4 in) de différence, les yeux de la personne la plus petite arrivent à peu près au niveau de la bouche de la plus grande, ce qui se voit nettement sur les photos.",
      "La différence en pourcentage est utile pour comparer des gabarits différents : 20 cm d’écart entre deux adultes de 165 et 185 cm représentent environ 12 %, alors que ces mêmes 20 cm entre des enfants de 100 et 120 cm représentent 20 %.",
      "Dans un couple, un écart d’environ 12 cm (5 in) est courant, car c’est à peu près la différence moyenne entre les hommes et les femmes dans le monde.",
    ],
    faq: [
      {
        q: "Comment calculer une différence de taille ?",
        a: "Soustrayez la plus petite taille de la plus grande. Pour obtenir le pourcentage, divisez la différence par la plus petite taille et multipliez par 100.",
      },
      {
        q: "Une différence de taille de 15 cm, c’est beaucoup ?",
        a: "15 cm (environ 6 in), c’est un écart bien visible : le haut de la tête de la personne la plus petite arrive en général à peu près au niveau du nez de la plus grande.",
      },
      {
        q: "Quelle est la différence de taille moyenne entre les hommes et les femmes ?",
        a: "Dans le monde, les hommes de 19 ans mesurent en moyenne 170,8 cm et les femmes 158,6 cm, soit un écart d’environ 12 cm (4,8 in).",
      },
    ],
  },
  countries: {
    metaTitle: "Taille moyenne par pays 2026 – Hommes et femmes (200 pays)",
    metaDescription:
      "Taille moyenne par pays des hommes et des femmes dans 200 pays, en cm et en pieds, du plus grand au plus petit, avec l’évolution depuis 1985. Données NCD-RisC.",
    h1: "Taille moyenne par pays",
    intro:
      "Taille moyenne des hommes et des femmes de 19 ans dans 200 pays — l’âge auquel la plupart des gens atteignent leur taille adulte.",
    search: "Rechercher un pays…",
    sortBy: "Trier par",
    rank: "#",
    change: "Depuis 1985",
    compare: "Comparer",
    world: "Monde",
    tallestMen: "Hommes les plus grands",
    tallestWomen: "Femmes les plus grandes",
    shortestMen: "Hommes les plus petits",
    shortestWomen: "Femmes les plus petites",
    worldAverage: "Moyenne mondiale",
    contentTitle: "Ce que montrent les données",
    content: [
      "Les Pays-Bas comptent les jeunes adultes les plus grands du monde : les hommes y mesurent en moyenne 183,8 cm (6′0″) et les femmes 170,4 cm (5′7″). Les moyennes les plus basses s’observent au Timor oriental pour les hommes (160,1 cm) et au Guatemala pour les femmes (150,9 cm).",
      "À l’échelle mondiale, les hommes mesurent en moyenne 170,8 cm (5′7″) et les femmes 158,6 cm (5′2″). L’écart entre les pays les plus grands et les plus petits dépasse 20 cm.",
      "La génétique joue un rôle, mais les écarts entre pays reflètent surtout l’alimentation, la santé et les conditions de vie pendant l’enfance. C’est pourquoi la taille moyenne a augmenté de plusieurs centimètres dans de nombreux pays depuis 1985.",
    ],
    methodTitle: "À propos des données",
    method:
      "Les chiffres sont des estimations NCD-RisC de la taille moyenne à 19 ans pour la dernière année disponible, établies à partir d’études de mesure en population (et non de tailles déclarées). Les valeurs sont arrondies à 0,1 cm.",
    faq: [
      {
        q: "Quel pays compte les personnes les plus grandes ?",
        a: "Les Pays-Bas, avec une moyenne de 183,8 cm pour les hommes et de 170,4 cm pour les femmes.",
      },
      {
        q: "Quel pays compte les personnes les plus petites ?",
        a: "Le Timor oriental affiche la moyenne la plus basse chez les hommes (160,1 cm) et le Guatemala chez les femmes (150,9 cm).",
      },
      {
        q: "Quelle est la taille moyenne dans le monde ?",
        a: "Environ 170,8 cm (5′7″) pour les hommes et 158,6 cm (5′2″) pour les femmes.",
      },
      {
        q: "Pourquoi prendre les jeunes de 19 ans ?",
        a: "La plupart des gens ont atteint leur taille adulte à 19 ans, et s’en tenir à un seul âge permet de comparer directement les pays d’une génération à l’autre.",
      },
    ],
  },
  percentile: {
    metaTitle: "Percentile de taille – Calculateur par pays et par sexe",
    metaDescription:
      "Calculez votre percentile de taille : découvrez quel pourcentage d’hommes ou de femmes vous dépassez dans votre pays et dans le monde (données NCD-RisC).",
    h1: "Calculateur de percentile de taille",
    intro:
      "Indiquez votre taille et votre sexe pour voir où vous vous situez par rapport aux adultes de votre pays et du monde entier.",
    yourHeight: "Votre taille",
    result: "{country} : vous dépassez en taille {pct} {group}.",
    groupMen: "des hommes",
    groupWomen: "des femmes",
    oneIn: "Environ 1 personne sur {n} est plus grande que vous.",
    zScore: "{sd} écarts-types par rapport à la moyenne ({avg})",
    otherCountries: "Votre percentile dans d’autres pays",
    percentile: "Percentile",
    average: "Moyenne",
    note:
      "Estimation : on suppose que les tailles suivent une loi normale autour de la moyenne NCD-RisC de chaque pays, avec un écart-type typique de 7,1 cm pour les hommes et de 6,6 cm pour les femmes. Les distributions réelles varient légèrement d’un pays à l’autre.",
    contentTitle: "Que signifie un percentile de taille ?",
    content: [
      "Un percentile indique la part des personnes plus petites que vous. Au 50e percentile, vous êtes pile dans la moyenne ; au 90e, vous dépassez 9 personnes sur 10 du même sexe.",
      "Comme les moyennes varient d’un pays à l’autre, une même taille peut être grande à un endroit et moyenne ailleurs. 175 cm, c’est au-dessus de la moyenne masculine en Inde ou au Japon, mais en dessous aux Pays-Bas.",
    ],
    faq: [
      {
        q: "180 cm, c’est grand pour un homme ?",
        a: "Oui, dans la plupart des pays. À l’échelle mondiale, 180 cm (5′11″) dépasse environ 90 % des hommes, mais aux Pays-Bas, où la moyenne masculine est de 183,8 cm, c’est en dessous de la moyenne.",
      },
      {
        q: "170 cm, c’est grand pour une femme ?",
        a: "Oui. 170 cm (5′7″) dépasse environ 96 % des femmes dans le monde et correspond à peu près à la moyenne féminine aux Pays-Bas.",
      },
      {
        q: "Ce calculateur est-il fiable ?",
        a: "Les moyennes proviennent de mesures nationales, mais la dispersion est modélisée avec un écart-type typique : considérez le résultat comme une bonne estimation plutôt que comme un rang exact.",
      },
    ],
  },
};

export default messages;
