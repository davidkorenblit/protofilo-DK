// script.js – Dynamic behavior for David's Library portfolio
// No external dependencies, pure vanilla ES6

// =====================
// Data Model (Extracted from the spec file)
// =====================
const books = [
  // Book 0 – Personal Autobiography
  {
    id: 0,
    title: { en: "The Missing Teammate", he: "הספר האישי" },
    subtitle: { en: "Personal Biography & Career Path", he: "ספר אישי – קריירה" },
    description: {
      en: "A warm autobiographical book describing the professional journey, passions, and achievements. (Content to be completed manually.)",
      he: "ספר חמים על הדרך המקצועית, תחומי העניין וההישגים. (תוכן יושלם ידנית)"
    },
    tech: [],
    demo: "",
    repo: "",
    type: "book"
  },
  // Book 1 – AIAC – NBA ML & Causal Inference
  {
    id: 1,
    title: { en: "AIAC – NBA Analytics", he: "AIAC – NBA ML" },
    subtitle: { en: "Causal Inference for Basketball", he: "אינפריינס סיבתי לכדורסל" },
    description: {
      en: "A system that detects a fatigued NBA coach, improving opponent‑run stop‑rate by 32.9% (90‑second window) and adding ~0.79 points per top‑5% shot.",
      he: "מערכת המזהה מאמן עייף, משפרת עצירת ריצות יריב ב‑32.9% (חלון של 90 שניות) ותוספת של ~0.79 נקודות לספוטי הקצה (Top 5%)."
    },
    tech: ["Python", "PyTorch", "Causal Inference", "NBA API", "Streamlit"],
    demo: "https://davidkorenblit.github.io/nba-ai-coach-assistant/",
    repo: "https://github.com/davidkorenblit/nba-ai-coach-assistant",
    type: "book"
  },
  // Book 2 – WSL Data Hub
  {
    id: 2,
    title: { en: "WSL Data Hub", he: "WSL Data Hub" },
    subtitle: { en: "Sports Data Engineering", he: "אינטגרציית נתוני ספורט" },
    description: {
      en: "A data‑engineering pipeline for English women’s football, providing analytics and visualisations.",
      he: "צינור נתונים לניתוח ליגת נשים בכדורגל האנגלית, כולל ויזואליזציות אינטראקטיביות."
    },
    tech: ["Data Engineering", "Python", "Pandas", "Sports Analytics", "Interactive Viz"],
    demo: "https://davidkorenblit.github.io/wsl-data-hub/",
    repo: "https://github.com/davidkorenblit/wsl-data-hub",
    type: "book"
  },
  // Book 3 – Azure AI RAG Agent
  {
    id: 3,
    title: { en: "Azure AI RAG Agent", he: "Azure AI RAG Agent" },
    subtitle: { en: "Enterprise Search & Chatbot", he: "חיפוש ארגוני וצ׳טבוט" },
    description: {
      en: "Secure, production‑ready chatbot with automatic document indexing using Azure AI Search, Bicep IaC and Managed Identity.",
      he: "צ׳טבוט מאובטח עם אינדוקס אוטומטי של מסמכים במנוע Azure AI Search, תשתית כקוד (Bicep) ו‑Managed Identity."
    },
    tech: ["Azure AI Search", "RAG", "Bicep", "Managed Identity", "Enterprise AI"],
    demo: "",
    repo: "https://github.com/davidkorenblit/lab-for-tecktika",
    type: "book"
  },
  // Book 4 – C++ Physics Engine
  {
    id: 4,
    title: { en: "C++ Physics Engine", he: "C++ Physics Engine" },
    subtitle: { en: "2D Parking Simulator", he: "סימולטור חניה דו‑ממדי" },
    description: {
      en: "Accurate 2‑D vehicle simulation built with pure C++ and Box2D, showcasing modular OOP architecture and RAII memory management.",
      he: "סימולציית רכב דו‑ממדית מדויקת ב‑C++ טהור עם Box2D, מציגה ארכיטקטורה מודולרית ו‑RAII."
    },
    tech: ["C++", "Box2D", "Physics Simulation", "RAII", "OOP Architecture"],
    demo: "",
    repo: "https://github.com/davidkorenblit/OOP2_Project",
    type: "book"
  }
];

// Lab notebooks – displayed in the "Lab" shelf
const labNotebooks = [
  {
    id: "a",
    title: { en: "Chess ML Predictor", he: "Chess ML Predictor" },
    tech: ["Machine Learning", "Random Forest", "Chess.com API"],
    repo: "https://github.com/davidkorenblit/Chess"
  },
  {
    id: "b",
    title: { en: "FPL Assistant", he: "FPL Assistant" },
    tech: ["Python", "Optimization Algorithms", "Sports Analytics"],
    repo: "https://github.com/davidkorenblit/fpl_assistant"
  },
  {
    id: "c",
    title: { en: "SemanticHoops", he: "SemanticHoops" },
    tech: ["Computer Vision", "CLIP", "Vector DB", "Video Search"],
    repo: "https://github.com/davidkorenblit/SemanticHoops"
  },
  {
    id: "d",
    title: { en: "DailyBite Nutrition Tracker", he: "DailyBite" },
    tech: ["Full‑Stack", "Gemini AI", "NLP Context", "Production Ready"],
    repo: "https://github.com/davidkorenblit/nutrition-tracker"
  },
  {
    id: "e",
    title: { en: "Tech News AI Assistant", he: "Tech News AI Assistant" },
    tech: ["NLP", "BART", "Gemini", "Automated Scraping"],
    repo: "https://github.com/davidkorenblit/TechNewsAIAssistant"
  }
];

