# Portfolio Roadmap & Action Tasks: "David's Library"

A curated roadmap for elevating David Korenblit's personal portfolio into a world-class, intellectually authentic private study archive.

---

## 🎯 Core Product Vision & Narrative Philosophy

> **"Each book must feel like an authentic story of engineering curiosity and impact — not a dry resume bullet point."**

### Guiding Principles
1. **Story over Jargon:** Shift from listing raw frameworks to narrating the **Goal**, the **Genuine Obstacle**, and the **Clever Resolution**.
2. **Numbers with Weight:** Ground stories in empirical metrics (e.g., `32.9% run disruption rate`, `+0.79 net points/possession`, `~3.2 extra wins/season`).
3. **Upper Shelf vs. Lower Shelf Distinction:**
   - **Upper Shelf (Featured Works):** Flagship, production-grade, deployed architectures with verified impact.
   - **Lower Shelf (Research Notebooks):** Authentic R&D field notes showing constant curiosity, cutting-edge experimentation (CLIP, Vector DBs, Gemini LLMs), and rapid prototyping.
4. **Documentation Integrity:** Preserve David's distinct personal voice, hooks, and humor across all Hebrew and English narratives.

---

## 📚 Section 1: Detailed Project Narratives (Goals, Challenges & Stories)

*Synthesized from David's GitHub repositories and live deployments:*

