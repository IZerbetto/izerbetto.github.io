# 🔥 AGENZIA FENICE — Escape Room Cybersecurity

Escape room interattiva in HTML/CSS/JS per laboratori di cybersicurezza con bambini di **seconda media** (11-12 anni).

> **Confidenziale — solo per il formatore. Non condividere con i partecipanti!**

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
PROVA 1 — Crittografia (3 fasi: decifra × 2, trova shift, codifica) → codice 7
   ↓
GATE 2 (codice formatore: FIREWALL)
   ↓
PROVA 2 — Password (3 fasi: crea, quiz, ordina 7 password) → codice 12
   ↓
GATE 3 (codice formatore: CRYPTO)
   ↓
PROVA 3 — Phishing (2 round da 4 email: classifica SICURA/PHISHING) → codice 39
   ↓
GATE 4 (codice formatore: MALWARE)
   ↓
PROVA 4 — Tracce digitali (2 fasi: EXIF metadati foto → Street View) → codice 84
   ↓
GATE 5 (codice formatore: ZERODAY)
   ↓
PROVA 5 — Steganografia (2 fasi: leet speak → slider immagine) → codice 51
   ↓
CASSAFORTE FINALE (inserire 7-12-39-84-51)
   ↓
🎉 VITTORIA — Nyx arrestato dalla polizia 🚓
```

---

## 🔑 SOLUZIONI COMPLETE

### Codici formatore (tu li dai ai bambini tra una prova e l'altra)

| Da Prova → A Prova | Codice da dettare |
|---|---|
| 1 → 2 | **FIREWALL** |
| 2 → 3 | **CRYPTO** |
| 3 → 4 | **MALWARE** |
| 4 → 5 | **ZERODAY** |

---

### Soluzioni delle prove

#### 🔐 PROVA 1 — Crittografia (TRE fasi)

**FASE 1 — Decifra due messaggi (shift = 3, tabella fornita):**
- `FRGLFH` → **`CODICE`**
- `DJHQWL VHJUHWL` → **`AGENTI SEGRETI`**

**FASE 2 — Trova lo shift e decifra un terzo messaggio:**
- Indizio in pagina: *"usa come shift il numero di lettere del nome dell'agenzia"* → AGENZIA = **7 lettere**
- `HSSHYTL` con shift = 7 → **`ALLARME`**
- Nessuna tabella fornita: devono costruirla da soli o ragionare lettera per lettera

**FASE 3 — Codifica una parola con shift = 3:**
- Devono codificare **`FENICE`** → risposta corretta: **`IHQLFH`**
- Tabella di codifica fornita in pagina

- **Codice cassaforte rivelato:** `7`

---

#### 🔑 PROVA 2 — Password (TRE fasi)

**FASE 1 — Crea una password sicura:**
- Requisiti: almeno **16 caratteri**, almeno **2 maiuscole**, **2 minuscole**, **2 numeri**, **2 simboli**
- Il sito verifica in tempo reale con indicatori colorati
- La password è libera (non c'è una risposta unica): basta che rispetti tutti i criteri

**FASE 2 — Quiz sulla password `Nonna2024!` (4 domande):**
1. Quanti caratteri ha `Nonna2024!`? → **C) 10**
2. Qual è il problema principale di questa password? → **B) Contiene una parola di dizionario**
3. Quanto ci vuole a craccarla con un attacco dizionario? → **C) Pochi secondi**
4. Come si migliora? → **B) Aggiungere caratteri casuali e allungarla**

Le risposte errate si resettano dopo 3 secondi; quelle giuste restano bloccate verdi.

**FASE 3 — Ordina 7 password dalla più sicura alla più debole:**

| Posizione | Password | Motivo |
|---|---|---|
| 1 (più sicura) | `X@7kPm#2vLq!9nRw` | 16 char, mix completo, nessuna parola |
| 2 | `Stella!2024Mare@9` | 17 char, mix, ma contiene parole |
| 3 | `Matteo2001!` | Nome proprio + anno + simbolo |
| 4 | `Cane2024!` | Parola comune + anno |
| 5 | `qwerty99` | Sequenza tastiera + numeri |
| 6 | `123456` | Solo numeri sequenziali |
| 7 (più debole) | `ciao` | Parola comune, troppo corta |

Il feedback dice quante password sono nella posizione giusta (es. "Hai 4 su 7").

