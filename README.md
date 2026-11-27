# Macrolight

Kalorien-, Makro- und Trinkzähler fürs Handy. Eine einzige HTML-Seite ohne Build-Schritt, die als Cloudflare Worker ausgeliefert wird.

## Funktionen

- Kalorien-Skala mit verbleibenden, gegessenen und Ziel-Kalorien
- Eiweiß, Kohlenhydrate und Fett mit eigenen Zielen
- Lebensmittelliste (je 100 g), eigene Einträge, „Wie gestern“
- Trinkzähler mit 150, 200, 250, 330, 500, 750 und 1000 ml
- Verlauf über 7 oder 30 Tage für Kalorien und Trinken, Gewichtskurve
- Drei Stile: Store (weiße Kacheln auf Hellgrau), Glas (Milchglas über farbigen Flächen) und Klar
- Anpassbar: 17 Akzentfarben, 11 Hintergründe, Schrift, Schriftgröße, Ecken, Hell/Dunkel
- Lässt sich als App zum Home-Bildschirm hinzufügen und funktioniert offline

## Design: Calm Precision

Warmes Papierweiß, Anthrazit, ein gedecktes Waldgrün als einziger Akzent. Das wiederkehrende Element ist die Skala: feine Skalenstriche wie auf einer Küchenwaage oder einem Messbecher. Sie zeigt Kalorien, Makros, Trinkmenge und die Zeitachse im Verlauf. Schrift ist SF Pro (Systemschrift) mit Tabellenziffern, damit Zahlen beim Ändern nicht springen.

## Speicherung

Auf der eigenen Domain speichert die App alles im Browser (`localStorage`), also nur auf dem jeweiligen Gerät. In der Claude-Version (Artifact) kommen Speicherung im Konto, die KI-Schätzung per Text und Foto und der CSV-Export dazu. Diese Funktionen blendet die Web-Version automatisch aus.

## Aufbau

```
public/
  index.html             die ganze App
  manifest.webmanifest   App-Name und Icons für den Home-Bildschirm
  sw.js                  Offline-Cache
  icons/                 App-Icons
src/worker.js            reicht Anfragen an die Dateien in public/ weiter
wrangler.jsonc           Cloudflare-Konfiguration
```

## Veröffentlichen

```bash
npx wrangler login     # einmalig
npx wrangler deploy
```

Danach ist die App unter `https://macrolight.<dein-subdomain>.workers.dev` erreichbar.

## Lokal ansehen

```bash
npx wrangler dev
```
