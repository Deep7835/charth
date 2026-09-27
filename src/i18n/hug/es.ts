import type { HugMessages } from "./en";

const messages: HugMessages = {
  metaTitle: "Simulador de abrazos: diferencia de altura en pareja",
  metaDescription:
    "Simulador de abrazos gratis: ingresa dos alturas y mira a escala un abrazo de frente o por la espalda, hasta dónde llega la cabeza y la inclinación al mirarse.",
  h1: "Simulador de abrazos",
  intro:
    "Ingresa dos alturas y mira cómo se ve un abrazo de frente o por la espalda con su diferencia de altura exacta.",
  personA: "Persona A",
  personB: "Persona B",
  name: "Nombre",
  hugType: "Abrazo",
  front: "De frente",
  back: "Por la espalda",
  behind: "¿Quién abraza por detrás?",
  download: "Descargar PNG",
  share: "Compartir",
  linkCopied: "Enlace copiado",
  headLands: "¿Hasta dónde le llega la cabeza de {b} a {a}?",
  parts: {
    eyes: "ojos",
    nose: "nariz o boca",
    chin: "barbilla",
    shoulders: "hombros",
    chest: "pecho",
    waist: "cintura",
    below: "caderas",
  },
  eyeGap: "Diferencia a la altura de los ojos",
  tilt: "Inclinación de la cabeza para mirarse a los ojos",
  tiltNote: "mirando hacia arriba a 30 cm de distancia",
  armsTitle: "Posición natural de los brazos",
  arms: {
    even: "Alturas similares: un brazo por encima del hombro y el otro por debajo",
    tallOver: "{tall}: brazos sobre los hombros · {short}: brazos alrededor de la cintura",
    backShoulders: "{hugger} rodea los hombros de {other} con ambos brazos",
    backWaist: "{hugger} rodea la cintura de {other} con ambos brazos",
  },
  chinRest: "{hugger} puede apoyar la barbilla en el hombro de {other}",
  note: "Dibujado de perfil con proporciones promedio de una persona adulta. La postura, el calzado y el peinado cambian el resultado real.",
  contentTitle: "Cómo cambia un abrazo según la diferencia de altura",
  content: [
    "En un abrazo de frente, la persona más alta suele rodear con los brazos los hombros de la más baja, mientras que esta la abraza por la cintura. Con una diferencia de unos 15 cm (6 in), la cabeza de la persona más baja queda a la altura de la nariz de la más alta; con 25 cm (10 in) llega a la barbilla y, a partir de unos 40 cm (16 in), descansa sobre el pecho.",
    "Los abrazos por la espalda son más cómodos cuando quien abraza desde atrás mide más o menos lo mismo o hasta unos 20 cm (8 in) más: en ese rango puede apoyar la barbilla en el hombro de su pareja. Si quien está detrás es claramente más bajo, los brazos van de forma natural a la cintura.",
    "El contacto visual también cuenta. Una diferencia de 10 cm (4 in) a la altura de los ojos obliga a inclinar la cabeza hacia arriba unos 18° de cerca; por eso, cuando la diferencia de altura es grande, los momentos cara a cara se sienten distintos.",
  ],
  faq: [
    {
      q: "¿Cuál es la diferencia de altura ideal para abrazarse?",
      a: "No existe una sola ideal, pero a muchas personas les resulta cómoda una diferencia de 10–20 cm (4–8 in): la cabeza de la persona más baja encaja bajo la barbilla de la más alta sin que ninguna tenga que agacharse mucho.",
    },
    {
      q: "¿Hasta dónde llega mi cabeza al abrazar a alguien más alto?",
      a: "Ingresa ambas alturas arriba. El simulador usa proporciones corporales promedio para mostrar si tu cabeza llega a sus ojos, su barbilla, sus hombros o su pecho.",
    },
    {
      q: "¿Puedo compartir o guardar mi abrazo?",
      a: "Sí. Usa Compartir para copiar un enlace que recrea tu abrazo, o Descargar PNG para guardar la imagen.",
    },
  ],
};

export default messages;
