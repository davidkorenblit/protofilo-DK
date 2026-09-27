/* =================================================================
   David's Library – Portfolio Script
   Pure Vanilla ES6+. Zero dependencies.
   ================================================================= */

// =====================================================================
// DATA — pulled directly from the specification document
// =====================================================================

const BOOKS = [
  {
    id: 0,
    cover: 'mahogany',
    title:       { en: 'The Missing\nTeammate',        he: 'החבר שחסר\nלך בצוות' },
    pitch:       { en: '5 years in Computer Science allowed me to taste many worlds and fall deeply in love with one (or one and a half) of them — and also understand a bit about my own limits and abilities.',
                   he: '5 שנים במדעי המחשב איפשרו לי לטעום מלא מעט עולמות ולהתאהב באחד (או אחד וחצי מהם) בצורה קשה, וגם להבין קצת על המגבלות והיכולות שלי.' },
    description: { en: 'An autobiographical book about the professional journey, passions and achievements. Timeline and personal chapters to be completed manually.',
                   he: 'ספר אוטוביוגרפי על הדרך המקצועית, תחומי העניין וההישגים. ציר זמן ופרקים אישיים יושלמו ידנית.' },
    tech: [],
    demo: '',
    repo: ''
  },
  {
    id: 1,
    cover: 'oxblood',
    title:       { en: 'AIAC – NBA\nAnalytics',        he: 'AIAC – NBA\nAnalytics' },
    pitch:       { en: 'A system that tells the coach he fell asleep on the job — effective at a 32.9% improvement in stopping opponent runs (90-second window), adding ~0.79 points per top-5% shot, and a strategic value of ~3.2 extra wins per season.',
                   he: 'מערכת שתדע לספר למאמן שהוא נרדם בעמידה – ואפקטיבית בשיפור של 32.9% בעצירת ריצות יריב (חלון של 90 שניות), תוספת של כ-0.79 נקודות לפוזישן בספוטי הקצה, ושווי ערך אסטרטגי של תוספת כ-3.2 ניצחונות בעונה.' },
    description: { en: 'It\'s frustrating to sit on the couch and scream at the coach "take a timeout already!!!!". So here\'s a system that can tell the coach he fell asleep on the job — effectively improving opponent-run stop-rate by 32.9% (90-second window), adding ~0.79 points per top-5% shot, and a strategic value of ~3.2 extra wins per season.',
                   he: 'זה מתסכל לשבת על הספה ולצרוח על המאמן (או המסך) \'קח כבר פסק זמן!!!!\'. אז הנה מערכת שתדע לספר למאמן שהוא נרדם בעמידה – ואפקטיבית בשיפור של 32.9% בעצירת ריצות יריב (בחלון של 90 שניות), תוספת של כ-0.79 נקודות לפוזישן בספוטי הקצה (Top 5%), ושווי ערך אסטרטגי של תוספת כ-3.2 ניצחונות בעונה.' },
    tech: ['Python', 'PyTorch', 'Causal Inference', 'NBA API', 'Streamlit'],
    demo: 'https://davidkorenblit.github.io/nba-ai-coach-assistant/',
    repo: 'https://github.com/davidkorenblit/nba-ai-coach-assistant'
  },
  {
    id: 2,
    cover: 'navy',
    title:       { en: 'WSL\nData Hub',                he: 'WSL\nData Hub' },
    pitch:       { en: 'Data-engineering pipelines for English women\'s football — analytics and interactive visualisations built on partial, scattered data.',
                   he: 'צינורות נתונים לניתוח ליגת נשים בכדורגל האנגלית – אנליטיקות וויזואליזציות אינטראקטיביות מדאטא חלקי ומפוזר.' },
    description: { en: 'I love sports, I love data and I love challenges. All of that together made me take the English Women\'s Super League and try to give analytical predictions on it. It\'s challenging because the data is much more partial and scattered — an excellent opportunity for pipelines that meet reality, and of course to write about sport, which you could also argue I love.',
                   he: 'אני אוהב ספורט, אני אוהב נתונים ואני אוהב אתגרים. כל זה יחד גרמו לי לקחת את ליגת הנשים בכדורגל האנגלית ולנסות לתת עליה תחזיות אנליטיות. זה מאתגר כי הדאטא חלקי ומפוזר הרבה יותר – הזדמנות מצוינת לפייפליינים שפוגשים את המציאות, וכמובן לכתוב על ספורט, שגם את זה אפשר לטעון שאני אוהב.' },
    tech: ['Data Engineering', 'Python', 'Pandas', 'Sports Analytics', 'Interactive Viz'],
    demo: 'https://davidkorenblit.github.io/wsl-data-hub/',
    repo: 'https://github.com/davidkorenblit/wsl-data-hub'
  },
  {
    id: 3,
    cover: 'forest',
    title:       { en: 'Azure AI\nRAG Agent',           he: 'Azure AI\nRAG Agent' },
    pitch:       { en: 'Secure, production-ready chatbot with automatic document indexing — Azure AI Search, Bicep IaC, Managed Identity.',
                   he: 'צ\'טבוט מאובטח עם אינדוקס אוטומטי של מסמכים – Azure AI Search, Bicep, Managed Identity.' },
    description: { en: 'An enterprise chatbot and automatic document-indexing system. Secure, production-ready architecture based on Managed Identity in Azure, Infrastructure-as-Code (Bicep) and Azure AI Search for hybrid semantic search.',
                   he: 'מערכת צ\'אטבוט ואינדוקס אוטומטי למסמכים ארגוניים. ארכיטקטורה מאובטחת ומוכנה לפרודקשן מבוססת Managed Identity ב-Azure, תשתית כקוד (Bicep) ושירותי Azure AI Search לחיפוש סמנטי היברידי.' },
    tech: ['Azure AI Search', 'RAG', 'Bicep (IaC)', 'Managed Identity', 'Enterprise AI'],
    demo: '',
    repo: 'https://github.com/davidkorenblit/lab-for-tecktika'
  },
  {
    id: 4,
    cover: 'cognac',
    title:       { en: 'C++ Physics\nEngine',           he: 'C++ Physics\nEngine' },
    pitch:       { en: 'Accurate 2-D vehicle simulation — modular OOP architecture, Box2D physics, RAII memory management.',
                   he: 'סימולציית רכב דו-ממדית מדויקת – ארכיטקטורה מודולרית, Box2D, ניהול זיכרון RAII.' },
    description: { en: 'An accurate two-dimensional vehicle simulation written in pure C++. Demonstrates modular, decoupled software architecture (Decoupled Managers), the Box2D physics engine, and meticulous RAII memory management.',
                   he: 'סימולציית רכב דו-ממדית מדויקת שנכתבה ב-C++ טהור. מדגימה ארכיטקטורת תוכנה מודולרית ומבוזרת (Decoupled Managers), שימוש במנוע הפיזיקה Box2D וניהול זיכרון קפדני (RAII).' },
    tech: ['C++', 'Box2D', 'Physics Simulation', 'RAII', 'OOP Architecture'],
    demo: '',
    repo: 'https://github.com/davidkorenblit/OOP2_Project'
  }
];

