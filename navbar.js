/**
 * navbar.js — Numérique Éducatif FW-B
 * Injecte la navbar complète dans <nav id="nav-root">.
 * Pour modifier la navigation (liens, modules…), éditer ce seul fichier.
 */
(function () {
  var nav = document.getElementById('nav-root');
  if (!nav) return;
  nav.innerHTML = '\
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">\
    <div class="flex items-center justify-between h-16 gap-4">\
      <a href="index.html" class="flex items-center gap-2.5 shrink-0" aria-label="Accueil Numérique Éducatif FW-B">\
        <div class="w-9 h-9 bg-white/15 rounded-lg flex items-center justify-center">\
          <svg class="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>\
        </div>\
        <div class="leading-tight">\
          <div class="text-white font-bold text-sm tracking-wide">SGNE</div>\
          <div class="text-white/60 text-xs">Fédération Wallonie-Bruxelles</div>\
        </div>\
      </a>\
      <div class="hidden lg:flex items-center gap-0 flex-1 justify-center">\
        <a href="index.html" class="px-2.5 py-2 rounded-md text-sm font-semibold text-white/75 transition-colors whitespace-nowrap">Accueil</a>\
        <div class="relative" id="dropdown-ia">\
          <button class="nav-dropdown-btn flex items-center gap-1 px-2.5 py-2 rounded-md text-sm text-white/75 transition-colors whitespace-nowrap" aria-expanded="false" aria-haspopup="true">\
            Intelligence Artificielle\
            <svg class="w-3.5 h-3.5 opacity-70 transition-transform duration-200" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true"><path d="M6 9l6 6 6-6"/></svg>\
          </button>\
          <div class="nav-dropdown-menu hidden absolute top-full left-0 mt-1 w-64 bg-[#003082] border border-white/15 rounded-xl shadow-2xl py-2 z-50">\
            <a href="table-des-matieres.html" class="flex items-center gap-3 px-4 py-2.5 text-sm text-white font-semibold hover:bg-white/10 transition-colors border-b border-white/10 mb-1">Table des matières</a>\
            <a href="section-1-introduction.html" class="flex items-center gap-3 px-4 py-2.5 text-sm text-white/80 hover:bg-white/10 hover:text-white transition-colors"><span class="text-white/50 font-bold w-4 shrink-0">1</span>Introduction</a>\
            <a href="section-2-definitions.html" class="flex items-center gap-3 px-4 py-2.5 text-sm text-white/80 hover:bg-white/10 hover:text-white transition-colors"><span class="text-white/50 font-bold w-4 shrink-0">2</span>Définitions et concepts clés</a>\
            <a href="section-3-enjeux.html" class="flex items-center gap-3 px-4 py-2.5 text-sm text-white/80 hover:bg-white/10 hover:text-white transition-colors"><span class="text-white/50 font-bold w-4 shrink-0">3</span>Les grands enjeux de l\'IA</a>\
            <a href="section-4-enseignement.html" class="flex items-center gap-3 px-4 py-2.5 text-sm text-white/80 hover:bg-white/10 hover:text-white transition-colors"><span class="text-white/50 font-bold w-4 shrink-0">4</span>Les professionnels face à l\'IA</a>\
            <a href="section-5-generatives.html" class="flex items-center gap-3 px-4 py-2.5 text-sm text-white/80 hover:bg-white/10 hover:text-white transition-colors"><span class="text-white/50 font-bold w-4 shrink-0">5</span>Zoom sur les IA génératives</a>\
            <a href="section-6-ressources.html" class="flex items-center gap-3 px-4 py-2.5 text-sm text-white/80 hover:bg-white/10 hover:text-white transition-colors"><span class="text-white/50 font-bold w-4 shrink-0">6</span>En savoir plus &amp; Références</a>\
          </div>\
        </div>\
        <div class="relative" id="dropdown-rs">\
          <button class="nav-dropdown-btn flex items-center gap-1 px-2.5 py-2 rounded-md text-sm text-white/75 transition-colors whitespace-nowrap" aria-expanded="false" aria-haspopup="true">\
            Réseaux Sociaux\
            <svg class="w-3.5 h-3.5 opacity-70 transition-transform duration-200" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true"><path d="M6 9l6 6 6-6"/></svg>\
          </button>\
          <div class="nav-dropdown-menu hidden absolute top-full left-0 mt-1 w-64 bg-[#003082] border border-white/15 rounded-xl shadow-2xl py-2 z-50">\
            <a href="rs-table-des-matieres.html" class="flex items-center gap-3 px-4 py-2.5 text-sm text-white font-semibold hover:bg-white/10 transition-colors border-b border-white/10 mb-1">Table des matières</a>\
            <a href="rs-section-1.html" class="flex items-center gap-3 px-4 py-2.5 text-sm text-white/80 hover:bg-white/10 hover:text-white transition-colors"><span class="text-white/50 font-bold w-4 shrink-0">1</span>Introduction</a>\
            <a href="rs-section-2.html" class="flex items-center gap-3 px-4 py-2.5 text-sm text-white/80 hover:bg-white/10 hover:text-white transition-colors"><span class="text-white/50 font-bold w-4 shrink-0">2</span>Définitions et exemples</a>\
            <a href="rs-section-3.html" class="flex items-center gap-3 px-4 py-2.5 text-sm text-white/80 hover:bg-white/10 hover:text-white transition-colors"><span class="text-white/50 font-bold w-4 shrink-0">3</span>Les réseaux sociaux en 8 chiffres</a>\
            <a href="rs-section-4.html" class="flex items-center gap-3 px-4 py-2.5 text-sm text-white/80 hover:bg-white/10 hover:text-white transition-colors"><span class="text-white/50 font-bold w-4 shrink-0">4</span>Enjeux et problématiques</a>\
            <a href="rs-section-5.html" class="flex items-center gap-3 px-4 py-2.5 text-sm text-white/80 hover:bg-white/10 hover:text-white transition-colors"><span class="text-white/50 font-bold w-4 shrink-0">5</span>Enseigner à l\'heure des RS</a>\
            <a href="rs-section-6.html" class="flex items-center gap-3 px-4 py-2.5 text-sm text-white/80 hover:bg-white/10 hover:text-white transition-colors"><span class="text-white/50 font-bold w-4 shrink-0">6</span>Conclusion, ressources &amp; références</a>\
          </div>\
        </div>\
        <div class="relative" id="dropdown-cyber">\
          <button class="nav-dropdown-btn flex items-center gap-1 px-2.5 py-2 rounded-md text-sm text-white/75 transition-colors whitespace-nowrap" aria-expanded="false" aria-haspopup="true">\
            Cyberharcèlement\
            <svg class="w-3.5 h-3.5 opacity-70 transition-transform duration-200" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true"><path d="M6 9l6 6 6-6"/></svg>\
          </button>\
          <div class="nav-dropdown-menu hidden absolute top-full left-0 mt-1 w-64 bg-[#003082] border border-white/15 rounded-xl shadow-2xl py-2 z-50">\
            <a href="cyber-table-des-matieres.html" class="flex items-center gap-3 px-4 py-2.5 text-sm text-white font-semibold hover:bg-white/10 transition-colors border-b border-white/10 mb-1">Table des matières</a>\
            <a href="cyber-section-1.html" class="flex items-center gap-3 px-4 py-2.5 text-sm text-white/80 hover:bg-white/10 hover:text-white transition-colors"><span class="text-white/50 font-bold w-4 shrink-0">1</span>Introduction</a>\
            <a href="cyber-section-2.html" class="flex items-center gap-3 px-4 py-2.5 text-sm text-white/80 hover:bg-white/10 hover:text-white transition-colors"><span class="text-white/50 font-bold w-4 shrink-0">2</span>Définitions</a>\
            <a href="cyber-section-3.html" class="flex items-center gap-3 px-4 py-2.5 text-sm text-white/80 hover:bg-white/10 hover:text-white transition-colors"><span class="text-white/50 font-bold w-4 shrink-0">3</span>Constats et chiffres</a>\
            <a href="cyber-section-4.html" class="flex items-center gap-3 px-4 py-2.5 text-sm text-white/80 hover:bg-white/10 hover:text-white transition-colors"><span class="text-white/50 font-bold w-4 shrink-0">4</span>Lutter contre le cyberharcèlement</a>\
            <a href="cyber-section-5.html" class="flex items-center gap-3 px-4 py-2.5 text-sm text-white/80 hover:bg-white/10 hover:text-white transition-colors"><span class="text-white/50 font-bold w-4 shrink-0">5</span>Prendre en charge</a>\
            <a href="cyber-section-6.html" class="flex items-center gap-3 px-4 py-2.5 text-sm text-white/80 hover:bg-white/10 hover:text-white transition-colors"><span class="text-white/50 font-bold w-4 shrink-0">6</span>En savoir plus &amp; Références</a>\
          </div>\
        </div>\
        <div class="relative" id="dropdown-env">\
          <button class="nav-dropdown-btn flex items-center gap-1 px-2.5 py-2 rounded-md text-sm text-white/75 transition-colors whitespace-nowrap" aria-expanded="false" aria-haspopup="true">\
            Impact environnemental\
            <svg class="w-3.5 h-3.5 opacity-70 transition-transform duration-200" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true"><path d="M6 9l6 6 6-6"/></svg>\
          </button>\
          <div class="nav-dropdown-menu hidden absolute top-full left-0 mt-1 w-72 bg-[#003082] border border-white/15 rounded-xl shadow-2xl py-2 z-50">\
            <a href="env-table-des-matieres.html" class="flex items-center gap-3 px-4 py-2.5 text-sm text-white font-semibold hover:bg-white/10 transition-colors border-b border-white/10 mb-1">Table des matières</a>\
            <a href="env-section-1.html" class="flex items-center gap-3 px-4 py-2.5 text-sm text-white/80 hover:bg-white/10 hover:text-white transition-colors"><span class="text-white/50 font-bold w-4 shrink-0">1</span>Introduction</a>\
            <a href="env-section-2.html" class="flex items-center gap-3 px-4 py-2.5 text-sm text-white/80 hover:bg-white/10 hover:text-white transition-colors"><span class="text-white/50 font-bold w-4 shrink-0">2</span>Concepts clés</a>\
            <a href="env-section-3.html" class="flex items-center gap-3 px-4 py-2.5 text-sm text-white/80 hover:bg-white/10 hover:text-white transition-colors"><span class="text-white/50 font-bold w-4 shrink-0">3</span>Constats et chiffres</a>\
            <a href="env-section-4.html" class="flex items-center gap-3 px-4 py-2.5 text-sm text-white/80 hover:bg-white/10 hover:text-white transition-colors"><span class="text-white/50 font-bold w-4 shrink-0">4</span>Agir à l\'échelle de l\'établissement</a>\
            <a href="env-section-5.html" class="flex items-center gap-3 px-4 py-2.5 text-sm text-white/80 hover:bg-white/10 hover:text-white transition-colors"><span class="text-white/50 font-bold w-4 shrink-0">5</span>Éduquer au numérique responsable</a>\
            <a href="env-section-6.html" class="flex items-center gap-3 px-4 py-2.5 text-sm text-white/80 hover:bg-white/10 hover:text-white transition-colors"><span class="text-white/50 font-bold w-4 shrink-0">6</span>En savoir plus &amp; Références</a>\
          </div>\
        </div>\
      </div>\
      <button id="burgerBtn" class="lg:hidden p-2 rounded-md text-white hover:bg-white/10 transition-colors" aria-label="Menu" aria-expanded="false" aria-controls="mobileMenu">\
        <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>\
      </button>\
    </div>\
    <div id="mobileMenu" class="hidden lg:hidden pb-4 border-t border-white/10 pt-2">\
      <div class="flex flex-col gap-1">\
        <a href="index.html" class="px-3 py-2.5 rounded-md text-sm text-white font-medium hover:bg-white/10">Accueil</a>\
        <a href="table-des-matieres.html" class="px-3 py-2.5 rounded-md text-sm text-white font-medium hover:bg-white/10">Intelligence Artificielle</a>\
        <a href="rs-table-des-matieres.html" class="px-3 py-2.5 rounded-md text-sm text-white font-medium hover:bg-white/10">Réseaux Sociaux</a>\
        <a href="cyber-table-des-matieres.html" class="px-3 py-2.5 rounded-md text-sm text-white font-medium hover:bg-white/10">Cyberharcèlement</a>\
        <a href="env-table-des-matieres.html" class="px-3 py-2.5 rounded-md text-sm text-white font-medium hover:bg-white/10">Impact environnemental</a>\
      </div>\
    </div>\
  </div>';
})();
