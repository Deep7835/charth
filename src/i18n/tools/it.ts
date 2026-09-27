import type { ToolsMessages } from "./en";

const messages: ToolsMessages = {
  common: {
    tools: "Strumenti",
    home: "Home",
    hubMetaTitle: "Strumenti per l’altezza – Convertitore e calcolatori",
    hubMetaDescription:
      "Strumenti gratuiti sull’altezza: converti cm in piedi e pollici, calcola la differenza di altezza, scopri il tuo percentile e l’altezza media per paese.",
    hubH1: "Strumenti per l’altezza",
    hubIntro: "Calcolatori rapidi e dati di riferimento da usare insieme al grafico di confronto altezza.",
    relatedTitle: "Altri strumenti per l’altezza",
    boardCta: "Confronta sul grafico delle altezze",
    boardCtaBody: "Metti persone, personaggi e oggetti uno accanto all’altro su un’unica scala visiva.",
    openInBoard: "Apri nel grafico",
    faqTitle: "Domande frequenti",
    men: "Uomini",
    women: "Donne",
    man: "Uomo",
    woman: "Donna",
    sex: "Sesso",
    country: "Paese",
    height: "Altezza",
    source: "Fonte",
    sourceNcd:
      "NCD Risk Factor Collaboration (NCD-RisC), Lancet 2020 — altezza media a 19 anni, stime più recenti. Licenza CC BY 4.0.",
  },
  names: {
    "height-converter": {
      name: "Convertitore di altezza",
      blurb: "Converti cm in piedi e pollici e viceversa, con una tabella di conversione completa.",
    },
    "height-difference-calculator": {
      name: "Calcolo differenza di altezza",
      blurb: "Trova la differenza esatta tra due altezze e scopri dove arriva una persona rispetto all’altra.",
    },
    "average-height-by-country": {
      name: "Altezza media per paese",
      blurb: "Altezza media di uomini e donne in 200 paesi, in classifica e con ricerca.",
    },
    "height-percentile-calculator": {
      name: "Percentile altezza",
      blurb: "Scopri quale percentuale di uomini o donne superi in altezza, nel tuo paese e nel mondo.",
    },
    "hug-simulator": {
      name: "Simulatore di abbraccio",
      blurb: "Guarda un abbraccio frontale o da dietro in scala per due altezze qualsiasi e dove si incontrano le teste.",
    },
    "3d-height-comparison": {
      name: "Confronto altezza 3D",
      blurb: "Confronta persone, animali e oggetti come modelli 3D da ruotare e ingrandire.",
    },
  },
  converter: {
    metaTitle: "Convertire cm in piedi – Altezza in piedi e pollici",
    metaDescription:
      "Converti l’altezza da cm a piedi e pollici o da ft/in a cm all’istante. Con tabella di conversione da 4′6″ a 7′0″ e da 140 a 215 cm, facile da consultare.",
    h1: "Convertire cm in piedi: altezza in piedi e pollici",
    intro: "Scrivi un’altezza in una qualsiasi casella e le altre si aggiornano subito. I risultati sono arrotondati al pollice o agli 0,1 cm più vicini.",
    centimeters: "Centimetri",
    meters: "Metri",
    feetInches: "Piedi + pollici",
    totalInches: "Pollici totali",
    result: "{cm} corrispondono a {ftin}",
    tableCmTitle: "Tabella da centimetri a piedi e pollici",
    tableFtTitle: "Tabella da piedi e pollici a centimetri",
    colCm: "cm",
    colFtIn: "ft / in",
    colInches: "pollici",
    howTitle: "Come convertire l’altezza",
    how: [
      "Un pollice equivale esattamente a 2,54 cm e un piede a 12 pollici (30,48 cm).",
      "Da cm a piedi e pollici: dividi i centimetri per 2,54 per ottenere i pollici totali, poi dividi per 12. La parte intera sono i piedi, il resto sono i pollici. Esempio: 175 cm ÷ 2,54 = 68,9 in → 5 ft 8,9 in ≈ 5′9″.",
      "Da piedi e pollici a cm: moltiplica i piedi per 12, aggiungi i pollici e moltiplica per 2,54. Esempio: 5′10″ = 70 in × 2,54 = 177,8 cm.",
    ],
    faq: [
      { q: "Quanto è 170 cm in piedi?", a: "170 cm sono circa 5 piedi e 7 pollici (5′6,9″)." },
      { q: "Quanto sono 6 piedi in cm?", a: "6 piedi sono esattamente 182,88 cm, di solito arrotondati a 183 cm." },
      { q: "Quanto è 5′5″ in cm?", a: "5 piedi e 5 pollici corrispondono a 165,1 cm." },
      {
        q: "Perché a volte le conversioni di altezza differiscono di un centimetro?",
        a: "Le altezze in piedi di solito sono arrotondate al pollice più vicino e un pollice vale 2,54 cm, quindi un valore arrotondato può spostarsi fino a circa 1,3 cm.",
      },
    ],
  },
  difference: {
    metaTitle: "Calcolo differenza di altezza – Confronta due altezze",
    metaDescription:
      "Calcola la differenza di altezza tra due persone in cm e piedi/pollici, la differenza percentuale e dove arriva la persona più bassa rispetto a quella più alta.",
    h1: "Calcolo differenza di altezza",
    intro: "Inserisci due altezze per ottenere la differenza esatta in cm e ft/in, la differenza percentuale e un’anteprima in scala.",
    personA: "Persona A",
    personB: "Persona B",
    name: "Nome",
    difference: "Differenza",
    percentTaller: "{a} supera {b} in altezza: +{pct}",
    sameHeight: "Hanno la stessa altezza",
    reachTitle: "Dove arriva la testa di {b} su {a}",
    reach: {
      eyes: "All’altezza degli occhi",
      nose: "Naso o bocca",
      chin: "Mento",
      shoulders: "Spalle",
      chest: "Petto",
      waist: "Vita",
      below: "Sotto la vita",
    },
    reachNote: "Basato sulle proporzioni medie di un adulto; postura, scarpe e capelli cambiano il risultato reale.",
    categoryTitle: "Quanto è grande la differenza?",
    categories: {
      tiny: "Quasi impercettibile (meno di 3 cm / 1 in)",
      small: "Piccola (3–7 cm / 1–3 in)",
      medium: "Evidente (8–14 cm / 3–5,5 in)",
      large: "Grande (15–24 cm / 6–9,5 in)",
      huge: "Molto grande (25 cm / 10 in o più)",
    },
    contentTitle: "Capire la differenza di altezza",
    content: [
      "La differenza di altezza sembra più o meno grande di quanto dica il numero. Con 10 cm (4 in) di differenza, gli occhi della persona più bassa arrivano più o meno alla bocca di quella più alta, e in foto si nota parecchio.",
      "La differenza percentuale è utile quando si confrontano taglie diverse: 20 cm tra adulti di 165 e 185 cm sono circa il 12%, mentre gli stessi 20 cm tra bambini di 100 e 120 cm sono il 20%.",
      "Nelle coppie una differenza di circa 12 cm (5 in) è tipica, perché è più o meno quanto gli uomini sono in media più alti delle donne nel mondo.",
    ],
    faq: [
      {
        q: "Come si calcola una differenza di altezza?",
        a: "Sottrai l’altezza minore da quella maggiore. Per la percentuale, dividi la differenza per l’altezza minore e moltiplica per 100.",
      },
      {
        q: "15 cm di differenza di altezza sono tanti?",
        a: "15 cm (circa 6 in) sono una differenza ben visibile: la testa della persona più bassa di solito arriva più o meno al naso di quella più alta.",
      },
      {
        q: "Qual è la differenza di altezza media tra uomini e donne?",
        a: "Nel mondo gli uomini di 19 anni sono alti in media 170,8 cm e le donne 158,6 cm: una differenza di circa 12 cm (4,8 in).",
      },
    ],
  },
  countries: {
    metaTitle: "Altezza media per paese 2026 – Uomini e donne (200 paesi)",
    metaDescription:
      "Altezza media di uomini e donne in 200 paesi, in cm e piedi, in classifica, con la variazione dal 1985. Include l’altezza media in Italia. Dati NCD-RisC.",
    h1: "Altezza media per paese",
    intro:
      "Altezza media di uomini e donne di 19 anni in 200 paesi, l’età in cui la maggior parte delle persone raggiunge l’altezza adulta. Cerca l’altezza media in Italia o in qualsiasi altro paese.",
    search: "Cerca un paese…",
    sortBy: "Ordina per",
    rank: "#",
    change: "Dal 1985",
    compare: "Confronta",
    world: "Mondo",
    tallestMen: "Uomini più alti",
    tallestWomen: "Donne più alte",
    shortestMen: "Uomini più bassi",
    shortestWomen: "Donne più basse",
    worldAverage: "Media mondiale",
    contentTitle: "Cosa mostrano i dati",
    content: [
      "I Paesi Bassi hanno i giovani adulti più alti del mondo: gli uomini misurano in media 183,8 cm (6′0″) e le donne 170,4 cm (5′7″). Le medie più basse si registrano a Timor Est per gli uomini (160,1 cm) e in Guatemala per le donne (150,9 cm).",
      "Nel mondo gli uomini sono alti in media 170,8 cm (5′7″) e le donne 158,6 cm (5′2″). Tra i paesi più alti e quelli più bassi ci sono più di 20 cm di differenza.",
      "L’altezza dipende dalla genetica, ma le differenze tra paesi riflettono soprattutto l’alimentazione, la salute e le condizioni di vita durante l’infanzia. Per questo in molti paesi l’altezza media è cresciuta di diversi centimetri dal 1985.",
    ],
    methodTitle: "Informazioni sui dati",
    method:
      "I valori sono stime NCD-RisC dell’altezza media a 19 anni per l’ultimo anno disponibile, ricavate da studi di misurazione su base di popolazione (non da altezze dichiarate). I valori sono arrotondati a 0,1 cm.",
    faq: [
      { q: "Qual è il paese con le persone più alte?", a: "I Paesi Bassi, con una media di 183,8 cm per gli uomini e 170,4 cm per le donne." },
      { q: "Qual è il paese con le persone più basse?", a: "Timor Est ha la media più bassa per gli uomini (160,1 cm) e il Guatemala per le donne (150,9 cm)." },
      { q: "Qual è l’altezza media nel mondo?", a: "Circa 170,8 cm (5′7″) per gli uomini e 158,6 cm (5′2″) per le donne." },
      {
        q: "Perché proprio a 19 anni?",
        a: "A 19 anni la maggior parte delle persone ha raggiunto l’altezza adulta, e usare un’unica età rende i paesi direttamente confrontabili tra generazioni.",
      },
    ],
  },
  percentile: {
    metaTitle: "Percentile altezza – Quanto sei alto davvero?",
    metaDescription:
      "Calcola il tuo percentile altezza: scopri quale percentuale di uomini o donne superi in altezza nel tuo paese e nel mondo, in base alle altezze medie NCD-RisC.",
    h1: "Calcolatore del percentile altezza",
    intro: "Inserisci altezza e sesso per scoprire come ti collochi rispetto agli adulti del tuo paese e del mondo.",
    yourHeight: "La tua altezza",
    result: "{country}: {pct} {group} ha una statura inferiore alla tua.",
    groupMen: "degli uomini",
    groupWomen: "delle donne",
    oneIn: "Circa 1 persona su {n} è più alta di te.",
    zScore: "{sd} deviazioni standard dalla media ({avg})",
    otherCountries: "Il tuo percentile in altri paesi",
    percentile: "Percentile",
    average: "Media",
    note:
      "Stima: si assume che le altezze seguano una distribuzione normale intorno alla media NCD-RisC di ogni paese, con una dispersione tipica di 7,1 cm per gli uomini e 6,6 cm per le donne. Le distribuzioni reali variano leggermente da paese a paese.",
    contentTitle: "Cosa significa il percentile di altezza",
    content: [
      "Il percentile indica la quota di persone più basse di te. Al 50° percentile sei esattamente nella media; al 90° percentile superi in altezza 9 persone su 10 dello stesso sesso.",
      "Poiché le medie variano da paese a paese, la stessa altezza può essere alta in un posto e nella media in un altro. 175 cm sono sopra la media per gli uomini in India o in Giappone, ma sotto la media nei Paesi Bassi.",
    ],
    faq: [
      {
        q: "180 cm sono tanti per un uomo?",
        a: "Sì, nella maggior parte dei paesi. Nel mondo 180 cm (5′11″) superano circa il 90% degli uomini, anche se nei Paesi Bassi, dove la media maschile è di 183,8 cm, sono sotto la media.",
      },
      {
        q: "170 cm sono tanti per una donna?",
        a: "Sì. 170 cm (5′7″) superano circa il 96% delle donne nel mondo e corrispondono più o meno alla media femminile nei Paesi Bassi.",
      },
      {
        q: "Quanto è preciso questo calcolatore?",
        a: "Le medie derivano da dati nazionali misurati, ma la dispersione è modellata con una deviazione standard tipica, quindi considera i risultati una buona stima e non una posizione esatta.",
      },
    ],
  },
};

export default messages;
