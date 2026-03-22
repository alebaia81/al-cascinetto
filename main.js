/* ═══════════════════════════════════════
   AL CASCINETTO — JAVASCRIPT
   ═══════════════════════════════════════ */

'use strict';

/* ─────────────────────────────────────────
   MENU DATA
───────────────────────────────────────── */

// PIZZE CLASSICHE — Mini ø28 / Normale ø33
const menuClassiche = [
  { name: 'Marinara',         desc: 'Polpa di pomodoro, aglio, olio evo, origano',                                                     mini: '4,50', norm: '5,50' },
  { name: 'Margherita',       desc: 'Polpa di pomodoro, mozzarella fior di latte, basilico',                                           mini: '5,00', norm: '6,00' },
  { name: 'Americana',        desc: 'Polpa di pom., mozzarella fior di latte, wurstel, patatine *',                                    mini: '7,00', norm: '8,00' },
  { name: 'Prosciutto e Funghi', desc: 'Polpa di pom., mozzarella fior di latte, prosciutto cotto, funghi',                           mini: '7,00', norm: '8,00' },
  { name: 'Diavola',          desc: 'Polpa di pom., mozzarella fior di latte, salamino piccante',                                      mini: '6,00', norm: '7,00' },
  { name: 'Romana',           desc: 'Polpa di pom., mozzarella fior di latte, acciughe, origano',                                     mini: '6,00', norm: '7,00' },
  { name: 'Tonno e Cipolla',  desc: 'Polpa di pom., mozzarella fior di latte, tonno, cipolla',                                        mini: '7,00', norm: '8,00' },
  { name: 'Napoli Plus',      desc: 'Polpa di pom., mozzarella fior di latte, acciughe, capperi, olive, salamino piccante, origano', mini: '7,50', norm: '8,50' },
  { name: '4 Stagioni',       desc: 'Polpa di pom., mozzarella fior di latte, funghi, prosciutto cotto, carciofi, olive',             mini: '8,00', norm: '9,00' },
  { name: 'Vegetariana',      desc: 'Polpa di pom., mozzarella fior di latte, verdure grigliate miste',                               mini: '8,00', norm: '9,00' },
  { name: '5 Formaggi',       desc: 'Mozzarella fior di latte, emmenthal, scamorza affumicata, gorgonzola dolce, panna',              mini: '8,00', norm: '9,00' },
  { name: 'Maialina',         desc: 'Polpa di pomodoro, mozzarella fior di latte, wurstel, prosciutto cotto, salamino piccante, salsiccia', mini: '8,50', norm: '9,50' },
  { name: 'Parma',            desc: 'Polpa di pomodoro, mozzarella fior di latte, rucola, crudo di Parma 18 mesi, scaglie di grana', mini: '8,00', norm: '9,00' },
  { name: 'Regina Margherita',desc: 'Polpa di pom., mozzarella di bufala DOP, basilico',                                              mini: '8,00', norm: '9,00', badge: 'Bufala DOP' },
  { name: 'Carbonara',        desc: "Vellutata d'uovo, mozzarella fior di latte, grana padano, pancetta affumicata, pecorino Romano", mini: '8,00', norm: '9,00' },
  { name: 'Amatriciana',      desc: 'Polpa di pomodoro, mozzarella fior di latte, grana padano, pancetta affumicata, pecorino Romano',mini: '8,00', norm: '9,00' },
  { name: 'Caprese',          desc: 'Polpa di pomodoro, mozzarella di bufala DOP a fine cottura, pomodoro fresco condito, basilico',  mini: '8,00', norm: '9,00' },
  { name: 'Norma',            desc: 'Polpa di pom., mozzarella fior di latte, melanzane, ricotta salata',                             mini: '7,50', norm: '8,50' },
];

