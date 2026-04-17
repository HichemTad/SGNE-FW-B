/**
 * tailwind-config.js — Numérique Éducatif FW-B
 * Configuration Tailwind pour les pages IA (couleurs institutionnelles FWB).
 * Doit être chargé après le CDN Tailwind et avant motion.js.
 */
tailwind.config = {
  theme: { extend: { colors: { fwb: { 900: '#003082', 800: '#1e3a8a', 600: '#2563eb', 100: '#dbeafe', 50: '#eff6ff' } } } }
};