const LAB_NOTEBOOKS = [
  {
    id: 'lab-a',
    title: { en: 'Chess ML\nPredictor', he: 'Chess ML\nPredictor' },
    pitch: { en: 'ML model for predicting chess game outcomes from historical Chess.com data. (Testing & upgrading)',
             he: 'מודל ML לחיזוי תוצאות משחקי שחמט מדאטה היסטורי מ-Chess.com. (בשלבי בדיקות)' },
    tech: ['Machine Learning', 'Random Forest', 'Chess.com API'],
    repo: 'https://github.com/davidkorenblit/Chess',
    status: 'In Progress'
  },
  {
    id: 'lab-b',
    title: { en: 'FPL\nAssistant', he: 'FPL\nAssistant' },
    pitch: { en: 'Fantasy Premier League analysis — momentum prediction algorithms & optimal captain recommendations. (Advanced dev)',
             he: 'ניתוח FPL – אלגוריתמי חיזוי מומנטום והמלצות קפטן. (בפיתוח מתקדם)' },
    tech: ['Python', 'Optimization', 'Sports Analytics'],
    repo: 'https://github.com/davidkorenblit/fpl_assistant',
    status: 'In Progress'
  },
  {
    id: 'lab-c',
    title: { en: 'Semantic\nHoops', he: 'Semantic\nHoops' },
    pitch: { en: 'Semantic video search engine for sports — Computer Vision, CLIP, vector DB for intelligent play retrieval. (Early dev)',
             he: 'מנוע חיפוש סמנטי לווידאו בספורט – ראייה ממוחשבת, CLIP, מסד וקטורי. (בפיתוח התחלתי)' },
    tech: ['Computer Vision', 'CLIP', 'Vector DB', 'Video Search'],
    repo: 'https://github.com/davidkorenblit/SemanticHoops',
    status: 'Research'
  },
  {
    id: 'lab-d',
    title: { en: 'DailyBite\nNutrition', he: 'DailyBite\nNutrition' },
    pitch: { en: 'Full-stack platform using Gemini AI to understand nutritionist context and translate it into dynamic daily targets. (Finishing for production)',
             he: 'פלטפורמה מלאה עם Gemini AI להבנת קונטקסט של המלצות תזונאים. (בפינישים לפרודקשן)' },
    tech: ['Full-Stack', 'Gemini AI', 'NLP Context'],
    repo: 'https://github.com/davidkorenblit/nutrition-tracker',
    status: 'In Progress'
  },
  {
    id: 'lab-e',
    title: { en: 'Tech News\nAI Assistant', he: 'Tech News\nAI Assistant' },
    pitch: { en: 'Autonomous system for collecting, classifying and summarising tech articles using NLP. (Upgrading)',
             he: 'מערכת אוטונומית לאיסוף, סיווג ותקצור מאמרי טכנולוגיה באמצעות NLP. (בשדרוג)' },
    tech: ['NLP', 'BART', 'Gemini', 'Scraping'],
    repo: 'https://github.com/davidkorenblit/TechNewsAIAssistant',
    status: 'Research'
  }
];

