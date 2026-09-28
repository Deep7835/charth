import type { LegalMessages } from "./en";

const messages: LegalMessages = {
  privacy: {
    metaTitle: "Informativa sulla privacy",
    metaDescription:
      "Come {site} tratta i dati degli utenti: nessun account, i grafici restano nel browser e statistiche di utilizzo anonime con Google Analytics.",
    h1: "Informativa sulla privacy",
    intro:
      "{site} è uno strumento gratuito per il confronto delle altezze. Raccogliamo il minor numero possibile di dati. La presente informativa spiega quali dati vengono trattati durante l’utilizzo del sito e quali scelte sono a disposizione dell’utente.",
    sections: [
      {
        h: "Dati inseriti dall’utente",
        p: [
          "I nomi e le altezze digitati negli strumenti vengono elaborati nel browser dell’utente. Non li memorizziamo sui nostri server.",
          "Quando si utilizza la funzione Condividi, il grafico viene codificato all’interno del link stesso. Chiunque disponga del link può vedere il grafico, pertanto si consiglia di evitare di inserire informazioni private nei nomi.",
          "Le immagini caricate vengono lette localmente dal browser e non vengono mai trasmesse né incluse nei link di condivisione.",
        ],
      },
      {
        h: "Cookie e archiviazione locale",
        p: [
          "Memorizziamo alcune preferenze tecniche nell’archiviazione locale del browser. Questi dati sono necessari affinché il sito funzioni come ci si aspetta.",
          "Utilizziamo Google Analytics per misurare l’utilizzo in forma anonima, ad esempio le pagine visitate, il paese e il tipo di dispositivo. A tale scopo Google Analytics imposta dei cookie. È possibile bloccare o eliminare i cookie dalle impostazioni del browser oppure installare il componente aggiuntivo del browser per la disattivazione fornito da Google (tools.google.com/dlpage/gaoptout).",
          "Qualora in futuro venisse mostrata pubblicità, i cookie per annunci personalizzati saranno utilizzati solo previo consenso e la presente informativa verrà aggiornata prima.",
        ],
      },
      {
        h: "Log del server",
        p: [
          "Il nostro fornitore di hosting tratta automaticamente dati tecnici quali indirizzo IP, tipo di browser e pagine richieste per erogare il sito e proteggerlo da abusi. Questi log vengono conservati per un periodo limitato e non vengono utilizzati per identificare l’utente.",
        ],
      },
      {
        h: "Diritti dell’utente",
        p: [
          "A seconda del luogo di residenza (ad esempio ai sensi del GDPR nell’UE o del CCPA in California), si può avere il diritto di accedere ai dati personali, rettificarli o cancellarli e di opporsi al trattamento. Poiché non conserviamo account né dati dei grafici, la maggior parte delle richieste può essere gestita cancellando i dati memorizzati nel browser. Per qualsiasi altra richiesta, è possibile contattarci all’indirizzo {email}.",
        ],
      },
      {
        h: "Minori",
        p: ["Il sito è adatto a un pubblico generale e non raccoglie consapevolmente dati personali di minori."],
      },
      {
        h: "Modifiche",
        p: ["Potremmo aggiornare la presente informativa. La data riportata in cima alla pagina indica la versione più recente."],
      },
    ],
  },
  terms: {
    metaTitle: "Termini di servizio",
    metaDescription:
      "I termini di utilizzo di {site}, uno strumento visivo e gratuito per il confronto delle altezze, inclusi l’uso consentito e le esclusioni di responsabilità.",
    h1: "Termini di servizio",
    intro:
      "Utilizzando {site} si accettano i presenti termini. In caso di mancata accettazione, si prega di non utilizzare il sito.",
    sections: [
      {
        h: "Utilizzo degli strumenti",
        p: [
          "Gli strumenti sono gratuiti per uso personale, didattico e commerciale. È possibile condividere e pubblicare i grafici creati, comprese le immagini scaricate.",
          "Non è consentito utilizzare il sito in modo improprio, ad esempio tentando di comprometterne il funzionamento, effettuando scraping con volumi tali da incidere sugli altri utenti o utilizzandolo per creare contenuti illeciti o molesti.",
        ],
      },
      {
        h: "Accuratezza",
        p: [
          "Le altezze di personaggi pubblici, personaggi di fantasia, animali e oggetti sono valori comunemente riportati e possono differire da quelli di altre fonti. Le statistiche provengono dai dataset di ricerca citati. Le proporzioni del corpo nei disegni e nei modelli 3D sono approssimative.",
          "Il sito ha finalità informative e di intrattenimento. Non costituisce un parere medico; per domande sulla crescita o sulla salute è opportuno rivolgersi a un professionista.",
        ],
      },
      {
        h: "Proprietà intellettuale",
        p: [
          "Il design, il codice e le illustrazioni del sito appartengono a {site}. I nomi di persone, personaggi e luoghi celebri appartengono ai rispettivi proprietari e sono utilizzati solo a scopo identificativo.",
          "I dati sull’altezza media sono © NCD Risk Factor Collaboration e sono utilizzati ai sensi della licenza CC BY 4.0.",
        ],
      },
      {
        h: "Responsabilità",
        p: [
          "Il sito è fornito “così com’è”, senza garanzie. Nei limiti consentiti dalla legge, non siamo responsabili per perdite derivanti dal suo utilizzo.",
        ],
      },
      {
        h: "Contatti",
        p: ["Per domande sui presenti termini: {email}."],
      },
    ],
  },
};

export default messages;
