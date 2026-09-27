import type { SiteMessages } from "./en";

// Typography:   = no-break space (before ":" and inside « »),   = narrow no-break space (before ? ! ;).
const messages: SiteMessages = {
  menu: "Menu",
  close: "Fermer",
  search: "Rechercher",
  searchPlaceholder: "Rechercher des outils, des personnes, des animaux…",
  searchEmpty: "Aucun résultat",
  searchPages: "Pages et outils",
  searchLibrary: "Comparer sur le graphique",
  backToTop: "Retour en haut",
  notFoundTitle: "Page introuvable",
  notFoundBody: "La page que vous recherchez n’existe pas ou a été déplacée.",
  notFoundCta: "Accéder à l’outil de comparaison de tailles",
  lastUpdated: "Dernière mise à jour : {date}",
  cookieText:
    "Nous utilisons des cookies pour des statistiques anonymes afin d’améliorer le site. Vous pouvez accepter ou refuser les cookies non essentiels à tout moment.",
  cookieAccept: "Accepter",
  cookieDecline: "Refuser",
  cookieSettings: "Paramètres des cookies",
  privacy: "Politique de confidentialité",
  terms: "Conditions d’utilisation",
  contact: "Contact",
  footerProduct: "Produit",
  footerResources: "Ressources",
  footerCompany: "Société",
  footerLegal: "Mentions légales",
  footerHowItWorks: "Comment ça marche",
  footerFaq: "FAQ",
  footerAllTools: "Tous les outils",
  footerTagline: "Les tailles sont enregistrées en centimètres et dessinées sur une même échelle.",
  confirmResetTitle: "Réinitialiser le graphique ?",
  confirmResetBody:
    "Cette action supprime tous les éléments et rétablit le graphique par défaut. Votre graphique actuel ne pourra pas être récupéré.",
  confirmReset: "Réinitialiser",
  cancel: "Annuler",
  copy: "Copier",
  copied: "Copié",
  copyFailed: "Impossible de copier. Sélectionnez le texte et copiez-le manuellement.",
  invalidHeight: "Saisissez une taille supérieure à 0.",
};

export default messages;
