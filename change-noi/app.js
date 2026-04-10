/* Mobile-first, no dependencies */

const categories = [
  {
    title: "Rompighiaccio",
    description: "Domande leggere per iniziare",
    questions: [
      {
        text: "Tè alla pesca o tè al limone?",
        extra:
          "Difendi la tua scelta come se fosse una verità scientifica assoluta. Alla fine votate chi ha convinto di più.",
      },
      {
        text: "Se fossi un panino, cosa ci sarebbe dentro e perché?",
        extra: "Scegliete il panino più strano del tavolo.",
      },
      {
        text: "Qual è il talento più inutile che hai?",
        extra: "Alla fine votate quello più assurdo.",
      },
      {
        text: "Mare o montagna?",
        extra:
          "Convincete gli altri. Provate ad arrivare a una scelta comune di gruppo.",
      },
    ],
  },
  {
    title: "Personali leggere",
    description: "Per iniziare a conoscersi meglio",
    questions: [
      { text: "Qual è la vacanza più bella che hai fatto e perché?", extra: "" },
      {
        text: "Qual è una cosa che ti appassiona davvero tanto?",
        extra: "Se qualcuno condivide la stessa passione, fatelo notare.",
      },
      { text: "Come ti descriverebbe un tuo amico stretto?", extra: "" },
      {
        text: "Qual è una cosa che vuoi assolutamente fare nei prossimi 2 anni?",
        extra: "",
      },
    ],
  },
  {
    title: "Più profonde",
    description: "Per andare un po’ più in profondità",
    questions: [
      { text: "Qual è un momento che ti ha fatto crescere?", extra: "" },
      { text: "Quando ti senti davvero te stesso/a?", extra: "" },
      { text: "Qual è una cosa che ti dà energia nella vita?", extra: "" },
    ],
  },
  {
    title: "Circolo NOI",
    description: "Il tuo rapporto con il circolo",
    questions: [
      { text: "Che rapporto hai con il tuo circolo?", extra: "" },
      {
        text: "Qual è il ricordo più bello legato al circolo NOI?",
        extra: "",
      },
      { text: "Cosa ti farebbe venire voglia di viverlo di più?", extra: "" },
      {
        text: "Se potessi cambiare una cosa del tuo circolo, quale sarebbe?",
        extra: "Provate a trovare una risposta comune del tavolo.",
      },
    ],
  },
  {
    title: "Visione futuro",
    description: "Immaginare e costruire insieme",
    questions: [
      { text: "Come immagini un circolo ideale per i giovani?", extra: "" },
      { text: "Perché secondo voi oggi i giovani partecipano poco?", extra: "" },
      {
        text: "Che tipo di attività funzionerebbero davvero?",
        extra: "Scegliete le 2 idee migliori del tavolo.",
      },
    ],
  },
  {
    title: "Domanda finale",
    description: "Uno sguardo al futuro del progetto",
    questions: [
      {
        text: "Se questo progetto funzionasse alla grande, cosa dovrebbe succedere?",
        extra: "Rispondono tutti, con calma.",
      },
    ],
  },
];

const RULES = [
  "Parlano tutti",
  "Interventi brevi (~1 minuto)",
  "Passare il microfono",
  "Ascolto e rispetto",
  "Libertà di saltare una domanda",
];

const el = {
  card: document.getElementById("card"),
  crumb: document.getElementById("crumb"),
  progress: document.getElementById("progress"),
  title: document.getElementById("title"),
  subtitle: document.getElementById("subtitle"),
  content: document.getElementById("content"),
  backBtn: document.getElementById("backBtn"),
  nextBtn: document.getElementById("nextBtn"),
};

function buildSteps() {
  const steps = [];
  steps.push({ type: "intro" });

  let qNumber = 0;
  for (let c = 0; c < categories.length; c += 1) {
    steps.push({ type: "category", categoryIndex: c });
    for (let q = 0; q < categories[c].questions.length; q += 1) {
      qNumber += 1;
      steps.push({
        type: "question",
        categoryIndex: c,
        questionIndex: q,
        qNumber,
      });
    }
  }

  steps.push({ type: "done" });
  return { steps, totalQuestions: qNumber };
}

const { steps, totalQuestions } = buildSteps();
let stepIndex = 0;

