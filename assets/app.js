(() => {
  const data = window.DASHBOARD_DATA || { settings: {}, pages: [] };
  const app = document.getElementById("app");
  // ... (سایر کدهای ثابت مثل colors و iconMap را نگه دارید) ...
  // ... سایر توابع مثل esc, num, icon, fullscreen, pageById را نگه دارید ...

  function shell(content, showBack = false) {
    return `
      <div class="app-wrap">
        <div class="shell">
          <header class="topbar">
            <div class="topbar-title">
              <div class="logo">◆</div>
              <div>
                <h1>${esc(data.settings.dashboard_title || "داشبورد مدیریتی")}</h1>
                <div class="subtitle">${esc(data.settings.organization_name || "")}</div>
              </div>
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

  // توابع رندر ...

  function render(){
    const target=document.getElementById("app");
    if(!target) return;
    if(currentPage) return renderReport(pageById(currentPage));
    renderMenu();
  }
  render();
})();
