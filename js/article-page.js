(function () {
  'use strict';

  if (!window.IonixArticles) return;

  var slug = document.body.getAttribute('data-article-slug');
  if (!slug) {
    var parts = location.pathname.replace(/\/+$/, '').split('/');
    slug = parts[parts.length - 1];
  }

  var article = IonixArticles.bySlug(slug);
  var root = document.getElementById('article-root');
  if (!article || !root) {
    if (root) {
      root.innerHTML = '<div class="container article-missing"><p>This article could not be found.</p><p><a href="../" class="btn btn--primary">Back to all articles</a></p></div>';
    }
    return;
  }

  document.title = article.title + ' | Ionix Systems';
  var meta = document.querySelector('meta[name="description"]');
  if (meta) meta.setAttribute('content', article.excerpt || article.title);

  var readTime = article.readTime
    ? '<span class="article-header__meta-item">' + article.readTime + '</span>'
    : '';

  var related = IonixArticles.related(article, 3);
  var relatedHTML = related.length
    ? (
      '<section class="article-related section--grid-texture" aria-label="Related articles">' +
        '<div class="container">' +
          '<header class="article-related__intro">' +
            '<span class="eyebrow">Related Articles</span>' +
            '<h2 class="section-title">Continue reading</h2>' +
          '</header>' +
          '<div class="blog-grid">' +
            related.map(function (a) { return IonixArticles.cardHTML(a, 'article'); }).join('') +
          '</div>' +
          '<p class="article-related__all"><a href="../" class="btn btn--primary">View All Articles</a></p>' +
        '</div>' +
      '</section>'
    )
    : '';

  root.innerHTML =
    '<article class="article-page">' +
      '<header class="article-header">' +
        '<div class="container article-header__inner">' +
          '<a href="../" class="article-header__back">← All articles</a>' +
          '<span class="insight-card__category">' + article.category + '</span>' +
          '<h1 class="article-header__title">' + article.title + '</h1>' +
          '<div class="article-header__meta">' +
            '<time datetime="' + article.date + '">' + article.dateLabel + '</time>' +
            readTime +
          '</div>' +
        '</div>' +
      '</header>' +
      '<figure class="article-hero">' +
        '<div class="container">' +
          '<img src="' + article.image + '" alt="' + (article.imageAlt || '') + '">' +
        '</div>' +
      '</figure>' +
      '<div class="article-body">' +
        '<div class="container article-body__inner">' +
          article.body +
        '</div>' +
      '</div>' +
    '</article>' +
    relatedHTML;
})();