- **Codice cassaforte rivelato:** `12`

---

#### 🎣 PROVA 3 — Phishing (DUE round da 4 email)

Per ogni email i ragazzi devono scegliere **SICURA** o **PHISHING** e poi cliccare "Verifica il round". Devono classificarle tutte e 4 correttamente per passare al round successivo.

**ROUND 1:**

| Email | Tipo | Segnale principale |
|---|---|---|
| Notifica Instagram da `instag-ram.net` | PHISHING | Dominio falso con trattino |
| Conferma acquisto da `@spotify.com` | SICURA | Dominio ufficiale, niente link urgenti |
| Epic Games regala V-Bucks da `epicgam3s.net` | PHISHING | Nessuna azienda regala valuta di gioco |
| Conferma ordine Amazon da `@amazon.it` | SICURA | Mittente reale, niente richieste di dati |

**ROUND 2:**

| Email | Tipo | Segnale principale |
|---|---|---|
| Richiesta verifica Google da `google-accounts.info` | PHISHING | Google usa `accounts.google.com` |
| Codice di sicurezza da `@accounts.google.com` | SICURA | Dominio ufficiale Google |
| Scuola chiede IBAN per assicurazione | PHISHING | Le scuole non chiedono IBAN via email |
| Newsletter da `@ilpost.it` | SICURA | Mittente reale, niente richieste |

- **Codice cassaforte rivelato:** `39`

---

#### 🗺️ PROVA 4 — Tracce digitali (DUE fasi)

**FASE 1 — Analisi metadati EXIF:**
- In pagina è mostrata una foto di un cantiere (`cantiere_nyx.jpg`) con un bottone per scaricarla
- Cliccando "Analizza metadati EXIF" appare un pannello simulato con i dati della foto
- I ragazzi devono leggere le coordinate GPS nel pannello (non evidenziate, trovano tutto da soli):
  - **GPS Latitudine:** `42°51'59.4"N`
  - **GPS Longitudine:** `12°54'54.3"E`

