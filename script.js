const heroBadges = [
  {
    title: "數發部數位解決方案 銅牌 & 評審獎",
    meta: "政府評選雙重肯定",
  },
  {
    title: "App Store 教育類別第 1 名",
    meta: "教育產品實戰成效",
  },
  {
    title: "喜來登飯店 LINE AI 客服開發",
    meta: "高標準服務場景導入",
  },
];

const services = [
  {
    title: "AI Agent / 多功能智能代理開發",
    description:
      "以企業任務為核心，打造可執行、可擴展、可監控的智能代理流程，從客服到內部決策支援皆可落地。",
  },
  {
    title: "LLM 應用與企業知識系統",
    description:
      "整合內部文件、SOP 與歷史資料，建立可查詢、可推理、可持續更新的知識中樞，降低資訊斷層。",
  },
  {
    title: "AI 聊天機器人",
    description:
      "打造符合品牌語氣與商業流程的對話體驗，串接網站、Line 或內部平台，提升客服效率與轉換率。",
  },
  {
    title: "AI 互動教學系統",
    description:
      "結合學習路徑、即時回饋與情境互動，提供高參與度的教學體驗，支援教育與企業訓練場景。",
  },
  {
    title: "自動化流程與內部系統整合",
    description:
      "將零散工具與人工流程整合成一致工作流，透過資料同步與自動化任務降低營運成本。",
  },
  {
    title: "企業 AI 導入顧問與客製開發",
    description:
      "從導入評估、技術路線到產品化執行，協助企業以最短路徑取得可衡量成果與長期競爭力。",
  },
];

const projects = [
  {
    name: "暴力鴨專業汽車百貨",
    type: "Automotive Commerce",
    description: "結合 AI Agent 推薦與 LLM 導購流程，提升詢單轉換。",
    link: "https://gr-yaris-store.netlify.app/",
    tags: ["汽車百貨", "AI 導購", "轉換優化"],
    media: "assets/projects/yaris_demo.mp4",
    mediaType: "video",
    tone: "tone-1",
    featured: true,
    showCaseLink: true,
    fillMedia: true,
  },
  {
    name: "慶鴻精密 企業官方網站",
    type: "Corporate Website",
    description: "代理 Mitutoyo、Siemens 設計應用軟體與工業設計精密加工服務的企業形象官網。",
    link: "https://www.chptw.com/",
    tags: ["企業官網", "品牌資訊架構", "精密工業"],
    media: "assets/projects/ching_hong.mp4",
    mediaType: "video",
    tone: "tone-1",
    featured: true,
    showCaseLink: true,
    fillMedia: true,
  },
  {
    name: "保全公司官網",
    type: "Corporate Site",
    description: "導入 NLP 問答與 AI 風險分流，強化 B2B 洽詢效率。",
    link: "",
    tags: ["企業官網", "資訊架構", "B2B UX"],
    media: "assets/projects/taixiang_demo.mp4",
    mediaType: "video",
    tone: "tone-2",
    featured: false,
    showCaseLink: false,
    fillMedia: true,
    note: "商業保密不公開網站，有興趣了解請聯絡我們。",
  },
  {
    name: "Design_lab 設計公司 Airtable 整合案",
    type: "Automation",
    description: "串接 Airtable 與 AI Workflow Automation，加速專案交付。",
    link: "",
    tags: ["Airtable", "流程自動化", "系統整合"],
    media: "assets/projects/design_lab_demo.mp4",
    mediaType: "video",
    tone: "tone-3",
    featured: false,
    note: "商業保密不公開網站，有興趣了解請聯絡我們。",
  },
  {
    name: "SK2 TOEFL 互動模擬考試",
    type: "EdTech + AI",
    description: "以 LLM 評分與 AI Tutor 回饋，優化托福模考體驗。",
    link: "",
    tags: ["互動教學", "AI 回饋", "學習體驗"],
    media: "assets/projects/toefl_demo.mp4",
    mediaType: "video",
    tone: "tone-4",
    featured: false,
    note: "商業保密不公開網站，有興趣了解請聯絡我們。",
  },
  {
    name: "Desko 教育 AI ERP 系統",
    type: "AI ERP",
    description: "整合 ERP、RAG 知識庫與 AI Agent，支援教務決策。",
    link: "",
    tags: ["AI ERP", "資料整合", "教育科技"],
    media: "assets/projects/desko_demo.mov",
    mediaType: "video",
    tone: "tone-5",
    featured: true,
    note: "商業保密不公開網站，有興趣了解請聯絡我們。",
  },
  {
    name: "國立資訊圖書館智慧館員 - AI曉書 chatbot",
    type: "AI Chatbot",
    description: "以 RAG + LLM 打造智慧館員 chatbot，提供即時館務問答。",
    link: "",
    tags: ["智慧館員", "RAG問答", "圖書館場景"],
    media: "assets/projects/library.png",
    mediaType: "image",
    tone: "tone-2",
    featured: false,
    note: "商業保密不公開網站，有興趣了解請聯絡我們。",
  },
];

