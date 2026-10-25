# Persönliche Website von Jason Mike Nadler

Eine statische Website aus reinem HTML, CSS und etwas JavaScript – ohne Framework, ohne Datenbank, ohne Build-Schritt. Sie läuft kostenlos auf GitHub Pages.

---

## 1. Was ist wo?

```
/
├── index.html              Startseite (Deutsch)
├── ueber-mich.html         Über mich
├── werdegang.html          Werdegang (Zeitleiste)
├── sozialpaedagogik.html   Sozialpädagogik
├── projekte.html           Projekte
├── interessen.html         Interessen + Galerie
├── kontakt.html            Kontakt
├── impressum.html          Impressum (VORLAGE – ergänzen!)
├── datenschutz.html        Datenschutz (VORLAGE – ergänzen!)
├── en/                     Dieselben Seiten auf Englisch
│   ├── index.html, about.html, journey.html, social-pedagogy.html,
│   └── projects.html, interests.html, contact.html, legal-notice.html, privacy.html
├── assets/
│   ├── css/style.css       Das gesamte Design (Farben ganz oben)
│   ├── js/main.js          Hell/Dunkel, Handy-Menü, Jahreszahl, Bildvergrößerung
│   ├── images/             Fotos und Vorschaubild (og-vorschau.png)
│   ├── icons/favicon.svg   Symbol im Browser-Tab
│   └── docs/               Hier kommt später dein Lebenslauf-PDF hin
└── README.md               Diese Anleitung
```

Jede deutsche Seite hat eine englische Partnerseite. Der Knopf **EN / DE** oben rechts führt immer zur passenden Seite in der anderen Sprache.

**Wichtig:** Wenn du einen Text änderst, ändere ihn in **beiden** Sprachen, damit die Versionen übereinstimmen.

---

## 2. Website auf dem eigenen Computer ansehen

**Einfachste Möglichkeit:** Doppelklick auf `index.html`. Die Seite öffnet sich im Browser.

**Mit einem kleinen lokalen Server** (verhält sich genauer wie im Internet):

1. Terminal bzw. Eingabeaufforderung im Website-Ordner öffnen.
2. Eingeben: `python3 -m http.server 8000` (unter Windows evtl. `python -m http.server 8000`)
3. Im Browser öffnen: `http://localhost:8000`
4. Beenden mit `Strg + C`.

Tipp: Mit Visual Studio Code und der Erweiterung „Live Server“ geht es per Rechtsklick → „Open with Live Server“.

---

## 3. Texte ändern

1. Die gewünschte `.html`-Datei mit einem Texteditor öffnen (z. B. Visual Studio Code – kostenlos).
2. Den Text zwischen den Tags ändern, z. B. `<p>Hier steht der Text.</p>`.
3. Nur den Text ändern, nicht die spitzen Klammern `< >`.
4. Speichern und im Browser neu laden.

**Kopfbereich und Footer** stehen in jeder Seite einzeln. Wenn du dort etwas änderst (z. B. einen Menüpunkt), musst du das in allen 18 HTML-Dateien tun. In VS Code hilft „Suchen und Ersetzen in Dateien“ (`Strg + Umschalt + H`).

**Farben ändern:** In `assets/css/style.css` ganz oben im Abschnitt `:root` stehen alle Farben. `--c-accent` ist das Blau. Die Werte für den dunklen Modus stehen direkt darunter (zweimal – bitte beide anpassen).

---

## 4. Eigene Fotos einfügen

Bitte nur Fotos, die du selbst gemacht hast. Auf den Fotos sollten keine anderen Personen erkennbar sein – besonders keine Kinder aus Einrichtungen –, außer sie (bzw. die Eltern) haben ausdrücklich zugestimmt.

Fotos vorher verkleinern (ca. 1200–1600 Pixel Breite reichen) und als `.jpg` speichern. Dateinamen ohne Leerzeichen und Umlaute, z. B. `galerie-werkbank.jpg`.

### Porträtfoto (Startseite und „Über mich“)

1. Foto als `assets/images/portrait.jpg` speichern (Hochformat, etwa 4:5).
2. In `index.html` und `ueber-mich.html` nach `BILD-PLATZHALTER` suchen.
3. Den ganzen Block `<div class="photo-placeholder" …> … </div>` ersetzen durch:
   ```html
   <img class="photo" src="assets/images/portrait.jpg" alt="Porträt von Jason Mike Nadler" width="800" height="1000">
   ```
4. Auf den englischen Seiten (`en/index.html`, `en/about.html`) genauso – dort aber mit `../` vor dem Pfad:
   ```html
   <img class="photo" src="../assets/images/portrait.jpg" alt="Portrait of Jason Mike Nadler" width="800" height="1000">
   ```

### Galerie (Seite „Interessen“)

In `interessen.html` nach `GALERIE` suchen. Dort steht ein fertiges Beispiel im Kommentar. Einen Platzhalter `<figure>…</figure>` durch das Beispiel ersetzen und Dateiname, Bildbeschreibung (`alt`) und Bildunterschrift anpassen. Die Bildvergrößerung beim Anklicken funktioniert dann automatisch. In `en/interests.html` dasselbe mit `../` vor dem Pfad.

Du brauchst nicht genau drei Fotos – überzählige Platzhalter einfach löschen.

---

## 5. Lebenslauf als PDF ergänzen

Deine aktuelle Lebenslauf-Datei enthält **Anschrift, Telefonnummer und Geburtsdatum**. Diese Angaben gehören nicht öffentlich ins Internet. Erstelle deshalb zuerst eine **öffentliche Version ohne diese Daten**.

