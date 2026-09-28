import type { LegalMessages } from "./en";

const messages: LegalMessages = {
  privacy: {
    metaTitle: "Datenschutzerklärung",
    metaDescription:
      "Wie {site} mit deinen Daten umgeht: keine Konten, Diagramme bleiben in deinem Browser, anonyme Nutzungsstatistiken mit Google Analytics.",
    h1: "Datenschutzerklärung",
    intro:
      "{site} ist ein kostenloses Tool für Größenvergleiche. Wir erheben so wenige Daten wie möglich. Diese Erklärung beschreibt, was bei der Nutzung der Website verarbeitet wird und welche Wahlmöglichkeiten du hast.",
    sections: [
      {
        h: "Von dir eingegebene Daten",
        p: [
          "Namen und Größen, die du in die Tools eingibst, werden in deinem Browser verarbeitet. Wir speichern sie nicht auf unseren Servern.",
          "Wenn du „Teilen“ verwendest, wird das Diagramm im Link selbst codiert. Jeder, der den Link hat, kann dieses Diagramm sehen – vermeide daher private Informationen in Namen.",
          "Bilder, die du hinzufügst, werden lokal von deinem Browser gelesen und niemals hochgeladen oder in geteilte Links aufgenommen.",
        ],
      },
      {
        h: "Cookies und lokaler Speicher",
        p: [
          "Wir speichern einige technische Einstellungen im lokalen Speicher deines Browsers. Diese sind erforderlich, damit die Website wie erwartet funktioniert.",
          "Wir verwenden Google Analytics, um die Nutzung anonym zu messen, etwa besuchte Seiten, Land und Gerätetyp. Google Analytics setzt zu diesem Zweck Cookies. Du kannst Cookies in deinen Browsereinstellungen blockieren oder löschen oder das Browser-Add-on von Google zur Deaktivierung installieren (tools.google.com/dlpage/gaoptout).",
          "Falls wir künftig Werbung anzeigen, werden Cookies für personalisierte Werbung nur mit deiner Einwilligung verwendet, und diese Erklärung wird vorher aktualisiert.",
        ],
      },
      {
        h: "Server-Logs",
        p: [
          "Unser Hosting-Anbieter verarbeitet automatisch technische Daten wie IP-Adresse, Browsertyp und aufgerufene Seiten, um die Website bereitzustellen und vor Missbrauch zu schützen. Diese Logs werden für einen begrenzten Zeitraum aufbewahrt und nicht dazu verwendet, dich zu identifizieren.",
        ],
      },
      {
        h: "Deine Rechte",
        p: [
          "Je nach Wohnort (zum Beispiel nach der DSGVO in der EU oder dem CCPA in Kalifornien) hast du möglicherweise das Recht auf Auskunft, Berichtigung oder Löschung personenbezogener Daten sowie das Recht, der Verarbeitung zu widersprechen. Da wir weder Konten noch Diagrammdaten speichern, lassen sich die meisten Anfragen durch Löschen deines Browserspeichers erledigen. Für alles andere kontaktiere uns unter {email}.",
        ],
      },
      {
        h: "Kinder",
        p: ["Die Website ist für ein allgemeines Publikum geeignet und erhebt nicht wissentlich personenbezogene Daten von Kindern."],
      },
      {
        h: "Änderungen",
        p: ["Wir können diese Erklärung aktualisieren. Das Datum oben auf der Seite zeigt die aktuelle Fassung."],
      },
    ],
  },
  terms: {
    metaTitle: "Nutzungsbedingungen",
    metaDescription:
      "Die Bedingungen für die Nutzung von {site}, einem kostenlosen visuellen Tool für Größenvergleiche, einschließlich zulässiger Nutzung und Haftungsausschlüssen.",
    h1: "Nutzungsbedingungen",
    intro:
      "Durch die Nutzung von {site} stimmst du diesen Bedingungen zu. Wenn du nicht einverstanden bist, nutze die Website bitte nicht.",
    sections: [
      {
        h: "Nutzung der Tools",
        p: [
          "Die Tools sind für private, Bildungs- und kommerzielle Zwecke kostenlos. Du darfst die Diagramme, die du erstellst, teilen und veröffentlichen, einschließlich heruntergeladener Bilder.",
          "Missbrauche die Website nicht, zum Beispiel indem du versuchst, sie zu stören, sie in einem Umfang ausliest (Scraping), der andere Nutzer beeinträchtigt, oder sie nutzt, um rechtswidrige oder belästigende Inhalte zu erstellen.",
        ],
      },
      {
        h: "Genauigkeit",
        p: [
          "Größenangaben zu Personen des öffentlichen Lebens, Figuren, Tieren und Objekten sind häufig genannte Werte und können von anderen Quellen abweichen. Statistiken stammen aus den zitierten Forschungsdatensätzen. Körperproportionen in Zeichnungen und 3D-Modellen sind Näherungswerte.",
          "Die Website dient der Information und Unterhaltung. Sie ist keine medizinische Beratung; wende dich bei Fragen zu Wachstum oder Gesundheit an eine Fachperson.",
        ],
      },
      {
        h: "Geistiges Eigentum",
        p: [
          "Design, Code und Illustrationen der Website gehören {site}. Namen von Personen, Figuren und Wahrzeichen gehören ihren jeweiligen Inhabern und werden nur zur Identifikation verwendet.",
          "Die Daten zur Durchschnittsgröße sind © NCD Risk Factor Collaboration und werden unter der Lizenz CC BY 4.0 verwendet.",
        ],
      },
      {
        h: "Haftung",
        p: [
          "Die Website wird „wie besehen“ und ohne Gewährleistung bereitgestellt. Soweit gesetzlich zulässig, haften wir nicht für Verluste, die aus ihrer Nutzung entstehen.",
        ],
      },
      {
        h: "Kontakt",
        p: ["Fragen zu diesen Bedingungen: {email}."],
      },
    ],
  },
};

export default messages;
