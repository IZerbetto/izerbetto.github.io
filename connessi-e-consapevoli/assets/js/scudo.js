/* ============================================
   AGENZIA SCUDO - Logica condivisa
   ============================================ */

const SCUDO = {
  // Codici cassaforte (rivelati dopo ogni prova)
  CODES: {
    1: '7',
    2: '12',
    3: '39',
    4: '84',
    5: '51'
  },

  // Codici di chi conduce il laboratorio (per sbloccare i gate tra le prove)
  GATE_CODES: {
    2: 'FIREWALL',  // sblocca prova 2
    3: 'CRYPTO',    // sblocca prova 3
    4: 'MALWARE',   // sblocca prova 4
    5: 'ZERODAY'    // sblocca prova 5
  },

  // Soluzioni delle prove
  SOLUTIONS: {
    1: 'HELLO AGENTI',
    2: null, // password verificata dinamicamente
    3: 5,    // numero elementi sospetti
    4: 'TORELLI DOTTORI',
    5: 'SCUDO'
  },

  STORAGE_KEY: 'scudo_progress',

  // Inizializza progressi
  init() {
    if (!localStorage.getItem(this.STORAGE_KEY)) {
      this.reset();
    }
  },

  // Reset progressi
  reset() {
    const initial = {
      currentStep: 1,
      codesFound: {},
      provasCompleted: {}
    };
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(initial));
  },

  // Ottieni stato
  getProgress() {
    return JSON.parse(localStorage.getItem(this.STORAGE_KEY) || '{}');
  },

  // Salva codice trovato
  saveCode(provaNum, code) {
    const progress = this.getProgress();
    progress.codesFound[provaNum] = code;
    progress.provasCompleted[provaNum] = true;
    if (provaNum >= progress.currentStep) {
      progress.currentStep = parseInt(provaNum) + 1;
    }
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(progress));
  },

  // Verifica se prova è completata
  isCompleted(provaNum) {
    const progress = this.getProgress();
    return progress.provasCompleted && progress.provasCompleted[provaNum];
  },

  // Render progress bar
  renderProgressBar(currentNum) {
    const progress = this.getProgress();
    let html = '<div class="progress-bar">';
    for (let i = 1; i <= 5; i++) {
      let cls = 'progress-step';
      if (progress.provasCompleted && progress.provasCompleted[i]) cls += ' completed';
      else if (i == currentNum) cls += ' current';
      const icon = progress.provasCompleted && progress.provasCompleted[i] ? '✓' : i;
      html += `<div class="${cls}">${icon}</div>`;
    }
    html += '</div>';
    return html;
  },

  // Render registro codici trovati
  renderCodesTracker() {
    const progress = this.getProgress();
    const labels = ['Crittografia', 'Password', 'Phishing', 'Tracce', 'Stegano'];
    let html = '<div class="codes-tracker"><h3>📋 REGISTRO CODICI — Codici raccolti</h3><div class="codes-list">';
    for (let i = 1; i <= 5; i++) {
      const code = progress.codesFound && progress.codesFound[i];
      const cls = code ? 'code-slot' : 'code-slot empty';
      const val = code || '?';
      html += `<div class="${cls}"><span class="num">${i}. ${labels[i-1]}</span><span class="val">${val}</span></div>`;
    }
    html += '</div></div>';
    return html;
  },

  // Header standard
  renderHeader() {
    return `
      <div class="header">
        <div class="logo">
          <span class="logo-icon">🔥</span>
          AGENZIA SCUDO
          <span class="logo-icon">🔥</span>
        </div>
        <div class="subtitle">Cybersecurity Defense Unit</div>
      </div>
    `;
  },

  // Mostra messaggio
  showMessage(elementId, type, text) {
    const el = document.getElementById(elementId);
    if (!el) return;
    el.className = 'message ' + type;
    el.innerHTML = text;
    el.classList.remove('hidden');
  },

  // Segna un gate come superato
  passGate(n) {
    const p = this.getProgress();
    p.gatesPassed = p.gatesPassed || {};
    p.gatesPassed[n] = true;
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(p));
  },

  // Segna la cassaforte come aperta
  openSafe() {
    const p = this.getProgress();
    p.safeOpen = true;
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(p));
  },

  // Le prove vanno fatte una alla volta, in ordine.
  // kind: 'prova' | 'gate' | 'safe' | 'win'. Aggiungendo ?skip=1 all'indirizzo la guardia si salta (per i test del formatore).
  guard(kind, n) {
    if (new URLSearchParams(location.search).has('skip')) return;
    if (!localStorage.getItem(this.STORAGE_KEY)) this.reset();
    const p = this.getProgress();
    const done = i => p.provasCompleted && p.provasCompleted[i];
    const gate = i => p.gatesPassed && p.gatesPassed[i];
    let dest = null;
    if (kind === 'prova' && n > 1) {
      if (!done(n - 1)) dest = 'prova-' + (n - 1) + '.html';
      else if (!gate(n)) dest = 'gate-' + n + '.html';
    } else if (kind === 'gate') {
      if (!done(n - 1)) dest = 'prova-' + (n - 1) + '.html';
    } else if (kind === 'safe') {
      for (let i = 1; i <= 5; i++) if (!done(i)) { dest = 'prova-' + i + '.html'; break; }
    } else if (kind === 'win') {
      if (!p.safeOpen) dest = 'cassaforte.html';
    }
    if (dest) window.location.replace(dest);
  },

  // Naviga a pagina
  goTo(page) {
    window.location.href = page;
  }
};

// Inizializza quando carica
if (typeof window !== 'undefined') {
  window.addEventListener('DOMContentLoaded', () => SCUDO.init());
}
