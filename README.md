# Macrolight

Kalorien-, Makro- und Trinkzähler fürs Handy. Eine einzige HTML-Seite ohne Build-Schritt, die als Cloudflare Worker ausgeliefert wird.

## Funktionen

- Tagesring nach Mahlzeiten aufgeteilt, mit verbleibenden Kalorien
- Eiweiß, Kohlenhydrate und Fett mit eigenen Zielen
- Lebensmittelliste (je 100 g), eigene Einträge, „Wie gestern“
- Trinkzähler mit 150, 200, 250, 330, 500, 750 und 1000 ml
- Verlauf über 7 oder 30 Tage, Serie, Gewichtskurve
- Anpassbar: Akzentfarbe, Hintergrund, Schrift, Schriftgröße, Ecken, Hell/Dunkel
- Lässt sich als App zum Home-Bildschirm hinzufügen und funktioniert offline

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
