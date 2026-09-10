/* ============================================================
   Casa Ribelle — Seitenlogik
   Mobilmenü und Jahreszahl. Kein Öffnungsstatus: Für dieses Haus
   sind keine Zeiten verlässlich veröffentlicht, und ein Status,
   der auf erfundenen Zeiten beruht, wäre schlimmer als keiner.
   ============================================================ */
(function () {
  'use strict';

  var toggle = document.getElementById('navToggle');
  var nav = document.getElementById('mainNav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      toggle.setAttribute('aria-label', open ? 'Menü schließen' : 'Menü öffnen');
    });
    nav.addEventListener('click', function (e) {
      if (e.target.tagName !== 'A') return;
      nav.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  }

  var year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();
})();
