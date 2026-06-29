(() => {
  const data = window.DASHBOARD_DATA || { settings: {}, pages: [] };
  const app = document.getElementById("app");
  const colors = ["#245eea","#13b98a","#ff7a18","#6d5ce7","#ef4444","#0ea5e9","#84cc16","#f59e0b"];
  const iconMap = {
    "layout-dashboard":"📊","settings":"⚙️","wallet":"💳","coins":"🪙","briefcase-business":"💼",
    "pie-chart":"◔","map":"🗺️","users":"👥","house":"🏠","building":"🏗️","droplets":"💧","zap":"⚡",
    "flame":"🔥","route":"🛣️","trees":"🌳","receipt":"🧾","landmark":"🏛️","circle-percent":"٪",
    "badge-check":"✅","triangle-alert":"⚠️","chart-no-axes-combined":"📈","building-2":"🏢"
  };
  let currentPage = null;

  function esc(value) { return String(value ?? "").replace(/[&<>"']/g, m => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[m])); }
  function num(v) { return typeof v !== "number" ? esc(v) : new Intl.NumberFormat("fa-IR", { maximumFractionDigits: 2 }).format(v); }
  function icon(key) { return iconMap[key] || "◆"; }
  function fullscreen() { if (!document.fullscreenElement) document.documentElement.requestFullscreen?.(); else document.exitFullscreen?.(); }
  function pageById(id) { return data.pages.find(p => p.page_id === id); }

  function shell(content, showBack = false) {
    return `
      <div class="app-wrap">
        <div class="shell">
          <header class="topbar">
            <div class="topbar-title">
              <div class="logo">◆</div>
              <div><h1>${esc(data.settings.dashboard_title || "داشبورد مدیریتی")}</h1></div>
            </div>
            <div class="top-actions">
              ${showBack ? `<button class="soft-btn back-btn" data-action="back">← بازگشت</button>` : ""}
              <button class="icon-btn" data-action="fullscreen">⛶ تمام‌صفحه</button>
            </div>
          </header>
          <main class="main">${content}</main>
        </div>
      </div>`;
  }

  function renderMenu() {
    const cards = [...data.pages].sort((a,b) => a.order-b.order).map(p => `
      <button class="menu-card" data-page="${esc(p.page_id)}">
        <div class="menu-icon">${icon(p.icon)}</div>
        <h3>${esc(p.title)}</h3>
        <p>${esc(p.subtitle)}</p>
      </button>`).join("");
    app.innerHTML = shell(`<section class="menu-grid">${cards}</section>`);
    app.querySelectorAll("[data-page]").forEach(btn => btn.addEventListener("click", () => {
      currentPage = btn.dataset.page;
      render();
    }));
    wireCommon();
  }

  // --- سایر توابع رندر (renderKpi, renderChart, renderTable و غیره) را در اینجا نگه دارید ---
  // (فقط کافیست کدهای قبلی خود را که مربوط به renderKpi تا renderReport بود در اینجا کپی کنید)
  
  function renderReport(page) {
    const sections = [...page.sections].sort((a,b) => a.order-b.order).map(renderSection).join("");
    app.innerHTML = shell(`
      <section class="report-head">
        <h2>${icon(page.icon)} ${esc(page.title)}</h2>
      </section>${sections}`, true);
    wireCommon();
  }

  function wireCommon(){
    app.querySelectorAll('[data-action="fullscreen"]').forEach(b=>b.addEventListener("click",fullscreen));
    app.querySelectorAll('[data-action="back"]').forEach(b=>b.addEventListener("click",()=>{currentPage=null;render();}));
  }

  function render(){
    if(!app) return;
    if(currentPage) return renderReport(pageById(currentPage));
    renderMenu();
  }
  render();
})();
