/* AMC Africa — main.js */

/* ---- Scroll reveal ---- */
(function () {
  const els = document.querySelectorAll('[data-reveal]');
  if (!els.length) return;

  const observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        var el = entry.target;
        var delay = el.dataset.delay ? parseInt(el.dataset.delay, 10) : 0;
        setTimeout(function () {
          el.classList.add('revealed');
        }, delay);
        observer.unobserve(el);
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );

  /* Hero elements fire on load, not on scroll */
  var heroEls = document.querySelectorAll('.hero [data-reveal]');
  heroEls.forEach(function (el) {
    observer.unobserve(el);
    var delay = el.dataset.delay ? parseInt(el.dataset.delay, 10) : 0;
    setTimeout(function () {
      el.classList.add('revealed');
    }, delay + 100);
  });

  /* Everything else fires on scroll */
  els.forEach(function (el) {
    if (!el.closest('.hero')) {
      observer.observe(el);
    }
  });
})();


/* ---- Nav: scrolled state ---- */
(function () {
  var nav = document.getElementById('nav');
  if (!nav) return;

  function onScroll() {
    if (window.scrollY > 60) {
      nav.classList.add('nav--scrolled');
    } else {
      nav.classList.remove('nav--scrolled');
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
})();


/* ---- Mobile nav toggle ---- */
(function () {
  var toggle = document.getElementById('navToggle');
  var wrap   = document.getElementById('navLinksWrap');
  if (!toggle || !wrap) return;

  toggle.addEventListener('click', function () {
    var isOpen = wrap.classList.toggle('open');
    toggle.classList.toggle('open', isOpen);
    toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });

  /* Close on link click */
  wrap.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      wrap.classList.remove('open');
      toggle.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    });
  });

  /* Close on outside click */
  document.addEventListener('click', function (e) {
    if (!wrap.contains(e.target) && !toggle.contains(e.target)) {
      wrap.classList.remove('open');
      toggle.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    }
  });
})();


/* ---- Smooth scroll for anchor links ---- */
(function () {
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var target = document.querySelector(this.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      var navH = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-h'), 10) || 72;
      var top = target.getBoundingClientRect().top + window.scrollY - navH;
      window.scrollTo({ top: top, behavior: 'smooth' });
    });
  });
})();
