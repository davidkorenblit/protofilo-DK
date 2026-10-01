/* =================================================================
   David's Library – Grand 3D Study & Portfolio Engine
   Pure Vanilla ES6+. Zero dependencies.
   ================================================================= */

// =====================================================================
// DATA — PULLED DIRECTLY FROM SPECIFICATION & EMPIRICAL REPOSITORIES
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
    tech: ['Machine Learning (ML)', 'Python / Data Pipelines', 'Hugging Face', 'Scikit-Learn', 'PostgreSQL', 'Docker', 'FastAPI', 'Azure AI & RAG', 'C++17 (RAII)'],
    demo: '',
    repo: '',
    isMemoir: true,
    spreads: [
      {
        page1: {
          lead: {
            he: 'לקח לי חמש שנים לסיים תואר במדעי המחשב. הסיבה שזה לקח חמש שנים במקום שלוש היא שהייתי צריך להשלים את כל פערי הלימודים מאפס, אחרי שנים שהוקדשו כולן ללימוד תורה בישיבה. זה היה עולם עמוק ומעצב, אבל בנקודה מסוימת הבנתי שאני רוצה וצריך גם כלים נוספים.',
            en: 'It took me five years to finish a CS degree instead of three because I started from scratch—closing academic gaps after years of full-time Torah study in yeshiva. It was a deeply formative world, but at a certain point, I realized I wanted and needed new tools.'
          },
          metrics: [
            { val: { he: '5 שנים', en: '5 Years' }, lbl: { he: 'השלמת פערים ותואר', en: 'Catching up & CS Degree' } },
            { val: { he: 'רק 2', en: 'Only 2' }, lbl: { he: 'חצו את קו הסיום במחזור', en: 'Finished in cohort' } },
            { val: { he: '100%', en: '100%' }, lbl: { he: 'משמעת עצמית ואחריות', en: 'Grit & Accountability' } }
          ]
        },
        page2: {
          chapter: { he: 'המבחן האמיתי והגישה לטעויות', en: 'THE CRUCIBLE & PERSPECTIVE' },
          heading: { he: 'אותנטיות, חוסן ומסע אישי', en: 'Rigor, Crucible & Authenticity' },
          text: {
            he: 'המעבר הזה — מבית המדרש המסורתי ישירות לסביבה אקדמית הישגית ותחרותית שבה כל צעד נמדד במספרים — לא היה טיול בפארק. זה היה מאבק עיקש. לאורך הדרך, המחזור שלי כמעט והתפרק לגמרי; אנשים מוכשרים נשרו בזה אחר זה, עד שנשארנו רק שניים שחצו את קו הסיום.',
            en: 'Transitioning from a traditional study hall to a fiercely competitive, metric-driven academic world was no walk in the park. Along the way, my cohort practically fell apart—talented people dropped out until only two of us crossed the finish line.'
          },
          insight: {
            he: 'אז כן, תמצאו פסקאות שנשמעות כמו עוד קורות חיים על כמה שאני "חרוץ וממוקד". אבל המציאות פשוטה בהרבה: אני פשוט לא מפחד לטעות, לחטוף את המכה וללמוד ממנה. כי בסופו של יום, בלי טעויות אי אפשר באמת להתנסות — ובלי להתנסות, אי אפשר לבנות שום דבר בעל ערך.',
            en: 'So yes, later you’ll see typical resume phrases about being "diligent and driven." But reality is simpler: I am not afraid to mess up, take the hit, and learn. Without mistakes you cannot experiment—and without experimenting, you cannot build value.'
          }
        }
      },
      {
        page3: {
          heading: { he: 'איך אני משתלב בצוות: כנות, העמקה ואחריות', en: 'Team Dynamics: Candor, Grit & Ownership' },
          steps: [
            {
              badge: { he: 'תקשורת כנה', en: 'Candor' },
              title: { he: 'שאלות נוקבות ועמידה מאחורי הקוד', en: 'Probing Questions & Ownership' },
              desc: { he: 'אני אהיה זה שאשאל בהתחלה שאלות שאולי יכולות קצת להציק, אבל גם אדע לענות על שאלות על מה שהכנתי ולעמוד מאחורי מה שבניתי.', en: 'I will likely be the one asking probing questions early on, but I also stand firmly behind my work and answer every question about what I built.' }
            },
            {
              badge: { he: 'דו-לשוניות', en: 'Bilingual' },
              title: { he: 'יכולת הצגה טכנית בעברית ובאנגלית', en: 'Technical Presentation in EN & HE' },
              desc: { he: 'במהלך התואר, התמודדתי בהצלחה ביכולת ההצגה של פרויקטים מורכבים בעברית ובאנגלית ופיתחתי את יכולות ההבעה שלי בשתי השפות.', en: 'Successfully presented complex projects in both English and Hebrew throughout university, sharpening communication across both tongues.' }
            },
            {
              badge: { he: 'אחריות כוללת', en: 'Ownership' },
              title: { he: 'עמידה באתגרים ולא בריחה מהם', en: 'Enduring Challenges & Taking Responsibility' },
              desc: { he: 'היכולת שלי "לסבול" את הזמנים הקשים, להתמודד עם האתגרים ולא לברוח מהם, ולקבל את מלוא האחריות מהתפקיד ומסביב לו.', en: 'Beyond technical skills, my ability to endure the grind, face challenges head-on without dodging, and take full ownership is what makes me the teammate you need.' }
            }
          ],
          resilience: {
            he: '(אה, ואני ממש אוהב לקדוח בנתונים, למידת מכונה (ML) ומודלים של Hugging Face, ולהבין מהם תובנות, אבל כאילו ממש אוהב).',
            en: '(Oh, and I genuinely love drilling into data, Machine Learning (ML), and Hugging Face models to unearth insights. Like, really love it).'
          }
        },
        page4: {}
      }
    ]
  },
  {
    id: 1,
    slug: 'aiac',
    cover: 'oxblood',
    volume: 'VOL. I',
    title: {
      en: 'AIAC – NBA Analytics & In-Game Decision Engine',
      he: 'AIAC – NBA Analytics & In-Game Decision Engine'
    },
    tech: ['CausalML (X-Learner)', 'MLflow & DagsHub', 'LightGBM', 'Supabase (PostgreSQL)', 'FastAPI', 'Streamlit', 'Python 3.11', 'nba_api'],
    demo: 'https://davidkorenblit.github.io/nba-ai-coach-assistant/',
    repo: 'https://github.com/davidkorenblit/nba-ai-coach-assistant',
    spreads: [
      {
        page1: {
          lead: {
            he: 'זה מתסכל לשבת על הספה ולצרוח על המאמן (או המסך) "קח כבר פסק זמן!!!!". אז הנה מערכת שתדע לספר למאמן שהוא נרדם בעמידה – ואפקטיבית ב-שיפור של 32.9% בעצירת ריצות יריב (בחלון של 90 שניות), תוספת של כ-0.79 נקודות לפוזשן בספוטי הקצה (Top 5%), ושווי ערך אסטרטגי של תוספת כ-3.2 ניצחונות בעונה.',
            en: 'It’s frustrating sitting on the couch screaming at the coach (or the screen) "Take a timeout already!". So here is a system that alerts the coach when they are asleep at the wheel — with a verified 32.9% improvement in stopping opponent runs (within a 90-second window), adding ~0.79 points per possession in high-leverage spots (Top 5%), and delivering a strategic equivalent of ~3.2 extra wins per season.'
          },
          metrics: [
            { val: { he: '+32.9%', en: '+32.9%' }, lbl: { he: 'עצירת ריצות יריב (בפסק זמן בריצה ≥6)', en: 'Run disruption (timeout at run ≥6)' } },
            { val: { he: '+0.79', en: '+0.79' }, lbl: { he: 'נקודות/פוזשן נטו בדקות שאחרי פסק זמן', en: 'Net pts/poss in post-timeout minutes' } },
            { val: { he: '~3.2 Wins', en: '~3.2 Wins' }, lbl: { he: 'תוספת ניצחונות משוערת לעונה', en: 'Expected added wins per season' } },
            { val: { he: '11 שלבים', en: '11 Steps' }, lbl: { he: 'צנרת MLOps אוטומטית מקצה לקצה', en: 'Automated end-to-end MLOps pipeline' } }
          ]
        },
        page2: {
          chapter: { he: 'אתגר הסקת המסקנות הסיבתית', en: 'THE CAUSAL INFERENCE CRUCIBLE' },
          heading: { he: 'רגרסיה נאיבית מול מודל סיבתי מבוסס X-Learner', en: 'Naive Correlation vs. Causal Meta-Learner' },
          text: {
            he: 'האתגר הגדול ביותר בניתוח החלטות מאמן ב-NBA הוא הטיית בחירה (Selection Bias): מאמנים נוטלים פסקי זמן לרוב כשהקבוצה כבר בפיגור עמוק או סופגת מומנטום שלילי. מודל חיזוי נאיבי יסיק שפסקי זמן פוגעים בקבוצה! כדי לפתור זאת, AIAC מיישם Causal Meta-Learner (X-Learner) המבודד את אפקט הטיפול (Treatment Effect) מהמשתנים המתווכים (הפרש נקודות, בית/חוץ, עייפות חמישייה ושעון המשחק).',
            en: 'The core challenge in NBA decision analytics is Selection Bias: coaches call timeouts primarily when their team is already trailing or facing negative momentum. A naive model concludes timeouts harm the team! AIAC applies a Causal Meta-Learner (X-Learner) to isolate true Treatment Effects from confounders (point margin, home court, lineup fatigue, game clock).'
          },
          insight: {
            he: 'ממצא אמפירי: ריצת יריב של 6+ נקודות מחייבת פסק זמן מיידי (91.4% הצלחה בעצירת הריצה מול 58.5% ללא פסק זמן). השהיית ההחלטה לריצה של 10+ נקודות שוחקת כ-65% מאפקטיביות הבלימה של המומנטום.',
            en: 'Empirical finding: An opposing run of 6+ points demands an immediate timeout (91.4% disruption rate vs 58.5% without). Delaying until a 10+ run erodes ~65% of the momentum-braking efficacy.'
          }
        }
      },
      {
        page3: {
          heading: { he: 'צנרת MLOps בת 11 שלבים ומנוע החלטות חי', en: '11-Step MLOps Pipeline & Real-Time Engine' },
          steps: [
            {
              badge: { he: 'שלב 1–3', en: 'Steps 1–3' },
              title: { he: 'איסוף ואימות איכות מקדים', en: 'Ingestion & Pre-FE Quality QA' },
              desc: { he: 'שאיבת Play-by-Play גולמי מ-nba_api, ניקוי שעוני זריקות ו-8 בדיקות איכות נתונים מקדימות (Pre-FE Tests) למניעת דלף מידע (Data Leakage).', en: 'Raw play-by-play ingestion via nba_api, shot clock synchronization, and 8 strict pre-feature-engineering tests preventing data leakage.' }
            },
            {
              badge: { he: 'שלב 4–7', en: 'Steps 4–7' },
              title: { he: 'הנדסה סיבתית ואימון X-Learner', en: 'Causal Engineering & X-Learner Training' },
              desc: { he: 'חילוץ פוזשנים, חישוב עייפות מצטברת של חמישיות, ואימון מודלי X-Learner עם LightGBM Base Learners לחילוץ אפקטים נוגדי-מציאות (Counterfactuals).', en: 'Possession parsing, cumulative lineup fatigue tracking, and X-Learner training with LightGBM base learners for counterfactual effects.' }
            },
            {
              badge: { he: 'שלב 8–11', en: 'Steps 8–11' },
              title: { he: 'מעקב MLflow וסנכרון Supabase', en: 'MLflow Tracking & Supabase Persistence' },
              desc: { he: 'רישום ניסויים ומטא-דאטה ב-MLflow, אופטימיזציית היפר-פרמטרים וסנכרון הסתברויות למסד נתונים Supabase (PostgreSQL) לשליפה תת-שנייתית.', en: 'Experiment logging and model registry via MLflow/DagsHub, hyperparameter tuning, and live inference sync to Supabase (PostgreSQL).' }
            }
          ],
          resilience: {
            he: 'זמן חישוב הסתברות תת-שנייתי (<150ms) המאפשר תגובה חיה לקצב המשחק, כולל מנגנון Fallback היוריסטי מובנה להבטחת שרידות מלאה במקרה של ניתוק זמני מ-NBA API.',
            en: 'Sub-second inference (<150ms) for live game flow, backed by an autonomous heuristic fallback safeguarding execution if live NBA API streams degrade.'
          }
        },
        page4: {}
      }
    ]
  },
  {
    id: 2,
    slug: 'wsl',
    cover: 'navy',
    volume: 'VOL. II',
    title: {
      en: 'WSL Data Hub – Women’s Football Intelligence',
      he: 'WSL Data Hub – Women’s Football Intelligence'
    },
    tech: ['Python', 'Polars', 'Pandas', 'Plotly Express', 'Streamlit', 'FotMob API / Scraping', 'xG Modeling', 'Scouting Radar'],
    demo: 'https://davidkorenblit.github.io/wsl-data-hub/',
    repo: 'https://github.com/davidkorenblit/wsl-data-hub',
    spreads: [
      {
        page1: {
          lead: {
            he: 'אני אוהב ספורט, אני אוהב נתונים ואני אוהב אתגרים. כל זה יחד גרמו לי לקחת את ליגת הנשים בכדורגל האנגלית ולנסות לתת עליה תחזיות אנליטיות. זה מאתגר כי הדאטא חלקי ומפוזר הרבה יותר – הזדמנות מצוינת לפייפליינים שפוגשים את המציאות, וכמובן לכתוב על ספורט, שגם את זה אפשר לטעון שאני אוהב.',
            en: 'I love sports, I love data, and I love hard challenges. All three came together when I decided to take the English Women’s Super League and build analytical forecasts around it. It’s challenging because the data is far more fragmented and sparse — a perfect playground for production pipelines that meet the messy real world, and of course an excuse to write about sports, which one could also argue I love.'
          },
          metrics: [
            { val: { he: '12 מועדונים', en: '12 Clubs' }, lbl: { he: 'כיסוי ליגה מלא של כל קבוצות ה-WSL', en: 'Complete Barclays WSL league coverage' } },
            { val: { he: '132 משחקים', en: '132 Matches' }, lbl: { he: 'ניתוח עונתי מלא עם מודל שערים צפויים (xG)', en: 'Full season analysis with xG models' } },
            { val: { he: '40+ מדדי P90', en: '40+ P90 Stats' }, lbl: { he: 'השוואת אחוזונים מנורמלת לפי עמדות שחקניות', en: 'Normalized percentile ranks by positional role' } },
            { val: { he: '<200ms', en: '<200ms' }, lbl: { he: 'שליפת נתונים ועיבוד גרפי אינטראקטיבי', en: 'Interactive data query & rendering speed' } }
          ]
        },
        page2: {
          chapter: { he: 'סקאוטינג מבוסס נתונים', en: 'DATA-DRIVEN SCOUTING & ANALYTICS' },
          heading: { he: 'מנתונים גולמיים לתובנות סקאוטינג עמדתיות', en: 'From Fragmented Stats to Positional Intelligence' },
          text: {
            he: 'בכדורגל נשים, נתונים גולמיים לרוב מקוטעים, לא אחידים או נעולים מאחורי פלטפורמות סגורות ויקרות. WSL Data Hub הוקם כדי לספק תשתית נתונים פתוחה, מדעית ונגישה למאמנים, אנליסטים ואוהדים. המערכת מחשבת מפות בעיטות (Shot Maps), מסירות מפתח, נשיאות כדור מתקדמות (Progressive Carries) ומדדי פעולות לחץ והגנה מנורמלים ל-90 דקות.',
            en: 'In women\'s football, raw data is often fragmented, unstandardized, or locked behind costly closed platforms. WSL Data Hub bridges this gap by establishing an open, scientific data asset for coaches, scouts, and analysts. The system computes expected goals (xG), shot maps, progressive carries, key passes, and defensive pressure metrics normalized per 90 minutes.'
          },
          insight: {
            he: 'נורמליזציה לפי עמדות: השוואת שחקניות נעשית על פי אחוזונים עמדתיים (Percentile Ranks) מול 5 טמפלייטים ייעודיים (חלוצות, קשריות 6/8, בלמות, מגנות ושוערות), המונעים עיוות סטטיסטי הנובע מסגנון המשחק הקבוצתי.',
            en: 'Role-based Percentile Benchmarking: Players are evaluated against 5 dedicated positional templates (Strikers, Midfielders 6/8, Center Backs, Fullbacks, Goalkeepers) preventing tactical bias from skewing scout ratings.'
          }
        }
      },
      {
        page3: {
          heading: { he: 'ארכיטקטורת נתונים, עיבוד ב-Polars ותרשימי ראדאר', en: 'Data Architecture, Polars Processing & Radars' },
          steps: [
            {
              badge: { he: 'FotMob Client', en: 'FotMob Client' },
              title: { he: 'קליינט נתונים חסין תקלות', en: 'Resilient API & Scraping Client' },
              desc: { he: 'קליינט פייתון ייעודי הכולל מנגנון Caching מקומי, בקרת קצב בקשות (Rate Limiting) ומניעת חסימות או כפילויות.', en: 'Custom modular Python client featuring local disk caching, automated request pacing, and schema drift handlers.' }
            },
            {
              badge: { he: 'Polars / Pandas', en: 'Polars Engine' },
              title: { he: 'עיבוד טבלאי מהיר', en: 'High-Performance Tabular Pipeline' },
              desc: { he: 'שילוב Pandas ו-Polars לחישוב מדדים מורכבים ונורמליזציה לעמדות בזמן אפסי, כולל אגרגציות עונתיות ופילוגים.', en: 'High-speed tabular vectorization using Polars and Pandas for complex aggregations and per-90 normalization.' }
            },
            {
              badge: { he: 'Plotly / Streamlit', en: 'Interactive Viz' },
              title: { he: 'מנוע ויזואליזציה אינטראקטיבי', en: 'Interactive Radar & Pitch Charts' },
              desc: { he: 'תרשימי ראדאר מתקדמים (Radar Charts), מפות מיקום בעיטות ורשתות מסירה באמצעות Plotly ו-Streamlit.', en: 'Positional radar wheels, interactive shot maps, and passing networks generated via Plotly and Streamlit.' }
            }
          ],
          resilience: {
            he: 'שמירה מקומית וענן של נתוני עונות קודמות לצורך מעקב התפתחות שחקניות לאורך זמן, עם מנגנון ולידציה על שמות שחקניות ומזהי מועדונים למניעת כפילויות.',
            en: 'Longitudinal player trajectory tracking across seasons, verified with automated name/club ID reconciliation ensuring zero historical duplicate records.'
          }
        },
        page4: {}
      }
    ]
  },
  {
    id: 3,
    slug: 'azure-rag',
    cover: 'forest',
    volume: 'VOL. III',
    title: {
      en: 'SharePoint RAG & Enterprise Agent Platform',
      he: 'SharePoint RAG & Enterprise Agent Platform'
    },
    tech: ['FastAPI', 'Azure AI Search', 'Azure OpenAI (GPT-4o)', 'Azure Functions', 'Bicep (IaC)', 'Azure Managed Identity', 'Storage Queues', 'OpenTelemetry'],
    demo: '',
    repo: 'https://github.com/davidkorenblit/lab-for-tecktika',
    spreads: [
      {
        page1: {
          lead: {
            he: 'פלטפורמת סוכנים ו-RAG ארגונית מבוססת ענן Azure, המאפשרת לחבר מאגרי SharePoint ו-OneDrive לצ\'אטבוט מבוסס מודלי שפה מתקדמים, ללא זליגת סודות ועם ניהול הרשאות קפדני.',
            en: 'Enterprise-grade RAG and autonomous agent platform on Microsoft Azure, connecting massive SharePoint and OneDrive document lakes to advanced LLMs with zero secret leakage and strict permission trimming.'
          },
          metrics: [
            { val: { he: '0 סודות', en: 'Zero Secrets' }, lbl: { he: 'ארכיטקטורה באמצעות Azure Managed Identity', en: 'Pure Azure Managed Identity authentication' } },
            { val: { he: '100% IaC', en: '100% IaC' }, lbl: { he: 'פריסה מלאה ואוטומטית באמצעות קבצי Bicep', en: 'Fully automated provisioning via Bicep files' } },
            { val: { he: 'Azure AI Search', en: 'Azure AI Search' }, lbl: { he: 'חיפוש היברידי (וקטורי + BM25 + סמנטי)', en: 'Hybrid vector + BM25 keyword + semantic rerank' } },
            { val: { he: 'Event-Driven', en: 'Event-Driven' }, lbl: { he: 'אינדוקס מבוזר עם Storage Queues ו-Functions', en: 'Decoupled async indexing via Storage Queues' } }
          ]
        },
        page2: {
          chapter: { he: 'אבטחת מידע בארגוני ענק', en: 'ENTERPRISE SECURITY & RBAC' },
          heading: { he: 'ארכיטקטורת Zero-Trust ואינדוקס אינקרמנטלי', en: 'Zero-Trust Architecture & Incremental Indexing' },
          text: {
            he: 'בסביבה ארגונית, RAG פשוט הוא פצצת זמן: מספיק שמפתח ישמור מפתח API בקוד או שהסוכן יחזיר לעובד מידע מתוך מסמך שכר חסוי. המערכת תוכננה בארכיטקטורת Zero-Trust: אין מפתחות API או סיסמאות באף קובץ קונפיגורציה – הכל מאומת דרך Azure Entra ID ו-Managed Identities. כל שאילתה עוברת סינון הרשאות אבטחה (Security Trimming) מול הרשאות ה-SharePoint המקוריות.',
            en: 'In enterprise deployments, naive RAG is a ticking liability: a leaked API key or a chatbot revealing confidential payroll data to unauthorized staff can be catastrophic. The platform is architected on Zero-Trust: zero hardcoded credentials, leveraging Azure Entra ID Managed Identities throughout. Inquiries enforce dynamic security trimming against native SharePoint ACLs.'
          },
          insight: {
            he: 'אינדוקס אינקרמנטלי: שינויים במסמכים נקראים א-סינכרונית, ורק צ\'אנקים שהשתנו מוטמעים מחדש (Chunk Size 400–600 tokens עם 10–15% חפיפה), מה שמונע עלויות כפולות ומבטיח מידע עדכני תמיד.',
            en: 'Smart Incremental Chunking: Modulated at 400–600 tokens with 10–15% overlap. Only mutated documents trigger vector embedding recomputation, saving thousands in LLM API expenses.'
          }
        }
      },
      {
        page3: {
          heading: { he: 'ארכיטקטורת ענן מבוזרת, Bicep ו-Observability', en: 'Distributed Cloud Architecture & Observability' },
          steps: [
            {
              badge: { he: 'FastAPI Gateway', en: 'FastAPI Gateway' },
              title: { he: 'שער API מאובטח', en: 'Session & Guardrail Gateway' },
              desc: { he: 'שרת FastAPI מאובטח המנהל שיחות, ולידציה וסשנים, ומתקשר עם מודל שפה Azure OpenAI (GPT-4o).', en: 'Asynchronous FastAPI gateway managing conversation state, Pydantic schemas, and Azure OpenAI (GPT-4o) inference.' }
            },
            {
              badge: { he: 'Azure AI Search', en: 'Hybrid Retrieval' },
              title: { he: 'חיפוש היברידי וסמנטי', en: 'Vector + BM25 + Reranker' },
              desc: { he: 'אינדקס היברידי המשלב Vector Search (וקטורים ב-text-embedding-3-large), BM25 Keyword Search, ו-Semantic Reranker לדיוק מקסימלי.', en: 'High-recall vector search with text-embedding-3-large combined with BM25 inverted index and deep semantic reranking.' }
            },
            {
              badge: { he: 'Azure Functions', en: 'Queue Indexer' },
              title: { he: 'אינדוקס מבוזר בתורים', en: 'Event-Driven Document Worker' },
              desc: { he: 'שינויים ב-SharePoint נשלחים ל-Azure Storage Queue ומעובדים ברקע על ידי Azure Functions ללא חסימת משתמשי הקצה.', en: 'Webhooks enqueue jobs into Azure Storage Queues, consumed asynchronously by serverless Azure Functions.' }
            },
            {
              badge: { he: 'Bicep & Telemetry', en: 'IaC & Tracing' },
              title: { he: 'פריסה בקוד וניטור עמוק', en: 'Pure IaC & OpenTelemetry' },
              desc: { he: '100% מהמשאבים מוגדרים בקבצי Bicep, עם ניטור מקצה לקצה ב-Application Insights & OpenTelemetry.', en: '100% cloud infrastructure codified in Bicep templates with comprehensive OpenTelemetry tracing.' }
            }
          ],
          resilience: {
            he: 'בידוד תקלות ו-Tracing: כל פניית משתמש מקבלת Trace ID ייחודי המאפשר מעקב אחרי Latency, צריכת טוקנים, וטיפול ב-Rate Limiting של מודלי שפה.',
            en: 'End-to-end trace correlation via OpenTelemetry capturing latency bottlenecks, token consumption, and model rate limit backoff curves.'
          }
        },
        page4: {}
      }
    ]
  },
  {
    id: 4,
    slug: 'cpp-physics',
    cover: 'charcoal',
    volume: 'VOL. IV',
    title: {
      en: 'C++ 2D Physics Engine & Arcade Game',
      he: 'C++ 2D Physics Engine & Arcade Game'
    },
    tech: ['C++17', 'SFML 2.5', 'Box2D Physics', 'CMake', 'Design Patterns (Visitor/Observer)', '100% RAII', 'Valgrind'],
    demo: '',
    repo: 'https://github.com/davidkorenblit/OOP2_Project',
    spreads: [
      {
        page1: {
          lead: {
            he: 'מנוע משחק ופיזיקה דו-ממדי מונחה-עצמים מלא שנכתב ב-C++17 טהור, המשלב סימולציית וקטורים מדויקת, ניהול זיכרון קפדני ומימוש של ששה דפוסי עיצוב קלאסיים ללא פשרות.',
            en: 'High-performance 2D vehicle physics engine and arcade game built from the ground up in modern C++17, SFML, and Box2D, strictly implementing 6 classic design patterns and 100% RAII memory discipline.'
          },
          metrics: [
            { val: { he: '60 FPS', en: '60 FPS' }, lbl: { he: 'קצב פריימים נעול ויציב בזמן אמת', en: 'Deterministic real-time execution loop' } },
            { val: { he: '100% RAII', en: '100% RAII' }, lbl: { he: 'אפס זליגות זיכרון עם Smart Pointers בלבד', en: 'Zero memory leaks verified under Valgrind' } },
            { val: { he: '6 Patterns', en: '6 Patterns' }, lbl: { he: 'Visitor, Observer, Factory, Singleton, State, Template', en: 'Visitor, Observer, Factory, Singleton, State, Template' } },
            { val: { he: 'Box2D & SFML', en: 'Box2D & SFML' }, lbl: { he: 'הפרדה נקייה בין מודל פיזיקלי לרינדור גרפי', en: 'Decoupled physics simulation & render stages' } }
          ]
        },
        page2: {
          chapter: { he: 'אתגר ה-Double Dispatch', en: 'DOUBLE DISPATCH & SYSTEM ARCHITECTURE' },
          heading: { he: 'פתרון התנגשויות נקי בעזרת Visitor Pattern', en: 'Collision Double Dispatch without RTTI' },
          text: {
            he: 'אחד האתגרים הקשים במנועי משחק מונחי-עצמים הוא טיפול בהתנגשויות בין עשרות סוגי אובייקטים (שחקן מול אויב, טיל מול קיר, בונוס מול שחקן) מבלי להיגרר לסוללת switch-case או dynamic_cast איטיים ששוברים פולימורפיזם. הפתרון יושם באמצעות Visitor Pattern (Double Dispatch), המאפשר טיפול בהתנגשויות בזמן קומפילציה ביעילות מירבית ובבטיחות טיפוסים מלאה.',
            en: 'A classic trap in object-oriented game engines is collision handling across dozens of entity pairs (Player vs Enemy, Projectile vs Wall, Powerup vs Player) which easily degrades into massive switch-cases or costly runtime dynamic_cast operations. We resolved this cleanly via the Visitor Pattern (Double Dispatch), achieving compile-time safety and peak performance.'
          },
          insight: {
            he: 'הפרדת תחומי אחריות: הארכיטקטורה מפרידה לחלוטין את לולאת עדכון הפיזיקה (Fixed Timestep ב-Box2D) מלולאת הציור הגרפי ב-SFML, מה שמבטיח התנהגות דטרמיניסטית ועקבית בכל חומרה ומסך.',
            en: 'Strict Separation of Concerns: Physics simulation runs on a deterministic fixed timestep decoupled from SFML graphical frame rendering, guaranteeing identical physics across hardware.'
          }
        }
      },
      {
        page3: {
          heading: { he: 'דפוסי עיצוב תוכנה ומשמעת זיכרון ב-C++17', en: 'Software Design Patterns & C++17 RAII Systems' },
          steps: [
            {
              badge: { he: 'State Pattern', en: 'State Pattern' },
              title: { he: 'מכונת מצבים היררכית', en: 'Hierarchical State Machine' },
              desc: { he: 'ניהול מכונת מצבים לכל מעברי המשחק (Menu, Playing, Paused, GameOver) עם אתחול וניקוי מובטחים.', en: 'Manages game state lifecycle (Menu, Playing, Paused, LevelComplete, GameOver) with guaranteed resource teardown.' }
            },
            {
              badge: { he: 'Factory & Template', en: 'Factory / Template' },
              title: { he: 'טעינת שלבים דינמית', en: 'Dynamic Level Spawning' },
              desc: { he: 'טעינה דינמית של ישויות ושלבים מתוך קבצי טקסט מובנים באמצעות Factories ייעודיים.', en: 'Spawns world entities from textual board descriptors using polymorphic factory methods.' }
            },
            {
              badge: { he: 'Observer & Singleton', en: 'Observer / Singleton' },
              title: { he: 'אירועים רופפים וקאשינג', en: 'Event Bus & Resource Cache' },
              desc: { he: 'צימוד רופף להשמעת צלילים ועדכון ממשק משתמש (HUD) לצד Singleton המנהל קאשינג של טקסטורות וגופנים.', en: 'Loose event decoupling for audio and UI updates, paired with singleton texture and font caching.' }
            }
          ],
          resilience: {
            he: 'משמעת זיכרון קפדנית: שימוש בלעדי ב-std::unique_ptr ו-std::shared_ptr, ללא raw pointers לבעלות, ואפס זליגות זיכרון שנבדקו באופן שיטתי תחת Valgrind.',
            en: '100% RAII memory discipline using std::unique_ptr and std::shared_ptr exclusively. Validated with Valgrind sanitizers achieving 0 alloc leaks.'
          }
        },
        page4: {}
      }
    ]
  }
];