// PIZZE GUSTOSE — Mini / Normale
const menuGustose = [
  { name: 'Autunno',       desc: 'Vellutata di porcini tartufata, mozzarella fior di latte, porcini, scaglie di grana, speck',                     mini: '10,00', norm: '11,00' },
  { name: 'Al Cascinetto', desc: 'Polpa di pomodoro, mozzarella fior di latte, pomodoro fresco, prosciutto cotto, funghi, wurstel, gorgonzola',    mini: '9,00',  norm: '10,00', badge: 'La Nostra' },
  { name: 'Partenopea',    desc: 'Mozzarella fior di latte, friarielli, mozzarella di bufala DOP, salsiccia',                                      mini: '9,00',  norm: '10,00' },
  { name: 'Tirolese',      desc: 'Pomodoro, mozzarella fior di latte, speck e brie',                                                               mini: '8,00',  norm: '9,00'  },
  { name: 'Pizza Ligure',  desc: 'Vellutata di pesto e crescenza, mozzarella, valeriana, olive, pesto e noci',                                     mini: '8,50',  norm: '9,50'  },
  { name: 'Pizza Calamarata', desc: 'Polpa di pom., mozzarella fior di latte, fritto di calamari *',                                              mini: '—',     norm: '12,00' },
  { name: 'Pizza Zuccona', desc: 'Vellutata di zucca, mozzarella fior di latte, salsiccia, scamorza, funghi porcini',                             mini: '10,00', norm: '11,00' },
];

// CALZONI — solo Normale
const menuCalzoni = [
  { name: 'Classico',    desc: 'Mozzarella fior di latte, prosciutto cotto',                             norm: '7,50' },
  { name: 'Vegetariano', desc: 'Mozzarella fior di latte, verdure grigliate miste',                      norm: '9,00' },
  { name: 'Farcito',     desc: 'Mozzarella fior di latte, prosciutto cotto, funghi, carciofi',           norm: '9,00' },
];

/* ─────────────────────────────────────────
   HELPERS
───────────────────────────────────────── */
function badge(text) {
  return text
    ? `<span style="font-size:0.6rem;padding:2px 8px;background:rgba(212,175,55,0.15);color:#d4af37;border-radius:999px;border:1px solid rgba(212,175,55,0.3);white-space:nowrap;">${text}</span>`
    : '';
}

function dualPriceHeader(showMini = true) {
  return `
    <div class="flex items-center justify-between px-5 pb-2 mb-1 border-b border-gold/10">
      <span class="text-xs text-gray-600 uppercase tracking-widest">Pizze</span>
      <div class="flex gap-6 text-xs text-gold/60 uppercase tracking-widest font-medium">
        ${showMini ? '<span class="w-12 text-right">Mini</span>' : '<span class="w-12"></span>'}
        <span class="w-14 text-right">Norm.</span>
      </div>
    </div>`;
}

function dualPriceRow(item) {
  return `
    <div class="menu-item-row">
      <div class="flex-1 min-w-0">
        <div class="flex items-center gap-2 flex-wrap">
          <span class="menu-item-name">${item.name}</span>
          ${badge(item.badge)}
        </div>
        <span class="menu-item-desc hidden md:block">${item.desc}</span>
      </div>
      <div class="flex gap-6 shrink-0">
        <span class="w-12 text-right text-sm text-gray-500">${item.mini || '—'}</span>
        <span class="w-14 text-right text-sm font-semibold text-gold">€ ${item.norm}</span>
      </div>
    </div>`;
}

/* ─────────────────────────────────────────
   RENDER MENU
───────────────────────────────────────── */
function renderMenu() {
  renderClassicheTab();
  renderSpecialiTab();
  renderPalaTab();
}

function renderClassicheTab() {
  const el = document.getElementById('menu-classiche');
  if (!el) return;
  let html = dualPriceHeader(true);
  menuClassiche.forEach(item => { html += dualPriceRow(item); });
  html += `<p class="text-xs text-gray-600 text-right mt-4 px-1 italic">* Prodotto surgelato · Aggiunta ingredienti da € 0,50 a € 3,00</p>`;
  el.innerHTML = html;
}

function renderSpecialiTab() {
  const el = document.getElementById('menu-speciali');
  if (!el) return;

  let html = dualPriceHeader(true);
  menuGustose.forEach(item => { html += dualPriceRow(item); });

  html += `<div class="menu-category-header mt-6">Calzoni <span class="text-xs text-gray-500 font-sans font-normal tracking-normal normal-case ml-1">formato normale</span></div>`;
  html += dualPriceHeader(false);
  menuCalzoni.forEach(item => {
    html += `
      <div class="menu-item-row">
        <div class="flex-1 min-w-0">
          <span class="menu-item-name">${item.name}</span>
          <span class="menu-item-desc hidden md:block">${item.desc}</span>
        </div>
        <div class="flex gap-6 shrink-0">
          <span class="w-12 text-right text-gray-700">—</span>
          <span class="w-14 text-right text-sm font-semibold text-gold">€ ${item.norm}</span>
        </div>
      </div>`;
  });
  html += `<p class="text-xs text-gray-600 text-right mt-4 px-1 italic">* Prodotto surgelato · Aggiunta ingredienti da € 0,50 a € 3,00</p>`;
  el.innerHTML = html;
}

