import type { MoreMessages } from "./en";

const messages: MoreMessages = {
  names: {
    "height-predictor": {
      name: "Calculateur de taille adulte",
      blurb: "Quelle taille vais-je faire ? Estimez la taille adulte à partir de la taille des parents ou de la taille actuelle d’un enfant.",
    },
    "growth-chart": {
      name: "Taille moyenne par âge",
      blurb: "Courbe de croissance des garçons et des filles de 5 à 19 ans dans 200 pays, avec vérification de la taille d’un enfant.",
    },
    "bmi-calculator": {
      name: "IMC et poids santé",
      blurb: "Calculez votre IMC et découvrez la fourchette de poids santé pour votre taille.",
    },
  },
  common: {
    boy: "Garçon",
    girl: "Fille",
    age: "Âge",
    years: "{n} ans",
    father: "Taille du père",
    mother: "Taille de la mère",
    childHeight: "Taille actuelle de l’enfant",
    optional: "facultatif",
    estimateNote: "Simples estimations : la génétique, l’alimentation, la santé et l’âge de la puberté influencent tous la croissance réelle.",
  },
  predictor: {
    metaTitle: "Calculer sa taille adulte – Quelle taille vais-je faire ?",
    metaDescription:
      "Calculer sa taille adulte à partir de la taille des parents (taille cible parentale) et de la taille actuelle de l’enfant pour son âge, avec des données de 200 pays.",
    h1: "Calculer sa taille adulte : quelle taille vais-je faire ?",
    intro:
      "Estimez la taille adulte de deux façons : à partir de la taille des deux parents, et à partir de la taille actuelle d’un enfant comparée à la croissance moyenne dans son pays.",
    parentsResult: "D’après la taille des parents",
    currentResult: "D’après la taille actuelle pour l’âge",
    range: "Fourchette probable : {low} – {high}",
    currentUnavailable: "Saisissez la taille de l’enfant (de 5 à 17 ans) pour obtenir une seconde estimation.",
    howTitle: "Comment fonctionne la prédiction",
    how: [
      "Taille des parents (méthode de la taille cible parentale) : additionnez la taille de la mère et celle du père, ajoutez 13 cm pour un garçon ou retirez 13 cm pour une fille, puis divisez par 2. C’est la taille cible qu’utilisent les pédiatres ; la plupart des enfants (environ 95 %) arrivent à moins de 8,5 cm (3,3 in) environ de cette valeur.",
      "Taille actuelle pour l’âge : la taille de l’enfant est comparée à la moyenne nationale pour son âge et son sexe (données NCD-RisC), en supposant qu’il conserve la même position relative jusqu’à l’âge adulte. La méthode fonctionne mieux avant la puberté ; une puberté précoce ou tardive peut modifier le résultat.",
      "Lorsque les deux estimations concordent, la prédiction est plus fiable. Un écart important entre elles est fréquent pendant les poussées de croissance et n’est pas, à lui seul, un motif d’inquiétude.",
    ],
    faq: [
      {
        q: "Une prédiction de taille est-elle précise ?",
        a: "La méthode de la taille cible parentale situe la plupart des enfants à environ ±8,5 cm de la cible. Aucun calculateur ne peut tenir compte de l’âge de la puberté, de l’alimentation ou des problèmes de santé : considérez les résultats comme une indication.",
      },
      {
        q: "Puis-je prédire ma taille si je suis adolescent ?",
        a: "Oui. Indiquez votre âge et votre taille actuelle. Après environ 15 ans chez les filles et 17 ans chez les garçons, la plupart des gens grandissent de moins de 1 cm par an : votre taille actuelle est donc déjà proche de votre taille adulte.",
      },
      {
        q: "Le père ou la mère : qui influence le plus la taille ?",
        a: "Les deux parents y contribuent à peu près autant, c’est pourquoi la formule fait la moyenne de leurs tailles, puis ajuste selon l’écart habituel entre hommes et femmes.",
      },
    ],
  },
  growth: {
    metaTitle: "Taille moyenne par âge – Courbe de croissance (5–19 ans)",
    metaDescription:
      "Taille moyenne par âge de 5 à 19 ans pour les garçons et les filles dans 200 pays, avec courbe de croissance et comparaison rapide de la taille de votre enfant.",
    h1: "Taille moyenne par âge : courbe de croissance des garçons et des filles",
    intro: "Consultez la taille moyenne à chaque âge, de 5 à 19 ans, dans n’importe quel pays, et comparez-y la taille d’un enfant.",
    tableTitle: "Taille moyenne par âge — {country}",
    above: "{diff} au-dessus de la moyenne à {age} ans",
    below: "{diff} en dessous de la moyenne à {age} ans",
    atAverage: "Pile dans la moyenne à {age} ans",
    chartBoys: "Garçons",
    chartGirls: "Filles",
    childPoint: "Votre enfant",
    contentTitle: "Comment grandissent les enfants",
    content: [
      "De 5 ans jusqu’à la puberté, les enfants grandissent d’environ 5–6 cm (2 in) par an. Dans 200 pays, l’année de croissance la plus rapide se situe généralement entre 10 et 11 ans chez les filles, et entre 12 et 13 ans chez les garçons.",
      "À 14 ans, les filles ont atteint en moyenne 98 % de leur taille adulte, et les garçons environ 94 %. Les garçons atteignent environ 98 % à 16 ans. Après 17 ans, la croissance moyenne passe sous 1 cm (0,4 in) par an.",
      "Ce sont des moyennes nationales, qui lissent les poussées de croissance individuelles. Un enfant en bonne santé peut se situer bien au-dessus ou bien en dessous de la courbe moyenne ; l’essentiel est une croissance régulière dans le temps.",
    ],
    faq: [
      {
        q: "Quelle est la taille moyenne à 12 ans ?",
        a: "Cela dépend du pays : environ 155 cm (5′1″) aux États-Unis pour les garçons comme pour les filles, environ 151 cm (un peu moins de 5 ft) au Japon et environ 142–144 cm (4′8″–4′9″) en Inde. Choisissez un pays ci-dessus pour voir les chiffres exacts.",
      },
      {
        q: "À quel âge les filles et les garçons arrêtent-ils de grandir ?",
        a: "La plupart des filles sont proches de leur taille adulte vers 15–16 ans, et la plupart des garçons vers 17–18 ans. Ensuite, la croissance moyenne est inférieure à 1 cm par an.",
      },
      {
        q: "La taille de mon enfant est-elle normale ?",
        a: "Les enfants varient beaucoup autour de la moyenne : une mesure au-dessus ou en dessous est donc généralement normale. Consultez un médecin si la croissance ralentit brusquement ou si un enfant s’éloigne nettement de sa position habituelle au fil du temps.",
      },
    ],
  },
  bmi: {
    metaTitle: "Calcul IMC et poids santé selon votre taille",
    metaDescription:
      "Calcul IMC : obtenez votre indice de masse corporelle en unités métriques ou impériales et la fourchette de poids santé pour votre taille, selon les catégories de l’OMS.",
    h1: "Calcul de l’IMC et poids santé selon votre taille",
    intro: "Saisissez votre taille et votre poids pour obtenir votre indice de masse corporelle (IMC) et la fourchette de poids santé pour votre taille.",
    weight: "Poids",
    yourBmi: "Votre IMC",
    categories: {
      underweight: "Insuffisance pondérale",
      normal: "Corpulence normale",
      overweight: "Surpoids",
      obese: "Obésité",
    },
    healthyRange: "Poids santé pour {height} : {low} – {high}",
    chartTitle: "Poids santé selon la taille",
    colHeight: "Taille",
    colRange: "Poids santé (IMC 18,5–24,9)",
    note: "Pour les adultes de 18 ans et plus. L’IMC ne fait pas la différence entre muscle et graisse ; les enfants et les adolescents ont besoin de courbes d’IMC adaptées à leur âge.",
    contentTitle: "Ce que l’IMC vous indique",
    content: [
      "L’IMC correspond au poids en kilogrammes divisé par le carré de la taille en mètres. L’Organisation mondiale de la santé classe l’IMC des adultes ainsi : insuffisance pondérale en dessous de 18,5, corpulence normale de 18,5 à 24,9, surpoids de 25 à 29,9 et obésité à partir de 30.",
      "Comme il ne repose que sur la taille et le poids, l’IMC est un indicateur de dépistage rapide et non un diagnostic. Les personnes très musclées peuvent avoir un IMC élevé sans excès de graisse, et certaines recommandations de santé utilisent des seuils plus bas pour les personnes d’origine asiatique.",
    ],
    faq: [
      { q: "Qu’est-ce qu’un IMC normal ?", a: "Chez l’adulte, la fourchette normale selon l’OMS va de 18,5 à 24,9." },
      { q: "Comment calcule-t-on l’IMC ?", a: "Divisez le poids en kilogrammes par le carré de la taille en mètres. Par exemple, 70 kg pour 1,75 m : 70 ÷ 3,06 = 22,9." },
      {
        q: "Quel est le poids santé pour 170 cm ?",
        a: "Pour 170 cm (5′7″), un IMC de 18,5–24,9 correspond à environ 53,5–72,0 kg (118–159 lb).",
      },
    ],
  },
  person: {
    metaTitle: "{name} : taille – combien mesure {name} ? ({cm} / {ftin})",
    metaDescription:
      "{name} mesure {cm} ({ftin}). Comparez sa taille à celle d’un homme et d’une femme de taille moyenne, et découvrez qui a à peu près la même taille.",
    h1: "Combien mesure {name} ?",
    answer: "{name} mesure {cm} ({ftin}).",
    boardTitle: "{name} à côté d’un homme et d’une femme de taille moyenne",
    statsTitle: "Qu’est-ce que cela représente ?",
    tallerThan: "Dépasse {pct} {group} dans le monde",
    groupMen: "des hommes",
    groupWomen: "des femmes",
    diffTaller: "{diff} de plus que {who}",
    diffShorter: "{diff} de moins que {who}",
    whoMan: "l’homme moyen",
    whoWoman: "la femme moyenne",
    similarTitle: "À peu près la même taille",
    compareCta: "Comparez-vous à {name}",
    sourceNote: "Taille la plus souvent citée pour {name} ; les chiffres peuvent légèrement varier selon les sources.",
    faqFeet: "Combien mesure {name} en pieds ?",
    faqFeetA: "{name} mesure {ftin}, soit {cm}.",
    faqTall: "Est-ce que {name} est de grande taille ?",
    faqTallAbove: "Oui. Avec {cm}, {name} dépasse {pct} {group} dans le monde.",
    faqTallAverage: "{name} a une taille proche de la moyenne : avec {cm}, {name} dépasse {pct} {group} dans le monde.",
    faqTallBelow: "{name} a une taille inférieure à la moyenne : avec {cm}, {name} ne dépasse que {pct} {group} dans le monde.",
    faqVs: "{name} ou {other} : qui est le plus grand des deux ?",
    faqVsTaller: "{name} ({cm}) dépasse {other} ({otherCm}) de {diff}.",
    faqVsShorter: "{other} ({otherCm}) dépasse {name} ({cm}) de {diff}.",
    faqVsSame: "Même taille pour les deux : {cm}.",
  },
  people: {
    metaTitle: "Taille des célébrités – Combien mesurent stars et personnages ?",
    metaDescription:
      "La taille de sportifs, d’acteurs, de musiciens et de personnages d’anime en cm et en pieds, chacun comparé visuellement à un homme et à une femme de taille moyenne.",
    h1: "Taille des célébrités, des sportifs et des personnages",
    intro: "Choisissez un nom pour voir sa taille sur un graphique à l’échelle et la comparer à la vôtre.",
  },
  guides: {
    metaTitle: "Guides sur la taille – Mesure, croissance et écarts de taille",
    metaDescription:
      "Des guides pratiques pour mesurer sa taille chez soi, savoir à quel âge on arrête de grandir et visualiser concrètement les différences de taille.",
    h1: "Guides sur la taille",
    intro: "Des guides courts et pratiques, chiffres à l’appui.",
    read: "Lire le guide",
    minutes: "Lecture : {n} min",
  },
};

export default messages;
