import type { Messages } from "./en";

const messages: Messages = {
  meta: {
    title: "Comparador de altura – Compara estaturas en un gráfico",
    description:
      "Comparador de altura gratis: compara la estatura de personas, famosos, personajes de anime y objetos lado a lado en cm o pies y pulgadas. Comparte o descarga.",
    ogAlt: "Gráfico de comparación de estatura con varias personas lado a lado",
  },
  nav: {
    tool: "Comparador de altura",
    tools: "Herramientas",
    language: "Idioma",
    skip: "Saltar al contenido",
  },
  board: {
    title: "Tablero de comparación de estatura",
    add: "Añadir",
    addMan: "Hombre",
    addWoman: "Mujer",
    addObject: "Objeto",
    addImage: "Imagen",
    library: "Biblioteca",
    searchPlaceholder: "Busca personas, personajes, objetos…",
    noResults: "Sin resultados. Añade una persona personalizada.",
    categories: {
      generic: "Personas",
      athlete: "Deportistas",
      celebrity: "Famosos",
      character: "Personajes",
      record: "Récords",
      object: "Objetos",
      animal: "Animales",
    },
    defaultMan: "Hombre",
    defaultWoman: "Mujer",
    defaultObject: "Objeto",
    defaultImage: "Imagen",
    name: "Nombre",
    height: "Altura",
    feet: "ft",
    inches: "in",
    unitMetric: "cm",
    unitImperial: "ft/in",
    type: "Tipo",
    kinds: { male: "Hombre", female: "Mujer", object: "Objeto", image: "Imagen" },
    build: "Complexión",
    builds: { slim: "Delgada", average: "Media", broad: "Robusta" },
    shape: "Forma",
    shapes: { block: "Bloque", door: "Puerta", tree: "Árbol", building: "Edificio", tower: "Torre" },
    adultProportions: "Proporciones de adulto",
    color: "Color",
    remove: "Quitar",
    duplicate: "Duplicar",
    moveLeft: "Mover a la izquierda",
    moveRight: "Mover a la derecha",
    share: "Compartir",
    linkCopied: "Enlace copiado",
    download: "Descargar PNG",
    reset: "Restablecer",
    clearAll: "Borrar todo",
    subjects: "Elementos",
    empty: "Añade una persona, un objeto o una imagen para empezar a comparar.",
    tallerBy: "{a} es {diff} ({pct}) más alto que {b}",
    sameHeight: "{a} y {b} miden lo mismo",
    imageNote: "Las imágenes que subes se quedan en tu dispositivo y no se incluyen en los enlaces compartidos.",
    edit: "Editar",
    done: "Listo",
    fitAll: "Ver todo",
    focus: "Enfocar",
    resize: "Arrastra para cambiar la altura",
    loading3d: "Cargando 3D…",
    orbitHint: "Arrastra para girar · desplaza o pellizca para hacer zoom",
  },
  home: {
    h1: "Comparador de altura",
    tagline:
      "Compara la altura de personas, famosos, personajes y objetos lado a lado en un solo gráfico preciso, en centímetros o en pies y pulgadas.",
    howTitle: "Cómo comparar alturas",
    how: [
      {
        title: "Añade elementos",
        body: "Añade un hombre, una mujer, un objeto o tu propia imagen, o elige entre la biblioteca de famosos, deportistas y personajes de anime.",
      },
      {
        title: "Indica la estatura exacta",
        body: "Escribe la altura en cm o en ft/in. Las figuras se dibujan a escala, con proporciones corporales acordes a la edad.",
      },
      {
        title: "Comparte o descarga",
        body: "Copia un enlace que reproduce tu gráfico o descarga un PNG para chats, redes sociales y hojas de referencia.",
      },
    ],
    featuresTitle: "Por qué usar este gráfico de comparación de estatura",
    features: [
      {
        title: "Dibujo a escala real",
        body: "Todas las figuras comparten una misma escala vertical con una cuadrícula en unidades métricas e imperiales, así que las diferencias son exactas.",
      },
      {
        title: "Proporciones realistas",
        body: "Los niños se dibujan con la cabeza más grande y las piernas más cortas; los adultos siguen un canon de 7,5 cabezas. Elige complexión delgada, media o robusta.",
      },
      {
        title: "Personas, personajes y objetos",
        body: "Compárate con deportistas, actores, héroes de anime, puertas, coches, árboles y monumentos tan altos como el Burj Khalifa.",
      },
      {
        title: "Gratis, rápido y sin registro",
        body: "Todo funciona en tu navegador. Los enlaces compartidos guardan el propio gráfico, así que no se sube nada.",
      },
    ],
    useCasesTitle: "Usos más populares",
    useCases: [
      { title: "Diferencia de altura en pareja", body: "Mira cómo quedan tú y tu pareja uno al lado del otro, y cuánto se nota la diferencia en las fotos." },
      { title: "Estatura de famosos", body: "Ponte junto a Lionel Messi, Selena Gomez o Tom Cruise y descubre la diferencia real." },
      { title: "Referencia de tamaño de personajes", body: "Artistas y escritores pueden alinear personajes para mantener la escala coherente entre escenas." },
      { title: "Crecimiento infantil", body: "Sigue cómo se compara un niño con sus hermanos, sus padres o la estatura media para su edad." },
    ],
    faqTitle: "Preguntas frecuentes",
    faq: [
      {
        q: "¿Qué tan precisa es la comparación de estatura?",
        a: "Las figuras se dibujan sobre una única escala lineal, así que la diferencia visual coincide exactamente con los números que introduces. Las alturas de la biblioteca son valores publicados habitualmente y pueden variar un poco según la fuente.",
      },
      {
        q: "¿Puedo cambiar entre centímetros y pies?",
        a: "Sí. Usa el selector cm / ft-in que está encima del gráfico. Puedes escribir la altura en cualquiera de las dos unidades y ambas se muestran siempre en las etiquetas y la cuadrícula.",
      },
      {
        q: "¿Cómo comparo mi altura con la de un famoso?",
        a: "Añade una persona con tu estatura, abre la biblioteca, busca al famoso y tócalo para colocarlo a tu lado.",
      },
      {
        q: "¿Puedo guardar o compartir mi gráfico?",
        a: "Toca Compartir para copiar un enlace que reconstruye el mismo gráfico para quien lo abra, o Descargar PNG para guardar una imagen.",
      },
      {
        q: "¿Por qué las figuras bajas parecen niños?",
        a: "Las proporciones del cuerpo cambian con la edad, así que las alturas por debajo del rango adulto reciben proporciones infantiles. Marca «Proporciones de adulto» para adultos de baja estatura.",
      },
      {
        q: "¿Puedo comparar objetos y edificios?",
        a: "Sí. Añade puertas, coches, árboles o monumentos, o crea un objeto personalizado con cualquier altura y anchura, hasta kilómetros de alto.",
      },
    ],
    ctaTitle: "Empieza a comparar alturas",
    ctaBody: "Tu gráfico está en la parte superior de la página y se actualiza mientras escribes.",
    ctaButton: "Ir al gráfico",
  },
  footer: {
    about: "Un comparador de altura visual y gratuito para personas, personajes y objetos.",
    rights: "Todos los derechos reservados.",
  },
};

export default messages;