**FASE 2 — Ricerca su Google Maps:**
- Le coordinate NON sono scritte in pagina: devono usare quelle trovate nella fase 1
- Devono aprire Google Maps, inserire le coordinate, attivare Street View e andare **alla Street View del 2011** (storica)
- In quella panoramica si vede un camion con il logo della ditta
- **Soluzione:** `TORELLI DOTTORI` (accettato anche nell'ordine inverso)
- **Codice cassaforte rivelato:** `84`

> ⚠️ **VERIFICA PRELIMINARE:** prima del laboratorio, apri Google Maps con le coordinate `42°51'59.4"N, 12°54'54.3"E`, attiva Street View e seleziona la panoramica storica del **2011**. Controlla che il camion "Torelli Dottori" sia visibile. Se la panoramica 2011 non è più disponibile, la soluzione è modificabile in `assets/js/fenice.js` (riga `4: 'TORELLI DOTTORI'`).

---

#### 🖼️ PROVA 5 — Steganografia (DUE fasi)

**FASE 1 — Decifra il messaggio leet:**
- I ragazzi leggono un messaggio intercettato in cui alcune lettere sono sostituite da numeri (non visivamente simili — è la posizione nell'alfabeto)
- I numeri nel testo, nell'ordine: **22, 9, 18, 21, 19**
- 22=V · 9=I · 18=R · 21=U · 19=S → **`VIRUS`**
- Attenzione: due cifre consecutive dentro una parola formano **un numero a due cifre** (es. `li22ello` contiene il numero 22, non "2" e "2")
- Nessun aiuto fornito in pagina: i ragazzi devono trovare il metodo da soli

**FASE 2 — Rivela la parola nell'immagine:**
- L'immagine `messaggio_nyx.png` ha una parola nascosta quasi invisibile
- Alzando contrasto e luminosità con gli slider la parola appare
- **Soluzione:** `FENICE`
- **Codice cassaforte rivelato:** `51`

---

### 🔓 Cassaforte finale
- **Combinazione corretta:** `7 - 12 - 39 - 84 - 51`

### 🎉 Pagina Vittoria
- Animazione SVG: la macchina della polizia arriva, arresta Nyx con lacrime e stelline, riparte
- Coriandoli colorati sul canvas
- Riepilogo delle abilità sbloccate

---

## 📋 Materiali per il laboratorio

1. **Sito web** (questa cartella, online su GitHub Pages o aperta in locale)
2. **Scheda missione** — stampane una per ogni squadra: ci scrivono i 5 codici trovati
3. **Questo README** — tienilo a portata di mano per dare i codici dei gate e sbloccare le prove in sincrono

---

## 💡 Suggerimenti per condurre il laboratorio

- **Squadre:** 3-4 ragazzi per squadra, ognuna su un proprio dispositivo
- **Durata stimata:** 90-120 minuti
- **Gate come sincronizzatori:** non dare il codice del gate finché tutte le squadre non hanno finito la prova — mantiene il ritmo e permette il debriefing di gruppo
- **Debriefing dopo ogni prova:** 2-3 minuti di discussione sul tema reale (es. dopo phishing → "vi è mai arrivata un'email così?")
- **Prova 4:** se sono bloccati su Street View, suggerisci "cercate di guardare le foto del passato, non quelle di oggi"
- **Prova 5 fase 1:** è la più difficile senza aiuti. Se una squadra è bloccata da molto, puoi suggerire "ogni lettera dell'alfabeto ha un numero — A è 1, B è 2..."

---

## 🛠️ Personalizzazioni rapide

Tutti i codici e le soluzioni principali sono in **un unico file**: `assets/js/fenice.js`

```js
CODES: {                  // ← codici cassaforte
  1: '7', 2: '12', 3: '39', 4: '84', 5: '51'
},
GATE_CODES: {             // ← codici formatore (gate)
  2: 'FIREWALL', 3: 'CRYPTO', 4: 'MALWARE', 5: 'ZERODAY'
},
SOLUTIONS: {              // ← soluzioni delle prove
  1: 'HELLO AGENTI',  // non usato — soluzioni reali sono in prova-1.html (SOL_1, SOL_2, SOL_3, SOL_ENCODE)
  2: null,            // verificata dinamicamente in prova-2.html
  3: 5,               // non usato direttamente — logica in prova-3.html
  4: 'TORELLI DOTTORI',
  5: 'FENICE'
}
```

---

## 📁 Struttura file

```
escape-room/
├── index.html              ← intro / briefing / reset progressi
├── prova-1.html            ← Crittografia: Cifrario di Cesare (3 fasi)
├── gate-2.html             ← Sblocco con codice formatore FIREWALL
├── prova-2.html            ← Password: crea / quiz / ordina (3 fasi)
├── gate-3.html             ← Sblocco con codice formatore CRYPTO
├── prova-3.html            ← Phishing: 2 round da 4 email
├── gate-4.html             ← Sblocco con codice formatore MALWARE
├── prova-4.html            ← Tracce digitali: EXIF + Street View (2 fasi)
├── gate-5.html             ← Sblocco con codice formatore ZERODAY
├── prova-5.html            ← Steganografia: leet speak + slider (2 fasi)
├── cassaforte.html         ← Inserimento 5 codici (7-12-39-84-51)
├── vittoria.html           ← Nyx arrestato + coriandoli
├── README.md               ← Questo file
└── assets/
    ├── css/style.css           ← Tema cyber dark
    ├── js/fenice.js            ← Logica condivisa + codici (modifica qui!)
    └── img/
        ├── messaggio_nyx.png   ← Immagine steganografica (prova 5)
        └── cantiere_nyx.jpg    ← Foto con EXIF GPS (prova 4)
```

---

## ❓ FAQ

**I ragazzi possono saltare una prova?**
No. Senza il codice formatore corretto non possono procedere al gate. Ma possono tornare alla prova precedente con il bottone "← Torna".

**Cosa succede se ricaricano una pagina?**
I progressi sono salvati nel browser (`localStorage`). Nella progress bar vedranno le prove completate ✓ e i codici trovati in fondo alla pagina.

**Come si resetta il gioco?**
Riapri `index.html` — il pulsante "Inizia missione" resetta automaticamente tutti i progressi.

**Funziona offline / senza internet?**
Quasi tutto sì. L'unica parte che richiede connessione è la **prova 4 fase 2** (Street View su Google Maps). Tutto il resto funziona anche senza rete.

**Funziona da tablet?**
Sì, il layout è responsive. Su mobile gli slider della prova 5 si spostano sotto l'immagine.

---

🔥 **Buon laboratorio!** 🔥
