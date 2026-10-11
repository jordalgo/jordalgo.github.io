const CACHE_NAME = 'jordanromedotcom-v3';

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      // Bypass the HTTP cache so a new install never stores stale files.
      return cache.addAll([
        '/',
        '/index.html',
        'https://fonts.googleapis.com/css?family=Alegreya:400,900,700',
        '/library/fonts/monika-webfont.woff',
        '/library/build/style.css',
        '/library/build/main.js',
        '/library/images/cover-image6.jpg',
        '/library/images/cover-image-mobile1.jpg',
        '/library/images/logo-med.png',
        '/library/images/logo-small.png',
        '/library/images/work/bpftrace.png',
        '/library/images/work/bpfvv.png',
        '/library/images/bgs/map-big.png',
        '/library/images/bgs/texture1.jpg',
        '/library/images/bgs/texture-dark1.jpg',
        '/library/images/bgs/nav-gradient1.png',
        '/library/images/bgs/nav-gradient-big.png',
        '/library/images/bgs/white-dot-border.png',
        '/library/images/bgs/gray-dot-border.png',
        '/library/images/bgs/gray-dot-border-horz.png',
        '/library/images/bgs/orange-dot-bg.png',
        '/library/images/bgs/social-sprite-small2.png',
        '/library/images/bgs/social-sprite-medium2.png',
        '/library/images/bgs/social-sprite-big2.png'
      ].map(url => new Request(url, { cache: 'reload' })))
      .then(() => self.skipWaiting());
    })
  )
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(
        keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key))
      ))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
