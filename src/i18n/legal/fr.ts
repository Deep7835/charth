import type { LegalMessages } from "./en";

// Typography:   = no-break space (before ":" and inside « »),   = narrow no-break space (before ? ! ;).
const messages: LegalMessages = {
  privacy: {
    metaTitle: "Politique de confidentialité",
    metaDescription:
      "Comment {site} traite vos données : aucun compte, les graphiques restent dans votre navigateur, et des statistiques d’utilisation anonymes avec Google Analytics.",
    h1: "Politique de confidentialité",
    intro:
      "{site} est un outil gratuit de comparaison de tailles. Nous collectons le moins de données possible. Cette politique explique ce qui est traité lorsque vous utilisez le site et quels choix s’offrent à vous.",
    sections: [
      {
        h: "Données que vous saisissez",
        p: [
          "Les noms et les tailles que vous saisissez dans les outils sont traités dans votre navigateur. Nous ne les stockons pas sur nos serveurs.",
          "Lorsque vous utilisez la fonction Partager, le graphique est encodé dans le lien lui-même. Toute personne disposant du lien peut voir ce graphique ; évitez donc d’inclure des informations privées dans les noms.",
          "Les images que vous importez sont lues localement par votre navigateur et ne sont jamais envoyées ni incluses dans les liens de partage.",
        ],
      },
      {
        h: "Cookies et stockage local",
        p: [
          "Nous enregistrons quelques préférences techniques dans le stockage local de votre navigateur. Ces éléments sont nécessaires pour que le site fonctionne comme vous vous y attendez.",
          "Nous utilisons Google Analytics pour mesurer l’utilisation de manière anonyme, par exemple les pages consultées, le pays et le type d’appareil. Google Analytics dépose des cookies à cette fin. Vous pouvez bloquer ou supprimer les cookies dans les paramètres de votre navigateur, ou installer le module complémentaire de navigateur de Google permettant de désactiver la mesure (tools.google.com/dlpage/gaoptout).",
          "Nous utilisons Google AdSense pour afficher des annonces. Des fournisseurs tiers, dont Google, utilisent des cookies pour diffuser des annonces en fonction de vos visites antérieures sur ce site et sur d’autres sites web. L’utilisation de cookies publicitaires par Google lui permet, ainsi qu’à ses partenaires, de diffuser des annonces en fonction de ces visites. Vous pouvez désactiver la publicité personnalisée dans les Paramètres des annonces de Google (adssettings.google.com) ou consulter www.aboutads.info pour désactiver les cookies de certains fournisseurs tiers.",
        ],
      },
      {
        h: "Journaux du serveur",
        p: [
          "Notre hébergeur traite automatiquement des données techniques, telles que l’adresse IP, le type de navigateur et les pages demandées, afin de fournir le site et de le protéger contre les abus. Ces journaux sont conservés pendant une durée limitée et ne sont pas utilisés pour vous identifier.",
        ],
      },
      {
        h: "Vos droits",
        p: [
          "Selon votre lieu de résidence (par exemple en vertu du RGPD dans l’UE ou du CCPA en Californie), vous pouvez disposer d’un droit d’accès, de rectification ou d’effacement des données personnelles, ainsi que d’un droit d’opposition au traitement. Comme nous ne conservons ni comptes ni données de graphiques, la plupart des demandes peuvent être traitées en effaçant le stockage de votre navigateur. Pour toute autre demande, contactez-nous à {email}.",
        ],
      },
      {
        h: "Enfants",
        p: ["Le site convient à un public général et ne collecte pas sciemment de données personnelles auprès d’enfants."],
      },
      {
        h: "Modifications",
        p: ["Nous pouvons mettre à jour cette politique. La date indiquée en haut de la page correspond à la version la plus récente."],
      },
    ],
  },
  terms: {
    metaTitle: "Conditions d’utilisation",
    metaDescription:
      "Les conditions d’utilisation de {site}, un outil visuel et gratuit de comparaison de tailles, y compris les règles d’utilisation acceptable et les avertissements.",
    h1: "Conditions d’utilisation",
    intro:
      "En utilisant {site}, vous acceptez les présentes conditions. Si vous ne les acceptez pas, veuillez ne pas utiliser le site.",
    sections: [
      {
        h: "Utilisation des outils",
        p: [
          "Les outils sont gratuits pour un usage personnel, éducatif et commercial. Vous pouvez partager et publier les graphiques que vous créez, y compris les images téléchargées.",
          "N’utilisez pas le site de manière abusive, par exemple en tentant d’en perturber le fonctionnement, en l’aspirant (scraping) dans des volumes qui affectent les autres utilisateurs, ou en l’utilisant pour créer des contenus illicites ou de harcèlement.",
        ],
      },
      {
        h: "Exactitude",
        p: [
          "Les tailles des personnalités publiques, des personnages, des animaux et des objets sont des valeurs couramment rapportées et peuvent différer d’autres sources. Les statistiques proviennent des jeux de données de recherche cités. Les proportions corporelles des dessins et des modèles 3D sont approximatives.",
          "Le site est proposé à titre informatif et de divertissement. Il ne constitue pas un avis médical ; consultez un professionnel pour toute question relative à la croissance ou à la santé.",
        ],
      },
      {
        h: "Propriété intellectuelle",
        p: [
          "Le design, le code et les illustrations du site appartiennent à {site}. Les noms de personnes, de personnages et de lieux emblématiques appartiennent à leurs propriétaires respectifs et ne sont utilisés qu’à des fins d’identification.",
          "Les données de taille moyenne sont © NCD Risk Factor Collaboration et sont utilisées sous licence CC BY 4.0.",
        ],
      },
      {
        h: "Responsabilité",
        p: [
          "Le site est fourni « en l’état », sans garantie. Dans les limites autorisées par la loi, nous ne sommes pas responsables des pertes résultant de son utilisation.",
        ],
      },
      {
        h: "Contact",
        p: ["Questions concernant ces conditions : {email}."],
      },
    ],
  },
};

export default messages;
