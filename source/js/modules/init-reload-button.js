function initReloadButton() {
  const btn = document.querySelector('[data-reload]');

  if (!btn) {
    return;
  }

  btn.addEventListener('click', () => location.reload());
}

export {initReloadButton};
