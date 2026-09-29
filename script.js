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
      he: `<p class="reader-story-lead">לקח לי חמש שנים לסיים תואר במדעי המחשב. הסיבה שזה לקח חמש שנים במקום שלוש היא שהייתי צריך להשלים את כל פערי הלימודים מאפס, אחרי שנים שהוקדשו כולן ללימוד תורה בישיבה.</p>
<div class="reader-metrics-banner">
  <div class="reader-metric-stat"><span class="reader-metric-val">5 שנים</span><span class="reader-metric-lbl">השלמת פערים ותואר</span></div>
  <div class="reader-metric-stat"><span class="reader-metric-val">רק 2</span><span class="reader-metric-lbl">חצו את קו הסיום במחזור</span></div>
  <div class="reader-metric-stat"><span class="reader-metric-val">100%</span><span class="reader-metric-lbl">עמידה בלחץ ומשמעת עצמית</span></div>
</div>
<div class="reader-challenge-block"><strong>החוסן והדרייב:</strong> במאבק עיקש שבו כמעט כל המחזור נשר, למדתי לא לפחד לטעות, לחטוף את המכה ולצמוח. מעבר לארגז הכלים הטכנולוגי — היכולת 'לסבול' את הזמנים הקשים, להתמודד חזיתית עם אתגרים, לקחת אחריות מלאה ולאהוב נתונים בעוצמה היא מה שתשלים את הצוות שלכם.</div>`,
      en: `<p class="reader-story-lead">It took me 5 years to finish a CS degree, catching up credentials completely from scratch after years dedicated to full-time Torah study in yeshiva.</p>
<div class="reader-metrics-banner">
  <div class="reader-metric-stat"><span class="reader-metric-val">5 Years</span><span class="reader-metric-lbl">Catching up & CS Degree</span></div>
  <div class="reader-metric-stat"><span class="reader-metric-val">Only 2</span><span class="reader-metric-lbl">Finished in my cohort</span></div>
  <div class="reader-metric-stat"><span class="reader-metric-val">100%</span><span class="reader-metric-lbl">Accountability & Grit</span></div>
</div>
<div class="reader-challenge-block"><strong>Grit & Resilience:</strong> In a brutal crucible where almost the entire class dropped out, I learned never to fear mistakes or the grind. Driven by candor, asking probing questions, taking total ownership of systems, and genuine data obsession.</div>`
    },
    tech: ['Python / Data', 'PostgreSQL', 'Docker', 'FastAPI', 'C++17 (RAII)', 'RAG & AI'],
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
      he: `<p class="reader-story-lead">זה מתסכל לשבת על הספה ולצרוח על המאמן (או המסך) 'קח כבר פסק זמן!!!!'. אז הנה מערכת שתדע לספר למאמן שהוא נרדם בעמידה...</p>
<div class="reader-metrics-banner">
  <div class="reader-metric-stat"><span class="reader-metric-val">+32.9%</span><span class="reader-metric-lbl">עצירת ריצות יריב (90 שניות)</span></div>
  <div class="reader-metric-stat"><span class="reader-metric-val">+0.79</span><span class="reader-metric-lbl">נק'/פוזשן (Top 5% Leverage)</span></div>
  <div class="reader-metric-stat"><span class="reader-metric-val">~3.2</span><span class="reader-metric-lbl">ניצחונות צפויים לעונה</span></div>
</div>
<div class="reader-challenge-block"><strong>האתגר המתמטי וההנדסי:</strong> רגרסיה רגילה סובלת מהטיית בחירה (פסקי זמן נלקחים בפיגור עמוק, ולכן מתאם נאיבי מצביע על נזק). המערכת מיישמת <strong>Causal Inference (X-Learner)</strong> לחישוב אפקט ההתערבות מול מצב נוגד-מציאות (Counterfactual). מופעלת ע"י פייפליין MLOps בן 11 שלבים, 8 בדיקות איכות מקדימות ומניעת דלף נתונים (Leakage QA), מעקב ניסויים ב-MLflow וסנכרון ל-Supabase.</div>`,
      en: `<p class="reader-story-lead">It is frustrating to sit on the couch and scream at the coach (or the screen) "Take a timeout already!!!!". So here is a system that tells the coach he fell asleep on the job...</p>
<div class="reader-metrics-banner">
  <div class="reader-metric-stat"><span class="reader-metric-val">+32.9%</span><span class="reader-metric-lbl">Run disruption (90s window)</span></div>
  <div class="reader-metric-stat"><span class="reader-metric-val">+0.79</span><span class="reader-metric-lbl">Pts/Possession (Top 5% clutch)</span></div>
  <div class="reader-metric-stat"><span class="reader-metric-val">~3.2</span><span class="reader-metric-lbl">Expected Wins / Season</span></div>
</div>
<div class="reader-challenge-block"><strong>The Causal Challenge:</strong> Standard regression confuses correlation with causation (timeouts cluster in blowouts). Solved via <strong>Causal Meta-Learner (X-Learner)</strong> computing counterfactual trajectories. Backed by an 11-step MLOps pipeline, 8 pre-FE data tests, MLflow tracking, and Supabase cloud sync.</div>`
    },
    tech: ['Causal Inference (X-Learner)', 'MLOps Pipeline', 'XGBoost', 'MLflow & DagsHub', 'Supabase (PostgreSQL)', 'NBA API'],
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
      he: `<p class="reader-story-lead">אני אוהב ספורט, אני אוהב נתונים ואני אוהב אתגרים. כל זה יחד גרמו לי לקחת את ליגת הנשים בכדורגל האנגלית ולנסות לתת עליה תחזיות אנליטיות...</p>
<div class="reader-metrics-banner">
  <div class="reader-metric-stat"><span class="reader-metric-val">12 מועדונים</span><span class="reader-metric-lbl">כיסוי ליגה מלא</span></div>
  <div class="reader-metric-stat"><span class="reader-metric-val">100+ מדדים</span><span class="reader-metric-lbl">פר-שחקנית ואירועי משחק</span></div>
  <div class="reader-metric-stat"><span class="reader-metric-val">15KB+ קוד</span><span class="reader-metric-lbl">קליינט FotMob ייעודי ועמיד</span></div>
</div>
<div class="reader-challenge-block"><strong>הנדסת נתונים חסינה:</strong> בניגוד לליגות גברים עם נתונים מובנים, איסוף מידע בליגות צומחות דורש צינורות ETL חסינים לשגיאות. פותח API Client עצמאי ומודולרי ל-FotMob המנהל קצב בקשות ומבני נתונים משתנים, המזין פייפליינים של Pandas לחישוב מדדי xG, גרפי רדאר השוואתיים, תחזיות רכש ומדדי לחץ טקטיים.</div>`,
      en: `<p class="reader-story-lead">I love sports, I love data, and I love challenges. All of that together drove me to take the English Women's Super League and build analytical forecasts for it...</p>
<div class="reader-metrics-banner">
  <div class="reader-metric-stat"><span class="reader-metric-val">12 Clubs</span><span class="reader-metric-lbl">Complete league coverage</span></div>
  <div class="reader-metric-stat"><span class="reader-metric-val">100+ Metrics</span><span class="reader-metric-lbl">Per-player & match events</span></div>
  <div class="reader-metric-stat"><span class="reader-metric-val">15KB+ Code</span><span class="reader-metric-lbl">Custom FotMob API Client</span></div>
</div>
<div class="reader-challenge-block"><strong>Resilient Data Engineering:</strong> Sparse, unstandardized data required building a custom Python API Client with rate-limiting and fault tolerance. Ingests raw match events into clean Pandas pipelines calculating xG, tactical momentum, player radar charts, and transfer projections.</div>`
    },
    tech: ['Data Engineering', 'Python / Pandas', 'Custom FotMob API Client', 'Sports Analytics', 'Interactive Viz'],
    demo: 'https://davidkorenblit.github.io/wsl-data-hub/',
    repo: 'https://github.com/davidkorenblit/wsl-data-hub'
  },
  {
    id: 3,
    slug: 'azure-rag',
    cover: 'forest',
    volume: 'VOL. III',
    title: {
      en: 'SharePoint RAG & Agent Platform',
      he: 'SharePoint RAG & Agent Platform'
    },
    pitch: {
      he: `<p class="reader-story-lead">פלטפורמת RAG וסוכן AI מבוזר לאינדוקס ותשאול מסמכים ארגוניים (SharePoint ו-PDFs) ברמת אנטרפרייז מוכחת.</p>
<div class="reader-metrics-banner">
  <div class="reader-metric-stat"><span class="reader-metric-val">0 סיסמאות</span><span class="reader-metric-lbl">ארכיטקטורת Zero-Secrets</span></div>
  <div class="reader-metric-stat"><span class="reader-metric-val">400–600</span><span class="reader-metric-lbl">טוקנים לצ'אנק (10-15% חפיפה)</span></div>
  <div class="reader-metric-stat"><span class="reader-metric-val">1,536 ממדים</span><span class="reader-metric-lbl">חיפוש היברידי + Reranking</span></div>
</div>
<div class="reader-challenge-block"><strong>ארכיטקטורת ענן מאובטחת:</strong> 100% אימות ללא סיסמאות באמצעות <strong>Azure Managed Identity</strong> ו-<code>DefaultAzureCredential</code>. תשתית שלמה מוגדרת כקוד ב-<strong>Azure Bicep</strong>, צד שרת אסינכרוני ב-FastAPI, ועיבוד מבוזר בתורים (Azure Storage Queues + Functions) המנהל מכונת מצבים מלאה ב-Table Storage עם ניטור ו-Tracing ב-OpenTelemetry.</div>`,
      en: `<p class="reader-story-lead">Enterprise-grade RAG platform and autonomous agent for SharePoint document ingestion and semantic conversational retrieval.</p>
<div class="reader-metrics-banner">
  <div class="reader-metric-stat"><span class="reader-metric-val">Zero Secrets</span><span class="reader-metric-lbl">Passwordless identity</span></div>
  <div class="reader-metric-stat"><span class="reader-metric-val">400–600</span><span class="reader-metric-lbl">Tokens / Chunk (10-15% overlap)</span></div>
  <div class="reader-metric-stat"><span class="reader-metric-val">1,536-dim</span><span class="reader-metric-lbl">Hybrid Search + Semantic Reranker</span></div>
</div>
<div class="reader-challenge-block"><strong>Production Cloud Architecture:</strong> Fully parameterized via <strong>Bicep IaC</strong> with passwordless <strong>Azure Managed Identity</strong>. Async FastAPI backend with distributed ingestion queues (Azure Storage Queues + Functions) and OpenTelemetry distributed tracing.</div>`
    },
    tech: ['Azure AI Search', 'FastAPI', 'Bicep (IaC)', 'Managed Identity', 'Azure Functions & Queues', 'OpenTelemetry'],
    demo: '',
    repo: 'https://github.com/davidkorenblit/lab-for-tecktika'
  },
  {
    id: 4,
    slug: 'cpp-physics',
    volume: 'VOL. IV',
    title: {
      en: 'C++ 2D Physics Engine',
      he: 'C++ 2D Physics Engine'
    },
    pitch: {
      he: `<p class="reader-story-lead">סימולטור פיזיקת רכב דו-ממדי מדויק ב-C++ טהור. הוכחת הנדסת תוכנה קפדנית ללא פשרות ושליטה ברמת המערכת.</p>
<div class="reader-metrics-banner">
  <div class="reader-metric-stat"><span class="reader-metric-val">60 FPS</span><span class="reader-metric-lbl">ריצה דטרמיניסטית חלקה</span></div>
  <div class="reader-metric-stat"><span class="reader-metric-val">0 Leaks</span><span class="reader-metric-lbl">100% בטיחות זיכרון (RAII)</span></div>
  <div class="reader-metric-stat"><span class="reader-metric-val">6 תבניות</span><span class="reader-metric-lbl">Design Patterns קלאסיים</span></div>
</div>
<div class="reader-challenge-block"><strong>ארכיטקטורה וניהול זיכרון:</strong> הפרדה מוחלטת בין לוגיקת המשחק, מנוע הפיזיקה Box2D והרינדור ב-SFML. מימוש <strong>Visitor Pattern</strong> לפתרון Double-Dispatching בהתנגשויות, תקשורת מונחית אירועים ב-<strong>Observer</strong>, קאשינג מהיר של טקסטורות ב-<strong>Singleton</strong>, וניהול זיכרון מלא בעזרת <code>std::unique_ptr</code>.</div>`,
      en: `<p class="reader-story-lead">High-performance 2D vehicle physics simulation built from the ground up in modern C++17, SFML, and Box2D.</p>
<div class="reader-metrics-banner">
  <div class="reader-metric-stat"><span class="reader-metric-val">60 FPS</span><span class="reader-metric-lbl">Deterministic real-time loop</span></div>
  <div class="reader-metric-stat"><span class="reader-metric-val">0 Leaks</span><span class="reader-metric-lbl">100% RAII memory safety</span></div>
  <div class="reader-metric-stat"><span class="reader-metric-val">6 Patterns</span><span class="reader-metric-lbl">Decoupled Manager Design</span></div>
</div>
<div class="reader-challenge-block"><strong>Systems Architecture:</strong> Complete decoupling of physics, state machine, and rendering. Features <strong>Visitor Pattern</strong> for collision double-dispatch, <strong>Observer Pattern</strong> for event dispatch, <strong>Singleton</strong> resource caching, and strict <code>std::unique_ptr</code> lifecycle safety.</div>`
    },
    tech: ['Modern C++17', 'Box2D', 'SFML', 'Design Patterns (Visitor/Observer)', '100% RAII', 'CMake'],
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
      he: `<p class="reader-story-lead">מודל למידת מכונה לחיזוי תוצאות משחקי שחמט על בסיס דאטה היסטורי מ-Chess.com.</p>
<div class="reader-metrics-banner">
  <div class="reader-metric-stat"><span class="reader-metric-val">250+ שחקנים</span><span class="reader-metric-lbl">Snowball Sampling מ-12 זרעים</span></div>
  <div class="reader-metric-stat"><span class="reader-metric-val">אלפי משחקים</span><span class="reader-metric-lbl">הנדסת פיצ'רים ב-PostgreSQL</span></div>
  <div class="reader-metric-stat"><span class="reader-metric-val">5-Fold CV</span><span class="reader-metric-lbl">GridSearchCV ל-XGBoost</span></div>
</div>
<div class="reader-challenge-block"><strong>הפרדת רשויות מלאה:</strong> איסוף נתונים מנוהל מול Chess.com API עם Rate Limiting, חישובי סטטיסטיקות פתיחה ומומנטום ב-SQL, אימון מודלי XGBoost ו-Random Forest, ומנוע להפקת דוחות HTML אינטראקטיביים עם מטריצות בלבול ודירוג חשיבות פיצ'רים תוך שניות.</div>`,
      en: `<p class="reader-story-lead">Machine learning pipeline predicting chess match outcomes from historical Chess.com game archives.</p>
<div class="reader-metrics-banner">
  <div class="reader-metric-stat"><span class="reader-metric-val">250+ Players</span><span class="reader-metric-lbl">Snowball sampling from 12 seeds</span></div>
  <div class="reader-metric-stat"><span class="reader-metric-val">Thousands</span><span class="reader-metric-lbl">Games in PostgreSQL schema</span></div>
  <div class="reader-metric-stat"><span class="reader-metric-val">5-Fold CV</span><span class="reader-metric-lbl">GridSearchCV hyperparameter tuning</span></div>
</div>
<div class="reader-challenge-block"><strong>Clean Decoupled Architecture:</strong> Database-driven ML workflow separating training from fast HTML report generation. Features SQL-based win rate engineering, XGBoost modeling, and automated confusion matrix visualization.</div>`
    },
    tech: ['scikit-learn', 'XGBoost', 'PostgreSQL', 'GridSearchCV', 'Chess.com API', 'HTML Reports'],
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
      he: `<p class="reader-story-lead">מנוע אלגוריתמי לבניית הרכבי פנטזי אופטימליים ב-Premier League לנטרול הטיות פסיכולוגיות.</p>
<div class="reader-metrics-banner">
  <div class="reader-metric-stat"><span class="reader-metric-val">£100.0M</span><span class="reader-metric-lbl">אילוץ תקציב קשיח (Knapsack)</span></div>
  <div class="reader-metric-stat"><span class="reader-metric-val">600+ שחקנים</span><span class="reader-metric-lbl">מאגר פרמייר ליג מלא</span></div>
  <div class="reader-metric-stat"><span class="reader-metric-val">2–5 שניות</span><span class="reader-metric-lbl">זמן חישוב הרכב אופטימלי</span></div>
</div>
<div class="reader-challenge-block"><strong>פתרון בעיית תרמיל מורכבת:</strong> שילוב אילוצי הרכב קשיחים (2 שוערים, 5 הגנה, 5 קישור, 3 התקפה ומקסימום 3 מאותה קבוצה) עם מודל מומנטום שחקנים. כולל Smart Caching מול ה-FPL Official API (תוקף 30 דקות) ומערכת דוחות והמלצות קפטן מלאה ב-HTML עם תמיכת RTL.</div>`,
      en: `<p class="reader-story-lead">Constrained optimization suite for Fantasy Premier League removing emotional bias from team selections.</p>
<div class="reader-metrics-banner">
  <div class="reader-metric-stat"><span class="reader-metric-val">£100.0M</span><span class="reader-metric-lbl">Strict Knapsack budget cap</span></div>
  <div class="reader-metric-stat"><span class="reader-metric-val">600+ Players</span><span class="reader-metric-lbl">Live Premier League dataset</span></div>
  <div class="reader-metric-stat"><span class="reader-metric-val">2–5 Sec</span><span class="reader-metric-lbl">Optimal squad generation time</span></div>
</div>
<div class="reader-challenge-block"><strong>Constrained Optimization:</strong> Solves integer programming constraints (15 players, formation slots, 3-per-club limit) combined with momentum scoring. Features 30-minute API caching and automated HTML squad management reports.</div>`
    },
    tech: ['Constrained Optimization', 'Knapsack Problem', 'Python', 'FPL Official API', 'Data Caching', 'HTML Reports'],
    repo: 'https://github.com/davidkorenblit/fpl_assistant',
    status: 'In Progress'
  },
  {
    id: 'lab-3',
    slug: 'semantic-hoops',
    volume: 'NOTEBOOK C',
    cover: 'parchment',
    title: { en: 'Semantic Sport-Tech', he: 'Semantic Sport-Tech' },
    pitch: {
      he: `<p class="reader-story-lead">חיפוש סמנטי של מהלכי וידאו בספורט בטקסט חופשי — שילוב OpenAI CLIP ומסד נתונים וקטורי Qdrant.</p>
<div class="reader-metrics-banner">
  <div class="reader-metric-stat"><span class="reader-metric-val">162K → 16K</span><span class="reader-metric-lbl">חיתוך 85-90% מהפריימים</span></div>
  <div class="reader-metric-stat"><span class="reader-metric-val">&lt;50ms</span><span class="reader-metric-lbl">זמן שליפה וקטורית ב-Qdrant</span></div>
  <div class="reader-metric-stat"><span class="reader-metric-val">512 ממדים</span><span class="reader-metric-lbl">קידוד CLIP ViT עם HNSW</span></div>
</div>
<div class="reader-challenge-block"><strong>דגימה אדפטיבית וחיפוש וקטורי:</strong> במקום לסרוק 162,000 פריימים במשחק של 90 דקות, מנוע <strong>Optical Flow (Farneback)</strong> דוגם רק פריימים בעלי משמעות תנועתית. הפריימים מקודדים במודל CLIP ונשמרים באינדקס HNSW ב-Qdrant לשליפה מהירה דרך נקודות קצה של FastAPI בקונטיינר Multi-stage CUDA.</div>`,
      en: `<p class="reader-story-lead">Text-to-video semantic search over sports footage powered by OpenAI CLIP embeddings and Qdrant vector database.</p>
<div class="reader-metrics-banner">
  <div class="reader-metric-stat"><span class="reader-metric-val">162K → 16K</span><span class="reader-metric-lbl">85-90% optical flow reduction</span></div>
  <div class="reader-metric-stat"><span class="reader-metric-val">&lt;50ms</span><span class="reader-metric-lbl">Sub-millisecond Qdrant retrieval</span></div>
  <div class="reader-metric-stat"><span class="reader-metric-val">512-dim</span><span class="reader-metric-lbl">CLIP ViT vectors + HNSW index</span></div>
</div>
<div class="reader-challenge-block"><strong>Smart Ingestion & Vector Search:</strong> Adaptive optical flow sampling condenses match video while retaining action semantics. Employs a plug-and-play <code>BaseEmbedder</code> abstraction, Qdrant batched indexing, and FastAPI Pydantic v2 endpoints in a CUDA multi-stage Docker build.</div>`
    },
    tech: ['OpenAI CLIP', 'Qdrant (HNSW)', 'Optical Flow (Farneback)', 'FastAPI (Pydantic v2)', 'Docker (CUDA)', 'Multimodal AI'],
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
      he: `<p class="reader-story-lead">פלטפורמת Full-Stack שמגשרת בין המלצות תזונאים קליניות לביצוע יומיומי בעזרת Generative AI.</p>
<div class="reader-metrics-banner">
  <div class="reader-metric-stat"><span class="reader-metric-val">0 Regex</span><span class="reader-metric-lbl">הבנה סמנטית של קונטקסט</span></div>
  <div class="reader-metric-stat"><span class="reader-metric-val">Full-Stack</span><span class="reader-metric-lbl">React + FastAPI + Docker</span></div>
  <div class="reader-metric-stat"><span class="reader-metric-val">JWT Auth</span><span class="reader-metric-lbl">אימות Stateless מאובטח</span></div>
</div>
<div class="reader-challenge-block"><strong>מעבר ממילות מפתח לקונטקסט:</strong> במקום התאמת מחרוזות שבירה, המערכת משתמשת ב-<strong>Google Gemini Pro API</strong> לפענוח הנחיות מורכבות ("העלה חלבון רק בימי אימון") ותרגומן ליעדי מעקב דינמיים. כולל דשבורד עמידה ביעדים, ממשק React + Tailwind ו-Backend ב-FastAPI ו-SQLAlchemy.</div>`,
      en: `<p class="reader-story-lead">Full-stack platform bridging professional nutritionist notes and daily tracking using Generative AI.</p>
<div class="reader-metrics-banner">
  <div class="reader-metric-stat"><span class="reader-metric-val">Zero Regex</span><span class="reader-metric-lbl">Semantic context understanding</span></div>
  <div class="reader-metric-stat"><span class="reader-metric-val">Full-Stack</span><span class="reader-metric-lbl">React + FastAPI + Docker</span></div>
  <div class="reader-metric-stat"><span class="reader-metric-val">JWT Auth</span><span class="reader-metric-lbl">Stateless secure sessions</span></div>
</div>
<div class="reader-challenge-block"><strong>Contextual AI over Keywords:</strong> Leverages <strong>Google Gemini Pro</strong> to parse unstructured dietary instructions into adaptive compliance targets. Built on a containerized React + Tailwind frontend, FastAPI + SQLAlchemy backend, and JWT authentication.</div>`
    },
    tech: ['React.js + Tailwind', 'FastAPI', 'Google Gemini Pro', 'SQLAlchemy', 'JWT Stateless Auth', 'Docker Compose'],
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
      he: `<p class="reader-story-lead">מערכת מודיעין טכנולוגי אוטונומית לאיסוף, סיווג, סיכום ודיון במאמרי טכנולוגיה ומחקר.</p>
<div class="reader-metrics-banner">
  <div class="reader-metric-stat"><span class="reader-metric-val">12 ערוצים</span><span class="reader-metric-lbl">9 מקורות RSS ו-3 APIs</span></div>
  <div class="reader-metric-stat"><span class="reader-metric-val">~82% דיוק</span><span class="reader-metric-lbl">סיווג אוטומטי ל-12 נושאים</span></div>
  <div class="reader-metric-stat"><span class="reader-metric-val">2–5 שניות</span><span class="reader-metric-lbl">זמן תגובת צ'אטבוט Gemini</span></div>
</div>
<div class="reader-challenge-block"><strong>NLP וסיכום היברידי:</strong> איסוף מקבילי של כ-140 מאמרים בכל סבב (Hacker News, Reddit, GitHub וערוצי טכנולוגיה), סיכום משולב באמצעות מודל <strong>BART-large-CNN</strong> למניעת הלוצינציות, צ'אטבוט מבוסס <strong>Gemini 1.5 Flash</strong>, מסד נתונים רלציוני ב-PostgreSQL וממשק Streamlit אינטראקטיבי.</div>`,
      en: `<p class="reader-story-lead">Autonomous intelligence pipeline collecting, classifying, summarizing, and discussing technology research articles.</p>
<div class="reader-metrics-banner">
  <div class="reader-metric-stat"><span class="reader-metric-val">12 Feeds</span><span class="reader-metric-lbl">9 RSS sources + 3 Live APIs</span></div>
  <div class="reader-metric-stat"><span class="reader-metric-val">~82% Acc</span><span class="reader-metric-lbl">Classification across 12 topics</span></div>
  <div class="reader-metric-stat"><span class="reader-metric-val">2–5 Sec</span><span class="reader-metric-lbl">Gemini 1.5 Flash chat response</span></div>
</div>
<div class="reader-challenge-block"><strong>Hybrid Summarization & NLP:</strong> Ingests ~140 articles per run into PostgreSQL schema. Uses <strong>Hugging Face BART</strong> for hallucination-free summarization paired with a conversational <strong>Gemini 1.5 Flash</strong> assistant and Streamlit interface.</div>`
    },
    tech: ['Hugging Face BART', 'Google Gemini 1.5 Flash', 'PostgreSQL', 'Python Data Pipelines', 'Streamlit', 'NLP'],
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
  if (pitchEl) pitchEl.innerHTML = item.pitch[currentLang];

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
