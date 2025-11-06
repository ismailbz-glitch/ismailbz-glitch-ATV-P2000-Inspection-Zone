
const CACHE = 'atv-inspection-v1';
const ASSETS = [
  '/ATV-Inspection-Zone/',
  '/ATV-Inspection-Zone/index.html',
  '/ATV-Inspection-Zone/manifest.webmanifest',
  '/ATV-Inspection-Zone/service-worker.js',
  '/ATV-Inspection-Zone/icons/icon-192.png',
  '/ATV-Inspection-Zone/icons/icon-512.png',
  '/ATV-Inspection-Zone/assets/logo-atv.svg'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)));
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
  );
  self.clients.claim();
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(res => res || fetch(e.request).then(resp => {
      // Optionally cache new GET requests
      if (e.request.method === 'GET') {
        const copy = resp.clone();
        caches.open(CACHE).then(c => c.put(e.request, copy));
      }
      return resp;
    }).catch(() => caches.match('/ATV-Inspection-Zone/index.html')))
  );
});