// =====================================================================
// LANGUAGE ENGINE
// =====================================================================
let lang = 'en';

function setLang(newLang) {
  lang = newLang;

  // Direction
  document.documentElement.lang = newLang === 'he' ? 'he' : 'en';
  document.documentElement.dir  = newLang === 'he' ? 'rtl' : 'ltr';

  // Toggle active button
  document.getElementById('btn-lang-en').classList.toggle('active', newLang === 'en');
  document.getElementById('btn-lang-he').classList.toggle('active', newLang === 'he');
  document.getElementById('btn-lang-en').setAttribute('aria-pressed', newLang === 'en');
  document.getElementById('btn-lang-he').setAttribute('aria-pressed', newLang === 'he');

  // Translate all elements with data-en / data-he
  document.querySelectorAll('[data-en]').forEach(el => {
    const val = el.getAttribute('data-' + newLang);
    if (val) el.textContent = val;
  });

  // Re-render shelves to update titles & tooltips
  renderFeatured();
  renderLab();
}

// =====================================================================
// RENDER: Featured Shelf
// =====================================================================
function renderFeatured() {
  const shelf = document.getElementById('featured-shelf');
  shelf.innerHTML = '';

  BOOKS.forEach(book => {
    const el = document.createElement('div');
    el.className = 'book';
    el.dataset.cover = book.cover;
    el.setAttribute('role', 'button');
    el.setAttribute('tabindex', '0');
    el.setAttribute('aria-label', book.title[lang].replace('\n', ' '));

    const titleDisplay = book.title[lang].replace('\n', '<br>');
    const pitchText    = book.pitch[lang];
    const tagsHTML     = book.tech.map(t => '<span class="tooltip-tag">' + t + '</span>').join('');

    el.innerHTML =
      '<div class="book-body">' +
        '<span class="book-title">' + titleDisplay + '</span>' +
      '</div>' +
      '<div class="book-tooltip">' +
        '<p class="tooltip-pitch">' + pitchText + '</p>' +
        (tagsHTML ? '<div class="tooltip-tags">' + tagsHTML + '</div>' : '') +
      '</div>';

    el.addEventListener('click',    () => openModal(book));
    el.addEventListener('keydown',  e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openModal(book); } });

    shelf.appendChild(el);
  });
}

