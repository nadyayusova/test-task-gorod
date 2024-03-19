import {mobileVhFix} from './utils/mobile-vh-fix.js';
import {initCounter} from './modules/init-counter.js';
import {initReloadButton} from './modules/init-reload-button.js';

window.addEventListener('DOMContentLoaded', () => {
  // Utils
  // ---------------------------------

  mobileVhFix();

  // Modules
  // ---------------------------------

  window.addEventListener('load', () => {
    initCounter();
    initReloadButton();
  });
});
