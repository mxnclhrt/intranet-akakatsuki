const CACHE_NAME = 'emploi-cache-v1';

const ASSETS_TO_CACHE = [
  './',
  './index.html',

  // CSS
  './src/css/style.css',
  './src/css/style-calendrier.css',
  './src/css/style-login.css',

  // HTML pages
  './src/html/calendrier.html',
  './src/html/login.html',
  './src/html/membres.html',
  './src/html/secret.html',

  // JS
  './src/js/auth.js',
  './src/js/calendrier.js',
  './src/js/login.js',

  // Images
  './src/img/Akatsuki-Logo.png',
  './src/img/Akatsuki-Logo.svg',
  './src/img/TS1.png'
];

// --- INSTALL ---
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(ASSETS_TO_CACHE))
  );
});

// --- FETCH (cache-first) ---
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
