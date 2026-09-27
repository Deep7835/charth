import type { MoreMessages } from "./en";

const messages: MoreMessages = {
  names: {
    "height-predictor": {
      name: "Endgröße berechnen",
      blurb: "Wie groß werde ich? Berechne die voraussichtliche Endgröße aus der Größe der Eltern oder der aktuellen Größe eines Kindes.",
    },
    "growth-chart": {
      name: "Durchschnittsgröße nach Alter",
      blurb: "Wachstumskurve für Jungen und Mädchen von 5 bis 19 Jahren in 200 Ländern – mit Größencheck fürs Kind.",
    },
    "bmi-calculator": {
      name: "BMI & Normalgewicht",
      blurb: "Berechne deinen BMI und sieh, welches Gewicht bei deiner Größe im gesunden Bereich liegt.",
    },
  },
  common: {
    boy: "Junge",
    girl: "Mädchen",
    age: "Alter",
    years: "{n} Jahre",
    father: "Größe des Vaters",
    mother: "Größe der Mutter",
    childHeight: "Aktuelle Größe des Kindes",
    optional: "optional",
    estimateNote: "Nur Schätzwerte – Gene, Ernährung, Gesundheit und der Zeitpunkt der Pubertät beeinflussen das tatsächliche Wachstum.",
  },
  predictor: {
    metaTitle: "Größe berechnen Kind – Wie groß werde ich? Endgröße-Rechner",
    metaDescription:
      "Größe berechnen fürs Kind: Wie groß werde ich? Schätze die Endgröße aus der Größe der Eltern und der aktuellen Größe fürs Alter – mit Daten aus 200 Ländern.",
    h1: "Endgröße berechnen: Wie groß werde ich?",
    intro:
      "Schätze die Endgröße auf zwei Arten: aus der Größe beider Eltern und aus der aktuellen Größe eines Kindes im Vergleich zum durchschnittlichen Wachstum in seinem Land.",
    parentsResult: "Nach der Größe der Eltern",
    currentResult: "Nach der aktuellen Größe fürs Alter",
    range: "Wahrscheinlicher Bereich: {low} – {high}",
    currentUnavailable: "Gib die Größe des Kindes ein (5–17 Jahre), um eine zweite Schätzung zu erhalten.",
    howTitle: "So funktioniert die Berechnung",
    how: [
      "Größe der Eltern (Methode der mittleren Elterngröße): Addiere die Größe von Mutter und Vater, zähle für einen Jungen 13 cm hinzu oder ziehe für ein Mädchen 13 cm ab und teile das Ergebnis durch 2. Das ist die Zielgröße, mit der Kinderärzte arbeiten; die meisten Kinder (etwa 95 %) landen am Ende innerhalb von ungefähr 8,5 cm (3,3 in) um diesen Wert.",
      "Aktuelle Größe fürs Alter: Die Größe des Kindes wird mit dem nationalen Durchschnitt für sein Alter und Geschlecht verglichen (Daten von NCD-RisC). Dabei wird angenommen, dass es bis zum Erwachsenenalter an derselben relativen Position bleibt. Das funktioniert am besten vor der Pubertät; eine frühe oder späte Pubertät kann das Ergebnis verschieben.",
      "Stimmen beide Schätzungen überein, ist die Vorhersage zuverlässiger. Ein großer Abstand zwischen ihnen ist während Wachstumsschüben häufig und für sich allein kein Grund zur Sorge.",
    ],
    faq: [
      {
        q: "Wie genau ist eine Vorhersage der Endgröße?",
        a: "Mit der Methode der mittleren Elterngröße liegen die meisten Kinder innerhalb von etwa ±8,5 cm um die Zielgröße. Kein Rechner kann den Zeitpunkt der Pubertät, die Ernährung oder Erkrankungen berücksichtigen – betrachte die Ergebnisse daher als Orientierung.",
      },
      {
        q: "Kann ich meine Größe auch als Teenager berechnen?",
        a: "Ja. Gib dein Alter und deine aktuelle Größe ein. Ab etwa 15 bei Mädchen und 17 bei Jungen wachsen die meisten weniger als 1 cm pro Jahr – deine aktuelle Größe liegt dann also schon nah an deiner Endgröße.",
      },
      {
        q: "Bestimmt eher der Vater oder die Mutter die Körpergröße?",
        a: "Beide Eltern tragen ungefähr gleich viel bei. Deshalb bildet die Formel den Mittelwert ihrer Größen und gleicht anschließend den typischen Unterschied zwischen Männern und Frauen aus.",
      },
    ],
  },
  growth: {
    metaTitle: "Durchschnittsgröße nach Alter – Jungen & Mädchen (5–19)",
    metaDescription:
      "Durchschnittsgröße nach Alter von 5 bis 19 Jahren für Jungen und Mädchen in 200 Ländern – mit Wachstumskurve und schnellem Vergleich der Größe deines Kindes.",
    h1: "Durchschnittsgröße nach Alter: Wachstumskurve für Jungen und Mädchen",
    intro: "Sieh dir die Durchschnittsgröße in jedem Alter von 5 bis 19 Jahren in jedem Land an und vergleiche die Größe eines Kindes damit.",
    tableTitle: "Durchschnittsgröße nach Alter — {country}",
    above: "{diff} über dem Durchschnitt im Alter von {age} Jahren",
    below: "{diff} unter dem Durchschnitt im Alter von {age} Jahren",
    atAverage: "Genau im Durchschnitt für das Alter von {age} Jahren",
    chartBoys: "Jungen",
    chartGirls: "Mädchen",
    childPoint: "Dein Kind",
    contentTitle: "Wie Kinder wachsen",
    content: [
      "Vom 5. Lebensjahr bis zur Pubertät wachsen Kinder etwa 5–6 cm (2 in) pro Jahr. In den 200 Ländern liegt das Jahr mit dem stärksten Wachstum bei Mädchen meist zwischen 10 und 11 Jahren, bei Jungen zwischen 12 und 13.",
      "Mit 14 haben Mädchen im Durchschnitt 98 % ihrer Endgröße erreicht, Jungen etwa 94 %. Jungen erreichen rund 98 % mit 16. Ab 17 liegt das durchschnittliche Wachstum unter 1 cm (0,4 in) pro Jahr.",
      "Das sind nationale Durchschnittswerte, in denen individuelle Wachstumsschübe ausgeglichen werden. Ein gesundes Kind kann deutlich über oder unter der Durchschnittslinie liegen – entscheidend ist vor allem ein gleichmäßiges Wachstum über die Zeit.",
    ],
    faq: [
      {
        q: "Wie groß ist ein 12-jähriges Kind im Durchschnitt?",
        a: "Das hängt vom Land ab: In den USA sind Jungen und Mädchen etwa 155 cm (5′1″) groß, in Japan etwa 151 cm (knapp 5 ft) und in Indien etwa 142–144 cm (4′8″–4′9″). Wähle oben ein Land, um die genauen Werte zu sehen.",
      },
      {
        q: "Wann hören Mädchen und Jungen auf zu wachsen?",
        a: "Die meisten Mädchen sind mit 15–16 nah an ihrer Endgröße, die meisten Jungen mit 17–18. Danach liegt das durchschnittliche Wachstum unter 1 cm pro Jahr.",
      },
      {
        q: "Ist die Größe meines Kindes normal?",
        a: "Kinder streuen stark um den Durchschnitt, daher ist eine einzelne Messung darüber oder darunter meist normal. Sprich mit einer Ärztin oder einem Arzt, wenn das Wachstum plötzlich langsamer wird oder sich ein Kind mit der Zeit weit von seiner gewohnten Position entfernt.",
      },
    ],
  },
  bmi: {
    metaTitle: "BMI Rechner – Normalgewicht für deine Größe berechnen",
    metaDescription:
      "BMI Rechner: Berechne deinen BMI metrisch oder imperial und sieh das Normalgewicht für deine Größe – mit Größe-Gewicht-Tabelle nach WHO-Kategorien.",
    h1: "BMI-Rechner und Normalgewicht für deine Größe",
    intro: "Gib Größe und Gewicht ein und erhalte deinen Body-Mass-Index (BMI) sowie den gesunden Gewichtsbereich für deine Größe.",
    weight: "Gewicht",
    yourBmi: "Dein BMI",
    categories: {
      underweight: "Untergewicht",
      normal: "Normalgewicht",
      overweight: "Übergewicht",
      obese: "Adipositas",
    },
    healthyRange: "Normalgewicht bei {height}: {low} – {high}",
    chartTitle: "Normalgewicht nach Körpergröße",
    colHeight: "Größe",
    colRange: "Normalgewicht (BMI 18,5–24,9)",
    note: "Für Erwachsene ab 18 Jahren. Der BMI unterscheidet nicht zwischen Muskeln und Fett; für Kinder und Jugendliche sind altersspezifische BMI-Tabellen nötig.",
    contentTitle: "Was der BMI aussagt",
    content: [
      "Der BMI ist das Gewicht in Kilogramm geteilt durch die Körpergröße in Metern zum Quadrat. Die Weltgesundheitsorganisation (WHO) stuft den BMI Erwachsener unter 18,5 als Untergewicht ein, von 18,5 bis 24,9 als Normalgewicht, von 25 bis 29,9 als Übergewicht und ab 30 als Adipositas.",
      "Da er nur Größe und Gewicht berücksichtigt, ist der BMI ein schneller Richtwert für ein erstes Screening, keine Diagnose. Sehr muskulöse Menschen können einen hohen BMI haben, ohne zu viel Fett zu haben, und manche Gesundheitsleitlinien nutzen niedrigere Grenzwerte für Menschen asiatischer Herkunft.",
    ],
    faq: [
      { q: "Welcher BMI ist gesund?", a: "Für Erwachsene liegt der gesunde Bereich laut WHO bei 18,5 bis 24,9." },
      {
        q: "Wie wird der BMI berechnet?",
        a: "Teile das Gewicht in Kilogramm durch die Körpergröße in Metern zum Quadrat. Beispiel: 70 kg bei 1,75 m ergibt 70 ÷ 3,06 = 22,9.",
      },
      {
        q: "Was ist ein gesundes Gewicht bei 170 cm?",
        a: "Bei 170 cm (5′7″) entspricht ein BMI von 18,5–24,9 etwa 53,5–72,0 kg (118–159 lb).",
      },
    ],
  },
  person: {
    metaTitle: "{name} Größe – wie groß ist {name}? ({cm} / {ftin})",
    metaDescription:
      "{name} ist {cm} ({ftin}) groß. Vergleiche die Größe von {name} mit dem Durchschnittsmann und der Durchschnittsfrau und sieh, wer ähnlich groß ist.",
    h1: "{name}: Größe",
    answer: "{name} ist {cm} ({ftin}) groß.",
    boardTitle: "{name} neben einem durchschnittlichen Mann und einer durchschnittlichen Frau",
    statsTitle: "Wie groß ist das?",
    tallerThan: "Größer als {pct} der {group} weltweit",
    groupMen: "Männer",
    groupWomen: "Frauen",
    diffTaller: "{diff} größer als der Durchschnitt der {who}",
    diffShorter: "{diff} kleiner als der Durchschnitt der {who}",
    whoMan: "Männer",
    whoWoman: "Frauen",
    similarTitle: "Etwa gleich groß",
    compareCta: "Vergleiche dich mit {name}",
    sourceNote: "Häufig genannte Größenangabe für {name}; die Werte können je nach Quelle leicht abweichen.",
    faqFeet: "Wie groß ist {name} in Fuß?",
    faqFeetA: "{name} ist {ftin} groß, das sind {cm}.",
    faqTall: "Ist {name} groß?",
    faqTallAbove: "Ja. Mit {cm} ist {name} größer als {pct} der {group} weltweit.",
    faqTallAverage: "{name} liegt nah am Durchschnitt: Mit {cm} größer als {pct} der {group} weltweit.",
    faqTallBelow: "{name} ist kleiner als der Durchschnitt: Mit {cm} nur größer als {pct} der {group} weltweit.",
    faqVs: "Ist {name} größer als {other}?",
    faqVsTaller: "Ja. {name} ({cm}) ist {diff} größer als {other} ({otherCm}).",
    faqVsShorter: "Nein. {name} ({cm}) ist {diff} kleiner als {other} ({otherCm}).",
    faqVsSame: "Beide sind gleich groß: {cm}.",
  },
  people: {
    metaTitle: "Promi-Größen – wie groß sind Stars und Figuren?",
    metaDescription:
      "Größen von Sportlern, Schauspielern, Musikern und Anime-Figuren in cm und Fuß – jeweils im Bildvergleich mit einem durchschnittlichen Mann und einer Frau.",
    h1: "Größen von Promis, Sportlern und Figuren",
    intro: "Wähle einen Namen, um die Größe in einem maßstabsgetreuen Diagramm zu sehen und mit deiner eigenen zu vergleichen.",
  },
  guides: {
    metaTitle: "Ratgeber Körpergröße – Messen, Wachstum, Größenunterschiede",
    metaDescription:
      "Praktische Ratgeber: Körpergröße zu Hause richtig messen, wann man aufhört zu wachsen und wie Größenunterschiede in der Praxis aussehen.",
    h1: "Ratgeber zur Körpergröße",
    intro: "Kurze, praktische Ratgeber – mit den Zahlen dahinter.",
    read: "Ratgeber lesen",
    minutes: "{n} Min. Lesezeit",
  },
};

export default messages;
