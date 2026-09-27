/* =================================================================
   David's Library – Grand 3D Study & Portfolio Engine
   Pure Vanilla ES6+. Zero dependencies.
   ================================================================= */

// =====================================================================
// DATA — PULLED DIRECTLY FROM SPECIFICATION
// =====================================================================

const FEATURED_BOOKS = [
  {
    id: 0,
    cover: 'mahogany',
    volume: 'VOL. 0',
    title: {
      en: 'The Missing Teammate',
      he: 'החבר שחסר לך בצוות'
    },
    pitch: {
      en: '5 years in Computer Science allowed me to taste many worlds and fall deeply in love with one (or one and a half) of them — and also understand a bit about my own limits and abilities.',
      he: '5 שנים במדעי המחשב איפשרו לי לטעום מלא מעט עולמות ולהתאהב באחד (או אחד וחצי מהם) בצורה קשה, וגם להבין קצת על המגבלות והיכולות שלי.'
    },
    tech: ['Problem Solving', 'Data Systems', 'Algorithms', 'Architecture'],
    demo: '',
    repo: '',
    isMemoir: true
  },
  {
    id: 1,
    cover: 'oxblood',
    volume: 'VOL. I',
    title: {
      en: 'AIAC – NBA Analytics',
      he: 'AIAC – NBA Analytics'
    },
    pitch: {
      en: 'A system that tells the coach he fell asleep on the job — effective at a 32.9% improvement in stopping opponent runs (90s window), adding ~0.79 points/possession in top-5% spots, and a strategic value of ~3.2 wins/season.',
      he: 'מערכת שתדע לספר למאמן שהוא נרדם בעמידה – ואפקטיבית בשיפור של 32.9% בעצירת ריצות יריב (בחלון של 90 שניות), תוספת של כ-0.79 נקודות לפוזישן בספוטי הקצה, ושווי ערך של כ-3.2 ניצחונות בעונה.'
    },
    tech: ['Python', 'PyTorch', 'Causal Inference', 'NBA API', 'Streamlit'],
    demo: 'https://davidkorenblit.github.io/nba-ai-coach-assistant/',
    repo: 'https://github.com/davidkorenblit/nba-ai-coach-assistant'
  },
  {
    id: 2,
    cover: 'navy',
    volume: 'VOL. II',
    title: {
      en: 'WSL Data Hub',
      he: 'WSL Data Hub'
    },
    pitch: {
      en: 'Data-engineering pipelines and analytical forecasts for the English Women\'s Super League — turning scattered, partial data into interactive visual insights.',
      he: 'צינורות נתונים ותחזיות אנליטיות לליגת הנשים האנגלית בכדורגל – הפיכת דאטא חלקי ומפוזר לפייפליינים חיים וויזואליזציות אינטראקטיביות.'
    },
    tech: ['Data Engineering', 'Python', 'Pandas', 'Sports Analytics', 'Interactive Viz'],
    demo: 'https://davidkorenblit.github.io/wsl-data-hub/',
    repo: 'https://github.com/davidkorenblit/wsl-data-hub'
  },
  {
    id: 3,
    cover: 'forest',
    volume: 'VOL. III',
    title: {
      en: 'Azure AI RAG Agent',
      he: 'Azure AI RAG Agent'
    },
    pitch: {
      en: 'Enterprise-grade chatbot and automatic document indexer. Production-ready architecture with Azure Managed Identity, Bicep IaC, and Azure AI Search for hybrid semantic retrieval.',
      he: 'מערכת צ\'אטבוט ואינדוקס אוטומטי למסמכים ארגוניים. ארכיטקטורה מאובטחת מבוססת Managed Identity ב-Azure, תשתית כקוד (Bicep) ו-Azure AI Search לחיפוש היברידי.'
    },
    tech: ['Azure AI Search', 'RAG', 'Bicep (IaC)', 'Managed Identity', 'Enterprise AI'],
    demo: '',
    repo: 'https://github.com/davidkorenblit/lab-for-tecktika'
  },
  {
    id: 4,
    cover: 'cognac',
    volume: 'VOL. IV',
    title: {
      en: 'C++ Physics Engine',
      he: 'C++ Physics Engine'
    },
    pitch: {
      en: 'Precise 2D vehicle physics simulation in pure C++. Demonstrates decoupled manager architecture, Box2D integration, and strict RAII resource safety.',
      he: 'סימולציית רכב דו-ממדית מדויקת ב-C++ טהור. ארכיטקטורה מודולרית (Decoupled Managers), מנוע Box2D וניהול זיכרון קפדני (RAII).'
    },
    tech: ['C++', 'Box2D', 'Physics Simulation', 'RAII', 'OOP Architecture'],
    demo: '',
    repo: 'https://github.com/davidkorenblit/OOP2_Project'
  }
];

