import type { Messages } from "./en";

const messages: Messages = {
  meta: {
    title: "Confronto altezza – Confronta le altezze su un grafico",
    description:
      "Confronto altezza gratuito: metti a confronto persone, celebrità, personaggi anime e oggetti su un grafico in scala, in cm o ft/in. Condividi o scarica.",
    ogAlt: "Grafico di confronto altezza con diverse persone affiancate",
  },
  nav: {
    tool: "Confronto altezza",
    tools: "Strumenti",
    language: "Lingua",
    skip: "Vai al contenuto",
  },
  board: {
    title: "Tavola di confronto altezze",
    add: "Aggiungi",
    addMan: "Uomo",
    addWoman: "Donna",
    addObject: "Oggetto",
    addImage: "Immagine",
    library: "Libreria",
    searchPlaceholder: "Cerca persone, personaggi, oggetti…",
    noResults: "Nessun risultato. Aggiungi una persona personalizzata.",
    categories: {
      generic: "Persone",
      athlete: "Atleti",
      celebrity: "Celebrità",
      character: "Personaggi",
      record: "Record",
      object: "Oggetti",
      animal: "Animali",
    },
    defaultMan: "Uomo",
    defaultWoman: "Donna",
    defaultObject: "Oggetto",
    defaultImage: "Immagine",
    name: "Nome",
    height: "Altezza",
    feet: "ft",
    inches: "in",
    unitMetric: "cm",
    unitImperial: "ft/in",
    type: "Tipo",
    kinds: { male: "Uomo", female: "Donna", object: "Oggetto", image: "Immagine" },
    build: "Corporatura",
    builds: { slim: "Esile", average: "Media", broad: "Robusta" },
    shape: "Forma",
    shapes: { block: "Blocco", door: "Porta", tree: "Albero", building: "Edificio", tower: "Torre" },
    adultProportions: "Proporzioni adulte",
    color: "Colore",
    remove: "Rimuovi",
    duplicate: "Duplica",
    moveLeft: "Sposta a sinistra",
    moveRight: "Sposta a destra",
    share: "Condividi",
    linkCopied: "Link copiato",
    download: "Scarica PNG",
    reset: "Ripristina",
    clearAll: "Svuota tutto",
    subjects: "Soggetti",
    empty: "Aggiungi una persona, un oggetto o un’immagine per iniziare il confronto.",
    tallerBy: "{a} supera {b} di {diff} ({pct})",
    sameHeight: "{a} e {b} hanno la stessa altezza",
    imageNote: "Le immagini caricate restano sul tuo dispositivo e non vengono incluse nei link di condivisione.",
    edit: "Modifica",
    done: "Fatto",
    fitAll: "Mostra tutti",
    focus: "Zoom",
    resize: "Trascina per cambiare l’altezza",
    loading3d: "Caricamento 3D…",
    orbitHint: "Trascina per ruotare · scorri o pizzica per lo zoom",
  },
  home: {
    h1: "Confronto altezza: confrontare altezze in un grafico",
    tagline:
      "Metti a confronto l’altezza di persone, celebrità, personaggi e oggetti uno accanto all’altro su un unico grafico in scala, in centimetri o in piedi e pollici.",
    howTitle: "Come confrontare le altezze",
    how: [
      {
        title: "Aggiungi i soggetti",
        body: "Aggiungi un uomo, una donna, un oggetto o una tua immagine, oppure scegli dalla libreria di celebrità, atleti e personaggi anime.",
      },
      {
        title: "Imposta le altezze esatte",
        body: "Inserisci le altezze in cm o in ft/in. Le figure sono disegnate in scala, con proporzioni del corpo adatte all’età.",
      },
      {
        title: "Condividi o scarica",
        body: "Copia un link che ricrea il tuo grafico o scarica un PNG per chat, post sui social e tavole di riferimento.",
      },
    ],
    featuresTitle: "Perché usare questo grafico per il confronto altezza",
    features: [
      {
        title: "Disegno in scala reale",
        body: "Tutte le figure condividono un’unica scala verticale con una griglia in unità metriche e imperiali, così la differenza di altezza è esatta.",
      },
      {
        title: "Proporzioni realistiche",
        body: "I bambini hanno la testa più grande e le gambe più corte; gli adulti seguono il canone delle 7,5 teste. Scegli tra corporatura esile, media o robusta.",
      },
      {
        title: "Persone, personaggi e oggetti",
        body: "Confrontati con atleti, attori, eroi degli anime, porte, auto, alberi e monumenti alti quanto il Burj Khalifa.",
      },
      {
        title: "Gratis, veloce, senza registrazione",
        body: "Funziona tutto nel tuo browser. I link di condivisione contengono il grafico stesso, quindi non viene caricato nulla.",
      },
    ],
    useCasesTitle: "Come lo usano di più",
    useCases: [
      { title: "Differenza di altezza in coppia", body: "Guarda come vi mettete a confronto tu e il tuo partner e quanto si nota la differenza nelle foto." },
      { title: "Altezza delle celebrità", body: "Mettiti accanto a LeBron James, Taylor Swift o Tom Cruise e scopri la differenza reale." },
      { title: "Riferimento per personaggi", body: "Artisti e scrittori possono allineare i personaggi per mantenere le proporzioni coerenti tra una scena e l’altra." },
      { title: "Crescita dei bambini", body: "Segui come si confronta un bambino con fratelli, genitori o l’altezza media per la sua età." },
    ],
    faqTitle: "Domande frequenti",
    faq: [
      {
        q: "Quanto è preciso il confronto altezza?",
        a: "Le figure sono disegnate su un’unica scala lineare, quindi la differenza visiva corrisponde esattamente ai numeri inseriti. Le altezze della libreria sono valori comunemente riportati e possono differire leggermente da altre fonti.",
      },
      {
        q: "Posso passare dai centimetri ai piedi?",
        a: "Sì. Usa il selettore cm / ft-in sopra il grafico. Puoi inserire le altezze in entrambe le unità, che compaiono sempre sia nelle etichette sia nella griglia.",
      },
      {
        q: "Come confronto la mia altezza con quella di una celebrità?",
        a: "Aggiungi una persona con la tua altezza, poi apri la libreria, cerca la celebrità e toccala per aggiungerla accanto a te.",
      },
      {
        q: "Posso salvare o condividere il mio grafico?",
        a: "Tocca Condividi per copiare un link che ricrea lo stesso grafico per chiunque lo apra, oppure Scarica PNG per salvare un’immagine.",
      },
      {
        q: "Perché le figure basse sembrano bambini?",
        a: "Le proporzioni del corpo cambiano con l’età, quindi le altezze sotto la media adulta ricevono proporzioni da bambino. Spunta “Proporzioni adulte” per gli adulti di bassa statura.",
      },
      {
        q: "Posso confrontare oggetti ed edifici?",
        a: "Sì. Aggiungi porte, auto, alberi o monumenti, oppure crea un oggetto personalizzato con altezza e larghezza a piacere, fino a chilometri di altezza.",
      },
    ],
    ctaTitle: "Inizia a confrontare altezze",
    ctaBody: "Il tuo grafico è in cima alla pagina e si aggiorna mentre scrivi.",
    ctaButton: "Vai al grafico",
  },
  footer: {
    about: "Uno strumento gratuito per il confronto visivo delle altezze di persone, personaggi e oggetti.",
    rights: "Tutti i diritti riservati.",
  },
};

export default messages;
