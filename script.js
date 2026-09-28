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
    slug: 'memoir',
    cover: 'mahogany',
    volume: 'VOL. 0',
    title: {
      en: 'The Missing Teammate',
      he: 'החבר שחסר לך בצוות'
    },
    pitch: {
      en: 'It took me 5 years to finish a CS degree, catching up credentials from scratch after full-time yeshiva study. In a brutal crucible where almost the entire class dropped out, I learned never to fear mistakes or the grind. Driven by candor, asking probing questions, and genuine data obsession.',
      he: 'לקח לי חמש שנים לסיים תואר במדעי המחשב, כשהשלמתי פערי לימודים מאפס אחרי שנים של לימוד תורה בישיבה. במאבק עיקש שבו כמעט כל המחזור נשר, למדתי לא לפחד לטעות, לחטוף את המכה ולצמוח. שאלות מעמיקות, עמידה בלחצים ואהבה אמיתית לדאטה.'
    },
    tech: ['Python / Data', 'PostgreSQL', 'Docker', 'FastAPI', 'C++ (RAII)', 'RAG & AI'],
    demo: '',
    repo: '',
    isMemoir: true
  },
  {
    id: 1,
    slug: 'aiac',
    cover: 'oxblood',
    volume: 'VOL. I',
    title: {
      en: 'AIAC – NBA Analytics',
      he: 'AIAC – NBA Analytics'
    },
    pitch: {
      en: 'It is frustrating to sit on the couch and scream at the coach (or the screen) "Take a timeout already!!!!". So here is a system that tells the coach he fell asleep on the job — effective at a 32.9% improvement in stopping opponent runs (90s window), adding ~0.79 points/possession in top-5% spots, and a strategic value of ~3.2 wins/season.',
      he: 'זה מתסכל לשבת על הספה ולצרוח על המאמן (או המסך) \'קח כבר פסק זמן!!!!\'. אז הנה מערכת שתדע לספר למאמן שהוא נרדם בעמידה – ואפקטיבית ב-שיפור של 32.9% בעצירת ריצות יריב (בחלון של 90 שניות), תוספת של כ-0.79 נקודות לפוזשן בספוטי הקצה (Top 5%), ושווי ערך אסטרטגי של תוספת כ-3.2 ניצחונות בעונה.'
    },
    tech: ['Python', 'PyTorch', 'Causal Inference', 'NBA API', 'Streamlit'],
    demo: 'https://davidkorenblit.github.io/nba-ai-coach-assistant/',
    repo: 'https://github.com/davidkorenblit/nba-ai-coach-assistant'
  },
  {
    id: 2,
    slug: 'wsl',
    cover: 'navy',
    volume: 'VOL. II',
    title: {
      en: 'WSL Data Hub',
      he: 'WSL Data Hub'
    },
    pitch: {
      en: 'I love sports, I love data, and I love challenges. All of that together drove me to take the English Women\'s Super League and build analytical forecasts for it. It is challenging because the data is far more fragmented and sparse — a great opportunity for pipelines that meet reality, and of course to write about sports, which one could also claim I love.',
      he: 'אני אוהב ספורט, אני אוהב נתונים ואני אוהב אתגרים. כל זה יחד גרמו לי לקחת את ליגת הנשים בכדורגל האנגלית ולנסות לתת עליה תחזיות אנליטיות. זה מאתגר כי הדאטא חלקי ומפוזר הרבה יותר – הזדמנות מצוינת לפייפליינים שפוגשים את המציאות, וכמובן לכתוב על ספורט, שגם את זה אפשר לטעון שאני אוהב.'
    },
    tech: ['Data Engineering', 'Python', 'Pandas', 'Sports Analytics', 'Interactive Viz'],
    demo: 'https://davidkorenblit.github.io/wsl-data-hub/',
    repo: 'https://github.com/davidkorenblit/wsl-data-hub'
  },
  {
    id: 3,
    slug: 'azure-rag',
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
    slug: 'cpp-physics',
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
    repo: 'https://github.com/davidkorenblit/OOP2_Project',
    cover: 'charcoal'
  }
];

