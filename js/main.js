(function () {
  'use strict';

  var navToggle = document.querySelector('.nav-toggle');
  var siteNav = document.querySelector('.site-nav');
  var navbar = document.getElementById('navbar');
  var heroSection = document.querySelector('.home-banner-section');

  if (navToggle && siteNav) {
    navToggle.addEventListener('click', function () {
      var isOpen = siteNav.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', isOpen);
      if (!isOpen) {
        siteNav.querySelectorAll('.nav-item.is-open').forEach(function (item) {
          item.classList.remove('is-open');
          var toggle = item.querySelector('.nav-link--toggle');
          if (toggle) toggle.setAttribute('aria-expanded', 'false');
        });
      }
    });
    siteNav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        var href = link.getAttribute('href') || '';
        // Only close the drawer for in-page anchors. Full page links must
        // navigate uninterrupted — closing mid-click can cancel the load.
        if (href.charAt(0) === '#') {
          siteNav.classList.remove('open');
          navToggle.setAttribute('aria-expanded', 'false');
        }
      });
    });
  }

  var dropdownItems = document.querySelectorAll('.nav-item.has-dropdown');

  function closeAllDropdowns(except) {
    dropdownItems.forEach(function (item) {
      if (except && item === except) return;
      item.classList.remove('is-open');
      var otherToggle = item.querySelector('.nav-link--toggle');
      if (otherToggle) otherToggle.setAttribute('aria-expanded', 'false');
    });
  }

  dropdownItems.forEach(function (item) {
    var toggle = item.querySelector('.nav-link--toggle');
    if (!toggle) return;
    toggle.addEventListener('click', function (event) {
      event.preventDefault();
      event.stopPropagation();
      var willOpen = !item.classList.contains('is-open');
      closeAllDropdowns(item);
      item.classList.toggle('is-open', willOpen);
      toggle.setAttribute('aria-expanded', willOpen ? 'true' : 'false');
    });
  });

  document.addEventListener('click', function (event) {
    var target = event.target;
    if (target && target.nodeType !== 1) target = target.parentElement;
    if (!target || typeof target.closest !== 'function') return;
    if (target.closest('.nav-item.has-dropdown') || target.closest('.nav-toggle')) return;
    closeAllDropdowns();
  });

  if (navbar && heroSection) {
    window.addEventListener('scroll', function () {
      var heroBottom = heroSection.offsetTop + heroSection.offsetHeight;
      navbar.classList.toggle('is-scrolled', window.scrollY > heroBottom - 80);
    }, { passive: true });
  }

  var sections = document.querySelectorAll('section[id]');
  var navLinks = document.querySelectorAll('.nav-link');

  function updateActiveNav() {
    var hashLinks = Array.prototype.filter.call(navLinks, function (link) {
      var href = link.getAttribute('href') || '';
      return href.charAt(0) === '#';
    });
    if (!hashLinks.length) return;

    var scrollPos = window.scrollY + 140;
    sections.forEach(function (section) {
      var top = section.offsetTop;
      var height = section.offsetHeight;
      var id = section.getAttribute('id');
      if (scrollPos >= top && scrollPos < top + height) {
        hashLinks.forEach(function (link) {
          link.classList.toggle('active', link.getAttribute('href') === '#' + id);
        });
      }
    });
  }

  window.addEventListener('scroll', updateActiveNav, { passive: true });
  updateActiveNav();

  var certTabs = document.querySelectorAll('.cert-tabs__btn');
  var certPanels = document.querySelectorAll('.cert-panel');
  certTabs.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var panelId = btn.getAttribute('data-panel');
      certTabs.forEach(function (t) {
        t.classList.remove('is-active');
        t.setAttribute('aria-selected', 'false');
      });
      certPanels.forEach(function (p) {
        p.classList.remove('is-active');
        p.hidden = true;
      });
      btn.classList.add('is-active');
      btn.setAttribute('aria-selected', 'true');
      var panel = document.getElementById(panelId);
      if (panel) {
        panel.classList.add('is-active');
        panel.hidden = false;
      }
    });
  });

  document.querySelectorAll('.contact-band__pills').forEach(function (group) {
    var formCol = group.closest('.locations-contact__form-col');
    var form = formCol ? formCol.querySelector('form') : null;
    var typeInput = form ? form.querySelector('input[name="project_type"]') : null;

    group.querySelectorAll('.pill').forEach(function (pill) {
      pill.addEventListener('click', function () {
        group.querySelectorAll('.pill').forEach(function (p) {
          p.classList.remove('pill--active');
          p.setAttribute('aria-pressed', 'false');
        });
        pill.classList.add('pill--active');
        pill.setAttribute('aria-pressed', 'true');
        if (typeInput) typeInput.value = pill.textContent.trim();
      });
    });
  });

  document.querySelectorAll('form').forEach(function (form) {
    form.addEventListener('submit', function (e) { e.preventDefault(); });
  });

  var insightsTrack = document.getElementById('insights-track');
  var insightsPrev = document.querySelector('.insights__nav--prev');
  var insightsNext = document.querySelector('.insights__nav--next');

  if (insightsTrack && insightsPrev && insightsNext) {
    function updateInsightsNav() {
      var maxScroll = insightsTrack.scrollWidth - insightsTrack.clientWidth;
      insightsPrev.disabled = insightsTrack.scrollLeft <= 4;
      insightsNext.disabled = insightsTrack.scrollLeft >= maxScroll - 4;
    }

    function scrollInsights(direction) {
      var card = insightsTrack.querySelector('.insight-card');
      if (!card) return;
      var scrollAmount = card.offsetWidth + parseFloat(getComputedStyle(insightsTrack).gap || 0);
      insightsTrack.scrollBy({ left: direction * scrollAmount, behavior: 'smooth' });
    }

    insightsPrev.addEventListener('click', function () { scrollInsights(-1); });
    insightsNext.addEventListener('click', function () { scrollInsights(1); });
    insightsTrack.addEventListener('scroll', updateInsightsNav, { passive: true });
    window.addEventListener('resize', updateInsightsNav);
    updateInsightsNav();
  }

  document.querySelectorAll('.hero-video-card').forEach(function (card) {
    var playBtn = card.querySelector('.hero-video-card__play');
    var frame = card.querySelector('.hero-video-card__frame');
    var videoId = card.getAttribute('data-vimeo-id');
    if (!playBtn || !frame || !videoId) return;

    playBtn.addEventListener('click', function () {
      if (card.classList.contains('is-playing')) return;
      var iframe = document.createElement('iframe');
      iframe.src = 'https://player.vimeo.com/video/' + videoId +
        '?autoplay=1&title=0&byline=0&portrait=0';
      iframe.title = 'Ionix manufacturing video';
      iframe.allow = 'autoplay; fullscreen; picture-in-picture';
      iframe.setAttribute('allowfullscreen', '');
      frame.hidden = false;
      frame.appendChild(iframe);
      card.classList.add('is-playing');
    });
  });
})();
