// Keeps a home-screen install up to date without a refresh button.
//
// Checks whether a newer copy of the current page has been published (when the
// page opens, when the app comes back to the foreground, and every few minutes)
// and reloads to pick it up. A page can define `window.autoUpdateIsIdle()` to
// hold the reload until it's safe, e.g. not in the middle of a game.
//
// Include it at the END of <body>, after the page's own inline scripts.
(function () {
  const fingerprint = (doc) =>
    [...doc.querySelectorAll('script:not([src]), style')].map((n) => n.textContent).join('\n');
  const mine = fingerprint(document);
  const GUARD_KEY = 'auto-update-last-reload';
  let pending = false;
  let checking = false;

  async function check() {
    if (checking || pending || navigator.onLine === false) return;
    checking = true;
    try {
      const res = await fetch(location.pathname + '?check=' + Date.now(), { cache: 'no-store' });
      if (res.ok) {
        const doc = new DOMParser().parseFromString(await res.text(), 'text/html');
        if (fingerprint(doc) !== mine) pending = true;
      }
    } catch (e) {
      // offline or flaky network: try again later
    }
    checking = false;
    maybeReload();
  }

  function maybeReload() {
    if (!pending) return;
    const idle = typeof window.autoUpdateIsIdle === 'function' ? window.autoUpdateIsIdle() : true;
    if (!idle) return;
    // Never reload more than once every 30s, in case the server is still
    // handing out a mix of old and new copies.
    const last = +(sessionStorage.getItem(GUARD_KEY) || 0);
    if (Date.now() - last < 30000) return;
    sessionStorage.setItem(GUARD_KEY, String(Date.now()));
    location.replace(location.pathname + '?v=' + Date.now());
  }

  check();
  setInterval(check, 5 * 60 * 1000);
  setInterval(maybeReload, 2000);
  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'visible') check();
  });
})();
