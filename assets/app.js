(() => {
  const data = window.DASHBOARD_DATA || { settings: {}, pages: [] };
  const app = document.getElementById("app");
  const colors = ["#245eea","#13b98a","#ff7a18","#6d5ce7","#ef4444","#0ea5e9","#84cc16","#f59e0b"];
  const iconMap = { "layout-dashboard":"📊","settings":"⚙️","wallet":"💳","coins":"🪙","briefcase-business":"💼","pie-chart":"◔","map":"🗺️","users":"👥","house":"🏠","building":"🏗️","droplets":"💧","zap":"⚡","flame":"🔥","route":"🛣️","trees":"🌳","receipt":"🧾","landmark":"🏛️","circle-percent":"٪","badge-check":"✅","triangle-alert":"⚠️","chart-no-axes-combined":"📈","building-2":"🏢" };
  let currentPage = null;

  function esc(v) { return String(v ?? "").replace(/[&<>"']/g, m => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[m])); }
  function num(v) { return typeof v !== "number" ? esc(v) : new Intl.NumberFormat("fa-IR", { maximumFractionDigits: 2 }).format(v); }
  function icon(key) { return iconMap[key] || "◆"; }

  function shell(content, showBack = false) {
    return `<div class="app-wrap"><div class="shell"><header class="topbar"><div class="topbar-title"><div class="logo">◆</div><div><h1>${esc(data.settings.dashboard_title || "داشبورد")}</h1></div></div><div class="top-actions">${showBack ? `<button class="soft-btn" data-action="back">← بازگشت</button>` : ""}</div></header><main class="main">${content}</main></div></div>`;
  }

  function renderMenu() {
    const cards = [...data.pages].sort((a,b) => a.order-b.order).map(p => `<button class="menu-card" data-page="${esc(p.page_id)}"><div class="menu-icon">${icon(p.icon)}</div><h3>${esc(p.title)}</h3><p>${esc(p.subtitle)}</p><span class="card-arrow">←</span></button>`).join("");
    app.innerHTML = shell(`<section class="menu-grid">${cards}</section>`);
    app.querySelectorAll("[data-page]").forEach(btn => btn.addEventListener("click", (e) => { currentPage = e.currentTarget.dataset.page; render(); }));
  }

  function renderSection(s) {
    return `<article class="accordion ${s.default_open ? "open" : ""}">
      <button class="accordion-header">${esc(s.title)}<small>${esc(s.description)}</small><span class="chev">◀</span></button>
      <div class="accordion-body">
        ${(s.kpis||[]).map(k => `<article class="kpi"><div class="kpi-icon">${icon(k.icon)}</div><div><span class="kpi-value">${num(k.value)}</span><span class="kpi-unit">${esc(k.unit)}</span></div><div class="kpi-title">${esc(k.title)}</div></article>`).join("")}
        ${(s.tables||[]).map(t => `<div class="table-box"><table class="data-table"><thead><tr>${t.columns.map(c=>`<th>${esc(c)}</th>`).join("")}</tr></thead><tbody>${t.rows.map(r=>`<tr>${r.map(c=>`<td>${esc(c)}</td>`).join("")}</tr>`).join("")}</tbody></table></div>`).join("")}
      </div>
    </article>`;
  }

  function renderReport(page) {
    const sections = [...page.sections].sort((a,b) => a.order-b.order).map(renderSection).join("");
    app.innerHTML = shell(`<h2>${icon(page.icon)} ${esc(page.title)}</h2>${sections}`, true);
    app.querySelectorAll(".accordion-header").forEach(btn => btn.addEventListener("click", () => btn.closest(".accordion").classList.toggle("open")));
    app.querySelector('[data-action="back"]').addEventListener("click", () => { currentPage = null; render(); });
  }

  function render(){
    if(!app) return;
    if(currentPage) return renderReport(data.pages.find(p => p.page_id === currentPage));
    renderMenu();
  }
  render();
})();
