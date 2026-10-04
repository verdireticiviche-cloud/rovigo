// Miglioramento progressivo: contenuti e navigazione funzionano senza JavaScript.
const menuButton = document.querySelector('.menu-toggle');
const menu = document.querySelector('#menu');
if (menuButton && menu) {
  const smallScreen = window.matchMedia('(max-width: 820px)');
  const setOpen = (open) => {
    menuButton.setAttribute('aria-expanded', String(open));
    menu.dataset.collapsed = String(smallScreen.matches && !open);
  };
  menuButton.hidden = false;
  setOpen(false);
  menuButton.addEventListener('click', () => setOpen(menuButton.getAttribute('aria-expanded') !== 'true'));
  menu.addEventListener('click', (event) => { if (event.target.closest('a')) setOpen(false); });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && smallScreen.matches && menuButton.getAttribute('aria-expanded') === 'true') {
      setOpen(false); menuButton.focus();
    }
  });
  smallScreen.addEventListener('change', () => setOpen(false));
}
const copyButton = document.querySelector('.copy-link');
if (copyButton && navigator.clipboard && window.isSecureContext && /^https?:$/.test(location.protocol)) {
  copyButton.hidden = false;
  copyButton.addEventListener('click', async () => {
    const status = document.querySelector('#copy-status');
    try {
      const url = new URL(location.href); url.hash = '';
      await navigator.clipboard.writeText(url.href);
      status.textContent = 'Link copiato.';
    } catch { status.textContent = 'Puoi copiare il link dalla barra degli indirizzi.'; }
  });
}