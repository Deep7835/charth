import type { Messages } from "./en";

const messages: Messages = {
  meta: {
    title: "Comparateur de taille – Comparer la taille en un graphique",
    description:
      "Comparateur de taille gratuit : comparez personnes, célébrités, personnages d’anime et objets côte à côte, en cm ou en pieds et pouces. Partage en un clic.",
    ogAlt: "Graphique de comparaison de taille avec plusieurs personnes côte à côte",
  },
  nav: {
    tool: "Comparateur de taille",
    tools: "Outils",
    language: "Langue",
    skip: "Aller au contenu",
  },
  board: {
    title: "Tableau de comparaison de taille",
    add: "Ajouter",
    addMan: "Homme",
    addWoman: "Femme",
    addObject: "Objet",
    addImage: "Image",
    library: "Bibliothèque",
    searchPlaceholder: "Rechercher des personnes, personnages, objets…",
    noResults: "Aucun résultat. Ajoutez plutôt une personne personnalisée.",
    categories: {
      generic: "Personnes",
      athlete: "Sportifs",
      celebrity: "Célébrités",
      character: "Personnages",
      record: "Records",
      object: "Objets",
      animal: "Animaux",
    },
    defaultMan: "Homme",
    defaultWoman: "Femme",
    defaultObject: "Objet",
    defaultImage: "Image",
    name: "Nom",
    height: "Taille",
    feet: "ft",
    inches: "in",
    unitMetric: "cm",
    unitImperial: "ft/in",
    type: "Type",
    kinds: { male: "Homme", female: "Femme", object: "Objet", image: "Image" },
    build: "Morphologie",
    builds: { slim: "Mince", average: "Moyenne", broad: "Carrée" },
    shape: "Forme",
    shapes: { block: "Bloc", door: "Porte", tree: "Arbre", building: "Immeuble", tower: "Tour" },
    adultProportions: "Proportions d’adulte",
    color: "Couleur",
    remove: "Supprimer",
    duplicate: "Dupliquer",
    moveLeft: "Déplacer à gauche",
    moveRight: "Déplacer à droite",
    share: "Partager",
    linkCopied: "Lien copié",
    download: "Télécharger le PNG",
    reset: "Réinitialiser",
    clearAll: "Tout effacer",
    subjects: "Éléments",
    empty: "Ajoutez une personne, un objet ou une image pour commencer la comparaison.",
    tallerBy: "{a} mesure {diff} ({pct}) de plus que {b}",
    sameHeight: "{a} et {b} ont la même taille",
    imageNote: "Les images importées restent sur votre appareil et ne sont pas incluses dans les liens de partage.",
    edit: "Modifier",
    done: "Terminé",
    fitAll: "Tout afficher",
    focus: "Zoomer",
    resize: "Faites glisser pour changer la taille",
    loading3d: "Chargement de la 3D…",
    orbitHint: "Faites glisser pour pivoter · molette ou pincement pour zoomer",
  },
  home: {
    h1: "Comparateur de taille",
    tagline:
      "Comparez la taille de personnes, de célébrités, de personnages et d’objets côte à côte sur un seul graphique précis, en centimètres ou en pieds et pouces.",
    howTitle: "Comment comparer la taille",
    how: [
      {
        title: "Ajoutez des éléments",
        body: "Ajoutez un homme, une femme, un objet ou votre propre image, ou choisissez dans la bibliothèque de célébrités, de sportifs et de personnages d’anime.",
      },
      {
        title: "Indiquez la taille exacte",
        body: "Saisissez la taille en cm ou en ft/in. Les silhouettes sont dessinées à l’échelle, avec des proportions adaptées à l’âge.",
      },
      {
        title: "Partagez ou téléchargez",
        body: "Copiez un lien qui recrée votre graphique, ou téléchargez un PNG pour vos messages, vos réseaux sociaux et vos planches de référence.",
      },
    ],
    featuresTitle: "Pourquoi utiliser ce graphique de comparaison de taille",
    features: [
      {
        title: "Un dessin fidèle à l’échelle",
        body: "Toutes les silhouettes partagent la même échelle verticale, avec une grille en unités métriques et impériales : les écarts sont exacts.",
      },
      {
        title: "Des proportions réalistes",
        body: "Les enfants sont dessinés avec une tête plus grosse et des jambes plus courtes ; les adultes suivent un canon de 7,5 têtes. Choisissez une morphologie mince, moyenne ou carrée.",
      },
      {
        title: "Personnes, personnages et objets",
        body: "Comparez-vous à des sportifs, des acteurs, des héros d’anime, des portes, des voitures, des arbres et des monuments aussi hauts que le Burj Khalifa.",
      },
      {
        title: "Gratuit, rapide, sans inscription",
        body: "Tout fonctionne dans votre navigateur. Les liens de partage contiennent le graphique lui-même : rien n’est envoyé en ligne.",
      },
    ],
    useCasesTitle: "Les usages les plus courants",
    useCases: [
      { title: "Différence de taille dans le couple", body: "Voyez comment vous et votre partenaire vous situez l’un par rapport à l’autre, et ce que donne l’écart en photo." },
      { title: "Taille des célébrités", body: "Placez-vous à côté de Kylian Mbappé, Taylor Swift ou Tom Cruise et découvrez la vraie différence." },
      { title: "Référence de taille pour personnages", body: "Illustrateurs et auteurs peuvent aligner leurs personnages pour garder une échelle cohérente d’une scène à l’autre." },
      { title: "Croissance des enfants", body: "Suivez comment un enfant se situe par rapport à ses frères et sœurs, à ses parents ou à la taille moyenne pour son âge." },
    ],
    faqTitle: "Questions fréquentes",
    faq: [
      {
        q: "La comparaison de taille est-elle précise ?",
        a: "Les silhouettes sont dessinées sur une seule échelle linéaire : l’écart visuel correspond exactement aux valeurs saisies. Les tailles de la bibliothèque sont des valeurs couramment citées et peuvent légèrement différer d’autres sources.",
      },
      {
        q: "Puis-je passer des centimètres aux pieds ?",
        a: "Oui. Utilisez le sélecteur cm / ft-in au-dessus du graphique. Vous pouvez saisir la taille dans l’une ou l’autre unité, et les deux sont toujours affichées sur les étiquettes et la grille.",
      },
      {
        q: "Comment comparer ma taille avec celle d’une célébrité ?",
        a: "Ajoutez une personne à votre taille, ouvrez la bibliothèque, recherchez la célébrité et touchez son nom pour la placer à côté de vous.",
      },
      {
        q: "Puis-je enregistrer ou partager mon graphique ?",
        a: "Touchez Partager pour copier un lien qui reconstitue le même graphique pour toute personne qui l’ouvre, ou Télécharger le PNG pour enregistrer une image.",
      },
      {
        q: "Pourquoi les petites silhouettes ressemblent-elles à des enfants ?",
        a: "Les proportions du corps évoluent avec l’âge : en dessous d’une taille adulte, la silhouette prend des proportions d’enfant. Cochez « Proportions d’adulte » pour les adultes de petite taille.",
      },
      {
        q: "Puis-je comparer des objets et des bâtiments ?",
        a: "Oui. Ajoutez des portes, des voitures, des arbres ou des monuments, ou créez un objet personnalisé de n’importe quelle hauteur et largeur, jusqu’à plusieurs kilomètres de haut.",
      },
    ],
    ctaTitle: "Commencez à comparer les tailles",
    ctaBody: "Votre graphique se trouve en haut de la page. Il se met à jour pendant la saisie.",
    ctaButton: "Aller au graphique",
  },
  footer: {
    about: "Un comparateur de taille visuel et gratuit pour les personnes, les personnages et les objets.",
    rights: "Tous droits réservés.",
  },
};

export default messages;
