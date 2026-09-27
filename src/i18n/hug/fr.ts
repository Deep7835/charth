import type { HugMessages } from "./en";

const messages: HugMessages = {
  metaTitle: "Simulateur de câlin : la différence de taille en couple",
  metaDescription:
    "Simulateur de câlin gratuit : entrez deux tailles pour voir à l’échelle un câlin de face ou de dos, où arrive la tête et la différence de taille du couple.",
  h1: "Simulateur de câlin",
  intro:
    "Entrez deux tailles pour voir à quoi ressemble un câlin de face ou de dos avec votre différence de taille exacte.",
  personA: "Personne A",
  personB: "Personne B",
  name: "Prénom",
  hugType: "Câlin",
  front: "De face",
  back: "De dos",
  behind: "Qui fait le câlin par derrière ?",
  download: "Télécharger en PNG",
  share: "Partager",
  linkCopied: "Lien copié",
  headLands: "Jusqu’où arrive la tête de {b} sur {a} ?",
  parts: {
    eyes: "yeux",
    nose: "nez ou bouche",
    chin: "menton",
    shoulders: "épaules",
    chest: "poitrine",
    waist: "taille",
    below: "hanches",
  },
  eyeGap: "Écart au niveau des yeux",
  tilt: "Inclinaison de la tête pour se regarder dans les yeux",
  tiltNote: "en levant les yeux à 30 cm de distance",
  armsTitle: "Position naturelle des bras",
  arms: {
    even: "Tailles proches : un bras par-dessus l’épaule, l’autre en dessous",
    tallOver: "{tall} : bras par-dessus les épaules · {short} : bras autour de la taille",
    backShoulders: "{hugger} entoure les épaules de {other} de ses deux bras",
    backWaist: "{hugger} entoure la taille de {other} de ses deux bras",
  },
  chinRest: "{hugger} peut poser son menton sur l’épaule de {other}",
  note: "Dessin de profil selon des proportions moyennes d’adulte. La posture, les chaussures et la coiffure modifient le résultat réel.",
  contentTitle: "Comment la différence de taille change un câlin",
  content: [
    "Lors d’un câlin de face, la personne la plus grande passe généralement les bras par-dessus les épaules de la plus petite, qui l’enlace à la taille. Avec un écart d’environ 15 cm (6 in), la tête de la plus petite arrive vers le nez de la plus grande ; à 25 cm (10 in), elle atteint le menton, et à partir d’environ 40 cm (16 in), elle se pose sur la poitrine.",
    "Le câlin par derrière est le plus facile quand la personne derrière a à peu près la même taille ou mesure jusqu’à environ 20 cm (8 in) de plus : dans cette fourchette, elle peut poser son menton sur l’épaule de son ou sa partenaire. Quand la personne derrière est nettement plus petite, les bras se placent naturellement autour de la taille.",
    "Le contact visuel compte aussi. Un écart de 10 cm (4 in) au niveau des yeux oblige à lever la tête d’environ 18° de près : c’est pourquoi une grande différence de taille rend les moments face à face si particuliers.",
  ],
  faq: [
    {
      q: "Quelle est la différence de taille idéale pour un câlin ?",
      a: "Il n’existe pas d’idéal unique, mais beaucoup trouvent 10–20 cm (4–8 in) agréable : la tête de la personne la plus petite se glisse sous le menton de la plus grande sans que personne ait besoin de trop se pencher.",
    },
    {
      q: "Où arrive ma tête quand je fais un câlin à quelqu’un de plus grand ?",
      a: "Entrez les deux tailles ci-dessus. Le simulateur utilise des proportions corporelles moyennes pour montrer si votre tête arrive à ses yeux, à son menton, à ses épaules ou à sa poitrine.",
    },
    {
      q: "Puis-je partager ou enregistrer mon câlin ?",
      a: "Oui. Utilisez « Partager » pour copier un lien qui recrée votre câlin, ou « Télécharger en PNG » pour enregistrer l’image.",
    },
  ],
};

export default messages;
