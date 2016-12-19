self.addEventListener('install', e => {
  e.waitUntil(
    caches.open('jordanromedotcom').then(cache => {
      return cache.addAll([
        '/',
        '/index.html',
        'https://fonts.googleapis.com/css?family=Alegreya:400,900,700',
        'https://fonts.gstatic.com/s/alegreya/v7/F5BSMOSf_T8GT2wiqqpj3Ygp9Q8gbYrhqGlRav_IXfk.woff2',
        'https://fonts.gstatic.com/s/alegreya/v7/77GwhzeWPpmLIJUaM8KhxIgp9Q8gbYrhqGlRav_IXfk.woff2',
        'https://fonts.gstatic.com/s/alegreya/v7/4vRXIs1BEbKX6mQ7lGu1I3YhjbSpvc47ee6xR_80Hnw.woff2',
        '/library/fonts/monika-webfont.woff',
        '/library/build/style.css',
        '/library/build/main.js',
        '/library/images/cover-image-mobile1.jpg',
        '/library/images/work/vaultnano1.jpg',
        '/library/images/work/ace1.jpg',
        '/library/images/bgs/map-big.png',
        '/library/images/cover-image6.jpg',
        '/library/images/bgs/white-dot-border.png',
        '/library/images/bgs/social-sprite-med.png',
        '/library/images/bgs/texture1.jpg',
        '/library/images/logo-med.png',
        '/library/images/bgs/nav-gradient1.png',
        '/library/images/cover-image6.jpg',
        '/library/images/bgs/texture-dark1.jpg',
        '/library/images/bgs/gray-dot-border.png',
        '/library/images/bgs/gray-dot-border-horz.png',
        '/library/images/bgs/orange-dot-bg.png',
        '/library/images/work/eci1.jpg',
        '/library/images/work/cunyprep1.jpg',
        '/library/images/work/storyscape1.jpg',
        '/library/images/work/valam1.jpg',
        '/library/images/work/oralmalodor1.jpg',
        '/library/images/work/mmm1.jpg',
        '/library/images/work/melanierome1.jpg',
        '/library/images/work/changent1.jpg',
        '/library/images/work/oldjrome1.jpg',
        '/library/images/work/perlowandrome1.jpg',
        '/library/images/work/sethfenton1.jpg',
        '/library/images/work/pique1.jpg',
        '/library/images/work/marinacooks1.jpg',
        '/library/images/logo-small.png',
        '/library/images/bgs/social-sprite-small.png'
      ])
      .then(() => self.skipWaiting());
    })
  )
});

self.addEventListener('activate',  event => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
