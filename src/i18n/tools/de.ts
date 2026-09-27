import type { ToolsMessages } from "./en";

const messages: ToolsMessages = {
  common: {
    tools: "Tools",
    home: "Startseite",
    hubMetaTitle: "Kostenlose Größen-Tools – Umrechner, Rechner & Daten",
    hubMetaDescription:
      "Kostenlose Tools zur Körpergröße: cm in Fuß und Zoll umrechnen, Größenunterschied berechnen, Perzentil prüfen und Durchschnittsgrößen nach Ländern vergleichen.",
    hubH1: "Tools rund um die Körpergröße",
    hubIntro: "Schnelle Rechner und Referenzdaten, die perfekt zum Größenvergleich-Diagramm passen.",
    relatedTitle: "Weitere Größen-Tools",
    boardCta: "Im Größenvergleich ansehen",
    boardCtaBody: "Stell Menschen, Figuren und Objekte nebeneinander auf einer gemeinsamen Skala dar.",
    openInBoard: "Im Größenvergleich öffnen",
    faqTitle: "Häufige Fragen",
    men: "Männer",
    women: "Frauen",
    man: "Mann",
    woman: "Frau",
    sex: "Geschlecht",
    country: "Land",
    height: "Größe",
    source: "Quelle",
    sourceNcd:
      "NCD Risk Factor Collaboration (NCD-RisC), Lancet 2020 — durchschnittliche Körpergröße von 19-Jährigen, neueste Schätzungen. Lizenziert unter CC BY 4.0.",
  },
  names: {
    "height-converter": {
      name: "Körpergröße umrechnen",
      blurb: "cm in Fuß und Zoll umrechnen und zurück – mit kompletter Umrechnungstabelle.",
    },
    "height-difference-calculator": {
      name: "Größenunterschied-Rechner",
      blurb: "Berechne den genauen Unterschied zwischen zwei Größen und sieh, bis wohin eine Person bei der anderen reicht.",
    },
    "average-height-by-country": {
      name: "Durchschnittsgröße nach Ländern",
      blurb: "Durchschnittliche Körpergröße von Männern und Frauen in 200 Ländern – sortiert und durchsuchbar.",
    },
    "height-percentile-calculator": {
      name: "Körpergröße-Perzentil-Rechner",
      blurb: "Finde heraus, wie viel Prozent der Männer oder Frauen in deinem Land und weltweit kleiner sind als du.",
    },
    "hug-simulator": {
      name: "Umarmungs-Simulator",
      blurb: "Sieh eine maßstabsgetreue Umarmung von vorn oder hinten für zwei Körpergrößen – und wo die Köpfe landen.",
    },
    "3d-height-comparison": {
      name: "3D-Größenvergleich",
      blurb: "Vergleiche Menschen, Tiere und Objekte als 3D-Modelle, die du drehen und zoomen kannst.",
    },
  },
  converter: {
    metaTitle: "cm in Fuß umrechnen – Körpergröße in Fuß & Zoll umrechnen",
    metaDescription:
      "Rechne deine Körpergröße sofort von cm in Fuß und Zoll oder von ft/in in cm um. Mit Umrechnungstabelle von 4′6″ bis 7′0″ und von 140 bis 215 cm.",
    h1: "Körpergröße umrechnen: cm ↔ Fuß und Zoll",
    intro:
      "Gib eine Größe in ein beliebiges Feld ein – die anderen aktualisieren sich sofort. Ergebnisse werden auf den nächsten Zoll bzw. auf 0,1 cm gerundet.",
    centimeters: "Zentimeter",
    meters: "Meter",
    feetInches: "Fuß + Zoll",
    totalInches: "Zoll gesamt",
    result: "{cm} sind {ftin}",
    tableCmTitle: "Umrechnungstabelle: Zentimeter in Fuß und Zoll",
    tableFtTitle: "Umrechnungstabelle: Fuß und Zoll in Zentimeter",
    colCm: "cm",
    colFtIn: "ft / in",
    colInches: "Zoll",
    howTitle: "So rechnest du deine Körpergröße um",
    how: [
      "Ein Zoll (Inch) entspricht genau 2,54 cm, ein Fuß (Foot) hat 12 Zoll (30,48 cm).",
      "cm in Fuß und Zoll: Teile die Zentimeter durch 2,54, um die Gesamtzahl in Zoll zu erhalten, und teile diese dann durch 12. Die ganze Zahl sind die Fuß, der Rest die Zoll. Beispiel: 175 cm ÷ 2,54 = 68,9 in → 5 ft 8,9 in ≈ 5′9″.",
      "Fuß und Zoll in cm: Multipliziere die Fuß mit 12, addiere die Zoll und multipliziere das Ergebnis mit 2,54. Beispiel: 5′10″ = 70 in × 2,54 = 177,8 cm.",
    ],
    faq: [
      { q: "Wie viel Fuß sind 170 cm?", a: "170 cm sind etwa 5 Fuß 7 Zoll (5′6,9″)." },
      { q: "Wie viel cm sind 6 Fuß?", a: "6 Fuß sind genau 182,88 cm, meist gerundet auf 183 cm." },
      { q: "Wie viel cm sind 5′5″?", a: "5 Fuß 5 Zoll sind 165,1 cm." },
      {
        q: "Warum weichen Umrechnungen manchmal um einen Zentimeter ab?",
        a: "Größen in Fuß werden meist auf den nächsten Zoll gerundet. Da ein Zoll 2,54 cm entspricht, kann ein gerundeter Wert um bis zu etwa 1,3 cm abweichen.",
      },
    ],
  },
  difference: {
    metaTitle: "Größenunterschied berechnen – zwei Körpergrößen vergleichen",
    metaDescription:
      "Größenunterschied berechnen: Differenz zwischen zwei Personen in cm und Fuß/Zoll, Unterschied in Prozent und bis wohin die kleinere Person reicht.",
    h1: "Größenunterschied berechnen",
    intro:
      "Gib zwei Größen ein und erhalte den genauen Unterschied in cm und ft/in, die prozentuale Differenz und eine maßstabsgetreue Vorschau.",
    personA: "Person A",
    personB: "Person B",
    name: "Name",
    difference: "Unterschied",
    percentTaller: "{a} ist {pct} größer als {b}",
    sameHeight: "Beide sind gleich groß",
    reachTitle: "Bis wohin der Kopf von {b} bei {a} reicht",
    reach: {
      eyes: "Augenhöhe",
      nose: "Nase oder Mund",
      chin: "Kinn",
      shoulders: "Schultern",
      chest: "Brust",
      waist: "Taille",
      below: "Unterhalb der Taille",
    },
    reachNote:
      "Basiert auf durchschnittlichen Körperproportionen Erwachsener; Haltung, Schuhe und Frisur verändern das tatsächliche Ergebnis.",
    categoryTitle: "Wie groß ist der Unterschied?",
    categories: {
      tiny: "Kaum wahrnehmbar (unter 3 cm / 1 in)",
      small: "Gering (3–7 cm / 1–3 in)",
      medium: "Deutlich (8–14 cm / 3–5,5 in)",
      large: "Groß (15–24 cm / 6–9,5 in)",
      huge: "Sehr groß (25 cm / 10 in oder mehr)",
    },
    contentTitle: "Größenunterschiede richtig einordnen",
    content: [
      "Größenunterschiede wirken oft größer oder kleiner, als die reine Zahl vermuten lässt. Bei 10 cm (4 in) Unterschied sind die Augen der kleineren Person ungefähr auf Höhe des Mundes der größeren – auf Fotos fällt das deutlich auf.",
      "Der prozentuale Unterschied hilft beim Vergleich unterschiedlicher Größen: 20 cm zwischen Erwachsenen mit 165 und 185 cm sind etwa 12 %, dieselben 20 cm zwischen Kindern mit 100 und 120 cm dagegen 20 %.",
      "Bei Paaren ist ein Unterschied von rund 12 cm (5 in) typisch – denn ungefähr so viel größer sind Männer im weltweiten Durchschnitt als Frauen.",
    ],
    faq: [
      {
        q: "Wie berechne ich einen Größenunterschied?",
        a: "Zieh die kleinere Größe von der größeren ab. Für den Prozentwert teilst du die Differenz durch die kleinere Größe und multiplizierst mit 100.",
      },
      {
        q: "Sind 15 cm Größenunterschied viel?",
        a: "15 cm (etwa 6 in) sind ein deutlich sichtbarer Unterschied: Der Scheitel der kleineren Person reicht meist etwa bis zur Nase der größeren.",
      },
      {
        q: "Wie groß ist der durchschnittliche Größenunterschied zwischen Männern und Frauen?",
        a: "Weltweit sind 19-jährige Männer im Schnitt 170,8 cm groß, Frauen 158,6 cm – ein Unterschied von etwa 12 cm (4,8 in).",
      },
    ],
  },
  countries: {
    metaTitle: "Durchschnittsgröße nach Ländern 2026 – Männer & Frauen",
    metaDescription:
      "Durchschnittliche Körpergröße von Männern und Frauen in 200 Ländern in cm und Fuß, von groß nach klein sortiert, mit Veränderung seit 1985. Daten: NCD-RisC.",
    h1: "Durchschnittsgröße nach Ländern",
    intro:
      "Durchschnittliche Körpergröße 19-jähriger Männer und Frauen in 200 Ländern – in dem Alter, in dem die meisten Menschen ihre Endgröße erreicht haben.",
    search: "Land suchen…",
    sortBy: "Sortieren nach",
    rank: "#",
    change: "Seit 1985",
    compare: "Vergleichen",
    world: "Welt",
    tallestMen: "Größte Männer",
    tallestWomen: "Größte Frauen",
    shortestMen: "Kleinste Männer",
    shortestWomen: "Kleinste Frauen",
    worldAverage: "Weltdurchschnitt",
    contentTitle: "Was die Daten zeigen",
    content: [
      "Die Niederlande haben die größten jungen Erwachsenen der Welt: Männer sind im Schnitt 183,8 cm (6′0″) groß, Frauen 170,4 cm (5′7″). Die niedrigsten Durchschnittswerte finden sich bei Männern in Timor-Leste (160,1 cm) und bei Frauen in Guatemala (150,9 cm).",
      "Weltweit liegt die durchschnittliche Körpergröße bei 170,8 cm (5′7″) für Männer und 158,6 cm (5′2″) für Frauen. Zwischen den größten und den kleinsten Ländern liegen mehr als 20 cm.",
      "Die Körpergröße ist zwar auch genetisch bedingt, doch Unterschiede zwischen Ländern spiegeln vor allem Ernährung, Gesundheit und Lebensbedingungen in der Kindheit wider. Deshalb ist die Durchschnittsgröße in vielen Ländern seit 1985 um mehrere Zentimeter gestiegen.",
    ],
    methodTitle: "Über die Daten",
    method:
      "Die Werte sind NCD-RisC-Schätzungen der durchschnittlichen Körpergröße im Alter von 19 Jahren für das jeweils neueste verfügbare Jahr, zusammengeführt aus bevölkerungsbasierten Messstudien (keine Selbstangaben). Gerundet auf 0,1 cm.",
    faq: [
      {
        q: "In welchem Land sind die Menschen am größten?",
        a: "In den Niederlanden – mit durchschnittlich 183,8 cm bei Männern und 170,4 cm bei Frauen.",
      },
      {
        q: "In welchem Land sind die Menschen am kleinsten?",
        a: "Bei Männern hat Timor-Leste den niedrigsten Durchschnitt (160,1 cm), bei Frauen Guatemala (150,9 cm).",
      },
      {
        q: "Wie groß ist der Mensch im weltweiten Durchschnitt?",
        a: "Etwa 170,8 cm (5′7″) bei Männern und 158,6 cm (5′2″) bei Frauen.",
      },
      {
        q: "Warum werden 19-Jährige betrachtet?",
        a: "Mit 19 haben die meisten Menschen ihre Endgröße erreicht, und ein einheitliches Alter macht Länder über Generationen hinweg direkt vergleichbar.",
      },
    ],
  },
  percentile: {
    metaTitle: "Körpergröße Perzentil berechnen – wie groß bist du wirklich?",
    metaDescription:
      "Berechne dein Körpergröße-Perzentil: Sieh, wie viel Prozent der Männer oder Frauen in deinem Land und weltweit kleiner sind als du – basierend auf NCD-RisC.",
    h1: "Körpergröße-Perzentil-Rechner",
    intro: "Gib deine Größe und dein Geschlecht ein und sieh, wo du im Vergleich zu Erwachsenen in deinem Land und weltweit stehst.",
    yourHeight: "Deine Größe",
    result: "{country}: Du bist größer als {pct} der {group}.",
    groupMen: "Männer",
    groupWomen: "Frauen",
    oneIn: "Etwa 1 von {n} ist größer als du.",
    zScore: "{sd} Standardabweichungen vom Durchschnitt ({avg})",
    otherCountries: "Dein Perzentil in anderen Ländern",
    percentile: "Perzentil",
    average: "Durchschnitt",
    note:
      "Schätzung: Wir nehmen an, dass die Körpergrößen um den NCD-RisC-Durchschnitt des jeweiligen Landes normalverteilt sind, mit einer typischen Streuung von 7,1 cm bei Männern und 6,6 cm bei Frauen. Die tatsächlichen Verteilungen weichen je nach Land leicht ab.",
    contentTitle: "Was ein Größen-Perzentil bedeutet",
    content: [
      "Ein Perzentil gibt an, welcher Anteil der Menschen kleiner ist als du. Beim 50. Perzentil bist du genau durchschnittlich, beim 90. Perzentil größer als 9 von 10 Menschen desselben Geschlechts.",
      "Da sich die Durchschnittswerte zwischen Ländern unterscheiden, kann dieselbe Größe hier groß und dort durchschnittlich sein. 175 cm liegen für Männer in Indien oder Japan über dem Durchschnitt, in den Niederlanden dagegen darunter.",
    ],
    faq: [
      {
        q: "Sind 180 cm für einen Mann groß?",
        a: "In den meisten Ländern ja. Weltweit bist du mit 180 cm (5′11″) größer als rund 90 % der Männer – in den Niederlanden, wo Männer im Schnitt 183,8 cm groß sind, liegst du damit allerdings unter dem Durchschnitt.",
      },
      {
        q: "Sind 170 cm für eine Frau groß?",
        a: "Ja. Mit 170 cm (5′7″) bist du größer als etwa 96 % der Frauen weltweit und liegst ungefähr im Durchschnitt der Frauen in den Niederlanden.",
      },
      {
        q: "Wie genau ist dieser Rechner?",
        a: "Die Durchschnittswerte stammen aus gemessenen nationalen Daten, die Streuung wird jedoch mit einer typischen Standardabweichung modelliert. Betrachte die Ergebnisse daher als gute Schätzung, nicht als exakten Rang.",
      },
    ],
  },
};

export default messages;
