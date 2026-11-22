const phases = [
  { image: "quotation", label: "01 / QUOTATION", title: "報價，從清楚的工項開始。", description: "按工種整理施工品項、數量與單價，讓後續成本與執行資料有共同起點。", alt: "報價工項管理系統實際畫面" },
  { image: "profit", label: "02 / PROFITABILITY", title: "每一張報價，都看得見成本。", description: "結合報價與預估成本，檢視各工項及整體案件的預估毛利。", alt: "成本與毛利分析實際畫面" },
  { image: "calendar", label: "03 / SCHEDULING", title: "工程安排，讓團隊一眼掌握。", description: "以行事曆串接施工日期、工作安排與待處理事項。", alt: "施工行事曆實際畫面" },
  { image: "activity", label: "04 / COLLABORATION", title: "現場資訊，不只停在聊天紀錄。", description: "集中現場回報、照片與留言，保留可追蹤的工作脈絡。", alt: "現場動態與留言實際畫面" },
  { image: "receivables", label: "05 / FINANCE", title: "工程往前，帳務也同步清楚。", description: "按專案追蹤請款與收款，並搭配應付費用與付款期程。", alt: "專案應收帳款實際畫面" },
  { image: "acceptance", label: "06 / DELIVERY", title: "完成施工，也留下完整交付紀錄。", description: "把現場照片、驗收、簽收與客戶文件整理進同一個流程。", alt: "現場驗收與交付實際畫面" },
];

const steps = [...document.querySelectorAll(".step")];
const stepImage = document.querySelector("#step-image");
steps.forEach((step, index) => {
  step.addEventListener("click", () => {
    const phase = phases[index];
    steps.forEach((item, itemIndex) => {
      const active = index === itemIndex;
      item.classList.toggle("active", active);
      item.setAttribute("aria-pressed", String(active));
    });
    stepImage.src = `assets/${phase.image}.webp`;
    stepImage.alt = phase.alt;
    document.querySelector("#step-label").textContent = phase.label;
    document.querySelector("#step-title").textContent = phase.title;
    document.querySelector("#step-description").textContent = phase.description;
  });
});

const lightbox = document.querySelector("#lightbox");
const closeButton = document.querySelector("#lightbox-close");
let opener = null;
document.querySelectorAll(".screen").forEach((screen) => {
  screen.addEventListener("click", () => {
    opener = screen;
    document.querySelector("#lightbox-image").src = `assets/${screen.dataset.image}.webp`;
    document.querySelector("#lightbox-image").alt = screen.dataset.title;
    document.querySelector("#lightbox-title").textContent = screen.dataset.title;
    lightbox.showModal();
    document.body.classList.add("modal-open");
    closeButton.focus();
  });
});
closeButton.addEventListener("click", () => lightbox.close());
lightbox.addEventListener("click", (event) => { if (event.target === lightbox) lightbox.close(); });
lightbox.addEventListener("close", () => { document.body.classList.remove("modal-open"); opener?.focus(); });
document.querySelector("#year").textContent = String(new Date().getFullYear());
