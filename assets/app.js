(() => {
  const data = window.DASHBOARD_DATA || { settings: {}, pages: [] };
  const app = document.getElementById("app");
  
  // توابع کمکی
  function esc(v) { return String(v ?? "").replace(/[&<>"']/g, m => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[m])); }
  function num(v) { return typeof v !== "number" ? esc(v) : new Intl.NumberFormat("fa-IR", { maximumFractionDigits: 2 }).format(v); }
  function icon(key) { const icons = {"layout-dashboard":"📊","settings":"⚙️","wallet":"💳","coins":"🪙","briefcase-business":"💼","pie-chart":"◔","map":"🗺️","users":"👥","house":"🏠","building":"🏗️"}; return icons[key] || "◆"; }
  function fullscreen() { if (!document.fullscreenElement) document.documentElement.requestFullscreen?.(); else document.exitFullscreen?.(); }

  // تابع پوسته صفحه
  function shell(content, showBack = false) {
    return `<div class="app-wrap"><div class="shell"><header class="topbar"><div class="topbar-title"><h1>${esc(data.settings.dashboard_title || "داشبورد")}</h1></div><div class="top-actions">${showBack ? `<button class="soft-btn" data-action="back">← بازگشت</button>` : ""}<button class="icon-btn" data-action="fullscreen">⛶ تمام‌صفحه</button></div></header><main class="main">${content}</main></div></div>`;
  }

  // رندر کردن منوی اصلی
  function renderMenu() {
    const cards = [...data.pages].sort((a,b) => a.order-b.order).map(p => `
      <button class="menu-card" data-page="${esc(p.page_id)}">
        <div class="menu-icon">${icon(p.icon)}</div>
        <h3>${esc(p.title)}</h3>
        <p>${esc(p.subtitle)}</p>
      </button>`).join("");
    app.innerHTML = shell(`<section class="menu-grid">${cards}</section>`);
    app.querySelectorAll("[data-page]").forEach(btn => btn.addEventListener("click", (e) => {
      currentPage = e.currentTarget.dataset.page;
      render();
    }));
    wireCommon();
  }

  // رندر کردن صفحات داخلی
  function renderReport(page) {
    // در اینجا می‌توانید توابع renderSection و سایر توابع رندرینگ قبلی را اضافه کنید
    const content = `<h2>${icon(page.icon)} ${esc(page.title)}</h2><p>${esc(page.subtitle)}</p>`;
    app.innerHTML = shell(content, true);
    wireCommon();
  }

  function wireCommon(){
    app.querySelectorAll('[data-action="fullscreen"]').forEach(b=>b.addEventListener("click",fullscreen));
    app.querySelectorAll('[data-action="back"]').forEach(b=>b.addEventListener("click",()=>{currentPage=null;render();}));
  }

  let currentPage = null;
  function render(){
    if(!app) return;
    if(currentPage) return renderReport(data.pages.find(p => p.page_id === currentPage));
    renderMenu();
  }
  render();
})();