1. Die öffentliche Version als `assets/docs/lebenslauf.pdf` speichern.
2. In `ueber-mich.html` und `werdegang.html` nach `LEBENSLAUF-PLATZHALTER` suchen.
3. Den Block `<div class="note">…</div>` direkt darunter ersetzen durch:
   ```html
   <p><a class="btn btn--ghost" href="assets/docs/lebenslauf.pdf">Lebenslauf ansehen (PDF)</a></p>
   ```
4. In `en/about.html` und `en/journey.html` nach `CV PLACEHOLDER` suchen und ersetzen durch:
   ```html
   <p><a class="btn btn--ghost" href="../assets/docs/lebenslauf.pdf">View CV (PDF)</a></p>
   ```
5. Die Datei `assets/docs/HIER-LEBENSLAUF-ABLEGEN.txt` kannst du danach löschen.

Die Beurteilung und der ausführliche Bericht gehören **nicht** auf die Website und nicht in diesen Ordner.

---

## 6. Weiteres Projekt hinzufügen

1. `projekte.html` öffnen.
2. Den kompletten Block `<article class="project"> … </article>` (Prüfstand) kopieren.
3. Unter dem Kommentar `WEITERE PROJEKTE` einfügen.
4. Anpassen: Überschrift, Beschreibung, Themen (`<li>`-Einträge) und den Link (`href="…"`).
5. Die rechte Vorschau (`<div class="quiz-preview">…</div>`) passt nur zu einem Quiz. Für andere Projekte kannst du sie löschen – oder ein Bild verwenden:
   ```html
   <img src="assets/images/projekt-name.jpg" alt="Kurze Beschreibung" style="width:100%;height:100%;object-fit:cover">
   ```
6. Wenn das Projekt fertig ist, den passenden Kasten unter „Hier kommt noch mehr“ löschen.
7. Dasselbe in `en/projects.html` auf Englisch.

---

## 7. Auf GitHub Pages veröffentlichen

1. Bei [github.com](https://github.com) anmelden.
2. Oben rechts **+ → New repository**. Name z. B. `website`. Auf **Public** stellen, **Create repository** klicken.
3. Auf der neuen Seite **uploading an existing file** anklicken.
4. Den **Inhalt** des Website-Ordners (nicht den Ordner selbst) ins Fenster ziehen – also `index.html`, `en`, `assets` usw. Dann **Commit changes**.
5. Im Repository: **Settings → Pages**.
6. Unter „Build and deployment“: Source **Deploy from a branch**, Branch **main**, Ordner **/(root)**, **Save**.
7. Nach ein bis zwei Minuten erscheint oben die Adresse, z. B. `https://DEIN-NAME.github.io/website/`.

Alle Links sind relativ, deshalb funktioniert die Seite auch in so einem Unterordner.

**Danach einmalig:** In allen HTML-Dateien steht im Kopf `<meta property="og:image" content="…">`. Ersetze den Wert durch die vollständige Adresse, z. B.
`https://DEIN-NAME.github.io/website/assets/images/og-vorschau.png`. Erst dann zeigen WhatsApp, Instagram & Co. beim Teilen das Vorschaubild. Solche Vorschauen werden oft zwischengespeichert und aktualisieren sich erst nach einiger Zeit.

---

## 8. Website später aktualisieren

1. Dateien auf deinem Computer ändern und lokal prüfen.
2. Im Repository auf GitHub: **Add file → Upload files**, die geänderten Dateien hineinziehen (Ordnerstruktur beibehalten) und **Commit changes**.
3. Nach ein bis zwei Minuten ist die neue Version online. Falls nicht: Browser mit `Strg + F5` (Mac: `Cmd + Umschalt + R`) neu laden.

Einzelne Dateien kannst du auch direkt auf GitHub bearbeiten: Datei anklicken → Stift-Symbol → ändern → **Commit changes**.

---

## 9. Impressum und Datenschutz – bitte vor der Veröffentlichung prüfen

`impressum.html` und `datenschutz.html` (und die englischen Versionen) sind **Vorlagen** und **nicht rechtlich geprüft**. Alle blau hinterlegten `[…]`-Stellen sind Platzhalter.

- **Impressum:** Ob für eine private Website eine Impressumspflicht besteht und welche Anschrift dort stehen muss, solltest du klären. Eine private Wohnadresse ist dann öffentlich sichtbar. Es gibt Alternativen (z. B. eine andere ladungsfähige Anschrift oder Impressums-Dienste); welche zulässig ist, bitte vorher prüfen lassen.
- **Datenschutz:** Die Vorlage beschreibt genau das, was die Website tatsächlich tut: Hosting bei GitHub, keine Cookies, kein Tracking, keine externen Schriften oder Skripte, und nur eine lokale Speicherung der Hell/Dunkel-Wahl im Browser (Schlüssel `theme`). Wenn du später etwas Externes einbaust (YouTube-Video, Google-Karte, Schriftart von Google, Statistik-Tool), muss die Datenschutzseite angepasst werden.

---

## 10. Was die Website technisch macht

- **Hell/Dunkel:** folgt zuerst der Einstellung des Geräts. Ein Klick auf das Mond-/Sonnen-Symbol schaltet um und merkt sich die Wahl.
- **Handy-Menü:** unter 1000 Pixel Breite erscheint ein Menü-Knopf. Escape schließt das Menü.
- **Animationen:** nur zwei ruhige Effekte (Einblenden auf der Startseite, „Gleis verlegen“ auf der Werdegang-Seite). Wer im System „Bewegung reduzieren“ eingestellt hat, sieht keine Animationen.
- **Jahreszahl im Footer:** wird automatisch aktualisiert.
- **Kein Kontaktformular:** Der E-Mail-Link öffnet das E-Mail-Programm der Besucher.
