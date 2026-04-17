/**
 * footer.js — Numérique Éducatif FW-B
 * Injecte le footer dans <footer id="footer-root">.
 * Pour modifier le pied de page, éditer ce seul fichier.
 */
(function () {
  var footer = document.getElementById('footer-root');
  if (!footer) return;

  // Slim down the padding (overrides py-8 / mt-4 set in HTML)
  footer.classList.remove('py-8', 'mt-4');
  footer.classList.add('py-3');

  footer.innerHTML =
    '<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center sm:flex-row sm:items-center sm:justify-between gap-0.5 sm:gap-6">' +
      '<p class="text-white text-xs font-medium leading-tight text-center sm:text-left">Hichem Tadlaoui</p>' +
      '<p class="text-xs text-center sm:text-right" style="color:rgba(255,255,255,0.55)">Site conçu et développé avec Claude</p>' +
    '</div>';
})();