const LAB_NOTEBOOKS = [
  {
    id: 'lab-1',
    slug: 'chess-ml',
    volume: 'NOTEBOOK A',
    cover: 'charcoal',
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
    slug: 'fpl-assistant',
    volume: 'NOTEBOOK B',
    cover: 'slate',
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
    slug: 'semantic-hoops',
    volume: 'NOTEBOOK C',
    cover: 'parchment',
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
    slug: 'dailybite',
    volume: 'NOTEBOOK D',
    cover: 'forest',
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
    slug: 'technews-ai',
    volume: 'NOTEBOOK E',
    cover: 'navy',
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
let currentLang = localStorage.getItem('david_library_lang') || 'he';

function setLanguage(lang) {
  currentLang = lang;
  try {
    localStorage.setItem('david_library_lang', lang);
  } catch (e) {}

  document.documentElement.lang = lang === 'he' ? 'he' : 'en';
  document.documentElement.dir  = lang === 'he' ? 'rtl' : 'ltr';

  const btnEn = document.getElementById('btn-lang-en');
  const btnHe = document.getElementById('btn-lang-he');
  if (btnEn) {
    btnEn.classList.toggle('active', lang === 'en');
    btnEn.setAttribute('aria-pressed', lang === 'en');
  }
  if (btnHe) {
    btnHe.classList.toggle('active', lang === 'he');
    btnHe.setAttribute('aria-pressed', lang === 'he');
  }

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
// RENDER: FEATURED 3D SHELF (Clean physical presence, click to open)
// =====================================================================
function renderFeaturedBooks() {
  const shelf = document.getElementById('featured-shelf');
  if (!shelf) return;
  shelf.innerHTML = '';

  FEATURED_BOOKS.forEach((book, index) => {
    const bookEl = document.createElement('div');
    bookEl.className = 'book-3d' + (index === FEATURED_BOOKS.length - 1 ? ' leaning-book' : '');
    bookEl.dataset.cover = book.cover;
    bookEl.setAttribute('role', 'button');
    bookEl.setAttribute('tabindex', '0');
    bookEl.setAttribute('aria-label', book.title[currentLang]);

    const titleText = book.title[currentLang];

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
    `;

    // Click to pull out and open book across the screen
    bookEl.addEventListener('click', () => openGrandBook(book, 'featured'));
    bookEl.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openGrandBook(book, 'featured');
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
    nbEl.dataset.cover = nb.cover || 'slate';
    nbEl.setAttribute('role', 'button');
    nbEl.setAttribute('tabindex', '0');
    nbEl.setAttribute('aria-label', nb.title[currentLang]);

    const titleText = nb.title[currentLang];

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
    `;

    nbEl.addEventListener('click', () => openGrandBook(nb, 'lab'));
    nbEl.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openGrandBook(nb, 'lab');
      }
    });

    shelf.appendChild(nbEl);
  });
}

// =====================================================================
// GRAND OPEN BOOK VIEWER (PULL OUT & SPREAD ACROSS SCREEN)
// =====================================================================
let currentReaderList = FEATURED_BOOKS;
let currentReaderType = 'featured';
let currentReaderIndex = 0;

