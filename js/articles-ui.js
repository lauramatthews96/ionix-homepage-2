/**
 * Shared insight-card rendering for homepage, /blog listing and related strips.
 */
(function (global) {
  'use strict';

  var PAGE_SIZE = 9;

  function articles() {
    return (global.IONIX_ARTICLES || []).slice().sort(function (a, b) {
      return a.date < b.date ? 1 : a.date > b.date ? -1 : 0;
    });
  }

  function bySlug(slug) {
    return articles().find(function (a) { return a.slug === slug; }) || null;
  }

  /**
   * @param {string} slug
   * @param {'root'|'blog'|'article'} from — path context for relative links
   */
  function articleHref(slug, from) {
    if (from === 'blog') return slug + '/';
    if (from === 'article') return '../' + slug + '/';
    return 'blog/' + slug + '/';
  }

  function cardHTML(article, from) {
    return (
      '<article class="insight-card" data-category="' + escapeAttr(article.category) + '">' +
        '<img src="' + escapeAttr(article.image) + '" alt="' + escapeAttr(article.imageAlt || '') + '">' +
        '<div class="insight-card__body">' +
          '<span class="insight-card__category">' + escapeHTML(article.category) + '</span>' +
          '<h3>' + escapeHTML(article.title) + '</h3>' +
          '<time datetime="' + escapeAttr(article.date) + '">' + escapeHTML(article.dateLabel) + '</time>' +
          '<a href="' + escapeAttr(articleHref(article.slug, from)) + '" class="insight-card__btn">Read Full Article</a>' +
        '</div>' +
      '</article>'
    );
  }

  function escapeHTML(str) {
    return String(str == null ? '' : str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  function escapeAttr(str) {
    return escapeHTML(str).replace(/'/g, '&#39;');
  }

  function related(article, limit) {
    limit = limit || 3;
    var all = articles().filter(function (a) { return a.slug !== article.slug; });
    var same = all.filter(function (a) { return a.category === article.category; });
    var rest = all.filter(function (a) { return a.category !== article.category; });
    return same.concat(rest).slice(0, limit);
  }

  global.IonixArticles = {
    PAGE_SIZE: PAGE_SIZE,
    all: articles,
    bySlug: bySlug,
    cardHTML: cardHTML,
    articleHref: articleHref,
    related: related,
    categories: function () { return (global.IONIX_ARTICLE_CATEGORIES || []).slice(); }
  };
})(window);