function setNav({ backVisible, nextVisible, nextLabel, nextFull, backDisabled }) {
  el.backBtn.style.display = backVisible ? "inline-flex" : "none";
  el.nextBtn.style.display = nextVisible ? "inline-flex" : "none";
  el.nextBtn.textContent = nextLabel ?? "Avanti";
  el.backBtn.disabled = Boolean(backDisabled);
  // el.nextBtn.classList.toggle("full", Boolean(nextFull));
  // el.backBtn.classList.toggle("full", false);
}

function escapeHtml(s) {
  return String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function renderIntro() {
  el.crumb.textContent = "";
  el.progress.textContent = "";
  el.title.textContent = "Benvenuti!";
  el.subtitle.textContent = "Regole del gioco";
  el.content.innerHTML = `
    <ul class="rules">
      ${RULES.map((r) => `<li>${escapeHtml(r)}</li>`).join("")}
    </ul>
  `;

  setNav({
    backVisible: false,
    nextVisible: true,
    nextLabel: "Inizia",
    nextFull: true,
    backDisabled: true,
  });
}

function renderCategory(categoryIndex) {
  const cat = categories[categoryIndex];
  el.crumb.textContent = "Categoria";
  el.progress.textContent = "";
  el.title.textContent = cat.title;
  el.subtitle.textContent = cat.description || "";
  el.content.innerHTML = "";

  setNav({
    backVisible: true,
    nextVisible: true,
    nextLabel: "Continua",
    nextFull: true,
    backDisabled: stepIndex === 0,
  });
}

function renderQuestion(categoryIndex, questionIndex, qNumber) {
  const cat = categories[categoryIndex];
  const q = cat.questions[questionIndex];

  el.crumb.textContent = cat.title;
  el.progress.textContent = `Domanda ${qNumber} di ${totalQuestions}`;
  el.title.textContent = "";
  el.subtitle.textContent = "";

  const extra = (q.extra || "").trim();
  el.content.innerHTML = `
    <div class="question">${escapeHtml(q.text)}</div>
    ${extra
      ? `<div class="extra"><div class="label">Extra</div><div>${escapeHtml(
        extra
      )}</div></div>`
      : ""
    }
  `;

  setNav({
    backVisible: true,
    nextVisible: true,
    nextLabel: "Avanti",
    nextFull: false,
    backDisabled: stepIndex === 0,
  });
}

function renderDone() {
  el.crumb.textContent = "";
  el.progress.textContent = "";
  el.title.textContent = "Grazie!";
  el.subtitle.textContent = "Condividete una cosa che vi ha colpito";
  el.content.innerHTML = "";

  setNav({
    backVisible: false,
    nextVisible: true,
    nextLabel: "Ricomincia",
    nextFull: true,
    backDisabled: false,
  });
}

function animateSwap(renderFn) {
  if (!animateSwap.hasRendered) {
    renderFn();
    el.card.classList.remove("anim-out");
    el.card.classList.add("anim-in");
    animateSwap.hasRendered = true;
    return;
  }

  el.card.classList.remove("anim-in");
  el.card.classList.add("anim-out");

  const prefersReduced =
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const delay = prefersReduced ? 0 : 150;

  window.setTimeout(() => {
    renderFn();
    el.card.classList.remove("anim-out");
    el.card.classList.add("anim-in");
  }, delay);
}
animateSwap.hasRendered = false;

function render() {
  const step = steps[stepIndex];
  if (!step) return;

  animateSwap(() => {
    if (step.type === "intro") renderIntro();
    else if (step.type === "category") renderCategory(step.categoryIndex);
    else if (step.type === "question")
      renderQuestion(step.categoryIndex, step.questionIndex, step.qNumber);
    else renderDone();
  });
}

function next() {
  const step = steps[stepIndex];
  if (!step) return;

  if (step.type === "done") {
    stepIndex = 0;
    render();
    return;
  }

  stepIndex = Math.min(steps.length - 1, stepIndex + 1);
  render();
}

function back() {
  stepIndex = Math.max(0, stepIndex - 1);
  render();
}

el.nextBtn.addEventListener("click", next);
el.backBtn.addEventListener("click", back);

window.addEventListener("keydown", (ev) => {
  if (ev.key === "ArrowRight") next();
  if (ev.key === "ArrowLeft") back();
  if (ev.key === "Enter") {
    const active = document.activeElement;
    const isButton = active && active.tagName === "BUTTON";
    if (!isButton) next();
  }
});

render();
