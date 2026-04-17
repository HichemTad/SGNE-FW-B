/**
 * motion.js — Numérique Éducatif FW-B
 * Design System interactions & animations
 *
 * • Ghost chapter number in heroes
 * • Scroll-reveal (IntersectionObserver)
 * • Auto-stagger grid children
 * • Navbar scroll shadow
 * • Ripple effect
 * • Mobile burger menu
 * • Quick-access floating panel
 * • Scroll-to-top button
 */

(function () {
  'use strict';

  /* ── 1. Hero Ghost Number ────────────────────────────────── */
  function initHeroGhost() {
    const header = document.querySelector('header.gradient-hero');
    if (!header) return;

    // Find chapter number from the badge inside the hero
    const badge = header.querySelector('[class*="rounded"][class*="bg-white"]');
    const numEl = badge ? badge.querySelector('span') : null;
    const num   = numEl ? numEl.textContent.trim() : null;

    if (!num || isNaN(parseInt(num, 10))) return;

    const ghost = document.createElement('div');
    ghost.className = 'hero-ghost-num';
    ghost.setAttribute('aria-hidden', 'true');
    ghost.textContent = num;
    header.appendChild(ghost);

    // Animate ghost in on page load
    ghost.style.opacity = '0';
    ghost.style.transform = 'translateX(40px)';
    ghost.style.transition = 'opacity 0.9s cubic-bezier(0,0,0.2,1) 0.15s, transform 0.9s cubic-bezier(0,0,0.2,1) 0.15s';
    requestAnimationFrame(() => {
      setTimeout(() => {
        ghost.style.opacity = '';    // let CSS handle final opacity
        ghost.style.transform = '';
      }, 60);
    });
  }

  /* ── 2. Scroll Reveal ────────────────────────────────────── */
  const REVEAL_SELECTORS = [
    'article > section',
    'article > blockquote',
    '.ref-entry',
  ].join(', ');

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.06, rootMargin: '0px 0px -24px 0px' }
  );

  function observeEl(el) {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.95) {
      el.classList.add('is-visible');
    } else {
      observer.observe(el);
    }
  }

  /* ── 3. Auto-stagger Grid Children ──────────────────────── */
  function initStagger() {
    document.querySelectorAll('[data-stagger-grid]').forEach((grid) => {
      Array.from(grid.children).forEach((child, i) => {
        if (!child.classList.contains('is-visible')) {
          child.setAttribute('data-reveal', '');
          child.setAttribute('data-delay', String(Math.min(i + 1, 6)));
          observeEl(child);
        }
      });
    });
  }

  function initReveal() {
    document.querySelectorAll(REVEAL_SELECTORS).forEach((el) => {
      if (el.hasAttribute('data-reveal')) return;
      el.setAttribute('data-reveal', '');
      observeEl(el);
    });

    // Honour manually authored [data-reveal] elements
    document.querySelectorAll('[data-reveal]:not([data-delay])').forEach((el) => {
      if (!el.classList.contains('is-visible')) observeEl(el);
    });
  }

  /* ── 4. Navbar Scroll Shadow ─────────────────────────────── */
  function initNavbar() {
    const nav = document.querySelector('nav');
    if (!nav) return;
    let ticking = false;
    window.addEventListener('scroll', () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          nav.classList.toggle('nav-scrolled', window.scrollY > 8);
          ticking = false;
        });
        ticking = true;
      }
    }, { passive: true });
  }

  /* ── 5. Ripple Effect ────────────────────────────────────── */
  function createRipple(e) {
    const btn  = e.currentTarget;
    const rect = btn.getBoundingClientRect();
    const ink  = document.createElement('span');
    ink.className  = 'ripple-ink';
    ink.style.left = (e.clientX - rect.left) + 'px';
    ink.style.top  = (e.clientY - rect.top)  + 'px';
    btn.appendChild(ink);
    ink.addEventListener('animationend', () => ink.remove(), { once: true });
  }

  function initRipple() {
    document.querySelectorAll('[data-ripple]').forEach((btn) => {
      btn.addEventListener('click', createRipple);
    });
  }

  /* ── 6. Mobile Burger ────────────────────────────────────── */
  function initBurger() {
    const btn  = document.getElementById('burgerBtn');
    const menu = document.getElementById('mobileMenu');
    if (!btn || !menu) return;
    btn.addEventListener('click', () => {
      const open = menu.classList.toggle('hidden') === false;
      btn.setAttribute('aria-expanded', String(open));
    });
  }

  /* ── 6b. Nav Dropdowns ───────────────────────────────────── */
  function initDropdowns() {
    document.querySelectorAll('.nav-dropdown-btn').forEach(btn => {
      const wrapper = btn.closest('[id^="dropdown-"]');
      const menuEl  = wrapper && wrapper.querySelector('.nav-dropdown-menu');
      if (!menuEl) return;
      const arrow = btn.querySelector('svg');

      btn.addEventListener('click', e => {
        e.stopPropagation();
        const isOpen = !menuEl.classList.contains('hidden');
        // close all other dropdowns
        document.querySelectorAll('.nav-dropdown-menu').forEach(m => m.classList.add('hidden'));
        document.querySelectorAll('.nav-dropdown-btn svg').forEach(a => a.style.transform = '');
        document.querySelectorAll('.nav-dropdown-btn').forEach(b => b.setAttribute('aria-expanded', 'false'));
        if (!isOpen) {
          menuEl.classList.remove('hidden');
          if (arrow) arrow.style.transform = 'rotate(180deg)';
          btn.setAttribute('aria-expanded', 'true');
        }
      });
    });

    document.addEventListener('click', () => {
      document.querySelectorAll('.nav-dropdown-menu').forEach(m => m.classList.add('hidden'));
      document.querySelectorAll('.nav-dropdown-btn svg').forEach(a => a.style.transform = '');
      document.querySelectorAll('.nav-dropdown-btn').forEach(b => b.setAttribute('aria-expanded', 'false'));
    });

    document.addEventListener('keydown', e => {
      if (e.key === 'Escape') {
        document.querySelectorAll('.nav-dropdown-menu').forEach(m => m.classList.add('hidden'));
        document.querySelectorAll('.nav-dropdown-btn svg').forEach(a => a.style.transform = '');
        document.querySelectorAll('.nav-dropdown-btn').forEach(b => b.setAttribute('aria-expanded', 'false'));
      }
    });
  }

  /* ── 7. Hero Content Entry ───────────────────────────────── */
  function initHeroEntry() {
    const heroInner = document.querySelector('header.gradient-hero > div > div:last-child');
    if (!heroInner) return;
    heroInner.style.opacity  = '0';
    heroInner.style.transform = 'translateY(10px)';
    heroInner.style.transition = 'opacity 0.55s cubic-bezier(0,0,0.2,1), transform 0.55s cubic-bezier(0,0,0.2,1)';
    requestAnimationFrame(() => {
      setTimeout(() => {
        heroInner.style.opacity   = '1';
        heroInner.style.transform = 'translateY(0)';
      }, 80);
    });
  }

  /* ── 8. Active Nav Link ──────────────────────────────────── */
  function initActiveNav() {
    const current = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('nav a[href]').forEach((link) => {
      if (link.getAttribute('href') === current && !link.getAttribute('aria-current')) {
        link.setAttribute('aria-current', 'page');
        // Marquer aussi le bouton dropdown parent s'il existe
        var dropdown = link.closest('.nav-dropdown-menu');
        if (dropdown) {
          var btn = dropdown.previousElementSibling;
          if (btn && btn.classList.contains('nav-dropdown-btn')) {
            btn.setAttribute('data-active', 'true');
          }
        }
      }
    });
  }

  /* ── 9. Sidebar Scroll Spy ──────────────────────────────── */
  function initSidebarScrollSpy() {
    const aside = document.querySelector('main aside');
    if (!aside) return;

    // Collect all anchor links in the sidebar (href="#...")
    const sideLinks = Array.from(aside.querySelectorAll('a[href^="#"]'));
    if (!sideLinks.length) return;

    // Map anchor → link element
    const anchorMap = new Map();
    sideLinks.forEach(link => {
      const id = link.getAttribute('href').slice(1);
      anchorMap.set(id, link);
    });

    // Observe the target elements
    const targets = Array.from(anchorMap.keys())
      .map(id => document.getElementById(id))
      .filter(Boolean);

    if (!targets.length) return;

    let activeId = null;

    const spy = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            activeId = entry.target.id;
          }
        });
        // Update classes
        anchorMap.forEach((link, id) => {
          link.classList.toggle('sidebar-link-active', id === activeId);
        });
      },
      {
        rootMargin: '-20% 0px -60% 0px',
        threshold: 0,
      }
    );

    targets.forEach(el => spy.observe(el));
  }

  /* ── 9b. Scroll-to-top Button ────────────────────────────── */
  function initScrollTop() {
    // Skip on home page
    const page = window.location.pathname.split('/').pop() || 'index.html';
    if (page === 'index.html' || page === '') return;

    const btn = document.createElement('button');
    btn.id = 'scroll-top-btn';
    btn.setAttribute('aria-label', 'Retour en haut de page');
    btn.setAttribute('title', 'Retour en haut');
    btn.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true"><polyline points="18 15 12 9 6 15"/></svg>';
    document.body.appendChild(btn);

    // Show/hide on scroll
    let ticking = false;
    window.addEventListener('scroll', () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          btn.classList.toggle('visible', window.scrollY > 300);
          ticking = false;
        });
        ticking = true;
      }
    }, { passive: true });

    btn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* ── Init ────────────────────────────────────────────────── */
  function init() {
    initNavbar();
    initBurger();
    initDropdowns();
    initRipple();
    initActiveNav();
    initSidebarScrollSpy();
    initScrollTop();
    initHeroGhost();
    requestAnimationFrame(() => {
      initStagger();
      initReveal();
      initHeroEntry();
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