// =====================================================================
// RENDER: Lab Shelf
// =====================================================================
function renderLab() {
  const shelf = document.getElementById('lab-shelf');
  shelf.innerHTML = '';

  LAB_NOTEBOOKS.forEach(nb => {
    const el = document.createElement('div');
    el.className = 'book';
    el.setAttribute('role', 'button');
    el.setAttribute('tabindex', '0');
    el.setAttribute('aria-label', nb.title[lang].replace('\n', ' '));

    const titleDisplay = nb.title[lang].replace('\n', '<br>');
    const pitchText    = nb.pitch[lang];
    const tagsHTML     = nb.tech.map(t => '<span class="tooltip-tag">' + t + '</span>').join('');

    el.innerHTML =
      '<div class="book-body">' +
        '<span class="notebook-status">' + nb.status + '</span>' +
        '<span class="book-title">' + titleDisplay + '</span>' +
      '</div>' +
      '<div class="book-tooltip">' +
        '<p class="tooltip-pitch">' + pitchText + '</p>' +
        '<div class="tooltip-tags">' + tagsHTML + '</div>' +
      '</div>';

    el.addEventListener('click',   () => openLabModal(nb));
    el.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openLabModal(nb); } });

    shelf.appendChild(el);
  });
}

// =====================================================================
// MODAL
// =====================================================================
const modal       = document.getElementById('book-modal');
const modalTitle  = document.getElementById('modal-book-title');
const modalDesc   = document.getElementById('modal-book-description');
const modalTech   = document.getElementById('modal-tech-list');
const modalDemo   = document.getElementById('modal-link-demo');
const modalRepo   = document.getElementById('modal-link-repo');
const modalClose  = document.getElementById('modal-close');

function openModal(book) {
  modalTitle.textContent = book.title[lang].replace('\n', ' ');
  modalDesc.textContent  = book.description[lang];

  // Tech badges
  modalTech.innerHTML = '';
  book.tech.forEach(t => {
    const li = document.createElement('li');
    li.textContent = t;
    modalTech.appendChild(li);
  });

  // Links
  if (book.demo) {
    modalDemo.href = book.demo;
    modalDemo.style.display = 'inline-flex';
  } else {
    modalDemo.style.display = 'none';
  }
  if (book.repo) {
    modalRepo.href = book.repo;
    modalRepo.style.display = 'inline-flex';
  } else {
    modalRepo.style.display = 'none';
  }

  showModal();
}

function openLabModal(nb) {
  modalTitle.textContent = nb.title[lang].replace('\n', ' ');
  modalDesc.textContent  = nb.pitch[lang];

  modalTech.innerHTML = '';
  nb.tech.forEach(t => {
    const li = document.createElement('li');
    li.textContent = t;
    modalTech.appendChild(li);
  });

  modalDemo.style.display = 'none';
  if (nb.repo) {
    modalRepo.href = nb.repo;
    modalRepo.style.display = 'inline-flex';
  } else {
    modalRepo.style.display = 'none';
  }

  showModal();
}

function showModal() {
  modal.classList.add('is-open');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
  modalClose.focus();
}

function closeModal() {
  modal.classList.remove('is-open');
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

// Close on X button
modalClose.addEventListener('click', closeModal);

// Close on click outside the book
modal.addEventListener('click', e => {
  if (e.target === modal) closeModal();
});

// Close on Escape
document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && modal.classList.contains('is-open')) closeModal();
});

// =====================================================================
// NAVIGATION — smooth scroll
// =====================================================================
document.querySelectorAll('#main-nav a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

// =====================================================================
// LANGUAGE BUTTONS
// =====================================================================
document.getElementById('btn-lang-en').addEventListener('click', () => setLang('en'));
document.getElementById('btn-lang-he').addEventListener('click', () => setLang('he'));

// =====================================================================
// INIT
// =====================================================================
document.getElementById('footer-year').textContent = new Date().getFullYear();
setLang('en');