const awards = [
  {
    year: "2025",
    title: "經濟部 Best AI Awards 入選決賽",
    description: "以可落地的 AI 解決方案獲決賽肯定，展現技術與商業場景整合能力。",
  },
  {
    year: "2025",
    title: "交通部公路局 資料創新應用競賽 入選決賽",
    description: "在資料應用與創新實作面向通過評選，延伸出可複製的落地模式。",
  },
  {
    year: "2024",
    title: "數位發展部 數位科技解決方案 銅牌獎 & 評審獎",
    description: "同時獲得銅牌與評審肯定，驗證團隊跨領域整合與產品設計實力。",
  },
  {
    year: "2024",
    title: "榮獲 SiTi 台北市產業發展獎勵補助計畫",
    description: "入選補助計畫，支持團隊持續投入 AI 產品研發與商業化落地。",
  },
];

const proofPoints = [
  {
    label: "Best Ranking",
    value: "App Store 教育類第 1 名",
    description: "教育產品在真實市場驗證成長，具備從設計到交付的完整能力。",
    image: "assets/projects/app_no1.png",
    alt: "App Store 教育類別第一名成果畫面",
    layout: "layout-hero",
    imageClass: "img-no1",
  },
  {
    label: "Hospitality AI",
    value: "喜來登飯店 LINE AI 客服",
    description: "為高標準服務場景建立 AI 對話流程與客服整合系統。",
    image: "assets/projects/sheraton_line.png",
    alt: "喜來登飯店 LINE AI 客服示意畫面",
    layout: "layout-side",
    imageClass: "img-sheraton",
  },
  {
    label: "Domain Coverage",
    value: "網站 × 教育 × 企業系統",
    description: "跨產業實戰經驗，能依商業目標快速定義最適 AI 技術路線。",
    image: "assets/projects/edu_system.png",
    alt: "教育與企業系統整合成果畫面",
    layout: "layout-side",
  },
  {
    label: "Delivery Style",
    value: "策略、設計、開發一體",
    description: "以一體化流程縮短溝通成本，讓專案更快進入可運轉階段。",
    image: "assets/projects/strategy.svg",
    alt: "策略到交付的一體化流程示意",
    layout: "layout-hero",
    imageClass: "img-compact",
  },
];

function renderHeroBadges() {
  const container = document.querySelector("#hero-badges");
  if (!container) return;
  container.innerHTML = heroBadges
    .map(
      (item, index) => `
      <li class="hero-badge-item">
        <span class="hero-badge-index">${String(index + 1).padStart(2, "0")}</span>
        <div>
          <p class="hero-badge-title">${item.title}</p>
          <p class="hero-badge-meta">${item.meta}</p>
        </div>
      </li>
    `,
    )
    .join("");
}

function renderServices() {
  const container = document.querySelector("#services-grid");
  if (!container) return;
  container.innerHTML = services
    .map(
      (service, index) => `
      <article class="service-card reveal" tabindex="0" aria-label="${service.title}">
        <span class="service-index">${String(index + 1).padStart(2, "0")}</span>
        <h3>${service.title}</h3>
        <p>${service.description}</p>
      </article>
    `,
    )
    .join("");
}

