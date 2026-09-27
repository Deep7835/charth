import type { MoreMessages } from "./en";

const messages: MoreMessages = {
  names: {
    "height-predictor": {
      name: "Previsione altezza",
      blurb: "Quanto sarò alto? Stima l’altezza da adulto in base all’altezza dei genitori o all’altezza attuale di un bambino.",
    },
    "growth-chart": {
      name: "Altezza media per età",
      blurb: "Curve di crescita per maschi e femmine dai 5 ai 19 anni in 200 paesi, con verifica dell’altezza del bambino.",
    },
    "bmi-calculator": {
      name: "BMI e peso normale",
      blurb: "Calcola il BMI e scopri l’intervallo di peso normale per la tua altezza.",
    },
  },
  common: {
    boy: "Maschio",
    girl: "Femmina",
    age: "Età",
    years: "{n} anni",
    father: "Altezza del padre",
    mother: "Altezza della madre",
    childHeight: "Altezza attuale del bambino",
    optional: "facoltativo",
    estimateNote: "Solo stime: genetica, alimentazione, salute e tempi della pubertà influiscono tutti sulla crescita reale.",
  },
  predictor: {
    metaTitle: "Quanto sarò alto? Calcolo dell’altezza da adulto",
    metaDescription:
      "Quanto sarò alto? Stima l’altezza da adulto in base all’altezza dei genitori (target genetico) e all’altezza attuale del bambino per l’età, con dati di 200 paesi.",
    h1: "Previsione dell’altezza: quanto sarò alto?",
    intro:
      "Stima l’altezza da adulto in due modi: dall’altezza di entrambi i genitori e dall’altezza attuale di un bambino confrontata con la crescita media nel suo paese.",
    parentsResult: "In base all’altezza dei genitori",
    currentResult: "In base all’altezza attuale per l’età",
    range: "Intervallo probabile: {low} – {high}",
    currentUnavailable: "Inserisci l’altezza del bambino (5–17 anni) per ottenere una seconda stima.",
    howTitle: "Come funziona la previsione",
    how: [
      "Altezza dei genitori (metodo del target genetico): somma l’altezza della madre e quella del padre, aggiungi 13 cm per un maschio o sottrai 13 cm per una femmina, poi dividi per 2. È l’altezza bersaglio usata dai pediatri; la maggior parte dei bambini (circa il 95%) arriva entro circa 8,5 cm (3,3 in) da questo valore.",
      "Altezza attuale per l’età: l’altezza del bambino viene confrontata con la media nazionale per età e sesso (dati NCD-RisC), supponendo che mantenga la stessa posizione relativa fino all’età adulta. Funziona meglio prima della pubertà; una pubertà precoce o tardiva può spostare il risultato.",
      "Quando le due stime concordano, la previsione è più affidabile. Una grande differenza tra le due è comune durante gli scatti di crescita e di per sé non è motivo di preoccupazione.",
    ],
    faq: [
      {
        q: "Quanto è precisa una previsione dell’altezza?",
        a: "Il metodo del target genetico colloca la maggior parte dei bambini entro circa ±8,5 cm dal bersaglio. Nessun calcolatore può tenere conto dei tempi della pubertà, dell’alimentazione o di eventuali condizioni mediche, quindi considera i risultati come un’indicazione.",
      },
      {
        q: "Posso prevedere la mia altezza se sono adolescente?",
        a: "Sì. Inserisci la tua età e la tua altezza attuale. Dopo i 15 anni circa per le ragazze e i 17 per i ragazzi, la maggior parte delle persone cresce meno di 1 cm all’anno, quindi la tua altezza attuale è già vicina a quella da adulto.",
      },
      {
        q: "Conta di più l’altezza del padre o quella della madre?",
        a: "Entrambi i genitori contribuiscono in misura più o meno uguale: per questo la formula fa la media delle loro altezze e poi corregge per la differenza tipica tra uomini e donne.",
      },
    ],
  },
  growth: {
    metaTitle: "Altezza media per età – Curve di crescita (5–19 anni)",
    metaDescription:
      "Altezza media per età dai 5 ai 19 anni per maschi e femmine in 200 paesi, con curve di crescita e un rapido confronto tra l’altezza di tuo figlio e la media.",
    h1: "Altezza media per età: curve di crescita per maschi e femmine",
    intro: "Scopri l’altezza media a ogni età, dai 5 ai 19 anni, in qualsiasi paese e confrontala con l’altezza di un bambino.",
    tableTitle: "Altezza media per età — {country}",
    above: "{diff} sopra la media a {age} anni",
    below: "{diff} sotto la media a {age} anni",
    atAverage: "Esattamente nella media a {age} anni",
    chartBoys: "Maschi",
    chartGirls: "Femmine",
    childPoint: "Tuo figlio",
    contentTitle: "Come crescono i bambini",
    content: [
      "Dai 5 anni fino alla pubertà, i bambini crescono di circa 5–6 cm (2 in) all’anno. Nei 200 paesi, l’anno di crescita più rapida cade in genere tra i 10 e gli 11 anni per le femmine e tra i 12 e i 13 per i maschi.",
      "A 14 anni le ragazze hanno raggiunto in media il 98% della loro altezza da adulte e i ragazzi circa il 94%. I ragazzi arrivano a circa il 98% a 16 anni. Dopo i 17, la crescita media scende sotto 1 cm (0,4 in) all’anno.",
      "Si tratta di medie nazionali, che attenuano gli scatti di crescita individuali. Un bambino sano può trovarsi ben al di sopra o al di sotto della linea della media; ciò che conta di più è una crescita regolare nel tempo.",
    ],
    faq: [
      {
        q: "Qual è l’altezza media a 12 anni?",
        a: "Dipende dal paese: negli Stati Uniti circa 155 cm (5′1″) sia per i maschi sia per le femmine, in Giappone circa 151 cm (poco meno di 5 ft) e in India circa 142–144 cm (4′8″–4′9″). Scegli un paese qui sopra per vedere i valori esatti.",
      },
      {
        q: "A che età smettono di crescere le ragazze e i ragazzi?",
        a: "La maggior parte delle ragazze è vicina all’altezza da adulta a 15–16 anni e la maggior parte dei ragazzi a 17–18. Dopo, la crescita media è inferiore a 1 cm all’anno.",
      },
      {
        q: "L’altezza di mio figlio è normale?",
        a: "I bambini variano molto intorno alla media, quindi una singola misurazione sopra o sotto la media di solito è normale. Rivolgiti a un medico se la crescita rallenta all’improvviso o se, nel tempo, il bambino si allontana molto dalla sua posizione abituale.",
      },
    ],
  },
  bmi: {
    metaTitle: "Calcolo BMI e peso normale per la tua altezza",
    metaDescription:
      "Calcolo BMI: trova il tuo indice di massa corporea in unità metriche o imperiali e l’intervallo di peso normale per la tua altezza, secondo le categorie dell’OMS.",
    h1: "Calcolo del BMI e peso normale per la tua altezza",
    intro: "Inserisci altezza e peso per ottenere il tuo indice di massa corporea (BMI) e l’intervallo di peso normale per la tua altezza.",
    weight: "Peso",
    yourBmi: "Il tuo BMI",
    categories: {
      underweight: "Sottopeso",
      normal: "Normopeso",
      overweight: "Sovrappeso",
      obese: "Obesità",
    },
    healthyRange: "Peso normale per {height}: {low} – {high}",
    chartTitle: "Intervallo di peso normale per altezza",
    colHeight: "Altezza",
    colRange: "Peso normale (BMI 18,5–24,9)",
    note: "Per adulti dai 18 anni in su. Il BMI non distingue i muscoli dal grasso; bambini e adolescenti hanno bisogno di tabelle del BMI specifiche per l’età.",
    contentTitle: "Cosa ti dice il BMI",
    content: [
      "Il BMI è il peso in chilogrammi diviso per il quadrato dell’altezza in metri. L’Organizzazione Mondiale della Sanità classifica il BMI degli adulti come sottopeso sotto 18,5, normopeso da 18,5 a 24,9, sovrappeso da 25 a 29,9 e obesità da 30 in su.",
      "Poiché usa solo altezza e peso, il BMI è un valore di screening rapido e non una diagnosi. Le persone molto muscolose possono avere un BMI alto senza eccesso di grasso, e alcune linee guida sanitarie usano soglie più basse per le persone di origine asiatica.",
    ],
    faq: [
      { q: "Qual è un BMI normale?", a: "Per gli adulti, l’intervallo normale secondo l’OMS va da 18,5 a 24,9." },
      { q: "Come si calcola il BMI?", a: "Dividi il peso in chilogrammi per il quadrato dell’altezza in metri. Ad esempio, 70 kg per 1,75 m: 70 ÷ 3,06 = 22,9." },
      {
        q: "Qual è il peso normale per 170 cm?",
        a: "Per 170 cm (5′7″), un BMI di 18,5–24,9 corrisponde a circa 53,5–72,0 kg (118–159 lb).",
      },
    ],
  },
  person: {
    metaTitle: "Altezza di {name}: quanto misura {name}? ({cm} / {ftin})",
    metaDescription:
      "{name} misura {cm} ({ftin}). Confronta l’altezza di {name} con quella dell’uomo e della donna medi e scopri chi ha più o meno la stessa statura.",
    h1: "Altezza di {name}",
    answer: "{name} misura {cm} ({ftin}).",
    boardTitle: "{name} accanto all’uomo e alla donna medi",
    statsTitle: "Cosa significa questa altezza?",
    tallerThan: "{pct} {group} nel mondo ha una statura inferiore",
    groupMen: "degli uomini",
    groupWomen: "delle donne",
    diffTaller: "{diff} in più rispetto {who}",
    diffShorter: "{diff} in meno rispetto {who}",
    whoMan: "all’uomo medio",
    whoWoman: "alla donna media",
    similarTitle: "Più o meno la stessa altezza",
    compareCta: "Confrontati con {name}",
    sourceNote: "Altezza comunemente riportata per {name}; i dati possono variare leggermente da una fonte all’altra.",
    faqFeet: "Quanto misura {name} in piedi?",
    faqFeetA: "{name} misura {ftin}, cioè {cm}.",
    faqTall: "{name} è una persona alta?",
    faqTallAbove: "Sì. Con {cm}, {pct} {group} nel mondo ha una statura inferiore a quella di {name}.",
    faqTallAverage: "{name} ha un’altezza vicina alla media: con {cm}, {pct} {group} nel mondo ha una statura inferiore.",
    faqTallBelow: "{name} ha un’altezza inferiore alla media: con {cm}, solo {pct} {group} nel mondo ha una statura inferiore.",
    faqVs: "{name} supera {other} in altezza?",
    faqVsTaller: "Sì. {name} ({cm}) supera {other} ({otherCm}) di {diff}.",
    faqVsShorter: "No. {other} ({otherCm}) supera {name} ({cm}) di {diff}.",
    faqVsSame: "Hanno la stessa altezza: {cm}.",
  },
  people: {
    metaTitle: "Altezza dei famosi: quanto sono alti celebrità e personaggi?",
    metaDescription:
      "Altezza di atleti, attori, musicisti e personaggi anime in cm e in piedi, ognuno con un confronto visivo con l’uomo e la donna di altezza media.",
    h1: "Altezza di celebrità, atleti e personaggi",
    intro: "Scegli un nome per vederne l’altezza su un grafico in scala e confrontarla con la tua.",
  },
  guides: {
    metaTitle: "Guide sull’altezza – Misurazione, crescita e differenze",
    metaDescription:
      "Guide pratiche per misurare l’altezza a casa, capire quando si smette di crescere e vedere come appaiono davvero le differenze di altezza.",
    h1: "Guide sull’altezza",
    intro: "Guide brevi e pratiche, con i dati alla mano.",
    read: "Leggi la guida",
    minutes: "{n} min di lettura",
  },
};

export default messages;