function renderPalaTab() {
  const el = document.getElementById('menu-cucina');
  if (!el) return;

  const impasti = [
    { name: 'Senza Glutine',        price: '+€ 2,50' },
    { name: 'Integrale',             price: '+€ 1,50' },
    { name: 'Kamut',                 price: '+€ 2,00' },
    { name: 'Con Arte Napoletana',   price: '+€ 1,50' },
    { name: 'Pinsa Romana',          price: '+€ 1,50' },
    { name: 'Mix di Cereali e Semi', price: '+€ 2,00' },
  ];

  const fritti = [
    { name: 'Fiori di Zucca',             qty: '1 pz.',      price: '€ 2,00' },
    { name: 'Patatine',                    qty: '1 porzione', price: '€ 3,50' },
    { name: 'Supplì di Riso',             qty: '1 pz.',      price: '€ 2,00' },
    { name: 'Crocchette di Patate',        qty: '5 pz.',      price: '€ 3,50' },
    { name: 'Fritto Calamari e Gamberi',  qty: '1 etto',     price: '€ 4,00' },
    { name: 'Nuggets di Pollo',           qty: '5 pz.',      price: '€ 3,50' },
    { name: 'Alette di Pollo',            qty: '5 pz.',      price: '€ 4,00' },
    { name: 'Nuggets di Porchetta',       qty: '5 pz.',      price: '€ 4,00' },
    { name: 'Arancini Gusti Vari',        qty: '1 pz.',      price: '€ 3,00' },
  ];

  const piatti = [
    { name: 'Wurstel Grigliati',               qty: '3 pz.',    desc: 'Serviti con patatine fritte, salse e pane',                                      price: '€ 10,00' },
    { name: 'Salamelle Grigliate',             qty: '2 pz.',    desc: 'Servite con patatine fritte, salsa e pane',                                       price: '€ 12,00' },
    { name: 'Hamburger di Manzo Grigliato',    qty: '250 gr.',  desc: 'Servito con insalata, pomodoro, patatine fritte, salse e pane',                   price: '€ 12,00' },
    { name: "Orecchia d'Elefante Fritta",      qty: '400 gr.',  desc: 'Fritta nel burro, servita con patatine fritte, salsa e pane',                     price: '€ 20,00' },
    { name: 'Spiedino di Carne Mista Grigliata', qty: '1 pz.', desc: 'Servito con polenta, verdure grigliate e pane',                                   price: '€ 12,00' },
  ];

  el.innerHTML = `
    <!-- ★ PALA ROMANA FEATURED CARD ★ -->
    <div class="rounded-2xl border-2 border-gold/50 bg-gradient-to-br from-gold/10 via-dark-card to-dark-card p-6 md:p-8 mb-10 relative overflow-hidden shadow-gold">
      <div class="absolute top-0 right-0 px-5 py-2 bg-gold text-dark-primary text-xs font-bold tracking-[0.15em] uppercase rounded-bl-2xl">
        ★ Il Cavallo di Battaglia
      </div>
      <div class="flex flex-col lg:flex-row gap-8 items-start lg:items-center">
        <div class="flex-1">
          <p class="text-gold/80 text-xs tracking-[0.35em] uppercase mb-3">Formato 60×35 cm · Anche Gluten Free</p>
          <h3 class="font-serif text-3xl md:text-4xl text-white font-bold leading-tight mb-4">
            Pizza in Pala<br/><em class="text-gold">alla Romana</em>
          </h3>
          <p class="text-gray-400 text-sm leading-relaxed max-w-md">
            Impasto ad alta idratazione, cotto direttamente sulla pala di pietra. Croccante fuori,
            morbida e alveolata dentro. Un formato generoso da condividere — o tenere tutto per sé.
          </p>
          <p class="text-xs text-gray-600 mt-3 italic">Le aggiunte sono conteggiate a parte. Il prezzo dei calamari si conteggia a peso.</p>
        </div>
        <div class="flex flex-col gap-3 w-full lg:w-64 shrink-0">
          <div class="flex justify-between items-center py-3 px-5 rounded-xl bg-dark-primary/70 border border-gold/30 hover:border-gold/60 transition-colors">
            <span class="font-serif text-white text-lg">Margherita</span>
            <span class="text-gold font-bold text-xl">€ 17,00</span>
          </div>
          <div class="flex justify-between items-center py-3 px-5 rounded-xl bg-dark-primary/70 border border-gold/30 hover:border-gold/60 transition-colors">
            <span class="font-serif text-white text-lg">Farcita</span>
            <span class="text-gold font-bold text-xl">€ 23,00</span>
          </div>
          <div class="flex justify-between items-center py-3 px-5 rounded-xl bg-dark-primary/70 border border-gold/20 hover:border-gold/40 transition-colors">
            <span class="font-serif text-gray-300">Gluten Free +</span>
            <span class="text-gold/80 font-semibold text-lg">€ 10,00</span>
          </div>
        </div>
      </div>
    </div>

    <!-- IMPASTI ALTERNATIVI -->
    <div class="mb-10">
      <div class="menu-category-header">
        I Nostri Impasti Alternativi
        <span class="text-xs text-gray-500 font-sans font-normal tracking-normal normal-case ml-2">ref. formato ø33</span>
      </div>
      <div class="grid grid-cols-2 md:grid-cols-3 gap-3 mt-4">
        ${impasti.map(i => `
          <div class="flex justify-between items-center px-4 py-3 rounded-xl bg-dark-card border border-white/5 hover:border-gold/25 transition-colors duration-200">
            <span class="text-sm text-gray-300">${i.name}</span>
            <span class="text-gold font-semibold text-sm shrink-0 ml-2">${i.price}</span>
          </div>`).join('')}
      </div>
    </div>

    <!-- FRITTI & SFIZI -->
    <div class="mb-10">
      <div class="menu-category-header">Fritti &amp; Sfizi</div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4">
        ${fritti.map(i => `
          <div class="menu-item-row">
            <div class="flex items-baseline gap-2">
              <span class="menu-item-name">${i.name}</span>
              <span class="text-xs text-gray-500">${i.qty}</span>
            </div>
            <span class="menu-item-price">${i.price}</span>
          </div>`).join('')}
      </div>
    </div>

    <!-- PIATTI UNICI -->
    <div class="mb-6">
      <div class="menu-category-header">Piatti Unici</div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        ${piatti.map(i => `
          <div class="bg-dark-card border border-white/5 hover:border-gold/20 rounded-xl p-5 transition-all duration-200 hover:translate-x-1">
            <div class="flex justify-between items-start gap-3">
              <div>
                <div class="flex items-center gap-2 flex-wrap">
                  <span class="font-serif text-white">${i.name}</span>
                  <span class="text-xs text-gray-500">${i.qty}</span>
                </div>
                <p class="text-xs text-gray-500 mt-1 leading-relaxed">${i.desc}</p>
              </div>
              <span class="text-gold font-bold text-base shrink-0">${i.price}</span>
            </div>
          </div>`).join('')}
      </div>
    </div>

    <!-- NOTE FINALI -->
    <div class="text-center py-5 border-t border-gold/10 mt-6">
      <p class="text-xs text-gray-600 italic">* Prodotto surgelato · Aggiunta ingredienti da € 0,50 a € 3,00</p>
      <p class="text-xs text-gray-700 mt-1">Servizio a domicilio tutti i giorni dalle 19:00 alle 22:00 · Tel. 0523 718456</p>
    </div>
  `;
}