// =====================
// Utility Functions
// =====================
function $(selector) { return document.querySelector(selector); }
function $$(selector) { return Array.from(document.querySelectorAll(selector)); }

let currentLang = "en"; // default language

function setLanguage(lang) {
  currentLang = lang;
  // Update all elements with data‑en / data‑he attributes
  $$("[data-en]").forEach(el => {
    el.textContent = el.getAttribute(`data-${lang}`);
  });
  // Highlight active button
  $$(".lang-switcher button").forEach(btn => btn.classList.toggle("active", btn.id === `lang-${lang}`));
}

function renderBooks() {
  const bookshelf = $('#bookshelf');
  bookshelf.innerHTML = '';
  books.forEach(book => {
    const div = document.createElement('div');
    div.className = 'book';
    div.dataset.id = book.id;
    div.innerHTML = `
      <div class="cover">
        <h3 data-en="${book.title.en}" data-he="${book.title.he}"></h3>
        <p data-en="${book.subtitle.en}" data-he="${book.subtitle.he}"></p>
      </div>
    `;
    div.addEventListener('click', () => openModal(book));
    bookshelf.appendChild(div);
  });
}

function renderLab() {
  const labShelf = $('#lab-shelf');
  labShelf.innerHTML = '';
  labNotebooks.forEach(nb => {
    const div = document.createElement('div');
    div.className = 'book';
    div.dataset.id = nb.id;
    div.innerHTML = `
      <div class="cover">
        <h3 data-en="${nb.title.en}" data-he="${nb.title.he}"></h3>
      </div>
    `;
    div.addEventListener('click', () => openLabModal(nb));
    labShelf.appendChild(div);
  });
}

function openModal(book) {
  $('#modal-title').textContent = book.title[currentLang];
  $('#modal-description').textContent = book.description[currentLang];
  const techList = $('#modal-tech');
  techList.innerHTML = '';
  book.tech.forEach(t => {
    const li = document.createElement('li');
    li.textContent = t;
    techList.appendChild(li);
  });
  if (book.demo) {
    $('#modal-demo').href = book.demo;
    $('#modal-demo').style.display = 'inline-block';
  } else {
    $('#modal-demo').style.display = 'none';
  }
  if (book.repo) {
    $('#modal-repo').href = book.repo;
    $('#modal-repo').style.display = 'inline-block';
  } else {
    $('#modal-repo').style.display = 'none';
  }
  $('#book-modal').removeAttribute('hidden');
  $('#book-modal').setAttribute('aria-hidden', 'false');
}

function openLabModal(notebook) {
  // Re‑use the same modal layout – left side only for description (none needed)
  $('#modal-title').textContent = notebook.title[currentLang];
  $('#modal-description').textContent = '';
  const techList = $('#modal-tech');
  techList.innerHTML = '';
  notebook.tech.forEach(t => {
    const li = document.createElement('li');
    li.textContent = t;
    techList.appendChild(li);
  });
  $('#modal-demo').style.display = 'none';
  if (notebook.repo) {
    $('#modal-repo').href = notebook.repo;
    $('#modal-repo').style.display = 'inline-block';
  } else {
    $('#modal-repo').style.display = 'none';
  }
  $('#book-modal').removeAttribute('hidden');
  $('#book-modal').setAttribute('aria-hidden', 'false');
}

function closeModal() {
  $('#book-modal').setAttribute('hidden', '');
  $('#book-modal').setAttribute('aria-hidden', 'true');
}

function initNavigation() {
  $$(".nav a").forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const target = link.dataset.section;
      // Hide all sections
      $$("section.shelf-section").forEach(sec => sec.setAttribute('hidden', ''));
      // Show selected
      $$(target).forEach(s => s.removeAttribute('hidden'));
    });
  });
}

function init() {
  setLanguage(currentLang);
  renderBooks();
  renderLab();
  initNavigation();
  // Language buttons
  $('#lang-en').addEventListener('click', () => setLanguage('en'));
  $('#lang-he').addEventListener('click', () => setLanguage('he'));
  // Modal close
  $('.modal-close').addEventListener('click', closeModal);
  // Click outside modal content to close
  $('#book-modal').addEventListener('click', e => {
    if (e.target === $('#book-modal')) closeModal();
  });
  // Footer year
  $('#current-year').textContent = new Date().getFullYear();
}

document.addEventListener('DOMContentLoaded', init);
