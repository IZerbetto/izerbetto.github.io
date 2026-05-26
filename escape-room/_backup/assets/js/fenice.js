/* ============================================
   AGENZIA FENICE - Logica condivisa
   ============================================ */

const FENICE = {
  // Codici cassaforte (rivelati dopo ogni prova)
  CODES: {
    1: '7',
    2: '12',
    3: '39',
    4: '84',
    5: '51'
  },

  // Codici formatrice (per sbloccare i gate tra le prove)
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
    5: 'FENICE'
  },

  STORAGE_KEY: 'fenice_progress',

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

  // Render scheda codici trovati
  renderCodesTracker() {
    const progress = this.getProgress();
    const labels = ['Crittografia', 'Password', 'Phishing', 'Tracce', 'Stegano'];
    let html = '<div class="codes-tracker"><h3>📋 SCHEDA MISSIONE — Codici Raccolti</h3><div class="codes-list">';
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
          AGENZIA FENICE
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

  // Naviga a pagina
  goTo(page) {
    window.location.href = page;
  }
};

// Inizializza quando carica
if (typeof window !== 'undefined') {
  window.addEventListener('DOMContentLoaded', () => FENICE.init());
}