/* ─────────────────────────────────────────
   MENU TABS
───────────────────────────────────────── */
function showTab(name) {
  ['classiche', 'speciali', 'cucina'].forEach(key => {
    const section = document.getElementById(`menu-${key}`);
    const tab = document.getElementById(`tab-${key}`);
    if (!section || !tab) return;
    if (key === name) {
      section.classList.remove('hidden');
      tab.classList.add('active-tab');
    } else {
      section.classList.add('hidden');
      tab.classList.remove('active-tab');
    }
  });
}
window.showTab = showTab;

/* ─────────────────────────────────────────
   NAVBAR SCROLL EFFECT
───────────────────────────────────────── */
function initNavbar() {
  const navbar = document.getElementById('navbar');
  const onScroll = () => {
    if (window.scrollY > 60) navbar.classList.add('scrolled');
    else navbar.classList.remove('scrolled');
  };
  window.addEventListener('scroll', onScroll, { passive: true });
}

/* ─────────────────────────────────────────
   MOBILE MENU TOGGLE
───────────────────────────────────────── */
function initMobileMenu() {
  const toggle = document.getElementById('menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  if (!toggle || !mobileMenu) return;

  toggle.addEventListener('click', () => {
    const isOpen = !mobileMenu.classList.contains('hidden');
    if (isOpen) {
      mobileMenu.classList.add('hidden');
      mobileMenu.classList.remove('flex');
      toggle.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
    } else {
      mobileMenu.classList.remove('hidden');
      mobileMenu.classList.add('flex');
      toggle.classList.add('is-open');
      toggle.setAttribute('aria-expanded', 'true');
    }
  });

  // Close on link click
  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.add('hidden');
      mobileMenu.classList.remove('flex');
      toggle.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
}

/* ─────────────────────────────────────────
   HERO VIDEO — autoplay fallback
───────────────────────────────────────── */
function initHeroVideo() {
  const video = document.getElementById('hero-video');
  if (!video) return;

  // Forza autoplay su iOS/Safari via interazione utente
  const tryPlay = () => {
    video.play().catch(() => {});
    document.removeEventListener('touchstart', tryPlay);
    document.removeEventListener('click', tryPlay);
  };

  if (video.paused) {
    document.addEventListener('touchstart', tryPlay, { once: true, passive: true });
    document.addEventListener('click', tryPlay, { once: true });
  }
}

/* ─────────────────────────────────────────
   SCROLL FADE-IN (IntersectionObserver)
───────────────────────────────────────── */
function initScrollAnimations() {
  const elements = document.querySelectorAll('.fade-in-scroll');
  if (!elements.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Add staggered delay for siblings
        const siblings = entry.target.parentElement.querySelectorAll('.fade-in-scroll');
        let delay = 0;
        siblings.forEach((el, i) => {
          if (el === entry.target) delay = i * 80;
        });
        setTimeout(() => entry.target.classList.add('visible'), delay);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  elements.forEach(el => observer.observe(el));
}

/* ─────────────────────────────────────────
   BOOKING FORM
───────────────────────────────────────── */
function initBookingForm() {
  const form = document.getElementById('booking-form');
  const success = document.getElementById('booking-success');
  if (!form) return;

  // Set minimum date to today
  const dateInput = document.getElementById('data');
  if (dateInput) {
    const today = new Date().toISOString().split('T')[0];
    dateInput.setAttribute('min', today);
  }

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    // Client-side validation
    const required = form.querySelectorAll('[required]');
    let valid = true;
    required.forEach(field => {
      if (!field.value.trim()) {
        valid = false;
        field.style.borderColor = 'rgba(239, 68, 68, 0.6)';
        setTimeout(() => field.style.borderColor = '', 2000);
      }
    });
    if (!valid) return;

    const btn = form.querySelector('button[type="submit"]');
    btn.textContent = 'Invio in corso...';
    btn.disabled = true;

    try {
      const response = await fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { 'Accept': 'application/json' }
      });

      if (response.ok) {
        // Success
        form.querySelectorAll('input:not([type=hidden]), select').forEach(f => f.value = '');
        if (success) {
          success.classList.remove('hidden');
          success.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
          setTimeout(() => success.classList.add('hidden'), 7000);
        }
      } else {
        const data = await response.json();
        const msg = data?.errors?.map(e => e.message).join(', ') || 'Errore nell\'invio.';
        alert('Si è verificato un errore: ' + msg + '\nRiprova o contattaci telefonicamente.');
      }
    } catch (err) {
      alert('Connessione non riuscita. Controlla la tua connessione e riprova.');
    } finally {
      btn.textContent = 'Conferma Prenotazione';
      btn.disabled = false;
    }
  });
}

/* ─────────────────────────────────────────
   SMOOTH SCROLL FOR NAV LINKS
───────────────────────────────────────── */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
      const target = document.querySelector(link.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      const offset = 80; // navbar height
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });
}

/* ─────────────────────────────────────────
   ACTIVE NAV LINK HIGHLIGHT
───────────────────────────────────────── */
function initActiveNav() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(link => {
          link.classList.remove('text-gold');
          if (link.getAttribute('href') === `#${entry.target.id}`) {
            link.classList.add('text-gold');
          }
        });
      }
    });
  }, { threshold: 0.4 });

  sections.forEach(s => observer.observe(s));
}

/* ─────────────────────────────────────────
   INIT ALL
───────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  renderMenu();
  initNavbar();
  initMobileMenu();
  initHeroVideo();
  initScrollAnimations();
  initBookingForm();
  initSmoothScroll();
  initActiveNav();
  console.log('%c🍕 Al Cascinetto — Benvenuto!', 'color:#d4af37; font-size:14px; font-weight:bold;');
});