### Volume I · AIAC – NBA ML & Causal Inference
* **GitHub Repository:** [`nba-ai-coach-assistant`](https://github.com/davidkorenblit/nba-ai-coach-assistant)
* **Live Deployment:** [SimCast Arena Interactive Demo](https://davidkorenblit.github.io/nba-ai-coach-assistant/)
* **The Story & Goal:**
  Sitting on the couch screaming *"Take a timeout already!"* is universal. But coaches often hesitate or call timeouts purely based on emotion when a run has already dealt fatal damage. The goal was to build an objective, real-time tactical assistant that detects game momentum shifts and predicts counterfactual outcomes.
* **The Engineering Challenge:**
  Standard regression models confuse correlation with causation — games with many timeouts are often blowouts where timeouts didn't help. The challenge was applying **Causal Inference** and survival/hazard modeling to evaluate what *would* happen to the point differential over the next 90-second window if a timeout is called versus not called.
* **Empirical Impact Metrics:**
  - **32.9% improvement** in stopping opponent runs within a 90-second evaluation window.
  - **+0.79 points/possession** gained in top 5% high-leverage moments.
  - **~3.2 additional expected wins per season** for an NBA franchise utilizing automated timeout triggers.
* **Next Content Tasks:**
  - [ ] Integrate a clean screenshot of the live *SimCast Arena* interface into the open book spread as an archival plate.
  - [ ] Add a visual breakdown of the Causal Inference decision curve.

---

### Volume II · WSL Data Hub – Sports Analytics & Engineering
* **GitHub Repository:** [`wsl-data-hub`](https://github.com/davidkorenblit/wsl-data-hub)
* **Live Deployment:** [WSL Data Hub Live Site](https://davidkorenblit.github.io/wsl-data-hub/)
* **The Story & Goal:**
  A fusion of passion for football, data, and hard challenges. The English Women's Super League (WSL) represents one of the fastest-growing competitions in sports, yet publicly available tactical data remains fragmented and inconsistent. The goal was to transform scattered records into an intuitive, visual hub offering match previews, expected goals (xG), and momentum charts.
* **The Engineering Challenge:**
  Unlike top men's leagues with unified commercial APIs, WSL data is sparse, unstructured, and often missing critical coordinates. The core engineering achievement was architecting **fault-tolerant scraping and ETL pipelines** that normalize disparate sources into clean Pandas/Polars schemas with automated validation and interactive visualizations.
* **Next Content Tasks:**
  - [ ] Add visual capture of the tactical momentum preview chart.
  - [ ] Document the automated data refresh pipeline.

---

### Volume III · Azure AI RAG Agent & Document Ingestion
* **GitHub Repositories:** [`lab-for-tecktika`](https://github.com/davidkorenblit/lab-for-tecktika) & [`chatbot`](https://github.com/davidkorenblit/chatbot)
* **The Story & Goal:**
  Most LLM demos are brittle toys that rely on hardcoded API keys and break on enterprise file structures. This project was built to deliver an enterprise-grade AI chatbot and document indexer capable of securely ingesting complex corporate SharePoint libraries into Azure AI Search.
* **The Engineering Challenge:**
  Security and production-readiness without compromise:
  - **Zero hardcoded secrets:** 100% passwordless authentication using `DefaultAzureCredential` and Azure System-Assigned Managed Identity.
  - **Infrastructure as Code (IaC):** Entire deployment parameterized and reproducible via Bicep templates.
  - **Hybrid Semantic Search:** Combining vector embeddings with BM25 keyword retrieval and cross-encoder re-ranking for enterprise citation accuracy.
* **Next Content Tasks:**
  - [ ] Create an architectural topology diagram (Bicep IaC → Managed Identity → Azure Functions → AI Search → React).
  - [ ] Summarize latency and retrieval precision benchmarks.

---

### Volume IV · 2D Vehicle Physics Engine (C++)
* **GitHub Repository:** [`OOP2_Project`](https://github.com/davidkorenblit/OOP2_Project)
* **The Story & Goal:**
  Demonstrating deep software craftsmanship at the bare-metal level. While high-level languages offer quick abstractions, building a deterministic 2D vehicle physics and parking simulator in pure modern C++ proves rigorous understanding of memory models, lifecycle safety, and real-time execution.
* **The Engineering Challenge:**
  Avoiding coupling and memory leaks in high-frequency event loops:
  - Decoupled manager architecture separating input handling, game state, SFML rendering, and Box2D physics.
  - Strict RAII (Resource Acquisition Is Initialization) for smart pointer memory safety without garbage-collection overhead.
* **Next Content Tasks:**
  - [ ] Capture a crisp GIF or screenshot of the vehicle collision & friction simulation in action.
  - [ ] Highlight the decoupled manager class diagram.

---

### Research Notebooks (The Lower Shelf R&D Pipeline)

*Highlighting the active experiments, hypotheses, and in-flight builds:*

1. **Notebook A · Chess ML Match Predictor** ([`Chess`](https://github.com/davidkorenblit/Chess))
   - *Goal:* Predict game outcomes based on opening lines, time management, and historical Chess.com player data.
   - *Challenge:* Handling high-cardinality opening move sequences and player rating discrepancies.
   - *Status:* Model fine-tuning & feature engineering.

2. **Notebook B · FPL Optimization Assistant** ([`fpl_assistant`](https://github.com/davidkorenblit/fpl_assistant))
   - *Goal:* Remove human emotion and recency bias from Fantasy Premier League decisions.
   - *Challenge:* Constrained integer linear programming (Knapsack variant) factoring in player injury risk, price momentum, and fixture difficulty ratings.
   - *Status:* Simulation tests on active gameweeks.

3. **Notebook C · Semantic Hoops (Multimodal Play Retrieval)** ([`SemanticHoops`](https://github.com/davidkorenblit/SemanticHoops))
   - *Goal:* Search basketball video archives using natural language queries (e.g., *"high pick and roll resulting in corner three"*).
   - *Challenge:* Aligning unstructured visual frames with tactical basketball semantics using OpenAI CLIP vision embeddings and Vector Databases (Qdrant / Milvus).
   - *Status:* Exploratory research & frame-extraction pipeline.

4. **Notebook D · DailyBite Nutrition Context Engine** ([`nutrition-tracker`](https://github.com/davidkorenblit/nutrition-tracker))
   - *Goal:* Bridge clinical nutritionist instructions to dynamic daily tracking targets.
   - *Challenge:* Parsing subjective, unstructured clinical notes via Gemini AI to extract deterministic caloric and macronutrient constraints.
   - *Status:* Finalizing full-stack web client.

5. **Notebook E · Tech News & Research Digest** ([`TechNewsAIAssistant`](https://github.com/davidkorenblit/TechNewsAIAssistant))
   - *Goal:* An automated intelligence scraper that monitors tech releases and academic arXiv preprints, categorizing and summarizing breakthroughs.
   - *Challenge:* Balancing concise summaries without hallucinating architectural details using BART and LLM pipelines.
   - *Status:* Upgrading ingestion pipelines.

---

## 🧭 Section 2: Chapter 0 & The Career Journey Timeline (The Author's Desk)

*Personal memoir and milestones for the 5-year journey in Computer Science (Author's Notebook):*

### Full Authentic Narrative (Bilingual)

#### Hebrew Version (עברית):
> "האמת היא שקשה לי להאמין שמישהו באמת קורא את כל זה עד הסוף, אבל אם הגעתם עד לכאן — מגיע לכם משהו קצת יותר אותנטי מעוד קורות חיים יבשים. בעוד רגע אכנס לקלישאות התאגידיות הרגילות על היכולת שלי לעבוד קשה, ללמוד מהר ולבנות תהליכי עבודה. אבל לפני הבאזווורדס, בואו נדבר על מה שבאמת עומד מאחוריהן.
>
> לקח לי חמש שנים לסיים תואר במדעי המחשב. הסיבה שזה לקח חמש שנים במקום שלוש היא שהייתי צריך להשלים את כל פערי הלימודים מאפס, אחרי שנים שהוקדשו כולן ללימוד תורה בישיבה. זה היה עולם עמוק ומעצב בפני עצמו, אבל בנקודה מסוימת הבנתי שאני רוצה וצריך גם כלים נוספים.
>
> המעבר הזה — מבית המדרש המסורתי ישירות לסביבה אקדמית הישגית ותחרותית שבה כל צעד נמדד במספרים — לא היה טיול בפארק. זה היה מאבק עיקש. לאורך הדרך, המחזור שלי כמעט והתפרק לגמרי; אנשים מוכשרים נשרו בזה אחר זה מסיבות מובנות, עד שנשארנו רק שניים שחצו את קו הסיום.
>
> אז כן, בהמשך תמצאו פסקאות שנשמעות כאילו בינה מלאכותית יצרה אותן על כמה שאני 'חרוץ, ממוקד ומכוון מטרה'. אבל המציאות פשוטה בהרבה: אני פשוט לא מפחד לטעות, לחטוף את המכה וללמוד ממנה. כי בסופו של יום, בלי טעויות אי אפשר באמת להתנסות — ובלי להתנסות, אי אפשר לבנות שום דבר בעל ערך.
>
> אני כנראה אהיה זה שבהתחלה ישאל שאלות שאולי יכולות קצת להציק, אבל באותה מידה אדע לעמוד מאחורי מה שהכנתי ולענות על כל שאלה. במהלך התואר התמודדתי בהצלחה עם הצגת פרויקטים (בעברית ובאנגלית) וחידדתי את יכולות ההבעה שלי בשתי השפות. מעבר לרשימת הטכנולוגיות — היכולת שלי 'לסבול' את הזמנים הקשים, להתמודד חזיתית עם האתגרים ולא לברוח מהם, ולקחת אחריות אמיתית על התפקיד ומה שמסביבו, היא מה שתשלים את הצוות שלכם.
>
> *(אה, ואני ממש אוהב לקדוח בנתונים ולהבין מהם תובנות. אבל כאילו, ממש אוהב).*
>
> **ארגז כלים טכנולוגי וניסיון מעשי:**
> לאורך התואר ובפרויקטים עצמאיים התמקדתי בתכנון מערכות מקצה לקצה ובצינורות עיבוד נתונים (Data Pipelines). ניסיון מעשי בפיתוח Python עם ספריות Data Science (כגון Pandas, NumPy) לעיבוד, הנדסת פיצ'רים ואנליטיקה, לצד עבודה מול PostgreSQL ואופטימיזציית שאילתות מורכבות.
>
> בצד הארכיטקטורה והתשתיות: עבודה שוטפת בסביבות Docker, בניית שירותי Backend רזים ועמידים (FastAPI, Express) ואינטגרציית שירותי ענן. בנוסף, רקע מעשי בתכנות מערכות ופתרון בעיות אלגוריתמיות ב-C++, ראייה ממוחשבת עם OpenCV, ושילוב רכיבי AI מודרניים (Vector Embeddings, RAG, NLP)."

#### English Version:
> "I honestly find it hard to believe anyone actually reads these all the way through, but if you made it this far—you’ve earned something a bit more authentic than a dry resume. In just a second, I’ll indulge in the usual corporate clichés about my ability to work hard, learn fast, and build learning frameworks across various domains. But before the buzzwords, let’s talk about what actually backs them up.
>
> It took me five years to finish a computer science degree. The reason it took five years instead of three is that I had to catch up on high school credentials completely from scratch, having spent the preceding years immersed in full-time Torah study. It was a profound and formative world in its own right, but at a certain point, I realized I wanted and needed other tools as well.
>
> That transition—from a traditional study hall to a fiercely achievement-driven academic environment where every single step is evaluated by the numbers—was no walk in the park. It was brutally tough. Along the way, my entire class practically disintegrated; talented people dropped out one by one for their own valid reasons, until only two of us were left to cross the finish line.
>
> So yes, you’ll find paragraphs that sound like an AI generated them about how I am 'diligent, driven, and goal-oriented.' But reality is much simpler: I am just not afraid to mess up, take the hit, and learn from it. Because at the end of the day, without making mistakes you can't truly experiment—and without experimenting, you can't build anything of value.
>
> I'll likely be the one asking questions early on that might feel a bit probing, but I'll also stand firmly behind my work and answer any question about what I built. Throughout my degree, I successfully presented projects in both English and Hebrew, sharpening my technical communication and presentation skills in both languages. Beyond the tech stack, my ability to endure the grind, confront challenges rather than dodge them, and take real ownership of my role and everything around it is what makes me a complete addition to your team.
>
> *(Oh, and I genuinely love drilling into data to unearth insights. Like, really love it).*
>
> **Technical Stack & Practical Experience:**
> Throughout my studies and independent projects, I have focused on end-to-end system design and data-intensive pipelines. Hands-on development experience in Python, leveraging data science libraries (Pandas, NumPy) for data processing, feature engineering, and analytics, alongside relational databases (PostgreSQL) and complex SQL query optimization.
>
> On infrastructure and architecture: containerized Docker environments, lightweight and robust backend APIs with FastAPI and Express, and cloud service integration. Practical exposure to systems programming and algorithmic problem-solving in C++, computer vision with OpenCV, and integrating modern AI components (vector embeddings, NLP pipelines, and RAG workflows) into functional applications."

### Proposed Timeline Stations
- [ ] **Station 1 · The Academic Crucible:** Laying foundations in discrete mathematics, data structures, and computer architecture.
- [ ] **Station 2 · The First Love (Data & Analytics):** Discovering that numbers only matter when they alter real-world decisions.
- [ ] **Station 3 · Systems & Rigor (C++ & Architecture):** Moving from scripting to high-performance, deterministic memory-safe systems.
- [ ] **Station 4 · Applied AI & Cloud (Azure, RAG, MLOps):** Deploying scalable, secure architectures in cloud environments.
- [ ] **Station 5 · The Frontier (Sports-Tech & Autonomous Agents):** Combining domain intuition with machine learning to build live tactical tools.

---

## 🛠️ Section 3: Visual & Numeric Artifacts Checklist

*Items to request from David when ready:*

- [ ] **AIAC:** High-resolution screenshot of the *SimCast Arena* interface and timeout recommendation card.
- [ ] **WSL:** Screenshot of an interactive match preview / xG chart.
- [ ] **C++ Engine:** Screenshot of the 2D parking vehicle simulation (Box2D obstacles / collision paths).
- [ ] **Azure RAG:** Architecture diagram illustrating the Bicep IaC and passwordless identity flow.
- [ ] **CV Document:** Clean PDF version of David's resume for the download link.

---

## 🚀 Section 4: UI/UX & Technical Completed & Upcoming Tasks

### Completed Milestones
- [x] Removed jittery hover and 3D parallax tilting from bookcase and shelves.
- [x] Engineered the full-screen physical **Grand Open Book Spread** (archival parchment, leather casing, ribbon, bookmarks).
- [x] Integrated rich **Obsidian Black (`charcoal`)** and **Slate Gray (`slate`)** leather bindings to diversify the palette.
- [x] Added sequential volume navigation (**Next / Previous buttons**) with counter indicator (`1 / 5`).
- [x] Added **Arrow Key Navigation** (respecting Hebrew RTL and English LTR).
- [x] Implemented **Deep-Linking** (`/#aiac`, `/#wsl`, `/#azure-rag`, `/#cpp-physics`) to load books directly from URLs.
- [x] Set default language to Hebrew (`he`) with `localStorage` persistence.
- [x] Removed confusing "Atmosphere" banker's lamp toggle button.
- [x] Restored authentic storytelling text for AIAC and WSL from the original specification.
- [x] **Hebrew RTL Page Direction (Book Spread):** Fixed layout in Hebrew: Right Page (first page) = Project title, Volume badge, and main Narrative story; Left Page (second page) = Architecture & skills tags, and GitHub action button.
- [x] **Desk Plaque & Text Contrast Enhancement:** Fixed text contrast on brass plaques ("משולחן העבודה של המחבר" and master author plaque) with deep dark engraved enamel lettering on polished brass finish.
- [x] **Book Page Flip Animation:** Implemented 3D physical page-turning transition animation for grand open book navigation.
- [x] **Author's Personal Notebook Content & Pagination:** Integrated the full authentic bilingual memoir into a two-spread physical notebook with page-turn controls.
- [x] **Enriched Project Narratives & Quantitative Metric Banners:** Updated all 5 featured volumes and 5 research notebooks with empirical metrics (+32.9% run disruption, +0.79 net pts/possession, ~3.2 extra wins, 162K->16K optical flow, 0-secrets Managed Identity, 60 FPS 100% RAII, 250+ players snowball sampling, £100M knapsack), architectural challenges, and dedicated responsive metric callout styling.
- [x] **Removed Hover Previews:** Centered all interaction on clicking the physical book/notebook directly into the Grand Open Book spread.
- [x] **Internal Multi-Spread Book Pagination:** Implemented internal multi-page turning across all volumes and lab notebooks (Spread 1 for Vision, Story & Empirical Metrics; Spread 2 for Deep Architecture, Step-by-Step Data Pipelines, System Resilience & Tech Stack Chips) with physical 3D page flip transitions, in-page corner turn buttons, and bottom spread bar navigation.
- [x] **Curriculum Vitae Bank (Option A Dropdown):** Built an archival drop-down selector supporting all 7 specialized CV tracks (ML Engineer, Data Scientist, AI/FDE, Algorithm Dev, Backend Engineer, Data Analyst, Full Hebrew) accessible directly from both the site header and contact dispatch station with standardized, web-safe filenames.
- [x] **Refined High-Tech Navigation Headings:** Replaced literal translations with sharp, production-grade industry phrasing across navbar and section plaques (מערכות ליבה / Core Systems, מחקר ופיתוח / R&D Lab, אודות / About, יצירת קשר / Contact).
- [ ] **Job Description (JD) Research & Gap Analysis:** Map target roles (Python Backend, Data/Analytics Engineer, Applied AI/RAG) vs. demonstrated stack.
- [ ] **Visual Plate Placeholders:** Incorporate visual plate placeholders inside the pages for project screenshots (once provided).
- [ ] **Interactive Career Timeline:** Build the interactive career timeline inside the Author's Desk section.
- [ ] **Mobile Responsive Audit:** Conduct final mobile responsive audit across various mobile device widths.

