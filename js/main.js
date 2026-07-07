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
    });
    siteNav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        siteNav.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  if (navbar && heroSection) {
    window.addEventListener('scroll', function () {
      var heroBottom = heroSection.offsetTop + heroSection.offsetHeight;
      navbar.classList.toggle('is-scrolled', window.scrollY > heroBottom - 80);
    }, { passive: true });
  }

  var sections = document.querySelectorAll('section[id]');
  var navLinks = document.querySelectorAll('.nav-link');

  function updateActiveNav() {
    var scrollPos = window.scrollY + 140;
    sections.forEach(function (section) {
      var top = section.offsetTop;
      var height = section.offsetHeight;
      var id = section.getAttribute('id');
      if (scrollPos >= top && scrollPos < top + height) {
        navLinks.forEach(function (link) {
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

  document.querySelectorAll('.contact-band__pills .pill').forEach(function (pill) {
    pill.addEventListener('click', function () {
      document.querySelectorAll('.contact-band__pills .pill').forEach(function (p) {
        p.classList.remove('pill--active');
      });
      pill.classList.add('pill--active');
    });
  });

  document.querySelectorAll('form').forEach(function (form) {
    form.addEventListener('submit', function (e) { e.preventDefault(); });
  });
})();