const LAB_NOTEBOOKS = [
  {
    id: 'lab-1',
    volume: 'NOTEBOOK A',
    title: { en: 'Chess ML Predictor', he: 'Chess ML Predictor' },
    pitch: {
      en: 'Machine learning model predicting chess match outcomes from historical Chess.com game archives.',
      he: 'מודל למידת מכונה לחיזוי תוצאות משחקי שחמט על בסיס דאטה היסטורי מ-Chess.com.'
    },
    tech: ['Machine Learning', 'Random Forest', 'Chess.com API'],
    repo: 'https://github.com/davidkorenblit/Chess',
    status: 'In Progress'
  },
  {
    id: 'lab-2',
    volume: 'NOTEBOOK B',
    title: { en: 'FPL Assistant', he: 'FPL Assistant' },
    pitch: {
      en: 'Fantasy Premier League optimization suite: player momentum prediction algorithms and optimal captain recommendations.',
      he: 'מערכת לניתוח FPL – אלגוריתמי חיזוי מומנטום שחקנים והמלצות קפטן אופטימליות.'
    },
    tech: ['Python', 'Optimization', 'Sports Analytics'],
    repo: 'https://github.com/davidkorenblit/fpl_assistant',
    status: 'In Progress'
  },
  {
    id: 'lab-3',
    volume: 'NOTEBOOK C',
    title: { en: 'Semantic Hoops', he: 'Semantic Hoops' },
    pitch: {
      en: 'Multimodal semantic video search for sports plays using Computer Vision, CLIP embeddings, and vector databases.',
      he: 'מנוע חיפוש סמנטי לווידאו בספורט – ראייה ממוחשבת, מודל מולטי-מודאלי CLIP ומסד נתונים וקטורי.'
    },
    tech: ['Computer Vision', 'CLIP', 'Vector DB', 'Video Search'],
    repo: 'https://github.com/davidkorenblit/SemanticHoops',
    status: 'Research'
  },
  {
    id: 'lab-4',
    volume: 'NOTEBOOK D',
    title: { en: 'DailyBite Nutrition', he: 'DailyBite Nutrition' },
    pitch: {
      en: 'Full-stack platform using Gemini AI to parse context from clinical nutrition plans and generate dynamic daily goals.',
      he: 'פלטפורמה המשתמשת ב-Gemini AI להבנת קונטקסט של המלצות תזונאים ותרגומן ליעדים יומיים דינמיים.'
    },
    tech: ['Full-Stack', 'Gemini AI', 'NLP Context', 'Production Ready'],
    repo: 'https://github.com/davidkorenblit/nutrition-tracker',
    status: 'Finishing'
  },
  {
    id: 'lab-5',
    volume: 'NOTEBOOK E',
    title: { en: 'Tech News AI', he: 'Tech News AI' },
    pitch: {
      en: 'Autonomous pipeline for scraping, categorizing, and summarizing tech industry research articles using NLP models.',
      he: 'מערכת אוטונומית לאיסוף, סיווג ותקצור מאמרי טכנולוגיה וחדשות באמצעות NLP.'
    },
    tech: ['NLP', 'BART', 'Gemini', 'Scraping'],
    repo: 'https://github.com/davidkorenblit/TechNewsAIAssistant',
    status: 'Upgrading'
  }
];