function openGrandBook(item, type) {
  const modal = document.getElementById('book-reader-modal');
  const bookSpread = document.getElementById('open-book-element');
  if (!modal || !bookSpread) return;

  // Determine current active list and index
  currentReaderType = type;
  currentReaderList = (type === 'featured') ? FEATURED_BOOKS : LAB_NOTEBOOKS;
  const foundIndex = currentReaderList.findIndex(b => b.slug === item.slug);
  currentReaderIndex = foundIndex !== -1 ? foundIndex : 0;

  // Update deep-link URL hash smoothly without jump
  try {
    if (item.slug) {
      history.replaceState(null, null, '#' + item.slug);
    }
  } catch (e) {}

  // Update Toolbar indicator & buttons
  const indicator = document.getElementById('reader-toolbar-indicator');
  const btnPrev = document.getElementById('reader-btn-prev');
  const btnNext = document.getElementById('reader-btn-next');

  if (indicator) {
    indicator.textContent = `${currentReaderIndex + 1} / ${currentReaderList.length}`;
  }
  if (btnPrev) {
    btnPrev.disabled = (currentReaderIndex === 0);
  }
  if (btnNext) {
    btnNext.disabled = (currentReaderIndex === currentReaderList.length - 1);
  }

  // Set cover color tone on the open book casing
  bookSpread.dataset.cover = item.cover || 'charcoal';

  // Volume & Category Badges
  const volBadge = document.getElementById('reader-volume-badge');
  const catBadge = document.getElementById('reader-category-badge');
  if (volBadge) volBadge.textContent = item.volume || 'VOL.';
  if (catBadge) {
    if (type === 'featured') {
      catBadge.textContent = currentLang === 'he' ? 'כרך ראשי · עבודה מובילה' : 'FEATURED WORK · ARCHIVE';
    } else {
      catBadge.textContent = currentLang === 'he' ? `מעבדה ומחקר · ${item.status}` : `RESEARCH LAB · ${item.status}`;
    }
  }

  // Title & Pitch (Left / Primary Page)
  const titleEl = document.getElementById('reader-book-title');
  const pitchEl = document.getElementById('reader-book-pitch');
  if (titleEl) titleEl.textContent = item.title[currentLang];
  if (pitchEl) pitchEl.textContent = item.pitch[currentLang];

  // Tech stack chips (Right / Secondary Page)
  const techStackEl = document.getElementById('reader-tech-stack');
  if (techStackEl) {
    techStackEl.innerHTML = '';
    (item.tech || []).forEach(t => {
      const chip = document.createElement('span');
      chip.className = 'reader-tech-chip';
      chip.textContent = t;
      techStackEl.appendChild(chip);
    });
  }

  // Buttons & Actions
  const btnDemo   = document.getElementById('reader-btn-demo');
  const btnRepo   = document.getElementById('reader-btn-repo');
  const btnMemoir = document.getElementById('reader-btn-memoir');

  if (item.isMemoir) {
    if (btnDemo) btnDemo.style.display = 'none';
    if (btnRepo) btnRepo.style.display = 'none';
    if (btnMemoir) {
      btnMemoir.style.display = 'inline-flex';
      btnMemoir.onclick = () => {
        closeGrandBook();
        document.getElementById('study-desk')?.scrollIntoView({ behavior: 'smooth' });
      };
    }
  } else {
    if (btnMemoir) btnMemoir.style.display = 'none';

    if (btnDemo) {
      if (item.demo) {
        btnDemo.href = item.demo;
        btnDemo.style.display = 'inline-flex';
      } else {
        btnDemo.style.display = 'none';
      }
    }

    if (btnRepo) {
      if (item.repo) {
        btnRepo.href = item.repo;
        btnRepo.style.display = 'inline-flex';
      } else {
        btnRepo.style.display = 'none';
      }
    }
  }

  // Open with smooth class trigger
  modal.classList.add('is-open');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';

  // Auto focus close button for accessibility
  document.getElementById('reader-close-btn')?.focus();
}

function navigateGrandBook(offset) {
  if (!currentReaderList || currentReaderList.length === 0) return;
  const targetIndex = currentReaderIndex + offset;
  if (targetIndex >= 0 && targetIndex < currentReaderList.length) {
    const bookSpread = document.getElementById('open-book-element');
    const animationClass = offset > 0 ? 'page-turning-forward' : 'page-turning-backward';
    if (bookSpread) {
      bookSpread.classList.remove('page-turning-forward', 'page-turning-backward');
      void bookSpread.offsetWidth; // Force reflow
      bookSpread.classList.add(animationClass);
      setTimeout(() => {
        bookSpread.classList.remove(animationClass);
      }, 350);
    }
    openGrandBook(currentReaderList[targetIndex], currentReaderType);
  }
}

function closeGrandBook() {
  const modal = document.getElementById('book-reader-modal');
  if (!modal) return;
  modal.classList.remove('is-open');
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';

  // Clear hash cleanly
  try {
    history.replaceState(null, null, window.location.pathname + window.location.search);
  } catch (e) {}
}

