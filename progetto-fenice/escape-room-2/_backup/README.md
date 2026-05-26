# 🔥 AGENZIA FENICE — Escape Room Cybersecurity

Escape room interattiva in HTML/CSS/JS per laboratori di cybersicurezza con bambini di **5ª elementare e 1ª-3ª media**.

> **Confidenziale — solo per la formatrice. Non condividere con i partecipanti!**

---

## 🚀 Come pubblicarla su GitHub Pages

1. Crea un nuovo repository su GitHub (es. `escape-room-fenice`)
2. Carica TUTTI i file di questa cartella nel repo (mantenendo la struttura `assets/...`)
3. Vai su **Settings → Pages**
4. Sotto "Source" seleziona `main` (o `master`) e cartella `/ (root)`
5. Salva. Dopo 1-2 minuti il sito sarà online a `https://TUOUSERNAME.github.io/NOMEREPO/`
6. Condividi quel link con i bambini → l'esperienza parte da `index.html`

---

## 🎯 Flusso del laboratorio

```
INDEX (briefing)
   ↓
PROVA 1 — Crittografia (2 messaggi da decifrare con tabella alfabeto) → codice 7
   ↓
GATE 2 (codice formatrice: FIREWALL)
   ↓
PROVA 2 — Password (esattamente 14 caratteri sicuri) → codice 12
   ↓
GATE 3 (codice formatrice: CRYPTO)
   ↓
PROVA 3 — Phishing (2 email truffaldine, in sequenza) → codice 39
   ↓
GATE 4 (codice formatrice: MALWARE)
   ↓
PROVA 4 — OSINT (coordinate + indizio camion) → codice 84
   ↓
GATE 5 (codice formatrice: ZERODAY)
   ↓
PROVA 5 — Steganografia (immagine + slider laterali) → codice 51
   ↓
CASSAFORTE FINALE (inserire 7-12-39-84-51)
   ↓
🎉 VITTORIA — Nyx arrestato dalla polizia 🚓
```

---

## 🔑 SOLUZIONI COMPLETE

### Codici formatrice (tu li dai ai bambini tra una prova e l'altra)

| Da Prova → A Prova | Codice da dettare |
|---|---|
| 1 → 2 | **FIREWALL** |
| 2 → 3 | **CRYPTO** |
| 3 → 4 | **MALWARE** |
| 4 → 5 | **ZERODAY** |

### Soluzioni delle prove

#### 🔐 PROVA 1 — Crittografia (DUE messaggi)
- **Tecnica:** Cifrario di Cesare con shift = 3 (già fornito ai bambini)
- **Tabella alfabeto** mostrata in pagina per facilitare la decifrazione manuale
- **Messaggio 1:** `FRGLFH` → soluzione: **`CODICE`**
- **Messaggio 2:** `DJHQWL VHJUHWL` → soluzione: **`AGENTI SEGRETI`**
- **Codice cassaforte rivelato:** `7` (solo dopo aver decifrato ENTRAMBI)

#### 🔑 PROVA 2 — Password (DUE STEP)

**STEP 1 — Crea una password sicura:**
- Compito: creare una password di **esattamente 14 caratteri** con: 1 maiuscola, 1 minuscola, 1 numero, 1 simbolo
- Esempio valido: `M!aPassw0rd99X` (14 caratteri)

**STEP 2 — Riordina 5 password dalla più sicura alla più debole:**
Le password presentate (in ordine casuale) sono:
- `M!aLuc3@2024#Pizza` — la più sicura (18 char, mix completo)
- `Estate!2024` — media-forte (11 char, parola+numeri+simbolo)
- `Marco1985` — media-debole (nome + anno)
- `pippo123` — debole (parola comune + 123)
- `12345` — debolissima (solo numeri sequenziali)

I bambini usano le frecce ⬆️⬇️ per spostare le password nell'ordine corretto.

- **Codice cassaforte rivelato:** `12` (solo dopo aver completato ENTRAMBI gli step)

#### 🎣 PROVA 3 — Phishing (DUE email da analizzare in sequenza)

**EMAIL 1 — Falsa email PayPal** (5 elementi sospetti):
1. Mittente `support@paypa1-secure.com` → "paypa**1**" con un UNO al posto della L
2. Oggetto `URGENTE: Account bloccato!!!` → urgenza fittizia con punti esclamativi
3. Saluto `Gentile cliente` → saluto generico, non personalizzato
4. Link `http://paypa1-security-check.ru` → dominio finto + .ru
5. Frase `Se non agisci entro 24 ore, il tuo account sarà eliminato` → minaccia con scadenza

Solo dopo aver completato la prima email si sblocca la seconda.

**EMAIL 2 — Falsa email Amazon** (5 elementi sospetti):
1. Mittente `premi-am4zon@offerte.shop` → 'am4zon' con il numero 4 + dominio .shop
2. Oggetto `🎉 CONGRATULAZIONI!! Hai vinto un iPhone!! 🎉` → vincita inaspettata
3. Errori di scrittura: `vinncitore`, `selezzionato`, `concorzo`, `utenteee`
4. Parola `GRATIS` → nessuno regala iPhone
5. URL `http://arnaz0n-pr3mi0.win/click-now` → numeri al posto delle lettere

- **Codice cassaforte rivelato:** `39` (solo dopo aver completato ENTRAMBE)

#### 🗺️ PROVA 4 — Tracce digitali (OSINT)
- **Solo coordinate** (niente bottone Google Maps): `42.866492, 12.915084`
- **Storytelling:** "Nyx ha lavorato in un cantiere di restauro castello insieme a suo zio. In zona è stato avvistato un **camion con il logo della ditta**."
- **I bambini devono:** copiare le coordinate in Google Maps, aprire Street View, trovare il camion in zona e leggere il nome della ditta scritto sopra
- **Soluzione:** `TORELLI DOTTORI`
- **Codice cassaforte rivelato:** `84`