// =====================================================================
// STATE & LANGUAGE
// =====================================================================
let currentLang = 'en';

function setLanguage(lang) {
  currentLang = lang;

  document.documentElement.lang = lang === 'he' ? 'he' : 'en';
  document.documentElement.dir  = lang === 'he' ? 'rtl' : 'ltr';

  const btnEn = document.getElementById('btn-lang-en');
  const btnHe = document.getElementById('btn-lang-he');
  if (btnEn) btnEn.classList.toggle('active', lang === 'en');
  if (btnHe) btnHe.classList.toggle('active', lang === 'he');

  // Update static localized nodes
  document.querySelectorAll('[data-en]').forEach(el => {
    const text = el.getAttribute('data-' + lang);
    if (text) {
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.placeholder = text;
      } else {
        el.textContent = text;
      }
    }
  });

  // Re-render shelves
  renderFeaturedBooks();
  renderLabNotebooks();
}

// =====================================================================
// RENDER: FEATURED 3D SHELF
// =====================================================================
function renderFeaturedBooks() {
  const shelf = document.getElementById('featured-shelf');
  if (!shelf) return;
  shelf.innerHTML = '';

  FEATURED_BOOKS.forEach((book, index) => {
    const bookEl = document.createElement('div');
    bookEl.className = 'book-3d' + (index === FEATURED_BOOKS.length - 1 ? ' leaning-book' : '');
    bookEl.dataset.cover = book.cover;
    bookEl.setAttribute('role', 'article');
    bookEl.setAttribute('tabindex', '0');

    const titleText = book.title[currentLang];
    const pitchText = book.pitch[currentLang];
    const techChips = book.tech.map(t => `<span class="tech-chip">${t}</span>`).join('');

    // Actions block: direct 1-click links
    let actionsHTML = '';
    if (book.isMemoir) {
      const memoirLabel = currentLang === 'he' ? '📖 קרא בארכיון' : '📖 Read Memoir';
      actionsHTML = `<a href="#study-desk" class="btn-direct-demo">${memoirLabel}</a>`;
    } else {
      const demoBtn = book.demo
        ? `<a href="${book.demo}" target="_blank" rel="noopener" class="btn-direct-demo">🚀 ${currentLang === 'he' ? 'הדגמה חיה ↗' : 'Live Demo ↗'}</a>`
        : '';
      const repoBtn = book.repo
        ? `<a href="${book.repo}" target="_blank" rel="noopener" class="btn-direct-repo">💻 ${currentLang === 'he' ? 'קוד מקור ↗' : 'GitHub ↗'}</a>`
        : '';
      actionsHTML = `<div class="dossier-actions">${demoBtn}${repoBtn}</div>`;
    }

    bookEl.innerHTML = `
      <!-- 3D Book Spine -->
      <div class="book-spine" aria-label="${titleText}">
        <div class="silk-ribbon-tag"></div>
        <div class="spine-band"></div>
        <div class="spine-volume">${book.volume}</div>
        <div class="spine-title-wrap">
          <span class="spine-title">${titleText}</span>
        </div>
        <div class="spine-band"></div>
      </div>

      <!-- Floating Archival Parchment Dossier (Instant 1-Click Access) -->
      <div class="book-dossier" role="region" aria-label="Book summary">
        <div class="dossier-header">
          <span class="dossier-badge">${book.volume}</span>
          <span class="dossier-badge">${book.cover.toUpperCase()}</span>
        </div>
        <h3 class="dossier-title">${titleText}</h3>
        <p class="dossier-pitch">${pitchText}</p>
        <div class="dossier-tech">${techChips}</div>
        ${actionsHTML}
      </div>
    `;

    // Direct click on book: if it has a demo, launch it immediately! If memoir, scroll to desk.
    bookEl.addEventListener('click', (e) => {
      // Don't intercept if clicking directly on a button/link inside the dossier
      if (e.target.closest('a')) return;

      if (book.isMemoir) {
        document.getElementById('study-desk')?.scrollIntoView({ behavior: 'smooth' });
      } else if (book.demo) {
        window.open(book.demo, '_blank', 'noopener');
      } else if (book.repo) {
        window.open(book.repo, '_blank', 'noopener');
      }
    });

    shelf.appendChild(bookEl);
  });
}

