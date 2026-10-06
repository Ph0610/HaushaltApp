self.addEventListener('install', (e) => {
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  e.clients.claim();
});

// Hier lag der Fehler: fetch muss die Anfrage an das Netz übergeben!
self.addEventListener('fetch', (e) => {
  e.respondWith(fetch(e.request));
});