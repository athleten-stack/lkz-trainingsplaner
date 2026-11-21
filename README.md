# LK Zug Trainingsplaner

Trainingsplaner für die Trainingsgruppen des LK Zug. Läuft gratis auf GitHub Pages, die Daten liegen geschützt in Firebase (Google).

- Admin erstellt Logins (Benutzername + Passwort) und teilt jedem Trainer seine Jahrgänge zu
- Trainer sehen nur ihre zugeteilten Jahrgänge
- Wochen- und Jahresansicht (Mo bis Sa) mit Schulferien Kanton Zug
- Trainingsansicht mit PDF-Export auf eine A4-Seite
- «Prompt kopieren» für KI-Vorschläge (in Claude oder ChatGPT einfügen)

## Dateien

| Datei | Zweck |
|---|---|
| `index.html` | Die ganze App |
| `firebase-config.js` | Verbindung zu deinem Firebase-Projekt (musst du ausfüllen) |
| `firestore.rules` | Sicherheitsregeln, kommen in die Firebase-Konsole |

## Einrichtung (einmalig, ca. 30 Minuten)

### 1. Firebase-Projekt erstellen
1. https://console.firebase.google.com öffnen und mit einem Google-Konto anmelden.
2. **Projekt hinzufügen**, Name z. B. `lkz-trainingsplaner`. Google Analytics kann ausgeschaltet werden.

### 2. Login aktivieren
1. Links **Build > Authentication > Jetzt starten**.
2. Reiter **Anmeldemethode** > **E-Mail-Adresse/Passwort** > aktivieren > Speichern.
   (Die Trainer brauchen keine echte E-Mail. Der Planer arbeitet nur mit Benutzernamen.)

### 3. Datenbank erstellen
1. Links **Build > Firestore Database > Datenbank erstellen**.
2. Standort: **europe-west6 (Zürich)**, Modus: **Produktionsmodus**.
3. Reiter **Regeln**: alles löschen, den ganzen Inhalt von `firestore.rules` einfügen, **Veröffentlichen**.

### 4. Konfiguration kopieren
1. Zahnrad oben links > **Projekteinstellungen** > unten bei «Meine Apps» das Web-Symbol **</>** klicken.
2. App-Name z. B. `Planer`, Hosting **nicht** ankreuzen, registrieren.
3. Die angezeigten Werte (`apiKey`, `authDomain`, `projectId` usw.) in `firebase-config.js` eintragen.
   Diese Werte sind nicht geheim. Geschützt werden die Daten durch die Regeln aus Schritt 3.

### 5. Auf GitHub veröffentlichen
1. Auf GitHub ein neues Repository erstellen, z. B. `lkz-trainingsplaner` (Public).
2. **Add file > Upload files**: `index.html`, `firebase-config.js`, `firestore.rules` und `README.md` hochladen, Commit.
3. **Settings > Pages** > Source: «Deploy from a branch», Branch: `main`, Ordner `/ (root)` > Save.
4. Nach 1 bis 2 Minuten ist der Planer erreichbar unter
   `https://<dein-github-name>.github.io/lkz-trainingsplaner/`

### 6. Domain in Firebase freigeben
Firebase > **Authentication > Einstellungen > Autorisierte Domains** > **Domain hinzufügen** > `<dein-github-name>.github.io`

### 7. Admin-Konto erstellen
Planer öffnen. Beim allerersten Aufruf erscheint «Admin-Konto erstellen». Name, Benutzername und Passwort festlegen. Fertig.
Das geht nur ein einziges Mal. Danach sieht jeder nur noch die normale Anmeldung.

## Trainer hinzufügen
**Variante A: Du erstellst das Login**
1. Oben **Verwaltung** > **+ Login erstellen**.
2. Name, Benutzername, Passwort (wird vorgeschlagen) und Jahrgänge ankreuzen.
3. Die angezeigten Zugangsdaten kopieren und dem Trainer schicken.

**Variante B: Einladungslink**
1. **Verwaltung** > «Einladungslink für Trainer» > **Einladungslink erstellen** > Kopieren.
2. Link an die Trainer schicken (z. B. im WhatsApp-Chat der Trainer).
3. Die Trainer registrieren sich selbst mit Name, Benutzername und Passwort.
4. Du siehst sie in der Verwaltung unter «Offene Registrierungen» > **Freischalten und zuteilen** > Jahrgänge ankreuzen > Speichern.
Ein neuer Link macht den alten ungültig (z. B. wenn er in falsche Hände geraten ist).

**Neue Kategorien:** jederzeit mit **+ Neue Gruppe** anlegen und den Trainern zuteilen.

## KI-Unterstützung (freiwillig)
Im Fenster «Neues Training»:
1. **1. Prompt kopieren** (optional vorher einen Wunsch eintragen).
2. Auf claude.ai (Gratis-Konto reicht) in einem neuen Chat einfügen und senden.
3. Die ganze Antwort kopieren, im Planer **2. KI-Antwort einfügen** > einfügen > **Ins Formular übernehmen**.
4. Prüfen, anpassen, speichern.
Wer keine KI will, füllt das Formular einfach selbst aus. Dafür braucht es kein Claude-Konto.

Zuteilung ändern oder Login sperren: in der Liste «Logins» auf **Bearbeiten**.
Weitere Admins: beim Login die Rolle «Admin» wählen.

## Updates einspielen
Änderungen am Planer lässt du im Claude-Chat machen. Danach entweder
- die neue `index.html` auf GitHub hochladen (Repository > **Add file > Upload files** > Datei ersetzen > Commit), oder
- Claude direkt ins Repository schreiben lassen (dafür muss das Konto, mit dem Claude auf GitHub zugreift, Schreibrechte auf das Repository haben, z. B. als Collaborator).
Die Daten in Firebase bleiben bei einem Update unverändert.

## Gut zu wissen
- **Passwort vergessen:** Ein Admin kann fremde Passwörter in dieser Gratis-Variante nicht zurücksetzen. Lösung: altes Login entfernen und ein neues mit anderem Benutzernamen erstellen. Sein eigenes Passwort kann jeder oben rechts unter «👤» ändern.
- **Login entfernen:** Der Zugang ist sofort weg. Der Benutzername bleibt aber reserviert und kann nicht neu vergeben werden.
- **Backup:** Verwaltung > «Backup herunterladen» speichert alle Daten als Datei. Ab und zu machen.
- **Kosten:** Der Gratis-Plan von Firebase (Spark) reicht für einen Verein bei weitem.
- **Schulferien:** Hinterlegt bis Sommer 2028 (Quelle: zg.ch/schulferien). Spätere Jahre in `index.html` bei `HOLIDAYS` und `FREEDAYS` ergänzen.
