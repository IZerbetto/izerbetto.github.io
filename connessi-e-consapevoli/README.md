# 🛡️ AGENZIA SCUDO — Escape Room Cybersicurezza (scuola secondaria di primo grado)

Escape room interattiva in HTML/CSS/JS, giocabile **interamente da computer** (nessun foglio da compilare).
Le prove sono **sequenziali**: una alla volta, in ordine, con un codice di sblocco tra una prova e l'altra.

> **Riservato a chi conduce il laboratorio. Non condividere con i partecipanti.**

## Come pubblicarla su GitHub Pages

1. Crea un repository (es. `escape-room-scudo`) e carica TUTTO il contenuto di questa cartella, mantenendo `assets/`.
2. **Settings → Pages**: Source = `main`, cartella `/ (root)`.
3. Dopo 1-2 minuti il sito è online su `https://TUOUSERNAME.github.io/NOMEREPO/`.
4. Condividi il link (o uno shortlink) con i ragazzi: si parte da `index.html`.

## Flusso

```
INDEX → PROVA 1 Crittografia → codice 7
  → GATE 2 (FIREWALL) → PROVA 2 Password → codice 12
  → GATE 3 (CRYPTO)   → PROVA 3 Phishing → codice 39
  → GATE 4 (MALWARE)  → PROVA 4 Tracce digitali → codice 84
  → GATE 5 (ZERODAY)  → PROVA 5 Steganografia → codice 51
  → CASSAFORTE (7 - 12 - 39 - 84 - 51) → VITTORIA
```

I codici trovati si salvano da soli nel **Registro codici** in fondo a ogni pagina (e nella cassaforte finale).
I progressi stanno nel browser (`localStorage`): i ragazzi non devono chiudere la scheda né ripremere "Inizia la missione" (azzera tutto).

**Ordine obbligatorio:** se qualcuno prova ad aprire una prova saltando avanti, la pagina lo riporta alla prova o al gate giusto. Per i tuoi test aggiungi `?skip=1` all'indirizzo (es. `prova-4.html?skip=1`).

## Codici di sblocco (li dici tu a voce)

| Da → A | Codice |
|---|---|
| Prova 1 → 2 | **FIREWALL** |
| Prova 2 → 3 | **CRYPTO** |
| Prova 3 → 4 | **MALWARE** |
| Prova 4 → 5 | **ZERODAY** |

## Soluzioni

**Prova 1 — Cifrario di Cesare (3 fasi)**
1. shift 3: `FRGLFH` → **CODICE**; `DJHQWL VHJUHWL` → **AGENTI SEGRETI**
2. shift = lettere di "AGENZIA" = 7: `HSSHYTL` → **ALLARME**
3. codificare **SCUDO** con shift 3 → **VFXGR**
Codice: **7**

**Prova 2 — Password (3 fasi)**
1. Creare una password con almeno 16 caratteri, 2 maiuscole, 2 minuscole, 2 numeri, 2 simboli (verifica in tempo reale)
2. Quiz su `Nonna2026!`: 1 → C (10 caratteri), 2 → B (parola da dizionario), 3 → C (anno corrente), 4 → B (allungarla con caratteri casuali)
3. Ordinare 7 password, dalla più sicura: `X@7kPm#2vLq!9nRw`, `Stella!2026Mare@9`, `Matteo2001!`, `Cane2026!`, `qwerty99`, `123456`, `ciao`
Codice: **12**

**Prova 3 — Phishing (2 round da 4 email)**
- Round 1: Instagram `instag-ram.net` = PHISHING; Spotify `@spotify.com` = SICURA; Epic `epicgam3s.net` = PHISHING; Amazon `@amazon.it` = SICURA
- Round 2: Google `google-accounts.info` = PHISHING; `@accounts.google.com` = SICURA; scuola che chiede l'IBAN = PHISHING; `@ilpost.it` = SICURA
Codice: **39**

**Prova 4 — Tracce digitali (2 fasi)**
1. Dai metadati EXIF della foto: `42°51'59.4"N`, `12°54'54.3"E`
2. Google Maps → Street View → foto storica del **2011** → camion: **TORELLI DOTTORI** (accettato anche al contrario)
Codice: **84**
⚠️ **Prima di ogni laboratorio** controlla che la Street View 2011 mostri ancora il camion. Se non c'è più, cambia `4: 'TORELLI DOTTORI'` in `assets/js/scudo.js`.

**Prova 5 — Steganografia (2 fasi)**
1. Le cifre nascoste nel testo, in ordine: 22, 9, 18, 21, 19 → posizioni nell'alfabeto → **VIRUS**
2. Con gli slider di contrasto e luminosità sull'immagine appare la parola **SCUDO**
Codice: **51**
Nella fase 1 c'è il bottone **"💡 Mi serve un aiuto"**: spiega che i numeri nel testo sono posizioni dell'alfabeto (A = 1, B = 2…). Puoi dire ai ragazzi di usarlo solo dopo qualche minuto.

## Personalizzazioni rapide

Tutto in `assets/js/scudo.js`: `CODES` (codici cassaforte), `GATE_CODES` (codici di sblocco), `SOLUTIONS`.
Le soluzioni di prova 1 e prova 2 sono dentro i rispettivi file HTML (`SOL_1`, `SOL_2`, `SOL_3`, `SOL_ENCODE`, `CORRECT_ORDER`).

## Struttura

```
index.html  prova-1…5.html  gate-2…5.html  cassaforte.html  vittoria.html  README.md
assets/css/style.css   assets/js/scudo.js   assets/img/cantiere_nyx.jpg   assets/img/messaggio_nyx.png
```

## Note

- Funziona da computer e tablet. Serve la connessione solo per Google Maps (prova 4, fase 2).
- Durata consigliata: 90-120 minuti, con 2-3 minuti di debriefing dopo ogni prova.
