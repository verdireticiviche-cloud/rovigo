# Europa Verde – Reti Civiche Rovigo

Sito statico in italiano, senza framework, dipendenze, installazione o compilazione. Home responsive, articolo sul nucleare, informazioni sul sito. Funziona anche aprendo index.html sul computer.

## Pubblicare su GitHub Pages

1. Carica il contenuto del sito nella radice del repository: `index.html` deve essere nella radice, non dentro un’altra cartella. Conserva le cartelle `assets` e il file nascosto `.nojekyll`.
2. Salva i file nel ramo `main`.
3. In Settings → Pages → Build and deployment seleziona Deploy from a branch, ramo `main`, cartella `/(root)`, quindi Save.
4. Attendi il completamento della pubblicazione. Pages mostrerà il link pubblico.

## Struttura

```text
index.html
article-nucleare.html
privacy.html
.nojekyll
README.md
assets/
  css/style.css
  js/main.js
  img/logo-europa-verde-rovigo.jpg
  img/polesine.svg
```

## Personalizzare

- **Logo:** `assets/img/logo-europa-verde-rovigo.jpg` è il marchio utilizzato in header e footer.
- **Contatti:** sono presenti i link forniti a Facebook (`https://www.facebook.com/VerdiRetiCivichePolesine`) e Instagram (`https://www.instagram.com/verdi_reticiviche/`).
- **Colori:** le variabili all’inizio di `assets/css/style.css` controllano la palette.
- **Menu e footer:** sono presenti in ogni pagina.

## Accessibilità e dati

HTML semantico, link per saltare al contenuto, focus visibile, menu mobile con stato accessibile, chiusura con Escape e rispetto delle preferenze di movimento ridotto. Nessun analytics, cookie applicativo, local storage, font esterno o incorporamento di terze parti.

## Anteprima locale

Apri `index.html`, oppure esegui dalla cartella del sito:

```sh
python3 -m http.server 8000
```

Poi apri `http://localhost:8000`.
