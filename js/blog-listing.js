(function () {
  'use strict';

  var grid = document.getElementById('blog-grid');
  var filters = document.getElementById('blog-filters');
  var empty = document.getElementById('blog-empty');
  var moreBtn = document.getElementById('blog-load-more');
  if (!grid || !window.IonixArticles) return;

  var activeCategory = 'all';
  var visibleCount = IonixArticles.PAGE_SIZE;

  function filtered() {
    var all = IonixArticles.all();
    if (activeCategory === 'all') return all;
    return all.filter(function (a) { return a.category === activeCategory; });
  }

  function renderFilters() {
    if (!filters) return;
    var cats = IonixArticles.categories();
    var html = '<button type="button" class="blog-filter pill pill--active" data-category="all" aria-pressed="true">All</button>';
    cats.forEach(function (cat) {
      var label = cat
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/"/g, '&quot;');
      html += '<button type="button" class="blog-filter pill" data-category="' + label + '" aria-pressed="false">' + label + '</button>';
    });
    filters.innerHTML = html;
    filters.querySelectorAll('.blog-filter').forEach(function (btn) {
      btn.addEventListener('click', function () {
        activeCategory = btn.getAttribute('data-category') || 'all';
        visibleCount = IonixArticles.PAGE_SIZE;
        filters.querySelectorAll('.blog-filter').forEach(function (b) {
          var on = b === btn;
          b.classList.toggle('pill--active', on);
          b.setAttribute('aria-pressed', on ? 'true' : 'false');
        });
        renderGrid();
      });
    });
  }

  function renderGrid() {
    var list = filtered();
    var page = list.slice(0, visibleCount);
    grid.innerHTML = page.map(function (a) {
      return IonixArticles.cardHTML(a, 'blog');
    }).join('');

    if (empty) empty.hidden = page.length > 0;

    if (moreBtn) {
      var hasMore = list.length > visibleCount;
      moreBtn.hidden = !hasMore;
      moreBtn.disabled = !hasMore;
      if (moreBtn.parentElement) moreBtn.parentElement.hidden = !hasMore;
    }
  }

  if (moreBtn) {
    moreBtn.addEventListener('click', function () {
      visibleCount += IonixArticles.PAGE_SIZE;
      renderGrid();
    });
  }

  renderFilters();
  renderGrid();
})();