// Setup Reader Controls & Keyboard Navigation
function initBookReaderEvents() {
  const modal = document.getElementById('book-reader-modal');
  const closeBtn = document.getElementById('reader-close-btn');
  const backdrop = document.getElementById('reader-backdrop');
  const btnPrev = document.getElementById('reader-btn-prev');
  const btnNext = document.getElementById('reader-btn-next');

  closeBtn?.addEventListener('click', closeGrandBook);
  backdrop?.addEventListener('click', closeGrandBook);
  btnPrev?.addEventListener('click', () => navigateGrandBook(-1));
  btnNext?.addEventListener('click', () => navigateGrandBook(1));

  // Keyboard navigation: Escape to close, Arrows to flip between volumes
  document.addEventListener('keydown', (e) => {
    if (!modal || !modal.classList.contains('is-open')) return;

    if (e.key === 'Escape') {
      closeGrandBook();
    } else if (e.key === 'ArrowRight') {
      // In Hebrew RTL: ArrowRight = previous, ArrowLeft = next; in LTR vice-versa
      navigateGrandBook(currentLang === 'he' ? -1 : 1);
    } else if (e.key === 'ArrowLeft') {
      navigateGrandBook(currentLang === 'he' ? 1 : -1);
    }
  });
}

// =====================================================================
// AUTHOR'S DESK: TWO-SPREAD NOTEBOOK PAGINATION (דפדוף דפים במחברת)
// =====================================================================
let currentJournalSpread = 1;
const TOTAL_JOURNAL_SPREADS = 2;

function setJournalSpread(spreadNum, direction = 'forward') {
  if (spreadNum < 1 || spreadNum > TOTAL_JOURNAL_SPREADS) return;
  const spread1 = document.getElementById('journal-spread-1');
  const spread2 = document.getElementById('journal-spread-2');
  const indicator = document.getElementById('journal-spread-indicator-num');
  const btnPrev = document.getElementById('journal-nav-prev');
  const btnNext = document.getElementById('journal-nav-next');
  if (!spread1 || !spread2) return;

  const currentEl = spreadNum === 1 ? spread2 : spread1;
  const targetEl = spreadNum === 1 ? spread1 : spread2;

  currentEl.classList.remove('active', 'flip-forward', 'flip-backward');
  targetEl.classList.remove('flip-forward', 'flip-backward');

  // Apply 3D page flip animation
  const flipClass = direction === 'forward' ? 'flip-forward' : 'flip-backward';
  targetEl.classList.add('active', flipClass);

  currentJournalSpread = spreadNum;

  if (indicator) indicator.textContent = spreadNum;
  if (btnPrev) btnPrev.disabled = (spreadNum === 1);
  if (btnNext) btnNext.disabled = (spreadNum === TOTAL_JOURNAL_SPREADS);
}

function initJournalNotebookEvents() {
  const btnPrev = document.getElementById('journal-nav-prev');
  const btnNext = document.getElementById('journal-nav-next');
  const cornerNext1 = document.getElementById('journal-corner-next-1');
  const cornerPrev2 = document.getElementById('journal-corner-prev-2');

  btnPrev?.addEventListener('click', () => setJournalSpread(1, 'backward'));
  btnNext?.addEventListener('click', () => setJournalSpread(2, 'forward'));
  cornerNext1?.addEventListener('click', () => setJournalSpread(2, 'forward'));
  cornerPrev2?.addEventListener('click', () => setJournalSpread(1, 'backward'));
}

// Deep Linking Handler (opens book if URL has #slug)
function handleInitialDeepLink() {
  const hash = window.location.hash.replace('#', '').toLowerCase();
  if (!hash) return;

  const featuredMatch = FEATURED_BOOKS.find(b => b.slug.toLowerCase() === hash);
  if (featuredMatch) {
    openGrandBook(featuredMatch, 'featured');
    return;
  }
  const labMatch = LAB_NOTEBOOKS.find(b => b.slug.toLowerCase() === hash);
  if (labMatch) {
    openGrandBook(labMatch, 'lab');
  }
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

  // Reader event listeners
  initBookReaderEvents();

  // Author's Desk Notebook page turn listeners
  initJournalNotebookEvents();

  // Initial render with saved or default Hebrew language
  setLanguage(currentLang);

  // Deep linking: check URL hash on load
  handleInitialDeepLink();
});