> ⚠️ **VERIFICA PRELIMINARE:** prima del laboratorio, apri tu Google Maps con quelle coordinate e controlla che il camion con il logo "Torelli Dottori" sia ancora visibile su Street View. Se Street View è stato aggiornato, sostituisci la soluzione modificando il file `assets/js/fenice.js` (riga `SOLUTIONS: { ... 4: 'TORELLI DOTTORI', ... }`).

#### 🖼️ PROVA 5 — Steganografia
- **Immagine:** `assets/img/messaggio_nyx.png` (sfondo cyber blu scuro pieno di esagoni e numeri — niente parole decoy)
- **Tecnica:** la parola FENICE è scritta in un colore quasi identico allo sfondo. Si rivela alzando contrasto e luminosità.
- **Layout:** immagine grande con **slider laterali** (contrasto, luminosità, saturazione) per modifica live
- **Soluzione:** `FENICE`
- **Codice cassaforte rivelato:** `51`

### 🔓 Cassaforte finale
- **Combinazione corretta:** `7 - 12 - 39 - 84 - 51`

### 🎉 Pagina Vittoria
- **Animazione SVG dinamica** in 3 fasi (loop di 9 secondi):
  1. La macchina della polizia **arriva da sinistra** con sirene blu/rosse lampeggianti
  2. I poliziotti tengono Nyx ammanettato al centro, con lacrime e stelline di shock — appare il cartello **"ARRESTATO!"**
  3. Personaggi e macchina **ripartono verso destra**, portando Nyx via
- Coriandoli colorati continuano a scoppiare sullo sfondo
- Schermata con tutte le abilità sbloccate dai bambini

---

## 📋 Materiali per il laboratorio

1. **Sito web** (questa cartella, online su GitHub Pages)
2. **`SCHEDA_MISSIONE.pdf`** — stampala una per ogni bambino/squadra. Lì segneranno i 5 codici.
3. **Foglio formatrice** (questo README) — tienilo a portata di mano per dare i codici dei gate.

---

## 💡 Suggerimenti per condurre il laboratorio

- **Squadre:** consigliate 3-4 bambini per squadra, ognuna su un dispositivo
- **Durata stimata:** 75-100 minuti (la prova 1 ora richiede più tempo per la decifrazione manuale)
- **Debriefing:** dopo ogni prova, ferma il gruppo 2-3 minuti e parla del concetto reale (es. dopo phishing → "vi è mai arrivata un'email così?")
- **Ritmo:** i gate ti permettono di sincronizzare le squadre — non dare il codice del gate finché tutte non sono arrivate alla stessa prova
- **Aiutini per Prova 4:** se sono bloccati, suggerisci "cercate il camion vicino al castello, gira l'omino di Street View per la zona"

---

## 🛠️ Personalizzazioni rapide

Tutti i codici e le soluzioni principali sono in **un unico file**: `assets/js/fenice.js`

```js
CODES: {                  // ← codici cassaforte
  1: '7', 2: '12', 3: '39', 4: '84', 5: '51'
},
GATE_CODES: {             // ← codici formatrice (gate)
  2: 'FIREWALL', 3: 'CRYPTO', 4: 'MALWARE', 5: 'ZERODAY'
},
SOLUTIONS: {              // ← soluzioni delle prove
  1: 'HELLO AGENTI',  // (legacy, non usato — soluzioni reali sono in prova-1.html)
  2: null,
  3: 5,
  4: 'TORELLI DOTTORI',
  5: 'FENICE'
}
```

> **Nota:** le soluzioni della prova 1 (CODICE e AGENTI SEGRETI) sono dentro `prova-1.html` perché sono due distinte. Cerca le costanti `SOL_1` e `SOL_2` se vuoi cambiarle.

---

## 📁 Struttura file

```
escape-room/
├── index.html              ← intro / briefing
├── prova-1.html            ← Crittografia con tabella alfabeto + 2 messaggi
├── gate-2.html             ← Sblocco con codice formatrice
├── prova-2.html            ← Password sicura (14 caratteri)
├── gate-3.html
├── prova-3.html            ← Phishing: 2 email in sequenza
├── gate-4.html
├── prova-4.html            ← OSINT: coordinate + indizio camion
├── gate-5.html
├── prova-5.html            ← Steganografia con slider laterali
├── cassaforte.html         ← Inserimento 5 codici
├── vittoria.html           ← Nyx arrestato + coriandoli
├── SCHEDA_MISSIONE.pdf     ← Da stampare per i bambini
├── README.md               ← Questo file
└── assets/
    ├── css/style.css       ← Stile cyber/kid-friendly
    ├── js/fenice.js        ← Logica + codici (modifica qui!)
    └── img/messaggio_nyx.png  ← Immagine steganografica
```

---

## ❓ FAQ

**I bambini possono "saltare" un gate?**
No. Senza il codice formatrice corretto non possono procedere. Ma possono cliccare "← Torna alla Prova X" se vogliono rivedere qualcosa.

**Cosa succede se ricaricano una pagina?**
I progressi sono salvati nel browser (`localStorage`). Vedranno le prove già completate ✓ nella progress bar e i codici trovati nella scheda in basso.

**Come si resetta il gioco?**
Riapri `index.html` (la pagina iniziale) — il pulsante "Inizia missione" resetta automaticamente i progressi.

**Funziona da telefono/tablet?**
Sì, il design è responsive. La prova 5 (steganografia) ha un layout che si adatta: su mobile gli slider vanno sotto l'immagine.

---

🔥 **Buon laboratorio!** Se vuoi modificare qualcosa, scrivimi. 🔥