function renderProjects() {
  const container = document.querySelector("#project-grid");
  if (!container) return;
  container.innerHTML = projects
    .map((project) => {
      const hasMedia = Boolean(project.media);
      const isVideo = project.mediaType === "video";
      const hasLink = Boolean(project.link);
      const mediaLabel = hasMedia ? `${project.name} 專案預覽圖` : `${project.name} 專案預覽圖（placeholder）`;
      const mediaTone = hasMedia ? "" : project.tone;
      const cardClass = [project.featured ? "featured" : "", hasMedia ? "has-media" : "", isVideo ? "has-video" : ""]
        .join(" ")
        .trim();
      const isExternal = hasLink && /^https?:\/\//.test(project.link);
      const linkTarget = isExternal ? 'target="_blank" rel="noopener noreferrer"' : "";
      const caseLink = project.showCaseLink && hasLink
        ? `<a class="project-link" href="${project.link}" ${linkTarget} aria-label="查看 ${project.name} 專案">進入網站</a>`
        : "";
      const mockUrl = hasLink ? project.link : project.note ? "private project preview" : "video preview";
      const projectNote = project.note ? `<p class="project-note">${project.note}</p>` : "";

      let mediaInner = "<span>Project Preview</span>";
      if (hasMedia && isVideo) {
        const videoClass = `mock-canvas-media ${project.fillMedia ? "media-fill" : ""}`.trim();
        mediaInner = `
          <video class="${videoClass}" src="${project.media}" autoplay muted loop controls playsinline preload="auto" aria-label="${project.name} 影片預覽"></video>
          <span class="media-chip">Video Preview</span>
        `;
      } else if (hasMedia) {
        mediaInner = `<img class="mock-canvas-media" src="${project.media}" alt="${project.name} 視覺預覽圖" loading="lazy" />`;
      }

      return `
      <article class="project-card ${cardClass} reveal" aria-label="${project.name}">
        <div class="project-media">
          <div class="mock-browser" role="img" aria-label="${mediaLabel}">
            <div class="mock-top">
              <div class="dots" aria-hidden="true"><span></span><span></span><span></span></div>
              <span class="mock-url">${mockUrl}</span>
            </div>
            <div class="mock-canvas ${mediaTone}">
              ${mediaInner}
            </div>
          </div>
        </div>
        <div class="project-content">
          <div class="project-meta">
            <span class="project-type">${project.type}</span>
            ${caseLink}
          </div>
          <h3>${project.name}</h3>
          <p>${project.description}</p>
          ${projectNote}
          <ul class="tags" aria-label="${project.name} 技術標籤">
            ${project.tags.map((tag) => `<li>${tag}</li>`).join("")}
          </ul>
        </div>
      </article>
    `;
    })
    .join("");
}

function renderAwards() {
  const container = document.querySelector("#award-list");
  if (!container) return;
  container.innerHTML = awards
    .map(
      (award) => `
      <article class="award-item reveal" aria-label="${award.title}">
        <p class="award-year">${award.year}</p>
        <h3>${award.title}</h3>
        <p>${award.description}</p>
      </article>
    `,
    )
    .join("");
}

function renderProofPoints() {
  const container = document.querySelector("#proof-grid");
  if (!container) return;
  container.innerHTML = proofPoints
    .map(
      (point) => `
      <article class="proof-card ${point.layout || ""} reveal" aria-label="${point.value}">
        <figure class="proof-media">
          <img class="${point.imageClass || ""}" src="${point.image}" alt="${point.alt}" loading="lazy" />
        </figure>
        <div class="proof-content">
          <p class="proof-label">${point.label}</p>
          <p class="proof-value">${point.value}</p>
          <p class="proof-desc">${point.description}</p>
        </div>
      </article>
    `,
    )
    .join("");
}

function initRevealAnimations() {
  const elements = document.querySelectorAll(".reveal");
  if (!elements.length) return;

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.14, rootMargin: "0px 0px -8% 0px" },
  );

  elements.forEach((element) => observer.observe(element));
}

function setCurrentYear() {
  const el = document.querySelector("#year");
  if (el) el.textContent = String(new Date().getFullYear());
}

function initPage() {
  renderHeroBadges();
  renderServices();
  renderProjects();
  renderAwards();
  renderProofPoints();
  initRevealAnimations();
  setCurrentYear();
}

document.addEventListener("DOMContentLoaded", () => {
  initPage();
});
