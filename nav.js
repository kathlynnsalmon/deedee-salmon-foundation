document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('.main-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var isOpen = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
  }

  // Nav goes from clear glass (over the dark hero/page-header) to a
  // frosted, readable state once you scroll past it.
  var header = document.querySelector('.site-header');
  var darkBlock = document.querySelector('.hero') || document.querySelector('.page-header');
  if (header && darkBlock) {
    var setScrolled = function () {
      var threshold = Math.max(darkBlock.offsetHeight - 90, 60);
      header.classList.toggle('scrolled', window.scrollY > threshold);
    };
    window.addEventListener('scroll', setScrolled, { passive: true });
    window.addEventListener('resize', setScrolled);
    setScrolled();
  } else if (header) {
    header.classList.add('scrolled');
  }

  // Subtle scroll-reveal for anything marked .reveal
  var prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var targets = document.querySelectorAll('.reveal');
  if (prefersReduced || !('IntersectionObserver' in window)) {
    targets.forEach(function (el) { el.classList.add('is-visible'); });
  } else {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' });
    targets.forEach(function (el) { observer.observe(el); });
  }
});
