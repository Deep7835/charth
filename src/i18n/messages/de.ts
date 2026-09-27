import type { Messages } from "./en";

const messages: Messages = {
  meta: {
    title: "Größenvergleich – Körpergröße vergleichen im Diagramm",
    description:
      "Kostenloser Größenvergleich: Menschen, Promis, Anime-Figuren und Objekte maßstabsgetreu nebeneinander vergleichen – in cm oder ft/in. Als Link oder PNG teilen.",
    ogAlt: "Größenvergleich-Diagramm mit mehreren Personen nebeneinander",
  },
  nav: {
    tool: "Größenvergleich",
    tools: "Tools",
    language: "Sprache",
    skip: "Zum Inhalt springen",
  },
  board: {
    title: "Größenvergleich-Tafel",
    add: "Hinzufügen",
    addMan: "Mann",
    addWoman: "Frau",
    addObject: "Objekt",
    addImage: "Bild",
    library: "Bibliothek",
    searchPlaceholder: "Personen, Figuren, Objekte suchen…",
    noResults: "Keine Treffer. Füge stattdessen eine eigene Person hinzu.",
    categories: {
      generic: "Personen",
      athlete: "Sportler",
      celebrity: "Promis",
      character: "Figuren",
      record: "Rekorde",
      object: "Objekte",
      animal: "Tiere",
    },
    defaultMan: "Mann",
    defaultWoman: "Frau",
    defaultObject: "Objekt",
    defaultImage: "Bild",
    name: "Name",
    height: "Größe",
    feet: "ft",
    inches: "in",
    unitMetric: "cm",
    unitImperial: "ft/in",
    type: "Typ",
    kinds: { male: "Mann", female: "Frau", object: "Objekt", image: "Bild" },
    build: "Statur",
    builds: { slim: "Schlank", average: "Normal", broad: "Kräftig" },
    shape: "Form",
    shapes: { block: "Block", door: "Tür", tree: "Baum", building: "Gebäude", tower: "Turm" },
    adultProportions: "Erwachsenen-Proportionen",
    color: "Farbe",
    remove: "Entfernen",
    duplicate: "Duplizieren",
    moveLeft: "Nach links",
    moveRight: "Nach rechts",
    share: "Teilen",
    linkCopied: "Link kopiert",
    download: "PNG herunterladen",
    reset: "Zurücksetzen",
    clearAll: "Alle entfernen",
    subjects: "Vergleich",
    empty: "Füge eine Person, ein Objekt oder ein Bild hinzu, um mit dem Vergleich zu beginnen.",
    tallerBy: "{a} ist {diff} ({pct}) größer als {b}",
    sameHeight: "{a} und {b} sind gleich groß",
    imageNote: "Hochgeladene Bilder bleiben auf deinem Gerät und werden nicht in geteilte Links übernommen.",
    edit: "Bearbeiten",
    done: "Fertig",
    fitAll: "Alles zeigen",
    focus: "Fokus",
    resize: "Ziehen, um die Größe zu ändern",
    loading3d: "3D wird geladen …",
    orbitHint: "Ziehen zum Drehen · Scrollen oder Zwei-Finger-Geste zum Zoomen",
  },
  home: {
    h1: "Größenvergleich: Körpergröße vergleichen",
    tagline:
      "Vergleiche die Körpergröße von Menschen, Promis, Figuren und Objekten nebeneinander in einem maßstabsgetreuen Diagramm – in Zentimetern oder Fuß und Zoll.",
    howTitle: "So vergleichst du Körpergrößen",
    how: [
      {
        title: "Personen hinzufügen",
        body: "Füge einen Mann, eine Frau, ein Objekt oder ein eigenes Bild hinzu – oder wähle aus der Bibliothek mit Promis, Sportlern und Anime-Figuren.",
      },
      {
        title: "Genaue Größen eingeben",
        body: "Gib die Größe in cm oder ft/in ein. Die Figuren werden maßstabsgetreu und mit altersgerechten Körperproportionen gezeichnet.",
      },
      {
        title: "Teilen oder herunterladen",
        body: "Kopiere einen Link, der dein Diagramm exakt wiederherstellt, oder lade ein PNG für Chats, Social-Media-Posts und Referenzblätter herunter.",
      },
    ],
    featuresTitle: "Warum dieser Größenvergleich?",
    features: [
      {
        title: "Maßstabsgetreue Darstellung",
        body: "Alle Figuren teilen sich eine vertikale Skala mit Raster in metrischen und imperialen Einheiten – so stimmt jeder Größenunterschied exakt.",
      },
      {
        title: "Realistische Proportionen",
        body: "Kinder haben größere Köpfe und kürzere Beine, Erwachsene folgen dem 7,5-Kopf-Kanon. Wähle zwischen schlanker, normaler und kräftiger Statur.",
      },
      {
        title: "Menschen, Figuren und Objekte",
        body: "Vergleiche dich mit Sportlern, Schauspielern, Anime-Helden, Türen, Autos, Bäumen und Wahrzeichen bis zur Höhe des Burj Khalifa.",
      },
      {
        title: "Kostenlos, schnell, ohne Anmeldung",
        body: "Alles läuft direkt in deinem Browser. Geteilte Links enthalten das Diagramm selbst, es wird also nichts hochgeladen.",
      },
    ],
    useCasesTitle: "Beliebte Anwendungen",
    useCases: [
      { title: "Größenunterschied im Paar", body: "Sieh, wie du und dein Partner nebeneinander wirken und wie groß der Unterschied auf Fotos aussieht." },
      { title: "Promi-Größen checken", body: "Stell dich neben LeBron James, Taylor Swift oder Tom Cruise und sieh den echten Größenunterschied." },
      { title: "Größenreferenz für Figuren", body: "Zeichner und Autoren stellen ihre Figuren nebeneinander, damit die Proportionen in jeder Szene stimmen." },
      { title: "Wachstum von Kindern", body: "Verfolge, wie ein Kind im Vergleich zu Geschwistern, Eltern oder der Durchschnittsgröße seines Alters wächst." },
    ],
    faqTitle: "Häufig gestellte Fragen",
    faq: [
      {
        q: "Wie genau ist der Größenvergleich?",
        a: "Alle Figuren werden auf einer einzigen linearen Skala gezeichnet, daher entspricht der sichtbare Unterschied exakt deinen eingegebenen Werten. Die Größen in der Bibliothek sind häufig genannte Angaben und können leicht von anderen Quellen abweichen.",
      },
      {
        q: "Kann ich zwischen Zentimetern und Fuß wechseln?",
        a: "Ja. Nutze den Umschalter cm / ft/in über dem Diagramm. Du kannst Größen in beiden Einheiten eingeben, und Beschriftungen sowie Raster zeigen immer beide an.",
      },
      {
        q: "Wie vergleiche ich meine Größe mit einem Promi?",
        a: "Füge eine Person mit deiner Körpergröße hinzu, öffne dann die Bibliothek, suche nach dem Promi und tippe darauf, um ihn neben dich zu stellen.",
      },
      {
        q: "Kann ich mein Diagramm speichern oder teilen?",
        a: "Tippe auf „Teilen“, um einen Link zu kopieren, der dasselbe Diagramm für alle öffnet, oder auf „PNG herunterladen“, um es als Bild zu speichern.",
      },
      {
        q: "Warum sehen kleine Figuren wie Kinder aus?",
        a: "Körperproportionen verändern sich mit dem Alter, deshalb bekommen Größen unterhalb des Erwachsenenbereichs kindliche Proportionen. Aktiviere „Erwachsenen-Proportionen“ für kleine Erwachsene.",
      },
      {
        q: "Kann ich auch Objekte und Gebäude vergleichen?",
        a: "Ja. Füge Türen, Autos, Bäume oder Wahrzeichen hinzu oder erstelle ein eigenes Objekt mit beliebiger Höhe und Breite – bis zu mehreren Kilometern hoch.",
      },
    ],
    ctaTitle: "Jetzt Körpergrößen vergleichen",
    ctaBody: "Dein Diagramm findest du oben auf der Seite. Es aktualisiert sich, während du tippst.",
    ctaButton: "Zum Diagramm",
  },
  footer: {
    about: "Ein kostenloses Tool für den visuellen Größenvergleich von Menschen, Figuren und Objekten.",
    rights: "Alle Rechte vorbehalten.",
  },
};

export default messages;
