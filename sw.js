/* Service Worker: App-Shell offline. Wetterdaten cacht die App selbst (IndexedDB), darum hier nur eigene Dateien. */
const VERSION = 'sw24-20ef3851f8';                                          // build.py ersetzt dies durch einen Inhalts-Hash
const ASSETS = ["./", "index.html", "manifest.webmanifest", "css/app.20ef3851f8.css", "js/app.20ef3851f8.js", "assets/fonts/barlow-condensed-500.woff2", "assets/fonts/barlow-condensed-600.woff2", "assets/fonts/barlow-condensed-700.woff2", "assets/icons/apple-touch-icon.png", "assets/icons/icon-192.png", "assets/icons/icon-512.png", "assets/icons/icon-maskable-512.png", "assets/icons/icon.svg"];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(VERSION).then(c => c.addAll(ASSETS)).then(() => self.skipWaiting()));   // alles vorladen
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== VERSION).map(k => caches.delete(k)))).then(() => self.clients.claim())); // alte Versionen löschen
});
self.addEventListener('fetch', e => {
  const url = new URL(e.request.url);
  if (e.request.method !== 'GET' || url.origin !== self.location.origin) return;  // fremde Server (APIs, Webcams) nicht anfassen
  if (e.request.mode === 'navigate') {                                // Seitenaufruf: Netz zuerst, offline die gespeicherte Shell
    e.respondWith(fetch(e.request).then(r => { const copy = r.clone(); caches.open(VERSION).then(c => c.put('index.html', copy)); return r; })
      .catch(() => caches.match('index.html', { ignoreSearch: true })));
    return;
  }
  e.respondWith(caches.match(e.request, { ignoreSearch: true }).then(hit => hit || fetch(e.request).then(r => {   // Dateien: Cache zuerst
    if (r.ok) { const copy = r.clone(); caches.open(VERSION).then(c => c.put(e.request, copy)); }
    return r;
  })));
});