const LAB_NOTEBOOKS = [
  {
    id: 'lab-1',
    slug: 'chess-ml',
    volume: 'NOTEBOOK A',
    cover: 'charcoal',
    title: { en: 'Chess ML – Master Game Analysis', he: 'Chess ML – Master Game Analysis' },
    status: 'In Progress',
    tech: ['scikit-learn', 'PostgreSQL', 'Python', 'GridSearchCV', 'Chess.com API', 'HTML Automated Reports'],
    repo: 'https://github.com/davidkorenblit/Chess',
    spreads: [
      {
        page1: {
          lead: {
            he: 'מודל למידת מכונה לחיזוי תוצאות משחקי שחמט על בסיס דאטה היסטורי מ-Chess.com, המשלב גילוי שחקנים אוטונומי, הנדסת פיצ\'רים מתקדמת ב-PostgreSQL ומודלי סיווג.',
            en: 'Machine learning pipeline predicting chess match outcomes from historical Chess.com grandmaster archives, combining autonomous player discovery, SQL feature engineering, and classifiers.'
          },
          metrics: [
            { val: { he: '250+ שחקנים', en: '250+ Players' }, lbl: { he: 'גילוי אוטונומי ב-Snowball Sampling מ-12 זרעים', en: 'Snowball sampling discovery from 12 seeds' } },
            { val: { he: 'PostgreSQL', en: 'PostgreSQL' }, lbl: { he: 'הנדסת מאפיינים מורכבת ושאילתות SQL מותאמות', en: 'Complex SQL views for win rates & openings' } },
            { val: { he: 'GridSearchCV', en: 'GridSearchCV' }, lbl: { he: 'אופטימיזציית היפר-פרמטרים מקיפה', en: '5-fold cross-validated hyperparameter tuning' } },
            { val: { he: 'HTML Reports', en: 'HTML Reports' }, lbl: { he: 'הפקת דוחות אנליטיים אוטומטיים בשניות', en: 'Automated analytics report generated in seconds' } }
          ]
        },
        page2: {
          chapter: { he: 'הפרדת רשויות והנדסת נתונים', en: 'DECOUPLED ARCHITECTURE & FEATURE ENGINEERING' },
          heading: { he: 'מאיסוף Snowball ועד לדוחות אינטראקטיביים', en: 'From Snowball Crawling to Fast Reporting' },
          text: {
            he: 'ניתוח מאגרי שחמט גדולים דורש אופטימיזציה קפדנית: המערכת מיישמת אלגוריתם Snowball Sampling שגילה מעל 250 שחקנים מתוך 12 שחקני זרע ראשוניים. הנדסת הפיצ\'רים (חישובי אחוזי ניצחון לפי צבע, פתיחות ודירוגי ELO) מתבצעת ישירות במסד PostgreSQL, מה שמונע טעינת מיליוני שורות לזיכרון ה-Python.',
            en: 'Analyzing vast chess archives demands database-level optimization: a Snowball Sampling algorithm autonomously discovered 250+ active grandmasters from 12 seed profiles. Feature engineering (win rates by color, opening book frequency, ELO differentials) is executed inside PostgreSQL, preventing RAM saturation in Python.'
          },
          insight: {
            he: 'הפרדה מוחלטת: שלב אימון המודלים (Random Forest ו-Gradient Boosting עם GridSearchCV) מופרד לחלוטין ממחולל הדוחות, ומאפשר הפקת דוחות HTML אינטראקטיביים עם מטריצות בלבול תוך שניות בודדות מתוך הנתונים השמורים.',
            en: 'Clean Decoupling: Training pipelines are completely decoupled from reporting, allowing interactive HTML analytical summaries to be generated in seconds from stored database tables.'
          }
        }
      },
      {
        page3: {
          heading: { he: 'צנרת הנתונים, מודלי ML ודוחות אוטומטיים', en: 'ML Pipeline, PostgreSQL Views & Reporting' },
          steps: [
            {
              badge: { he: 'Snowball Crawler', en: 'Snowball Crawler' },
              title: { he: 'איסוף נתונים מנוהל', en: 'Managed Chess.com Ingestion' },
              desc: { he: 'איסוף נתונים מנוהל מול Chess.com API עם בקרת קצב בקשות (Rate Limiting) ומניעת עומס.', en: 'Automated crawler traversing opponent graphs with rate-limiting and resume checkpoints.' }
            },
            {
              badge: { he: 'PostgreSQL Views', en: 'SQL Engineering' },
              title: { he: 'הנדסת מאפיינים ב-SQL', en: 'Database-Level Feature Aggregation' },
              desc: { he: 'חישוב סטטיסטיקות פתיחה, מומנטום והפרשי רמות ישירות בתוך שאילתות ואינדקסים במסד.', en: 'Materialized views and window functions computing opening win shares and rating gaps.' }
            },
            {
              badge: { he: 'scikit-learn ML', en: 'scikit-learn ML' },
              title: { he: 'סיווג ואופטימיזציה', en: 'Model Tuning & Evaluation' },
              desc: { he: 'אימון מודלי RandomForest ו-GradientBoosting עם כוונון GridSearchCV ואימות צולב.', en: '5-fold cross-validated grid search tuning tree ensembles with feature importance ranking.' }
            }
          ],
          resilience: {
            he: 'שמירת מטא-דאטה וגרסאות מודלים ב-PostgreSQL המבטיחה יכולת שחזור מלאה של כל ניסוי ודוח ללא תלות בזיכרון זמני.',
            en: 'Persistent experiment metadata in PostgreSQL ensuring 100% deterministic reproducibility for every trained model artifact.'
          }
        },
        page4: {}
      }
    ]
  },
  {
    id: 'lab-2',
    slug: 'fpl-assistant',
    volume: 'NOTEBOOK B',
    cover: 'slate',
    title: { en: 'FPL Assistant – Knapsack Optimization', he: 'FPL Assistant – Knapsack Optimization' },
    status: 'In Progress',
    tech: ['Integer Linear Programming', 'Knapsack Optimization', 'Python', 'FPL Official API', 'Pandas', 'HTML Reports'],
    repo: 'https://github.com/davidkorenblit/fpl_assistant',
    spreads: [
      {
        page1: {
          lead: {
            he: 'מנוע אלגוריתמי לבניית הרכבי פנטזי אופטימליים ב-Premier League תחת מגבלות תקציב נוקשות וחוקים מורכבים, לנטרול הטיות פסיכולוגיות בבחירת שחקנים.',
            en: 'Algorithmic decision suite for Fantasy Premier League removing emotional bias from team selections via multi-dimensional knapsack optimization.'
          },
          metrics: [
            { val: { he: '£100.0M', en: '£100.0M' }, lbl: { he: 'אילוץ תקציב קשיח בבעיית Knapsack', en: 'Strict multi-choice knapsack budget cap' } },
            { val: { he: '15 שחקנים', en: '15 Players' }, lbl: { he: 'אילוצי הרכב לפי עמדות ומקסימום 3 ממועדון', en: 'Formation slot constraints (2-5-5-3) & club caps' } },
            { val: { he: 'ציון מומנטום', en: 'Momentum Model' }, lbl: { he: 'שקלול דינמי של xG, xA, פציעות ולוח משחקים', en: 'Weighted dynamic xG/xA & fixture difficulty' } },
            { val: { he: '2–5 שניות', en: '2–5 Sec' }, lbl: { he: 'זמן חישוב הרכב אופטימלי מלא', en: 'Optimal squad generation latency' } }
          ]
        },
        page2: {
          chapter: { he: 'אופטימיזציה קומבינטורית', en: 'COMBINATORIAL OPTIMIZATION' },
          heading: { he: 'פתרון בעיית תרמיל הגב תחת אילוצים מרובים', en: 'Solving Multi-Constrained Knapsack at Scale' },
          text: {
            he: 'מספר הקומבינציות לבחירת 15 שחקנים מתוך מאגר של מעל 600 שחקני פרמייר ליג תחת תקציב של £100M, חלוקה לעמדות (2 שוערים, 5 הגנה, 5 קישור, 3 התקפה) ומגבלה של מקסימום 3 שחקנים מכל מועדון הוא אסטרונומי. הפתרון מיושם באמצעות מידול כבעיית תכנות לינארי שלמים (ILP) הפותרת את המשוואה תוך אלפיות שניה.',
            en: 'Selecting the optimal 15-player squad from 600+ Premier League footballers under a £100M cap, strict positional quotas (2 GK, 5 DEF, 5 MID, 3 FWD), and a max-3-per-club rule represents an astronomical search space. Formulated as an Integer Linear Programming (ILP) problem solved in milliseconds.'
          },
          insight: {
            he: 'קאשינג ודוחות RTL: כולל מנגנון Smart Caching מול ה-FPL Official API (תוקף 30 דקות למניעת עומס) ומחולל דוחות והמלצות קפטן מלא ב-HTML עם תמיכת RTL.',
            en: 'Smart Caching & Reporting: Features a 30-minute time-to-live cache against the official FPL endpoints and automated HTML squad recommendations with full RTL support.'
          }
        }
      },
      {
        page3: {
          heading: { he: 'מודל המומנטום, אלגוריתם ה-ILP וממשק הניהול', en: 'Momentum Scoring, ILP Solver & Reporting' },
          steps: [
            {
              badge: { he: 'FPL API & Cache', en: 'FPL API & Cache' },
              title: { he: 'איסוף נתונים חי וקאשינג', en: 'Live Ingestion & TTL Cache' },
              desc: { he: 'משיכת נתוני שחקנים, מחירי שוק ופציעות מה-FPL API הרשמי עם מנגנון קאשינג מקומי.', en: 'Ingests live player status, price changes, and injury news with 30-minute local disk caching.' }
            },
            {
              badge: { he: 'Momentum Model', en: 'Momentum Model' },
              title: { he: 'מודל שקלול נקודות צפויות', en: 'Expected Points & Difficulty Model' },
              desc: { he: 'שקלול מדדי כושר נוכחי, שערים ובישולים צפויים (xG/xA), ודירוג קושי משחקים (FDR).', en: 'Synthesizes recent form, underlying xG/xA trends, and home/away fixture difficulty.' }
            },
            {
              badge: { he: 'Knapsack Solver', en: 'Knapsack Solver' },
              title: { he: 'מנוע האופטימיזציה', en: 'Branch-and-Bound ILP Solver' },
              desc: { he: 'פתרון מתמטי מהיר של אילוצי התקציב וההרכב למציאת ההרכב המנצח.', en: 'Branch-and-bound solver maximizing projected return subject to all structural FPL constraints.' }
            }
          ],
          resilience: {
            he: 'עמידות מלאה לשינויי מחירים ופציעות של הרגע האחרון, כולל בדיקת ולידציה של תקציב יתרה והרכב ספסל.',
            en: 'Automated fallback handles sudden player price swings and last-minute injury designations.'
          }
        },
        page4: {}
      }
    ]
  },
  {
    id: 'lab-3',
    slug: 'semantic-hoops',
    volume: 'NOTEBOOK C',
    cover: 'parchment',
    title: { en: 'Semantic Sport-Tech Video Search', he: 'Semantic Sport-Tech Video Search' },
    status: 'Research',
    tech: ['OpenAI CLIP', 'Qdrant (HNSW)', 'Optical Flow (Farneback)', 'FastAPI', 'Docker (CUDA)', 'Multimodal AI'],
    repo: 'https://github.com/davidkorenblit/SemanticHoops',
    spreads: [
      {
        page1: {
          lead: {
            he: 'מנוע חיפוש סמנטי לקטעי וידאו של כדורגל וספורט המאפשר איתור אירועים טקטיים באמצעות שפה טבעית או תמונות ייחוס, תוך שימוש במודלי ראייה ממוחשבת מולטי-מודאליים.',
            en: 'Text-to-video semantic search over sports footage powered by multimodal vision transformers, dense optical flow sampling, and high-performance vector retrieval.'
          },
          metrics: [
            { val: { he: '162K → 16K', en: '162K → 16K' }, lbl: { he: 'צמצום של 85-90% בפריימים ללא איבוד אירועים', en: '85-90% optical flow frame reduction' } },
            { val: { he: '<50ms', en: '<50ms' }, lbl: { he: 'זמן שליפה וקטורית ב-Qdrant', en: 'Sub-50ms vector similarity lookup' } },
            { val: { he: '512 ממדים', en: '512-dim' }, lbl: { he: 'קידוד CLIP ViT עם אינדקס HNSW', en: 'CLIP ViT-B/32 multimodal embeddings' } },
            { val: { he: 'CUDA Docker', en: 'CUDA Docker' }, lbl: { he: 'האצת GPU מנוהלת בקונטיינר Multi-stage', en: 'Multi-stage containerized GPU runtime' } }
          ]
        },
        page2: {
          chapter: { he: 'ראייה ממוחשבת אדפטיבית', en: 'ADAPTIVE COMPUTER VISION' },
          heading: { he: 'דגימה אדפטיבית מבוססת תנועה וחיפוש וקטורי', en: 'Motion-Aware Keyframing & Vector Indexing' },
          text: {
            he: 'במקום לסרוק 162,000 פריימים במשחק של 90 דקות (בזבוז אדיר של זיכרון וכוח חישוב), מנוע Optical Flow (Farneback) דוגם רק פריימים בעלי משמעות תנועתית ואקשן. הפריימים הנבחרים מקודדים במודל OpenAI CLIP ונשמרים באינדקס HNSW ב-Qdrant לשליפה מהירה דרך נקודות קצה של FastAPI.',
            en: 'Scanning 162,000 frames from a 90-minute broadcast is computationally prohibitive. Our adaptive Farneback Optical Flow sampler condenses video by 85–90% while preserving game actions. Extracted keyframes are embedded via CLIP ViT into a Qdrant HNSW index queried by a FastAPI gateway.'
          },
          insight: {
            he: 'הפשטת מודלים: שימוש באבסטרקט BaseEmbedder מאפשר החלפה חלקה בין מודלי CLIP, SigLIP או מודלים ייעודיים לספורט ללא שינוי בקוד השליפה או ב-Qdrant.',
            en: 'Modular Embedder Abstraction: A BaseEmbedder interface enables zero-downtime swapping between CLIP, SigLIP, or domain-tuned models without altering the retrieval layer.'
          }
        }
      },
      {
        page3: {
          heading: { he: 'צנרת עיבוד הוידאו, אינדוקס ב-Qdrant ו-CUDA', en: 'Video Pipeline, Qdrant HNSW & CUDA Docker' },
          steps: [
            {
              badge: { he: 'Farneback Flow', en: 'Optical Flow' },
              title: { he: 'סינון תנועה מקדים', en: 'Dense Motion Keyframe Filtering' },
              desc: { he: 'חישוב וקטורי תנועה בין פריימים עוקבים לסינון קטעים סטטיים וצמצום של כ-90% בעומס החישוב.', en: 'Dense optical flow analysis dropping redundant static frames prior to GPU embedding.' }
            },
            {
              badge: { he: 'CLIP ViT', en: 'CLIP Embedder' },
              title: { he: 'קידוד מולטי-מודאלי', en: 'Multimodal Vision Embedding' },
              desc: { he: 'הטמעת תמונות וטקסט לאותו מרחב וקטורי בן 512 ממדים המאפשר חיפוש בשפה חופשית.', en: 'Maps text queries and visual keyframes into a shared 512-dimensional semantic latent space.' }
            },
            {
              badge: { he: 'Qdrant HNSW', en: 'Qdrant HNSW' },
              title: { he: 'מסד נתונים וקטורי', en: 'Sub-Millisecond Vector Search' },
              desc: { he: 'אינדקס HNSW מהיר התומך במיליוני וקטורים עם סינון מטא-דאטה (זמן משחק, מצלמה, קבוצה).', en: 'High-throughput HNSW index with metadata payload filtering by match timestamp and team.' }
            }
          ],
          resilience: {
            he: 'קונטיינר Multi-stage Docker מותאם CUDA עם שיתוף זיכרון אופטימלי למניעת צווארי בקבוק בעיבוד וידאו כבד.',
            en: 'Multi-stage Docker container with pinned CUDA drivers and batched asynchronous inference pipelines.'
          }
        },
        page4: {}
      }
    ]
  },
  {
    id: 'lab-4',
    slug: 'dailybite',
    volume: 'NOTEBOOK D',
    cover: 'forest',
    title: { en: 'DailyBite – AI Nutrition & Caloric Engine', he: 'DailyBite – AI Nutrition & Caloric Engine' },
    status: 'Finishing',
    tech: ['React.js + Tailwind', 'FastAPI', 'Google Gemini Pro', 'SQLAlchemy', 'JWT Stateless Auth', 'Docker Compose'],
    repo: 'https://github.com/davidkorenblit/nutrition-tracker',
    spreads: [
      {
        page1: {
          lead: {
            he: 'פלטפורמת Full-Stack שמגשרת בין המלצות תזונאים קליניות לביצוע יומיומי בעזרת Generative AI, מעקב קלורי ופירוק מדויק של מתכונים.',
            en: 'Full-stack platform bridging clinical nutritionist recommendations and daily compliance via Generative AI, structured JSON parsing, and relational tracking.'
          },
          metrics: [
            { val: { he: '0 Regex', en: 'Zero Regex' }, lbl: { he: 'הבנה סמנטית של קונטקסט ומצרכים', en: 'Semantic context parsing over brittle regex' } },
            { val: { he: 'Full-Stack', en: 'Full-Stack' }, lbl: { he: 'React SPA + FastAPI + PostgreSQL', en: 'React SPA + FastAPI + PostgreSQL container' } },
            { val: { he: 'JWT Auth', en: 'JWT Auth' }, lbl: { he: 'אימות Stateless מאובטח', en: 'Stateless secure session management' } },
            { val: { he: '<800ms', en: '<800ms' }, lbl: { he: 'זמן תגובה ממוצע של שירותי ה-API', en: 'Average API request-response roundtrip' } }
          ]
        },
        page2: {
          chapter: { he: 'מעבר ממילות מפתח לקונטקסט', en: 'CONTEXTUAL AI OVER KEYWORDS' },
          heading: { he: 'פענוח הנחיות תזונה מורכבות בעזרת Gemini Pro', en: 'Parsing Dietary Directives with Structured JSON' },
          text: {
            he: 'במקום התאמת מחרוזות שבירה (Regex), המערכת משתמשת ב-Google Gemini Pro לפענוח הנחיות מורכבות ("העלה חלבון רק בימי אימון, והגבל פחמימות בערב") ותרגומן ליעדי מעקב דינמיים עם סכמת JSON מובנית. הדשבורד מציג עמידה ביעדים, מעקב מיקרו-נוטריינטים ופירוק מתכונים מדויק.',
            en: 'Moving beyond brittle regex keyword matching, DailyBite leverages Google Gemini Pro to parse free-form clinical notes ("Increase protein only on training days, restrict complex carbs after 7pm") into deterministic JSON tracking targets. Features real-time compliance meters and recipe nutritional breakdown.'
          },
          insight: {
            he: 'בטיחות וארכיטקטורה: מודל אימות מבוסס JWT ללא שמירת Session בצד שרת (Stateless), עם מיגרציות Alembic ומסד נתונים רלציוני מנורמל ב-PostgreSQL.',
            en: 'Architectural Security: Stateless JWT authentication paired with SQLAlchemy ORM, Alembic migrations, and normalized PostgreSQL tables.'
          }
        }
      },
      {
        page3: {
          heading: { he: 'ארכיטקטורת המערכת: React, FastAPI ו-Gemini Pro', en: 'System Blueprint: React, FastAPI & Gemini Pro' },
          steps: [
            {
              badge: { he: 'React Client', en: 'React Client' },
              title: { he: 'ממשק משתמש אינטראקטיבי', en: 'Responsive SPA & Dashboard' },
              desc: { he: 'ממשק React מודרני המציג מעקב קלורי חי, חלוקת מאקרו-נוטריינטים וגרפי התקדמות.', en: 'Interactive React SPA rendering live caloric meters and macro distribution breakdowns.' }
            },
            {
              badge: { he: 'FastAPI Backend', en: 'FastAPI Backend' },
              title: { he: 'שרת API מהיר ומאובטח', en: 'Asynchronous Application Gateway' },
              desc: { he: 'שכבת Backend מהירה ב-FastAPI עם ולידציה מלאה ב-Pydantic וניהול סשנים ב-JWT.', en: 'High-throughput FastAPI gateway enforcing Pydantic models and JWT session headers.' }
            },
            {
              badge: { he: 'Gemini Engine', en: 'Gemini Engine' },
              title: { he: 'מנוע AI מובנה סכמה', en: 'Structured Output Engine' },
              desc: { he: 'חיבור ישיר ל-Gemini Pro עם הנחיות פלט מובנות (Structured Outputs) לדיוק מרבי.', en: 'Direct Gemini Pro prompt pipeline returning validated JSON entities for caloric databases.' }
            }
          ],
          resilience: {
            he: 'אינטגרציית Docker Compose מלאה לסביבות פיתוח וייצור עם הפרדה מוחלטת בין בסיס הנתונים לשרתי ה-API.',
            en: 'Complete multi-container Docker Compose topology isolating databases, caching, and API endpoints.'
          }
        },
        page4: {}
      }
    ]
  },
  {
    id: 'lab-5',
    slug: 'technews-ai',
    volume: 'NOTEBOOK E',
    cover: 'navy',
    title: { en: 'Tech News AI – Autonomous Intelligence', he: 'Tech News AI – Autonomous Intelligence' },
    status: 'Upgrading',
    tech: ['Hugging Face BART', 'Google Gemini 1.5 Flash', 'PostgreSQL', 'Python Data Pipelines', 'Streamlit', 'NLP'],
    repo: 'https://github.com/davidkorenblit/TechNewsAIAssistant',
    spreads: [
      {
        page1: {
          lead: {
            he: 'מערכת מודיעין טכנולוגי אוטונומית לאיסוף, סיווג, סיכום אבסטרקטי ודיון אינטראקטיבי במאמרי טכנולוגיה ומחקר מרובי מקורות.',
            en: 'Autonomous intelligence pipeline collecting, classifying, summarizing, and discussing technology research articles from distributed feeds.'
          },
          metrics: [
            { val: { he: '12 ערוצים', en: '12 Feeds' }, lbl: { he: '9 מקורות RSS טכנולוגיים ו-3 APIs חיים', en: '9 RSS sources + 3 live APIs (HN, Reddit, GitHub)' } },
            { val: { he: '~140 מאמרים', en: '~140 Articles' }, lbl: { he: 'סריקה ואיסוף מקבילי בכל סבב', en: 'Parallel ingestion per intelligence cycle' } },
            { val: { he: '~82% דיוק', en: '~82% Acc' }, lbl: { he: 'סיווג אוטומטי ל-12 נושאים טכנולוגיים', en: 'Automated classification across 12 topics' } },
            { val: { he: '2–5 שניות', en: '2–5 Sec' }, lbl: { he: 'זמן תגובת צ\'אטבוט Gemini 1.5 Flash', en: 'Conversational response latency' } }
          ]
        },
        page2: {
          chapter: { he: 'NLP וסיכום היברידי', en: 'HYBRID SUMMARIZATION & NLP' },
          heading: { he: 'שילוב BART לסיכום אבסטרקטי עם Gemini Flash', en: 'Combining BART Abstractive Summaries & Gemini' },
          text: {
            he: 'סיכום המסתמך אך ורק על LLMs כלליים נוטה להלוצינציות ועולה בטוקנים רבים. הפתרון משלב מודל ייעודי BART-large-CNN לסיכום עובדתי ותמציתי של המאמרים, ומשאיר לצ\'אטבוט ה-Gemini 1.5 Flash רק את הדיאלוג והתובנות האינטראקטיביות מול המשתמש, עם שמירת כל הנתונים במסד נתונים רלציוני ב-PostgreSQL.',
            en: 'Relying exclusively on large generative models for bulk summarization risks hallucinations and ballooning token bills. Tech News AI adopts a hybrid paradigm: Hugging Face BART-large-CNN produces factual, grounded summaries, while conversational Gemini 1.5 Flash handles contextual Q&A against PostgreSQL archives.'
          },
          insight: {
            he: 'סריקה מקבילית וקאשינג: איסוף מקבילי של כ-140 מאמרים בכל סבב מ-Hacker News, Reddit, GitHub וערוצי טכנולוגיה, תוך סינון כפילויות ומניעת עומס.',
            en: 'Parallel Ingestion: Concurrent workers pull ~140 articles per run from Hacker News, Reddit, GitHub, and RSS feeds, deduplicated and classified into 12 core verticals.'
          }
        }
      },
      {
        page3: {
          heading: { he: 'צנרת ה-NLP, מסד PostgreSQL וממשק Streamlit', en: 'NLP Pipeline, PostgreSQL Schema & Streamlit' },
          steps: [
            {
              badge: { he: 'Parallel Ingest', en: 'Parallel Ingest' },
              title: { he: 'סריקה ואיסוף מקבילי', en: 'Distributed Feed Workers' },
              desc: { he: 'איסוף נתונים מקבילי מ-12 ערוצים עם ניקוי HTML, חילוץ טקסט מלא ומניעת כפילויות.', en: 'Multithreaded workers ingesting RSS and REST endpoints, extracting text and metadata.' }
            },
            {
              badge: { he: 'BART Summary', en: 'BART Summary' },
              title: { he: 'סיכום אבסטרקטי מדויק', en: 'Hugging Face BART Summarizer' },
              desc: { he: 'סיכום תמציתי ומבוסס עובדות באמצעות מודל BART ללא סכנת הלוצינציות של מודלי שיחה.', en: 'BART-large-CNN generating abstractive summaries grounded directly in source text.' }
            },
            {
              badge: { he: 'Gemini Chat', en: 'Gemini Chat' },
              title: { he: 'סוכן שיחה חכם', en: 'Gemini 1.5 Flash Q&A' },
              desc: { he: 'צ\'אטבוט מהיר ב-Gemini המאפשר תחקור עמוק, השוואה בין מאמרים וסיעור מוחות.', en: 'Conversational agent providing cross-article analysis and thematic queries.' }
            }
          ],
          resilience: {
            he: 'סכמת נתונים רלציונית מלאה ב-PostgreSQL המאפשרת מעקב היסטורי, חיפוש טקסטואלי וסיווג לפי תגיות.',
            en: 'PostgreSQL relational persistence with full-text search indexing and relational tag mapping.'
          }
        },
        page4: {}
      }
    ]
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

  // If reader modal is currently open, re-render the active spread
  const modal = document.getElementById('book-reader-modal');
  if (modal && modal.classList.contains('is-open')) {
    const currentBook = currentReaderList[currentReaderIndex];
    if (currentBook) {
      renderBookSpread(currentBook, currentReaderType, currentSpreadIndex);
    }
  }
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
// RENDER: LAB NOTEBOOKS (SHELF II - Field notes & Stitched folios)
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
      <!-- Notebook Stitched Spine -->
      <div class="book-spine" aria-label="${titleText}">
        <div class="spine-band"></div>
        <div class="spine-volume">${nb.volume}</div>
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
// GRAND OPEN BOOK VIEWER (MULTI-SPREAD ENGINE WITH PHYSICAL FLIP)
// =====================================================================
let currentReaderList = FEATURED_BOOKS;
let currentReaderType = 'featured';
let currentReaderIndex = 0;
let currentSpreadIndex = 0;

function openGrandBook(item, type, targetSpread = 0) {
  const modal = document.getElementById('book-reader-modal');
  if (!modal) return;

  currentReaderType = type;
  currentReaderList = (type === 'featured') ? FEATURED_BOOKS : LAB_NOTEBOOKS;
  const foundIndex = currentReaderList.findIndex(b => b.slug === item.slug);
  currentReaderIndex = foundIndex !== -1 ? foundIndex : 0;
  currentSpreadIndex = targetSpread;

  // Deep-link hash
  try {
    if (item.slug) {
      history.replaceState(null, null, '#' + item.slug);
    }
  } catch (e) {}

  // Update Toolbar indicator & volume buttons
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

  // Render the spread content
  renderBookSpread(item, type, currentSpreadIndex);

  // Open modal
  modal.classList.add('is-open');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';

  // Auto focus close button for accessibility
  document.getElementById('reader-close-btn')?.focus();
}

function renderBookSpread(item, type, spreadIndex = 0) {
  const bookSpread = document.getElementById('open-book-element');
  const leftContainer = document.getElementById('reader-page-left-content');
  const rightContainer = document.getElementById('reader-page-right-content');
  if (!bookSpread || !leftContainer || !rightContainer) return;

  bookSpread.dataset.cover = item.cover || 'charcoal';

  const spreads = item.spreads || [];
  const currentSpread = spreads[spreadIndex] || spreads[0];
  const totalSpreads = spreads.length || 1;

  // Update internal spread navigation bar
  const spreadCurrentEl = document.getElementById('reader-spread-current');
  const spreadTotalEl   = document.getElementById('reader-spread-total');
  const spreadPrevBtn   = document.getElementById('reader-spread-prev');
  const spreadNextBtn   = document.getElementById('reader-spread-next');
  const spreadPipsEl    = document.getElementById('reader-spread-pips');

  if (spreadCurrentEl) spreadCurrentEl.textContent = spreadIndex + 1;
  if (spreadTotalEl)   spreadTotalEl.textContent = totalSpreads;
  if (spreadPrevBtn)   spreadPrevBtn.disabled = (spreadIndex === 0);
  if (spreadNextBtn)   spreadNextBtn.disabled = (spreadIndex === totalSpreads - 1);

  if (spreadPipsEl) {
    spreadPipsEl.innerHTML = '';
    for (let i = 0; i < totalSpreads; i++) {
      const pip = document.createElement('span');
      pip.className = 'spread-pip' + (i === spreadIndex ? ' active' : '');
      spreadPipsEl.appendChild(pip);
    }
  }

  // Category Badge Text
  let catText = '';
  if (type === 'featured') {
    catText = currentLang === 'he' ? 'פרויקט דגל · מערכת ליבה' : 'FLAGSHIP SYSTEM · CORE WORK';
  } else {
    catText = currentLang === 'he' ? `מעבדת מחקר ופרוטוטיפים · ${item.status || ''}` : `RESEARCH LAB & PROTOTYPES · ${item.status || ''}`;
  }

  // SPREAD 0 (Pages 1 & 2: Story, Hook, Empirical Metrics & Problem Challenge)
  if (spreadIndex === 0) {
    // PAGE 1 (Left DOM child: Right page in RTL, Left in LTR)
    leftContainer.innerHTML = `
      <div class="page-top-meta">
        <span class="reader-volume-badge">${item.volume}</span>
        <span class="reader-category-badge">${catText}</span>
      </div>
      <h2 class="reader-book-title">${item.title[currentLang]}</h2>
      <div class="reader-gold-divider">
        <span class="divider-line"></span>
        <span class="divider-diamond">✦</span>
        <span class="divider-line"></span>
      </div>
      <div class="reader-page-text">
        <p class="reader-story-lead">${currentSpread.page1.lead[currentLang]}</p>
        <div class="reader-metrics-banner">
          ${currentSpread.page1.metrics.map(m => `
            <div class="reader-metric-stat">
              <span class="reader-metric-val">${m.val[currentLang]}</span>
              <span class="reader-metric-lbl">${m.lbl[currentLang]}</span>
            </div>
          `).join('')}
        </div>
      </div>
      <div class="reader-page-footer">
        <span class="reader-folio-num">${currentLang === 'he' ? "עמ' 1" : "p. 1"}</span>
      </div>
    `;

    // PAGE 2 (Right DOM child: Left page in RTL, Right in LTR)
    rightContainer.innerHTML = `
      <div class="page-top-meta">
        <span class="reader-archive-stamp">${currentSpread.page2.chapter[currentLang]}</span>
      </div>
      <h3 class="reader-section-heading">${currentSpread.page2.heading[currentLang]}</h3>
      <div class="reader-page-text">
        <p class="reader-pitch-para" style="font-size: 0.95rem; line-height: 1.65; margin-bottom: 0.8rem;">
          ${currentSpread.page2.text[currentLang]}
        </p>
        <div class="reader-insight-highlight">
          <span class="reader-insight-icon">💡</span>
          <div>${currentSpread.page2.insight[currentLang]}</div>
        </div>
      </div>
      <div class="reader-page-footer">
        <span class="reader-folio-num">${currentLang === 'he' ? "עמ' 2" : "p. 2"}</span>
        <button class="reader-corner-turn-btn" id="reader-corner-turn-fwd">
          ${currentLang === 'he' ? 'הפוך דף לארכיטקטורה עמוקה ↷' : 'Turn page to Deep Architecture ↷'}
        </button>
      </div>
    `;
  }
  // SPREAD 1 (Pages 3 & 4: Deep Architecture, Pipeline Steps, Tech Chips & Code)
  else {
    // PAGE 3 (Left DOM child: Right page in RTL, Left in LTR)
    leftContainer.innerHTML = `
      <div class="page-top-meta">
        <span class="reader-volume-badge">${item.volume}</span>
        <span class="reader-category-badge">${currentLang === 'he' ? 'ארכיטקטורת מערכת וצנרת נתונים' : 'ARCHITECTURAL BLUEPRINT'}</span>
      </div>
      <h2 class="reader-book-title" style="font-size: clamp(1.25rem, 2vw, 1.65rem);">${currentSpread.page3.heading[currentLang]}</h2>
      <div class="reader-gold-divider">
        <span class="divider-line"></span>
        <span class="divider-diamond">✦</span>
        <span class="divider-line"></span>
      </div>
      <div class="reader-page-text">
        <div class="reader-arch-steps">
          ${currentSpread.page3.steps.map(s => `
            <div class="reader-arch-step">
              <span class="reader-step-badge">${s.badge[currentLang]}</span>
              <div class="reader-step-desc"><strong>${s.title[currentLang]}:</strong> ${s.desc[currentLang]}</div>
            </div>
          `).join('')}
        </div>
        <div class="reader-resilience-box">
          <strong>${currentLang === 'he' ? 'עמידות ובקרת איכות:' : 'Resilience & QA:'}</strong> ${currentSpread.page3.resilience[currentLang]}
        </div>
      </div>
      <div class="reader-page-footer">
        <button class="reader-corner-turn-btn" id="reader-corner-turn-back">
          ${currentLang === 'he' ? '↶ חזרה לסיפור הפרויקט' : '↶ Back to Narrative'}
        </button>
        <span class="reader-folio-num">${currentLang === 'he' ? "עמ' 3" : "p. 3"}</span>
      </div>
    `;

    // PAGE 4 (Right DOM child: Left page in RTL, Right in LTR)
    rightContainer.innerHTML = `
      <div class="page-top-meta">
        <span class="reader-archive-stamp">${currentLang === 'he' ? 'מפרט טכנולוגי וקוד' : 'TECHNICAL SPECIFICATION'}</span>
      </div>
      <h3 class="reader-section-heading">${currentLang === 'he' ? 'מחסנית טכנולוגית ומקורות' : 'Technology Stack & Source'}</h3>
      <div class="reader-tech-stack">
        ${(item.tech || []).map(t => `<span class="reader-tech-chip">${t}</span>`).join('')}
      </div>
      <div class="reader-action-box">
        ${item.demo ? `
          <a class="reader-btn reader-btn-primary" href="${item.demo}" target="_blank" rel="noopener">
            <span class="btn-icon">🚀</span>
            <span class="btn-text">${currentLang === 'he' ? 'הדגמה חיה ↗' : 'Launch Live Demo ↗'}</span>
          </a>
        ` : ''}
        ${item.repo ? `
          <a class="reader-btn reader-btn-secondary" href="${item.repo}" target="_blank" rel="noopener">
            <span class="btn-icon">💻</span>
            <span class="btn-text">${currentLang === 'he' ? 'קוד מקור ב-GitHub ↗' : 'Inspect Source Code ↗'}</span>
          </a>
        ` : ''}
        ${item.isMemoir ? `
          <button id="reader-btn-memoir-action" class="reader-btn reader-btn-memoir">
            <span class="btn-icon">📜</span>
            <span class="btn-text">${currentLang === 'he' ? 'מעבר לשולחן העבודה ↓' : "Proceed to Author's Desk ↓"}</span>
          </button>
        ` : ''}
      </div>
      <div class="reader-page-footer">
        <span class="reader-folio-num">${currentLang === 'he' ? "עמ' 4" : "p. 4"}</span>
      </div>
    `;
  }

  // Re-bind in-page corner and action buttons
  document.getElementById('reader-corner-turn-fwd')?.addEventListener('click', () => turnBookSpread(1));
  document.getElementById('reader-corner-turn-back')?.addEventListener('click', () => turnBookSpread(-1));
  document.getElementById('reader-btn-memoir-action')?.addEventListener('click', () => {
    closeGrandBook();
    document.getElementById('study-desk')?.scrollIntoView({ behavior: 'smooth' });
  });
}

function turnBookSpread(offset) {
  const currentItem = currentReaderList[currentReaderIndex];
  if (!currentItem || !currentItem.spreads) return;

  const targetSpread = currentSpreadIndex + offset;
  if (targetSpread >= 0 && targetSpread < currentItem.spreads.length) {
    const bookSpread = document.getElementById('open-book-element');
    const animationClass = offset > 0 ? 'page-turning-forward' : 'page-turning-backward';

    if (bookSpread) {
      bookSpread.classList.remove('page-turning-forward', 'page-turning-backward');
      void bookSpread.offsetWidth; // Force reflow
      bookSpread.classList.add(animationClass);
    }

    setTimeout(() => {
      currentSpreadIndex = targetSpread;
      renderBookSpread(currentItem, currentReaderType, currentSpreadIndex);
    }, 150);

    setTimeout(() => {
      if (bookSpread) bookSpread.classList.remove(animationClass);
    }, 350);
  }
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

    currentSpreadIndex = 0;
    openGrandBook(currentReaderList[targetIndex], currentReaderType, 0);
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
  const spreadPrev = document.getElementById('reader-spread-prev');
  const spreadNext = document.getElementById('reader-spread-next');

  closeBtn?.addEventListener('click', closeGrandBook);
  backdrop?.addEventListener('click', closeGrandBook);
  btnPrev?.addEventListener('click', () => navigateGrandBook(-1));
  btnNext?.addEventListener('click', () => navigateGrandBook(1));
  spreadPrev?.addEventListener('click', () => turnBookSpread(-1));
  spreadNext?.addEventListener('click', () => turnBookSpread(1));

  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (!modal || !modal.classList.contains('is-open')) return;

    if (e.key === 'Escape') {
      closeGrandBook();
    } else if (e.key === 'ArrowRight') {
      // In RTL: ArrowRight goes back
      const currentItem = currentReaderList[currentReaderIndex];
      const maxSpreads = currentItem?.spreads?.length || 1;
      if (currentLang === 'he') {
        if (currentSpreadIndex > 0) turnBookSpread(-1);
        else navigateGrandBook(-1);
      } else {
        if (currentSpreadIndex < maxSpreads - 1) turnBookSpread(1);
        else navigateGrandBook(1);
      }
    } else if (e.key === 'ArrowLeft') {
      // In RTL: ArrowLeft goes forward
      const currentItem = currentReaderList[currentReaderIndex];
      const maxSpreads = currentItem?.spreads?.length || 1;
      if (currentLang === 'he') {
        if (currentSpreadIndex < maxSpreads - 1) turnBookSpread(1);
        else navigateGrandBook(1);
      } else {
        if (currentSpreadIndex > 0) turnBookSpread(-1);
        else navigateGrandBook(-1);
      }
    } else if (e.key === 'PageDown' || e.key === ' ') {
      e.preventDefault();
      turnBookSpread(1);
    } else if (e.key === 'PageUp') {
      e.preventDefault();
      turnBookSpread(-1);
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