// =====================================================================
// RENDER: LAB NOTEBOOKS SHELF
// =====================================================================
function renderLabNotebooks() {
  const shelf = document.getElementById('lab-shelf');
  if (!shelf) return;
  shelf.innerHTML = '';

  LAB_NOTEBOOKS.forEach(nb => {
    const nbEl = document.createElement('div');
    nbEl.className = 'book-3d';
    nbEl.setAttribute('role', 'article');
    nbEl.setAttribute('tabindex', '0');

    const titleText = nb.title[currentLang];
    const pitchText = nb.pitch[currentLang];
    const techChips = nb.tech.map(t => `<span class="tech-chip">${t}</span>`).join('');
    const repoLabel = currentLang === 'he' ? 'קוד מקור ב-GitHub ↗' : 'View Source on GitHub ↗';

    nbEl.innerHTML = `
      <div class="book-spine" aria-label="${titleText}">
        <div class="notebook-stitch"></div>
        <div class="spine-band"></div>
        <div class="notebook-seal">${nb.status}</div>
        <div class="spine-title-wrap">
          <span class="spine-title">${titleText}</span>
        </div>
        <div class="spine-band"></div>
      </div>

      <div class="book-dossier" role="region" aria-label="Research notebook details">
        <div class="dossier-header">
          <span class="dossier-badge">${nb.volume}</span>
          <span class="notebook-seal">${nb.status}</span>
        </div>
        <h3 class="dossier-title">${titleText}</h3>
        <p class="dossier-pitch">${pitchText}</p>
        <div class="dossier-tech">${techChips}</div>
        <div class="dossier-actions">
          <a href="${nb.repo}" target="_blank" rel="noopener" class="btn-direct-demo" style="flex: 1;">
            💻 ${repoLabel}
          </a>
        </div>
      </div>
    `;

    nbEl.addEventListener('click', (e) => {
      if (e.target.closest('a')) return;
      if (nb.repo) window.open(nb.repo, '_blank', 'noopener');
    });

    shelf.appendChild(nbEl);
  });
}

// =====================================================================
// 3D MOUSE PARALLAX FOR BOOKCASE (PHYSICAL DEPTH)
// =====================================================================
function initBookcaseParallax() {
  const bookcase = document.getElementById('bookcase');
  if (!bookcase) return;

  // Only apply tilt on desktop screens
  if (window.matchMedia('(min-width: 992px)').matches) {
    window.addEventListener('mousemove', (e) => {
      const rect = bookcase.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      const mouseX = e.clientX - centerX;
      const mouseY = e.clientY - centerY;

      // Subtle tilt: max 2.5 degrees for natural architectural weight
      const rotateY = (mouseX / (window.innerWidth / 2)) * 2.5;
      const rotateX = -(mouseY / (window.innerHeight / 2)) * 1.5;

      bookcase.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });
  }
}

// =====================================================================
// ATMOSPHERIC BANKER'S LAMP TOGGLE
// =====================================================================
function initAtmosphereControls() {
  const lampBtn = document.getElementById('lamp-toggle');
  if (!lampBtn) return;

  let lampLit = true;
  lampBtn.addEventListener('click', () => {
    lampLit = !lampLit;
    document.body.classList.toggle('warm-glow', lampLit);
    lampBtn.style.transform = 'scale(0.92)';
    setTimeout(() => lampBtn.style.transform = '', 150);
  });
}

// =====================================================================
// INITIALIZATION
// =====================================================================
document.addEventListener('DOMContentLoaded', () => {
  // Footer year
  const yearEl = document.getElementById('footer-year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Language buttons
  document.getElementById('btn-lang-en')?.addEventListener('click', () => setLanguage('en'));
  document.getElementById('btn-lang-he')?.addEventListener('click', () => setLanguage('he'));

  // Initial renders
  setLanguage('en');
  initBookcaseParallax();
  initAtmosphereControls();
});
