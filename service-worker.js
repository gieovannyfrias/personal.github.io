const CACHE_NAME = 'personal-static-v1';
const NEWS_CACHE = 'personal-cache-v1';

const APP_SHELL = [
  './index.html',
  './offline.html',
  './app.js'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(APP_SHELL))
  );
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.map(k => (k !== CACHE_NAME && k !== NEWS_CACHE ? caches.delete(k) : null)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', event => {
  event.respondWith(
    fetch(event.request)
      .then(response => {
        if (event.request.method === 'GET') {
          const copy = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(event.request, copy));
        }
        return response;
      })
      .catch(async () => {
        const cached = await caches.match(event.request);
        if (cached) return cached;

        if (event.request.headers.get('accept')?.includes('text/html')) {
          return caches.match('./offline.html');
        }

        return new Response('', { status: 503, statusText: 'Offline' });
      })
  );
});